// css
import styles from './CommentCard.module.css'

// components
import AuthorCard from '../AuthorCard/AuthorCard';

const CommentCard = ({comment, deleteComment}) => {
  return (  
    <div className={styles.comment_container}>  
      <div className={styles.top_row}>    
        <AuthorCard author={comment.commenter}/>
        <button className={styles.delete_button}onClick={()=> deleteComment(comment._id)}>Delete</button>
      </div>
      <div className={styles.comment_title}>{comment.title}</div>
      <div className={styles.comment_content}>{comment.content}</div>
      <hr/>
    </div>
  );
}

export default CommentCard;