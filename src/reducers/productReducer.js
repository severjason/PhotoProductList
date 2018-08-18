import { productConstants } from '../constants/productConstants';

const initialState = {
  loading: true,
  productCount: '',
  productList: []
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PRODUCT_COUNT':
      return {
        ...state,
        productCount: action.productCount,
        loading: false
      };

    case productConstants.LOAD_PRODUCT_LIST:
      return {
        ...state,
        productList: action.productList,
        loading: false
      };

    default:
      return state;
  }
}
