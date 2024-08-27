import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
    const {user} =useContext(AuthContext)
    return <div className="bg-black">
        {user.displayName}
        <h1 className="text-center"> kdsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjja;l</h1>
    </div>;
};
export default Profile;