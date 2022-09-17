import { SafeAreaView, Text } from 'react-native'
import PhotoCircle from '../components/PhotoCircle'

const Account = () => (
  <SafeAreaView>
    <Text>Mi Cuenta</Text>
    <PhotoCircle
      size={128}
      style={{
        alignSelf: 'center'
      }}
      url="https://i.pinimg.com/originals/ac/00/7c/ac007c51eea4b4bc24500d579b7a8428.jpg"
    />
  </SafeAreaView>
)

export default Account
