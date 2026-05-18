pipeline {
    agent any

    stages {

        stage('Backend Tests') {
            steps {
                dir('backend') {
                    sh 'mvn test'
                }
            }
        }

        stage('Frontend Tests') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'CI=true npm test -- --watchAll=false'
                }
            }
        }

        stage('Build Backend JAR') {
            steps {
                dir('backend') {
                    sh 'mvn clean package'
                }
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh 'docker compose down || true'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

       stage('Push Docker Images') {
    steps {

        withCredentials([usernamePassword(
            credentialsId: 'dockerhub-creds',
            usernameVariable: 'DOCKER_USER',
            passwordVariable: 'DOCKER_PASS'
        )]) {

            sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'

            sh 'docker push greed707/medical-backend:latest'
            sh 'docker push greed707/medical-frontend:latest'
            sh 'docker push greed707/medical-ml:latest'

            sh 'docker logout'
        }
    }
}

        stage('Start Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }

    }
}
