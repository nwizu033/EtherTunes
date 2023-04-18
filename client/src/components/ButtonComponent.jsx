import React from "react";

const ButtonComponent = ({ type, children }) => {
	return <button className=" shrink-0 rounded-lg bg-green-700 hover:bg-green-800 p-2 " type={type}>{children}</button>;
};

export default ButtonComponent;
