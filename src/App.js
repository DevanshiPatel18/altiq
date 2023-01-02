
import {Routes,Route, Link} from 'react-router-dom';
import DetailsComponent from './components/DetailsComponent';
import FormComponent from './components/FormComponent';
import ListingPage from './components/ListingPage';
import routes from './routes';
import EditNews from './components/editNews';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/" className='nav-link'><h1 className='row justify-content-center m-5'>The News Daily</h1></Link>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav">
        <li className="nav-item">
            <Link to={"/"} className="nav-link">
              List Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/details"} className="nav-link">
              Article Details
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/form"} className="nav-link">
              Add Article
            </Link>
          </li>
        </div>
      </nav>
      <div className=''>
     <Routes>
            <Route exact path="/" element = {<ListingPage/>}></Route>
            <Route exact path="/form" element = {<FormComponent/>}></Route>
            <Route exact path="/details" element = {<DetailsComponent/>}></Route>
            <Route path="/edit/:id" element = {<EditNews/>}></Route>
     </Routes>
     </div>
     </div>
    </div>
  );
}

export default App;
