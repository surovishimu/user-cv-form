import ProfileDescription from "../ProfileDescription";
import ProfileImage from "../ProfileImage";

const LeftForm = () => {
    return (
        <div className="w-1/4 bg-customRed">
            <ProfileImage></ProfileImage>
            <ProfileDescription></ProfileDescription>
        </div>
    );
};

export default LeftForm;