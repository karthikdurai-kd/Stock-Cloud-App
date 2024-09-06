# Inventory Management System

## Overview

The Inventory Management System is a full-stack application designed to provide a comprehensive dashboard for managing products, sales, expenses, and customer information in real-time. Built with Next.js on the frontend, Node.js with ExpressJS on the backend, and PostgreSQL as the database, it leverages AWS for deployment and scaling.

## Features

- **Comprehensive Dashboard**: Detailed information on popular products, sales summary, purchase summary, expense summary, customer & expenses, dues & pending orders, and sales & discounts.
- **Real-Time Product Updates**: Add new products and get real-time updates across the app.
- **User Management**: Display user information for users interacting with the app.
- **Inventory List Management**: Easily view and manage product inventory in real-time.
- **Sales & Expense Tracking**: Summarize sales, purchases, and expenses to give insights into profit margins.

## Tech Stack

### Frontend

- **Next.js**: Used for building the user interface.
- **Redux Toolkit**: Manages application state.
- **RTK Query**: Facilitates API interaction.
- **TailwindCSS**: Provides styling for the application.
- **Recharts**: Used for displaying charts.
- **MaterialUI**: Provides components for displaying tables.

### Backend

- **Node.js** with **ExpressJS**: Framework used for the backend.
- **Prisma**: ORM for interacting with the PostgreSQL database.
- **PostgreSQL**: Database used for storing data.

### Deployment (AWS)

- **AWS EC2**: Backend hosted using EC2 instances
- **AWS RDS**: PostgreSQL database hosted using Amazon RDS
- **AWS Amplify**: Frontend hosted on AWS Amplify
- **AWS S3**: Image storage using Amazon S3
- **AWS API Gateway**: Facilitates interaction between the frontend and backend services

## Getting Started

### Prerequisites

- **Node.js** (version X.X.X or higher)
- **PostgreSQL** (version X.X or higher)
- **AWS Account** (for deployment)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/karthikdurai-kd/Stock-Cloud-App.git
   cd Stock-Cloud-App

   ```

2. **Install dependencies**:

   ```bash
   npm install

   ```

3. **Set up the database (PostgreSQL) using Prisma:**:

   ```bash
   npx prisma migrate dev

   ```

4. **Start client**:

   ```bash
   cd client
   npm run dev

   ```

5. **Start server**:
   ```bash
   cd server
   npm run dev
   ```

### Deployment

#### Backend

- **AWS EC2**: The backend is hosted using EC2 instances.
- **AWS RDS**: The PostgreSQL database is hosted using Amazon RDS.

#### Frontend

- **AWS Amplify**: The frontend is hosted using AWS Amplify.

#### Image Storage

- **AWS S3**: Product images uploaded through the app are stored in Amazon S3.

#### API Gateway

- **AWS API Gateway**: Interaction between the frontend and backend is managed via AWS API Gateway.
