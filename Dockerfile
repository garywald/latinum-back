FROM node:16.13.0-alpine

WORKDIR /user/src/app

ADD package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn start


