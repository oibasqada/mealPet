import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getIngredients, getLatestMeals, getMeals} from "./redux/action/mealAction";
import Header from "./components/Header/Header";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMeals())
        dispatch(getIngredients())
        dispatch(getLatestMeals())
    }, [])


  return (
    <div className="App">
     <BrowserRouter>
         <Header/>
         <Routes>
             <Route path={'/'} element={<HomePage/>}/>
             <Route path="/meal/:name" element={<MealPage/>}/>
             <Route path="/meal/:name/ingredient/:name" element={<IngredientsPage/>}/>
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
