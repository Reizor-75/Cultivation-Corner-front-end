//npm modules
import { useState } from 'react';

//css
import styles from './NewComment.module.css'

const NewComment = ({handleAddComment}) => {
  const [formData, setFormData] = useState({})

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleAddComment(formData)
    setFormData({ title: '', content: '' })
  }
  return ( 
    <form className={styles.new_comment_container} onSubmit={handleSubmit}>
      <input
          type='text'
          required
          name="title"
          value={formData.title}
          placeholder="Headline"
          onChange={handleChange}
          className={styles.title}
        />
      <textarea
          required
          name="content"
          value={formData.content}
          placeholder="Comment"
          onChange={handleChange}
          className={styles.content}
        />      
        <button type="submit" className="submit_button">Submit</button>
    </form> 
  );
}

export default NewComment;