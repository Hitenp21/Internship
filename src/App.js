import { HomePage } from './homepage';
import { Apple } from './apple';
import {Routes,Route,Link, BrowserRouter} from 'react-router-dom';

import './App.css';
import { PageNotFound } from './pageNoteFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/' style={{marginLeft :5}}>Home</Link>
        <Link to='/apple' style={{marginLeft :15}}>Apple</Link>
        <Link to='/alphabet' style={{marginLeft :5}}>Alphabet</Link>
      </div>
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/apple' element ={<Apple />}></Route>
      <Route path='*' element ={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
