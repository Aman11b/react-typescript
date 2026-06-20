import Component from "./starter/02-props";
function App() {
  return (
    <main>
      <Component name="Aman" id={123}>
        <h2>Hello child</h2>
      </Component>
      <Component name="Aman" id={123} />
    </main>
  );
}

export default App;
