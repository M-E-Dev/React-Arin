import React from "react";

class App extends React.component {
    
    state = {

        movies : [
          {
            id: 1,
            name: "The Flash",
            rating: 8.3,
            overview:
              "This is a wider card with supporting text below as a natural lead-in to additional content",
            imageURL:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
          },
          {
            id: 2,
            name: "Interstellar",
            rating: 9.4,
            overview:
              "This is a wider card with supporting text below as a natural lead-in to additional content",
            imageURL:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xbiycuc84TrieEWwkkuH2hoEa9S.jpg",
          },
          {
            id: 3,
            name: "Arrow",
            rating: 6.7,
            overview:
              "This is a wider card with supporting text below as a natural lead-in to additional content",
            imageURL:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
          },
        ]
    }

  render() {
      return (<h1>My Movies</h1>);
    };
}

//Fonsiyonel component versiyonu
// const App = () => {
//     return (<h1>My Movies</h1>)
// }

export default App;

