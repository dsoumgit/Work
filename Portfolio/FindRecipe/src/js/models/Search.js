import axios from 'axios';

class Search {
    constructor(query) {
        this.query = query; 
    }

    // result method to do network request using async/await 
    async getResults() {
        
        try {
            // API key for Spooncular 
            const KEY = '55cf7f78388841e6819bafcf40789c71';
            
            await axios.get(`https://api.spoonacular.com/food/products/search?query=${this.query}&apiKey=${KEY}`)
                .then(response => {
                    // store in result 
                    this.result = response.data; 
                })
                .catch(error => {
                    console.log(error);
                })   
        } catch (err) {
            console.log(err);
        }
    }
}

export default Search; 