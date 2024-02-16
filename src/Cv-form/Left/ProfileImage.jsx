import { HiUser } from "react-icons/hi2";
import { HiOutlinePlus } from "react-icons/hi2";


const ProfileImage = () => {


    return (

        <div className="w-[129px] h-[128px] bg-white rounded-full relative mx-auto my-16">
            <label htmlFor="file-upload">
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                />
                <div className="w-[129px] h-[128px] bg-white rounded-full flex items-center justify-center relative">
                    <HiUser className="w-24 h-24 mx-auto text-[#a3a3a3] mt-[43px]" />
                    <div className="bg-[#F1F1F1] rounded-full absolute right-1 top-24">
                        <HiOutlinePlus className="m-2 text-[#525252] text-2xl " />
                    </div>
                </div>
            </label>
        </div>
    );
};

export default ProfileImage;
