import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#091747', color: "white", height: "150px", padding: "5px", marginTop: "20px" }}>
            <div className='mt-5 container d-flex align-items-center justify-content-evenly'>
                <div className=''>
                    <h4>Traveling via Delhi,</h4>
                    <h4>Dehradun or Chandigarh?</h4>
                </div>
                <div className=''>
                    <h4>Rent while you transit </h4>
                    <h4>& save even more!</h4>
                </div>
                <div className=''>
                    <h4>Save upto  20%</h4>
                    <button className='p-2 rounded btn'> Know More</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;