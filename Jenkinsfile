pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'  // กำหนดที่อยู่ของ Node.js
        PATH = "${env.PATH};${env.NODE_HOME}\\bin"  // เพิ่ม Node.js ไปยัง PATH
    }

    stages {
        stage('Checkout') {
            steps {
                // เช็คเอาท์โค้ดจาก Git repository
                git 'https://github.com/pipe951/Resume.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // ตรวจสอบว่า npm ติดตั้งแล้วหรือไม่
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // ใช้เครื่องมือทดสอบเช่น puppeteer หรือเครื่องมือทดสอบอื่นๆ ที่เหมาะสมกับ HTML
                    bat 'npm run test'  // รันคำสั่งทดสอบที่คุณกำหนดใน package.json
                }
            }
        }

        stage('Archive Results') {
            steps {
                // เก็บผลลัพธ์ของการทดสอบหรือไฟล์ต่างๆ
                archiveArtifacts allowEmptyArchive: true, artifacts: '**/test-results/**/*'
            }
        }
    }

    post {
        always {
            // การทำงานหลังการทดสอบ เช่น การ Clean up หรือการแจ้งเตือน
            echo 'Cleaning up...'
        }
        success {
            echo 'Tests passed successfully.'
        }
        failure {
            echo 'Tests failed.'
        }
    }
}
