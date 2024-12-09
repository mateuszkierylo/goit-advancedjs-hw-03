
const API_KEY = "47417442-8de2b86208b2757b72fdcd518";

export function fetchImages(searchQuery) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"

    })

    return fetch(`https://pixabay.com/api/?${params}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            return data.hits;
        })
        .catch(error => {
            console.log(error);  
            return [];  
        });
}