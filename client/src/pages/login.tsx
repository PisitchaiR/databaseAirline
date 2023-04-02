import AppLayout from "@/components/AppLayout";
import Input from "@/components/Input";
import Image from "next/image";
import { useState } from "react";
import { Login, Register } from "../types";
import axios from "axios";
import { setCookie, getCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
const Auth = () => {
  const router = useRouter();
  const [state, setState] = useState<boolean>(true);

  const [loginState, setLoginState] = useState<Login>({
    email: "",
    password: "",
  });

  const [registerState, setRegisterState] = useState<Register>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handlerChangeState(state: string): void {
    if (state == "login") {
      setState(true);
    } else {
      setState(false);
    }
  }

  const handlerSubmitLogin = async (): Promise<void> => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`,
        loginState
      );
      setCookie("userId", res.data.id);
      setCookie("role", res.data.role);
      if (res.data.role == "personnel") {
        router.push("/admin");
      } else {
        router.push("/");
      }
      setLoginState({
        email: "",
        password: "",
      });
    } catch (error: any) {
      let text = "";
      if (error.response?.data?.message == "Password doesn't match") {
        text = "รหัสผ่านผิด";
      }
      toast.error(text, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error?.response?.data?.message);
    }
  };

  const handlerSubmitSignup = async (): Promise<void> => {
    try {
      if (registerState.password != registerState.confirmPassword) {
        throw new Error("รหัสผ่านไม่ตรงกัน");
      }
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/register`,
        registerState
      );
      setState(true);
      toast.success("ลงทะเบียนสำเร็จ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setRegisterState({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      let text = "";
      if (error.message == "รหัสผ่านไม่ตรงกัน") {
        text = "รหัสผ่านไม่ตรงกัน";
      }
      if (error.response?.data?.message == "Email already exists") {
        text = "อีเมลนี้มีผู้ใช้งานแล้ว";
      }
      toast.error(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <AppLayout title="ลงทะเบียน">
      <ToastContainer />
      <div className="w-full h-screen flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 h-1/3 flex justify-center">
          <Image
            className="w-1/2 md:w-full"
            src="/logo.svg"
            alt="Picture of the author"
            width={700}
            height={475}
            sizes="100vw"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-2/3 md:w-3/4 lg:w-3/5 flex justify-between p-5 px-6 mt-3">
            <button
              className={`border-b-2 text-2xl transition-duration-300 ${
                state == true
                  ? "border-primary text-primary"
                  : "border-gray-300 text-gray-300"
              }`}
              onClick={() => handlerChangeState("login")}
            >
              Login
            </button>
            <button
              className={`border-b-2 text-2xl transition-duration-300 ${
                state == false
                  ? "border-primary text-primary"
                  : "border-gray-300 text-gray-300"
              }`}
              onClick={() => handlerChangeState("signup")}
            >
              Sign up
            </button>
          </div>
          <div className="w-10/12 md:w-3/4 lg:w-3/5">
            {state == true ? (
              // login state
              <div className="w-full flex flex-col gap-y-5 mt-5 items-center">
                <Input
                  label={"อีเมล"}
                  type={"text"}
                  name={"email"}
                  value={loginState.email}
                  onChange={(event) => {
                    setLoginState({
                      ...loginState,
                      email: event.target.value,
                    });
                  }}
                />
                <Input
                  label={"รหัสผ่าน"}
                  type={"password"}
                  name={"password"}
                  value={loginState.password}
                  onChange={(event) => {
                    setLoginState({
                      ...loginState,
                      password: event.target.value,
                    });
                  }}
                />
                <button
                  onClick={() => handlerSubmitLogin()}
                  className="rounded-full w-3/4 md:w-1/2 border py-2 bg-primary text-white mt-3"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            ) : (
              // register state
              <div className="w-full flex flex-col gap-y-5 mt-5 items-center">
                <Input
                  label={"อีเมล"}
                  type={"text"}
                  name={"email"}
                  value={registerState.email}
                  onChange={(event) => {
                    setRegisterState({
                      ...registerState,
                      email: event.target.value,
                    });
                  }}
                />
                <Input
                  label={"รหัสผ่าน"}
                  type={"password"}
                  name={"password"}
                  value={registerState.password}
                  onChange={(event) => {
                    setRegisterState({
                      ...registerState,
                      password: event.target.value,
                    });
                  }}
                />
                <Input
                  label={"รหัสผ่าน"}
                  type={"password"}
                  name={"confirmPassword"}
                  value={registerState.confirmPassword}
                  onChange={(event) => {
                    setRegisterState({
                      ...registerState,
                      confirmPassword: event.target.value,
                    });
                  }}
                />
                <button
                  onClick={() => handlerSubmitSignup()}
                  className="rounded-full w-3/4 md:w-1/2 border py-2 bg-primary text-white mt-3"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
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
  if (userId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Auth;
