import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Login}
      name="Login"
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
)

export default AuthStack
