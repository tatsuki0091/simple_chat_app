# # Production Build

# # Stage 1: Build react client
# FROM node:16.15.0 as client

# # Working directory be app
# WORKDIR /usr/app/client/

# COPY client/package*.json ./

# # Install dependencies
# RUN yarn

# # copy local files to app folder
# COPY client/ ./
# RUN ls

# # RUN yarn
# # RUN yarn build

# # Stage 2 : Build Server

# # FROM node:14.15.3-alpine3.12
# FROM node:16.15.0 as server
# WORKDIR /usr/src/app/
# COPY --from=client /usr/app/client/build/ ./client/build/
# RUN ls

# WORKDIR /usr/src/app/server/
# COPY server/package*.json ./
# RUN npm install -qy
# COPY server/ ./

# ENV PORT 8080

# EXPOSE 8080

# CMD ["yarn", "dev"]