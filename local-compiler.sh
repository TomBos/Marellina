# npm i --prefix frontend/ && npm i --prefix backend/ #-- Local instalation
rm -r frontend/dist && rm -r backend/dist
npm run build --prefix frontend/ && cp -rv frontend/dist backend/dist && npm start --prefix backend/
