
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    message: 'This is a test',
    searchedString: "",
    myPromiseList: [],
    filteredProducts: [],

    searchProduct() {
        //Verifco la stringa passata
        //console.log(this.searchedString);
        this.myPromiseList.push(axios.get('https://api.themoviedb.org/3/search/movie?api_key=edd145a61b3656fc84c3adb6db810c97&language=it-IT&query=' + this.searchedString))
        this.myPromiseList.push(axios.get('https://api.themoviedb.org/3/search/tv?api_key=edd145a61b3656fc84c3adb6db810c97&language=it-IT&query=' + this.searchedString))
        //Vedo se ho tutte le promesse
        console.log(this.myPromiseList); //Array di promesse
        (Promise.all(this.myPromiseList)).then((response) => {
            //Verifico
            //console.log(response); //E' un array di oggetti
            // Verifico di nuovo
            // console.log(response[0]); //Indice 0 prendo il primo elemento
            // Per gestire l'intero array faccio un ciclo
            response.forEach(list => {
                //Verifico la struttura
                //console.log(product);
                //console.log(product.data);
                console.log(list.data.results); //E' un array di oggetti
                // Devo ciclare di nuvo
                (list.data.results).forEach((product) => {
                    // Aggiungo alla mia lista da stampare 
                    //console.log(product);
                    this.filteredProducts.push(product)
                }
                )

            })
            //Gestisco la struttura differente dei dei due oggetti
            //Assegno al mio array vuoto i prodotti
            console.log(this.filteredProducts);
        }
        ).catch(err => {
            console.error(err.message)
        })
    },


})