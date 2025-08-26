FROM node:22.11.0-alpine

WORKDIR /serverApp

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3600

CMD ["node", "index.js"]