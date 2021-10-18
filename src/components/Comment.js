import styles from "../styles/Home.module.css";
import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className={styles.postCommentsItem}>
      <div className={styles.postCommentHeader}>
        <span className={styles.postCommentAuthor}>{comment.user.name}</span>
        <span className={styles.postCommentTime}>a minute ago</span>
        <span className={styles.postCommentLikes}>22</span>
      </div>

      <div className={styles.postCommentContent}>{comment.content}</div>
    </div>
  );
};

export default Comment;
