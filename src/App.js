import './App.css';
import React, { useState } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    let pageSize = 15;
    const [progress, setProgress] = useState(0)
    const setProgressFun = (progress) => {
        setProgress(progress)
    }
    return (
        <BrowserRouter>
            <NavBar />
            <LoadingBar
                color='#f11946'
                progress={progress}
            // onLoaderFinished={() => setProgress(0)}
            />
            <Routes>
                <Route exact path="/" element={<News setProgress={setProgressFun} key='general' pageSize={pageSize} category={'general'} />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/business" element={<News setProgress={setProgressFun} key='business' pageSize={pageSize} category={'business'} />} />
                <Route exact path="/entertainment" element={<News setProgress={setProgressFun} key='entertainment' pageSize={pageSize} category={'entertainment'} />} />
                <Route exact path="/health" element={<News setProgress={setProgressFun} key='health' pageSize={pageSize} category={'health'} />} />
                <Route exact path="/science" element={<News setProgress={setProgressFun} key='science' pageSize={pageSize} category={'science'} />} />
                <Route exact path="/sports" element={<News setProgress={setProgressFun} key='sports' pageSize={pageSize} category={'sports'} />} />
                <Route exact path="/technology" element={<News setProgress={setProgressFun} key='technology' pageSize={pageSize} category={'technology'} />} />
            </Routes>
        </BrowserRouter >
    )
}

export default App 
