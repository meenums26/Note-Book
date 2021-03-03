import React from 'react'

const Header = () => {
//let toggleLogo = document.querySelector('.toggleLogo');
//let menu = document.querySelector('.menu');

const handleChange=(e)=>{
document.querySelector('.menu').classList.toggle('isActive')
}
    return (
        <header>
            <div className="headerSection">
                <div className="logo">
                   <h3 ><b>Note Book</b></h3>
                </div>
                <div className="toggleLogo" onClick={handleChange}>
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
                <div className="menu">
                    <ul>
                        <li>Create Note</li>
                        <li>All Notes</li>
                        <li>Favourites</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
