import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home/home'
import AddBooks from './pages/addbooks/addbooks'
import ListBooks from './pages/booklist/booklist'
import EditBooks from './pages/editbooks/editbooks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route exact path='/admin/addbooking' element={<AddBooks/>}/>
          <Route exact path='/admin/booklist' element={<ListBooks/>}/>
          <Route exact path='admin/booklist/edit/:id' element={<EditBooks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
