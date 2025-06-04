
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './src/components/learn/home';
import Like from './src/components/learn/like';
import HomeDetail from './src/components/learn/home.detail';
import LikeDetail from './src/components/learn/like.detail';
import About from './src/components/learn/about';
import ChangePassword from './src/components/learn/changePassword';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === 'Home') {
              iconName = focused
                ? 'barcode'
                : 'barcode-outline';
            } else if (route.name === 'Like') {
              iconName = focused ? 'basket' : 'basket-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#CC0000',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Like" component={Like} />
      </Tab.Navigator>
    )
  }

  const StackTabs = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={BottomTabs}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="HomeDetail" component={HomeDetail}
          options={{ headerBackTitle: 'Home' }}
        />
        <Stack.Screen
          name="LikeDetail" component={LikeDetail}
          options={{ headerBackTitle: 'Like' }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home" component={BottomTabs}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="HomeDetail" component={HomeDetail}
          options={{ headerBackTitle: 'Home' }}
        />
        <Stack.Screen
          name="LikeDetail" component={LikeDetail}
          options={{ headerBackTitle: 'Like' }}
        />
      </Stack.Navigator> */}

      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={StackTabs} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


