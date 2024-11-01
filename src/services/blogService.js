// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/blog`

async function getAllBlogs() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function createBlogPost(blogData) {
  try {
    const res = await fetch(`${BASE_URL}/newPost`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogData)
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function showBlog(blogId) {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function deleteBlog(blogId) {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export{
  getAllBlogs,
  createBlogPost,
  showBlog,
  deleteBlog,
}