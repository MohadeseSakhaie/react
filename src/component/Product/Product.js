import styles from "./product.module.css";
import { FaTrash, FaAngleDown, FaAngleUp } from "react-icons/fa";

const Product = (props) => {
    return (
        <div className={styles.product}>
            <p> Product Name: {props.product.title} cours </p>
            <p> Price: {props.product.price} </p>
            <input type="text" className={styles.input} onChange={props.onChange}></input>
            <button className={`${styles.butt} ${styles.inc}`} onClick={props.onIncr}> {<FaAngleUp/>}</button>
            <p> {props.product.quantity}</p>
            <button
                className={`${styles.butt} ${styles.dec}`}
                onClick={props.onDecr}> {props.product.quantity > 1 ? <FaAngleDown /> : <FaTrash />}
            </button>
            <button className={styles.butt} onClick={props.onDelete}> delete</button>
        </div>
    );
}

export default Product;