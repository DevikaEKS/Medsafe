import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {

    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    const handleDropdown1 = () => setShowDropdown1(!showDropdown1); // Toggle for WHO ARE WE
    const handleDropdown2 = () => setShowDropdown2(!showDropdown2); // Toggle for SERVICES

    return (
        <div className='d-flex-col gap-3 bold px-5 py-2'>
            <div className='mb-2'>
                <Link to="/" className="custom-link text-black">HOME</Link>
            </div>
            

            <div className='mb-2'>
                <div
                    className="custom-link text-black"
                    onClick={handleDropdown1} // Toggle dropdown on click
                >
                    WHO ARE WE
                </div>

                {/* Dropdown Menu */}
                {showDropdown1 && (
                    <div
                        className=""
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

            <div className='mb-2'>
                <div
                    className="custom-link text-black"
                    onClick={handleDropdown2} // Toggle dropdown on click
                >
                    SERVICES
                </div>

                {/* Dropdown Menu */}
                {showDropdown2 && (
                    <div
                        className=""
                        style={{transition: 'max-height 0.5s ease-in-out'}}
                    >
                        <Link to="/drug-safety" className="dropdown-item">
                            Drug Safety Services
                        </Link>
                        <Link to="/pharmacovigilance" className="dropdown-item">
                            Pharmacovigilance Consulting
                        </Link>
                        <Link to="/strategic-partnerships" className="dropdown-item">
                            Strategic Partnerships
                        </Link>
                    </div>
                )}
            </div>

            <div className='mb-2'>
                <Link to="/" className="custom-link text-black">NEWS</Link>
            </div>
            <div className='mb-2'>
                <Link to="/" className="custom-link text-black">DOWNLOADS</Link>
            </div>
            <div className='mb-2'>
                <Link to="/" className="custom-link text-black">CAREERS</Link>
            </div>
            <div className='mb-2'>
                <Link to="/" className="custom-link text-black">CONTACT</Link>
            </div>
        </div>
    );
};

export default MobileNav;
