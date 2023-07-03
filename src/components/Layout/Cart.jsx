/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Cart.css'
import CartIcon from '../Cart/CartIcon'

const Cart = (props) => {
  return (
    <button className='button' onClick={props.onClick}>
        <span className='icon'>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className='badge'>3</span>
    </button>
  )
}

export default Cart