import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const ButtonWhite = ({text}=this.props) => {
  return (
    <>
      <Link to='#section1' className=" bg-c-fondo text-c-malva rounded py-1 px-4 hover:opacity-75">{text}</Link>
    </>
  )
}
