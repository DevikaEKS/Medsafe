import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    return (
        <div className='d-flex gap-5 bold'>
            <Link to="/" className="custom-link text-white">HOME</Link>

            <div
                className="position-relative"
                onMouseEnter={() => setShowDropdown1(true)}
                onMouseLeave={() => setShowDropdown1(false)}
                >
                <Link
                    to="/who-are-we"
                    className="custom-link text-white"
                >
                    WHO ARE WE
                </Link>

                {/* Dropdown Menu */}
                {showDropdown1 && (
                    <div
                    className="dropdown-menu show"
                    style={{
                        position: "absolute",
                        left: "0",
                        paddingTop: "1  rem",
                        top: "100%",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "0.5rem",
                        zIndex: "1030",
                    }}
                    >
                    <Link to="/about-us" className="dropdown-item">
                        About Us
                    </Link>
                    <Link to="/our-founder" className="dropdown-item">
                        Our Founder
                    </Link>
                    <Link to="/our-board" className="dropdown-item">
                        Our Board
                    </Link>
                    </div>
                )}
            </div>

            <div
                className="position-relative"
                onMouseEnter={() => setShowDropdown2(true)}
                onMouseLeave={() => setShowDropdown2(false)}
                >
                <Link
                    to=""
                    className="custom-link text-white"
                >
                    SERVICES
                </Link>

                {/* Dropdown Menu */}
                {showDropdown2 && (
                    <div
                    className="dropdown-menu show"
                    style={{
                        position: "absolute",
                        left: "0",
                        paddingTop: "1  rem",
                        top: "100%",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "0.5rem",
                        zIndex: "1030",
                    }}
                    >
                    <Link to="/about-us" className="dropdown-item">
                        Drug Safety Services
                    </Link>
                    <Link to="/our-founder" className="dropdown-item">
                        Pharmacovigilance Consulting
                    </Link>
                    <Link to="/our-board" className="dropdown-item">
                        Strategic Partnerships
                    </Link>
                    </div>
                )}
            </div>
            
            <Link to="/" className="custom-link text-white">NEWS</Link>
            <Link to="/" className="custom-link text-white">DOWNLOADS</Link>
            <Link to="/" className="custom-link text-white">CAREERS</Link>
            <Link to ="/" className="custom-link text-white">CONTACT</Link>
        </div>
    )
}

export default Navbar