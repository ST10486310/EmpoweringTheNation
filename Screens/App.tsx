import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import HomeScreen from './Screens/HomeScreen';
import CoursesScreen from './Screens/CoursesScreen';
import FirstAidCourseScreen from './Screens/CoursesScreen';
import SewingCourseScreen from './Screens/SewingCourseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4AAA55',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Empowering the Nation' }}
        />
        <Stack.Screen 
          name="Courses" 
          component={CoursesScreen}
          options={{ title: 'Our Courses' }}
        />
        <Stack.Screen 
          name="FirstAidCourse" 
          component={FirstAidCourseScreen}
          options={{ title: 'First Aid Training' }}
        />
        <Stack.Screen 
          name="SewingCourse" 
          component={SewingCourseScreen}
          options={{ title: 'Sewing Course' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}