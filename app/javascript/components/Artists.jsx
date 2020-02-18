import React from "react";
import { Link } from "react-router-dom";

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }
  componentDidMount() {
    const url = "/api/v1/artists/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
          console.log(response);
          this.setState({ artists: response })})
      .catch((error) => console.log('error',error));
    }

    render() {
        const { artists } = this.state;
        const allartists = artists.map((artist, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <img
                src={artist.image}
                className="card-img-top"
                alt={`${artist.name} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
                <Link to={`/artist/${artist.id}`} className="btn custom-button">
                  View artist
                </Link>
              </div>
            </div>
          </div>
        ));
        const noartist = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              No artists yet. Why not 
            </h4>
          </div>
        );
    
        return (
          <>
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-4">artists for every occasion</h1>
                <p className="lead text-muted">
                  We’ve pulled together our most popular artists, our latest
                  additions, and our editor’s picks, so there’s sure to be something
                  tempting for you to try.
                </p>
              </div>
            </section>
            <div className="py-5">
              <main className="container">
                <div className="text-right mb-3">
                  <Link to="/artist" className="btn custom-button">
                    Create New artist
                  </Link>
                </div>
                <div className="row">
                  {artists.length > 0 ? allartists : noartist}
                </div>
                <Link to="/" className="btn btn-link">
                  Home
                </Link>
              </main>
            </div>
          </>
        );
      }
}
export default Artists;