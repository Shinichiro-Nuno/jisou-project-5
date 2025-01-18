function App() {
  console.log(process.env.VITE_SECRET_KEY);
  return (
    <>
      <p>Vite:{process.env.VITE_SECRET_KEY}</p>
    </>
  );
}

export default App;
