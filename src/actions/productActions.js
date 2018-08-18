import { productService } from '../services/productService';
import { productConstants } from '../constants/productConstants';

export const productActions = {
  loadProductList
};

function loadProductList() {
  return dispatch => {
    productService.loadProductList().then(response => {
      let productList = response;
      dispatch({
        type: productConstants.LOAD_PRODUCT_LIST,
        productList
      });
    });
  };
}
