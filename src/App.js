import { useEffect, useState } from 'react';
import './App.css';
import JobSearchMain from './pages/jobSearchMain';
import FirstComponent from './components/nested_comp/Steps/FirstComponent';

function App() {
  const [showFirstComponent, setShowFirstComponent] = useState(false);

  useEffect(() => {
    console.log("hello")
  },[showFirstComponent])
  console.log(showFirstComponent);


  return (
    <div className="App" style={{position: 'relative'}}>
      <JobSearchMain setShowFirstComponent={setShowFirstComponent}/>
      
      {/* Conditionally render FirstComponent */}
      {showFirstComponent && <FirstComponent  />}
      
    </div>
  );
}

export default App;
