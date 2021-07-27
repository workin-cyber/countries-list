import './country.css'
import { PopupContext } from '../../../Popup'
import { useContext } from 'react'

export default function Country({ country }) {
    const { name, nativeName, flag, region } = country
    const [, setOpen] = useContext(PopupContext)

    return <li className='country' onClick={() => setOpen(country.name)}>
        <div className='img' style={{ backgroundImage: `url(${flag})` }} />
        <div>
            <div>{name} - {nativeName}</div>
            <div className='region'>{region}</div>
        </div>
    </li>
}