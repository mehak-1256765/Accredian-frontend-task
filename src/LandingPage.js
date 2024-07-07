import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import Navbar from './Navbar';
import Hero from './Hero';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation or other actions if needed
    navigate('/ReferralForm'); // Redirect to the Referral Form page
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <h2>How do I Refer?</h2>
        <div className="row mt-30 mb-30">
          <div className="col">
            <div className="share-boxes">
              <img src="https://i.ibb.co/PtYrLNy/img1.png" alt="img1" />
              <p>Share with your friends</p>
            </div>
          </div>
          <div className="col">
            <div className="share-boxes">
              <img src="https://i.ibb.co/P5TdfkT/img2.png" alt="img2" />
              <p>Give her $5 Discount</p>
              <img src="https://i.ibb.co/Sr5F70S/dotted-arrow1.png" alt="dotted-arrow1" className="dotted-line" />
              <img src="https://i.ibb.co/Fqs2KxB/dotted-arrow2.png" alt="dotted-arrow2" className="dotted-line2" />
            </div>
          </div>
          <div className="col">
            <div className="share-boxes">
              <img src="https://i.ibb.co/StC3RWk/img3.png" alt="img3" />
              <p>Get $1 for every $5</p>
            </div>
          </div>
        </div>
        <button>Refer Now</button>
        <div className="row refer-form-sec">
          <div className="col">
            <div className="refer-image">
              <img src="https://i.ibb.co/72ngXX8/big-image.jpg" alt="big-image" />
            </div>
          </div>
          <div className="col">
            <div className="refer-form">
              <ul>
                <li className="facebook-color"><a href="#">Facebook</a></li>
                <li className="youtube-color"><a href="#">YouTube</a></li>
                <li className="twitter-color"><a href="#">Twitter</a></li>
              </ul>
            </div>
            <div className="refer-form-content">
              <h2>Friends To Friends</h2>
              <p>Talking about friends securely helps to normalize it. You can start <a href="#">NOW!</a></p>
              <form onSubmit={handleSubmit}>
                <input type="text" name="Your Name" placeholder="Your Friend Name" />
                <input type="email" name="Your Email" placeholder="Your Friend Email" />
                <p>
                  <label className="container-checkbox">I have read and accept the T & C and privacy policy
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </p>
                <button type="submit">REFER & EARN</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-30 mb-30">
          <div className="col">
            <div className="referal-progress">
              <h2>YOUR REFERRAL PROGRESS</h2>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <td>No. of friends who have purchased</td>
                    <td><strong>USD : 10.00</strong></td>
                  </tr>
                  <tr>
                    <td>No. of friends who have purchased</td>
                    <td><strong>USD : 10.00</strong></td>
                  </tr>
                  <tr>
                    <td>No. of friends who have purchased</td>
                    <td><strong>USD : 10.00</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
