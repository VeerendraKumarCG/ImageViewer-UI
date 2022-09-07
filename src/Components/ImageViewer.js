
import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/imageViewer.scss';
import 'font-awesome/css/font-awesome.min.css';
import ImageViewerPics from './ImageViewerPics';
import { useLocation , useNavigate,Navigate} from 'react-router-dom';

var listOfImages =[];
function importAll(r) {
  return r.keys().map(r);
}
 export default function ImageViewer(){
    

        let signin="false"
        let location=useLocation();
        let navigate=useNavigate();

        // ReactHooks can only be used in function and canot be used inside conditional stmts.

        if(location.state && location.state.signInValid==="true"){
        console.log(location.state.signInValid);
        signin="true"
          listOfImages = importAll(require.context('C:\\Users\\HP\\Pictures\\Skyee Pics', false, /\.(png|jpe?g|svg)$/));
          return(
            <div>
              <ImageViewerPics listOfImages={listOfImages}/>
            </div>
          )
        } 
        else{
        
        return(
          <div>{signin==="false"&&
          // <button onClick={()=>{navigate("/")}}> LOGIN PLS </button>
          <Navigate to="/login"/>
          }
          </div>
        )
        }
}