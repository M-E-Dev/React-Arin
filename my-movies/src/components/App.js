import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";

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

  // // Fetch yöntemi
  // async componentDidMount() {
  //   const baseURL = "http://localhost:3002/movies"
  //   const response = await fetch(baseURL);
  //   console.log(response)
  //   const data = await response.json();
  //   console.log(data)
  //   this.setState({movies: data})
  // }

  // // AXIOS yöntemi promise tabanlı kütüphane
  // google axios npm
  // ctrl+c to stop
  // npm i axios
  // import axios from "axios";
  // tek seferde json olarak alıyoruz  .json gerekmiyor
  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    console.log(response);
    this.setState({ movies: response.data });
  }

  searchMovie = (event) => {
    // console.log(event.target.value)
    this.setState({
      searchQuery: event.target.value,
    });
    console.log(event.target.value);
  };


  // Fetch yöntemi
  deleteMovie = async (movie) => {
    
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({ movies: newMovieList }));

    //State boş olsaydı bu kullanılabilirdi
    // this.setState ({
    //   movies:newMovieList
    // })
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList deleteMovieProp={this.deleteMovie} movies={filteredMovies} />
      </div>
    );
  }
}

//Fonsiyonel component versiyonu
// const App = () => {
//     return (<h1>My Movies</h1>)
// }

export default App;
