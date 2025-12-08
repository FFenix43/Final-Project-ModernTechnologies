#Final-Project-ModernTechnologies
##Customer Churn Prediction Dashboard
###Project Overview

For my final project, I built a Customer Churn Prediction Dashboard — an end-to-end web application that helps small and medium-sized businesses identify customers who are at risk of leaving. Customer churn directly impacts revenue, and many organizations struggle to detect customer behavior early enough to act on it.

This application solves that problem by using a simple AI model to predict the likelihood of churn and by visualizing customer insights through an intuitive dashboard interface.

##The Target

This application is designed for:

Business Analysts, who need actionable insights into customer behavior.

Marketing Professionals, who want to design targeted retention campaigns.

Managers, who want clear dashboards to guide decision-making.

##Core Features

AI-Generated Churn Prediction – A Python script analyzes customer data and assigns a churn risk score (1–100), grouping customers into three categories: high risk, medium risk, and low risk.

Interactive Visualizations – The React frontend displays risk distributions, customer lists, and analytical summaries.

Login & Authentication – Includes a working authentication system with demo credentials for testing.

Customer Dataset (400 records) – A synthetic dataset was generated for this project, including spend, engagement, tenure, ticket count, visit frequency, and demographic factors.

Backend API – A Node.js + Express backend connected to a SQLite database serves customer insights and manages authentication.

Deployment Pipeline – Both frontend and backend are deployed using Google Cloud Platform.

##Technology Stack

Backend: Node.js, Express, SQLite
AI/Data Layer: Python, Pandas
Frontend: React
DevOps & Deployment: Google Cloud Run (backend), Google Cloud Storage (frontend), Cloud Build (CI/CD)

Author

*Tomas Alvarenga*
