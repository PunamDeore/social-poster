pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/PunamDeore/social-poster.git'
        DOCKER_IMAGE_TAG = 'vilasshetkar/test:social-post-punam'
        DOCKER_HUB_CREDENTIALS = 'docker-hub-id'
        EC2_INSTANCE_IP = '13.200.82.178'
    }

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github-tejal', url: GIT_REPO_URL
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE_TAG)
                }
            }
        }

        stage('Docker Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        docker.image(DOCKER_IMAGE_TAG).push()
                    }
                }
            }
        }

    }

    options {
        timestamps()
    }
}

