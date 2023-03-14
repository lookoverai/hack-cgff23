import React, {useState, Fragment} from "react";
import {
  Alert,
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
  BellAlertIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  HandThumbUpIcon,
  IdentificationIcon
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";

import axios from "axios";

export function AWSPage1({data, loadedFromCache}){
  // let [fromCache, setFromCache] = useState(false);
  // let [data, setdata] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

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

 
  let groupData,statusData;
  if(data){
    groupData = data.groups[0]
    statusData = groupData.summary.status
    console.log(groupData)
  }
  
  
  return (
    <Fragment>
      <div>
            <div className="m-4"/>
            {
              loadedFromCache ? (
                <Alert
                show={showAlerts["blue"]}
                color={"blue"}
                dismissible={{
                  onClose: () =>
                    setShowAlerts((current) => ({ ...current, ["blue"]: false })),
                }}
              >
                The Benchmark Records has been Cached from the Previous Data. Use Refesh Button to Retrive Real-Time Performace Data.
              </Alert>
              ) : (
                <Alert
              show={showAlerts["blue"]}
              color={"blue"}
              dismissible={{
                onClose: () =>
                  setShowAlerts((current) => ({ ...current, ["blue"]: false })),
              }}
            >
              The Benchmark Records has been Fetched from the Live Server Data. The Data will be Cached from futher use.

            </Alert>
              )
            }
            
            <div className="m-4"/>
          <h1 className="text-2xl font-bold leading-7 text-gray-800 sm:truncate sm:text-3xl sm:tracking-tight" >{data.title}</h1>

          <div className="mt-12">
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-5">
                <StatisticsCard
                  title={"Alarm"}
                  color={"bg-orange-500"}
                  value={statusData.alarm}
                  icon={<BellAlertIcon strokeWidth={3} className="h-6 w-6 text-black" />}
                />

                <StatisticsCard
                  title={"Error"}
                  color={"bg-red-400"}
                  value={statusData.error}
                  icon={<ExclamationTriangleIcon strokeWidth={3} className="h-6 w-6 text-black" />}
                />

                <StatisticsCard
                  title={"Info"}
                  color={"bg-blue-500"}
                  value={statusData.info}
                  icon={<InformationCircleIcon strokeWidth={3} className="h-6 w-6 text-black" />}
                />

                <StatisticsCard
                  title={"Ok"}
                  color={"bg-green-500"}
                  value={statusData.ok}
                  icon={<HandThumbUpIcon strokeWidth={3} className="h-6 w-6 text-black" />}
                />

                <StatisticsCard
                  title={"Skip"}
                  color={"bg-yellow-600"}
                  value={statusData.skip}
                  icon={<IdentificationIcon strokeWidth={3} className="h-6 w-6 text-black" />}
                />
            </div>
            {/* <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
              {statisticsChartsData.map((props) => (
                <StatisticsChart
                  key={props.title}
                  {...props}
                  footer={
                    <Typography
                      variant="small"
                      className="flex items-center font-normal text-blue-gray-600"
                    >
                      <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                      &nbsp;{props.footer}
                    </Typography>
                  }
                />
              ))}
            </div> */}
            <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-2">
              <Card className="overflow-hidden xl:col-span-2">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 flex items-center justify-between p-6"
                >
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      Groups
                    </Typography>
                  </div>
                  <Menu placement="left-start">
                    <MenuHandler>
                      <IconButton size="sm" variant="text" color="blue-gray">
                        <EllipsisVerticalIcon
                          strokeWidth={3}
                          fill="currenColor"
                          className="h-6 w-6"
                        />
                      </IconButton>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>Action</MenuItem>
                      <MenuItem>Another Action</MenuItem>
                      <MenuItem>Something else here</MenuItem>
                    </MenuList>
                  </Menu>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                  <table className="w-full min-w-[640px] table-auto">
                    <thead>
                      <tr>
                        {["Title", "Description", "Tags", "Group Id"].map(
                          (el) => (
                            <th
                              key={el}
                              className="border-b border-blue-gray-50 py-3 px-6 text-left"
                            >
                              <Typography
                                variant="small"
                                className="text-[11px] font-medium uppercase text-blue-gray-400"
                              >
                                {el}
                              </Typography>
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {groupData.groups.map(
                        (x, key) => {
                          const className = `py-3 px-5 ${
                            key === projectsTableData.length - 1
                              ? ""
                              : "border-b border-blue-gray-50"
                          }`;

                          return (
                            <tr key={x.group_id}>
                              <td className={className}>
                                <div className="flex items-center gap-4">
                                  {/* <Avatar src={img} alt={name} size="sm" /> */}
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-bold"
                                  >
                                    {x.title}
                                  </Typography>
                                </div>
                              </td>
                              <td className={className}>
                                <Popover>
                                  <PopoverHandler>
                                    <Button size="sm" variant="gradient">Details</Button>
                                  </PopoverHandler>
                                  <PopoverContent>
                                    {x.description}
                                  </PopoverContent>
                                </Popover>
                              </td>
                              <td className={className}>
                              <Button size="sm" onClick={handleOpen} variant="gradient">
                                Check
                              </Button>
                              <Dialog open={open} handler={handleOpen}>
                                <DialogHeader>Tags Details</DialogHeader>
                                <DialogBody divider>
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
                                  reprehenderit omnis perspiciatis aut odit! Unde architecto
                                  perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
                                  praesentium magni corrupti explicabo!
                                </DialogBody>
                                <DialogFooter>
                                  <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-1"
                                  >
                                    <span>Cancel</span>
                                  </Button>
                                  <Button variant="gradient" color="green" onClick={handleOpen}>
                                    <span>Confirm</span>
                                  </Button>
                                </DialogFooter>
                              </Dialog>
                              </td>
                              <td className={className}>
                                <div className="w-10/12">
                                  <Typography
                                    variant="small"
                                    className="mb-1 block text-xs font-medium text-blue-gray-600"
                                  >
                                    {x.group_id}
                                  </Typography>
                                  {/* <Progress
                                    value={completion}
                                    variant="gradient"
                                    color={completion === 100 ? "green" : "blue"}
                                    className="h-1"
                                  /> */}
                                </div>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
              {/* <Card>
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 p-6"
                >
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Orders Overview
                  </Typography>
                  <Typography
                    variant="small"
                    className="flex items-center gap-1 font-normal text-blue-gray-600"
                  >
                    <ArrowUpIcon
                      strokeWidth={3}
                      className="h-3.5 w-3.5 text-green-500"
                    />
                    <strong>24%</strong> this month
                  </Typography>
                </CardHeader>
                <CardBody className="pt-0">
                  {ordersOverviewData.map(
                    ({ icon, color, title, description }, key) => (
                      <div key={title} className="flex items-start gap-4 py-3">
                        <div
                          className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                            key === ordersOverviewData.length - 1
                              ? "after:h-0"
                              : "after:h-4/6"
                          }`}
                        >
                          {React.createElement(icon, {
                            className: `!w-5 !h-5 ${color}`,
                          })}
                        </div>
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="block font-medium"
                          >
                            {title}
                          </Typography>
                          <Typography
                            as="span"
                            variant="small"
                            className="text-xs font-medium text-blue-gray-500"
                          >
                            {description}
                          </Typography>
                        </div>
                      </div>
                    )
                  )}
                </CardBody>
              </Card> */}
            </div>
          </div>
        </div>
      
    </Fragment>
  );
}


export default AWSPage1;
