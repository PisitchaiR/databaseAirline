import AppLayout from "@/components/AppLayout";
import Navbar from "@/components/user/Navbar";
import BackButton from "@/components/user/BackButton";
import CouponCard from "@/components/user/CouponCard";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import SearchPannel from "@/components/booking/SearchPannel";
import Input from "@/components/Input";
import AutonInput from "@/components/AutonInput";
import Ticket from "@/components/booking/Ticket";
import { useRouter } from "next/router";

type Props = {
  coupon: any;
  userId: string;
};

const Booking = ({ coupon, userId }: Props) => {
  const [searchData, SetSearchData] = useState<any>([]);
  const [searchFlightData, SetSearchFlightData] = useState<any>([]);
  const [reservation, setReservation] = useState<any>({
    seat: "",
    firstName: "",
    lastName: "",
    phone: "",
    coupon: null,
  });

  const router = useRouter();

  useEffect(() => {
    getDataSearch();
  }, []);

  const handlerReservation = async () => {
    if (!reservation.seat) {
      alert("กรุณากรอกจำนวนที่นั่ง");
      return;
    }
    if (!reservation.firstName) {
      alert("กรุณากรอกชื่อจริง");
      return;
    }
    if (!reservation.lastName) {
      alert("กรุณากรอกนามสกุล");
      return;
    }
    if (!reservation.phone) {
      alert("กรุณากรอกเบอร์โทรศัพท์");
      return;
    }
    const coupon = JSON.parse(reservation.coupon);
    try {
      const data = {
        flightId: searchFlightData?.id,
        userId: userId,
        seat: parseInt(reservation.seat),
        totalPrice:
          parseFloat(searchFlightData?.price) *
          parseInt(reservation.seat) *
          ((100 - parseInt(coupon?.discount)) / 100 || 1),
        firstName: reservation.firstName,
        lastName: reservation.lastName,
        phone: reservation.phone,
        couponId: reservation.coupon?.id,
        collectCouponId: reservation.coupon?.collectCouponId,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/reservation/`,
        data
      );
      localStorage.setItem("reservation", JSON.stringify(res.data));
      router.push("/booking/confirm");
      setReservation({
        seat: "",
        firstName: "",
        lastName: "",
        phone: "",
        coupon: null,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getDataSearch = async () => {
    if (typeof window !== "undefined") {
      const getSearchData = await JSON.parse(
        localStorage.getItem("searchFlight") || "{}"
      );
      const getDepartFlight = await JSON.parse(
        localStorage.getItem("departFlight") || "{}"
      );
      SetSearchFlightData(getDepartFlight);
      SetSearchData(getSearchData);
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
          <div className="">
            <Ticket data={searchFlightData} />
          </div>
          <div className="flex-grow w-full mt-5 flex flex-col gap-y-5">
            <Input
              label={"ชื่อจริง"}
              type={"text"}
              name={"firstName"}
              value={reservation.firstName}
              onChange={(event) => {
                setReservation({
                  ...reservation,
                  firstName: event.target.value,
                });
              }}
            />
            <Input
              label={"นามสกุล"}
              type={"text"}
              name={"lastName"}
              value={reservation.lastName}
              onChange={(event) => {
                setReservation({
                  ...reservation,
                  lastName: event.target.value,
                });
              }}
            />
            <Input
              label={"เบอร์โทรศัพท์"}
              type={"phone"}
              name={"phone"}
              value={reservation.phone}
              onChange={(event) => {
                setReservation({
                  ...reservation,
                  phone: event.target.value,
                });
              }}
            />
            <Input
              label={"ที่นั่ง"}
              type={"number"}
              name={"seat"}
              value={reservation.seat}
              onChange={(event) => {
                setReservation({
                  ...reservation,
                  seat: event.target.value,
                });
              }}
            />
            <select
              defaultValue={reservation.selectedOption}
              onChange={(event) => {
                setReservation({
                  ...reservation,
                  coupon: event.target.value,
                });
              }}
              className="w-full px-2 py-2 rounded-md border border-primary outline-primary bg-white"
            >
              <option selected={true} disabled={true}>
                เลือกคูปอง
              </option>
              {coupon.map((item: any, index: number) => {
                return (
                  <option
                    key={index}
                    value={JSON.stringify({
                      id: item.id,
                      collectCouponId: item.collectCouponId,
                      discount: item.discount,
                    })}
                  >
                    {item.name} - {item.discount}%
                  </option>
                );
              })}
            </select>
            <button
              onClick={() => handlerReservation()}
              className="w-full rounded-md bg-primary text-white py-3 mt-10"
            >
              จอง
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

  const resCoupon = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/coupon/${userId}`
  );
  const coupon = resCoupon.data;
  if (!userId) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: { coupon, userId },
    };
  }
};

export default Booking;
