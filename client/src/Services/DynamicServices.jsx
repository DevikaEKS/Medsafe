import { servicesData } from "../utils/services/servicesData";

const DynamicServices = ({ index }) => {
  return (
    <div
      id={servicesData[index]?.id}
      className="d-flex flex-column flex-sm-row align-items-center justify-content-between p-36"
    >
      {/* Content */}
      <div className="w-100 w-sm-50">
        <h1 className="font-weight-bold text-uppercase mb-3" style={{ fontSize: "32px" }}>
          {servicesData[index]?.title}
        </h1>
        <p className="text-justify" style={{ fontSize: "18px", lineHeight: "1.8" }}>
          {servicesData[index]?.description}
        </p>
      </div>

      {/* Image */}
      <div className="w-100 w-sm-50 position-relative d-flex justify-content-center mt-4 mt-sm-0">
        {/* Main Image */}
        <div className="position-relative" style={{ zIndex: 10 }}>
          <img
            src={servicesData[index]?.image_id}
            alt="service"
            className="img-fluid"
            style={{ maxWidth: "416px", maxHeight: "416px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicServices;



// import { servicesData } from "../utils/services/servicesData"
// import SQUARE from "../assets/services/overlapSquare.png"

// const DynamicServices = () => {
//   const index = 0;
//   return (
//     <div id={servicesData[index]?.id} className=" sm:p-36 flex max-sm:flex-col sm:justify-between items-center">
//         {/* Content */}
//         <div className="w-6/12 ">
//             <h1 className="font-oswald text-[32px] font-bold text-heading uppercase">{servicesData[index]?.title}</h1>
//             <p className="text-[18px] items-start font-heebo pt-5 text-justify leading-8">{servicesData[index]?.description}</p>
//         </div>
//         {/* Image */}
//         <div className="w-5/12 relative inset-0 flex justify-center">
//           {/* Main Image */}
//           <div className="relative z-10">
//             <img 
//               src={servicesData[index]?.image_id}
//               alt="service"
//               className="sm:w-[416px] sm:h-[416px]"
//             />
//           </div>

//           {/* Square */}
//           <div className="absolute top-4 left-[68px] z-0">
//             <img 
//               src={SQUARE}
//               alt="square"
//               className="w-[416px] h-[416px]"
//             />
//           </div>
//         </div>

//     </div>
//   )
// }

// export default DynamicServices