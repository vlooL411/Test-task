import 'public/styles/global.sass'
import 'public/styles/root.sass'

import Header from 'components/Header'
import { createContext, ReactElement, useState } from 'react'

type Cart = {
    count: number
    changeCount: (count: number) => void
}

export const CartContext = createContext<Cart>(null!)

const App = ({ Component, pageProps }): ReactElement => {
    const [count, setCount] = useState<number>(0)

    return <div className='root'>
        <CartContext.Provider value={{ count, changeCount: setCount }}>
            <Header />
            <Component {...pageProps} />
        </CartContext.Provider>
    </div >
}

export default App