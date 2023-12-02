import { Margarine } from "next/font/google";

const TabTitles: React.FC<String> = ({title}) => {
  return (
    <>
      <div>{title}</div>
      <hr />
    </>
  );
};

export {TabTitles};