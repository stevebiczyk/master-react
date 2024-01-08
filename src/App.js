import User from "./components/User";

function App() {
  return (
    <>
      <User
        img="https://avatars.githubusercontent.com/u/105976995?s=400&u=aa5237d4dee2de7b7ab122a8b82da50043ebc9bb&v=4"
        name="Istvan Biczyk"
        age="45"
        hobbies={["coding", "reading", "gaming"]}
        userData={{
          name: "Istvan Biczyk",
          age: 45,
          location: "United Kingdom",
        }}
      />
    </>
  );
}
export default App;
