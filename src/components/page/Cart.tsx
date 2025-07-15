import CartItem from "../cart/CartItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAtomx } from "atomix-react";
import type { InitalState } from "../../types";

export default function Cart() {
    const cartItems = useAtomx((s: InitalState) => s.cartItems);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <Card className="p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-4">🛒 Your Cart</h2>
            <ScrollArea className="h-[400px] pr-2">
                {cartItems.length > 0 ? (
                    cartItems.map((cartitem) => (
                        <CartItem key={cartitem.id} cartitem={cartitem} />
                    ))
                ) : (
                    <p className="text-muted-foreground text-sm">Your cart is empty.</p>
                )}
            </ScrollArea>
            <div className="border-t pt-4 mt-4 flex justify-between items-center">
                <span className="text-base font-semibold">Total:</span>
                <span className="text-base font-bold">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full mt-4" disabled={cartItems.length == 0}>Checkout</Button>
        </Card>
    );
}
