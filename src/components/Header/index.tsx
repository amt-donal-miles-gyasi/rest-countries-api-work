import {useState} from 'react'
import * as style from './styles'
import { BsMoon ,BsFillMoonFill } from 'react-icons/bs'
import { useForm , initialData} from '../../contexts/ThemeContext'
import { themeActions } from '../../contexts/ThemeContext'

export const Header = () => {
    const { state, dispatch } = useForm()
    const [mode, setMode]    = useState('dark') ;
    console.log(mode)

    

    const handleChangeTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === mode ? 'light' : mode
        });
        const data: any = window.localStorage.getItem('mode');
        setMode(data)
        
        if(data ==='dark'){
            window.localStorage.setItem('mode', initialData.theme='light' )
        }else{
            window.localStorage.setItem('mode', initialData.theme='dark' )
        }
    }
    
    return (
        <style.Header theme={state.theme}>
            <div className='container'>
                <h1>Where In the World?</h1>
                <div className='theme' onClick={handleChangeTheme}>
                     <span className='moon'>{ state.theme === 'dark'?<BsFillMoonFill/>:<BsMoon/> }</span>Dark Mode 
                </div>
            </div>
        </style.Header>
    )
}