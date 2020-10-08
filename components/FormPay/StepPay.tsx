import { ReactElement } from 'react'

import style from './styles/steppay.module.sass'

export enum MovePay {
    Shipping,
    Billing,
    Payment
}

type Props = {
    move: MovePay
}

const StepPay = ({ move }: Props): ReactElement => {
    const { movepay, movepay_current, movepay_split } = style

    const current = (cond: boolean): string => cond ? movepay_current : null

    const isShipping = current(move == MovePay.Shipping)
    const isBilling = current(move == MovePay.Billing)
    const isPayment = current(move == MovePay.Payment)

    return <div className={movepay}>
        <span className={isShipping}>Shipping</span>
        <span className={`${movepay_split} ${isShipping}`}>{'>'}</span>
        <span className={isBilling}>Billing</span>
        <span className={`${movepay_split} ${isBilling}`}>{'>'}</span>
        <span className={isPayment}>Payment</span>
    </div>
}

export default StepPay