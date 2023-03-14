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


import AWSCompilanceComponent from "./aws_compliances_page1";

export function AWSPage(){

  let [ loadedFromCache, setLoadedFromCache ] = React.useState(false);
  let [ data, setData ] = React.useState(null);

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

  let [component, setComponent] = React.useState(false);

  const alerts = ["blue", "green", "orange", "red"];
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


  async function fetchData() {

    if(localStorage.getItem("aws-benchmark-1")){
      const datax = JSON.parse(localStorage.getItem("aws-benchmark-1"));
      console.log("Loaded from Cache...");
      setLoadedFromCache(true)
      setData(datax)
      // return (
      //   <Fragment>
      //      <AWSCompilanceComponent loadedFromCache={true} data={data} />
      //   </Fragment>
      // );
    }else{
      const result = await axios.post(
        "http://ec2-13-233-129-124.ap-south-1.compute.amazonaws.com:5002/aws/benchmark/executequery",{
          "query": "cd compliances/steampipe-mod-aws-compliance && steampipe check aws_compliance.benchmark.audit_manager_control_tower --output json"
        },{
          timeout: 1000 * 120,
        });
      localStorage.setItem("aws-benchmark-1", JSON.stringify(result.data));
      console.log("Loaded from Server")
      setLoadedFromCache(false)
      setData(result.data)

      // return (
      //   <Fragment>
      //     <AWSCompilanceComponent loadedFromCache={false} data={result.data} />
      //   </Fragment>
      // )
    }
  }

  // fetchData();


  const listOfBenchmarks = [
    {
      "id":"",
      "heading": "Benchmark: AWS Audit Manager Control Tower Guardrails",
      "desc": "AWS Control Tower offers a straightforward way to set up and govern an AWS multi-account environment, following prescriptive best practices. AWS Control Tower orchestrates the capabilities of several other AWS services, including AWS Organizations, AWS Service Catalog, and AWS Single Sign-on, to build a landing zone in less than an hour. Resources are set up and managed on your behalf."
    },
    {
      "id":"",
      "heading": "Benchmark: CIS Controls v8 IG1",
      "desc": "The CIS Critical Security Controls® (CIS Controls®) started as a simple grassroots activity to identify the most common and important real-world cyber-attacks that affect enterprises every day, translate that knowledge and experience into positive, constructive action for defenders, and then share that information with a wider audience. The original goals were modest—to help people and enterprises focus their attention and get started on the most important steps to defend themselves from the attacks that really mattered." 
    },
    {
      "id":"",
      "heading":"Benchmark: CIS v1.2.0",
      "desc":"The CIS Amazon Web Services Foundations Benchmark provides prescriptive guidance for configuring security options for a subset of Amazon Web Services with an emphasis on foundational, testable, and architecture agnostic settings.",
    },
    {
      "id":"",
      "heading":"Benchmark: CIS v1.3.0",
      "desc":"The CIS Amazon Web Services Foundations Benchmark provides prescriptive guidance for configuring security options for a subset of Amazon Web Services with an emphasis on foundational, testable, and architecture agnostic settings.",
    },
    {
      "id":"",
      "heading":"Benchmark: CIS v1.4.0",
      "desc":"The CIS Amazon Web Services Foundations Benchmark provides prescriptive guidance for configuring security options for a subset of Amazon Web Services with an emphasis on foundational, testable, and architecture agnostic settings."
    },
    {
      "id":"",
      "heading":"Benchmark: CIS v1.5.0",
      "desc":"The CIS Amazon Web Services Foundations Benchmark provides prescriptive guidance for configuring security options for a subset of Amazon Web Services with an emphasis on foundational, testable, and architecture agnostic settings."
    },
    {
      "id":"",
      "heading":"Benchmark: CISA Cyber Essentials",
      "desc":"Cybersecurity & Infrastructure Security Agency's (CISA) Cyber Essentials is a guide for leaders of small businesses as well as leaders of small and local government agencies to develop an actionable understanding of where to start implementing organizational cybersecurity practices."
    },
    {
      "id":"",
      "heading":"Benchmark: FedRAMP Low Revision 4",
      "desc":"The Federal Risk and Authorization Management Program (FedRAMP) is a US government-wide program that delivers a standard approach to the security assessment, authorization, and continuous monitoring for cloud products and services."
    }
  ]

  if(data){
     return (
        <Fragment>
          <AWSCompilanceComponent loadedFromCache={loadedFromCache} datax={data} />
        </Fragment>
      )
  }
 
  return (
    <Fragment>
      <h1 className="text-2xl font-bold leading-7 text-gray-800 sm:truncate sm:text-3xl sm:tracking-tight" >Amazon Web Services :  Benchmark Control System</h1>
      <div className="m-20"/>
      {
        listOfBenchmarks.map((item, index) => {
          return (
            <Accordion open={open === index+1}>
              <AccordionHeader onClick={() => handleOpen(index+1)}>
              {item.heading}
              </AccordionHeader>
              <AccordionBody >
                <div>
                  <div>
                    <p className="text-gray-800 font-medium">{item.desc}</p>
                  </div>
                  <div className="m-2 flex gap-2">
                    <Button color="red">Delete Reports</Button>
                    <Button onClick={() => fetchData()} color="green" size="md">Start Analytics</Button>
                    <Button variant="outlined" className="flex items-center gap-3">
                    Re-Render Analytics
                    <ArrowPathIcon strokeWidth={2} className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              
              </AccordionBody>
            </Accordion>
          )
        })
      }
      


      {/* <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion> */}


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

export default AWSPage;
