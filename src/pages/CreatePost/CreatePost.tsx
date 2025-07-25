import CreatePostComponent from '../../components/CreatePostComponent'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from '../styles.module.css'

const CreatePost = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
        <CreatePostComponent />
      </div>
      <Footer />
    </div>
  )
}

export default CreatePost
