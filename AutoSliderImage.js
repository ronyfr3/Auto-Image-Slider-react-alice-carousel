import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './AutoSliderImage.css'
 
function AutoSliderImage() {
    return (
        <div className="main">
            <AliceCarousel
                    autoPlay
                    infinite
                    mouseTracking
                    animationType='fadeout' //slide, fadeout
                    autoPlayInterval='2000'  //default 400
                    // touchTracking default true
                    // autoPlayDirection='rtl' or "ltr"
                    // controlsStrategy='responsive'
                    // paddingLeft='0px' it shows image padding on aminate
                    // disableDotsControls='true' it remove dots
                    disableButtonsControls='true' 
                    // it remove arrows oporer ta
                    // autoPlayStrategy='default' or 'none' (on hover default emits autoplay)
                    // autoPlayControls='play/pause' or "show/hide"
                    >
                    <img src="Images/image1.jpg" alt='' className="img"/>
                    <img src="Images/image3.jpg" alt='' className="img"/>
                    <img src="Images/image5.jpg" alt='' className="img"/>

                    </AliceCarousel>
        </div>
    )
}

export default AutoSliderImage
