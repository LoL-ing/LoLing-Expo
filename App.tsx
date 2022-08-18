import { StatusBar } from 'react-native';
import React, { Suspense } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { RecoilRoot } from 'recoil';
import { Text } from 'react-native-svg';
import Colors from './constants/Colors';

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
          {/* <SafeAreaProvider> */}
          <Navigation colorScheme={colorScheme} />
          <StatusBar
            backgroundColor={'transparent'}
            translucent={true}
            barStyle="light-content"
          />

          {/* </SafeAreaProvider> */}
        </Suspense>
      </RecoilRoot>
    );
  }
}
