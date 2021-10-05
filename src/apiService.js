// export default function onSearch(e) {
//     e.preventDefault();

//     // const searchQuery = e.currentTarget.elements.query.value
//     const searchQuery = inputRef.value
    
//     const url = 
//     `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=12021941-6c04822eada1d274ea5c3520e`

//     fetch(url)
//     .then(response => response.json())
//     .then(console.log)
//     .catch(error => console.log(error))
// }
export default class GalleryApiService {
    constructor() {
        this.searchQuery= '';
        this.page = 1;
    }
    fetchGallery() {
    
    const url = 
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=12021941-6c04822eada1d274ea5c3520e`

    return fetch(url)
    .then(response => response.json())
    .then(data => {
        this.page +=1;
        console.log(data)  
        return data.hits    
        
    })
    .catch(error => console.log(error))
}
reseetPage() {
    this.page = 1
}
get query () {
    return this.searchQuery;
}
set query(newQuerry) {
    this.searchQuery = newQuerry
}
}