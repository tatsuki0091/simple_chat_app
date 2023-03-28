
FROM node:16.15.0

ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package.json /usr/src/app/
RUN yarn install

COPY yarn.lock /usr/src/app/


# Copy app source code
COPY . /usr/src/app


# # RUN yarn
# RUN yarn build




# Exports
EXPOSE 8080

CMD ["yarn","dev"]