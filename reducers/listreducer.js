import * as types from '../actions/actiontype';
import {browserHistory} from 'react-router';
import initialstate from './listreducer';

export default function list(state = initialstate, action) {
    switch (action.type) {
        case types.ADD_LIST_SUCCESS:
            return [
                action.cat
            ]
        case types.CREATE_CAT_SUCCESS:
            console.log('hame')
//            browserHistory.push(`/cats/${action.cat.id}`)
//            return [
//                ...state.filter(cat => cat.id !== action.cat.id),
//                Object.assign({}, action.cat)
//            ]
        case types.UPDATE_CAT_SUCCESS:
            return [
                ...state.filter(cat => cat.id !== action.cat.id),
                Object.assign({}, action.cat)
            ]
        case types.DELETE_CAT_SUCCESS:
        {
            const newState = Object.assign([], state);
            const indexOfCatToDelete = state.findIndex(cat => {
                return cat.id == action.cat.id
            })
            newState.splice(indexOfCatToDelete, 1);
            browserHistory.push('/cats');
            return newState;
        }
        default:
            return state;
}
}