import { InputTS } from '../../types/Input'
import * as style from './styles'
import { useForm } from '../../contexts/ThemeContext'
import { useState , BaseSyntheticEvent} from 'react'
import { MdSearch} from 'react-icons/md'
import { BiChevronDown} from 'react-icons/bi'



const color = { color: "white" };
export const Input = ({search,filter}: InputTS, ) => {
    const { state } = useForm()

    const [input, setInput] = useState('')
    const [select, setSelect ] = useState('');
    filter(select)
    search(input)
    

    const handleChange = ({target}: BaseSyntheticEvent) => {
        
        const {name, value} = target  
        if(name === 'input'){
            setInput(value)
        }else{
            setSelect(value)
        }
    }
    

    return (
        <style.InputArea theme={state.theme}>
           <div>
            <div className='icon'>{state.theme === 'dark' ?<MdSearch style={color}/>: <MdSearch/>}</div> &nbsp;
            <input
                
                type="text"
                placeholder="Search By Country"
                value={input}
                onChange={ handleChange}
                name= 'input'
            /></div>
            
                <div className='down'>{state.theme === 'dark'?<BiChevronDown style={color}/>: <BiChevronDown/>}</div>
            <select value={select} onChange={ handleChange} name = 'select'>
                <option value='' selected>Filter by Region  </option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            
        </style.InputArea>
    )
}