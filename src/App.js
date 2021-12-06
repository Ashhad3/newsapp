import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App  = ()=>{
  const [progress, setProgress]=useState(0)
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
// const setProgress =()=>{
  // setProgress(progress)
// }
  const pagesize=6;
  const apikey=process.env.REACT_APP_NEWSAPI
  
    return (
      <>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
            <Navbar/>
      <Switch>
          <Route exact key="home" path="/"><News pagesize={pagesize} setProgress={setProgress} apikey={apikey} category="general"/></Route>
          <Route exact key="business" path="/business"><News pagesize={pagesize} setProgress={setProgress} apikey={apikey} category="business" /></Route>
          <Route exact key="entertainment" path="/entertainment"><News pagesize={pagesize} setProgress={setProgress} apikey={apikey} category="entertainment"/></Route>
          <Route exact key="general" path="/general"><News pagesize={pagesize} setProgress={setProgress} apikey={apikey} category="general"/></Route>
          <Route exact key="health" path="/health"><News pagesize={pagesize} setProgress={setProgress} apikey={apikey} category="health"/></Route>
          <Route exact key="science" path="/science"><News pagesize={pagesize} setProgress={setProgress} apikey={apikey} category="science"/></Route>
          <Route exact key="sports" path="/sports"><News pagesize={pagesize} setProgress={setProgress} apikey={apikey} category="sports"/></Route>
          <Route exact key="technology" path="/technology"><News pagesize={pagesize} setProgress={setProgress} apikey={apikey} category="technology"/></Route>

        </Switch>
        </Router>
        
      </>
    )
  
}

export default App