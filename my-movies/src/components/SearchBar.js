import React from "react"

class SearchBar extends React.Component {
    render(){
        return(
            <form >
                 <div className="form-row mb-5 mt-5">
                     <div className="col-12">
                         <input
                         type="text" className="form-control" placeholder="Search a movie..."></input>
                    </div>
               </div>
             </form>
        )
    }
}

export default SearchBar;










// import React from "react";

// class SearchBar extends React.Component {

//     // state = {
//     //     searchQuery: ""
//     // }

//     handleFormSubmit = (event) => {
//         event.preventDefault();
//     }

//     render(){

//         return(

//             <form onSubmit={this.handleFormSubmit}>
//                 <div className="form-row mb-5 mt-5">
//                     <div className="col-12">
//                         <input
//                         // value="Matrix"   --- value kullnırsak kontrol edemeyiz
//                         // value={this.state.searchQuery}
//                         // onChange={(event) => console.log(event.target.value)}
//                         // onChange={(event) => this.setState({searchQuery: event.target.value})}
//                         onChange={this.props.searchMovieProp}
//                         type="text" className="form-control" placeholder="Search a movie..."></input>
//                     </div>
//                 </div>
//             </form>

//         )

//     }


// }

// export default SearchBar;
