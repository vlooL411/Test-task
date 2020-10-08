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

const Billing = ({ onContinue }: Props): ReactElement => {
    const { form, title, subtitle } = style
    const { block, block_title } = style

    const [state, dispatch] = FormPay.UseReducer()
    const [error, setError] = useState<{ fullName?: boolean, email?: boolean }>({})
    const fullRef = useRef<HTMLInputElement>(null!)
    const emailRef = useRef<HTMLInputElement>(null!)

    const sameLocation = () => dispatch(FormPay.Action.BillingCpyShipping)

    const setLocation = (location: LocationT) => state.base.Billing.location = location
    const Continue = () => {
        const { value: fullName } = fullRef?.current
        const { value: email } = emailRef?.current
        if (!fullName || !email) {
            setError({ fullName: !fullName, email: !email })
            return
        }

        state.base.Shipping.fullName = fullName
        state.base.email = email
        dispatch(FormPay.Action.Shipping)
        onContinue()
    }

    const changeFullName = () => { if (error.fullName) setError({ ...error, fullName: false }) }
    const changeEmail = () => { if (error.email) setError({ ...error, email: false }) }

    const stepPay = useMemo(() => <StepPay move={MovePay.Billing} />, [])
    return <div className={form}>
        {stepPay}
        <div className={title}>
            Billing information
            <u className={subtitle} onClick={sameLocation}>Same as shipping</u>
        </div>
        <div className={block}>
            <div className={block_title}>Billing contact</div>
            <Input ref={fullRef} placeholder='Full Name'
                onChange={changeFullName}
                validation={error.fullName} error='Please enter invoicing full name'
                defaultValue={state.base.Billing.fullName} />
            <Input ref={emailRef} placeholder='Email Address' type='email'
                onChange={changeEmail}
                validation={error.email} error='Please enter invoicing email' />
        </div>
        <Address title='Billing Address'
            onChange={setLocation}
            location={state.base.Billing.location} />
        <button onClick={Continue}>Continue</button>
    </div>
}

export default Billing