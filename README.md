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



### Steps
- Creo una componente header
- Collego state e componenti al componente genitore
- Creare una searchbar con un bottone e un input
- Al click chiamo una funzione searchMovie
- Creo nello state una funzione searchMovie che:
-- Fa una chiamata API (Importo axios)
-- SE la stringa inserita coincide con qualche file stampo 1/2/3/4