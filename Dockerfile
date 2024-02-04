FROM node:18-alpine

LABEL authors="mohamad sadegh karimi"

RUN apk add --update git

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .
RUN yarn build

USER node

EXPOSE 3000

CMD ["yarn","start"]
