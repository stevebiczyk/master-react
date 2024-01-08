function App() {
  const userInfo = [
    {
      name: "John Doe",
      email: "test1@gmail.com",
      location: "United States",
    },
    {
      name: "Steve Smith",
      email: "test2@gmail.com",
      location: "United Kingdom",
    },
    {
      name: "Jane Doe",
      email: "test3@gmail.com",
      location: "United States",
    },
  ];
  return (
    <>
      {userInfo.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </>
  );
}
export default App;
