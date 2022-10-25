import { useEffect, useState } from "react"
import getGifs from "../Assistant/getGifs"

export function useGifs({keyword} = {keyword : null}){
    
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function(){
        setLoading(true)
        
        const keywordtouse = keyword || localStorage.getItem('lastkeyword')
        
        getGifs({ keyword: keywordtouse })
            .then(gifs=>{
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastkeyword', keyword)
            })
    }, [keyword])

    return {loading, gifs}
}