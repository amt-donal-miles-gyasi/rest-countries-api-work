import { createContext, useContext, useReducer } from "react";
import { Header} from "../components/Header";
// defining types
interface State { 
    theme: string| null
}

interface Actions { 
    type: themeActions,
    payload: any
}

interface Provider {
    children: JSX.Element
}

interface ContextType {
    state: State,
    dispatch: (action: Actions) => void
}


export  const initialData: State = {//defining initial theme state
    theme: window.localStorage.hasOwnProperty('mode')? window.localStorage.getItem('mode') : 'light'
} 

const ThemeContext = createContext<ContextType | undefined>(undefined)  //

export enum themeActions {
    setTheme
} 

const reducer = (state: State, action: Actions) => { //theme setter
    switch(action.type) {
        case themeActions.setTheme:
            return {...state, theme: action.payload}
        default:{
            return state
        }
    }
}

export const ThemeProvider = ({children}: Provider) => { //set the initial state for the theme swicher
    const [state, dispatch] = useReducer(reducer, initialData);
    const value = {state, dispatch}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useForm = () => { 
    const context = useContext(ThemeContext)
    if(context === undefined) {
        throw new Error('Error from useform')
    }
    return context
}