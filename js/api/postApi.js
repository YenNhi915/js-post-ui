import axiosClient from './axiosClient'

const postApi = {
  getAll(params) {
    const url = '/posts'
    return axiosClient.get(url, {
      params, //do key và value giống nhau nên chỉ ghi 1,
      //nếu khác thì ghi key: value
    })
  },

  getById(id) {
    const url = `/posts/${id}`
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/posts'
    return axiosClient.post(url, data)
  },

  update(data) {
    const url = `/posts/${data.id}`
    return axiosClient.patch(url, data)
  },

  remove(id) {
    const url = `/posts/${id}`
    return axiosClient.delete(url)
  },
}

export default postApi
