import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { JournalCard } from '../../src/components/ui/JournalCard';
import { StickyNote } from '../../src/components/ui/StickyNote';
import { WashiTape } from '../../src/components/ui/WashiTape';
import { PuffyButton } from '../../src/components/ui/PuffyButton';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing } from '../../src/constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { setOnboardingComplete } from '../../src/store/slices/authSlice';
import { RootState } from '../../src/store';

const logo = require('../../assets/logo.png');

export default function TrialWelcomeScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleStart = () => {
    dispatch(setOnboardingComplete());
    router.replace('/(tabs)');
  };

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.topDecor}>
          <WashiTape rotation={3} />
          <WashiTape rotation={-2} width={60} />
        </View>

        <View style={styles.content}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />

          <Text style={[Typography.h1, { color: colors.text, textAlign: 'center' }]}>
            You're All Set{user?.name ? `, ${user.name}` : ''}!
          </Text>

          <HandwrittenText variant="handLg" rotation={-1}>
            let's crush it
          </HandwrittenText>

          <JournalCard rotation={-0.5} delay={200}>
            <View style={styles.trialInfo}>
              <Text style={styles.trialEmoji}>{'\uD83C\uDF81'}</Text>
              <Text style={[Typography.h2, { color: colors.text, textAlign: 'center' }]}>
                Your Free Trial
              </Text>
              <View style={styles.trialDetails}>
                <View style={styles.trialRow}>
                  <Text style={styles.trialIcon}>{'\u23F0'}</Text>
                  <Text style={[Typography.body, { color: colors.textSecondary }]}>
                    3 days of full access
                  </Text>
                </View>
                <View style={styles.trialRow}>
                  <Text style={styles.trialIcon}>{'\uD83D\uDCDD'}</Text>
                  <Text style={[Typography.body, { color: colors.textSecondary }]}>
                    25 free questions
                  </Text>
                </View>
                <View style={styles.trialRow}>
                  <Text style={styles.trialIcon}>{'\uD83D\uDCB3'}</Text>
                  <Text style={[Typography.body, { color: colors.textSecondary }]}>
                    No card required
                  </Text>
                </View>
              </View>
            </View>
          </JournalCard>

          <StickyNote color="pink" rotation={1} delay={400}>
            <HandwrittenText variant="hand">
              pro tip: stay consistent, even 10 mins/day helps!
            </HandwrittenText>
          </StickyNote>
        </View>

        <View style={styles.bottom}>
          <PuffyButton
            title="Start My Trial"
            icon={'\uD83D\uDE80'}
            onPress={handleStart}
          />
          <HandwrittenText variant="handSm" color={colors.textTertiary}>
            My Exam. My Way.
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
  },
  content: {
    alignItems: 'center',
    gap: Spacing.xl,
  },
  logo: {
    width: 100,
    height: 100,
  },
  trialInfo: {
    alignItems: 'center',
    gap: Spacing.lg,
  },
  trialEmoji: {
    fontSize: 40,
  },
  trialDetails: {
    gap: Spacing.md,
    alignSelf: 'stretch',
  },
  trialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  trialIcon: {
    fontSize: 20,
  },
  bottom: {
    alignItems: 'center',
    gap: Spacing.md,
  },
});
