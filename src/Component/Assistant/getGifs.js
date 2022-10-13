const apiKey='w3vXqaeuLYSWeJ1G9Bu5ZUfIZfIzaCtN'

export default function getGifs ({keyword}={}){
    const apiURL=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en` 
    
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            const gifs = data.map(img=>{
                const { images, title, id} = img    
                const {url} = images.downsized_medium

                return { title, id, url}
            })
            return gifs
        })
}