import { ReactElement } from 'react'

import style from './styles/block.module.sass'

export type BlockProps = {
    img: string
    title: string
    color: string
    quantity: number | string
    price: number
}

const Block = ({ img, title, color, quantity, price }: BlockProps): ReactElement => {
    const { block, block_title, block_color, block_quantity, block_price } = style

    return <>
        <div className={block}>
            <img src={img} />
            <div className={block_title}>{title}</div>
            <div className={block_color}>{color}</div>
            <div className={block_quantity}>Quantity: {quantity}</div>
            <div className={block_price}>${price}</div>
        </div>
        <hr />
    </>
}

export default Block