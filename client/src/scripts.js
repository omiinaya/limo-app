import { isMobile } from 'react-device-detect';
import Scroll from 'react-scroll';
import {
    Dimensions,
} from 'react-native';

const scroll = Scroll.animateScroll;
const scroller = Scroll.scroller;

//gets current orientation of the device.
export function getOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        return 'portrait'
    } else {
        return 'landscape'
    }
}

//gets current device type.
export function getDeviceType() {
    if (isMobile) {
        return 'mobile'
    } else {
        return 'other'
    }
}

export const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

export function scrollToTop() {
    scroll.scrollToTop({
        smooth: true,
        duration: 450
    })
}

export function scrollTo(name) {
    scroller.scrollTo(name, {
        smooth: true,
        duration: 450,
        offset: -130
    })
}