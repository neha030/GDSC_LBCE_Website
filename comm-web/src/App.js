import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accordion from './components/FAQ/accordion';
import { accordionData } from './components/FAQ/data';
import accordionstyle from './components/FAQ/accordionstyle.css';

const App = () => {
  return (
    <Router>
    <Navbar /> 
    <div>
      <h1 id='faqtitle'>Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div> 
    </div>
    </Router>
    //  {/* <div>
    //   <h1>Frequently Asked Questions</h1>
    //   <div className="accordion">
    //     {accordionData.map(({ title, content }) => (
    //       <Accordion title={title} content={content} />
    //     ))}
    //   </div> 
    // </div> */}
    
  );
};

export default App;


