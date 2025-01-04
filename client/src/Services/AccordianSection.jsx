import { useState } from "react";
import { accordianData } from "../utils/services/accordianData";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordianSection = ({ index }) => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const clickHandle = (id) => {
    // Toggle the expanded state for the clicked item
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  };
  const currentIndex = index === 0 ? "serviceOne" : "serviceTwo";

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center py-5"
      style={{
        width: "100%",
        background: "linear-gradient(to right, $gradientfrom, $gradientto)",
      }}
    >
      <div
        className="bg-white"
        style={{
          width: "708px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {accordianData[0]?.[currentIndex]?.map((item) => {
          const isExpanded = expandedItemId === item.id;

          return (
            <div
              key={item.id}
              className="d-flex flex-column border-bottom py-3 px-4 cursor-pointer"
              onClick={() => clickHandle(item.id)}
              style={{ minHeight: "82px" }}
            >
              <div className="row d-flex justify-content-between">
                {/* Icon Section: 1 grid */}
                <div className="col-1  ">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center bg-black text-white"
                    style={{ width: "36px", height: "36px", fontSize: "17px" }}
                  >
                    {isExpanded ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>

                {/* Title Section: 11 grid */}
                <div className="col-11">
                  <h1
                    className="text-capitalize mb-0"
                    style={{ fontSize: "20px", color: "var(--plus-color)" }}
                  >
                    {item.title}
                  </h1>
                  {/* Display content only for the expanded item */}
                  <div
                    className={`overflow-hidden transition-all`}
                    style={{
                      maxHeight: isExpanded ? "500px" : "0",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <p
                      className="mt-3 text-muted"
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.7",
                        textAlign: "justify",
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordianSection;




// import { useState } from "react";
// import { accordianData } from "../utils/services/accordianData";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const AccordianSection = () => {
//   const [expandedItemId, setExpandedItemId] = useState(null);

//   const clickHandle = (id) => {
//     // Toggle the expanded state for the clicked item
//     setExpandedItemId((prevId) => (prevId === id ? null : id));
//   };

//   return (
//     <div className="w-full py-[49px] flex flex-col justify-between items-center bg-gradient-to-r from-gradientfrom to-gradientto">
//       <div className="bg-white w-[708px]">
//         {accordianData[0]?.serviceTwo.map((item) => {
//           const isExpanded = expandedItemId === item.id;

//           return (
//             <div
//               key={item.id}
//               className="min-h-[92px] p-5 border-b-[1px] border-plus cursor-pointer"
//               onClick={() => clickHandle(item.id)}
//             >
//               <div className="flex justify-between">
//                 <div className="w-1/12">
//                   <div className="flex justify-center items-center rounded-full text-[19px] w-[36px] h-[36px] bg-black text-plus">
//                     {isExpanded ? <FaMinus /> : <FaPlus />}
//                   </div>
//                 </div>
//                 <div className="w-11/12 flex flex-col">
//                   <h1 className="text-[20px] text-plus capitalize">{item.title}</h1>
//                   {/* Display content only for the expanded item */}
//                   <div
//                   className={`transition-max-height duration-300 overflow-hidden ${
//                     isExpanded ? "max-h-[500px]" : "max-h-0"
//                   }`}
//                   >
//                     <p className="text-[15px] px- font-heebo pt-5 text-justify leading-7 text-gray-500">
//                       {item.content}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AccordianSection;
