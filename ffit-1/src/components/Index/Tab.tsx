import { TabTitles } from "@/components/Index/TabTitles";

const Tab: React.FC = () => {
  return (
    <center>
      <div style={{ padding: 1 + "em" }}>
        <button>ログアウト</button>
      </div>
      <hr />
      <TabTitles title={"some title"} />
    </center>
  );
};

export { Tab };
