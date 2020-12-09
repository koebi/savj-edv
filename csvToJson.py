import csv
import json

#TODO: Dateinamen als Parameter übergeben, testen dass csv und json gegeben, ansonsten "Usage"-hint ausgeben
csvFilePath = "daten_anmeldung.csv"
jsonFilePath = "daten_anmeldung.json"

daten = {}

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for row in csvReader:
        veranstaltung = row['Veranstaltung']

        daten[veranstaltung] = {
            "Start":row['Startdatum'],
            "Ende":row['Enddatum'],
            "PreisMitglied":int(float(row['SB Mitglied'])),
            "PreisNichtmitglied":int(float(row['SB Nichtmitglied'])),
            "FrühbucherDatum":row['FB Datum'],
            "FrühbucherMitglied":int(float(row['FB Mitglied'])),
            "FrühbucherNichtmitglied":int(float(row['FB Nichtmitglied'])),
        }

with open(jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(daten, indent=4, ensure_ascii=False))
