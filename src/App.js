import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getMeals} from "./redux/action/mealAction";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMeals())
    }, [])


  return (
    <div className="App">
     <BrowserRouter>
         <Routes>
             <Route path={'/'} element={<HomePage/>}/>
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
