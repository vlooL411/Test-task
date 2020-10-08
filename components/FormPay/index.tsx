import { ReactElement, useMemo, useState } from 'react'

import Billing from './Billing'
import OrderSummary from './OrderSummary/index'
import Payment from './Payment'
import Shipping from './Shipping'
import style from './styles/formpay.module.sass'
import { MovePay } from './StepPay'

const FormPay = (): ReactElement => {
    const { form, formpay } = style

    const [movePay, setMovePay] = useState<MovePay>(MovePay.Shipping)

    const moving = useMemo<ReactElement>(() => {
        switch (movePay) {
            case MovePay.Shipping:
                return <Shipping onContinue={() => setMovePay(MovePay.Billing)} />
            case MovePay.Billing:
                return <Billing onContinue={() => setMovePay(MovePay.Payment)} />
            case MovePay.Payment:
                return <Payment />
        }
    }, [movePay])

    const order = useMemo<ReactElement>(() => <OrderSummary />, [])

    return <div className={form}>
        <div className={formpay}>
            {moving}
            {order}
        </div>
    </div>
}

export default FormPay