# Cypress_JS

This project sets up end-to-end testing using Cypress for JavaScript applications.

## 🚀 Getting Started

Make sure the following are installed on your system:

- [Node.js](https://nodejs.org/) (version ≥ 12.x)
- npm or yarn
- A modern code editor like [VS Code](https://code.visualstudio.com/)

### 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/AqsaM1/Cypress_JS.git

# Navigate into the project directory
cd Cypress_JS

# Install dependencies
npm install


# If Cypress is not already installed:

npm install cypress --save-dev

#To launch the Cypress Test Runner:
npx cypress open

#Run test headless
npx cypress run

#Run test headless with specific browser
npx cypress run --browser chrome

# Run specific spec file
npx cypress run --spec "cypress/e2e/verifyLogin.cy.js"

#Run multiple spec files
npx cypress run --spec "cypress/e2e/**/*.cy.js"


#This will create a default folder structure like:
cypress/
├── e2e/          # Test files
├── fixtures/     # Static test data (e.g., JSON files)
├── pageobjects/  # Page-specific functionality and locators
├── support/      # Custom commands and utilities

#Project Structure Overview
project-root/
├── cypress/
│   ├── e2e/             # End-to-end test files
│   ├── fixtures/        # Test data files
│   ├── pageobjects/     # Page functionality and locators
│   ├── support/         # Custom utilities and commands
├── node_modules/        # Installed dependencies
├── package.json         # Project metadata and scripts
├── cypress.config.js    # Cypress configuration file


#Lint Cypress test files and auto-fix common issues:
npm run lint:cypress

#Format all project files (JS, JSON, Markdown, etc.) with Prettier:
npm run format

#All generated test data is centralized in: Used fakerjs for dummy data generation
cypress/support/fakerUser.js

