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
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App'; // 👈 make sure this path matches where RootStackParamList is defined

type SewingCourseScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SewingCourse'
>;

type Props = {
  navigation: SewingCourseScreenNavigationProp;
};

export default function SewingCourseScreen({ navigation }: Props): JSX.Element {
  const courseContent: string[] = [
    'Types of stitches',
    'Threading a sewing machine',
    'Sewing buttons, zips, hems and seams',
    'Alterations',
    'Designing and sewing new garments',
  ];

  const courseBenefits: string[] = [
    'Hands-on sewing machine training',
    'Professional alteration techniques',
    'Pattern reading and creation',
    'Fabric selection and handling',
    'Business skills for tailoring services',
    'Portfolio development',
  ];

  const handleEnroll = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Course Header */}
      <View style={styles.courseHeader}>
        <View style={styles.iconContainer}>
          <Ionicons name="cut" size={40} color="#fff" />
        </View>
        <Text style={styles.courseTitle}>Sewing</Text>
        <Text style={styles.courseSubtitle}>Master the art of sewing</Text>
      </View>

      {/* Course Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Overview</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>R1500</Text>
          <Text style={styles.priceNote}>including basic materials</Text>
          <Text style={styles.paymentPlan}>or 3 payments of R500</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Purpose</Text>
          <Text style={styles.infoText}>
            To provide skills in alterations and new garment tailoring services,
            enabling students to create, modify, and repair clothing professionally.
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
            <Text style={styles.infoItemTitle}>Duration</Text>
            <Text style={styles.infoItemText}>6-month course</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="business" size={24} color="#4AAA55" />
            <Text style={styles.infoItemTitle}>Materials</Text>
            <Text style={styles.infoItemText}>Included starter kit</Text>
          </View>
        </View>
      </View>

      {/* Enrollment Section */}
      <View style={styles.enrollmentSection}>
        <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
          <Text style={styles.enrollButtonText}>Enroll Now - R1500</Text>
        </TouchableOpacity>

        <View style={styles.paymentOptions}>
          <View style={styles.paymentBadges}>
            <View style={styles.paymentBadge}>
              <Text style={styles.paymentBadgeText}>Full Payment: R1500</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// 🎨 Styles
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
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 8,
  },
  courseSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 12,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  priceContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  price: {
    fontSize: 32,
    color: '#4AAA55',
    fontWeight: '600',
  },
  priceNote: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  paymentPlan: {
    fontSize: 14,
    color: '#4FB7B3',
    fontWeight: 'bold',
    marginTop: 2,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    color: '#4AAA55',
    fontWeight: '600',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contentCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  contentText: {
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
    elevation: 2,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
    elevation: 2,
  },
  infoItemTitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    marginBottom: 4,
    fontWeight: '600',
  },
  infoItemText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
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
    marginBottom: 16,
  },
  enrollButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    letterSpacing: 1,
  },
  paymentOptions: {
    alignItems: 'center',
    marginBottom: 16,
  },
  paymentBadges: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paymentBadge: {
    backgroundColor: '#f0f9f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginHorizontal: 4,
    marginBottom: 4,
  },
  paymentBadgeText: {
    fontSize: 12,
    color: '#4AAA55',
    fontWeight: 'bold',
  },
});
