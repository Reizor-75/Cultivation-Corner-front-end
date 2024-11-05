// css
import styles from './CommentCard.module.css'

// components
import AuthorCard from '../AuthorCard/AuthorCard';

const CommentCard = ({comment}) => {
  return (  
    <div className={styles.comment_container}>
      <div className={styles.comment_title}>{comment.title}</div>
      <div className={styles.comment_content}>{comment.content}</div>
      <AuthorCard author={comment.commenter}/>
    </div>
  );
}

export default CommentCard;