const User = ({ img, name, hobbies }) => {
  console.log(name);
  return (
    <section>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <h3>{hobbies}</h3>
    </section>
  );
};

export default User;
