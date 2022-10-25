import React from 'react'
import { Gifs } from '../Home/gifs'

export const ListOfgifs = ({gifs}) => {

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
