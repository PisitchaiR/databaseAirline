import AppLayout from "@/components/AppLayout";
import Navbar from "@/components/user/Navbar";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BackButton from "@/components/user/BackButton";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Link from "next/link";

const Result = () => {
  const router = useRouter();
  const [searchData, SetSearchData] = useState<any>([]);
  const [searchFlightData, SetSearchFlightData] = useState<any>({});
  const [reservation, setReservation] = useState<any>({});

  useEffect(() => {
    getDataSearch();
  }, []);

  const getDataSearch = async () => {
    if (typeof window !== "undefined") {
      const getSearchData = await JSON.parse(
        localStorage.getItem("searchFlight") || "{}"
      );
      const getDepartFlight = await JSON.parse(
        localStorage.getItem("departFlight") || "{}"
      );
      const getReservation = await JSON.parse(
        localStorage.getItem("reservation") || "{}"
      );
      console.table(getDepartFlight);
      console.table(getReservation);
      console.table(getSearchData);
      setReservation(getReservation);
      SetSearchFlightData(getDepartFlight);
      SetSearchData(getSearchData);
    }
  };

  const convertTime = (date: string) => {
    return new Date(date).toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const convertDate = (date: string) => {
    return new Date(date).toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <AppLayout title="หน้าแรก">
      <div className="w-full h-screen flex flex-col bg-bg-secondary">
        <Navbar white />
        <div className="w-full px-5">
          <BackButton redirect="/" text="คูปอง" />
        </div>
        <div className="flex-grow p-5 bg-white rounded-t-3xl flex flex-col items-center text-primary">
          <div className="flex justify-start mt-5 pt-5 w-full">
            <Timeline
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineOppositeContent></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="bg-primary flex items-center rounded-md p-2 w-full justify-between">
                    <div className="flex flex-col gap-y-5">
                      <div className="text-white text-sm">
                        {searchFlightData?.DepartAirport?.nameTh}
                      </div>
                      <div className="text-white text-sm">
                        {convertDate(searchFlightData?.departDate)}
                      </div>
                    </div>
                    <div className="text-white">
                      <p>{convertTime(searchFlightData?.departDate)}</p>
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="bg-primary flex items-center rounded-md p-2 w-full justify-between mt-10">
                    <div className="flex flex-col gap-y-5">
                      <div className="text-white text-sm">
                        {searchFlightData?.ArriveAirport?.nameTh}
                      </div>
                      <div className="text-white text-sm">
                        {convertDate(searchFlightData?.arriveDate)}
                      </div>
                    </div>
                    <div className="text-white">
                      {convertTime(searchFlightData?.arriveDate)}
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
          <div className="w-full flex flex-col items-center p-5 gap-y-5">
            <div className=" border-t border-b w-full py-5">
              <p>ข้อมูลเพิ่มเติม</p>
              <table className="w-full mt-5">
                <tbody>
                  <tr className="w-full flex justify-between">
                    <td className="text-left w-full">ชื่อจริง</td>
                    <td className="text-left w-full">นามสกุล</td>
                  </tr>
                  <tr className="w-full flex justify-between">
                    <td className="text-left w-full text-black">
                      {reservation?.firstName}
                    </td>
                    <td className="text-left w-full text-black">
                      {reservation?.lastName}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="w-full">
                <tbody>
                  <tr className="w-full flex justify-between">
                    <td className="text-left w-full">เบอร์โทรศัพท์</td>
                    <td className="text-left w-full">จำนวนที่นั่ง</td>
                  </tr>
                  <tr className="w-full flex justify-between">
                    <td className="text-left w-full text-black">
                      {reservation?.phone}
                    </td>
                    <td className="text-left w-full text-black">
                      {reservation?.seat}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full py-5 flex flex-col gap-y-2">
              <p className="w-full flex justify-between items-center">
                ราคา:
                <span className="text-primary">
                  {searchFlightData?.price} บาท
                </span>
              </p>
              <p className="w-full flex justify-between items-center">
                จำนวนที่นั่ง:
                <span className="text-primary">
                  {reservation?.seat} ที่นั่ง
                </span>
              </p>
              <p className="w-full flex justify-between items-center text-xl">
                ราคาสุทธิ:
                <span className="text-primary">
                  {reservation?.totalPrice} บาท
                </span>
              </p>
            </div>
            <Link
              href="/"
              className="w-full rounded-md bg-primary text-white py-3 text-center"
            >
              ปิด
            </Link>
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

  if (!userId) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Result;
