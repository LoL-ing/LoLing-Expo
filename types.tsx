import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Home: undefined;
  Matching: undefined;
  Community: undefined;
  Social: undefined;
  More: undefined;
  NotFound: undefined;
  Profile: undefined;
  SignIn: undefined;
  ToS: undefined;
  Authentication: undefined;
  SignUp: undefined;
  Welcome: undefined;
  SelectMyLineChamp: undefined;
  DeleteFriend: undefined;
  BottomtabNavigator: undefined;
  ChatRoom: undefined;
  FriendRequest: undefined;
  Settings: undefined;
  ProfileEdit: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Matching: undefined;
  Community: undefined;
  Social: undefined;
  More: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
