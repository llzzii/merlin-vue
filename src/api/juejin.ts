import { $http } from './http'

export function listBlog(keyword) {
    let body = { "id_type": 2, "client_type": 2608, "sort_type": 200, "cursor": "0", "limit": 20 }
    return $http.post("/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7012044157426566694", body, {
        headers: {
            "X-Agent": "Juejin/Web",
            "content-type": "application/json",
        }
    })
}