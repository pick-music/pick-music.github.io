// import React from "react";
//
// export interface InstructorSectionCardProps {
//   name: string,
//   avatar: string,
//   records: Array<any>
// }
//
// export const InstructorSectionCard: React.FC<InstructorSectionCardProps> = ({instructor}) => {
//   return (
//     <div className="flex flex-col items-center">
//       <img
//         src={instructor.avatar}
//         alt={instructor.name}
//         className="size-20 rounded-full"
//       />
//       <h2>{instructor.name}</h2>
//       <ul>
//         {instructor.records.map((record, index) => (
//           <li key={index}>
//             <p>{record.title}</p>
//             <p>{record.date}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
//
// }