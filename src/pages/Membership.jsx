import pagesBg from '../assets/images/pages-bg.png';

const Membership = () => {
  return (
    <section
      className="membership-section"
      style={{
        backgroundImage: `url(${pagesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        minHeight: '100vh',
        padding: '60px 20px',
        color: '#ffffff',
      }}
    >
      <div className="container mt-5">
        <h1 className="text-center mb-4">Membership Plans</h1>
        <p className="text-center mb-4">
          Become a member of Zenith Books Library and enjoy unlimited access to our resources, special events, and more!
        </p>
        <div className="row">
          {/* Basic Plan */}
          <div className="col-md-4 mb-4">
            <div className="card text-center bg-dark text-white h-100">
              <div className="card-body">
                <h5 className="card-title">Basic Membership</h5>
                <h6 className="card-subtitle mb-2">$10/month</h6>
                <p className="card-text">Access to the entire catalog of books.</p>
                <p className="card-text">Up to 5 book checkouts per month.</p>
                <a href="#" className="btn btn-primary">Join Now</a>
              </div>
            </div>
          </div>
          {/* Premium Plan */}
          <div className="col-md-4 mb-4">
            <div className="card text-center bg-dark text-white h-100">
              <div className="card-body">
                <h5 className="card-title">Premium Membership</h5>
                <h6 className="card-subtitle mb-2">$25/month</h6>
                <p className="card-text">Unlimited access to books and events.</p>
                <p className="card-text">Priority reservations and extended borrowing periods.</p>
                <a href="#" className="btn btn-primary">Join Now</a>
              </div>
            </div>
          </div>
          {/* Family Plan */}
          <div className="col-md-4 mb-4">
            <div className="card text-center bg-dark text-white h-100">
              <div className="card-body">
                <h5 className="card-title">Family Membership</h5>
                <h6 className="card-subtitle mb-2">$40/month</h6>
                <p className="card-text">Membership for up to 4 family members.</p>
                <p className="card-text">All Premium benefits included.</p>
                <a href="#" className="btn btn-primary">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
