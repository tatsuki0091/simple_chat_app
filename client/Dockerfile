# Dockerfile for client

# Stage 1: Build react client
FROM node:16.15.0 

# Working directory be app
WORKDIR /usr/app

COPY package*.json ./

# Install dependencies
RUN yarn install

# copy local files to app folder
COPY . .

EXPOSE 3010

ENV PORT 3010

CMD ["yarn","dev:proxy"]