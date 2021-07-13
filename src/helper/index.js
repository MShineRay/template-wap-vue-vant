const router = ''
/**
 * 封装post请求
 * @param url
 * @param params
 * @returns {Promise}
 */
function post(url, params) {
  url = router + url
  return new Promise((resolve, reject) => {
    window.axios.post(url, params).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装get请求
 * @param url
 * @param params
 * @returns {Promise}
 */
function get(url, params) {
  return new Promise((resolve, reject) => {
    url = router + url
    window.axios
      .get(url, { params })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 *
 * @param method
 * @param url
 * @param params
 * @returns {Promise}
 */
export default function api({ method = 'get', url, params }) {
  if (method === 'get') {
    return get(url, params)
  } else if (method === 'post') {
    return post(url, params)
  }
}
