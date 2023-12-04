const TabTitles: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div>{title}</div>
      <hr />
    </>
  );
};

export { TabTitles };
