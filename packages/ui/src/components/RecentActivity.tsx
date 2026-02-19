import { StyleSheet, Text, View } from 'react-native';

interface ActivityItem {
  id: string;
  action: string;
  item: string;
  time: string;
}

interface RecentActivityProps {
  items: ActivityItem[];
}

export function RecentActivity({ items }: RecentActivityProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activity</Text>
      {items.map((activity) => (
        <View key={activity.id} style={styles.item}>
          <View>
            <Text style={styles.action}>{activity.action}</Text>
            <Text style={styles.subtext}>{activity.item}</Text>
          </View>
          <Text style={styles.time}>{activity.time}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  action: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
  },
  subtext: {
    fontSize: 12,
    color: '#868e96',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#adb5bd',
  },
});
