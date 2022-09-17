import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './src/navigation/TabNavigator'

const App = () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <TabNavigator />
  </NavigationContainer>
)

export default App
