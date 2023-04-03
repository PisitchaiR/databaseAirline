import Datepicker from "react-tailwindcss-datepicker";
import AutonInput from "@/components/AutonInput";
import AppLayout from "@/components/AppLayout";
import Navbar from "@/components/user/Navbar";
import Input from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Index = ({ airPort }: { airPort: any }) => {
  const router = useRouter();
  const [inputState, setInputState] = useState<any>({
    departAirport: {},
    arriveAirport: {},
    departDate: "",
    arriveDate: "",
    type: "from",
  });

  const submitSearch = () => {
    if (
      inputState.departAirport &&
      inputState.arriveAirport &&
      inputState.departDate &&
      inputState.arriveDate &&
      inputState.type
    ) {
      localStorage.setItem("searchFlight", JSON.stringify(inputState));
      router.push("/booking/search");
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  };
  return (
    <AppLayout title="หน้าแรก">
      <div className="w-full h-screen flex flex-col bg-bg-secondary">
        <Navbar white />
        <div className="w-full px-5 my-10">
          <div className="relative text-white">
            <div className="absolute top-2 left-2 flex flex-col items-start p-2">
              <p className="text-2xl">ส่วนลดสำหรับผู้ใช้ใหม่</p>
              <p className="w-4/6 text-xs text-left">
                คลิกเพื่อรับส่วนลดพิเศษสำหรับการจองตั๋ว เฉพาะผู้ใช้ใหม่ครั้งแรก
              </p>
              <Link
                href="/coupon"
                className="mt-5 rounded-full w-1/3 py-0.5 bg-black/40 text-sm text-center"
              >
                คลิกเลย
              </Link>
            </div>
            <Image
              className="w-full"
              src="/bg.svg"
              alt="Picture of the author"
              width={700}
              height={475}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="flex-grow p-5 bg-white rounded-t-3xl flex flex-col items-center text-primary">
          <AutonInput
            data={airPort}
            setInputState={setInputState}
            inputState={inputState}
            name="departAirport"
          />
          <div className="material-icons-outlined rotate-90 p-1 my-2 rounded-full bg-primary text-white">
            sync_alt
          </div>
          <AutonInput
            data={airPort}
            setInputState={setInputState}
            inputState={inputState}
            name="arriveAirport"
          />
          <div className="w-full flex items-center gap-x-5 mt-5 justify-start">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                id="from"
                checked
                onChange={() => {
                  setInputState({ ...inputState, type: "from" });
                }}
                className="w-5 h-5 appearance-none rounded-full border border-primary checked:opacity-100 checked:ring-2 checked:ring-offset-2 checked:ring-primary checked:outline-none cursor-pointer "
              />
              <label htmlFor="from">ขาไป</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                id="to"
                onChange={() => {
                  setInputState({ ...inputState, type: "to" });
                }}
                className="w-5 h-5 appearance-none rounded-full border border-primary checked:opacity-100 checked:ring-2 checked:ring-offset-2 checked:ring-primary checked:outline-none cursor-pointer "
              />
              <label htmlFor="from">ขากลับ</label>
            </div>
          </div>
          <div className="w-full mt-10 flex items-center gap-2">
            <Datepicker
              useRange={false}
              asSingle={true}
              value={inputState.departDate}
              onChange={(value) => {
                setInputState({
                  ...inputState,
                  departDate: value,
                });
              }}
              startFrom={new Date()}
              placeholder={"วันไป"}
              inputClassName="dark:bg-white border border-priamry py-3 w-full dark:text-[#70886B]"
            />
            <Datepicker
              useRange={false}
              asSingle={true}
              value={inputState.arriveDate}
              onChange={(value) => {
                setInputState({
                  ...inputState,
                  arriveDate: value,
                });
              }}
              placeholder={"วันไป"}
              startFrom={new Date()}
              inputClassName="dark:bg-white border border-priamry py-3 dark:text-[#70886B]"
            />
          </div>
          <button
            onClick={() => submitSearch()}
            onDragEnter={() => submitSearch()}
            className="w-full rounded-md bg-primary text-white py-3 mt-20"
          >
            ค้นหา
          </button>
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
  const resAirport = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/airport`
  );
  const airPort = resAirport.data;

  if (!userId) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else if (userId && role == "personnel") {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        airPort,
      },
    };
  }
};

export default Index;
