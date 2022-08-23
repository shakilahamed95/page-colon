import React from 'react';
import './Service.css'
import { FaRegThumbsUp, FaGift, FaWallet } from "react-icons/fa";
const Services = () => {
    return (
        <div className=' color'>
            <div className='row container'>
                <div className='col-lg-4'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <h1 className='me-4 icon'> <FaRegThumbsUp></FaRegThumbsUp></h1>
                        <h4 className='mt-4'>Excellent Quality <br />Products</h4>
                        <div className='max'> <hr /></div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <h1 className='me-4 icon'> <FaGift></FaGift></h1>
                        <h4 className='mt-4'>Delivery Date & Return  <br />Date is FREE!!</h4>
                        <div className='max'> <hr /></div>
                    </div>
                </div>
                <div className='col-lg-4 mt-2'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <h1 className='me-4 icon'> <FaWallet></FaWallet></h1>
                        <h4 className='mt-4'>Pay on Delivery</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;