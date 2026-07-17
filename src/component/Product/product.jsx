import styles from './Product.module.css'
import productImage1 from '../../assets/productImage1.jpeg'
import productImage2 from '../../assets/productImage2.jpeg'
import productImage3 from '../../assets/productImage3.jpeg'

const products = [
  {
    id: 1,
    img: productImage1,
    heading: "Shirt made with silky cotton",
    desc: "LOREM 1",
    price: "$30"
  },
  {
    id: 2,
    img: productImage2,
    heading: "Shirt made with tiger's skin",
    desc: "LOREM 2",
    price: "$50"
  },
  {
    id: 3,
    img: productImage3,
    heading: "Shirt made with bear's skin",
    desc: "LOREM 3",
    price: "$55"
  }
]

export default function Product() {
  return (
    <div className={styles['product-container']}>
      {products.map((e) => (
        <div key={e.id} className={styles['product-id']}>
          <img src={e.img} alt={e.heading} />
          <h3>{e.heading}</h3>
          <p>{e.desc}</p>
          <p>{e.price}</p>
        </div>
      ))}
    </div>
  )
}
