import Input from 'components/Input'
import Country from 'components/Input/Country'
import { ReactElement, useEffect, useRef } from 'react'

import style from '../styles/form.module.sass'
import Location, { LocationT } from './Location'

type Props = {
    title: string
    location?: LocationT
    onChange?: (location: LocationT) => void
}

const Address = ({ title, location, onChange = () => { } }: Props): ReactElement => {
    const { block } = style
    const { block_title, block_double, block_double_select } = style

    const streetRef = useRef<HTMLInputElement>(null!)
    const optionalRef = useRef<HTMLInputElement>(null!)
    const countryRef = useRef<HTMLSelectElement>(null!)
    const zipRef = useRef<HTMLInputElement>(null!)
    const cityRef = useRef<HTMLInputElement>(null!)

    const onChangeAddress = () => {
        const { current: country } = countryRef
        onChange({
            street: streetRef.current.value,
            optional: optionalRef.current.value,
            country: country.options[country.selectedIndex].text,
            country_code: country.value,
            ZIP: zipRef.current.value,
            city: cityRef.current.value,
        })
    }

    const setLocation = (location: LocationT) => {
        if (!location) return

        const { street, optional, country_code, ZIP, city } = location
        if (street) streetRef.current.value = street
        if (optional) optionalRef.current.value = optional
        if (country_code) countryRef.current.value = country_code
        if (ZIP) zipRef.current.value = ZIP
        if (city) cityRef.current.value = city
        onChangeAddress()
    }

    useEffect(() => setLocation(location), [location])

    return <div className={block} >
        <div className={block_title}>{title}</div>
        <Input ref={streetRef} onChange={onChangeAddress} placeholder='Street Address' />
        <Input ref={optionalRef} onChange={onChangeAddress} placeholder='Apt, Suite, Bldg, Gate Code. (optional)' />
        <Location ref={cityRef} onChange={onChangeAddress} placeholder='City' getLocation={setLocation} />
        <div className={block_double}>
            <Country ref={countryRef} className={block_double_select} onChange={onChangeAddress} placeholder='Country' />
            <Input ref={zipRef} onChange={onChangeAddress} placeholder='ZIP' type='number' />
        </div>
    </div>
}

export default Address