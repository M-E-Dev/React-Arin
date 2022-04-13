import React from "react";

class SearchBar extends React.Component {

    
    // state = {
    //     searchQuery: ""
    // }

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row row mb-5 mt-5 px-2">
          <div className="col-10">
            <input
              // value="Matrix"   --- value kullnırsak kontrol edemeyiz
              // value={this.state.searchQuery}
              // onChange={(event) => console.log(event.target.value)}
              // onChange={(event) => this.setState({searchQuery: event.target.value})}
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a movie..."
            ></input>
          </div>
          <div className="col-2">
              <button type="button" className="btn btn-md btn-danger" style={{float:"right"}}>
                  Add Movie
              </button>
          </div>
        </div>
      </form>
    );
  }
}


export default SearchBar;
