import NavBar from "./componets/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/Home" element={<Home/>}></Route>
        </Routes>

        </BrowserRouter>
        
        </>
        
         
        
      </header>
    </div>
  );
}

export default App;
{/* <img src={healthix} className="App-logo" alt="logo" /> */}