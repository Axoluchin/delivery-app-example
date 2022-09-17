import { createStackNavigator } from '@react-navigation/stack'
import Shop from '../screens/Shop'

const Stack = createStackNavigator()

const ShopStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Shop}
      name="Shop"
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
)

export default ShopStack
