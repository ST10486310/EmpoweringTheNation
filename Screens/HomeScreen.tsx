import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import CoursesScreen from './screens/CoursesScreen';
import FirstAidCourseScreen from './screens/FirstAidCourseScreen';
import SewingCourseScreen from './screens/SewingCourseScreen';

// Define all routes in your app
export type RootStackParamList = {
  Home: undefined;
  Courses: undefined;
  FirstAidCourse: undefined;
  SewingCourse: undefined;
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
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
