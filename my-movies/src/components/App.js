import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import axios from "axios";

// require('dotenv').config()
// console.log(process.env.REACT_APP_API_KEY)
// import 'dotenv/config';
// import express from 'express';

class App extends React.Component {
  state = {
    movies: [
      ////API'den alacağımız için bu veriyi sildik
      // {
      //   id: 1,
      //   name: "Spiderman",
      //   rating: 8.6,
      //   overview:
      //     "Sevgilisi Mary Jane'den ayrılan Peter ona gerçek kimliğini açıklayıp açıklamamak arasında kaldığı için oldukça zor bir dönem geçirmektedir. ",
      //   imageURL:
      //     "https://www.themoviedb.org/t/p/w1280/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg",
      // },
      // {
      //   id: 2,
      //   name: "The Matrix",
      //   rating: 9.3,
      //   overview:
      //     "Bir bilgisayar programcısı olan Thomas Anderson aynı zamanda Neo nickname'li çok usta bir 'hacker' dır. Ancak siyah takım elbiseli ve gözlüklü adamların yakın takibindedir.",
      //   imageURL:
      //     "https://www.themoviedb.org/t/p/w1280/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
      // },
      // {
      //   id: 3,
      //   name: "The Batman",
      //   rating: 8.7,
      //   overview:
      //     "Bruce Wayne, nam-ı diğer Batman, suçla mücadelesinin ikinci yılında, Gotham City'de kendi ailesine bağlanan yolsuzluğu ortaya çıkarırken, Riddler adıyla bilinen bir seri katil tehditi ile karşı karşıya kalır.",
      //   imageURL:
      //     "https://www.themoviedb.org/t/p/w1280/3B19RaHTSpyNEcjWtsAPqgJsQ0h.jpg",
      // },
      // {
      //   id: 4,
      //   name: "The Flash",
      //   rating: 8.3,
      //   overview:
      //     "Geçmişinde büyük bir trajedi yaşamış Barry Allen, Central City Polis Birimi’nde çalışan ve suçluların arkalarında bıraktıkları ipuçlarını toplayan bir adli laboratuvar asistanıdır. ",
      //   imageURL:
      //     "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
      // },
      // {
      //   id: 5,
      //   name: "Interstellar",
      //   rating: 9.4,
      //   overview:
      //     "Teknik bilgisi ve becerisi yüksek olan Cooper, geniş mısır tarlalarında çiftçilik yaparak geçinmektedir; amacı iki çocuğuna güvenli bir hayat sunmaktır. ",
      //   imageURL:
      //     "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg",
      // },
      // {
      //   id: 6,
      //   name: "Arrow",
      //   rating: 6.7,
      //   overview:
      //     "Şiddetli bir gemi kazasından sonra, milyarder playboy Oliver Queen kaybolmuştur ve Pasifik’te ücra bir adada yaşadığı keşfedilinceye kadar, beş yıl boyunca ölü olduğu sanılmıştır.",
      //   imageURL:
      //     "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      // },
    ],
    searchQuery: "",
  };

  // Fetch yöntemi
  async componentDidMount() {
    // npx json-server --watch src/api/movies.json --port 3002 ile fake api canlandırdık ve aşağıda kullandık
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({ movies: data });
  }

  // // // AXIOS yöntemi promise tabanlı kütüphane
  // // // google axios npm
  // // // ctrl+c to stop
  // // // npm i axios
  // // // import axios from "axios";
  // // // tek seferde json olarak alıyoruz  .json gerekmiyor
  // async componentDidMount() {
  //   const response = await axios.get("http://localhost:3002/movies");
  //   console.log(response);
  //   this.setState({ movies: response.data });
  // }

  // Gerçek apiden alıyoruz. Response bakıp yolu ona göre çizicez
  // async componentDidMount() {
  //   // api key açıkta
  //   // const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=274c12e6e2e4f9ca265a01d107280eba&language=en-US&page=1");
  //   // Api key gizlemek için -->
  //   //                       --> (npm i dotenv)
  //   // Roota .env dosyası açıp içine REACT_APP_API_KEY=274c12e6e2e4f9ca265a01d107280eba şeklinde yazdık
  //   // içerde de aşağıdaki şekilde çağırdık.
  //   const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
  //   console.log(response.data.results);
  //   this.setState({ movies: response.data.results });
  // }

  searchMovie = (event) => {
    // console.log(event.target.value)
    this.setState({
      searchQuery: event.target.value,
    });
    console.log(event.target.value);
  };

  // Fetch yöntemi
  deleteMovie = async (movie) => {
    const url = `http://localhost:3002/movies/${movie.id}`;
    await fetch(url, {
      // Default metod get olduğu için normalde metod belirtmiyoruz.
      // Burada ise
      method: "DELETE",
    });
    // Filter metodu silinirse apiden siliniyor ama ekran güncellenmiyor.
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({ movies: newMovieList }));

    //State boş olsaydı bu kullanılabilirdi
    // this.setState ({
    //   movies:newMovieList
    // })
  };

  // // AXIOS yöntemi
  // deleteMovie = async (movie) => {
  //   axios.delete(`http://localhost:3002/movies/${movie.id}`)
  //   // Axios da filter gerekiyor. Apiden siliniyor ama ekranda güncellemiyor yoksa.
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
  //   this.setState((state) => ({ movies: newMovieList }));
  // };

  //  Routing kullanmadan bu şekilde yapılırdı
  // if (window.location === http:/localhost:3000/edit) {
  //
  // }

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              render={() => (
                // <div></div> Jsx içeriğini dive almak yerine React.Fragment kullanacağız, Aynı hiyerarşide çoklu element almamızı sağlar
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>

                  <MovieList
                    deleteMovieProp={this.deleteMovie}
                    movies={filteredMovies}
                  />
                </React.Fragment>
              )}
            ></Route>

            {/* <Route path="/add">
            <AddMovie />
          </Route> */}
            {/* Yerine aşağıdaki gibi yazabiliriz */}
            <Route path="/add" component={AddMovie} />
          </Routes>
        </Router>
      </div>
    );
  }
}

//Fonsiyonel component versiyonu
// const App = () => {
//     return (<h1>My Movies</h1>)
// }

export default App;
