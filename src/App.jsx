
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Crud from "./pages/Crud.jsx";
import Counter from "./pages/Counter.jsx";
import Header from "./components/Header.jsx";

const App = () => {
    return (
        <>
           <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Crud />} />
                    <Route path="/counter" element={<Counter />} />
                </Routes>
            </BrowserRouter>


        </>
    );
};

export default App;

