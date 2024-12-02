FROM node:18

WORKDIR /app

COPY ./frontend/package.json ./frontend/
COPY ./backend/package.json ./backend/

WORKDIR /app/frontend
RUN npm i

WORKDIR /app/backend
RUN npm i

COPY ./frontend /app/frontend
COPY ./backend /app/backend

EXPOSE 3000

CMD sh -c "cd /app/frontend && npm run build:watch & cd /app/backend && nodemon server.js"