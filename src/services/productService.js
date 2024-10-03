// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/products`

async function getAllProducts() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function createProduct(prodoctFormData) {
  try {
    const res = await fetch(`${BASE_URL}/newProduct`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prodoctFormData)
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export{
  getAllProducts,
  createProduct,
}