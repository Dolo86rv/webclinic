import React from 'react'
import { ListOfgifs } from '../Assistant/listOfgifs'
import { useGifs } from '../Hooks/useGifs'

export const SearchResult = ({ params }) => {
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})

    return ( 
        <>
          {loading
          ? <></>
          : <ListOfgifs gifs={gifs} />
          }
        </>
    )
}
