import React,{useState, useEffect } from 'react';

//import { BrowserRouter } from 'react-router-dom';
//import { Routes,Route, Link } from 'react-router-dom';
//import  SampleService  from  './SampleService';
import axios from 'axios';

//import  SampleList from './SampleList';
//import  SampleCreateUpdate  from './SampleCreateUpdate';
import './App.css';
import SampleData from './components/SampleData'
import OnLoadingSampleData from './components/OnLoadingSampleData'


function App() {

    const DataLoading =  OnLoadingSampleData(SampleData);
  
    const [appState, setAppState] = useState(
      {
        loading: false,
        samples: null,
      }
    )
  
   useEffect(() => {
      setAppState({loading: true})
      const apiUrl = 'http://localhost:8000/api/v1/sample/';
      axios.get(apiUrl).then((resp) => {
        const allSamples = resp.data;
        console.log(allSamples)
        setAppState({
        loading: false,
        samples: allSamples
         });
      });
    }, [setAppState]);
    
  
    return (
      <div className="app">
          <DataLoading isLoading={appState.loading} samples={appState.samples} />
      </div>
    );
  }
  
  export default App;
