import * as style from './styles'
import { useEffect, useState } from 'react'
import { CountriesTS } from '../../types/Countries'
import { Input } from '../../components/Input'
import { api } from '../../api'
import { CountryItem } from '../../components/CountryItem'

import { useForm } from '../../contexts/ThemeContext'



export const Countries = () => {
    const { state } = useForm()
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState<CountriesTS[]>([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    


    useEffect(() => {
        getAllCountries()
    }, [])

    const getAllCountries = async () => {
        setLoading(true)
        let countries = await api.getCountries()
        setCountries(countries)
        setLoading(false)
    }

    const lowerSearch = search.toLowerCase()

    const filteredCountries = countries.filter(country => country
        .name.toLowerCase().includes(lowerSearch) && country
        .region.toLowerCase().includes(filter.toLowerCase()));

    

    return (
        <style.CountriesArea theme={state.theme}>
            <Input
                filter={setFilter}
                search={setSearch}
            />
            <div className='countries'>
                {loading &&
                    <div className='loading'>loading...</div>
                }
                {!loading &&
                    filteredCountries.map((item) => (
                        <CountryItem
                            key={item.numericCode}
                            name={item.name}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            flag={item.flags.png}
                        />
                    ))
                }
            </div>
            
        </style.CountriesArea>
    )
}