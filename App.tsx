import * as React from 'react';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { StatusBar, View, Text } from 'react-native';

import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <RecoilRoot>
        <Suspense
          fallback={
            <View>
              <Text>Loading...</Text>
            </View>
          }
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar
            backgroundColor={'transparent'}
            translucent={true}
            barStyle="light-content"
          />
        </Suspense>
      </RecoilRoot>
    );
  }
}
