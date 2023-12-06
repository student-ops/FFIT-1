import { TabTitles } from "@/components/Index/TabTitles";
import LoginButton from "@/components/atoms/LoginButton";

const SideBar: React.FC = () => {
  return (
    <>
      <LoginButton />
      <hr />
      <TabTitles title={"some title"} />
    </>
  );
};

export { SideBar };
