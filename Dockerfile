FROM node:lts-alpine AS builder
COPY . /app
WORKDIR /app
COPY package*.json /app
COPY yarn.lock /app
RUN yarn install

COPY . /app
RUN yarn build

FROM nginx:1
COPY --from=builder /app/dist/ /usr/share/nginx/html/