import ListingPage from "./components/ListingPage";
import FormComponent from "./components/FormComponent";
import DetailsComponent from "./components/DetailsComponent";

const routes = [
    {
        path: '/',
        component: ListingPage
    },{
        path: '/form',
        component: FormComponent
    },{
        path: '/details',
        component: DetailsComponent
    }
]

export default routes;