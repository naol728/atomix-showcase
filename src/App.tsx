import { AtomixProvider } from "atomix-react";
import Todo from "./Todo"
import { todoAtom } from "./atom/todo";

function App() {
  return (
    <AtomixProvider store={todoAtom} >
      <Todo />
    </AtomixProvider>
  )
}

export default App