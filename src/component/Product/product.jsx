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
  },
  {
    id: 4,
    img: productImage1,
    heading: "Shirt made with wolf's skin",
    desc: "LOREM 4",
    price: "$35"
  },
  {
    id: 5,
    img: productImage2,
    heading: "Shirt made with duck's skin",
    desc: "LOREM 5",
    price: "$25"
  }
]

export default function Product() {
  return (
    <div className={styles.productPage}>
   <h1 className={styles.heading} >ProCa\\ssgsduct Page</h1>
   <div className={styles.productContanier}>

      {products.map((e) => (
        <div key={e.id} className={styles.productId}>
          <img src={e.img} alt={e.heading} />
          <h3>{e.heading}</h3>
          <p>{e.desc}</p>
          <p>{e.price}</p>
        </div>
      ))}
      </div>
    </div>
  )
}
