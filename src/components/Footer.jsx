const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
      <div className="container-fluid">
        <div className="text-center py-3">
          <p className="mb-0 text-white fw-bold">
            &copy; {new Date().getFullYear()} Zenith Books. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
