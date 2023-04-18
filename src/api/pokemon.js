export async function getAllDigimons(itemPerPage = 5){
    const response = await fetch(`https://www.digi-api.com/api/v1/digimon/?pageSize=${itemPerPage}`);
    const data = await response.json();
    return data;
}

export async function getDigimonById(id){
    const response = await fetch(`https://www.digi-api.com/api/v1/digimon/${id}`);
    const data = await response.json();
    return data;
}

export async function getDigimonByName(name){
    const response = await fetch(`https://www.digi-api.com/api/v1/digimon/${name}`);
    const data = await response.json();
    return data;
}
export async function getDigimonPageable(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
