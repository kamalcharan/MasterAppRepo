import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { WashiTape } from '../../src/components/ui/WashiTape';
import { PuffyButton } from '../../src/components/ui/PuffyButton';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing } from '../../src/constants/theme';

const logo = require('../../assets/logo.png');

export default function WelcomeScreen() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.topDecor}>
          <WashiTape rotation={3} />
          <WashiTape rotation={-2} width={60} />
        </View>

        <View style={styles.hero}>
          <Image source={logo} style={styles.logoImage} resizeMode="contain" />
          <Text style={[Typography.display, { color: colors.text }]}>
            VaNi
          </Text>
          <HandwrittenText variant="hand" rotation={-2}>
            writing my own future...
          </HandwrittenText>
        </View>

        <JournalCard rotation={-0.5} delay={200}>
          <View style={styles.features}>
            <View style={styles.featureRow}>
              <Text style={styles.featureIcon}>{'\u26A1'}</Text>
              <View style={styles.featureText}>
                <Text style={[Typography.h3, { color: colors.text }]}>Smart Practice</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>
                  20 questions. 30 minutes. Pure focus.
                </Text>
              </View>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureIcon}>{'\uD83C\uDFA8'}</Text>
              <View style={styles.featureText}>
                <Text style={[Typography.h3, { color: colors.text }]}>Your Language</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>
                  English + Telugu. Switch anytime.
                </Text>
              </View>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureIcon}>{'\uD83C\uDFAF'}</Text>
              <View style={styles.featureText}>
                <Text style={[Typography.h3, { color: colors.text }]}>Know Your Weak Spots</Text>
                <Text style={[Typography.bodySm, { color: colors.textSecondary }]}>
                  Analytics that actually help you grow.
                </Text>
              </View>
            </View>
          </View>
        </JournalCard>

        <View style={styles.bottom}>
          <PuffyButton
            title="Let's Go"
            icon={'\u270D\uFE0F'}
            onPress={() => router.push('/(auth)/onboarding')}
          />
          <HandwrittenText variant="handSm" color={colors.textTertiary}>
            3-day free trial. No cap.
          </HandwrittenText>
        </View>
      </SafeAreaView>
    </DotGridBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.xl,
    justifyContent: 'space-between',
  },
  topDecor: {
    flexDirection: 'row',
    gap: 20,
    alignSelf: 'center',
    marginTop: Spacing.md,
  },
  hero: {
    alignItems: 'center',
    gap: Spacing.md,
  },
  logoImage: {
    width: 140,
    height: 140,
  },
  features: {
    gap: Spacing.xl,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
  },
  featureIcon: {
    fontSize: 28,
  },
  featureText: {
    flex: 1,
    gap: 2,
  },
  bottom: {
    alignItems: 'center',
    gap: Spacing.md,
  },
});
