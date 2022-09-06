import { Routes , Route, Switch } from "react-router-dom";
import React from 'react';
import Login from "./Login";
import ImageViewer from './ImageViewer';

class Routers extends React.Component {
    render(){
        return (
            <>
                <Routes>
                    <Route path="/"  element={<Login/>} exact />
                    <Route path="/images" element={<ImageViewer/>}/>
                </Routes>
            </>
        )
    }
}

// import React from 'react';
//  import { Link } from "react-router-dom";

//   function Routers() {

//   return (
//    <div>
//    <Link  to={{pathname: '/images'}}>NavigateNow</Link>
//    </div>
//   );
// }
export default Routers;