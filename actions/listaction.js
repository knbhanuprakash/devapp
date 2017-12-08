import * as types from './actiontype';
import listApi from '../api/listapi';

//export function loadCatsSuccess(cats) {
//    return {type: types.LOAD_CATS_SUCCESS, cats};
//}

//export function updateCatSuccess(cat) {
//    return {type: types.UPDATE_CAT_SUCCESS, cat}
//}

export function createItem(cat) {
    return function (dispatch) {
        return listApi.addintoList(cat).then(cats => {
            dispatch({type: types.ADD_LIST_SUCCESS, cat});
        }).catch(error => {
            throw(error);
        });
    };
}
export function deleteItem(cat) {
    return function (dispatch) {
        return listApi.deleteFromList(cat).then(cats => {
            dispatch({type: types.Delete_LIST_SUCCESS, cat});
        }).catch(error => {
            throw(error);
        });
    };
}
export function updateItem(cat) {
    return function (dispatch) {
        return listApi.updateintolist(cat).then(cats => {
            dispatch({type: types.ADD_LIST_SUCCESS, cat});
        }).catch(error => {
            throw(error);
        });
    };
}

//export function deleteCatSuccess(cat) {
//    return {type: types.DELETE_CAT_SUCCESS, cat}
//}
//
export function loadlist() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {
        return listApi.getAllList().then(cats => {
            dispatch({type: types.LOAD_LIST_SUCCESS, cats});
        }).catch(error => {
            throw(error);
        });
    };
}

//export function updateCat(cat) {
//    return function (dispatch) {
//        return catApi.updateCat(cat).then(responseCat => {
//            dispatch(updateCatSuccess(responseCat));
//        }).catch(error => {
//            throw(error);
//        });
//    };
//}
//
//export function createCat(cat) {
//    return function (dispatch) {
//        return catApi.createCat(cat).then(responseCat => {
//            dispatch(createCatSuccess(responseCat));
//            return responseCat;
//        }).catch(error => {
//            throw(error);
//        });
//    };
//}
//
//export function deleteCat(cat) {
//    return function (dispatch) {
//        return catApi.deleteCat(cat).then(() => {
//            console.log(`Deleted ${cat.id}`)
//            dispatch(deleteCatSuccess(cat));
//            return;
//        }).catch(error => {
//            throw(error);
//        })
//    }
//}
//
//
