import Axios from 'axios'

const APP_URL = 'https://rimac-front-end-challenge.netlify.app/api';

export function get(endpoint = null, fn) {

    if(endpoint === null) return 

    Axios.get(APP_URL+endpoint, {
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
    .then(r => fn(r.status, r.data))
    .catch(er => {
        if(typeof er.response === 'undefined') return fn(500, {error: 'Error de conexión'})
        return fn(er.response.status, er.response)
    })

}


export function validateInput(string){
        let expression = '[0-9]+$'
        const pattern = new RegExp(expression)
        return pattern.test(string) === true ? true : false
}  

export function getAge(string){
    const today = new Date();
    const birthDate = new Date(string);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

export function discountPrice(price) {
    let result = price * 0.95;
    return result;
}


export function boldText(string){
    let tag = ` `;
    let words = string.split(" ");
    for(let i=0;i<words.length;i++){
        tag = tag + words[i]+ ` `;
    }
    tag = tag + ` `;
    return tag;
}