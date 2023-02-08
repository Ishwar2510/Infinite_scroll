export default function dataReducer(state=[],action){
    if(action.type==='get'){
        return [...new Set([...state,...action.payload])]
    }else{
        return [...state]
    }

}