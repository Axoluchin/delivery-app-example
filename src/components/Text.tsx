import { Text, StyleSheet } from 'react-native'
import TextProps from '../types/components/TextProps'

export const Title = ({ children, style }: TextProps) => (
  <Text style={[styles.title, style]}>{children}</Text>
)

export const HeadLine = ({ children, style }: TextProps) => (
  <Text style={[styles.headLine, style]}>{children}</Text>
)

export const Paragraph = ({ children, style }: TextProps) => (
  <Text style={[styles.paragraph, style]}>{children}</Text>
)

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32
  },
  headLine: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 24
  },
  paragraph: {
    fontFamily: 'Montserrat-Regular'
  }
})
