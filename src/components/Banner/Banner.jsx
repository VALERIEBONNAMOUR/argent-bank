import React from 'react';
import '../../assets/images/Banner.css';
import PlantImage from '../../assets/images/bank-tree.jpeg'; 

function Banner () {
    return (
        <div className='banner'>
            <img src={PlantImage} alt="plant" className='banner-image' />
            <section className='introduction'>
                <h2 className='sr-only'>Promoted Content</h2>
                <p className='subtitle'>No fees.</p>
                <p className='subtitle'>No minimum deposit.</p>
                <p className='subtitle'>High interest rates.</p>
                <p className='text'>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Banner;
