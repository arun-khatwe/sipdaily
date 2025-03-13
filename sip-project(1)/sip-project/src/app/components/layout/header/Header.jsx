"use client"
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return(
  <> 
  <header>{isMobile ? <MobileHeader /> : <DesktopHeader />}</header>
  </>
  )}

export default Header;
