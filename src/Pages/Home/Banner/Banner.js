import React from 'react';

const Banner = () => {
    return (
        <div>

            <div className="hero h-96" style={{ backgroundImage: `url("https://i.ibb.co/QpmbQf5/banner.jpg")`, height: 600 }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="py-4 font-bold text-gray-700">TYPING SPEED TEST.</p>
                        <h1 className="mb-5 text-4xl font-bold text-gray-800">Test your typing skills</h1>

                        <button className="btn text-black btn-outline btn-primary">Get Started</button>

                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Banner;