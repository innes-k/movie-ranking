// API 원본
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTM3NDEzNzIzMDU4OGQ2YTQ1MmQ3MzZhZjhlMzA4NCIsInN1YiI6IjY1OTkyOTI3MGQxMWYyMDBlZWRkMzJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldX3pBFyoKt2iJBxyIkHrL73HNEYjA7rpBwGeOBYnNc'
    }
  };

  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));