import { useRoutes } from "react-router-dom";
import { Countries } from "../pages/Countries";
import { CountryPage } from "../pages/CountryPage";

export const MainRoutes = () => {
    return useRoutes([
        {path:'/', element: <Countries />}, /// leads to all countires
        {path:'/country/:name', element: <CountryPage />},// leads to a contry page
        {path:'/code/:code', element: <CountryPage />}
    ])
}