import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';

const Home = () => {
  return (
    <section className="hero_section" style={{ width: '100vw', margin: '0', padding: '0', overflowX: 'hidden' }}>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000" data-bs-pause="hover">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={hero1} className="d-block w-100" alt="First slide" />
            <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                <h2 className="text-white">Welcome to Zenith Books</h2>
                <p className="text-white">Your gateway to endless knowledge and adventures.</p>
                <a href="/about" className="btn btn-outline-light px-4 py-2 rounded-0">Know More</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={hero2} className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                <h2 className="text-white">Discover a World of Stories</h2>
                <p className="text-white">Dive into our vast collection of books across all genres.</p>
                <a href="/about" className="btn btn-outline-light px-4 py-2 rounded-0">Know More</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={hero3} className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                <h2 className="text-white">Join Our Community</h2>
                <p className="text-white">Become a member and enjoy exclusive benefits and events.</p>
                <a href="/about" className="btn btn-outline-light px-4 py-2 rounded-0">Know More</a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Home;
