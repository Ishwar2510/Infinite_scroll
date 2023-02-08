const intialState ={
    page:1,
    limit:10
}
export default function limitReducer(state=intialState,action){
    switch(action.type){
        case 'incr':
            return {...state,page:state.page+1
        }
        default:
            return {...state}
    }
}