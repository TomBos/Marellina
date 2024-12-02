FROM node:18

WORKDIR /app

COPY ./frontend/package.json ./frontend/package-lock.json ./frontend/
COPY ./backend/package.json ./backend/package-lock.json ./backend/

WORKDIR /app/frontend
RUN npm install

WORKDIR /app/backend
RUN npm install

RUN npm install -g nodemon

COPY ./frontend /app/frontend
COPY ./backend /app/backend

EXPOSE 3000

CMD sh -c "cd /app/frontend && npm run build:watch & cd /app/backend && nodemon server.js"