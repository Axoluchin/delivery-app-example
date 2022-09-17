import { useEffect, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './src/navigation/TabNavigator'
import font from './src/utils/font'

const App = () => {
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

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar style="auto" translucent={false} />
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App
