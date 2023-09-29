
export async function fetchCars() {
    const headers={'X-RapidAPI-Key': '1126204450mshd83ba7fa13b491dp1ebe3djsnae766e33565f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'}
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
        ,{ headers:headers,});
        const result =await  response.json();
return result;
    
}

    
