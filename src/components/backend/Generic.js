import { useState, useEffect } from "react";

// TODO: delete - keeping for reference
export const useData = (url) => {
    const [state, setState] = useState();
  
    useEffect(() => {
        const dataFetch = async () => {
            await fetch(url, {
                method: 'get',
                dataType: 'json'
            })
            .then(response => { return response.json(); })
            .then(responseData => { console.log(responseData); return responseData; })
            .then(data => { setState(data); })
            .catch(error => { console.error(error); });

            console.log(url);
        };
  
        dataFetch();
    }, [url]);
  
    return { data: state };
};
// ENDTODO

export const Get = async (url) => {
    return fetch(url, {
        method: 'get',
        dataType: 'json'
    })
    .then(response => { return response.json(); })
    .catch(error => { console.error(error); });
}

// export const Get = (url) => {
//     const get = async() => {
//         await fetch(url, {
//             method: 'get',
//             dataType: 'json'
//         })
//         .then(response => { return response.json(); })
//         .catch(error => { console.error(error); });
//     }

//     return get();

//     // return fetch(url, {
//     //     method: 'get',
//     //     dataType: 'json'
//     // })
//     // .then(response => { return response.json(); })
//     // .catch(error => { console.error(error); });
// }