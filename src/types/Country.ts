
export default interface CountryTS {
    name: string,
    nativeName: string,
    alpha3Code: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    flags: {
        png: string
    }
    topLevelDomain: [
        string
    ],
    currencies: [
        {
            name: string
        }
    ],
    languages: [
        {
            name: string
        }
    ],
    borders: [
        string
    ]
}