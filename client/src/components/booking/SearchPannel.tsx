type Props = {
  data: any;
};
const Search = ({ data }: Props) => {
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
    <>
      <div className="w-full flex flex-col justify-center gap-y-2">
        <div className="flex items-center gap-x-2">
          <div className="border rounded-md flex-grow text-center py-2 text-sm">
            {data?.departAirport?.nameTh}
          </div>
          <div className="material-icons-outlined text-sm w-5 h-5 flex items-center justify-center p-1 my-2 rounded-full bg-primary text-white">
            sync_alt
          </div>
          <div className="border rounded-md flex-grow text-center py-2 text-sm">
            {data?.arriveAirport?.nameTh}
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="border rounded-md flex-grow text-center py-2">
            {convertDate(data?.departDate?.startDate)}
          </div>
          <div className="border rounded-md flex-grow text-center py-2">
            {convertDate(data?.arriveDate?.startDate)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
