pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                    dir('./') {
                        sh 'docker stop portfolio || true'
                        sh 'docker rm portfolio || true'
                        sh 'docker rmi portfolio:0 || true'
                        sh 'docker build -t portfolio:0 .'
                    }
            }
          }
        }
        stage('Create and start docker containers') {
            steps {
                script {
                    sh 'docker create --name portfolio -p 5001:5001 --restart=always portfolio:0'

                    sh 'docker start portfolio'
                }
            }
        }
    }
}