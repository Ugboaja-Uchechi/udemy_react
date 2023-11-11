const Profile = ({ name, about, skills }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{about}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} style={{ backgroundColor: getColor(index) }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const getColor = (index) => {
  const colors = ["blue", "red"];
  return colors[index];
  // ChatGpt Solution
  // index % colors.length: The modulo operator calculates
  // the remainder when index is divided by colors.length.
  // This operation ensures that the index stays within the
  // bounds of the array.

  // colors[index % colors.length]: This retrieves the color
  // from the colors array at the calculated index. If the index
  // exceeds the length of the colors array, it wraps around to
  // the beginning of the array, creating a cycling effect.
  
  //return colors[index % colors.length]
};

export default Profile;
