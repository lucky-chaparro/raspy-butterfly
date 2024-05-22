import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeftActive from './components/LeftActive';
import RightActive from './components/RightActive';

function App() {

  const [isHome, setIsHome] = useState(true);
  const [path, setPath] = useState('home');


  useEffect(() => {
    console.log('use effect hook ran');
  }, [])

  return (
      <div className="App">
        <Navbar/>
        <section className="hero is-primary is-fullheight">
          <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-full">
              <h1 className="title">Elias Baez</h1>
              <h2 className="subtitle">{path}</h2>
              <div className="columns is-mobile">
                <div className="column">
                  
                  {isHome &&
                  <button 
                  className="button is-large" 
                  onClick={() => {setPath('coding');
                    setIsHome(false)}}>
                    coding
                  </button>}

                  {!isHome &&
                  <LeftActive content_choice={path}/>}

                </div>
                <div className="column">

                  {isHome &&
                  <button className="button is-large" onClick={() => {setPath('poetry');
                    setIsHome(false)}}>
                    poetry
                  </button>}

                  {!isHome &&
                  <RightActive content_choice={path}/>}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
          </section>
          <Footer/>
      </div>
    );
}

export default App;
