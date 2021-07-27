import { useRef } from 'react'
import './header.css'

export default function Header({ list = [], onInputChange }) {

    const inputRef = useRef()

    return <header>
        <h1 onClick={() => { inputRef.current.focus() }}>
            Countries <small>({list.length})</small>
        </h1>
        <input
            type='search'
            ref={inputRef}
            placeholder='Search Country By Name'
            onChange={e => onInputChange(e.target.value.toLowerCase())}
        />
    </header>
}