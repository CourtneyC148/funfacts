import React from 'react'
import solo1 from '../imgs/solo1.jpg'

const FactTwo = () => {
    return (
        <div className="container factTwo">
            <div className="factTwoContainer">
                <img src={solo1} alt="" />
                <div className="box">
                    <p>
                        Each year, 9 million American women travel overseas alone.
                        The concept of solo female travel is not new, but it is a growing trend.
                    </p>
                </div>

                <div className="box">
                    <p>
                        Statistics show that 72% of lady travelers in 2014 were enthusiastic about traveling solo and have actually     traveled on their own either for work or pleasure.
                    </p>
                </div>

                <div className="box">
                    <p>
                        According to Booking.com, 59% of women solo travelers would travel alone again in the next 12 months with “a    mission to be refreshed and inspired.”
                    </p>
                </div>
            </div>
        </div>
    )
}


export default FactTwo