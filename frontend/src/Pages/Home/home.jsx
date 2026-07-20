import Product from "../../component/Product/product";
import style from "./home.module.css";
import img1 from "../../assets/img1.png";
export default function Home() {
  return (
    <div>
      <img src={img1} />
      <Product />
    </div>
  );
}