import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export const ButtonWhite = ({text,dir}=this.props) => {
  return (
      <Link to={dir} className=" bg-c-fondo text-c-malva rounded py-1 px-4 mx-4 hover:opacity-75">{text}</Link>
  )
}
