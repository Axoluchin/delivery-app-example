import { TouchableOpacity, StyleSheet } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { SubHeadLine } from './Text'
import OpcionProps from '../types/components/OpcionProps'
import colors from '../utils/colors'

const Opcion = ({ action, title }: OpcionProps) => (
  <TouchableOpacity style={style.container} onPress={action}>
    <SubHeadLine>{title}</SubHeadLine>
    <MaterialCommunityIcons name="chevron-right" size={24} />
  </TouchableOpacity>
)

export default Opcion

const style = StyleSheet.create({
  container: {
    padding: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white
  }
})
