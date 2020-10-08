import { ReactElement, useMemo } from 'react'

import Input from '../Input'
import style from './styles/form.module.sass'
import StepPay, { MovePay } from './StepPay'

type Props = {
}

const Payment = ({ }: Props): ReactElement => {
    const { form, title, info, info_img, block } = style
    const { block_title, doubleblock } = style

    const stepPay = useMemo(() => <StepPay move={MovePay.Payment} />, [])

    return <form method='POST' className={form}>
        {stepPay}
        <div className={title}>Payment</div>
        <div className={info}>
            <div className={info_img}>
                <img src="svg/secure.svg" />
                <span />
                <i />
            </div>
            <p>This is a secure 128-bit SSL encrypted payment</p>
        </div>
        <div className={block}>
            <div className={block_title}>Cardholder Name</div>
            <Input placeholder='Name as it appears on your card' />
        </div>
        <div className={block}>
            <div className={block_title}>Cardholder Name</div>
            <Input placeholder='XXXX XXXX XXXX XXXX XXXX' />
        </div>
        <div className={doubleblock}>
            <div className={block}>
                <div className={block_title}>Expire date</div>
                <Input placeholder='MM / YY' />
            </div>
            <div className={block}>
                <div className={block_title}>Security Code</div>
                <Input />
            </div>
        </div>
        <button>Pay Securely</button>
    </form>
}

export default Payment