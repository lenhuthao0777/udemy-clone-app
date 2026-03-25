import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5433,
  username: process.env.DB_USERNAME || 'elearning',
  password: process.env.DB_PASSWORD || 'elearning_secret',
  database: process.env.DB_NAME || 'elearning_db',
  synchronize: false,
});

// ── Categories ─────────────────────────────────────────────
const categories = [
  { name: 'Web Development',      slug: 'web-development' },
  { name: 'Mobile Development',   slug: 'mobile-development' },
  { name: 'Data Science',         slug: 'data-science' },
  { name: 'DevOps & Cloud',       slug: 'devops-cloud' },
  { name: 'UI/UX Design',         slug: 'ui-ux-design' },
  { name: 'Cybersecurity',        slug: 'cybersecurity' },
  { name: 'Machine Learning',     slug: 'machine-learning' },
  { name: 'Database',             slug: 'database' },
];

// ── Course templates (100 courses, ~12-13 per category) ────
const courseTemplates = [
  // Web Development (15)
  { title: 'The Complete Web Developer Bootcamp 2024', desc: 'Master HTML, CSS, JavaScript, React, Node.js, MongoDB from scratch.', price: 89.99, level: 'BEGINNER', cat: 'web-development', hrs: 65, rating: 4.8, students: 142350 },
  { title: 'Advanced React & Redux', desc: 'Build complex apps using React Hooks, Context API, and Redux Toolkit.', price: 79.99, level: 'ADVANCED', cat: 'web-development', hrs: 40, rating: 4.7, students: 88200 },
  { title: 'Vue.js 3 — The Complete Guide', desc: 'Master Vue 3 with Composition API, Vuex, and Vue Router.', price: 74.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 32, rating: 4.6, students: 61000 },
  { title: 'Next.js 14 & Full-Stack Development', desc: 'Build full-stack apps with Next.js App Router, Prisma, and TypeScript.', price: 84.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 38, rating: 4.9, students: 54300 },
  { title: 'CSS Mastery: Flexbox, Grid & Animations', desc: 'Level up your CSS with modern layouts and beautiful animations.', price: 49.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 18, rating: 4.5, students: 72100 },
  { title: 'TypeScript for Professionals', desc: 'Deep dive into TypeScript generics, decorators, and advanced patterns.', price: 69.99, level: 'ADVANCED', cat: 'web-development', hrs: 22, rating: 4.7, students: 43900 },
  { title: 'Node.js API Masterclass with Express', desc: 'Build RESTful APIs with Node.js, Express, JWT, and MongoDB.', price: 79.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 45, rating: 4.8, students: 97600 },
  { title: 'GraphQL with React & Apollo', desc: 'Learn to build modern GraphQL APIs and consume them with React.', price: 64.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 26, rating: 4.6, students: 31200 },
  { title: 'HTML & CSS for Absolute Beginners', desc: 'Start your web dev journey with HTML5 and CSS3 from zero.', price: 29.99, level: 'BEGINNER', cat: 'web-development', hrs: 12, rating: 4.4, students: 198000 },
  { title: 'Testing JavaScript with Jest & Cypress', desc: 'Write reliable tests for your JavaScript apps — unit to E2E.', price: 59.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 20, rating: 4.5, students: 28700 },
  { title: 'NestJS — The Complete Developer Guide', desc: 'Build production-grade APIs with NestJS, TypeORM, and Docker.', price: 79.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 35, rating: 4.8, students: 41500 },
  { title: 'Web Performance Optimization', desc: 'Master Lighthouse, Core Web Vitals, lazy loading, and caching.', price: 54.99, level: 'ADVANCED', cat: 'web-development', hrs: 16, rating: 4.4, students: 19800 },
  { title: 'Progressive Web Apps (PWA) Masterclass', desc: 'Build offline-first apps with Service Workers and Web App Manifests.', price: 49.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 14, rating: 4.3, students: 22400 },
  { title: 'Svelte & SvelteKit — Full Course', desc: 'The fastest UI framework — learn Svelte from zero to production.', price: 59.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 24, rating: 4.7, students: 17600 },
  { title: 'MERN Stack E-commerce Project', desc: 'Build a full e-commerce app with MongoDB, Express, React, Node.', price: 84.99, level: 'INTERMEDIATE', cat: 'web-development', hrs: 52, rating: 4.6, students: 68900 },

  // Mobile Development (10)
  { title: 'Flutter & Dart — The Complete Guide', desc: 'Build iOS and Android apps with Flutter from scratch.', price: 84.99, level: 'BEGINNER', cat: 'mobile-development', hrs: 42, rating: 4.7, students: 109000 },
  { title: 'React Native — Build Mobile Apps', desc: 'Cross-platform mobile development with React Native and Expo.', price: 79.99, level: 'INTERMEDIATE', cat: 'mobile-development', hrs: 38, rating: 4.6, students: 87400 },
  { title: 'SwiftUI Masterclass — iOS 17', desc: 'Build beautiful iOS apps with SwiftUI, Combine, and CoreData.', price: 89.99, level: 'INTERMEDIATE', cat: 'mobile-development', hrs: 45, rating: 4.8, students: 52300 },
  { title: 'Android Development with Kotlin', desc: 'Learn Android from scratch using Kotlin, Jetpack, and MVVM.', price: 79.99, level: 'BEGINNER', cat: 'mobile-development', hrs: 50, rating: 4.5, students: 71200 },
  { title: 'Mobile App UI Design Fundamentals', desc: 'Design polished mobile UIs with Figma and Material Design 3.', price: 49.99, level: 'BEGINNER', cat: 'mobile-development', hrs: 15, rating: 4.4, students: 38900 },
  { title: 'Push Notifications & Firebase for Mobile', desc: 'Integrate FCM, analytics, and Crashlytics into your mobile apps.', price: 54.99, level: 'INTERMEDIATE', cat: 'mobile-development', hrs: 18, rating: 4.3, students: 21600 },
  { title: 'Ionic Framework — Full Guide', desc: 'Build hybrid mobile apps with Ionic, Angular, and Capacitor.', price: 64.99, level: 'INTERMEDIATE', cat: 'mobile-development', hrs: 28, rating: 4.2, students: 19300 },
  { title: 'Flutter State Management Masterclass', desc: 'Riverpod, Bloc, Provider — master Flutter state management.', price: 74.99, level: 'ADVANCED', cat: 'mobile-development', hrs: 22, rating: 4.7, students: 34100 },
  { title: 'App Store Optimization & Publishing', desc: 'Get your app published & discovered on App Store and Play Store.', price: 39.99, level: 'BEGINNER', cat: 'mobile-development', hrs: 8, rating: 4.1, students: 28700 },
  { title: 'Mobile App Testing & Automation', desc: 'Test mobile apps with Appium, XCTest, and Espresso.', price: 59.99, level: 'INTERMEDIATE', cat: 'mobile-development', hrs: 20, rating: 4.3, students: 12400 },

  // Data Science (12)
  { title: 'Python for Data Science Bootcamp', desc: 'NumPy, Pandas, Matplotlib, Seaborn — the complete data science track.', price: 74.99, level: 'BEGINNER', cat: 'data-science', hrs: 36, rating: 4.7, students: 187000 },
  { title: 'Data Analysis with Python & Pandas', desc: 'Wrangle, analyze, and visualize real-world datasets.', price: 64.99, level: 'INTERMEDIATE', cat: 'data-science', hrs: 28, rating: 4.6, students: 93400 },
  { title: 'Statistics for Data Science', desc: 'Probability, distributions, hypothesis testing and regression.', price: 59.99, level: 'BEGINNER', cat: 'data-science', hrs: 24, rating: 4.5, students: 67800 },
  { title: 'Data Visualization with Tableau', desc: 'Build stunning interactive dashboards with Tableau Desktop.', price: 69.99, level: 'BEGINNER', cat: 'data-science', hrs: 20, rating: 4.4, students: 58200 },
  { title: 'R Programming for Data Analysis', desc: 'Statistical computing with R, ggplot2, and tidyverse.', price: 64.99, level: 'BEGINNER', cat: 'data-science', hrs: 22, rating: 4.3, students: 41600 },
  { title: 'Apache Spark & PySpark Masterclass', desc: 'Big data processing at scale with Apache Spark and Python.', price: 84.99, level: 'ADVANCED', cat: 'data-science', hrs: 32, rating: 4.6, students: 29800 },
  { title: 'SQL for Data Analysis', desc: 'Write powerful queries for data analysis with PostgreSQL and BigQuery.', price: 49.99, level: 'BEGINNER', cat: 'data-science', hrs: 18, rating: 4.7, students: 134200 },
  { title: 'Data Engineering with Python & Airflow', desc: 'Build data pipelines with Apache Airflow, dbt and Snowflake.', price: 89.99, level: 'ADVANCED', cat: 'data-science', hrs: 38, rating: 4.5, students: 22100 },
  { title: 'Power BI — From Beginner to Pro', desc: 'Create compelling reports and dashboards with Microsoft Power BI.', price: 59.99, level: 'BEGINNER', cat: 'data-science', hrs: 16, rating: 4.4, students: 71900 },
  { title: 'Time Series Analysis with Python', desc: 'ARIMA, Prophet, LSTM for forecasting real-world time series data.', price: 74.99, level: 'ADVANCED', cat: 'data-science', hrs: 26, rating: 4.5, students: 18700 },
  { title: 'Feature Engineering for Machine Learning', desc: 'Transform raw data into powerful ML features with scikit-learn.', price: 69.99, level: 'INTERMEDIATE', cat: 'data-science', hrs: 20, rating: 4.6, students: 24300 },
  { title: 'Data Science Career Bootcamp', desc: 'Portfolio projects, resume tips, and interview prep for data roles.', price: 79.99, level: 'BEGINNER', cat: 'data-science', hrs: 30, rating: 4.3, students: 45600 },

  // DevOps & Cloud (12)
  { title: 'Docker & Kubernetes — The Complete Guide', desc: 'Containerize apps and orchestrate them with Kubernetes.', price: 89.99, level: 'INTERMEDIATE', cat: 'devops-cloud', hrs: 50, rating: 4.8, students: 124000 },
  { title: 'AWS Solutions Architect — Associate', desc: 'Prepare for AWS SAA certification with hands-on labs.', price: 94.99, level: 'INTERMEDIATE', cat: 'devops-cloud', hrs: 55, rating: 4.7, students: 201000 },
  { title: 'CI/CD with GitHub Actions', desc: 'Automate builds, tests, and deployments with GitHub Actions.', price: 59.99, level: 'INTERMEDIATE', cat: 'devops-cloud', hrs: 18, rating: 4.6, students: 48200 },
  { title: 'Terraform — Infrastructure as Code', desc: 'Provision cloud infrastructure with Terraform on AWS, GCP, Azure.', price: 79.99, level: 'INTERMEDIATE', cat: 'devops-cloud', hrs: 28, rating: 4.7, students: 62400 },
  { title: 'Linux Administration Mastery', desc: 'Master Linux system administration, bash scripting, and networking.', price: 69.99, level: 'BEGINNER', cat: 'devops-cloud', hrs: 35, rating: 4.5, students: 87600 },
  { title: 'Google Cloud Platform Fundamentals', desc: 'Core GCP services: Compute Engine, GKE, BigQuery, Cloud Run.', price: 79.99, level: 'BEGINNER', cat: 'devops-cloud', hrs: 30, rating: 4.4, students: 41300 },
  { title: 'Ansible for Automation', desc: 'Automate infrastructure configuration with Ansible playbooks.', price: 64.99, level: 'INTERMEDIATE', cat: 'devops-cloud', hrs: 20, rating: 4.5, students: 33700 },
  { title: 'Monitoring with Prometheus & Grafana', desc: 'Set up observability stacks for production Kubernetes clusters.', price: 69.99, level: 'INTERMEDIATE', cat: 'devops-cloud', hrs: 22, rating: 4.6, students: 27900 },
  { title: 'Site Reliability Engineering (SRE)', desc: 'SLIs, SLOs, error budgets, and on-call practices at Google scale.', price: 84.99, level: 'ADVANCED', cat: 'devops-cloud', hrs: 26, rating: 4.7, students: 19400 },
  { title: 'Azure DevOps Complete Course', desc: 'Azure Pipelines, Repos, Boards, and Artifacts from scratch.', price: 79.99, level: 'INTERMEDIATE', cat: 'devops-cloud', hrs: 32, rating: 4.4, students: 38100 },
  { title: 'Microservices with Docker & Node.js', desc: 'Design, build, and deploy microservices using Node, Docker, NATS.', price: 84.99, level: 'ADVANCED', cat: 'devops-cloud', hrs: 46, rating: 4.8, students: 74500 },
  { title: 'Helm Charts & Kubernetes Packaging', desc: 'Package, configure, and deploy Kubernetes apps with Helm 3.', price: 59.99, level: 'ADVANCED', cat: 'devops-cloud', hrs: 16, rating: 4.5, students: 21600 },

  // UI/UX Design (12)
  { title: 'UI/UX Design Bootcamp — Zero to Job Ready', desc: 'Figma, user research, wireframing, and design thinking.', price: 79.99, level: 'BEGINNER', cat: 'ui-ux-design', hrs: 35, rating: 4.7, students: 98400 },
  { title: 'Figma Advanced Techniques', desc: 'Auto-layout, variables, components, and developer handoff in Figma.', price: 64.99, level: 'INTERMEDIATE', cat: 'ui-ux-design', hrs: 20, rating: 4.6, students: 54200 },
  { title: 'Design Systems with Figma', desc: 'Build and maintain scalable design systems for product teams.', price: 74.99, level: 'INTERMEDIATE', cat: 'ui-ux-design', hrs: 18, rating: 4.7, students: 31700 },
  { title: 'User Research & Usability Testing', desc: 'Plan, conduct, and analyze user interviews and usability studies.', price: 59.99, level: 'BEGINNER', cat: 'ui-ux-design', hrs: 14, rating: 4.4, students: 27800 },
  { title: 'Motion Design with After Effects', desc: 'Create stunning UI animations and micro-interactions for apps.', price: 69.99, level: 'INTERMEDIATE', cat: 'ui-ux-design', hrs: 24, rating: 4.5, students: 22100 },
  { title: 'Web Design for Developers', desc: 'Typography, color theory, spacing, and layout for programmers.', price: 49.99, level: 'BEGINNER', cat: 'ui-ux-design', hrs: 12, rating: 4.6, students: 67300 },
  { title: 'Prototyping with Figma & Framer', desc: 'High-fidelity interactive prototypes using Figma and Framer.', price: 64.99, level: 'INTERMEDIATE', cat: 'ui-ux-design', hrs: 16, rating: 4.5, students: 18900 },
  { title: 'Accessibility in Design & Development', desc: 'WCAG 2.2, ARIA, color contrast, and inclusive design practices.', price: 44.99, level: 'BEGINNER', cat: 'ui-ux-design', hrs: 10, rating: 4.3, students: 15400 },
  { title: 'iOS & Material Design Guidelines', desc: 'Design native-feeling apps following Apple HIG and Material 3.', price: 54.99, level: 'INTERMEDIATE', cat: 'ui-ux-design', hrs: 14, rating: 4.4, students: 24600 },
  { title: 'Design Portfolio & Career Guide', desc: 'Build a UX portfolio that lands jobs at top tech companies.', price: 39.99, level: 'BEGINNER', cat: 'ui-ux-design', hrs: 8, rating: 4.2, students: 41200 },
  { title: 'Adobe XD Masterclass', desc: 'Design and prototype mobile & web apps with Adobe XD.', price: 49.99, level: 'BEGINNER', cat: 'ui-ux-design', hrs: 12, rating: 4.1, students: 29800 },
  { title: 'Information Architecture & Navigation Design', desc: 'Organize content and design navigations users actually understand.', price: 54.99, level: 'INTERMEDIATE', cat: 'ui-ux-design', hrs: 12, rating: 4.4, students: 12700 },

  // Cybersecurity (12)
  { title: 'Ethical Hacking Bootcamp', desc: 'Penetration testing, Kali Linux, Metasploit, and bug bounty basics.', price: 94.99, level: 'INTERMEDIATE', cat: 'cybersecurity', hrs: 48, rating: 4.7, students: 143000 },
  { title: 'CompTIA Security+ Exam Prep', desc: 'Complete prep for the Security+ SY0-701 certification exam.', price: 79.99, level: 'BEGINNER', cat: 'cybersecurity', hrs: 40, rating: 4.6, students: 98700 },
  { title: 'Web Application Penetration Testing', desc: 'OWASP Top 10, Burp Suite, XSS, SQLi, CSRF and more.', price: 89.99, level: 'INTERMEDIATE', cat: 'cybersecurity', hrs: 36, rating: 4.8, students: 67200 },
  { title: 'Network Security Fundamentals', desc: 'Firewalls, IDS/IPS, VPNs, and network traffic analysis.', price: 74.99, level: 'BEGINNER', cat: 'cybersecurity', hrs: 28, rating: 4.4, students: 51400 },
  { title: 'CISSP Certification — Study Guide', desc: 'Comprehensive CISSP prep covering all 8 domains.', price: 99.99, level: 'ADVANCED', cat: 'cybersecurity', hrs: 60, rating: 4.5, students: 38200 },
  { title: 'Python for Cybersecurity', desc: 'Write security tools, scanners, and exploits with Python.', price: 79.99, level: 'INTERMEDIATE', cat: 'cybersecurity', hrs: 30, rating: 4.6, students: 44800 },
  { title: 'Cloud Security on AWS', desc: 'IAM, Security Groups, AWS WAF, GuardDuty, and compliance.', price: 84.99, level: 'INTERMEDIATE', cat: 'cybersecurity', hrs: 26, rating: 4.5, students: 29600 },
  { title: 'Digital Forensics & Incident Response', desc: 'Investigate breaches, collect evidence, and handle incidents.', price: 89.99, level: 'ADVANCED', cat: 'cybersecurity', hrs: 34, rating: 4.6, students: 21300 },
  { title: 'Cryptography Fundamentals', desc: 'Symmetric, asymmetric crypto, PKI, TLS, and hashing algorithms.', price: 64.99, level: 'INTERMEDIATE', cat: 'cybersecurity', hrs: 20, rating: 4.4, students: 32100 },
  { title: 'SOC Analyst Training', desc: 'SIEM, threat hunting, and log analysis for SOC L1 & L2 roles.', price: 79.99, level: 'BEGINNER', cat: 'cybersecurity', hrs: 32, rating: 4.5, students: 27400 },
  { title: 'Bug Bounty Hunting — Full Guide', desc: 'Find, report, and get paid for security vulnerabilities legally.', price: 74.99, level: 'INTERMEDIATE', cat: 'cybersecurity', hrs: 24, rating: 4.7, students: 36800 },
  { title: 'Zero Trust Security Architecture', desc: 'Design and implement Zero Trust networks in enterprise environments.', price: 84.99, level: 'ADVANCED', cat: 'cybersecurity', hrs: 22, rating: 4.5, students: 14900 },

  // Machine Learning (12)
  { title: 'Machine Learning A-Z with Python & R', desc: 'Regression, classification, clustering, deep learning from scratch.', price: 89.99, level: 'BEGINNER', cat: 'machine-learning', hrs: 44, rating: 4.8, students: 219000 },
  { title: 'Deep Learning Specialization with TensorFlow', desc: 'CNNs, RNNs, LSTM, and Transformers with TensorFlow 2.x.', price: 94.99, level: 'ADVANCED', cat: 'machine-learning', hrs: 50, rating: 4.7, students: 124000 },
  { title: 'Natural Language Processing with Python', desc: 'Text classification, sentiment analysis, BERT, and LLM fine-tuning.', price: 84.99, level: 'INTERMEDIATE', cat: 'machine-learning', hrs: 36, rating: 4.6, students: 81200 },
  { title: 'Computer Vision with PyTorch', desc: 'Image classification, object detection, GANs with PyTorch.', price: 89.99, level: 'INTERMEDIATE', cat: 'machine-learning', hrs: 40, rating: 4.7, students: 57800 },
  { title: 'Scikit-learn & Model Deployment', desc: 'Train, tune, and deploy ML models to production with FastAPI.', price: 74.99, level: 'INTERMEDIATE', cat: 'machine-learning', hrs: 28, rating: 4.5, students: 43200 },
  { title: 'Reinforcement Learning from Scratch', desc: 'Q-Learning, Policy Gradient, and Deep RL with OpenAI Gym.', price: 89.99, level: 'ADVANCED', cat: 'machine-learning', hrs: 34, rating: 4.6, students: 28900 },
  { title: 'MLOps — Production Machine Learning', desc: 'MLflow, DVC, Docker, and model monitoring in production.', price: 84.99, level: 'ADVANCED', cat: 'machine-learning', hrs: 30, rating: 4.7, students: 22700 },
  { title: 'Large Language Models & LangChain', desc: 'Build LLM-powered apps with LangChain, OpenAI API, and RAG.', price: 94.99, level: 'INTERMEDIATE', cat: 'machine-learning', hrs: 28, rating: 4.8, students: 61400 },
  { title: 'Recommendation Systems from Scratch', desc: 'Collaborative filtering, matrix factorization, and neural recommenders.', price: 79.99, level: 'INTERMEDIATE', cat: 'machine-learning', hrs: 24, rating: 4.5, students: 19600 },
  { title: 'Generative AI with Diffusion Models', desc: 'Stable Diffusion, DALL·E, and image generation from scratch.', price: 89.99, level: 'ADVANCED', cat: 'machine-learning', hrs: 26, rating: 4.7, students: 34100 },
  { title: 'XGBoost & Gradient Boosting Mastery', desc: 'Win Kaggle competitions with XGBoost, LightGBM, and CatBoost.', price: 69.99, level: 'INTERMEDIATE', cat: 'machine-learning', hrs: 18, rating: 4.6, students: 38700 },
  { title: 'AI Ethics & Responsible ML', desc: 'Fairness, bias, explainability, and privacy in machine learning.', price: 59.99, level: 'BEGINNER', cat: 'machine-learning', hrs: 14, rating: 4.4, students: 16300 },

  // Database (15 — to reach exactly 100)
  { title: 'The Complete SQL Bootcamp', desc: 'Learn SQL from scratch with PostgreSQL — queries to performance tuning.', price: 64.99, level: 'BEGINNER', cat: 'database', hrs: 22, rating: 4.7, students: 231000 },
  { title: 'MongoDB — The Complete Developer Guide', desc: 'CRUD, aggregation pipelines, Atlas, and Mongoose in depth.', price: 74.99, level: 'BEGINNER', cat: 'database', hrs: 30, rating: 4.6, students: 124000 },
  { title: 'Redis Mastery — Caching & Pub/Sub', desc: 'Data types, streams, Lua scripts, and cluster setup with Redis.', price: 69.99, level: 'INTERMEDIATE', cat: 'database', hrs: 18, rating: 4.6, students: 42700 },
  { title: 'PostgreSQL for Developers', desc: 'Advanced SQL, stored procedures, triggers, and perf optimization.', price: 74.99, level: 'INTERMEDIATE', cat: 'database', hrs: 26, rating: 4.7, students: 68100 },
  { title: 'Database Design & Modeling', desc: 'ER diagrams, normalization, and schema design best practices.', price: 54.99, level: 'BEGINNER', cat: 'database', hrs: 14, rating: 4.4, students: 57800 },
  { title: 'MySQL for Beginners', desc: 'Learn MySQL from scratch — tables, joins, views, and indexing.', price: 44.99, level: 'BEGINNER', cat: 'database', hrs: 16, rating: 4.3, students: 143000 },
  { title: 'Cassandra & NoSQL at Scale', desc: 'Wide-column storage, data modeling, and distributed databases.', price: 79.99, level: 'ADVANCED', cat: 'database', hrs: 24, rating: 4.5, students: 18400 },
  { title: 'Elasticsearch — Search & Analytics', desc: 'Full-text search, aggregations, and the ELK stack in production.', price: 79.99, level: 'INTERMEDIATE', cat: 'database', hrs: 22, rating: 4.6, students: 31200 },
  { title: 'Database Performance Tuning', desc: 'Query plans, indexes, and benchmarking for PostgreSQL and MySQL.', price: 74.99, level: 'ADVANCED', cat: 'database', hrs: 20, rating: 4.7, students: 24600 },
  { title: 'GraphQL & Database Integration', desc: 'Connect GraphQL to PostgreSQL with Hasura and Prisma.', price: 69.99, level: 'INTERMEDIATE', cat: 'database', hrs: 18, rating: 4.5, students: 21800 },
  { title: 'Firebase Realtime Database & Firestore', desc: 'Build real-time apps with Firebase for web and mobile.', price: 54.99, level: 'BEGINNER', cat: 'database', hrs: 14, rating: 4.4, students: 74200 },
  { title: 'Prisma ORM Masterclass', desc: 'Schema, migrations, type-safe queries, and Prisma Studio.', price: 64.99, level: 'INTERMEDIATE', cat: 'database', hrs: 16, rating: 4.6, students: 28900 },
  { title: 'Data Warehouse with Snowflake', desc: 'Build scalable cloud data warehouses with Snowflake SQL.', price: 84.99, level: 'INTERMEDIATE', cat: 'database', hrs: 24, rating: 4.5, students: 19700 },
  { title: 'Neo4j — Graph Database Fundamentals', desc: 'Cypher queries, graph modeling, and Neo4j for recommendation engines.', price: 69.99, level: 'INTERMEDIATE', cat: 'database', hrs: 18, rating: 4.4, students: 14300 },
  { title: 'ACID Transactions & Distributed Databases', desc: 'CAP theorem, consensus protocols, and distributed SQL systems.', price: 89.99, level: 'ADVANCED', cat: 'database', hrs: 22, rating: 4.6, students: 11800 },
];

async function seed() {
  console.log('🌱 Connecting to database...');
  await AppDataSource.initialize();
  console.log('✅ Connected.\n');

  // Get instructor IDs
  const instructors = await AppDataSource.query(
    `SELECT id, username FROM users WHERE role = 'INSTRUCTOR' LIMIT 2`,
  );
  if (instructors.length === 0) {
    console.error('❌ No instructors found. Run user seed first!');
    process.exit(1);
  }

  // Upsert categories
  const categoryMap: Record<string, string> = {};
  for (const cat of categories) {
    const existing = await AppDataSource.query(
      `SELECT id FROM categories WHERE slug = $1`, [cat.slug],
    );
    let catId: string;
    if (existing.length > 0) {
      catId = existing[0].id;
    } else {
      const [inserted] = await AppDataSource.query(
        `INSERT INTO categories (id, name, slug, "createdAt", "updatedAt")
         VALUES (gen_random_uuid(), $1, $2, NOW(), NOW()) RETURNING id`,
        [cat.name, cat.slug],
      );
      catId = inserted.id;
      console.log(`📂 Category created: ${cat.name}`);
    }
    categoryMap[cat.slug] = catId;
  }

  console.log('');
  let created = 0, skipped = 0;

  for (const [i, c] of courseTemplates.entries()) {
    const instructor = instructors[i % instructors.length];
    const catId = categoryMap[c.cat];

    const existing = await AppDataSource.query(
      `SELECT id FROM courses WHERE title = $1`, [c.title],
    );
    if (existing.length > 0) {
      skipped++;
      continue;
    }

    await AppDataSource.query(
      `INSERT INTO courses (
         id, title, description, price, "originalPrice", rating, "ratingCount",
         "studentCount", duration, level, language, "groupCode",
         "instructorId", "categoryId", "createdAt", "updatedAt"
       ) VALUES (
         gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9,
         'English', 'GP08', $10, $11, NOW(), NOW()
       )`,
      [
        c.title, c.desc, c.price,
        Math.round(c.price * 1.5 * 100) / 100,  // originalPrice ~1.5x
        c.rating,
        Math.floor(Math.random() * 5000) + 500,  // random ratingCount
        c.students, c.hrs, c.level,
        instructor.id, catId,
      ],
    );
    created++;
    console.log(`✅ [${String(created).padStart(3, ' ')}] ${c.title}`);
  }

  await AppDataSource.destroy();
  console.log(`\n🎉 Done! Created: ${created} courses, Skipped: ${skipped} (already existed).`);
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
