import queryString from 'query-string';
let rootUrl = 'https://www.fastmock.site/mock/cdfd12a7139d1ead1c961f53975c75da/api';

let myFetch = {
    get(url,queryParas){
        url = rootUrl +url
        if(queryString){
            url += "?" +queryString.stringify(queryString)
        }
        return fetch(url).
                then(res=>res.json())
    },
    post(url,body){
       return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':"application/json"
            },
            body:JSON.stringify(body)
        }).
        then(res=>res.json())
    }
}

export {myFetch};