// css
import styles from './CommentCard.module.css'

// components
import AuthorCard from '../AuthorCard/AuthorCard';

const CommentCard = ({comment}) => {
  return (  
    <div className={styles.comment_container}>      
      <AuthorCard author={comment.commenter}/>
      <button>Delete</button>
      <div className={styles.comment_title}>{comment.title}</div>
      <div className={styles.comment_content}>{comment.content}</div>
      <hr/>
    </div>
  );
}

export default CommentCard;