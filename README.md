# Cypress_JS
1. Prerequisites
Ensure you have the following installed on your system:

Node.js (version ≥ 12.x)
npm or yarn for managing dependencies
A modern code editor (e.g., VS Code)

2. Installation
Clone the repository and install the dependencies:
# Clone the repository
git clone <https://github.com/AqsaM1/Cypress_JS.git>

# Navigate to the project folder
cd <Cypress_JS>

# Install dependencies
npm install

3. Add Cypress
If Cypress is not already set up, you can install it as a development dependency:
npm install cypress --save-dev

4. Open Cypress
Launch the Cypress Test Runner:

npx cypress open

This will create a default Cypress folder structure if it doesn’t already exist:\

cypress/
├── e2e/          # Folder for your test files
├── fixtures/     # Test data
├── pageobjects/  # Individual Page funtionality
├── support/      # Helper commands


5. Directory Structure
Describe your project’s directory structure, for example:

project-root/
├── cypress/
│   ├── e2e/        # Test files go here
│   ├── fixtures/   # Test data files (e.g., JSON)
│   ├── support/    # Custom commands and utilities
├── node_modules/   # Installed dependencies
├── package.json    # Project configuration
├── cypress.config.js   # Cypress configuration file



