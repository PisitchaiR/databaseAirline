import AppLayout from "@/components/AppLayout";
import axios from "axios";
import { getCookie } from "cookies-next";
import SideBar from "@/components/admin/SideBar";
import { useEffect, useState } from "react";
import PlaneModal from "@/components/admin/PlaneModal";

const Plane = ({ airlineId }: { airlineId: string }) => {
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const [plane, setPlane] = useState<any>([]);

  useEffect(() => {
    getPlanes();
  }, []);

  const getPlanes = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/plane/${airlineId}`
    );
    setPlane(res.data);
  };

  const handlerDelete = async (planeId: string) => {
    let text = "ลบเครื่องบินใช่ไหม";
    if (confirm(text) == true) {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/plane/${planeId}`
      );
      getPlanes();
    }
  };

  return (
    <>
      <AppLayout title="จัดการ | เครื่องบิน">
        <div className="w-full h-screen flex items-center">
          <PlaneModal
            open={createOpen}
            setOpen={setCreateOpen}
            airlineId={airlineId}
            getPlanes={getPlanes}
          />
          <SideBar />
          <div className="border h-full flex-grow p-5">
            <p className="text-3xl">จัดการเครื่องบิน</p>
            <button
              onClick={() => setCreateOpen(true)}
              className="mt-10 bg-primary text-white px-6 py-2 rounded-md"
            >
              เพิ่มเครื่องบิน
            </button>
            <div className="w-full border-t border-primary mt-10 pt-5">
              {plane.length == 0 ? (
                <p className="text-gray-400 text-xl">
                  เริ่มเพิ่มเครื่องบินของคุณได้เลย
                </p>
              ) : (
                <div className="w-full flex flex-wrap gap-2">
                  {plane.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="border border-primary p-5 rounded-md w-1/3"
                    >
                      <p className="text-xl">เครืองบิน: {item.name}</p>
                      <p className="text-gray-400 text-sm mt-2">
                        จำนวนที่นั่ง: {item.seat}
                      </p>
                      <div className="w-full flex justify-end">
                        <button
                          onClick={() => handlerDelete(item.id)}
                          className="mt-2 hover:text-black/30"
                        >
                          ลบ
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const userId = getCookie("userId", {
    req: context.req,
    res: context.res,
  });
  const role = getCookie("role", {
    req: context.req,
    res: context.res,
  });
  const airlineId = getCookie("airlineId", {
    req: context.req,
    res: context.res,
  });

  if (!userId) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else if (userId && role == "customer") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        airlineId,
        userId,
      },
    };
  }
};

export default Plane;
