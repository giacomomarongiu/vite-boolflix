# Descrizione:
LEGGERE e RILEGGERE la brief di progetto in allegato per comprendere e svolgere le 
richieste del cliente. Il progetto va realizzato seguendo l'ordine delle miletone.
Per oggi da completare almeno le miletones 0 e 1.
La consegna é prevista per Venerdi ore 17:30.

## Milestone 0:
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni
precedenti.

## Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo
scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
film trovato:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto

## Milestone 2:
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
nazione ritornata dall’API (le flag non ci sono in FontAwesome).
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando
attenti ad avere alla fine dei valori simili. Le serie e i film hanno campi nel JSON di
risposta diversi, simili ma non sempre identici

## Milestone 3:
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie
al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo
perché poi potremo generare da quella porzione di URL tante dimensioni diverse.
Dovremo prendere quindi l’URL base delle immagini di TMDB:
https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare
(troviamo tutte le dimensioni possibili a questo link:
https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la
parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
_____________________________________________________________
Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da
permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5,
lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze
piene (o mezze vuote :P)

## Milestone 4:
Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp,
creando un layout completo simil-Netflix:
● Un header che contiene logo e search bar
● Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma
di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio
la poster_path con w342)
● Andando con il mouse sopra una card (on hover), appaiono le informazioni
aggiuntive già prese nei punti precedenti più la overview
Mockup:



### Steps
- Creo una componente header
- Collego state e componenti al componente genitore
- Creare una searchbar con un bottone e un input
- Al click chiamo una funzione searchMovie
- Creo nello state una funzione searchMovie che:
-- Fa una chiamata API (Importo axios)
-- SE la stringa inserita coincide con qualche file stampo 1/2/3/4

- Creo una nuova componente AppMain e stampo i risultati lì
- Creo un array di oggetti che sia strutturato per riconoscere le bandierine
- Creo una funzione che a ogni abbreviazione di lingua (es. de,it ecc) faccia coincidere una bandiera
- Gestisco il caso in cui non ci sia una lingua

-Creo un array di "Promesse"
-Pusho le promesse nel mio array
-Gestisco l'array con Promise.all
-Gestisco la struttura che mi rende
-Gestisco le differenze tra Serie tv e Film nella mia card