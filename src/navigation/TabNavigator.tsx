import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ShopStack from './ShopStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabelStyle: {
        fontFamily: 'Montserrat-Regular'
      }
    }}
  >
    <Tab.Screen
      component={ShopStack}
      name="ShopStack"
      options={{ title: 'Tienda' }}
    />
    <Tab.Screen
      component={AccountStack}
      name="AccountStack"
      options={{ title: 'Cuenta' }}
    />
  </Tab.Navigator>
)

export default TabNavigator
