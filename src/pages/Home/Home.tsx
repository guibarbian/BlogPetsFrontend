import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PostSection from "../../components/PostSection"
import styles from "../styles.module.css"

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Header />
        <PostSection />
      </div>
      <Footer />
    </div>
  )
}

export default Home
