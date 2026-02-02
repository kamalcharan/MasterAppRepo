import { Redirect } from 'expo-router';

export default function Index() {
  // For R1: always go to auth/welcome. In R2 this will check auth state.
  return <Redirect href="/(auth)/welcome" />;
}
