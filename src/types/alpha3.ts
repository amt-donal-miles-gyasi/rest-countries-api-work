import { SingleCountryTS } from './SingleCountry'

export interface alpha3 extends SingleCountryTS {
    alpha3Code: string,
    currencie: [{
        name: string
    }],
    flag: string,
    
}