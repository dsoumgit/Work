//import initialState from './initialState';

export const SET_DATA = 'DATA/SET_DATA';

export default (state = [], action) => {
    switch(action.type) {
        case SET_DATA: 
            return action.payload;
        //    case CSV_DATA:
       //     return action.payload;
        default:
            return state;
    }
}