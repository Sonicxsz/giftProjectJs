async function postData(url, body){
    const res = await fetch(url,{
        method: 'POST',
        body:body
    });

    return await res.text();
}


async function getResource(url){
    const res = await fetch(url);

    return await res.json();
}


export {postData, getResource};