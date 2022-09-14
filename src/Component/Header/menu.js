import React from 'react'
import { useState } from 'react'

export const SubMenu = ({tittle,action}) => {
  const [isAtive, setActive]=useState(false)

  const handleClick=()=>{
    setActive(!isAtive)
  }

  return(
    <div className="absolute top-28 left-0 w-full bg-slate-300">
        <ul>
            <li>Masajes1</li>
            <li>Masajes2</li>
            <li>Masajes3</li>
        </ul>

    </div>
  )
}
