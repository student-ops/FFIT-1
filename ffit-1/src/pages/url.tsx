const Url: React.FC = () => {
  return (
    <>
      <div style={{display: "flex"}}>
        <input type="text" placeholder="URL" style={{width: "calc(100% - 53px - 1em)"}} />
        <button style={{marginLeft: "1em", marginRight: "0"}}>生成</button>
      </div>
    </>
  );
};

export {Url};