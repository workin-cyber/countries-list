import { useRef } from 'react'
import './header.css'
import Search from './Search'

export default function Header({ list = [], onInputChange }) {


    return <header>
        <h1 >
            Countries <small>({list.length})</small>
        </h1>
        <Search />
    </header>
}