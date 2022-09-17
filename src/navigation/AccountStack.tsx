import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account'

const Stack = createStackNavigator()

const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Account}
      name="Account"
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
)

export default AccountStack
