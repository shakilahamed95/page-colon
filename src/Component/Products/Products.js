import React from 'react';
import './Products.css'
import image1 from '../../Image/1.webp'
import image2 from '../../Image/2.webp'
import image3 from '../../Image/3.webp'
import image4 from '../../Image/4.webp'

const Products = () => {
    return (
        <div className='container'>
            <div className='products-container'>
                <div className='shadow-sm'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='p-2'>
                            <h3>Trekking Shoes</h3>
                            <button className='rounded-pill mt-4'> 3+ Products</button>
                        </div>
                        <img className='image' src={image1} alt="" />
                    </div>
                </div>
                <div className='shadow-sm '>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='p-2'>
                            <h3>Trekking Jackets</h3>
                            <button className='rounded-pill mt-4'> 10+Products</button>
                        </div>
                        <img className='image' src={image2} alt="" />
                    </div>
                </div>
                <div className='shadow-sm'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='p-2'>
                            <h3>Backpacks</h3>
                            <button className='rounded-pill mt-4'> 4+ Products</button>
                        </div>
                        <img className='image' src={image3} alt="" />
                    </div>
                </div>
                <div className='shadow-sm'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='p-2'>
                            <h3>Trekking Accessories</h3>
                            <button className='rounded-pill mt-4'> 3+ Products</button>
                        </div>
                        <img className='image' src={image4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;