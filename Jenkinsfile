pipeline {
    agent any
    tools {
            nodejs "Node 18"
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}