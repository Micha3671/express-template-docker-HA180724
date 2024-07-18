# Verwende das offizielle Node.js-Image als Basis
FROM node:latest

# Setze eine Umgebungsvariable
ENV NAME="<Micha>"

# Erstelle das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und package-lock.json (falls vorhanden)
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Anwendungs-Codes
COPY . .

# Setze die Umgebungsvariable für den Port
ENV PORT 5050

# Exponiere den Port
EXPOSE 5050

# Führe den Befehl aus, um "Hallo <Mein-Name>!" auszugeben
CMD echo "Hallo $NAME!" && node index.js
