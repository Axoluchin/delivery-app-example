import { SafeAreaView, StyleSheet, View } from 'react-native'

import PhotoCircle from '../components/PhotoCircle'
import { HeadLine } from '../components/Text'
import Opcion from '../components/Opcion'
import colors from '../utils/colors'

const Account = () => (
  <>
    <SafeAreaView style={{ flex: 0, backgroundColor: colors.green1 }} />
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <PhotoCircle
          size={128}
          style={style.photo}
          url="https://i.pinimg.com/originals/ac/00/7c/ac007c51eea4b4bc24500d579b7a8428.jpg"
        />
        <HeadLine style={style.name}>Neko Arc</HeadLine>
      </View>
      <Opcion action={() => {}} title="Informacion de mi perfil" />
      <Opcion action={() => {}} title="Mis Compras" />
      <Opcion action={() => {}} title="Configuracion" />
      <Opcion action={() => {}} title="Cerrar Sesion" />
    </SafeAreaView>
  </>
)

export default Account

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: colors.green1,
    paddingHorizontal: 4,
    paddingBottom: 16,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  photo: {
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: colors.green2
  },
  name: {
    textAlign: 'center',
    color: colors.white
  }
})
