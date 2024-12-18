pipeline {
    agent any
    
    environment {
        // กำหนดตัวแปรสำหรับ Windows
        PATH = "${tool 'JDK11'}\\bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // ทำการ checkout โปรเจคจาก repository
                    checkout scm
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    // คำสั่งสำหรับการ build หรือการเตรียมโปรเจค
                    echo 'Building project...'
                    // ตัวอย่างการรันคำสั่ง build ใน Windows (หากมีคำสั่งอื่นๆ เช่นการ compile ก็สามารถเพิ่มได้)
                    bat 'echo Build process for Windows'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // คำสั่งสำหรับทดสอบโปรเจค
                    echo 'Running tests...'
                    bat 'echo Test process for Windows'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // คำสั่งสำหรับการ deploy
                    echo 'Deploying project...'
                    bat 'echo Deployment process for Windows'
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // คำสั่งสำหรับการ cleanup หลังการ deploy
                    echo 'Cleaning up...'
                    bat 'echo Cleaning process for Windows'
                }
            }
        }
    }
}
