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

import Title from '../assets/text_images/community-title.svg';
import Notify from '../assets/icons/svg/notification.svg';
import Hamburger from '../assets/icons/svg/hamburger.svg';
import ChevronRight from '../assets/icons/svg/fi_chevron-right.svg';
import ThumbsUp from '../assets/icons/svg/thumbs-up.svg';
import Comment from '../assets/icons/svg/comment.svg';
import SearchIcon from '../assets/icons/svg/search-icon.svg';
import PostIcon from '../assets/icons/svg/plus.svg';

import getForums from '../data/Forums';
const Forums = getForums();

export default function CommnunityScreen() {
  const [keyword, setKeyword] = useState('');
  return (
    <View
      style={{
        width: Layout.Width,
        height: Layout.Height,
        backgroundColor: Colors.backgroundBlack,
        paddingTop: useSafeAreaInsets().top,
        paddingBottom:
          Layout.AndroidBottomBarHeight + 49 + useSafeAreaInsets().bottom,
      }}
    >
      <View style={styles.fixedButtonContainer}>
        <View
          style={{
            width: Layout.Width * 0.29,
            height: Layout.Height * 0.058,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Title width={Layout.Width * 0.166} height={Layout.Height * 0.025} />
        </View>
        <View
          style={{
            width: Layout.Width * 0.24,
            height: Layout.Height * 0.058,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Pressable style={{ width: Layout.Width * 0.12 }}>
            <Notify width={Layout.Width * 0.07} />
          </Pressable>

          <Pressable style={{ width: Layout.Width * 0.12 }}>
            <Hamburger width={Layout.Width * 0.07} />
          </Pressable>
        </View>
      </View>
      <ScrollView
        style={{
          width: Layout.Width,
          height: Layout.Height * 0.942,
          paddingHorizontal: Layout.Width * 0.06,
        }}
      >
        <View
          style={{
            height: Layout.Height * 0.39,
            paddingHorizontal: Layout.Width * 0.055,
            paddingVertical: Layout.Height * 0.03,
            backgroundColor: Colors.backgroundNavy,
            borderRadius: 10,
            marginVertical: Layout.Height * 0.03,
          }}
        >
          <View
            style={{
              height: Layout.Height * 0.03,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: Layout.Height * 0.03,
            }}
          >
            <Text style={styles.titleText}>실시간 인기 게시물</Text>
            <Pressable>
              <ChevronRight />
            </Pressable>
          </View>
          <View
            style={{
              height: Layout.Height * 0.045,
              marginBottom: Layout.Height * 0.03,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: Layout.FontScale * 12,
                }}
              >
                브실골을 위한 딜포터 1타공략 (장문주의)
              </Text>
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}
              >
                자유게시판
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}
              >
                하아아푸움
              </Text>

              <View
                style={{
                  width: Layout.Width * 0.24,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    width: Layout.Width * 0.1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <ThumbsUp height={Layout.Height * 0.02} />
                  <Text
                    style={{
                      color: Colors.textPink,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    128
                  </Text>
                </View>
                <View
                  style={{
                    width: Layout.Width * 0.1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <Comment height={Layout.Height * 0.02} />
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    95
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: Layout.Height * 0.045,
              marginBottom: Layout.Height * 0.03,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: Layout.FontScale * 12,
                }}
              >
                브실골을 위한 딜포터 1타공략 (장문주의)
              </Text>
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}
              >
                자유게시판
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}
              >
                하아아푸움
              </Text>
              <View
                style={{
                  width: Layout.Width * 0.24,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    width: Layout.Width * 0.1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <ThumbsUp height={Layout.Height * 0.02} />
                  <Text
                    style={{
                      color: Colors.textPink,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    128
                  </Text>
                </View>
                <View
                  style={{
                    width: Layout.Width * 0.1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <Comment height={Layout.Height * 0.02} />
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    95
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: Layout.Height * 0.045,
              marginBottom: Layout.Height * 0.03,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: Layout.FontScale * 12,
                }}
              >
                브실골을 위한 딜포터 1타공략 (장문주의)
              </Text>
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}
              >
                자유게시판
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}
              >
                하아아푸움
              </Text>
              <View
                style={{
                  width: Layout.Width * 0.24,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    width: Layout.Width * 0.1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <ThumbsUp height={Layout.Height * 0.02} />
                  <Text
                    style={{
                      color: Colors.textPink,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    128
                  </Text>
                </View>
                <View
                  style={{
                    width: Layout.Width * 0.1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <Comment height={Layout.Height * 0.02} />
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    95
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: Layout.Height * 0.045,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.textWhite,
                  fontSize: Layout.FontScale * 12,
                }}
              >
                브실골을 위한 딜포터 1타공략 (장문주의)
              </Text>
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}
              >
                자유게시판
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.textGray,
                  fontSize: Layout.FontScale * 10,
                }}
              >
                하아아푸움
              </Text>
              <View
                style={{
                  width: Layout.Width * 0.24,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    width: Layout.Width * 0.1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <ThumbsUp height={Layout.Height * 0.02} />
                  <Text
                    style={{
                      color: Colors.textPink,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    128
                  </Text>
                </View>
                <View
                  style={{
                    width: Layout.Width * 0.1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <Comment height={Layout.Height * 0.02} />
                  <Text
                    style={{
                      color: Colors.textFocusedPurple,
                      fontSize: Layout.FontScale * 10,
                    }}
                  >
                    95
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: Layout.Width * 0.88,
            height: Layout.Height * 0.055,
            backgroundColor: '#1A1A34',
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: Layout.Width * 0.033,
          }}
        >
          <TextInput
            placeholder={'게시판 검색하기'}
            value={keyword}
            placeholderTextColor={Colors.textUnfocusedPurple}
            onChangeText={(text: string) => setKeyword(text)}
            style={{
              width: Layout.Width * 0.7,
              color: Colors.textWhite,
              fontSize: Layout.FontScale * 14,
            }}
          ></TextInput>
          <SearchIcon />
        </View>
        <FlatList
          data={Forums}
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
        style={({ pressed }) => ({
          position: 'absolute',
          bottom:
            Layout.AndroidBottomBarHeight +
            49 +
            useSafeAreaInsets().bottom +
            Layout.Height * 0.02,
          right: Layout.Width * 0.06,
          opacity: pressed ? 0.5 : 1,
          width: Layout.Width * 0.13,
          height: Layout.Width * 0.13,
          borderRadius: Layout.Width * 0.13,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.backgroundPurple,
        })}
      >
        <PostIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 18,
    fontWeight: 'bold',
  },
  fixedButtonContainer: {
    width: Layout.Width,
    height: Layout.Height * 0.058,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
