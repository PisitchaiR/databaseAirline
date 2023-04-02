import AppLayout from "@/components/AppLayout";
import axios from "axios";
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
type Props = {
  userId: string;
};
const CreateFlight = ({ userId }: Props) => {
  const router = useRouter();
  const [airlineState, setAirlineState] = useState<any>({
    nameTh: "",
    nameEn: "",
    phone: "",
  });

  const createAirline = async () => {
    try {
      if (!airlineState.nameTh || !airlineState.nameEn || !airlineState.phone) {
        toast.error("กรุณากรอกข้อมูลให้ครบ", {
          autoClose: 3000,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/airlines`,
        {
          nameTh: airlineState.nameTh,
          nameEn: airlineState.nameEn,
          phone: airlineState.phone,
          ownerId: userId,
        }
      );
      setCookie("airlineId", res.data.id);
      router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppLayout title="สร้างสายการบิน">
      <ToastContainer />
      <div className="w-full h-screen bg-bg-secondary flex items-center justify-center">
        <div className="w-3/5 h-fit bg-white rounded-md flex flex-col items-center justify-between p-5 gap-y-10">
          <p className="text-3xl font-semibold">สร้างสายการบินของคุณ</p>
          <div className="w-3/4 flex flex-col gap-y-2">
            <input
              type="text"
              className="w-full bg-bg-secondary text-white rounded py-2 placeholder-white px-2 focus:outline-none"
              value={airlineState.nameTh}
              onChange={(e) => {
                setAirlineState({
                  ...airlineState,
                  nameTh: e.target.value,
                });
              }}
              placeholder="ชื่อภาษาไทย"
            />
            <input
              type="text"
              className="w-full bg-bg-secondary text-white rounded py-2 placeholder-white px-2 focus:outline-none"
              value={airlineState.nameEn}
              onChange={(e) => {
                setAirlineState({
                  ...airlineState,
                  nameEn: e.target.value,
                });
              }}
              placeholder="ชื่อภาษาอังกฤษ"
            />
            <input
              type="text"
              className="w-full bg-bg-secondary text-white rounded py-2 placeholder-white px-2 focus:outline-none"
              value={airlineState.phone}
              onChange={(e) => {
                setAirlineState({
                  ...airlineState,
                  phone: e.target.value,
                });
              }}
              placeholder="เบอร์โทรศัพท์"
            />
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={createAirline}
              className="bg-primary rounded text-white w-1/5 text-center py-1"
            >
              สร้าง
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
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
        userId,
      },
    };
  }
};

export default CreateFlight;
