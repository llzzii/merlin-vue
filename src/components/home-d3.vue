<template>
    <div id="canvasWrap">
        <canvas id="canvasFrame"></canvas>
    </div>
</template>

<script setup lang="ts">
import { Color, DirectionalLight, Fog, FontLoader, Group, Mesh, MeshBasicMaterial, MeshPhongMaterial, PlaneGeometry, PointLight, PointsMaterial, TextGeometry, TextureLoader, Vector3 } from "three";
import { onMounted, ref } from "vue";
import ThreeTool from "@/utils/ThreeTool";
import { getOneCode } from "@/api/oneCode";
import { AxiosResponse } from "axios";

let canvas = ref(null)
let container = ref(null)
let threeTool = ref(null)
let textObj = ref(null)
let group = new Group();
let hover = 90;
let height = 20;
let size = 30;
let mirror = true;
const init = () => {
    canvas = document.getElementById("canvasFrame") as HTMLCanvasElement;
    container = document.getElementById("canvasWrap") as HTMLElement;
    threeTool = new ThreeTool({
        canvas: canvas,
        container: container,
        mode: "dev",

    });
    const plane = new Mesh(
        new PlaneGeometry(10000, 10000),
        new MeshBasicMaterial({
            color: 0xffffff,
            opacity: 0.5,
            transparent: true,
        })
    );
    plane.position.y = 0;
    plane.rotation.x = -Math.PI / 2;

    group = new Group();
    group.position.y = 0;
    const loader = new FontLoader();
    loader.load("/src/assets/models/YouYuan_Regular.json", function (response) {
        createText(response, textObj.content + "\n           " + textObj.note);
    });
    initTool();
    threeTool.scene.add(group);
    // threeTool.scene.add(plane); // 点对象添加到场景中
    threeTool.continuousRender((time) => {
        group.rotation.x = time
        // group.rotation.y = time
        // group.rotation.z = time
        threeTool.controls.update();
    });

}
const createText = (font, text) => {
    const textGeo = new TextGeometry(text, {
        font,
        size: size,
        height: height,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5,
    });

    textGeo.computeBoundingBox();

    const centerOffset =
        -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);
    const textureLoader = new TextureLoader();
    // 解决跨域问题
    textureLoader.crossOrigin = "";
    const mapDot = textureLoader.load("/src/assets/models/gradient.png");
    let material = new PointsMaterial({
        size: 3,
        sizeAttenuation: true,
        color: 0xdab710,
        transparent: true,
        opacity: 1,
        map: mapDot,
    }); // 材质对象
    const materials = [
        new MeshPhongMaterial({ color: 0xdab710, flatShading: true }), // front
        new MeshPhongMaterial({ color: 0xdab710 }), // side
    ];
    const textMesh1 = new Mesh(textGeo, materials);
    textMesh1.position.x = centerOffset;
    // textMesh1.position.x = 100;
    textMesh1.position.y = hover;
    textMesh1.position.z = 0;

    textMesh1.rotation.x = 0;
    textMesh1.rotation.y = Math.PI * 2;

    group.add(textMesh1);

    if (mirror) {
        const textMesh2 = new Mesh(textGeo, materials);

        textMesh2.position.x = centerOffset;
        textMesh2.position.y = -hover;
        textMesh2.position.z = height;

        textMesh2.rotation.x = Math.PI;
        textMesh2.rotation.y = Math.PI * 2;

        group.add(textMesh2);
    }
}
const initTool = () => {
    // threeTool.scene.background = new Color(0x000000);
    // threeTool.scene.fog = new Fog(0x000000, 250, 1400);
    // threeTool.scene.
    // LIGHTS
    threeTool.renderer.setClearColor(0xffffff, 0)
    const dirLight = new DirectionalLight(0xffffff, 0.125);
    dirLight.position.set(0, 0, 1).normalize();
    threeTool.scene.add(dirLight);

    const pointLight = new PointLight(0xffffff, 1.5);
    pointLight.position.set(0, 100, 90);
    threeTool.scene.add(pointLight);
    threeTool.camera.position.set(0, 40, 700);
    threeTool.camera.fov = 30;
    threeTool.camera.near = 1;
    threeTool.camera.far = 1500;
    const cameraTarget = new Vector3(0, 150, 0);
    threeTool.camera.lookAt(cameraTarget);

}
onMounted(() => {
    if (sessionStorage.getItem("textObj")) {
        textObj = JSON.parse(sessionStorage.getItem("textObj"))
    } else {
        getOneCode().then((res) => {
            let data: { code: string; msg: string; newslist: Array<any> } = res.data;
            textObj = { note: data?.newslist[0]?.note, content: data?.newslist[0]?.content }
            sessionStorage.setItem("textObj", JSON.stringify(textObj))
        }).catch(e => {
            textObj = { note: "merlin的Home", content: "merlin的Home" }
        })
    }

    init()
})
</script>

<style lang="less" scoped>
canvas {
    width: 100%;
    height: 250px;
}

#canvasWrap {
    position: relative;
}
</style>