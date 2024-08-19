import pagesBg from '../assets/images/pages-bg.png';

const About = () => {
  return (
    <section
      className="about_section d-flex align-items-center"
      style={{
        backgroundImage: `url(${pagesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw', // Ensures the background image takes the full width
        minHeight: '100vh', // Ensures the section takes the full height of the screen
        padding: '60px 20px',
        color: '#ffffff',
        margin: '0',
      }}
    >
      <div
        className="container bg-dark bg-opacity-75 p-4 rounded"
        style={{
          maxWidth: '800px',
          maxHeight: '500px', // Restricts the height of the text box
          overflowY: 'auto', // Allows scrolling if the content overflows
        }}
      >
        <h1 className="text-center fw-bold mb-4">About Our Library</h1>
        <p className="lead text-center mb-4">
          Zenith Books Library has been serving the community with a vast collection of books and resources for readers of all ages. Our mission is to inspire, educate, and foster a love for reading in a welcoming environment.
        </p>
        <p className="text-center mb-4">
          Established in 2024, our library offers a wide range of books across various genres, including fiction, non-fiction, academic, and more. We are committed to providing access to knowledge and entertainment through our carefully curated collection.
        </p>
        <p className="text-center mb-4">
          Our library also hosts events, workshops, and reading programs aimed at promoting literacy and lifelong learning. We believe that libraries play a crucial role in building informed and engaged communities.
        </p>

        <h2 className="text-center fw-bold mt-5 mb-3">Our Mission</h2>
        <p className="text-center mb-4">
          Our mission is to provide free and easy access to information, promote literacy, and contribute to the cultural and educational growth of our community.
        </p>

        <h2 className="text-center fw-bold mt-5 mb-3">Our Team</h2>
        <p className="text-center mb-4">
          Our dedicated team of librarians and volunteers are always here to help you find the resources you need. Whether you are looking for your next great read, conducting research, or exploring new topics, we are here to support your journey.
        </p>

        <p className="text-center mt-5">&copy; 2024 Zenith Books</p>
      </div>
    </section>
  );
};

export default About;
