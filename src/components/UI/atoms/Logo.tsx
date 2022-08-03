import React from 'react';
import ComentoLogo from '../../../assets/images/comento.png';

type LogoProps = {
  size: number
}

function Logo({size}: LogoProps) {
  return <img src={ComentoLogo}></img>;
}

export default Logo;
