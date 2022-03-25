import React from 'react';
import axios from 'axios';
import Movie from './movies';
import './App.css';

class App extends React.Component{
  state = {
    isLoading: true,
    movies:[],
  };

  getMovies = async () => {
    const {
        data: {
          data: {movies}
        },
    }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //console.log(movies);
    //console.log(movies.data.data.movies);
    this.setState({movies, isLoading:false})
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading,movies} = this.state;
    return(
      <div className='container'>
        <div className='movies'>
            {/* {isLoading ? '로딩' : '대기'} */}
            {isLoading 
            ?( '로딩' )
            :( movies.map((movie) => (
            // console.log(movie);
              <Movie
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                // genres={movie.genres}
                />
            ))
            
            )}
        </div>
       </div>
    );
  }

}

export default App;
