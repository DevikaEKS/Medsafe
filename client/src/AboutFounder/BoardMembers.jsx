// import React from 'react';
// import founder1 from "../assets/founder1.png";
// import founder2 from "../assets/founder2.png";
// import founder3 from "../assets/founder3.png";

// function BoardMembers() {
//   const boardMembers = [{
//     name: 'Dr J Vijay Venkatraman',
//     position: "Founder",
//     bio: `MBBS, F. Diab., MBA, FPIPA (UK) Managing Director & CEO,Oviya MedSafe`,
//     img: founder2 // Updated to reference the imported image directly
//    }, {
//     name: 'Dr V Janarthanan',
//     position: "Chairman, Oviya MedSafe",
//     bio: `MS, FICS, FAIS Chief Surgeon & Managing Director, KTVR Group Hospital Coimbatore, India`,
//     img: founder1 // Updated to reference the imported image directly
//    },
//    {
//     name: 'Dr C J Arun Raja',
//     position:"Director, Oviya MedSafe",
//     bio: `MS, D. Ortho, DNB (Ortho) Consultant Orthopaedic Surgeon, KTVR Group Hospital Coimbatore, India`,
//     img: founder3 // Updated to reference the imported image directly
//    }];

//   return (
//     <div className='container-fluid p-0 m-0 founderpart'>
//       <h1 className='text-center'>Our Board</h1>
// <div className='boardpart'>
//   <div className='container'>
//       <div className='row text-center mx-5 py-5'>
 
//         {boardMembers.map((member, index) => (
//           <div className='col-sm-12 col-md-4' key={index}>
//             <div className="card mb-4 boardcard m-3 h-100 border-0">
//               <img src={member.img} alt={member.name} className="card-img-top" />
//               <div className="card-body">
//                 <h5 className="card-title boardcardtitle">{member.name}</h5>
//                 <p className="card-text boardcardposition">{member.position}</p>
//                 <p className="card-text memberbio">{member.bio}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BoardMembers;



import React from 'react';
import founder1 from "../assets/founder1.png";
import founder2 from "../assets/founder2.png";
import founder3 from "../assets/founder3.png";

function BoardMembers() {
  const boardMembers = [{
    name: 'Dr J Vijay Venkatraman',
    position: "Founder",
    bio: `MBBS, F. Diab., MBA, FPIPA (UK)<br/> Managing Director & CEO,<br/>Oviya MedSafe`,
    img: founder2
   }, {
    name: 'Dr V Janarthanan',
    position: "Chairman, Oviya MedSafe",
    bio: `MS, FICS, FAIS<br/>Chief Surgeon & Managing Director,<br/> KTVR Group Hospital <br/> Coimbatore, India`,
    img: founder1
   },
   {
    name: 'Dr C J Arun Raja',
    position:"Director, Oviya MedSafe",
    bio: `MS, D. Ortho, DNB (Ortho)<br/> Consultant Orthopaedic Surgeon,<br/> KTVR Group Hospital<br/> Coimbatore, India`,
    img: founder3
   }];

  return (
    <div className='container-fluid p-0 m-0 founderpart'>
      <h1 className='text-center'>Our Board</h1>
      <div className='boardpart'>
        <div className='container'>
          <div className='row text-center mx-5 py-5'>
            {boardMembers.map((member, index) => (
              <div className='col-sm-12 col-md-4' key={index}>
                <div className="card mb-4 boardcard m-2 h-100 border-0">
                  <img src={member.img} alt={member.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title boardcardtitle">{member.name}</h5>
                    <p className="card-text boardcardposition">{member.position}</p>
                    <p
                      className="card-text memberbio"
                      dangerouslySetInnerHTML={{ __html: member.bio.replace(/(?:\r\n|\r|\n)/g, '<br />') }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardMembers;
