# Final-Project-ModernTechnologies

## Customer Churn Prediction Dashboard

### Project Overview
For my final project, I decided to build a **Customer Churn Prediction Dashboard** — an interactive full-stack web application designed to help small and medium-sized businesses identify and retain customers who are likely to leave.

Customer churn directly affects revenue, and many organizations struggle to detect customer behavior early enough to take action.  
This web application solves that problem by using a **simple AI model** to generate churn risk scores and by visualizing customer behavior through an intuitive dashboard interface.

### The Target
This application is aimed at:  
* **Business Analysts** who need actionable insights into customer behavior.  
* **Marketing Professionals** who want to design personalized retention campaigns.  
* **Management teams** who want a clear, visual understanding of customer trends.

### Core Features
* **AI Churn Prediction Model** – A Python-based script generates individual customer risk scores (1–100) and categorizes customers as *High Risk*, *Medium Risk*, or *Low Risk*.  
* **Interactive Visualizations** – The React dashboard visualizes churn risk, customer trends, and segment distributions.  
* **Login & Authentication System** – Built into the backend using Node.js and SQLite, with demo credentials for testing.  
* **400-Customer Synthetic Dataset** – Generated for this project, including fields such as spend, engagement score, tenure, ticket counts, visit frequency, and demographic indicators.  
* **Backend REST API** – Node.js + Express API that serves customer predictions and handles login.  
* **Automatic Cloud Deployment** – Backend deployed using Google Cloud Run; frontend deployed as a static website using Google Cloud Storage.  

### Technology Stack
* **Backend:** Node.js, Express, SQLite  
* **AI/Data Layer:** Python, Pandas  
* **Frontend:** React  
* **DevOps & Deployment:** Google Cloud Run, Google Cloud Storage, Cloud Build (GitHub-connected CI/CD)

#### Author
**Tomas Alvarenga**  
Data Analytics & AI Minor Student at Belmont Abbey College
