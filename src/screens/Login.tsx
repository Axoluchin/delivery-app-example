import { SafeAreaView } from 'react-native'

import { Title } from '../components/Text'
import Input from '../components/Input'
import { login } from '../utils/firebase'

const Login = () => (
    <SafeAreaView>
      <Title>Delivey App</Title>
      <Input label='Correo'/>
      <Input secureTextEntry label='eMail'/>
    </SafeAreaView>
)

export default Login
