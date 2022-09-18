import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import { Paragraph } from './Text'
import React from 'react'

interface InputProps extends TextInputProps {
  label: string
}

const Input = (Props: InputProps) => (
  <>
    <Paragraph>{Props.label}</Paragraph>
    <TextInput style={style.textInput} {...Props} />
  </>
)

export default Input

const style = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    padding: 8,
    borderRadius: 50
  }
})
