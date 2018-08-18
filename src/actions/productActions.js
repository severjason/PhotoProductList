import { productService } from '../services/productService';
import { productConstants } from '../constants/productConstants';

export const productActions = {
  loadProductList,
  loadCurrentPage
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

function loadCurrentPage(pageNumber = 1, pageSize = 24, productList) {
  return dispatch => {
    let currentPageList = productList.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );

    console.log('00001=', productList);

    console.log('00002=', currentPageList);

    dispatch({
      type: productConstants.LOAD_CURRENT_PAGE,
      productList: currentPageList
    });
  };
}
