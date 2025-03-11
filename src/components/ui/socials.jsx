import {InstagramOutlined, LinkedinOutlined, MediumOutlined, TwitterOutlined} from "@ant-design/icons";
import React from "react";


const Socials = () => {
  return (
    <div className="items-center flex space-x-4 pt-4">
      <p
        className={"flex items-center justify-center p-2 rounded-full shadow-md bg-blue-400 border border-neutral-600"}>
        <LinkedinOutlined/></p>
      <p
        className={"flex items-center justify-center p-2 rounded-full shadow-md bg-blue-400 border border-neutral-600"}>
        <TwitterOutlined/></p>
      <p
        className={"flex items-center justify-center p-2 rounded-full shadow-md bg-blue-400 border border-neutral-600"}>
        <MediumOutlined/></p>
      <p
        className={"flex items-center justify-center p-2 rounded-full shadow-md bg-blue-400 border border-neutral-600"}>
        <InstagramOutlined/></p>
    </div>
  )
}
export default Socials;