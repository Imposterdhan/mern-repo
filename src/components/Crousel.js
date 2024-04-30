import React from 'react';

export default function Crousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

        <div className="carousel-inner" id="crousel">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/300×300?burger" className="d-block w-100 img-fluid" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300?pizza" className="d-block w-100 img-fluid" alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300?momos" className="d-block w-100 img-fluid" alt="Momos" />
          </div>
          <div className="crousel-caption" style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", width: "80%" }}>
            <form className="d-flex" style={{ width: "100%" }}>
              <div style={{ width: "65%" }}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "100%" }} />
              </div>
              <div style={{ width: "35%" }}>
                <button className="btn btn-outline-success" text-white bg-success type="submit" style={{ width: "auto" }}>Search</button>
              </div>
            </form>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
