function ButtonFilter(props) {
  return (
    <button
      className={` ${props.btnRegion === props.area ? "active" : "transparent"} button`}
      onClick={() => {
        props.setArea(props.btnRegion);
      }}
    >
      {props.name}
    </button>
  );
}

export default ButtonFilter;
