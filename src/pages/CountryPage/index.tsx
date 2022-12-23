import * as style from './styles'
import { Link, useParams } from 'react-router-dom'
import { SingleCountry } from '../../components/SingleCountry'
import { useEffect, useState } from 'react'
import  CountryTS  from '../../types/Country'
import { api } from '../../api'
import { useForm } from '../../contexts/ThemeContext'
import { MdKeyboardBackspace } from 'react-icons/md'
// import { alpha3} from '../../types/alpha3'

export const CountryPage = () => {
    const { state } = useForm()
    const { name} = useParams<string>()

    const [loading, setLoading] = useState(true)
    const [country, setCountry] = useState<CountryTS[]>([])
    const [countries, setCountries] = useState<CountryTS[]>([]);
    
       
    
    useEffect(()=>{
           getAllCountries()
       }, []);
    
    const getAllCountries = async () => {
           
           let countriess = await api.getCountries()
           setCountries(countriess)
           
       }

       
       console.log(27, countries)

       useEffect(() => {
        if(countries.length > 0){
            getCountry(name!)
        }
            
        
    
    }, [name, countries])
       

    

    const getCountry = async (param: string) => {
        let country = countries.filter(ele=> ele.name === param)
        setCountry(country)
        setLoading(false)
    }
   

    return (
        <style.CountryPage theme={state.theme}>
            <div className='container'>
           {console.log(country)}
                <Link to="/" className='back--button'><span className='back'><MdKeyboardBackspace/></span>   Back</Link>
                {loading &&
                    <div className='loading'>loading....</div>

                }
                {!loading &&
                    country.map((item) => (
                        <SingleCountry
                            flag={item.flags.png}
                            name={item.name}
                            nativeName={item.nativeName}
                            population={item.population}
                            region={item.region}
                            subregion={item.subregion}
                            capital={item.capital}
                            topLevelDomain={item.topLevelDomain[0]}
                            currencie={item.currencies && item.currencies}
                            languages={item.languages}
                            borders={item.borders}
                        />
                    )) 
                }
            </div>
        </style.CountryPage>
    )
}
