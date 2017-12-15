import * as types from './actiontype';
import listApi from '../api/listapi';


export function gettheproducts(cat) {
    return function (dispatch) {
        return listApi.getproducts().then(cats => {
            console.log(cats,'findprouctapi')
           // dispatch({type: types.Upload_Product_SUCCESS, cats});
        }).catch(error => {
            throw(error);
        });
    };
}