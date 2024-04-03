
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    message: 'This is a test',
    searchedString: "",
    filteredProducts:[],
    
    searchProduct() {
        //Verifco la stringa passata
        console.log(this.searchedString);
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=edd145a61b3656fc84c3adb6db810c97&language=it-IT&query=' + this.searchedString)
            .then((response) => {
                //Verifico
                console.log(response);
                // Verifico di nuovo
                console.log(response.data.results);
                //Assegno al mio array vuoto i prodotti
                this.filteredProducts = [...response.data.results]
                console.log(this.filteredProducts);
            }
            ).catch(err => {
                console.error(err.message)
            })
    },
})