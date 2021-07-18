import * as t from './Type'

const initialState = {
    Darkmode:true
}

export default function Reducer(state=initialState,action){
    switch (action.type){
        case t.changetheme:
            state.Darkmode = action.payload;
            return state;
        default:
            return state;
    }
}