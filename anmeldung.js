<script type="text/javascript">// <![CDATA[
function parseDate(element) {
  let date = [];
  if (typeof element == 'string') {
    date = element.split(',')[1];
  } else {
    date = element.value.split(',')[1];
  }

  let day = date.split('.')[0].trim();
  let month = date.split('.')[1].trim().split(' ')[0];
  switch (month) {
    case 'Januar':
      month = 1;
      break;
    case 'Februar':
      month = 2;
      break;
    case 'März':
      month = 3;
      break;
    case 'April':
      month = 4;
      break;
    case 'Mai':
      month = 5;
      break;
    case 'Juni':
      month = 6;
      break;
    case 'Juli':
      month = 7;
      break;
    case 'August':
      month = 8;
      break;
    case 'September':
      month = 9;
      break;
    case 'Oktober':
      month = 10;
      break;
    case 'November':
      month = 11;
      break;
    case 'Dezember':
      month = 12;
      break;
  }
  let year = date.split('.')[1].trim().split(' ')[1];
  return new Date(year, month, day);
}

var preise = {
  'Beispielveranstaltung: {
    Start: 'Donnerstag, 03. September 2020',
    Ende: 'Freitag, 04. September 2020',
    PreisMitglied: 20,
    PreisNichtmiglied: 30,
    FrühbucherDatum: 'Mittwoch, 02. September 2020',
    FrühbucherMitglied: 15,
    FrühbucherNichtmitglied: 25,
  }
};

function update() {
  //Veranstaltung
  //let veranstaltungsID = document.querySelector('[data-content="Veranstaltung"]').htmlFor
  var veranstaltungsID = 'fox_m161_dropdown1_chzn';
  let veranstaltung = '';

  if (document.getElementById(veranstaltungsID)) {
    veranstaltung = document
      .getElementById(veranstaltungsID)
      .childNodes[0].innerText.trim();
  }
  document
    .getElementById(veranstaltungsID)
    .setAttribute('onchange', 'update();');
  document
    .getElementById('fox-m161-dropdown1')
    .setAttribute('onchange', 'update();');

  // Start- und Enddatum
  var startdatumID = document.querySelector('[data-content="Startdatum"]')
    .htmlFor;
  var enddatumID = document.querySelector('[data-content="Enddatum"]').htmlFor;
  let startdatum = document.getElementById(startdatumID);
  let enddatum = document.getElementById(enddatumID);
  if (veranstaltung != '' && veranstaltung != 'FuFa on Tour' && veranstaltung != 'Burg Derneck Alternativprogramm') {
    startdatum.value = preise[veranstaltung].Start;
    enddatum.value = preise[veranstaltung].Ende;

    if (parseDate(startdatum) < new Date().getTime()) {
      document.getElementById('fox-m161-board-box').innerText =
        'Diese Veranstaltung hat bereits begonnen, eine Anmeldung ist nicht mehr möglich!';
      document.getElementById('fox-m161-board-box').style.display = 'block';
      document.getElementById('fox-m161-board-box').style.color = 'red';
      alert(
        'Diese Veranstaltung hat bereits begonnen, eine Anmeldung ist nicht mehr möglich!'
      );
    } else {
      document.getElementById('fox-m161-board-box').innerText = '';
      document.getElementById('fox-m161-board-box').style.display = 'none';
      document.getElementById('fox-m161-board-box').style.color = 'black';
    }
  }

  // Versicherung
  var versicherungID = document.querySelector('[data-content="Versicherung"]')
    .htmlFor;
  var versicherung = document.getElementById(versicherungID);
  var hasVersicherung = versicherung.checked;
  versicherung.setAttribute('onchange', 'update();');

  // Mitgliedschaft

  // der gleiche Ansatz wie oben funktioniert für radio-box nicht.
  // var mitgliedID = document.querySelector('[data-content="Mitglied"]').htmlFor
  let mitglied = document.getElementById('fox-m161-radio2');
  let isMitglied = mitglied.childNodes[0].childNodes[0].childNodes[0].checked;
  mitglied.childNodes[0].childNodes[0].childNodes[0].setAttribute(
    'onchange',
    'update();'
  );
  mitglied.childNodes[1].childNodes[0].childNodes[0].setAttribute(
    'onchange',
    'update();'
  );
  var mitgliedsnummerID = 'fox-m161-textfield5';
  let mitgliedsnummer = document.getElementById(mitgliedsnummerID).parentNode
    .parentNode;

  // Mitglied werden
  var mitgliedWerden = document.getElementById('fox-m161-checkbox2-box');
  var mitgliedInfo = document.getElementById('mitgliedinfo');

  // Geburtstag
  var geburtsdatumID = document.querySelector('[data-content="Geburtsdatum"]')
    .htmlFor;
  var geburtsdatum = document.getElementById(geburtsdatumID);
  geburtsdatum.setAttribute('onchange', 'update();');

  // Kontoinhaber
  let kontoinhaberID = document.querySelector('[data-content="Kontoinhaber"]')
    .htmlFor;
  let kontoinhaber = document.getElementById(kontoinhaberID);
  let gesetzlicherVertreterIsKontoInhaber = kontoinhaber.checked;
  kontoinhaber.setAttribute('onchange', 'update();');

  let preisFeld = document.getElementById('preis');
  let angezeigterPreis = 0;

  // Altersberechnung
  let alter = null;
  if (startdatum.value && geburtsdatum.value) {
    let veranstaltungsdatum = parseDate(startdatum);
    let geburtstag = parseDate(geburtsdatum);
    // js berechnet das Alter als Datum seit 01.01.1970, also ziehen wir
    // 1970 ab um das Alter in Jahren zu bestimmen.
    let alterSinceEpoch = new Date(
      veranstaltungsdatum.getTime() - geburtstag.getTime()
    );
    alter = alterSinceEpoch.getFullYear() - 1970;
  }

  /////////////////////
  // Preisberechnung //
  /////////////////////

  if (veranstaltung != '' && preise[veranstaltung] !== undefined) {
    // Frühbucher und Mitglied?
    let fruehbucher = false;
    if (preise[veranstaltung].FrühbucherDatum) {
      fruehbucher =
        parseDate(preise[veranstaltung].FrühbucherDatum) > new Date().getTime();
    }
    if (isMitglied) {
      if (fruehbucher) {
        angezeigterPreis = preise[veranstaltung].FrühbucherMitglied;
      } else {
        angezeigterPreis = preise[veranstaltung].PreisMitglied;
      }
    } else {
      if (fruehbucher) {
        angezeigterPreis = preise[veranstaltung].FrühbucherNichtmitglied;
      } else {
        angezeigterPreis = preise[veranstaltung].PreisNichtmitglied;
      }
    }
    if (alter && veranstaltung == "Lust auf Abenteuer" && alter < 18) {
      angezeigterPreis -= 5;
    }
    // Versicherung?
    if (hasVersicherung) {
      angezeigterPreis = Math.round(angezeigterPreis * 102) / 100;
    }
  }

  // Anzeige: Preis (mit 2 Dezimalstellen)
  var formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  });
  preisFeld.innerText = formatter.format(angezeigterPreis);

  // Anzeige: Abfrage Mitgliedsnummer für Mitglieder
  if (isMitglied) {
    // Mitgliedsnummer abfragen
    mitgliedsnummer.style.display = 'block';
    mitgliedsnummer.required = true;
    // Nicht nach "Mitglied werden" fragen
    mitgliedWerden.style.display = 'none';
    mitgliedInfo.style.display = 'none';
  } else {
    // Mitgliedsnummer nicht abfragen
    mitgliedsnummer.style.display = 'none';
    mitgliedsnummer.required = false;
    // Nach "Mitglied werden" fragen
    mitgliedWerden.style.display = 'block';
    mitgliedInfo.style.display = 'block';
  }

  // Anzeige: Gesetzlicher Vertreter nur für Minderjährige
  if (alter != null && alter < 18) {
    document.getElementById('fox-m161-textfield6-box').parentNode.style.display = 'block';
  } else {
    document.getElementById('fox-m161-textfield6-box').parentNode.style.display = 'none';
  }

  // Anzeige: KontoinhaberVertreter = Kontoinhaber
  //TODO: Änderung des Textes: Mitglied == Kontoinhaber vs Gesetzl. Vertreter == Kontoinhaber
  if (gesetzlicherVertreterIsKontoInhaber) {
    document.getElementById(
      'fox-m161-textfield14-box'
    ).parentNode.parentNode.style.display = 'none';
  } else {
    document.getElementById(
      'fox-m161-textfield14-box'
    ).parentNode.parentNode.style.display = 'block';
  }

  // Anzeige: Abfrage Sonstiges nur falls Sonstiges ausgewählt
  var aufmerksamID = 'fox_m161_dropdown2_chzn';
  let aufmerksam = '';
  var sonstigesID = document.querySelector('[data-content="Sonstiges"]')
    .htmlFor;

  if (document.getElementById(aufmerksamID)) {
    aufmerksam = document
      .getElementById(aufmerksamID)
      .childNodes[0].innerText.trim();
  }

  if (aufmerksam == 'Sonstiges') {
    document.getElementById(sonstigesID).parentNode.parentNode.style.display =
      'block';
  } else {
    document.getElementById(sonstigesID).parentNode.parentNode.style.display =
      'none';
  }

  document.getElementById(aufmerksamID).setAttribute('onchange', 'update();');
  document
    .getElementById('fox-m161-dropdown2')
    .setAttribute('onchange', 'update();');
}

// update() aufrufen falls irgendetwas den Preis ändert
// TODO: Wenn jemand "Ich möchte Mitglied werden" anklickt, sollte der Preis
// günstiger werden.
// Initiales update
window.onload = update;

// Startdatum/Enddatum-Felder ausgrauen/disablen
var startdatumID = document.querySelector('[data-content="Startdatum"]')
  .htmlFor;
var enddatumID = document.querySelector('[data-content="Enddatum"]').htmlFor;
document.getElementById(startdatumID).disabled = true;
document.getElementById(enddatumID).disabled = true;
// ]]></script>
