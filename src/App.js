import { useEffect, useState } from 'react';
import './App.css';
import JobSearchMain from './pages/jobSearchMain';
import FirstComponent from './components/nested_comp/Steps/FirstComponent';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [showFirstComponent, setShowFirstComponent] = useState(false);

  useEffect(() => {
    console.log("hello")
  },[showFirstComponent])
  console.log(showFirstComponent);


  return (
    <div className="App" style={{position: 'relative'}}>

      <Router>
        <Routes>
          <Route path='/' element={ <JobSearchMain setShowFirstComponent={setShowFirstComponent}/> } />
        </Routes>
      </Router>
      
      
      {/* Conditionally render FirstComponent */}
      {showFirstComponent && <FirstComponent  />}
      
    </div>
  );
}

export default App;
