import * as t from './Type'

const initialState = {
    Darkmode:false,
    chiaPrice:{usd:0,btc:0}
}

export default function Reducer(state=initialState,action){
    switch (action.type){
        case t.changetheme:
            state.Darkmode = action.payload;
            return state;
        case t.getPrice:
            state.chiaPrice = action.payload;
            return state;
        default:
            return state;
    }
}