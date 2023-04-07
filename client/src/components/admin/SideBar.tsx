import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const handlerLogout = () => {
    deleteCookie("userId");
    deleteCookie("role");
    deleteCookie("airlineId");
    router.push("/login");
  };
  return (
    <>
      <div className="h-full w-60 flex flex-col justify-between bg-bg-secondary text-white p-5">
        <div className="flex flex-col gap-y-5 mt-5">
          <Link href="/admin" className="flex items-center gap-x-2">
            <p className="material-icons-outlined">analytics</p>{" "}
            <p className="text-xl">ภาพรวม</p>
          </Link>
          <Link href="/admin/booking" className="flex items-center gap-x-2">
            <p className="material-icons-outlined">reorder</p>{" "}
            <p className="text-xl">รายการจอง</p>
          </Link>
          <Link href="/admin/flight" className="flex items-center gap-x-2">
            <p className="material-icons-outlined rotate-90">sync_alt</p>{" "}
            <p className="text-xl">เที่ยวบิน</p>
          </Link>
          <Link href="/admin/plane" className="flex items-center gap-x-2">
            <p className="material-icons-outlined rotate-45">flight</p>{" "}
            <p className="text-xl">เครื่องบิน</p>
          </Link>
        </div>
        <button
          onClick={() => {
            handlerLogout();
          }}
          className="flex items-center gap-x-2"
        >
          <p className="material-icons-outlined">logout</p>{" "}
          <p className="text-xl">logout</p>
        </button>
      </div>
    </>
  );
};

export default SideBar;
