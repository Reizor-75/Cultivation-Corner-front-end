// css
import styles from './AuthorCard.module.css'

import defaultPic from '../../assets/DefaultMember.jpg'


const AuthorCard = ({author}) => {
  return ( <div className={styles.author_container}>
    <div className={styles.image_container}>
        <img className={styles.staff_mem_photo} src={author.photo ? author.photo : defaultPic} alt="Author picture placeHolder"/>
        </div>
      <div className={styles.author_info}>
        {author.name}
      </div>
  </div> );
}

export default AuthorCard;