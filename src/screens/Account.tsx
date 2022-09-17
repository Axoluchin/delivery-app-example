import { SafeAreaView } from 'react-native'

import PhotoCircle from '../components/PhotoCircle'
import { Title, HeadLine } from '../components/Text'

const Account = () => (
  <SafeAreaView>
    <Title>Mi Cuenta</Title>
    <PhotoCircle
      size={128}
      style={{
        alignSelf: 'center'
      }}
      url="https://i.pinimg.com/originals/ac/00/7c/ac007c51eea4b4bc24500d579b7a8428.jpg"
    />
    <HeadLine>Neko Arc</HeadLine>
  </SafeAreaView>
)

export default Account
