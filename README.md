# Foobar

Foobar is a Python library for dealing with word pluralization.

## Required
* Yarn
* Docker
* Docker Compose
* Node v16.13.0 or NVM

## Backend Installation

Go to the folder
```bash
cd backend
```

Install packages
```bash
yarn
```

Create file called ".env" following the content in ".env.example".

Initialize the database

```bash
docker-compose up -d

```

Create tables
```bash
yarn prisma migrate dev

```

Populate DB with products
```bash
yarn populate-db

```

Start the server

```bash
yarn start

```
## Frontend Installation

```bash
cd frontend
```

Install packages
```bash
yarn
```

Create file called ".env.local" following the content in ".env.example".

Build frontend
```bash
yarn build
```

Start the frontend
```bash
yarn start
```

## Contact

Matheus Lima Ribeiro - matheuslimaribeiro15@outlook.com

Github: https://github.com/mdmath15

Linkedin: https://www.linkedin.com/in/matheusribeiro15/
