// css
import styles from './MemberCard.module.css'

const MemberCard = ({member}) => {
  return (
    <div className={styles.staff_profile}>
      <img className={styles.staff_mem_photo} src="" alt="Staff Member picture placeHolder"/>
      <div className={styles.staff_mem_info}>
        <div className={styles.staff_mem_name}>{member ? member.name: "name"}</div>
        <div className={styles.staff_mem_bio}>{member ? member.aboutMe: "About Me"}</div>
      </div>
    </div>
  )
}

export default MemberCard
