import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import Constants from 'expo-constants'
import { loginProps } from '../types/utils/firebase'

const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.apiKey,
  authDomain: Constants.manifest?.extra?.authDomain,
  projectId: Constants.manifest?.extra?.projectId,
  storageBucket: Constants.manifest?.extra?.storageBucket,
  messagingSenderId: Constants.manifest?.extra?.messagingSenderId,
  appId: Constants.manifest?.extra?.appId
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const register = async ({ email, password }: loginProps) => {
  const result = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredencials) => true)
    .catch((error: Error) => error)
  return result
}

export const login = async ({ email, password }: loginProps) => {
  const result = signInWithEmailAndPassword(auth, email, password)
    .then((userCredencials) => true)
    .catch((error: Error) => error)
  return result
}
