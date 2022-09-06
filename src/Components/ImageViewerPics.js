import "../Css/imageViewer.scss";
import { useImageViewer } from "react-image-viewer-hook";
import React from 'react';
// const IMAGES = [
//   "https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg",
//   "https://images.pexels.com/photos/416682/pexels-photo-416682.jpeg",
//   "https://images.pexels.com/photos/545580/pexels-photo-545580.jpeg"
// ];

// var listOfImages =[];
// class ImageViewerPics extends React.Component{
//     importAll(r) {
//         return r.keys().map(r);
//     }
//     componentWillMount() {
//         listOfImages = this.importAll(require.context('C:\\Users\\HP\\Pictures\\VEER DOCS\\Veer Docs', false, /\.(png|jpe?g|svg)$/));
//     }
//   render(){
//     const { getOnClick, ImageViewer } = useImageViewer();

//   return (
    
//     <div>
//       <div className="gallery">
//         {listOfImages.map((src) => (
//           <a
//             key={src}
//             href={`${src}?auto=compress&cs=tinysrgb&w=1200`}
//             onClick={getOnClick(`${src}?auto=compress&cs=tinysrgb&w=1200`)}
//           >
//             <img src={`${src}?auto=compress&cs=tinysrgb&w=300`} />
//           </a>
//         ))}
//       </div>
//       <ImageViewer />
//     </div>
//   )
//     }
  
// }

// export default ImageViewerPics;


// import "./styles.css";
// import { useImageViewer } from "react-image-viewer-hook";

// const IMAGES = [
//   "https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg",
//   "https://images.pexels.com/photos/416682/pexels-photo-416682.jpeg",
//   "https://images.pexels.com/photos/545580/pexels-photo-545580.jpeg"
// ];
// function importAll(r) {
// 	let images = {};
//   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
// 	return images
// }

// var IMAGES = importAll(require.context('C:\\Users\\HP\\Pictures\\VEER DOCS\\Veer Docs', false, /\.(png|jpe?g|svg)$/));
export default function ImageViewerPics(IMAGES) {
  const { getOnClick, ImageViewer } = useImageViewer();
    // const IMAGES = require.context('C:\\Users\\HP\\Pictures\\VEER DOCS\\Veer Docs', false, /\.(png|jpe?g|svg)$/).keys.map(require.context('C:\\Users\\HP\\Pictures\\VEER DOCS\\Veer Docs', false, /\.(png|jpe?g|svg)$/))
    // const IMAGES = <ImportAll r={require.context('C:\\Users\\HP\\Pictures\\VEER DOCS\\Veer Docs', false, /\.(png|jpe?g|svg)$/)}/>;
  return (
    <>
      <div className="gallery">
        {IMAGES.listOfImages.map((src) => (
          <a
            key={src}
            href={`${src}?auto=compress&cs=tinysrgb&w=1200`}
            onClick={getOnClick(`${src}?auto=compress&cs=tinysrgb&w=1200`)}
          >
            <img src={`${src}?auto=compress&cs=tinysrgb&w=300`} />
          </a>
        ))}
      </div>

      <ImageViewer/>
    </>
  );
}
