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
      SignIn: 'signin',
      ToS: 'tos',
      Authentication: 'authentication',
      SignUp: 'signup',
      Welcome: 'welcome',
      SelectMyLineChamp: 'selectmylinechamp',
      DeleteFriend: 'deletefriend',
      ChatRoom: 'chatroom',
      FriendRequest: 'friendrequest',
      Settings: 'setting',
      ProfileEdit: 'profileedit',
    },
  },
};

export default linking;
