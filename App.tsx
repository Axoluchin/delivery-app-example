import { useState, useEffect, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { onAuthStateChanged } from 'firebase/auth'

import TabNavigator from './src/navigation/TabNavigator'
import AuthStack from './src/navigation/AuthStack'
import font from './src/utils/font'
import { auth } from './src/utils/firebase'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [fontsLoaded] = useFonts(font)

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync()
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  onAuthStateChanged(auth, (user) => {
    setIsLogin(!!user)
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar style="auto" translucent={false} />
      {isLogin ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default App
