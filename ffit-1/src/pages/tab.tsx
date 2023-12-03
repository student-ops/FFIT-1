import { TabTitles } from "./tab_titles"

const Tab: React.FC<string> = (title) => {
  return (
    <center>
      <div style={{padding: 1 + "em"}}>
        <button>ログアウト</button>
      </div>
      <hr />
      <TabTitles title="title" />
    </center>
  );
};

export {Tab};