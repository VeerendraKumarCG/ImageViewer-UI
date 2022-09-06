
import React from 'react';
import ReactDOM from 'react-dom';

import '../Css/imageViewer.scss';
import 'font-awesome/css/font-awesome.min.css';
import { saveAs } from 'file-saver'
import ImageViewerPics from './ImageViewerPics';

var listOfImages =[];
class ImageViewer extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('C:\\Users\\HP\\Pictures\\Skyee Pics', false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        return(
          <div>
            <ImageViewerPics listOfImages={listOfImages}/>
          </div>
        )
    }
}
export default ImageViewer;