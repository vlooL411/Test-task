import Input from 'components/Input'
import { ReactElement, useMemo, useRef, useState } from 'react'

import Address from './Address'
import style from './styles/form.module.sass'
import StepPay, { MovePay } from './StepPay'
import { LocationT } from './Address/Location'
import { FormPay } from './Reducer'

type Props = {
    onContinue: () => void
}

const Shipping = ({ onContinue = () => { } }: Props): ReactElement => {
    const { form, title, block } = style
    const { block_title, block_double, block_help } = style

    const [state, dispatch] = FormPay.UseReducer()
    const [error, setError] = useState<{ fullName?: boolean, phone?: boolean }>({})
    const fullRef = useRef<HTMLInputElement>(null!)
    const phoneRef = useRef<HTMLInputElement>(null!)

    const setLocation = (location: LocationT) => state.base.Shipping.location = location
    const Continue = () => {
        const { value: fullName } = fullRef?.current
        const { value: phone } = phoneRef?.current
        if (!fullName || !phone) {
            setError({ fullName: !fullName, phone: !phone })
            return
        }

        state.base.Shipping.fullName = fullName
        state.base.phone = phone
        dispatch(FormPay.Action.Shipping)
        onContinue()
    }

    const changeFullName = () => { if (error.fullName) setError({ ...error, fullName: false }) }
    const changePhone = () => { if (error.phone) setError({ ...error, phone: false }) }

    const stepPay = useMemo(() => <StepPay move={MovePay.Shipping} />, [])
    return <div className={form}>
        {stepPay}
        <div className={title}>Shipping info</div>
        <div className={block}>
            <div className={block_title}>Recipient</div>
            <Input ref={fullRef} onChange={changeFullName}
                validation={error.fullName} error='Please enter recipient full name'
                placeholder='Full Name' />
            <div className={block_double}>
                <Input ref={phoneRef} onChange={changePhone}
                    validation={error.phone} error='Please enter recipient phone'
                    placeholder='Daytime Phone' type='tel' />
                <span className={block_help}>For delivery questions only</span>
            </div>
        </div>
        <Address title='Address' onChange={setLocation} />
        <button onClick={Continue}>Continue</button>
    </div>
}

export default Shipping