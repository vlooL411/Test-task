import { ChangeEvent, forwardRef, MutableRefObject, ReactElement, useMemo } from 'react'

import countries from './countries.json'
import style from './input.module.sass'

type Props = {
    className?: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
    error?: string
    validation?: boolean
}

const Country = ({ className = '', placeholder = 'Country',
    error: errorMes = 'Error', validation,
    onChange = () => { } }: Props,
    ref: MutableRefObject<HTMLSelectElement>): ReactElement => {
    const { select, label, label_body, error } = style

    const option = (name: string, code: string): ReactElement =>
        <option value={code} key={code} >{name}</option>
    const list = useMemo<ReactElement[]>(() =>
        countries.map(({ name, code }) => option(name, code)), [])

    return <label className={`${label_body} ${className}`}>
        <div className={label_body}>
            <select ref={ref} className={select} placeholder={placeholder}
                defaultValue={null}
                onChange={onChange}>
                {option('Choose country', null)}
                {list}
            </select>
            {validation ? <div className={error}>{errorMes}</div> : null}
        </div>
    </label >
}

export default forwardRef(Country)