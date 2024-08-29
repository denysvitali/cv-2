# Specify the base image
FROM node:lts
RUN apt-get update && apt-get install -y chromium && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install fonts-noto-color-emoji && rm -rf /var/lib/apt/lists/*

RUN mkdir /app && chown -R node:node /app
USER node
WORKDIR /app
RUN npm install puppeteer
COPY index.js /app/index.js
COPY entrypoint.sh /app/entrypoint.sh
CMD ["/app/entrypoint.sh"]