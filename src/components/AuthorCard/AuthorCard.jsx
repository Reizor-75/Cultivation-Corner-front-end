// css
import styles from './AuthorCard.module.css'

import defaultPic from '../../assets/DefaultMember.jpg'


const AuthorCard = ({author}) => {
  return ( <div className={styles.author_container}>
    <div className={styles.image_container}>
        <img className={styles.author_photo} src={author.photo ? author.photo : defaultPic} alt="Author picture placeHolder"/>
        </div>
      <div className={styles.author_info}>
        By {author.name}
      </div>
  </div> );
}

export default AuthorCard;