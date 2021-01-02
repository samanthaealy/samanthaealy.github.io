import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import anime from 'animejs';
import { shapes } from './shapes';
import { routes } from '../App';
import './styles/background.scss'

const getPos = (currentPath) => routes.indexOf(routes.filter(({path}) => (
  path === currentPath
))[0]);

function Background() {
  // Use current url to get index for morph animation
  let location = useLocation();
  const [pos, setPos] = useState(getPos(location.pathname))
  
  useEffect(() => {
    let DOM = {};
    DOM.svg = document.querySelectorAll('.morph');
    DOM.path = document.querySelectorAll('.morph path');
    setPos(getPos(location.pathname));

    const initShapeLoop = function() {
      // Loop animation for morph to alternate path
      for (let i = 0; i < DOM.svg.length; i++) {
        anime.remove(DOM.path[i]);
        anime({
          targets: DOM.path[i],
          easing: 'linear',
          d: [{value: shapes[i][pos].pathAlt, duration: 3500}, 
              {value: shapes[i][pos].path, duration: 3500}],
          loop: true,
          direction: 'alternate'
        })
      }
    }

    const init = function() {
      // Initialize path and properties for morph shapes
      for (let i = 0; i < DOM.svg.length; i++) {
        anime.remove(DOM.path[i]);
        anime({
          targets: DOM.path[i],
          duration: shapes[i][pos].animation.path.duration,
          easing: shapes[i][pos].animation.path.easing,
          elasticity: shapes[i][pos].animation.path.elasticity || 0,
          d: shapes[i][pos].path,
          complete: () => initShapeLoop()
        });
  
        anime.remove(DOM.svg[i]);
        anime({
          targets: DOM.svg[i],
          duration: shapes[i][pos].animation.svg.duration,
          easing: shapes[i][pos].animation.svg.easing,
          elasticity: shapes[i][pos].animation.svg.elasticity || 0,
          scaleX: shapes[i][pos].scaleX,
          scaleY: shapes[i][pos].scaleY,
          translateX: shapes[i][pos].tx + 'px',
          translateY: shapes[i][pos].ty + 'px',
          rotate: shapes[i][pos].rotate + 'deg'
        });
      }
    }
    
    init();
  }, [location, pos]);

  return(
    <div className="morph-wrapper">
      <svg className="morph" viewBox="0 0 1400 770">
					<path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z" fill="url(#grad1)"/>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#FF7B89', stopOpacity:'1'}} />
              <stop offset="100%" style={{stopColor: '#8A5082', stopOpacity:'1'}} />
            </linearGradient>
          </defs>
				</svg>
        <svg className="morph" viewBox="0 0 1400 770">
					<path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z" fill="url(#grad2)"/>
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#758EB7', stopOpacity:'1'}} />
              <stop offset="100%" style={{stopColor: '#6F5F90', stopOpacity:'1'}} />
            </linearGradient>
          </defs>
				</svg>
    </div>
  )
}

export default Background;