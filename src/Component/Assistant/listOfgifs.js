import React, { useState, useEffect} from 'react'
import { Gifs } from '../Home/gifs'
import getGifs from './getGifs'

export const ListOfgifs = ({params}) => {
    const { keyword } = params
    const [gifs, setValue]=useState([])

    useEffect(function(){
        getGifs({ keyword}).then(gifs => setValue(gifs))    
    }, [keyword])
    
    return (
    <div className="flex-grow">
        {gifs.map(({id, title, url}) => 
        <Gifs 
            key={id} 
            title={title} 
            id={id} 
            url={url} 
        />
        )}
    </div>
)}
