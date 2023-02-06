
FROM node:16.15.0

ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN yarn

# Copy app source code
COPY . .

# Exports
EXPOSE 8080

CMD ["yarn","nodemon","index.ts"]