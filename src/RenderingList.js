const RenderingList = ({ props }) => {
  return (
    <div>
      {props.map((list, index) => (
        <div key={index}>
          <p>{list.car}</p>
          <p>{list.shoe}</p>
        </div>
      ))}

      <p></p>
      <p></p>
    </div>
  );
};

export default RenderingList;
