import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ViewToken,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DotGridBackground } from '../../src/components/ui/DotGridBackground';
import { PuffyButton } from '../../src/components/ui/PuffyButton';
import { HandwrittenText } from '../../src/components/ui/HandwrittenText';
import { useTheme } from '../../src/hooks/useTheme';
import { Typography, Spacing, BorderRadius } from '../../src/constants/theme';

const { width } = Dimensions.get('window');

interface Slide {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  doodle: string;
}

const slides: Slide[] = [
  {
    id: '1',
    emoji: '\uD83C\uDFAF',
    title: 'NEET & CUET — Both!',
    subtitle: 'Preparing for NEET, CUET, or both? We\'ve got you covered. Pick your exam and go.',
    doodle: 'one app, all exams \u2728',
  },
  {
    id: '2',
    emoji: '\uD83D\uDCDA',
    title: 'Subjects That Matter',
    subtitle: 'NEET = 4 subjects (Physics, Chemistry, Botany, Zoology). CUET = pick your 6. We handle both.',
    doodle: 'no filler, only real stuff \uD83D\uDD25',
  },
  {
    id: '3',
    emoji: '\uD83C\uDF0D',
    title: 'English + Telugu',
    subtitle: 'Practice in the language you think in. Switch anytime between English and Telugu.',
    doodle: 'your language, your comfort \uD83D\uDCAA',
  },
];

export default function OnboardingScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const flatListRef = useRef<FlatList<Slide>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      router.push('/(auth)/sign-up');
    }
  };

  const renderSlide = ({ item }: { item: Slide }) => (
    <View style={[styles.slide, { width }]}>
      <Text style={styles.slideEmoji}>{item.emoji}</Text>
      <Text style={[Typography.h1, { color: colors.text, textAlign: 'center' }]}>
        {item.title}
      </Text>
      <Text
        style={[
          Typography.body,
          { color: colors.textSecondary, textAlign: 'center', paddingHorizontal: Spacing.xl },
        ]}
      >
        {item.subtitle}
      </Text>
      <HandwrittenText variant="hand" rotation={-2}>
        {item.doodle}
      </HandwrittenText>
    </View>
  );

  return (
    <DotGridBackground>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.skipRow}>
          <PuffyButton
            title="Skip"
            variant="ghost"
            onPress={() => router.push('/(auth)/sign-up')}
            style={styles.skipBtn}
          />
        </View>

        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={renderSlide}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          bounces={false}
        />

        <View style={styles.footer}>
          <View style={styles.dots}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  {
                    backgroundColor: i === currentIndex ? colors.primary : colors.dotGrid,
                    width: i === currentIndex ? 24 : 8,
                  },
                ]}
              />
            ))}
          </View>

          <PuffyButton
            title={currentIndex === slides.length - 1 ? "Let's Start" : 'Next'}
            icon={currentIndex === slides.length - 1 ? '\uD83D\uDE80' : '\u27A1\uFE0F'}
            onPress={handleNext}
          />
        </View>
      </SafeAreaView>
    </DotGridBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipRow: {
    alignItems: 'flex-end',
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.sm,
  },
  skipBtn: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.xl,
    paddingHorizontal: Spacing.xl,
  },
  slideEmoji: {
    fontSize: 72,
  },
  footer: {
    alignItems: 'center',
    gap: Spacing.xl,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  dots: {
    flexDirection: 'row',
    gap: Spacing.sm,
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: BorderRadius.round,
  },
});
