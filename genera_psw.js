/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito19 */

//DICHIARAZIONE VARIABILI BASE
//richiesta nome
var nomeUtente = prompt("Heilà! Pronto per una magia? Inserisci qui il tuo nome...")

//richiesta cognome
var cognomeUtente = prompt ("...e ora il tuo cognome")

//richiesta colore
var colorePrefe = prompt("mmh...colore preferito?")

//DICHIARAZIONE VARIABILI COMPLESSE
var titolo = "Et voilà! Ecco la tua password supersicurissima:"
var passwordGenerata = nomeUtente + cognomeUtente + colorePrefe + 19

//ASSOCIAZIONE VARIABILI A ELEMENTI DEL HTML
//titolo
document.getElementById('etvoila').innerHTML = titolo

//password
document.getElementById('password').innerHTML = passwordGenerata
