import * as types from './actiontype';
import listApi from '../api/listapi';
import history from '../history';
export function loginuser(cat) {
    return function (dispatch) {
        return listApi.redirectToLogin(cat).then(cats => {
            console.log(cats, 'findprouctapi')
            if (cats.success) {
                localStorage.setItem('islogin', true);
                window.location.href = "#/dashboard";
            }
        }).catch(error => {
            throw(error);
        });
    };
}