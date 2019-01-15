pipeline{
    agent any
        stages{
            stage('npm init'){
                steps{
                    bat label: '', script: 'npm install'
                }
            }
            stage('start tests'){
                steps{
                    bat label: '', returnStatus: true, script: 'npm run start'
                }
            }
            stage('allure reports'){
                steps{
                    allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
                }
            }
    }
}