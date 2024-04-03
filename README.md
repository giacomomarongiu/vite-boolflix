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