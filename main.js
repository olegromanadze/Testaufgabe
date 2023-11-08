function holeKartenVonScanner() {
    return [
        {
            farb_nr : 1,
            angriff : 1000,
            verteidigung : 300,
            name : 'Ogeron der Zerströrer',
            herkunftsland : 'Ödland von Blorch',
        },
        {
            farb_nr : 2,
            angriff : 700,
            verteidigung : 500,
            name : 'Agrina die Drachenreiterin',
            herkunftsland : 'Ebenen von Sarbia',
        },
        {
            farb_nr : 3,
            angriff : 55,
            verteidigung : 300,
            name : 'Gerald der Schöne',
            herkunftsland : 'Hochland von Agadirien',
        },
        
    ];
}

// Objekt, das Farben durch Zahlen beschreibt
function getColors() { 
    return colorNumber = {
        1: "Grün",
        2: "Rot",
        3: "Weiß",
        4: "Schwarz",
        5: "Blau"
    };
}

// Funktion zur Auswahl der Farbe per Taste
function colorTranslation(key) {
    const currColor = getColors()[key] || null;
    return currColor;   
}

// Funktion, die ein Objekt aus allen Farben mit Kartenzählung bildet, zählt Karten nach Farbe
function ausgabe() {
    const colors = getColors();
    let cards = holeKartenVonScanner();
    let result = {};
    
    // Durch das Objekt gehen, alle Farben durchgehen
    Object.keys(colors).forEach((colorNumber) => {
        // Erstellen einer Variablen, die die Farbe als String speichert, z. B. "Grün".
        let translatedColor = colorTranslation(colorNumber);

        // Dem Objekt eine neue Eigenschaft zugewiesen, wobei der Schlüssel die Farbe und der Wert die Summe aller Karten ist
        Object.assign(result, {
            [translatedColor]: cards.filter(card => {
                return card.farb_nr == colorNumber;
            }).length
        });
    });

    return result;
}

// Funktion zum Hinzufügen von Zeilen zur Total Cards gesamt
function outputTotalCardsTable() {
    const cards = ausgabe();
    let html = '';

    for (const [key, value] of Object.entries(cards)) {
        html += "<tr>" +
            "<td>" + key + "</td>" +
            "<td>" + value + "</td>" +
            "</tr>"; 
    }

    document.getElementById("cards-data").innerHTML = html;
}

// Funktion, die Zeilen zur Tabelle All Cards hinzufügt
// Zeigt der Öffentlichkeit, welche Karten Sam auf Lager hat
function outputAllCardsTable() {
    const cards = holeKartenVonScanner();
    let html = '';

    holeKartenVonScanner().forEach(card => {
        html += "<tr>" +
            "<td>" + colorTranslation(card.farb_nr) + "</td>" +
            "<td>" + card.angriff + "</td>" +
            "<td>" + card.verteidigung + "</td>" +
            "<td>" + card.name + "</td>" +
            "<td>" + card.herkunftsland + "</td>" +
            "</tr>"; 
    })

    document.getElementById("all-cards-data").innerHTML = html;
}   

outputTotalCardsTable();
outputAllCardsTable();