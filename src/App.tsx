import { AtomixProvider } from "atomix-react";
import { store } from "./atom/store";
import Cart from "./components/page/Cart";
import Navbar from "./components/page/NavBar";
import Product from "./components/page/Product";

function App() {
  return (
    <AtomixProvider store={store} >
      <div className="min-h-screen ">
        <header>
          <Navbar />
        </header>
        <main className="max-w-7xl mx-auto pt-20 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <Product />
            </div>
            <div className="w-full md:w-[30%]">
              <Cart />
            </div>
          </div>
        </main>
      </div>
    </AtomixProvider>
  )
}

export default App