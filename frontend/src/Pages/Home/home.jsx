import Product from "../../component/Product/product";
import styles from "./home.module.css";
import img1 from "../../assets/img1.png";
export default function Home() {
  return (
    <div>
      <div className={styles.banner}>
        <img src={img1} />
      </div>
      <Product />
    </div>
  );
}