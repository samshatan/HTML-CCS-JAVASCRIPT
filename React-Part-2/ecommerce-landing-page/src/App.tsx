import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <div className="text-2xl font-bold underline">
        <h1>Hello</h1>
      </div>
      <div className="flex justify-center">
        <Button> Subscribe</Button>
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App
