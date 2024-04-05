
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
    seriesGenres: [],
    moviesGenres: [],
    seriesFilter: [],
    moviesFilter: [],


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
            console.log(response); //E' un array di oggetti
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
                    // Aggiungo il prodotto al mio array solo se il media_type è tv o movie
                    //console.log(product.media_type);
                    if (product.media_type !== "person") {
                        //console.log(product.media_type);
                        this.filteredProducts.push(product)
                    }
                }
                )

            })
            //Gestisco la struttura differente dei dei due oggetti
            //Assegno al mio array vuoto i prodotti
            console.log();
            //Aggiungo attori e genere
            this.whatsTheCast(this.filteredProducts)
            this.whatsTheGenre(this.filteredProducts)
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
                    //console.log(response); //E' un array
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
    },

    whatsTheGenre(productList) {
        //Ciclo nella mia lista pronta ogni prodotto
        productList.forEach(product => {
            //Vedo se pesco giusto
            //console.log(product);
            //Aggiungo la proprietà genres al mio oggetto
            product.genres = [];
            //console.log(product);
            //Link provato su postman su cui potrò lavorare
            //https://api.themoviedb.org/3/genre/movie/list?api_key=edd145a61b3656fc84c3adb6db810c97            //Compongo la chiamata ajax "dinamicamente" (il link di movie e tv è uguale, basta cambiate la stringa)
            axios.get(this.apiURLDefault + "genre/" + product.media_type + "/list" + this.apiKey)
                .then(response => {
                    // Cerco quello che mi serve
                    //console.log(response.data.genres); //E' un array di oggetti
                    //console.log(product.genre_ids);
                    response.data.genres.forEach(element => {
                        //console.log(element);
                        if (product.genre_ids.includes(element.id)) {
                            (product.genres).push(element.name)
                        }
                    });
                })
            //console.log(product);
            //console.log(product.genres);
            /* 
                        //Avendo l'array in locale gestisco i generi senza chiamata axios
                        console.log(product.genre_ids);
                        product.genre_ids.forEach(element => {
                            console.log(element);
                            //Se è una serie tv utilizzo in generi di seriesGenres
                            if (product.media_type === "tv") {
                                //console.log(product.media_type);
                                console.log(this.seriesGenres);
                                if (this.seriesGenres.includes(element)) {
                                    console.log(element);
                                    (product.genres).push(element.name)
                                }
                            } else {
                                //Se è un film utilizzo in generi di moviesGenres
                                //console.log(product.media_type);
                                if (this.moviesGenres.includes(element)) {
                                    (product.genres).push(element.name)
                                }
                            }
                            console.log(product.genres);
            
                        }); */

        });
    },

    giveMeGenres() {
        //Ottengo Array di generi per serie TV
        axios.get(this.apiURLDefault + "genre/" + "tv" + "/list" + this.apiKey)
            .then(response => {
                // Cerco quello che mi serve
                //console.log(response.data.genres); //E' un array di oggetti
                //this.seriesGenres = response;
                //console.log(this.seriesGenres);
                response.data.genres.forEach(object => {
                    this.seriesGenres.push(object.name)
                });
                //console.log(this.seriesGenres);
            })
        //Ottengo Array di generi per MOVIE
        axios.get(this.apiURLDefault + "genre/" + "movie" + "/list" + this.apiKey)
            .then(response => {
                // Cerco quello che mi serve
                //console.log(response.data.genres); //E' un array di oggetti
                //this.seriesGenres = response;
                //console.log(this.seriesGenres);
                response.data.genres.forEach(object => {
                    this.moviesGenres.push(object.name)
                });
                // console.log(this.moviesGenres);
            })
    },

    filterByGenre() {
        //Verifico se il mio array si aggiorna
        console.log(this.moviesFilter);
        console.log(this.seriesFilter);

        this.filteredProducts.filter(element => {
            console.log(element);
            if (element.media_type==="movie") {
                console.log(element.genres);
            } else {
                console.log(element.genres);
            }
        });
    }


})