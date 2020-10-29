
const baseURL='https://cors-anywhere.herokuapp.com/https://hoblist.com/movieList'

const fetchData =  () => {
  return fetch(baseURL, {
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      category:"movies",
      language:"kannada",
      genre:"all",
      sort:"voting"
    })
  }).then(resp=>resp.json())
}

export default fetchData