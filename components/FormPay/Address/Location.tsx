import Input from 'components/Input'
import { ChangeEvent, forwardRef, MutableRefObject, ReactElement } from 'react'

import style from './location.module.sass'

type Props = {
    placeholder?: string
    getLocation?: (location: any) => void
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export type LocationT = {
    street?: string
    optional?: string
    city?: string
    country?: string
    ZIP?: string
    country_code?: string
}

const Location = ({ placeholder = 'City', onChange = () => { }, getLocation = () => { } }: Props,
    ref: MutableRefObject<HTMLInputElement>): ReactElement => {
    const { location } = style

    const onClick = async () => {
        //TODO approximate map data (~5 km) https://www.geojs.io/docs/v1/endpoints/geo/
        try {
            const geo: LocationT = await (await fetch('https://get.geojs.io/v1/ip/geo.json')).json().
                then(data => ({
                    city: data.city,
                    country: data.country,
                    country_code: data.country_code,
                    ZIP: data.asn,
                    street: data?.street ?? '', //TODO empty
                    optional: data?.optional ?? '', //TODO empty
                } as LocationT))

            ref.current.value = geo.city
            getLocation(geo)
        }
        catch (e) {
            console.error(e)
            alert('Please, turn off adblock')
        }
    }

    return <div className={location}>
        <Input ref={ref} className={location} onChange={onChange} placeholder={placeholder} />
        <img src='svg/detect geolocation.svg' onClick={onClick} />
    </div>
}

export default forwardRef(Location)
