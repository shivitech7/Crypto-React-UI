import './App.css';
import DrawerScreen from './screens/components/Drawer';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Section from './screens/mainScreens/Section';
import Section1 from './screens/mainScreens/Section1';
import Section2 from './screens/mainScreens/Section2';


function App() {
  return (
    <div className="App">
      {/* <Section /> */}
      <Router>
        <DrawerScreen />
        {/* <div style={{marginLeft:260, marginTop:0}}>
        <Routes>
          <Route exact path="/Home" element={<Section />} />
          <Route path="Section1" element={<Section1 />} />
          <Route path="Section2" element={<Section2 />} />
        </Routes>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
