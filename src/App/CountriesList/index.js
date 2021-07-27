import Country from "./Country";
import './countriesList.css'

export default function CountriesList({ list }) {
    return <ul>
        {list.map(country => <Country key={country.name} country={country} />)}
    </ul>
}