'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage =  () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=> router.push("/sign-in"), 2000);
    }, []);
  return <div>You have logged out... redirecting in a sec.</div>;
};

export default LogoutPage;