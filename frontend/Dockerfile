FROM node

WORKDIR /usr/frontend

ENV PATH /usr/frontend/node_modules/.bin:$PATH

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
