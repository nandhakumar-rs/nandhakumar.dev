FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

CMD ["yarn", "dev"]