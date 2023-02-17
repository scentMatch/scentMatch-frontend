import React from 'react';
import LandingPage from './pages/LandingPage';
import Questionnaire1 from './pages/Questionnaire1';
import {Routes, Route} from 'react-router-dom';


// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root'),
// );

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/questionnaire1" element={<Questionnaire1/>}/>
      </Routes>
    </div>
  );
}

export default App;
