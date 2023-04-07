import { useRouter } from "next/router";

type Props = {
  text?: string;
  redirect: string;
  white?: boolean;
};

const BackButton = ({ text, redirect, white }: Props) => {
  const router = useRouter();
  return (
    <div
      className={`w-full py-2 flex items-center gap-x-2 text-xl ${
        white ? "text-white" : "text-primary"
      }`}
    >
      <button
        onClick={() => {
          router.push(redirect);
        }}
        className="material-icons-outlined"
      >
        arrow_back
      </button>
      <p>{text}</p>
    </div>
  );
};

export default BackButton;
