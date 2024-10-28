
import { Route, Routes } from 'react-router-dom';
import './App.css';
import StateBasics from './components/StateBasics'
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Counter from './components/Counter';
import Mapping from './components/Mapping';
import ListMap from './components/ListMap';
import Api from './components/Api';
import GridGet from './components/GridGet';
import UseEffect from './components/UseEffect';


function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
    <Route path='/' element={<StateBasics/>}/>
    <Route path='/sign' element={<Signup/>}/>
    <Route path='/c'element={<Counter/>}/>
    <Route path='/t' element ={<Mapping/>}/>
    <Route path='/l' element ={<ListMap/>}/>
    <Route path='/a' element ={<Api/>}/>
    <Route path='/g' element ={<GridGet/>}/>
    <Route path='/kk' element ={<UseEffect/>}/>
    
   </Routes>
    </div>
  );
}

export default App;
