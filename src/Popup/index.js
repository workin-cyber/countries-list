import './popup.css'
import { createContext, useState } from 'react'

export const PopupContext = createContext()

export default function Popup({ children }) {

    const openState = useState()
    const [open, setOpen] = openState

    return <PopupContext.Provider value={openState}>
        {children}
        {open ? <div className='overlay' onClick={() => setOpen(false)}>
            <div className='popup'>{open}</div>
        </div> : null}
    </PopupContext.Provider>
}
