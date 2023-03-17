import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../Component/App";
import ActivityForm from "../Component/form/ActivityForm";
import { HomePage } from "../Component/home/home";

const AppRoutes=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<HomePage/>} />
                <Route exact path="/activities" element={<App/>} />
                <Route exact path="/create-activity" element={<ActivityForm/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

