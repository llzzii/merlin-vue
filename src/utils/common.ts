
// 生成随机数
export function getRandom() {
    return (65536 * (1 + Math.random())).toString(8).substring(1);
}
// 生成guid 作为流水号
export function guid() {
    return (
        getRandom() +
        "-" +
        getRandom() +
        "-" +
        getRandom() +
        "-" +
        getRandom() +
        "-" +
        getRandom()
    );
}


