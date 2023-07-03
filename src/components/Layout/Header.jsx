/* eslint-disable no-unused-vars */
import meals from '../../assets/meals.jpg'
import Cart from './Cart'
import './Header.css'

const Header = (props) => {
    return (
        <>
            <header className='header'>
                <h1>Sam Meals</h1>
                <Cart onClick={props.onShowCart}/> 
            </header>
            <div className='main-image'>
                <img src={meals} alt="" />
            </div>
        </>
    )
}

export default Header