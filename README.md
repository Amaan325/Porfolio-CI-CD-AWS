# 🌩️ Cloud Resume Challenge (MERN + AWS, Node.js)

This project is a completed implementation of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), combining my existing MERN portfolio with a fully serverless AWS backend. It features a visitor counter using DynamoDB, a Lambda function written in Node.js, API Gateway integration, full HTTPS delivery through CloudFront, and CI/CD automation.

---

## 🚀 Live Resume Website

🌐 **URL:** [https://your-cloudfront-distribution-url.cloudfront.net](https://d15qh5wfawd1vh.cloudfront.net/)  
🔢 **Visitor Counter:** Real-time count powered by DynamoDB and Lambda (Displayed at footer)

---

## 🛠️ Tech Stack

### ☁️ AWS Services

| Service         | Purpose                                                                 |
|-----------------|-------------------------------------------------------------------------|
| **Amazon S3**   | Hosts the static resume website (React build)                          |
| **CloudFront**  | HTTPS-enabled CDN for global distribution                              |
| **DynamoDB**    | Stores and updates visitor count                                        |
| **API Gateway** | Serves as an endpoint for frontend JavaScript                          |
| **AWS Lambda**  | Node.js function to access/update DynamoDB                             |
| **IAM**         | Manages fine-grained roles and permissions                              |
| **AWS SAM**     | Defines backend infrastructure as code                                 |

### 💻 Front-End

- React (MERN portfolio front end)
- HTML/CSS/JS for resume page
- JavaScript `fetch()` to retrieve visitor count from API

### 🖥 Back-End

- Node.js (AWS Lambda)
- DynamoDB (on-demand pricing)
- REST API via API Gateway

### 🔄 CI/CD

- **Frontend:** GitHub Actions deploy static site to S3 + CloudFront cache invalidation
- **Backend:** GitHub Actions build and deploy SAM stack after test pass

---

## 📈 Features

- ✅ Resume hosted via S3 and CloudFront (HTTPS)
- ✅ Visitor counter using Node.js Lambda + DynamoDB
- ✅ REST API via API Gateway
- ✅ Fully automated CI/CD with GitHub Actions
- ✅ Backend defined using AWS SAM (Infrastructure as Code)

---

