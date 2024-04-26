import React, { useState } from 'react'
import { Fa500Px } from 'react-icons/fa'

import logo1 from "./images/Capture111.PNG";
export default function Mute({sh}) {
  return (
    <div className={`muteimage ${sh?'show-side':'hide-side'}`}> <img src={logo1} alt="" /></div>
  )
}
