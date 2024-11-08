// Esercizio 1: Creare un div con testo e aggiungerlo
function esercizio1() {
    // Crea un nuovo elemento div
    const div = document.createElement('div');
    
    // Imposta il contenuto di testo del div
    div.textContent = 'Questo è un nuovo div';
    
    // Aggiunge il div creato all'elemento con id 'es1'
    document.getElementById('es1').appendChild(div);
}

// Esercizio 2: Creare un paragrafo e aggiungerlo
function esercizio2() {
    // Crea un nuovo elemento paragrafo
    const p = document.createElement('p');
    
    // Imposta il contenuto di testo del paragrafo
    p.textContent = 'Questo è un nuovo paragrafo';
    
    // Aggiunge il paragrafo creato all'elemento con id 'es2'
    document.getElementById('es2').appendChild(p);
}

// Esercizio 3: Creare un'immagine con attributi src e alt
function esercizio3() {
    // Crea un nuovo elemento immagine
    const img = document.createElement('img');
    
    // Imposta l'attributo 'src' con il percorso dell'immagine
    img.src = 'immagine/immagine.jpg'; // Sostituisci con il percorso corretto dell'immagine
    
    // Imposta l'attributo 'alt' per la descrizione dell'immagine
    img.alt = 'Descrizione della tua immagine';
    
    // Aggiunge l'immagine creata all'elemento con id 'es3'
    document.getElementById('es3').appendChild(img);
}

// Esercizio 4: Creare una lista non ordinata e aggiungere elementi 'li'
function esercizio4() {
    // Crea un nuovo elemento lista non ordinata (ul)
    const ul = document.createElement('ul');
    
    // Definisce un array con gli elementi da aggiungere alla lista
    const items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
    
    // Itera attraverso ogni elemento dell'array
    items.forEach(item => {
        // Crea un nuovo elemento lista (li)
        const li = document.createElement('li');
        
        // Imposta il contenuto di testo dell'elemento lista
        li.textContent = item;
        
        // Aggiunge l'elemento lista creato alla lista non ordinata
        ul.appendChild(li);
    });
    
    // Aggiunge la lista non ordinata all'elemento con id 'es4'
    document.getElementById('es4').appendChild(ul);
}

// Esercizio 5: Creare un link e impostare href
function esercizio5() {
    // Crea un nuovo elemento link (a)
    const a = document.createElement('a');
    
    // Imposta l'attributo 'href' con l'URL desiderato
    a.href = 'https://www.example.com'; // Sostituisci con l'URL corretto
    
    // Imposta il contenuto di testo del link
    a.textContent = 'Vai a Example.com';
    
    // Aggiunge il link creato all'elemento con id 'es5'
    document.getElementById('es5').appendChild(a);
}

// Esercizio 6: Creare un campo input e aggiungerlo al modulo
function esercizio6() {
    // Crea un nuovo elemento input
    const input = document.createElement('input');
    
    // Imposta il tipo di input come testo
    input.type = 'text';
    
    // Aggiunge un placeholder all'input
    input.placeholder = 'Inserisci testo';
    
    // Aggiunge l'input creato al modulo con id 'modulo'
    document.getElementById('modulo').appendChild(input);
}

// Esercizio 7: Creare un pulsante con un gestore eventi per il click
function esercizio7() {
    // Crea un nuovo elemento pulsante
    const button = document.createElement('button');
    
    // Imposta il testo del pulsante
    button.textContent = 'Cliccami';
    
    // Definisce il comportamento da eseguire quando il pulsante viene cliccato
    button.onclick = function() {
        alert('Bottone cliccato!'); // Mostra un avviso quando il pulsante viene cliccato
    };
    
    // Aggiunge il pulsante creato all'elemento con id 'es7'
    document.getElementById('es7').appendChild(button);
}

// Esercizio 8: Creare una tabella con r righe e c colonne
function esercizio8() {
    const r = 3; // numero di righe
    const c = 4; // numero di colonne
    
    // Crea un nuovo elemento tabella
    const table = document.createElement('table');
    
    // Itera attraverso il numero di righe desiderato
    for (let i = 0; i < r; i++) {
        // Crea un nuovo elemento riga (tr)
        const tr = document.createElement('tr');
        
        // Itera attraverso il numero di colonne desiderato
        for (let j = 0; j < c; j++) {
            // Crea un nuovo elemento cella (td)
            const td = document.createElement('td');
            
            // Imposta il contenuto di testo della cella
            td.textContent = `Riga ${i + 1}, Colonna ${j + 1}`; // Indica la posizione della cella
            
            // Aggiunge la cella creata alla riga
            tr.appendChild(td);
        }
        
        // Aggiunge la riga creata alla tabella
        table.appendChild(tr);
    }
    
    // Aggiunge la tabella creata all'elemento con id 'es8'
    document.getElementById('es8').appendChild(table);
}

function esercizio9() {
    // Creazione dell'elemento select
    const select = document.createElement('select');

    // Creazione delle opzioni
    const opzioni = ['Opzione 1', 'Opzione 2', 'Opzione 3'];
    opzioni.forEach(opzione => {
        const option = document.createElement('option');
        option.value = opzione.toLowerCase().replace(" ", "_");
        option.textContent = opzione;
        select.appendChild(option);
    });

    // Aggiungere il select al div con id 'contenitore-select'
    document.getElementById('es9').appendChild(select);
}

// Funzione per Esercizio 10: Creare un textarea con valore predefinito
function esercizio10() {
    // Creazione dell'elemento textarea
    const textarea = document.createElement('textarea');

    // Impostazione del valore predefinito
    textarea.value = 'Questo è un valore predefinito.\nModifica il testo qui.';

    // Aggiungere il textarea al div con id 'contenitore-textarea'
    document.getElementById('es10').appendChild(textarea);
}

// Esercizio 11: Cambiare il colore di sfondo di un elemento
function cambiaColoreSfondo() {
    const elemento = document.getElementById('elemento');
    elemento.style.backgroundColor = 'lightcoral'; // Cambia il colore di sfondo
}

// Esercizio 12: Cambiare il colore del testo di un elemento
function cambiaColoreTesto() {
    const elemento = document.getElementById('testo');
    elemento.style.color = 'green'; // Cambia il colore del testo
}

// Esercizio 13: Cambiare la larghezza e l’altezza di un elemento
function cambiaDimensioni() {
    const elemento = document.getElementById('dimensione');
    elemento.style.width = '200px'; // Cambia la larghezza
    elemento.style.height = '200px'; // Cambia l'altezza
}

// Esercizio 14: Cambiare il font-size di un elemento
function cambiaFontSize() {
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.style.fontSize = '30px'; // Cambia il font-size
}

// Esercizio 15: Cambiare il margine interno (padding) di un elemento
function cambiaPadding() {
    const elemento = document.getElementById('contenitore');
    elemento.style.padding = '30px'; // Cambia il padding
}

// Esercizio 16: Cambiare il colore di sfondo di tutti gli elementi con una determinata classe
function cambiaSfondoClasse() {
    const elementi = document.querySelectorAll('.box');
    elementi.forEach((elemento) => {
        elemento.style.backgroundColor = 'lightyellow'; // Cambia il colore di sfondo per tutti gli elementi con classe "box"
    });
}

// Esercizio 17: Cambiare il font-size e il colore del testo di tutti gli elementi di un tag specifico
function modificaTag() {
    const paragrafi = document.querySelectorAll('p');
    paragrafi.forEach((paragrafo) => {
        paragrafo.style.fontSize = '20px'; // Cambia il font-size di tutti i paragrafi
        paragrafo.style.color = 'purple';  // Cambia il colore del testo di tutti i paragrafi
    });
}

// Esercizio 18: Ottenere un elemento per ID e stamparne il contenuto
function stampaContenuto() {
    const elemento = document.getElementById('elemento1');
    alert('Contenuto dell\'elemento con ID "elemento1": ' + elemento.textContent);
}

// Esercizio 19: Ottenere il valore di un input di testo
function ottieniValoreInput() {
    const input = document.getElementById('inputTesto');
    alert('Valore dell\'input: ' + input.value); // Ottieni il valore dell'input di testo
}

// Esercizio 20: Ottenere il valore selezionato di un elemento select
function ottieniValoreSelect() {
    const select = document.getElementById('selezione');
    alert('Valore selezionato: ' + select.value); // Ottieni il valore selezionato dal menu a tendina
}

// Esercizio 21: Ottenere il valore di un elemento checkbox
function ottieniValoreCheckbox() {
    const checkbox = document.getElementById('checkbox1');
    alert('Checkbox selezionato: ' + checkbox.checked); // Ottieni se la checkbox è selezionata
}

// Esercizio 22: Ottenere il valore di un elemento radio selezionato
function ottieniValoreRadio() {
    const radioButtons = document.querySelectorAll('input[name="opzione"]:checked');
    if (radioButtons.length > 0) {
        alert('Opzione selezionata: ' + radioButtons[0].value); // Ottieni il valore del radio selezionato
    } else {
        alert('Nessuna opzione selezionata');
    }
}

// Esercizio 23: Ottenere tutti gli elementi figli di un elemento padre e aggiungere loro una classe
function aggiungiClasse() {
    const padre = document.getElementById('padre');
    const figli = padre.getElementsByTagName('p');
    for (let figlio of figli) {
        figlio.classList.add('figlioClasse'); // Aggiungi una classe a tutti i figli
    }
}

// Esercizio 24: Ottenere il primo elemento figlio di un elemento padre e modificare il suo testo
function modificaPrimoFiglio() {
    const padre2 = document.getElementById('padre2');
    const primoFiglio = padre2.querySelector('p');
    if (primoFiglio) {
        primoFiglio.textContent = 'Testo Modificato del Primo Figlio'; // Modifica il testo del primo figlio
    }
}

// Esercizio 25: Ottenere tutti gli elementi che hanno una classe specifica all'interno di un elemento e nasconderli
function nascondiElementi() {
    const elementiNascondi = document.querySelectorAll('#padre3 .nascondi');
    elementiNascondi.forEach((elemento) => {
        elemento.style.display = 'none'; // Nascondi tutti gli elementi con la classe "nascondi"
    });
}


