import { Link } from 'react-router-dom'
import styles from '../styles.module.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.main}>
          <Header />
          <h1>Not Found Page</h1>
          <Link to={"/"}>
            <button>Go back home</button>
          </Link>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound
