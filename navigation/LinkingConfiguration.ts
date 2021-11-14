/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Matching: {
            screens: {
              MatchingScreen: 'matching',
            },
          },
          Community: {
            screens: {
              CommunityScreen: 'community',
            },
          },
          Social: {
            screens: {
              SocialScreen: 'social',
            },
          },
          More: {
            screens: {
              MoreScreen: 'more',
            },
          },
        },
      },
      Profile: 'profile',
      NotFound: '*',
      SignUp1: 'signup1',
      Authentication: 'authentication',
    },
  },
};

export default linking;
