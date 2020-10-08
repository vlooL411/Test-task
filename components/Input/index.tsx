import { ChangeEvent, forwardRef, MutableRefObject, ReactElement } from 'react'

import style from './input.module.sass'

type Props = {
    className?: string
    placeholder?: string
    defaultValue?: string
    type?: string
    validation?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    error?: string
}

const Input = ({ className = '', placeholder, defaultValue,
    error: errorMes = 'Errorr', type = 'text',
    validation, onChange = () => { } }: Props,
    ref: MutableRefObject<HTMLInputElement>): ReactElement => {
    const { label, label_body, input, error } = style

    return <label className={label}>
        <div className={label_body}>
            <input ref={ref} className={`${input} ${className}`}
                defaultValue={defaultValue}
                type={type} placeholder={placeholder}
                onChange={onChange} />
            {validation ? <div className={error}>{errorMes}</div> : null}
        </div>
    </label>
}

export default forwardRef(Input)