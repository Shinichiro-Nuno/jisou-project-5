import { Button } from "@chakra-ui/react";

function App() {
  console.log(process.env.VITE_SECRET_KEY);
  return (
    <>
      <p>Vite:{process.env.VITE_SECRET_KEY}</p>
      <Button>Click</Button>
    </>
  );
}

export default App;
