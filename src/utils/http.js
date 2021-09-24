/**
 *
 * @param {string} url
 * @param {string} method
 * @param {Array} data
 * @returns
 */
async function http(url, method = 'GET', data) {
  try {
    const response = await fetch(url, {
      method,
      data,
    })
    const res = await response.json;
    return res;
  } catch (error) {
    return  error
  }
}

export { http }

