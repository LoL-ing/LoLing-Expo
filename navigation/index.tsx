import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import HomeScreen from '../screens/HomeScreen';
import MatchingScreen from '../screens/MatchingScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import CommunityScreen from '../screens/CommunityScreen';
import SocialScreen from '../screens/SocialScreen';
import MoreScreen from '../screens/MoreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignInScreen from '../screens/SignInScreen';
import ToSScreen from '../screens/ToSScreen';
import AuthScreen from '../screens/AuthScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SelectMyLineChampScreen from '../screens/SelectMyLineChampScreen';
import DeleteFriendScreen from '../screens/DeleteFriendScreen';
import ChatRoomScreen from '../screens/ChatroomScreen';
import FriendRequestScreen from '../screens/FriendRequestScreen';
import SettingsScreen from '../screens/SettingsScreen';

import HomeIconSelected from '../assets/icons/svg/home-icon-selected.svg';
import HomeIconUnselected from '../assets/icons/svg/home-icon-unselected.svg';
import MatchingIconSelected from '../assets/icons/svg/matching-icon-selected.svg';
import MatchingIconUnselected from '../assets/icons/svg/matching-icon-unselected.svg';
import ForumIconSelected from '../assets/icons/svg/forum-icon-selected.svg';
import ForumIconUnselected from '../assets/icons/svg/forum-icon-unselected.svg';
import ChattingIconSelected from '../assets/icons/svg/chatting-icon-selected.svg';
import ChattingIconUnselected from '../assets/icons/svg/chatting-icon-unselected.svg';
import SettingIconSelected from '../assets/icons/svg/setting-icon-selected.svg';
import SettingIconUnselected from '../assets/icons/svg/setting-icon-unselected.svg';
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={'SignIn'}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ToS"
        component={ToSScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Authentication"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="SelectMyLineChamp"
        component={SelectMyLineChampScreen}
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="DeleteFriend"
        component={DeleteFriendScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FriendRequest"
        component={FriendRequestScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false, animation: 'fade' }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  console.log();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.backgroundBlack,
          borderTopWidth: 0,
          // height: Layout.AndroidBottomBarHeight,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeIconSelected width={30} height={30} />
            ) : (
              <HomeIconUnselected width={30} height={30} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Matching"
        component={MatchingScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MatchingIconSelected width={30} height={30} />
            ) : (
              <MatchingIconUnselected width={30} height={30} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityScreen}
        options={({ navigation }: RootTabScreenProps<'Community'>) => ({
          title: 'Community',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ForumIconSelected width={30} height={30} />
            ) : (
              <ForumIconUnselected width={30} height={30} />
            ),
        })}
      />
      <BottomTab.Screen
        name="Social"
        component={SocialScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ChattingIconSelected width={30} height={30} />
            ) : (
              <ChattingIconUnselected width={30} height={30} />
            ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SettingIconSelected width={30} height={30} />
            ) : (
              <SettingIconUnselected width={30} height={30} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}
