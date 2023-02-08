let api = `https://api.punkapi.com/v2/beers?`


export function dataAction(page){
    console.log(page)
    return async function (dispatch){
        let query_param=`page=${page}&per_page=20`
        let response = await fetch(api+query_param)
        let data = await response.json();
        dispatch({
            type:'get',
            payload:data
        })

    }
}