import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
    return (      
        <div className="container links">
            <h1 className="title">Solo Travel</h1>
            <p className="sub-title">Three facts on traveling solo:</p>
            <ul className="facts">
                <li>
                    <Link to="/FactOne">Traveling solo builds character</Link>
                </li>
                <li>
                    <Link to="/FactTwo">More women are interested in solo travel then men</Link>
                </li>
                <li>
                    <Link to="/FactThree">Americans are more likely to travel solo</Link>
                </li>
            </ul>
        </div>
                
    )
}

export default Links
