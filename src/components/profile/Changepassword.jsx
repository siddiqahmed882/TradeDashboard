import React from "react";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import ChangePasswordInput from "./ChangePasswordInput";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform dark:text-white text-black`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const ChangePassword = ({userInfo}) => {

    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    <p className="sm:text-[20px] font-bold text-black dark:text-white">
                        Change Password
                    </p>
                </AccordionHeader>
                <AccordionBody className="px-1">
                    <ChangePasswordInput userInfo={userInfo}/>
                </AccordionBody>
            </Accordion>
        </>
    );
};

export default ChangePassword;

