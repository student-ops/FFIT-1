import { TabTitles } from "./tab_titles"

const Tab: React.FC = (titles) => {
  const titleList = [];
  for(let i=0; i<titles.titles.length; i++) {
    const title = titles.titles[i];
    titleList.push(<TabTitles title={title} key={i} />)
  }
  return (
    <center>
      <div style={{padding: 1 + "em"}}>
        <button>ログアウト</button>
      </div>
      <hr />
      {titleList}
    </center>
  );
};

export {Tab};