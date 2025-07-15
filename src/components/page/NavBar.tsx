import { Button } from "@/components/ui/button";
import { useAtomx } from "atomix-react";
import { ShoppingCart } from "lucide-react";
import type { InitalState } from "../../types";

export default function Navbar() {
    const cartItems = useAtomx((s: InitalState) => s.cartItems)
    return (
        <header className="fixed top-0 left-0 w-full bg-accent  shadow-sm z-50">
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                <div className="text-xl font-bold tracking-tight">🛍️ AtomixShop</div>
                <div className="flex items-center gap-4">
                    <Button variant="link">
                        <a href="https://codesandbox.io/p/devbox/github/naol728/atomix-showcase">Open In CodeSandBox</a>
                    </Button>

                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {cartItems.length}
                        </span>
                    </Button>
                </div>
            </div>
        </header >
    );
}
