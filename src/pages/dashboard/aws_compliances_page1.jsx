import React, { Fragment, useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionBodyProps
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import {
  CloudArrowUpIcon,
  ArrowLongRightIcon,
  ArrowPathIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

export function AWSPage1(){
  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });

  const alerts = ["blue", "green", "orange", "red"];
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


  
  return (
    <Fragment>
      <h1 className="text-2xl font-bold leading-7 text-gray-800 sm:truncate sm:text-3xl sm:tracking-tight" >Amazon Web Services :  Benchmark Control System</h1>
      


    </Fragment>
  );
}

// export function AWSPage() {
//   const [showAlerts, setShowAlerts] = React.useState({
//     blue: true,
//     green: true,
//     orange: true,
//     red: true,
//   });
//   const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
//     blue: true,
//     green: true,
//     orange: true,
//     red: true,
//   });
//   const alerts = ["blue", "green", "orange", "red"];

//   return (
//     <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
//       <Card>
//         <CardHeader
//           color="transparent"
//           floated={false}
//           shadow={false}
//           className="m-0 p-4"
//         >
//           <Typography variant="h5" color="blue-gray">
//             Alerts
//           </Typography>
//         </CardHeader>
//         <CardBody className="flex flex-col gap-4 p-4">
//           {alerts.map((color) => (
//             <Alert
//               key={color}
//               show={showAlerts[color]}
//               color={color}
//               dismissible={{
//                 onClose: () =>
//                   setShowAlerts((current) => ({ ...current, [color]: false })),
//               }}
//             >
//               A simple {color} alert with an <a href="#">example link</a>. Give
//               it a click if you like.
//             </Alert>
//           ))}
//         </CardBody>
//       </Card>
//       <Card>
//         <CardHeader
//           color="transparent"
//           floated={false}
//           shadow={false}
//           className="m-0 p-4"
//         >
//           <Typography variant="h5" color="blue-gray">
//             Alerts with Icon
//           </Typography>
//         </CardHeader>
//         <CardBody className="flex flex-col gap-4 p-4">
//           {alerts.map((color) => (
//             <Alert
//               key={color}
//               show={showAlertsWithIcon[color]}
//               color={color}
//               icon={
//                 <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
//               }
//               dismissible={{
//                 onClose: () =>
//                   setShowAlertsWithIcon((current) => ({
//                     ...current,
//                     [color]: false,
//                   })),
//               }}
//             >
//               A simple {color} alert with an <a href="#">example link</a>. Give
//               it a click if you like.
//             </Alert>
//           ))}
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

export default AWSPage1;
