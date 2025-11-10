import Lottie from "lottie-react";
import loadingAnimation from '../resources/circle-loader.json';

function Loading(){
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'300px'}}>
            <Lottie animationData={loadingAnimation} loop={true}/>
        </div>
    );
}

export default Loading;