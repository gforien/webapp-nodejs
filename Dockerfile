FROM node:17.3-alpine3.14
LABEL org.opencontainers.image.source="https://github.com/gforien/webapp-nodejs"

COPY package.json .
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]