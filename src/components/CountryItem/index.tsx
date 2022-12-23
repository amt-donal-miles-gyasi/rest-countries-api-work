import * as style from './styles'
import { CountryItemTS } from '../../types/CountryItem'
import { Link } from 'react-router-dom'
import { useForm } from '../../contexts/ThemeContext'

export const CountryItem = ({name, population, region, capital, flag}: CountryItemTS) => {
    const {state} = useForm()

    return (
        <style.CountryItem theme={state.theme}>
            <Link to={`/country/${name}`}>
                <div className='img--area'>
                    <img src={flag} alt={` ${name}`} />
                </div>
                <div className='data--area'>
                    <p className='bold country--name'>{name}</p>
                    <p className='bold'>Population: <span>{population}</span></p>
                    <p className='bold'>Region: <span>{region}</span></p>
                    <p className='bold'>Capital: <span>{capital}</span></p>
                </div>
            </Link>
        </style.CountryItem>
    )
}