import {BASE_URL} from "./constant.js";

let tbody =document.querySelector("tbody")


async function allelementcekdim (endpoint){

    try {
        const response =await axios.get(`${BASE_URL}/${endpoint}`)
        rendertable(response.data) 
        
    
    } catch (error) {
        console.log(error)
        
    }
    }
    allelementcekdim("products");

    

function rendertable(array) {
    tbody.innerHTML= ""

    array.forEach((element) => {
        const trelem =document.createElement("tr")
        trelem.innerHTML =` 
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.price}</td>
        <td>${element.description}</td>
        <td>${element.category}</td>
        <td><img src="${element.image}"></td>
     `
    
     tbody.append(trelem)
    });
    
    
}