import { useState } from "react";

const ProfileDescription = () => {
    const [value, setValue] = useState(""); // State to store the input value

    const handleChange = (event) => {
        setValue(event.target.value); // Update the state with the input value
    };

    return (
        <div className="mb-10">
            <h1 className="text-white text-start ml-3 text-xl font-semibold mb-3">Profile</h1>
            <div className="relative">
                <input
                    type="text"
                    placeholder=""
                    className="bg-customRed border border-[#78716c] text-white h-20 w-11/12 mx-auto pl-4 outline-none text-left"
                    value={value}
                    onChange={handleChange}
                    style={{ textIndent: "0" }} // Set text-indent to 0
                />
                {/* Render placeholder text only if input value is empty */}
                {value === "" && (
                    <div className="absolute bottom-0 left-0 text-gray-400 pl-4 pb-2"><small>Profile Description</small></div>
                )}
            </div>
        </div>
    );
};

export default ProfileDescription;
