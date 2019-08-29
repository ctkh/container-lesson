FROM node:10

RUN npm -g install redis

WORKDIR /usr/src/app

COPY app/app.js .

CMD ["node", "app.js"]