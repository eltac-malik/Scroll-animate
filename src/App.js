import {Routes,Route,useLocation} from 'react-router-dom'
import './App.css';
import Base from './components/Base/Base';
import Home from './components/Home/Home';
import Mail from './components/Mail/Mail'
import Address from './components/Address/Address'
import {AnimatePresence} from 'framer-motion'

function App() {

  let location = useLocation()

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home/>}/>
          <Route path='/base' element={<Base/>}/>
          <Route path='/mail' element={<Mail/>}/>
          <Route path='/address' element={<Address/>}/>
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
