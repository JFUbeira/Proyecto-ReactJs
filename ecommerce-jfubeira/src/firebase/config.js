import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyAPuxI2RI10JBnuj7FgSh1RliuJ3MQTmdY',
    authDomain: 'ecommerce-juanubeira.firebaseapp.com',
    projectId: 'ecommerce-juanubeira',
    storageBucket: 'ecommerce-juanubeira.appspot.com',
    messagingSenderId: '735692270509',
    appId: '1:735692270509:web:12ae5c696d513c7c10cf24',
}

const app = initializeApp(firebaseConfig)

export const initFirebase = () => app
