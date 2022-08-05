FROM node:14
# ENV TZ="Europe/Moscow"
ENV TZ="America/Sao_Paulo"

WORKDIR /app

COPY src /app
COPY yarn.lock /app
COPY package.json /app
COPY tsconfig.json /app
COPY tsconfig.build.json /app
COPY nest-cli.json /app
COPY migrations /app/migrations
COPY nodemon.json /app

RUN yarn


