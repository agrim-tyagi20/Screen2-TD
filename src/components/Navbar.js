import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="main-nav">

                <div className="nav-container">
                    <div className="img_div">
                        <img src="https://tutedude.com/refundassets/Tutedude.png" alt="img" />
                    </div>

                    <div className="elems_div">
                        <h1 className="elems_h1_ass_cwm">My Assignment</h1>
                        <h1 className="elems_h1_ass_cwm">Chat with Mentor</h1>
                        <div className="Profile_div">
                            <i class="fa-solid fa-user"></i>
                            <h1> ProfileName</h1>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>


                    </div>

                </div>

            </nav>

        </>
    )
}

export default Navbar
