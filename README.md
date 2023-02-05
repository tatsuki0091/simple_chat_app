# simple_chat_app-

## Build Environment

###### Frontend

Excetute the command to build Next.js Project with Typescript

```
yarn create next-app --typescript
```

Install local-ssl-proxy library to connect with SSL

```
yarn add local-ssl-proxy
```

Edit client/package.json

```
 "scripts": {
    "dev": "next dev",
-> This part "dev:proxy": "next dev -p 3001 & local-ssl-proxy --key localhost-key.pem --cert localhost.pem --source 3010 --target 3001",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

###### Backend

Excetute the command to build Expresss Project with Typescript

```
yarn init -y
yarn add express
yarn add -D typescript @types/node ts-node @types/express
npx tsc --init
touch index.ts
```
