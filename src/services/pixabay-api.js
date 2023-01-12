 const API_KEY = '31425554-bae5adc86c7a7fb3d8471083a';
const BASE_URL = 'https://pixabay.com/api/';


function fetchSearchQuery(name, page,  perPage) {
     
    return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=${perPage}&key=${API_KEY}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(
                        new Error(`Oops! Nothing found `),
                    );
                })
}

const api = {
    fetchSearchQuery,
};

export default api;