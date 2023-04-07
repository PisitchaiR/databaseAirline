import SearchPannel from "@/components/booking/SearchPannel";
import BackButton from "@/components/user/BackButton";
import Ticket from "@/components/booking/Ticket";
import AppLayout from "@/components/AppLayout";
import Navbar from "@/components/user/Navbar";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

const Search = ({ userId }: { userId: string }) => {
  const [searchData, SetSearchData] = useState<any>([]);
  const [searchFlightData, SetSearchFlightData] = useState<any>([]);

  useEffect(() => {
    getDataSearch();
  }, []);

  const getDataSearch = async () => {
    if (typeof window !== "undefined") {
      const getSearchData = await JSON.parse(
        localStorage.getItem("searchFlight") || "{}"
      );
      SetSearchData(getSearchData);
      searchFlight(getSearchData);
    }
  };

  const searchFlight = async (getSearchData: any) => {
    if (getSearchData) {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/flight/search/`,
          {
            departAirportId: getSearchData?.departAirport?.id,
            arriveAirportId: getSearchData?.arriveAirport?.id,
            departDate: new Date(
              getSearchData?.departDate?.startDate || null
            ).toISOString(),
          }
        );
        SetSearchFlightData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AppLayout title="หน้าแรก">
      <div className="w-full h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow p-5 flex flex-col">
          <BackButton
            redirect="/"
            text={`เลือกเที่ยวบิน : ${
              searchData?.type == "from" ? "ขาไป" : "ขากลับ"
            }`}
          />
          <div className="my-5">
            <SearchPannel data={searchData} />
          </div>
          <div className="flex-grow w-full mt-5 flex flex-col gap-y-5">
            {searchFlightData ? (
              searchFlightData?.map((data: any, index: number) => {
                return <Ticket key={index} data={data} />;
              })
            ) : (
              <>
                <p>ตอนนี้ยังไม่มีเที่ยวบินที่คุณต้องการ</p>
              </>
            )}
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
      props: { userId },
    };
  }
};

export default Search;
