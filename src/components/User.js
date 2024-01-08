const User = (props) => {
  console.log(props.name);
  return (
    <section>
      <img src={props.img} alt={props.name} />
      <h1>{props.name}</h1>
      <h3>{props.hobbies}</h3>
      <p>{props.userData.location}</p>
    </section>
  );
};

export default User;
