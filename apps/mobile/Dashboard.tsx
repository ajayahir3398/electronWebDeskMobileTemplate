import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { StatCard, RecentActivity } from '@inventory/ui';

export function Dashboard() {
  const stats = [
    { label: 'Total Products', value: '1,234', trend: '+12%', trendColor: '#28a745' },
    { label: 'Low Stock', value: '23', trend: '-5%', trendColor: '#dc3545' },
    { label: 'Orders Today', value: '45', trend: '+8%', trendColor: '#28a745' },
    { label: 'Revenue', value: '$12k', trend: '+15%', trendColor: '#28a745' },
  ];

  const activities = [
    { id: '1', action: 'Stock Updated', item: 'MacBook Pro M3', time: '2h ago' },
    { id: '2', action: 'New Order', item: '#ORD-2024-001', time: '4h ago' },
    { id: '3', action: 'Low Stock Value', item: 'Wireless Mouse', time: '5h ago' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
            <Text style={styles.headerTitle}>Inventory</Text>
            <Text style={styles.headerSubtitle}>Good Morning, Admin</Text>
        </View>
        <View style={styles.avatarPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Overview</Text>
        </View>

        <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
                <View key={index} style={styles.statWrapper}>
                    <StatCard {...stat} />
                </View>
            ))}
        </View>

        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent</Text>
            <TouchableOpacity><Text style={styles.link}>View All</Text></TouchableOpacity>
        </View>

        <RecentActivity items={activities} />

        <View style={styles.actionSection}>
            <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Scan Product</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
  scrollContent: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  link: {
    color: '#007bff',
    fontWeight: '600',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8, // Negative margin to offset padding
  },
  statWrapper: {
    width: '50%', // 2 columns
    padding: 0,
  },
  actionSection: {
    marginTop: 20,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
