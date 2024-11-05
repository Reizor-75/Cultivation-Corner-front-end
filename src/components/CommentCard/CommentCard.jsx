// css
import styles from './CommentCard.module.css'

const CommentCard = ({comment}) => {
  return (  
    <div className={styles.comment_container}>
      <div className={styles.comment_title}>{comment.title}</div>
      <div className={styles.comment_content}>{comment.content}</div>
    </div>
  );
}

export default CommentCard;