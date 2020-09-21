FROM node:12

ENV NODE_ENV=development
ADD . /app
WORKDIR /app

RUN npm ci

WORKDIR /app/client
RUN npm ci
ARG SWRTC_API_KEY
RUN npm run build:app

ENV NODE_ENV=production

EXPOSE 5000

WORKDIR /app

CMD ["npm", "start"]
