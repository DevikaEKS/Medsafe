import React from 'react'
import research from '../assets/research.png';
import './AboutFounder.css';
function AboutFounder() {
  return (
    <div className='container-fluid testimonialpart text-justify text-light'>
        <div className='row mx-1 mx-md-5'>
            <h1 className='philosophyhead'>About Us</h1>
            <div className='col-sm-12 col-md-6'>
<p>Oviya MedSafe provides end-to-end global drug safety support (combined with regulatory-compliant drug safety database access, as required) to pharmaceutical companies with mature pharmacovigilance systems. More importantly, Oviya MedSafe comprehensively consults to generic pharmaceutical companies across the globe to help them constantly evolve their pharmacovigilance departments to be in line with the regulations pertinent to their market presence.</p>
            </div>
            <div className='col-sm-12 col-md-6'>
                
            </div>
            </div>
            <div className='row mx-1 mx-md-5 my-0 my-md-4'>  
            <div className='col-sm-12 col-md-6'>
            <h1 ><span className='whytxt'>WHY </span>Oviya<br/> MedSafe ?</h1>
            <img src={research} className='researchimg'/>
                </div>
                <div className='col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                <p>Oviya MedSafe has been positioned to leverage its expertise in Pharmacovigilance, an industry which is evolving with new and updated regulations day by day. We are capable of providing modular solutions in terms of Drug Safety services, along with regulatory-compliant drug safety database access, as required. </p>
                    <p>We aspire to bridge the crucial gap in the industry where end-to-end pharmacovigilance services are always in demand. Oviya MedSafe is fueled by a passion for pharmacovigilance. We not only assure timely delivery and the highest quality of our services but also ensure that proper business continuity and disaster recovery plans are implemented in order to resume the key business activities within a short while.</p>
                    <p>Your data confidentiality is our topmost priority. Therefore, our business model ensures that your data with us is as safe as it is when it is with you. Our global delivery centre is equipped with the state-of-the-art infrastructure and qualified drug safety teams to handle your data with utmost care.</p>
                    <p>We bring a lot of energy and dynamism to the table, along with years of pharmacovigilance, medical and management experience. Contact us with your requirements and be assured of unique and unparalleled services.</p>

                </div>
        </div>
    </div>
  )
}

export default AboutFounder