import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";
import SideBar from "./SideBar";

const Navbar = ({ white }: { white?: boolean }) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const router = useRouter();

  const handlerLogout = async () => {
    deleteCookie("userId");
    router.push("/login");
  };

  return (
    <div className={`w-full py-2 px-5 flex justify-between items-center ${white? "text-white" : "text-primary"}`}>
      <SideBar open={showSideBar} setOpen={setShowSideBar} />
      <button
        className="space-y-1 w-5 material-icons-outlined text-3xl"
        onClick={() => {
          setShowSideBar(true);
        }}
      >
        reorder
      </button>
      <button
        onClick={() => {
          handlerLogout();
        }}
        className="material-icons-outlined text-3xl"
      >
        logout
      </button>
    </div>
  );
};

export default Navbar;
