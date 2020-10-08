import { CartContext } from 'pages/_app'
import { ReactElement } from 'react'

import style from './header.module.sass'

const Header = (): ReactElement => {
    const { header, cart, code, quantity } = style

    return <div className={header}>
        <p>
            <span className={code}>
                <em>{'<'}</em>
                <i>/</i>
                <em>{'>'}</em>
            </span>
            <span>Front-end Developer Test Task</span>
            <span className={cart}>
                cart
                <img src='svg/cart.svg' />
                <CartContext.Consumer>
                    {({ count }) => count ?
                        <span className={quantity}>{count}</span> :
                        null}
                </CartContext.Consumer>
            </span>
        </p>
    </div>
}
export default Header