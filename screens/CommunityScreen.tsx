import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Forum from '../components/Forum';
import RealTimeBestPost from '../components/RealTimeBestPost';

import Title from '../assets/text_images/community-title.svg';
import Notify from '../assets/icons/svg/notification.svg';
import Hamburger from '../assets/icons/svg/hamburger.svg';
import ChevronRight from '../assets/icons/svg/fi_chevron-right.svg';
import SearchIcon from '../assets/icons/svg/search-icon.svg';
import PostIcon from '../assets/icons/svg/plus.svg';

import getForums from '../data/Forums';
const Forums = getForums();

function searchForum(forumList: typeof Forums, title: string) {
  if (title === '') {
    return forumList;
  } else {
    return forumList.filter(forum => forum.title.includes(title));
  }
}
export default function CommnunityScreen() {
  const [keyword, setKeyword] = useState('');
  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom:
            Layout.AndroidBottomBarHeight + 49 + useSafeAreaInsets().bottom,
          paddingTop: useSafeAreaInsets().top,
        },
      ]}
    >
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Title width={Layout.Width * 0.166} height={Layout.Height * 0.025} />
        </View>
        <View style={styles.headerIconContainer}>
          <Pressable style={{ width: Layout.Width * 0.12 }}>
            <Notify width={Layout.Width * 0.07} />
          </Pressable>

          <Pressable style={{ width: Layout.Width * 0.12 }}>
            <Hamburger width={Layout.Width * 0.07} />
          </Pressable>
        </View>
      </View>

      <ScrollView style={styles.bodyContainer}>
        <View style={styles.realTimeBestPostsContainer}>
          <View style={styles.realTimeBestPostsTitleContainer}>
            <Text style={styles.titleText}>실시간 인기 게시물</Text>
            <Pressable>
              <ChevronRight />
            </Pressable>
          </View>
          <RealTimeBestPost
            title={'브실골을 위한 딜포터 1타공략 (장문주의)'}
            forum={'자유게시판'}
            writer={'하아아푸움'}
            like={128}
            comment={95}
          />
          <RealTimeBestPost
            title={'브실골을 위한 딜포터 1타공략 (장문주의)'}
            forum={'자유게시판'}
            writer={'하아아푸움'}
            like={128}
            comment={95}
          />
          <RealTimeBestPost
            title={'브실골을 위한 딜포터 1타공략 (장문주의)'}
            forum={'자유게시판'}
            writer={'하아아푸움'}
            like={128}
            comment={95}
          />
          <RealTimeBestPost
            title={'브실골을 위한 딜포터 1타공략 (장문주의)'}
            forum={'자유게시판'}
            writer={'하아아푸움'}
            like={128}
            comment={95}
          />
        </View>
        <View style={styles.searchForumContainer}>
          <TextInput
            placeholder={'게시판 검색하기'}
            value={keyword}
            placeholderTextColor={Colors.textUnfocusedPurple}
            onChangeText={(text: string) => setKeyword(text)}
            style={styles.searchForumTextInput}
          ></TextInput>
          <SearchIcon />
        </View>
        <FlatList
          data={searchForum(Forums, keyword)}
          renderItem={({ item }) => (
            <Forum
              bookmark={item.bookmark}
              title={item.title}
              recentPost={item.recentPost}
            />
          )}
        />
      </ScrollView>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
            bottom:
              Layout.AndroidBottomBarHeight +
              49 +
              useSafeAreaInsets().bottom +
              Layout.Height * 0.02,
          },
          styles.floatingButton,
        ]}
      >
        <PostIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Layout.Width,
    height: Layout.Height,
    backgroundColor: Colors.backgroundBlack,
  },
  titleContainer: {
    width: Layout.Width * 0.29,
    height: Layout.Height * 0.058,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 18,
    fontWeight: 'bold',
  },
  headerContainer: {
    width: Layout.Width,
    height: Layout.Height * 0.058,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIconContainer: {
    width: Layout.Width * 0.24,
    height: Layout.Height * 0.058,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyContainer: {
    width: Layout.Width,
    height: Layout.Height * 0.942,
    paddingHorizontal: Layout.Width * 0.06,
  },
  realTimeBestPostsContainer: {
    height: Layout.Height * 0.39,
    paddingHorizontal: Layout.Width * 0.055,
    paddingVertical: Layout.Height * 0.03,
    backgroundColor: Colors.backgroundNavy,
    borderRadius: 10,
    marginVertical: Layout.Height * 0.03,
  },
  realTimeBestPostsTitleContainer: {
    height: Layout.Height * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.Height * 0.03,
  },
  searchForumContainer: {
    width: Layout.Width * 0.88,
    height: Layout.Height * 0.055,
    backgroundColor: '#1A1A34',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.Width * 0.033,
    marginBottom: Layout.Height * 0.03,
  },
  searchForumTextInput: {
    width: Layout.Width * 0.7,
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 14,
  },
  floatingButton: {
    position: 'absolute',
    right: Layout.Width * 0.06,
    width: Layout.Width * 0.13,
    height: Layout.Width * 0.13,
    borderRadius: Layout.Width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundPurple,
  },
});
