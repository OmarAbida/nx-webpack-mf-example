pipeline {

    agent any

    stages {
        stage("build"){
            steps {
                echo "Building the application"
            }
        }

        stage("test"){
            steps {
                sh "npm test"
            }
        }

        stage("deploy"){
            steps {
                echo "Deploying the application"
            }
        }
    }
}