import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Define navigation type
type RootStackParamList = {
  CoursesScreen: undefined;
  FirstAidCourse: undefined;
};

export default function FirstAidCourseScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const courseContent: string[] = [
    'Wounds and bleeding',
    'Burns and fractures',
    'Emergency scene management',
    'Cardio-Pulmonary Resuscitation (CPR)',
    'Respiratory distress e.g., Choking, blocked airway',
  ];

  const courseBenefits: string[] = [
    'Certified first aid training',
    'Hands-on practical sessions',
    'Small class sizes',
    'Certificate of completion',
    'Skills applicable in workplace and home',
    'Meets industry safety standards',
  ];

  const handleEnroll = (): void => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Course Header */}
      <View style={styles.courseHeader}>
        <View style={styles.iconContainer}>
          <Ionicons name="medkit" size={40} color="#fff" />
        </View>
        <Text style={styles.courseTitle}>First Aid Training</Text>
        <Text style={styles.courseSubtitle}>
          Essential life-saving skills for emergencies
        </Text>
      </View>

      {/* Course Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Overview</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>R1500</Text>
          <Text style={styles.priceNote}>including all materials</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Purpose</Text>
          <Text style={styles.infoText}>
            To provide first aid awareness and basic life support to individuals,
            enabling them to respond effectively in emergency situations.
          </Text>
        </View>
      </View>

      {/* Course Content */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Content</Text>
        <View style={styles.contentCard}>
          {courseContent.map((item, index) => (
            <View key={index} style={styles.contentItem}>
              <Ionicons name="checkmark" size={20} color="#4AAA55" />
              <Text style={styles.contentText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Course Benefits */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Benefits</Text>
        <View style={styles.benefitsCard}>
          {courseBenefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <Ionicons name="star" size={16} color="#4FB7B3" />
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Additional Info */}
      <View style={styles.section}>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Ionicons name="time" size={24} color="#4AAA55" />
            <Text style={styles.infoItemTitle}>Duration six months</Text>
          </View>
        </View>
      </View>

      {/* Enrollment Section */}
      <View style={styles.enrollmentSection}>
        <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
          <Text style={styles.enrollButtonText}>Enroll Now - R1500</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => Linking.openURL('tel:+1234567890')}
        >
          <Ionicons name="call" size={20} color="#4FB7B3" />
          <Text style={styles.contactButtonText}>Contact for Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDF4E7',
  },
  courseHeader: {
    backgroundColor: '#4AAA55',
    padding: 24,
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  courseTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  courseSubtitle: {
    fontFamily: 'IstokWeb-Regular',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#333',
    marginBottom: 16,
  },
  priceContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  price: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: '#4AAA55',
  },
  priceNote: {
    fontFamily: 'IstokWeb-Regular',
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  infoTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#4AAA55',
    marginBottom: 8,
  },
  infoText: {
    fontFamily: 'IstokWeb-Regular',
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contentCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  contentText: {
    fontFamily: 'IstokWeb-Regular',
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    flex: 1,
    lineHeight: 20,
  },
  benefitsCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  benefitText: {
    fontFamily: 'IstokWeb-Regular',
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    marginBottom: 4,
  },
  enrollmentSection: {
    padding: 20,
    paddingTop: 0,
  },
  enrollButton: {
    backgroundColor: '#4FB7B3',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
  },
  enrollButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  contactButtonText: {
    fontFamily: 'IstokWeb-Regular',
    fontSize: 16,
    color: '#4FB7B3',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});
