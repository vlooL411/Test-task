import { ReactElement, useMemo } from 'react'
import { CartContext } from 'pages/_app'

import style from './styles/ordersummary.module.sass'
import Block, { BlockProps } from './Block'

const OrderSummary = (): ReactElement => {
    const { summary, summary_title, count, total, blocks, info } = style

    const items: BlockProps[] = [
        { img: 'images/1.png', title: 'The Chelsea Boot', color: 'Black', quantity: 1, price: 235 },
        { img: 'images/2.png', title: 'The Twill Snap Backpack', color: 'Reverse Denim + Brown leather', quantity: 1, price: 65 },
        { img: 'images/3.png', title: 'The Twill Zip Tote', color: 'Reverse Denim + Brown leather', quantity: 1, price: 48 }]

    const Blocks = useMemo<ReactElement[]>(() =>
        items.map((props, key) => <Block {...props} key={key} />), [items, items.length])

    const subtotal = items.reduce((sum, cur) => ({ price: (sum.price + cur.price) }) as any).price
    const shipping = 'Free'
    const taxes = 12.12
    const Total = subtotal + taxes

    return <div className={summary}>
        <div className={summary_title}>
            <span>Order summary</span>
            <u>edit order</u>
        </div>
        <div className={blocks}>
            {Blocks}
            {<CartContext.Consumer>
                {({ count, changeCount }) => {
                    changeCount(Blocks.length)
                    //TODO is error update render
                    //for normal work should use with for example 
                    //return <button onClick={() => changeCount(count +- 1)}/>
                    return null
                }}
            </CartContext.Consumer>}
        </div>
        <div className={count}>
            <span>Subtotal</span><span>${subtotal}</span>
            <span>Shipping</span><span>${shipping}</span>
            <span>Subtotal</span><span>${taxes}</span>
        </div>
        <hr style={{ width: '90%' }} />
        <div className={total}>
            <span>Total</span><span>${Total}</span>
        </div>
        <p className={info}>All purchases are subject to our Terms and Conditions.</p>
    </div>
}

export default OrderSummary