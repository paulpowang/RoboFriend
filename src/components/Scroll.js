const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid white",
        height: "27rem",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
