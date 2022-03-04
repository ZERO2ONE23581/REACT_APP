import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        //1. fetch 요청
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json(); //2. json 데이터 처리
    setMovies(json.data.movies); //3. 데이터 -> 배열
    setLoading(false);
  };

  useEffect(() => {
    // api는 한번만 요청받음
    getMovies();
  }, []);

  console.log(movies);

  //배열안의 데이터를 꺼낼때는 map을 사용하도록 한다. key를 항상 포함시켜야됨, key는 고유한 값이 이상 어느것이든 상관없음.
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
