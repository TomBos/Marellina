FROM node:18
WORKDIR /app/frontend
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

FROM node:18
WORKDIR /app/backend
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install
COPY ./backend ./

EXPOSE 3000

CMD [ "npm", "start" ]
