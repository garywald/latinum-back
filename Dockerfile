FROM node:16.13.0-alpine

ENV PORT=8080

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD yarn start
