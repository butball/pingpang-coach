
import { Text, View } from '@/components/Themed';
import { ScrollView, StyleSheet } from 'react-native';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>AI PINGPONG COACH</Text>
        <Text style={styles.title}>你好</Text>
        <Text style={styles.description}>
          后天也要进步一点 🏓
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>本周训练</Text>
          <Text style={styles.statNumber}>3 次</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>训练时长</Text>
          <Text style={styles.statNumber}>120 分钟</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>今日训练建议</Text>
        <View style={styles.adviceCard}>
          <Text style={styles.adviceTitle}>
            🎯 加强反手稳定性
          </Text>
          <Text style={styles.adviceText}>
            建议今天进行 15 分钟反手拨球练习，
            注意动作稳定和击球节奏。
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>最近训练</Text>
        <View style={styles.trainingCard}>
          <Text style={styles.trainingTitle}>正手攻球训练</Text>
          <Text style={styles.trainingInfo}>
            今天 · 30 分钟
          </Text>
        </View>

        <View style={styles.trainingCard}>
          <Text style={styles.trainingTitle}>反手拨球训练</Text>
          <Text style={styles.trainingInfo}>
            昨天 · 45 分钟
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          坚持训练，持续进步！
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  header: {
    padding: 24,
    paddingTop: 35,
  },
  subtitle: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 12,
  },
  description: {
    fontSize: 15,
    color: '#777777',
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
  },
  statLabel: {
    fontSize: 13,
    color: '#777777',
  },
  statNumber: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 12,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  adviceCard: {
    backgroundColor: '#E8F1FF',
    padding: 20,
    borderRadius: 16,
  },
  adviceTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  adviceText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 23,
    marginTop: 12,
  },
  trainingCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },
  trainingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  trainingInfo: {
    fontSize: 13,
    color: '#888888',
    marginTop: 8,
  },
  footer: {
    padding: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#999999',
    fontSize: 13,
  },
});
