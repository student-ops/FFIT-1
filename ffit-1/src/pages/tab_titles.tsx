import { Margarine } from "next/font/google";

const TabTitles: React.FC<String> = ({title}) => {
  return (
    <>
      <div className="title-div">{title}</div>
      <hr />
    </>
  );
};

export {TabTitles};