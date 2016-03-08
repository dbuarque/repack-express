
FROM node:4.2.6

MAINTAINER GETTY/IO S.A.

ENV NODE_VERSION 4.2.6
ENV NODE_ENV production

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

# Bundle app source
COPY . /src

EXPOSE  3000

CMD ["node", "/src/server/server.js"]