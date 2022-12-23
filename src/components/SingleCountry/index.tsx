import * as style from './styles'
import { SingleCountryTS } from '../../types/SingleCountry'
import { Link } from 'react-router-dom'
import { useForm } from '../../contexts/ThemeContext'
import {useState, useEffect} from 'react'
import { api } from '../../api'
import { alpha3} from '../../types/alpha3'



export const SingleCountry = ({
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencie,
    languages,
    borders,
    flag
}: SingleCountryTS) => {
    const { state } = useForm()
    const [countries, setCountries] = useState<alpha3[]>([]);
 
    const getAllCountries = async () => {
        
        let countriess = await api.getCountries()
        setCountries(countriess)
        
    }
    useEffect(()=>{
        getAllCountries()
    }, [])
    

    return (

        <style.CountryData theme={state.theme}>
            
            <img src={flag} alt={` ${name}`} />
            <div className='data--area'>
                <h1>{name}</h1>
                <div className='data--firstArea'>
                    <div className='left'>
                    <p><span>Native Name: </span>{nativeName}</p>
                    <p><span>Population: </span>{population}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Subregion: </span>{subregion}</p>
                    {capital &&
                        <p><span>Capital: </span>{capital}</p>
                    }
                    </div>
                    <div className='right'>
                    <p className='topLevel'><span>Top Level Domain: </span>{topLevelDomain}</p>
                    {currencie &&
                        <p><span>Currencies: </span>{currencie.map(item => item.name)}</p>
                    }
                    <p><span>Languages: </span>{languages.map((item, index)=>(<span className='language' key={index}>{item.name}</span>))}</p>
                    </div>
                </div>
                {borders &&
                    <div className='border--area'>
                        <p>Border Countries: </p>
                        <div className='borders'>{borders.map((border, index) =>{
                        const fullName=countries.find(ele=>ele.alpha3Code === border)?.name
                        return(
                           <Link to={`/country/${fullName}`} key={index}>{fullName}</Link> 
                        )
                        
                        })}
                        
                        </div> 
                    </div>
                }
            </div>
        </style.CountryData>
    )
}