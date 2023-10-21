import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'



 const App=(props)=>{
 let pageSize = 12;
 let apiKey = process.env.REACT_APP_NEWS_API

 const[progress,setProgress]=useState(0)

 
    return (
      <div>
          

        <BrowserRouter>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey}key='science' pageSize={pageSize} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}


export default App

// export default class App extends Component {
//  pageSize = 12;
//  apiKey = process.env.REACT_APP_NEWS_API
//  state={
//   progress:0
//  }
//  setProgress=(progress)=>{
//   setState({progress: progress})
//  }
//   render() {
//     return (
//       <div>
          

//         <BrowserRouter>
//           <Navbar />
//           <LoadingBar
//         color='#f11946'
//         progress={state.progress}
//         height={3}
//         // onLoaderFinished={() => setProgress(0)}
//       />
//           <Routes>
//             <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={pageSize} country='us' category='general' />}></Route>
//             <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
//             <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
//             <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
//             <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey}key='science' pageSize={pageSize} country='us' category='science' />}></Route>
//             <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
//             <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }



