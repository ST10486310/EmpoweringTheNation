import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Define the type for your navigation routes
type RootStackParamList = {
  FirstAidCourse: undefined;
  SewingCourse: undefined;
};

// Define the type for a course
interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen: keyof RootStackParamList;
}

export default function App() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const courses: Course[] = [
    {
      id: 1,
      title: 'First Aid Training',
      description:
        'Learn essential life-saving skills including CPR, wound care, and emergency response.',
      price: 'R1500',
      icon: 'medkit',
      screen: 'FirstAidCourse',
    },
    {
      id: 2,
      title: 'Sewing',
      description: 'Master sewing techniques.',
      price: 'R1500',
      icon: 'cut',
      screen: 'SewingCourse',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Courses</Text>
        <Text style={styles.headerSubtitle}>
          Choose from our selection of empowering courses
        </Text>
      </View>

      <View style={styles.coursesList}>
        {courses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.courseCard}
            onPress={() => navigation.navigate(course.screen)}
          >
            <View style={styles.courseHeader}>
              <View style={styles.iconContainer}>
                <Ionicons name={course.icon} size={24} color="#4AAA55" />
              </View>
              <View style={styles.courseTitleContainer}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.coursePrice}>{course.price}</Text>
              </View>
            </View>

            <Text style={styles.courseDescription}>{course.description}</Text>

            <View style={styles.courseFooter}>
              <Text style={styles.viewDetailsText}>View Details</Text>
              <Ionicons name="chevron-forward" size={20} color="#4FB7B3" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDF4E7',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: '#333',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontFamily: 'IstokWeb-Regular',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  coursesList: {
    padding: 16,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f9f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  courseTitleContainer: {
    flex: 1,
  },
  courseTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  coursePrice: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#4AAA55',
    marginTop: 2,
  },
  courseDescription: {
    fontFamily: 'IstokWeb-Regular',
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  viewDetailsText: {
    fontFamily: 'IstokWeb-Regular',
    fontSize: 14,
    color: '#4FB7B3',
    fontWeight: 'bold',
  },
});
