"use client";
import { useRouter } from "next/navigation";

const LearnuseRouter = () => {

    const router = useRouter();
    
    const handleClick = () => {
        router.push("/user/profile/2");
    };
    
    return (
        <div>
        <h1>Learn useRouter</h1>
        <button onClick={handleClick}>Go to User Profile</button>
        </div>
    );
}
    
export default LearnuseRouter;
    
    
    