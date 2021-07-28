import { useContext } from 'react'
import { SearchContext } from '../../App'

export default function Search() {

    const search = useContext(SearchContext)

    return <input
        type='search'
        placeholder='Search Country By Name'
        onChange={e => search(e.target.value.toLowerCase())}
    />
}