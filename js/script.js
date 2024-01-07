// // API 원본 중 일부(권한부여)
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTM3NDEzNzIzMDU4OGQ2YTQ1MmQ3MzZhZjhlMzA4NCIsInN1YiI6IjY1OTkyOTI3MGQxMWYyMDBlZWRkMzJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldX3pBFyoKt2iJBxyIkHrL73HNEYjA7rpBwGeOBYnNc'
  }
};

// fetch 밖에서 미리 let 변수 선언
let vote_average, title, overview, poster_path, card_id;

// // fetch로 api 가져오기 - 화살표 함수 사용 전
// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
//   .then(response => response.json())
//   // fetch로 가져온 api에서 data 내 필요한 value 추출
//   .then(data => {
//     console.log(data);

//     data.results.forEach(movie => {
//       // 여기서는 현재 순회 중인 movie 객체의 정보를 가져오도록 수정
//       vote_average = movie.vote_average;
//       title = movie.title;
//       overview = movie.overview;
//       poster_path = movie.poster_path;
//       card_id = movie.id;

//       createMovieCard(movie);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching movie data:', error);
//   });

// // 카드 덧붙일 함수 시작
// function createMovieCard(movie) {
//   const card = document.createElement('div');
//   card.className = 'card';

//   // 여기에 click 이벤트를 추가합니다.
//   card.addEventListener('click', function () {
//     alert('영화 id: ' + movie.id);
//   });

//   // 이미지 엘리먼트 생성
//   const image = document.createElement('img');
//   // 이미지 소스 설정
//   image.src = 'https://image.tmdb.org/t/p/w200' + movie.poster_path; // 이미지 주소: poster_path
//   // 이미지를 카드에 추가
//   card.appendChild(image);

//   // 영화 제목 엘리먼트 생성
//   const titleElement = document.createElement('h2');
//   // 영화 제목 설정
//   titleElement.textContent = movie.title; // 영화 제목: title
//   // 영화 제목을 카드에 추가
//   card.appendChild(titleElement);

//   // 영화 내용 엘리먼트 생성
//   const overviewElement = document.createElement('p');
//   // 영화 내용 설정
//   overviewElement.textContent = movie.overview; // 영화 내용: overview
//   // 영화 내용을 카드에 추가
//   card.appendChild(overviewElement);

//   // 영화 평점 엘리먼트 생성
//   const voteAverageElement = document.createElement('p');
//   // 영화 평점 설정
//   voteAverageElement.textContent = '평점: ' + movie.vote_average; // 영화 평점: vote_average
//   // 영화 평점을 카드에 추가
//   card.appendChild(voteAverageElement);

//   // 카드가 추가될 부모 엘리먼트를 가져옴
//   const cardContainer = document.getElementById('cardContainer');
//   // 카드를 부모 엘리먼트에 추가
//   cardContainer.appendChild(card);
// }

// // 검색기능 시작
// document.addEventListener('DOMContentLoaded', function () {
//   // 검색 버튼을 클릭했을 때 이벤트 처리
//   document.querySelector('button').addEventListener('click', performSearch);

//   // 엔터 키를 눌렀을 때 이벤트 처리
//   document.querySelector('.input').addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//       performSearch();
//     }
//   });

//   // '메인으로' 버튼 클릭 시 이벤트 처리
//   document.getElementById('main_btn').addEventListener('click', function () {
//     location.reload(); // 현재 위치를 새로고침
//   });

//   // 검색 버튼과 엔터 키에 대한 공통 검색 로직
//   function performSearch() {
//     // 입력된 알파벳을 가져오기
//     const searchKeyword = document.querySelector('.input').value.toLowerCase();

//     // 카드를 담고 있는 부모 엘리먼트
//     const cardContainer = document.getElementById('cardContainer');

//     // 모든 카드 엘리먼트를 가져옴
//     const cards = cardContainer.querySelectorAll('.card');

//     // 각 카드에 대해 검색 키워드가 포함된지 확인하고 보이거나 감추기
//     cards.forEach(function (card) {
//       const title = card.querySelector('h2').textContent.toLowerCase();
//       if (title.includes(searchKeyword)) {
//         card.style.display = 'block'; // 해당 키워드가 포함된 경우 표시
//       } else {
//         card.style.display = 'none'; // 해당 키워드가 포함되지 않은 경우 숨김
//       }
//     });
//   }
// });

// fetch로 api 가져오기 - 화살표 함수로 수정
// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
//   .then(response => response.json())
//   // fetch로 가져온 api에서 data 내 필요한 value 추출
//   .then(data => {
//     console.log(data);

//     data.results.forEach(movie => {
//       // 여기서는 현재 순회 중인 movie 객체의 정보를 가져오도록 수정
//       vote_average = movie.vote_average;
//       title = movie.title;
//       overview = movie.overview;
//       poster_path = movie.poster_path;
//       card_id = movie.id;

//       createMovieCard(movie);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching movie data:', error);
//   });

// // 카드 덧붙일 함수 시작
// function createMovieCard(movie) {
//   const card = document.createElement('div');
//   card.className = 'card';

//   // 여기에 click 이벤트를 추가합니다.
//   card.addEventListener('click', () => {
//     alert('영화 id: ' + movie.id);
//   });

//   // 이미지 엘리먼트 생성
//   const image = document.createElement('img');
//   // 이미지 소스 설정
//   image.src = 'https://image.tmdb.org/t/p/w200' + movie.poster_path; // 이미지 주소: poster_path
//   // 이미지를 카드에 추가
//   card.appendChild(image);

//   // 영화 제목 엘리먼트 생성
//   const titleElement = document.createElement('h2');
//   // 영화 제목 설정
//   titleElement.textContent = movie.title; // 영화 제목: title
//   // 영화 제목을 카드에 추가
//   card.appendChild(titleElement);

//   // 영화 내용 엘리먼트 생성
//   const overviewElement = document.createElement('p');
//   // 영화 내용 설정
//   overviewElement.textContent = movie.overview; // 영화 내용: overview
//   // 영화 내용을 카드에 추가
//   card.appendChild(overviewElement);

//   // 영화 평점 엘리먼트 생성
//   const voteAverageElement = document.createElement('p');
//   // 영화 평점 설정
//   voteAverageElement.textContent = '평점: ' + movie.vote_average; // 영화 평점: vote_average
//   // 영화 평점을 카드에 추가
//   card.appendChild(voteAverageElement);

//   // 카드가 추가될 부모 엘리먼트를 가져옴
//   const cardContainer = document.getElementById('cardContainer');
//   // 카드를 부모 엘리먼트에 추가
//   cardContainer.appendChild(card);
// }

// // 검색기능 시작
// document.addEventListener('DOMContentLoaded', () => {
//   // 검색 버튼을 클릭했을 때 이벤트 처리
//   document.querySelector('button').addEventListener('click', performSearch);

//   // 엔터 키를 눌렀을 때 이벤트 처리
//   document.querySelector('.input').addEventListener('keydown', event => {
//     if (event.key === 'Enter') {
//       performSearch();
//     }
//   });

//   // '메인으로' 버튼 클릭 시 이벤트 처리
//   document.getElementById('main_btn').addEventListener('click', () => {
//     location.reload(); // 현재 위치를 새로고침
//   });

//   // 검색 버튼과 엔터 키에 대한 공통 검색 로직
//   function performSearch() {
//     // 입력된 알파벳을 가져오기
//     const searchKeyword = document.querySelector('.input').value.toLowerCase();

//     // 카드를 담고 있는 부모 엘리먼트
//     const cardContainer = document.getElementById('cardContainer');

//     // 모든 카드 엘리먼트를 가져옴
//     const cards = cardContainer.querySelectorAll('.card');

//     // 각 카드에 대해 검색 키워드가 포함된지 확인하고 보이거나 감추기
//     cards.forEach(card => {
//       const title = card.querySelector('h2').textContent.toLowerCase();
//       if (title.includes(searchKeyword)) {
//         card.style.display = 'block'; // 해당 키워드가 포함된 경우 표시
//       } else {
//         card.style.display = 'none'; // 해당 키워드가 포함되지 않은 경우 숨김
//       }
//     });
//   }
// });




// fetch로 api 가져오기 - forEach, filter 포함하도록 수정
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  // fetch로 가져온 api에서 data 내 필요한 value 추출
  .then(data => {
    console.log(data);

    // forEach를 사용하여 카드 생성
    data.results.forEach(movie => {
      vote_average = movie.vote_average;
      title = movie.title;
      overview = movie.overview;
      poster_path = movie.poster_path;
      card_id = movie.id;

      // 여기서는 현재 순회 중인 movie 객체의 정보를 가져오도록 수정
      createMovieCard(movie);
    });

    // filter를 사용한 검색 함수
    document.querySelector('button').addEventListener('click', performSearch);
  })
  .catch(error => {
    console.error('Error fetching movie data:', error);
  });

// createMovieCard 함수 수정: 반환값으로 카드를 반환하지 않음
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';

  // 여기에 click 이벤트를 추가합니다.
  card.addEventListener('click', () => {
    alert('영화 id: ' + movie.id);
  });

  // 이미지 엘리먼트 생성
  const image = document.createElement('img');
  // 이미지 소스 설정
  image.src = 'https://image.tmdb.org/t/p/w200' + movie.poster_path; // 이미지 주소: poster_path
  // 이미지를 카드에 추가
  card.appendChild(image);

  // 영화 제목 엘리먼트 생성
  const titleElement = document.createElement('h2');
  // 영화 제목 설정
  titleElement.textContent = movie.title; // 영화 제목: title
  // 영화 제목을 카드에 추가
  card.appendChild(titleElement);

  // 영화 평점 엘리먼트 생성
  const voteAverageElement = document.createElement('p');
  // 영화 평점 설정
  voteAverageElement.textContent = '🍿 : ' + movie.vote_average; // 영화 평점: vote_average
  // 영화 평점을 카드에 추가
  card.appendChild(voteAverageElement);

  // 영화 내용 엘리먼트 생성
  const overviewElement = document.createElement('p');
  // 영화 내용 설정
  overviewElement.textContent = movie.overview; // 영화 내용: overview
  // 영화 내용을 카드에 추가
  card.appendChild(overviewElement);

  

  // 카드가 추가될 부모 엘리먼트를 가져옴
  const cardContainer = document.getElementById('cardContainer');
  // 카드를 부모 엘리먼트에 추가
  cardContainer.appendChild(card);
}

// 검색기능 시작
document.addEventListener('DOMContentLoaded', () => {
  // 검색 버튼을 클릭했을 때 이벤트 처리
  document.querySelector('button').addEventListener('click', performSearch);

  // 엔터 키를 눌렀을 때 이벤트 처리
  document.querySelector('.input').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  // '메인으로' 버튼 클릭 시 이벤트 처리
  document.getElementById('main_btn').addEventListener('click', () => {
    location.reload(); // 현재 위치를 새로고침
  });

  // 검색 버튼과 엔터 키에 대한 공통 검색 로직
  function performSearch() {
    // 입력된 알파벳을 가져오기
    const searchKeyword = document.querySelector('.input').value.toLowerCase();

    // 카드를 담고 있는 부모 엘리먼트
    const cardContainer = document.getElementById('cardContainer');

    // 모든 카드 엘리먼트를 가져옴
    const cards = cardContainer.querySelectorAll('.card');

    // 각 카드에 대해 검색 키워드가 포함된지 확인하고 보이거나 감추기
    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      if (title.includes(searchKeyword)) {
        card.style.display = 'block'; // 해당 키워드가 포함된 경우 표시
      } else {
        card.style.display = 'none'; // 해당 키워드가 포함되지 않은 경우 숨김
      }
    });
  }
});
