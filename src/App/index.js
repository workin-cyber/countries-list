import axios from 'axios'
import './app.css'
import { createContext, useEffect, useState } from 'react'
import CountriesList from './CountriesList'
import Header from './Header'
import Footer from './Footer'
import Popup from '../Popup'

export const PopupContext = createContext()

export default function App() {

    const [list, setList] = useState([])
    const [search, setSearch] = useState('')
    const openState = useState()

    const filteredList = list.filter(c => c.name.toLowerCase().includes(search))

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                setList(res.data)
            })
    }, [])

    return list.length ? <main>

        <PopupContext.Provider value={openState}>

            <Popup />

            <Header list={filteredList} onInputChange={setSearch} />

            <CountriesList list={filteredList} />

        </PopupContext.Provider>

        <Footer />

    </main> : 'loading'
}
