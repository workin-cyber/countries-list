import { useContext } from 'react'
import './popup.css'
import { PopupContext } from '../App'

export default function Popup() {

    const [open, setOpen] = useContext(PopupContext)

    return open ? <div className='overlay' onClick={() => setOpen(false)}>
        <div className='popup'>{open}</div>
    </div> : null
}
