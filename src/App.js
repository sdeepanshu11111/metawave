import Header from "./components/Header/index";
import Main from "./components/Main/index"



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (

      <div className="app'">
        {/* <Router>
        <Routes>

          <Route exact ={'/'}  element = {<><Header/><Main/></>} />

          
        </Routes>

        </Router> */}


        <Main/>


      </div>
    

  )

    ;
}

export default App;
