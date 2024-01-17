# Supermarket Order Registration System

## About the Project
This project, developed as part of a technical test for Shopper.com.br, is a system designed for the registration and management of supermarket orders. Its aim is to provide an application that allows users to register orders, including details like the customer's name, delivery date, and a detailed shopping list. The system is built using Javascript, Typescript, React, Next.js, Styled-components, Express and Prysma, showcasing programming skills and system design capabilities.

## Features
- Order Registration: An interface for entering new orders, including the customer's name and delivery date.
- Shopping List Management: Adding, modifying, and removing items from the shopping list.
- Automatic Total Value Calculation: The system calculates the total value of the order in real-time as the list changes.
- Data Persistence: Order data is stored in a specifically modeled database for this system.
- Stock Integration: Each order impacts the product stock, reducing the available quantity as per demand.
- Stock Alerts: The system notifies the user if the requested quantity of a product exceeds the available stock.
- Current Stock Visualization: A feature to check the current stock of products.

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
