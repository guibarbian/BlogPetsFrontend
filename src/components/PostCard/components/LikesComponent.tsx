import styles from '../styles.module.css'
import Button from '../../Button'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

type likesProps ={
    liked:boolean,
    likes:number
}

const LikesComponent = ({liked, likes}: likesProps) => {
  return (
    <div className={styles.likesBox}>
      <Button variant='like'>
        {liked ? <FaHeart className={styles.fullHeart} /> : <FaRegHeart className={styles.heart} />}
      </Button>
      <h4>{likes}</h4>
    </div>
  )
}

export default LikesComponent
