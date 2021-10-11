// 每日一句

import { $http } from './http'

// https://alili.tech/data/today.json
export function getOneCode() {
  return $http.get('/txapi/everyday/index?key=f6049dae57c1bff6f3901797bb04918e')
}
