"use client";
import { NavbarLandingSection } from "@/features/navbar/navbarLanding";
import { NavbarUserSection } from "@/features/navbar/navbarUser";
import { useEffect, useState } from "react";

export function NavbarSection() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("is_logged_in");
    if (userLoggedIn === "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);


  return <>{isLogin ? <NavbarUserSection /> : <NavbarLandingSection />}</>;
}
