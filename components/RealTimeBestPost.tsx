import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import ThumbsUp from '../assets/icons/svg/thumbs-up.svg';
import Comment from '../assets/icons/svg/comment.svg';

export default function RealTimeBestPost(props: {
  title: string;
  forum: string;
  writer: string;
  like: number;
  comment: number;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.forumTitleText}>{props.forum}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.writerText}>{props.writer}</Text>
        <View style={styles.likeAndCommentContainer}>
          <View style={styles.likeContainer}>
            <ThumbsUp height={Layout.Height * 0.02} />
            <Text style={styles.numberOfLikesText}>{props.like}</Text>
          </View>
          <View style={styles.commentContainer}>
            <Comment height={Layout.Height * 0.02} />
            <Text style={styles.numberOfCommentsText}>{props.comment}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Layout.Height * 0.045,
    justifyContent: 'space-between',
    marginBottom: Layout.Height * 0.03,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: Colors.textWhite,
    fontSize: Layout.FontScale * 12,
  },
  forumTitleText: {
    color: Colors.textGray,
    fontSize: Layout.FontScale * 10,
  },
  writerText: {
    color: Colors.textGray,
    fontSize: Layout.FontScale * 10,
  },
  likeContainer: {
    width: Layout.Width * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  commentContainer: {
    width: Layout.Width * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  numberOfLikesText: {
    color: Colors.textPink,
    fontSize: Layout.FontScale * 10,
  },
  numberOfCommentsText: {
    color: Colors.textFocusedPurple,
    fontSize: Layout.FontScale * 10,
  },
  likeAndCommentContainer: {
    width: Layout.Width * 0.24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
