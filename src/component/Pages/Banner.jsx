import React from 'react';
import { NavLink } from 'react-router';

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">

            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/gZNT0w8h/recyclable-6638729-1280.png"
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-5">
                    <h1 className="text-4xl md:text-5xl font-bold">Reduce, Reuse, Recycle</h1>
                    <p className="mt-3 text-lg">আজই শুরু করো প্লাস্টিক কমানো</p>
                   <NavLink to='/challenges'>
                     <button className="btn bg-primary mt-5">Learn More</button>
                   </NavLink>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/5Xzy8Qzp/windmills-6745314-1280.jpg"
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-5">
                    <h1 className="text-4xl md:text-5xl font-bold">Clean Energy for All</h1>
                    <p className="mt-3 text-lg">বাতাস থেকে শক্তি, পৃথিবীর জন্য</p>
                    <NavLink to='/challenges'>
                      <button className="btn bg-primary mt-5">Explore</button>
                    </NavLink>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/B2hMMfrd/frog-8890832-1280.jpg"
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-5">
                    <h1 className="text-4xl md:text-5xl font-bold">Protect Wildlife</h1>
                    <p className="mt-3 text-lg">প্রতিটি প্রাণীই পৃথিবীর সম্পদ</p>
                    <NavLink to='/challenges'>
                    <button className="btn bg-primary mt-5">Join Us</button>
                    </NavLink>
                    
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/x8fP83w8/ai-generated-8708404-1280.jpg"
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-5">
                    <h1 className="text-4xl md:text-5xl font-bold">Sustainable Future</h1>
                    <p className="mt-3 text-lg">আজকের কাজই কালকে প্রভাব ফেলবে</p>
                    <NavLink to='/challenges'>
                    <button className="btn bg-primary mt-5">Start Today</button>
                    </NavLink>
                    
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;
