import * as actionTypes from "./actionTypes";

export function getProductSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { action: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { action: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(), // datayı burada yolluyoruz
  })
    .then(handleResponse)
    .catch(handleError); // eğer id gönderilmişse güncelle eğer id gönderilmediyse güncellemene gerek yok boş devam et
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductSuccess(result)));
  };
}
