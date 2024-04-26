import React, { useState } from 'react';
import data from './data';

export default function Slider() {
    const [index, setIndex] = useState(0);

    const nextpic = () => {
        setIndex((index + 1) % data.length);
    };

    const prepic = () => {
        setIndex((index - 1 + data.length) % data.length);
    };

    return (
        <div>
            <div className="slider">
                <div className="slider-item">
                    <div className="slider1">
                        <div className="slider-iamge">
                            <img  src={data[index].pic1} alt="" />
                        </div>
                        <div className="slider-text">
                            <p>{data[index].tittle}</p>
                        </div>
                        <div className='slider-footer'>
                            <img src="https://www.tidio.com/images/icons/blue/quote.svg" alt="" />
                            <p className='pp' >{data[index].para1}</p>
                            <p className='pp1'>{data[index].para2}</p>
                        </div>
                    </div>
                </div>
                <div className="slider-item1">
                    <img  src={data[index].pic2} alt="" />
                    <div className='slider-buttons'>
                        <div>
                            <button onClick={prepic}><img className='rotate' src="https://cdn-icons-png.freepik.com/512/7013/7013517.png" alt="" /></button>
                        </div>
                        <div>
                            <button onClick={nextpic}><img src="https://cdn-icons-png.freepik.com/512/7013/7013517.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slider-buttons1'>
                        <div>
                            <button onClick={prepic}><img className='rotate' src="https://cdn-icons-png.freepik.com/512/7013/7013517.png" alt="" /></button>
                        </div>
                        <div>
                            <button onClick={nextpic}><img src="https://cdn-icons-png.freepik.com/512/7013/7013517.png" alt="" /></button>
                        </div>
                    </div>
        </div>
    );
}
