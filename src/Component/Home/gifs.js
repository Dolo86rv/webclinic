import React from 'react'
import { Link } from 'wouter'

export const Gifs = ({title, id, url}) => {
    return (
        <div>
            <Link to={`/gif/${id}`}>
                <h4>{title}</h4>
                <small>{id}</small>
                <img alt={title} src={url} />
            </Link>
        </div>
    )
}
