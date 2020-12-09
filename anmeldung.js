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

//var preise = [
//Name, Preis Nichtmitglied, Preis Mitglied,Startdatum, Enddatum, Vorbesteller-Datum, Preis Vorbesteller Nichtmitglied, Preis Vorbesteller Mitglied
//    ["SWEF",50.00,45.00,"Freitag, 13. März 2020","Sonntag, 15. März 2020",50.00,45.00]
//    ["Osterfreizeit",200.00,185.00,"Sonntag, 12. April 2020","Samstag, 18. April 2020",185.00,170.00]
//    ["Natur Pur",90.00,60.00,"Freitag, 3. Juli 2020","Sonntag, 5. Juli 2020",90.00,60.00]
//    ["Zeltlager 1",315.00,295.00,"Sonntag, 2. August 2020","Samstag, 15. August 2020",295.00,275.00]
//    ["Zeltlager 2",330.00,305.00,"Sonntag, 16. August 2020","Samstag, 29. August 2020",305.00,280.00]
//    ["Zeltlager Buchsee",270.00,250.00,"Sonntag, 2. August 2020","Sonntag, 16. August 2020",270.00,250.00]
//    ["Burg Derneck",245.00,235.00,"Sonntag, 30. August 2020","Sonntag, 6. September 2020",235.00,225.00]
//    ["Halloween-Freizeit",150.00,140.00,"Mittwoch, 28. Oktober 2020","Sonntag, 1. November 2020",140.00,130.00]
//    ["Silvesterfreizeit",240.00,220.00,"Montag, 28. Dezember 2020","Donnerstag, 2. Januar 2020",220.00,200.00]
//    ["Fuchsfarm International 2020",200.00,200.00,"Samstag, 30. Mai 2020","Sonntag, 7. Juni 2020","185","185"]
//    ["Trekkingtour Via Dinarica",220.00,190.00,"Samstag, 30. Mai 2020","Donnerstag, 4. Juni 2020","220","190"]
//    ["Grenzgänger 5",25.00,20.00,"Samstag, 11. Juli 2020","Samstag, 11. Juli 2020","25","20"]
//    ["Jugend + Draußen",100.00,100.00,"Freitag, 1. Mai 2020","Sonntag, 3. Mai 2020",100.00,100.00]
//    ["FuFaFe",40.00,30.00,"Freitag, 26. Juni 2020","Sonntag, 28. Juni 2020",40.00,30.00]
//    ["JuLeiCa I",60.00,30.00,"Freitag, 28. Februar 2020","Sonntag, 1. März 2020","60","30"]
//    ["JuLeiCa kompakt",120.00,80.00,"Sonntag, 5. April 2020","Donnerstag, 9. April 2020","120","80"]
//    ["Erste Hilfe-Kurs",30.00,15.00,"Freitag, 10. April 2020","Freitag, 10. April 2020","30","15"]
//    ["JuLeiCa II",60.00,30.00,"Freitag, 17. April 2020","Sonntag, 19. April 2020","60","30"]
//    ["Erlebnispädagogische Fortbildung",60.00,30.00,"Freitag, 10. Juli 2020","Sonntag, 12. Juli 2020",60.00,30.00]
//    ["Zertifizierter Jugendwanderführer",60.00,30.00,"Freitag, 24. Juli 2020","Sonntag, 26. Juli 2020",60.00,30.00]
//    ["JuLeiCa Start",60.00,30.00,"Samstag, 7. November 2020","Sonntag, 8. November 2020","60","30"]
//];
var preise = {
  SWEF: {
    Start: 'Freitag, 13. März 2020',
    Ende: 'Sonntag, 15. März 2020',
    PreisMitglied: 45,
    PreisNichtmitglied: 50,
    FrühbucherDatum: '',
    FrühbucherMitglied: 45,
    FrühbucherNichtmitglied: 50
  },
  Osterfreizeit: {
    Start: 'Sonntag, 12. April 2020',
    Ende: 'Samstag, 18. April 2020',
    PreisMitglied: 185,
    PreisNichtmitglied: 200,
    FrühbucherDatum: 'Samstag, 01. Februar 2020',
    FrühbucherMitglied: 170,
    FrühbucherNichtmitglied: 185
  },
  'Natur Pur': {
    Start: 'Freitag, 3. Juli 2020',
    Ende: 'Sonntag, 5. Juli 2020',
    PreisMitglied: 60,
    PreisNichtmitglied: 90,
    FrühbucherDatum: '',
    FrühbucherMitglied: 60,
    FrühbucherNichtmitglied: 90
  },
  'Zeltlager 1': {
    Start: 'Sonntag, 2. August 2020',
    Ende: 'Samstag, 15. August 2020',
    PreisMitglied: 295,
    PreisNichtmitglied: 315,
    FrühbucherDatum: 'Freitag, 01. Mai 2020',
    FrühbucherMitglied: 275,
    FrühbucherNichtmitglied: 295
  },
  'Zeltlager 2': {
    Start: 'Sonntag, 16. August 2020',
    Ende: 'Samstag, 29. August 2020',
    PreisMitglied: 305,
    PreisNichtmitglied: 330,
    FrühbucherDatum: 'Freitag, 01. Mai 2020',
    FrühbucherMitglied: 280,
    FrühbucherNichtmitglied: 305
  },
  'Zeltlager Buchsee': {
    Start: 'Sonntag, 2. August 2020',
    Ende: 'Sonntag, 16. August 2020',
    PreisMitglied: 250,
    PreisNichtmitglied: 270,
    FrühbucherDatum: '',
    FrühbucherMitglied: 250,
    FrühbucherNichtmitglied: 270
  },
  'Burg Derneck': {
    Start: 'Sonntag, 30. August 2020',
    Ende: 'Sonntag, 6. September 2020',
    PreisMitglied: 235,
    PreisNichtmitglied: 245,
    FrühbucherDatum: 'Freitag, 01. Mai 2020',
    FrühbucherMitglied: 225,
    FrühbucherNichtmitglied: 235
  },
  'Halloween-Freizeit': {
    Start: 'Mittwoch, 28. Oktober 2020',
    Ende: 'Sonntag, 1. November 2020',
    PreisMitglied: 140,
    PreisNichtmitglied: 150,
    FrühbucherDatum: 'Samstag, 1. August 2020',
    FrühbucherMitglied: 130,
    FrühbucherNichtmitglied: 140
  },
  Silvesterfreizeit: {
    Start: 'Montag, 28. Dezember 2020',
    Ende: 'Donnerstag, 2. Januar 2020',
    PreisMitglied: 220,
    PreisNichtmitglied: 240,
    FrühbucherDatum: '',
    FrühbucherMitglied: 200,
    FrühbucherNichtmitglied: 220
  },
  'Fuchsfarm International 2020': {
    Start: 'Samstag, 30. Mai 2020',
    Ende: 'Sonntag, 7. Juni 2020',
    PreisMitglied: 200,
    PreisNichtmitglied: 200,
    FrühbucherDatum: '',
    FrühbucherMitglied: 185,
    FrühbucherNichtmitglied: 185
  },
  'Trekkingtour Via Dinarica': {
    Start: 'Samstag, 30. Mai 2020',
    Ende: 'Donnerstag, 4. Juni 2020',
    PreisMitglied: 190,
    PreisNichtmitglied: 220,
    FrühbucherDatum: '',
    FrühbucherMitglied: 190,
    FrühbucherNichtmitglied: 220
  },
  'Grenzgänger 5': {
    Start: 'Samstag, 11. Juli 2020',
    Ende: 'Samstag, 11. Juli 2020',
    PreisMitglied: 20,
    PreisNichtmitglied: 25,
    FrühbucherDatum: '',
    FrühbucherMitglied: 20,
    FrühbucherNichtmitglied: 25
  },
  'Jugend + Draußen': {
    Start: 'Freitag, 1. Mai 2020',
    Ende: 'Sonntag, 3. Mai 2020',
    PreisMitglied: 100,
    PreisNichtmitglied: 100,
    FrühbucherDatum: '',
    FrühbucherMitglied: 100,
    FrühbucherNichtmitglied: 100
  },
  FuFaFe: {
    Start: 'Freitag, 26. Juni 2020',
    Ende: 'Sonntag, 28. Juni 2020',
    PreisMitglied: 30,
    PreisNichtmitglied: 40,
    FrühbucherDatum: '',
    FrühbucherMitglied: 30,
    FrühbucherNichtmitglied: 40
  },
  'Juleica I': {
    Start: 'Freitag, 28. Februar 2020',
    Ende: 'Sonntag, 1. März 2020',
    PreisMitglied: 30,
    PreisNichtmitglied: 60,
    FrühbucherDatum: '',
    FrühbucherMitglied: 30,
    FrühbucherNichtmitglied: 60
  },
  'Juleica kompakt': {
    Start: 'Sonntag, 5. April 2020',
    Ende: 'Donnerstag, 9. April 2020',
    PreisMitglied: 80,
    PreisNichtmitglied: 120,
    FrühbucherDatum: '',
    FrühbucherMitglied: 80,
    FrühbucherNichtmitglied: 120
  },
  'Erste Hilfe-Kurs': {
    Start: 'Freitag, 10. April 2020',
    Ende: 'Freitag, 10. April 2020',
    PreisMitglied: 15,
    PreisNichtmitglied: 30,
    FrühbucherDatum: '',
    FrühbucherMitglied: 15,
    FrühbucherNichtmitglied: 30
  },
  'Juleica II': {
    Start: 'Freitag, 17. April 2020',
    Ende: 'Sonntag, 19. April 2020',
    PreisMitglied: 30,
    PreisNichtmitglied: 60,
    FrühbucherDatum: '',
    FrühbucherMitglied: 30,
    FrühbucherNichtmitglied: 60
  },
  'Erlebnispädagogische Fortbildung': {
    Start: 'Freitag, 10. Juli 2020',
    Ende: 'Sonntag, 12. Juli 2020',
    PreisMitglied: 30,
    PreisNichtmitglied: 60,
    FrühbucherDatum: '',
    FrühbucherMitglied: 30,
    FrühbucherNichtmitglied: 60
  },
  'Zertifizierte Jugendwanderführer': {
    Start: 'Freitag, 24. Juli 2020',
    Ende: 'Sonntag, 26. Juli 2020',
    PreisMitglied: 30,
    PreisNichtmitglied: 60,
    FrühbucherDatum: '',
    FrühbucherMitglied: 30,
    FrühbucherNichtmitglied: 60
  },
  'JuLeiCa Start': {
    Start: 'Samstag, 7. November 2020',
    Ende: 'Sonntag, 8. November 2020',
    PreisMitglied: 30,
    PreisNichtmitglied: 60,
    FrühbucherDatum: '',
    FrühbucherMitglied: 30,
    FrühbucherNichtmitglied: 60
  },
  'Kochshow 2020': {
    Start: 'Freitag, 7. August 2020',
    Ende: 'Freitag, 7. August 2020',
    PreisMitglied: 0,
    PreisNichtmitglied: 0,
    FrühbucherDatum: '',
    FrühbucherMitglied: 45,
    FrühbucherNichtmitglied: 50
  },
  'FuFa on Höhlentour': {
    Start: 'Dienstag, 18. August 2020',
    Ende: 'Dienstag, 18. August 2020',
    PreisMitglied: 7,
    PreisNichtmitglied: 7,
    FrühbucherDatum: '',
    FrühbucherMitglied: 7,
    FrühbucherNichtmitglied: 7
  },
  'Albvereinsjugend Open: Minigolf': {
    Start: 'Freitag, 4. August 2020',
    Ende: 'Freitag, 4. August 2020',
    PreisMitglied: 5,
    PreisNichtmitglied: 5,
    FrühbucherDatum: 'Mittwoch, 24. Juni 2020',
    FrühbucherMitglied: 0,
    FrühbucherNichtmitglied: 0
  },
  'Das große ZOUIZ - Runde 1': {
    Start: 'Montag, 10. August 2020',
    Ende: 'Montag, 10. August 2020',
    PreisMitglied: 0,
    PreisNichtmitglied: 0,
    FrühbucherDatum: '',
    FrühbucherMitglied: 0,
    FrühbucherNichtmitglied: 0
  },
  'Das große ZOUIZ - Runde 2': {
    Start: 'Freitag, 21. August 2020',
    Ende: 'Freitag, 21. August 2020',
    PreisMitglied: 0,
    PreisNichtmitglied: 0,
    FrühbucherDatum: '',
    FrühbucherMitglied: 0,
    FrühbucherNichtmitglied: 0
  },
  'Gemeinsam online-offline unterwegs': {
    Start: 'Samstag, 8. August 2020',
    Ende: 'Samstag, 8. August 2020',
    PreisMitglied: 0,
    PreisNichtmitglied: 0,
    FrühbucherDatum: '',
    FrühbucherMitglied: 0,
    FrühbucherNichtmitglied: 0
  },
  'Jagd nach Mister X': {
    Start: 'Sonntag, 16. August 2020',
    Ende: 'Sonntag, 16. August 2020',
    PreisMitglied: 5,
    PreisNichtmitglied: 5,
    FrühbucherDatum: '',
    FrühbucherMitglied: 5,
    FrühbucherNichtmitglied: 5
  },
  'Bastel- und Grilltag': {
    Start: 'Donnerstag, 20. August 2020',
    Ende: 'Donnerstag, 20. August 2020',
    PreisMitglied: 5,
    PreisNichtmitglied: 5,
    FrühbucherDatum: '',
    FrühbucherMitglied: 5,
    FrühbucherNichtmitglied: 5
  },
  'FuFa Olympia - Dabei sein ist alles!': {
    Start: 'Freitag, 14. August 2020',
    Ende: 'Freitag, 14. August 2020',
    PreisMitglied: 7,
    PreisNichtmitglied: 7,
    FrühbucherDatum: '',
    FrühbucherMitglied: 7,
    FrühbucherNichtmitglied: 7
  },
  'Alpaka-Wanderung': {
    Start: 'Montag, 17. August 2020',
    Ende: 'Montag, 17. August 2020',
    PreisMitglied: 8,
    PreisNichtmitglied: 8,
    FrühbucherDatum: '',
    FrühbucherMitglied: 8,
    FrühbucherNichtmitglied: 8
  },
  'Nachtwanderung zur Burg Teck': {
    Start: 'Freitag, 14. August 2020',
    Ende: 'Freitag, 14. August 2020',
    PreisMitglied: 0,
    PreisNichtmitglied: 0,
    FrühbucherDatum: '',
    FrühbucherMitglied: 0,
    FrühbucherNichtmitglied: 0
  },
  'Rätselwanderung Oberboihingen 1': {
    Start: 'Donnerstag, 6. August 2020',
    Ende: 'Donnerstag, 6. August 2020',
    PreisMitglied: 3,
    PreisNichtmitglied: 3,
    FrühbucherDatum: '',
    FrühbucherMitglied: 3,
    FrühbucherNichtmitglied: 3
  },
  'Rätselwanderung Oberboihingen 2': {
    Start: 'Samstag, 15. August 2020',
    Ende: 'Samstag, 15. August 2020',
    PreisMitglied: 3,
    PreisNichtmitglied: 3,
    FrühbucherDatum: '',
    FrühbucherMitglied: 3,
    FrühbucherNichtmitglied: 3
  },
  'Bad Uracher Wasserfälle': {
    Start: 'Mittwoch, 19. August 2020',
    Ende: 'Mittwoch, 19. August 2020',
    PreisMitglied: 0,
    PreisNichtmitglied: 0,
    FrühbucherDatum: '',
    FrühbucherMitglied: 0,
    FrühbucherNichtmitglied: 0
  },
  'JuLeiCa - Online!': {
    Start: 'Montag, 20. August 2020',
    Ende: 'Dienstag, 04. August 2020',
    PreisMitglied: 10,
    PreisNichtmitglied: 20,
    FrühbucherDatum: '',
    FrühbucherMitglied: 10,
    FrühbucherNichtmitglied: 20
  },  
  'JuLeiCa I - Online': {
    Start: 'Freitag, 13. November 2020',
    Ende: 'Sonntag, 15. November 2020',
    PreisMitglied: 10,
    PreisNichtmitglied: 20,
    FrühbucherDatum: '',
    FrühbucherMitglied: 10,
    FrühbucherNichtmitglied: 20
  },
  'FuFa Light': {
    Start: 'Samstag, 22. August 2020',
    Ende: 'Samstag, 29. August 2020',
    PreisMitglied: 150,
    PreisNichtmitglied: 170,
    FrühbucherDatum: 'Donnerstag, 16. Juli 2020',
    FrühbucherMitglied: 150,
    FrühbucherNichtmitglied: 170
  },
  'Überraschungsprogramm Oberboihingen': {
    Start: 'Freitag, 7. August 2020',
    Ende: 'Freitag, 7. August 2020',
    PreisMitglied: 3,
    PreisNichtmitglied: 3,
    FrühbucherDatum: 'Donnerstag, 16. Juli 2020',
    FrühbucherMitglied: 3,
    FrühbucherNichtmitglied: 3
  },
  'Pfullinger Sagenwanderung': {
    Start: 'Montag, 31. August 2020',
    Ende: 'Montag, 31. August 2020',
    PreisMitglied: 0,
    PreisNichtmiglied: 0,
    FrühbucherDatum: 'Samstag, 5. September 2020',
    FrühbucherMitglied: 0,
    FrühbucherNichtmitglied: 0
  },
  'Badespaß und Camping': {
    Start: 'Dienstag, 01. September 2020',
    Ende: 'Mittwoch, 02. September 2020',
    PreisMitglied: 5.5,
    PreisNichtmiglied: 5.5,
    FrühbucherDatum: 'Samstag, 5. September 2020',
    FrühbucherMitglied: 5.5,
    FrühbucherNichtmitglied: 5.5
  },
  Barfußpark: {
    Start: 'Donnerstag, 03. September 2020',
    Ende: 'Donnerstag, 03. September 2020',
    PreisMitglied: 0,
    PreisNichtmiglied: 0,
    FrühbucherDatum: 'Samstag, 5. September 2020',
    FrühbucherMitglied: 0,
    FrühbucherNichtmitglied: 0
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

  // FuFa on Tour und Derneck Alternative
  var fotOuterID = 'fox-m161-dropdown3';
  var fotOuter = document.getElementById(fotOuterID);
  fotOuter.setAttribute('onchange', 'update();');

  var derneckAlternativOuterId = 'fox-m161-dropdown4';
  var derneckAlternativOuter = document.getElementById(derneckAlternativOuterId);
  derneckAlternativOuter.setAttribute('onchange', 'update();');

  var fotFreitextID = 'fox-m161-textarea2';
  var fotFreitext = document.getElementById(fotFreitextID);
  fotFreitext.setAttribute('onchange', 'update();');

  if (veranstaltung == 'FuFa on Tour') {
    fotOuter.parentNode.parentNode.style.display = 'block';
    fotFreitext.parentNode.parentNode.style.display = 'block';
  } else {
    fotOuter.parentNode.parentNode.style.display = 'none';
    fotFreitext.parentNode.parentNode.style.display = 'none';
  }

  if (veranstaltung == 'Burg Derneck Alternativprogramm') {
    derneckAlternativOuter.parentNode.parentNode.style.display = 'block';
  } else {
    derneckAlternativOuter.parentNode.parentNode.style.display = 'none';
  }

  var fotInnerID = 'fox_m161_dropdown3_chzn';
  var fot = document.getElementById(fotInnerID);
  var fotaktion = fot.childNodes[0].innerText.trim();

  var derneckAlternativInnerId = 'fox_m161_dropdown4_chzn';
  var derneckAlternativInner = document.getElementById(derneckAlternativInnerId);
  var derneckAktion = derneckAlternativInner.childNodes[0].innerText.trim();

  if (veranstaltung == 'FuFa on Tour' && fotaktion != '') {
    startdatum.value = preise[fotaktion].Start;
    enddatum.value = preise[fotaktion].Ende;
    veranstaltung = fotaktion;
  } else if (veranstaltung == 'Burg Derneck Alternativprogramm' && derneckAktion != '') {
    startdatum.value = preise[derneckAktion].Start;
    enddatum.value = preise[derneckAktion].Ende;
    veranstaltung = derneckAktion;
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

  // Anzeige: Gesetzlicher Vertreter für Minderjährige
  if (startdatum.value && geburtsdatum.value) {
    let veranstaltungsdatum = parseDate(startdatum);
    let geburtstag = parseDate(geburtsdatum);
    // js berechnet das Alter als Datum seit 01.01.1970, also ziehen wir
    // 1970 ab um das Alter in Jahren zu bestimmen.
    let alterSinceEpoch = new Date(
      veranstaltungsdatum.getTime() - geburtstag.getTime()
    );
    let alter = alterSinceEpoch.getFullYear() - 1970;

    // Column mit Gesetzlichem Vertreter wird nur bei Minderjährigen gezeigt
    if (alter >= 18) {
      document.getElementById(
        'fox-m161-textfield6-box'
      ).parentNode.style.display = 'none';
    } else {
      document.getElementById(
        'fox-m161-textfield6-box'
      ).parentNode.style.display = 'block';
    }
  } else {
    document.getElementById(
      'fox-m161-textfield6-box'
    ).parentNode.style.display = 'none';
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
