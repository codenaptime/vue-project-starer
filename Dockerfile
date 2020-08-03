# base image
FROM node:12.2.0-alpine

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

RUN npm install @vue/cli@3.7.0 -g
RUN npm install

CMD ["npm", "run", "dev"]
