import axios from 'axios'
import './app.css'
import { useEffect, useState, createContext } from 'react'
import CountriesList from './CountriesList'
import Header from './Header'
import Footer from './Footer'
import Popup from '../Popup'

export const SearchContext = createContext()

export default function App() {
    const [list, setList] = useState([])
    const [search, setSearch] = useState('')

    const filteredList = list.filter(c => c.name.toLowerCase().includes(search))

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                setList(res.data)
            })
    }, [])

    return list.length ? <main>

        <Popup>
            <SearchContext.Provider value={setSearch}>
                <Header list={filteredList} />
            </SearchContext.Provider>

            <CountriesList list={filteredList} />
        </Popup>

        <Footer />

    </main> : 'loading'
}
