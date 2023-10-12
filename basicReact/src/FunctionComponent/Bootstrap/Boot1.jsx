import React from "react";

export default function Boot1() {
  var Productdata = [
    {
      id: 1,
      name: "p1",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      name: "p2",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
    },
    {
      id: 3,
      name: "p3",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "p4",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    },
    {
      id: 5,
      name: "p5",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "p6",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",
    },
    {
      id: 7,
      name: "p7",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      name: "p8",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1597633125184-9fd7e54f0ff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    },
    {
      id: 9,
      name: "p9",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
    },
    {
      id: 10,
      name: "p10",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1585488763177-bde7d15fd3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      id: 11,
      name: "p11",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 12,
      name: "p12",
      orgPrice: 123,
      finalPrice: 1234,
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
  ];
  return (
    <>
      {/* Start nav bar */}

      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/#">
            Cat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="/#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light disabled"
                  href="/#"
                  aria-disabled="true"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* End Nav bar */}

      {/*  Start of slider img */}

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1693850286866-58b493236931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              height="500px"
              className="d-block w-100 imgslide"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1669920081817-05074ba9bd39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              height="500px"
              className="d-block w-100 imgslide"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1693939009746-01f5047702f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80"
              height="500px"
              className="d-block w-100 imgslide"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* End of slider img*/}

      {/* Start Card */}
      <div className="container-fluid">
        <h5 className="background text-light text-center p-2">
          Latest Products
        </h5>
        <div className="row">
          {Productdata.map((item, index) => {
            return (
              <div
                key={index}
                className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3"
              >
                <div className="card">
                  <img
                    src={`${item.image}`}
                    height="200px"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <del className="text-danger">&#8377;{item.orgPrice}</del>{" "}
                      <span className="text-success">
                        &#8377;{item.finalPrice}
                      </span>
                    </p>
                    <a href="/#" className="btn btn-success w-100 btn-sm">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* End  Card */}

      {/*  Start FeedBack */}
      <div className="container-fluid bg-light" style={{height: "230px"}}>
        <div className="container bg-success " style={{height: "220px"}}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>

      {/*  End FeedBack */}

      {/* Start Footer */}


<div className="container-fluid my-5">

 
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}} >
    
    <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: "#6351ce"}} >
       
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      
      <div>
        <a href="/#" class="text-white me-4">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="/#" className="text-white me-4">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="/#" className="text-white me-4">
          <i className="fa fa-google"></i>
        </a>
        <a href="/#" className="text-white me-4">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="/#" className="text-white me-4">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="/#" className="text-white me-4">
          <i className="fa fa-github"></i>
        </a>
      </div>
   
    </section>
   
    <section className="">
      <div className="container text-center text-md-start mt-5">
      
        <div className="row mt-3">
     
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
             
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto" style={{width:"60px", backgroundColor:"#7c4dff", height: "2px"}} />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
           
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}/>
            <p>
              <a href="/#" className="text-white">Product</a>
            </p>
            <p>
              <a href="/#" className="text-white">Product</a>
            </p>
            <p>
              <a href="/#" className="text-white">Product</a>
            </p>
            <p>
              <a href="/#" className="text-white">Product</a>
            </p>
          </div>
        
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px" ,backgroundColor: "#7c4dff", height: "2px"}}/>
            <p>
              <a href="/#" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="/#" className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="/#" className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="/#" className="text-white">Help</a>
            </p>
          </div>
         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}/>
            <p><i className="fa fa-home mr-3"></i> New York, US</p>
            <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
           
        </div>
      
      </div>
    </section>
    
    <div
         class="text-center p-3"style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>© 2023 Copyright:<a class="text-white" href="/#">fa</a>
    </div>
     
  </footer>
  

</div>
 
      {/* End Footer */}
    </>
  );
}
