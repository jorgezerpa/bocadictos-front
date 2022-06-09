import React from 'react';

const RandomIcon = ({ icon, x, y }) => {
    return (
        <img style={{ transformOrigin:'center center', position: 'absolute', top:'50%', left:'50%', transform:`translate(${x}px, ${y}px)`, width: `${Math.random()*30+30}px`}} //btw 20-80px
        src={icon} alt='' />
  )
}

export default RandomIcon