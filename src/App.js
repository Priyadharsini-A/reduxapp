
import './App.css';
import Header from './Header';
import Home from './Home';
import SideBar from './SideBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import View from './View';


function App() {
  return (
    <>
       <Header/>
       <BrowserRouter>
<Routes>
  <Route path="/"element={<Home/>}></Route>
  <Route path="/create"element={<Create/>}></Route>
  <Route path="/update/:id"element={<Update/>}></Route>
  {/* <Route path="/view/:id"element={<View/>}></Route> */}
</Routes>

       </BrowserRouter>
       
 {/* <Home/> */}

       
      
      

    </>
  );
}

export default App;
