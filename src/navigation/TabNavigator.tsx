import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import colors from '../utils/colors'

import ShopStack from './ShopStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        const iconData: {
          iconName: keyof typeof MaterialCommunityIcons.glyphMap
        } = { iconName: 'office-building' }
        switch (route.name) {
          case 'ShopStack':
            iconData.iconName = focused ? 'store' : 'store-outline'
            break

          case 'AccountStack':
            iconData.iconName = focused ? 'account' : 'account-outline'
            break
        }

        return (
          <MaterialCommunityIcons
            color={color}
            name={iconData.iconName}
            size={size}
          />
        )
      },
      headerShown: false,
      tabBarActiveTintColor: colors.green1,
      tabBarLabelStyle: {
        fontFamily: 'Montserrat-Regular'
      }
    })}
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
