
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    apiURL: 'https://api.themoviedb.org/3/search/multi',
    apiURLDefault: "https://api.themoviedb.org/3/",
    apiKey: "?api_key=edd145a61b3656fc84c3adb6db810c97",
    apiLangIt: '&language=it-IT&query=',
    searchedString: "",
    myPromiseList: [],
    filteredProducts: [],


    searchProduct() {
        //Pulisco gli array
        this.filteredProducts = [];
        this.myPromiseList = [];
        //Verifco la stringa passata
        //console.log(this.searchedString);
        this.myPromiseList.push(axios.get(this.apiURL + this.apiKey + this.apiLangIt + this.searchedString))        //Vedo se ho tutte le promesse
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
                //console.log(list.data.results); //E' un array di oggetti
                // Devo ciclare di nuovo
                (list.data.results).forEach((product) => {
                    // Aggiungo alla mia lista da stampare 
                    // console.log(product);
                    this.filteredProducts.push(product)
                }
                )

            })
            //Gestisco la struttura differente dei dei due oggetti
            //Assegno al mio array vuoto i prodotti
            console.log();
            //Aggiungo gli attori
            this.whatsTheCast(this.filteredProducts)
        }
        ).catch(err => {
            console.error(err.message)
        })
    },

    whatsTheCast(productList) {
        //Ciclo nella mia lista pronta ogni prodotto
        productList.forEach(product => {
            //Vedo se pesco giusto
            //console.log(product.media_type);
            //console.log(product.id);
            //Aggiungo la proprietà cast al mio oggetto
            product.cast = [];
            //console.log(product);
            //Link provato su postman su cui potrò lavorare
            //https://api.themoviedb.org/3/movie/1179829/credits?api_key=edd145a61b3656fc84c3adb6db810c97
            //Compongo la chiamata ajax "dinamicamente" (il link di movie e tv è uguale, basta cambiate la stringa)
            axios.get(this.apiURLDefault + product.media_type + "/" + product.id + "/credits" + this.apiKey)
                .then(response => {
                    // Cerco quello che mi serve
                    console.log(response.data); //E' un array
                    // Faccio un ciclo
                    response.data.cast.forEach(person => {
                        // console.log(person.name);
                        //Aggiungo l'attore al mio array
                        (product.cast).push(person.name)
                        //console.log(product.cast);
                    });
                })
            //Verifco il nuovo oggetto
            //console.log(product);
        });
    }

})