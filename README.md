# simple_chat_app-

## Build Environment

###### Frontend

Excetute the command to build Next.js Project with Typescript

```
yarn create next-app --typescript
```

Install local-ssl-proxy library to connect with SSL
Create pem file

```
mkcert localhost
```

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

Add Tailwind

```
yarn add -D tailwindcss postcss autoprefixer postcss-nested
yarn tailwindcss init -p
```

Edit

```
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
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

Create pem file

```
mkcert localhost
```

Execute the command above, and put localhost-key.pem and localhost.pem in server directory and client directory

Add source codes in index.ts

```
const key = fs.readFileSync("localhost-key.pem", "utf-8");
const cert = fs.readFileSync("localhost.pem", "utf-8");
```

Execute

```
docker compose up
```
