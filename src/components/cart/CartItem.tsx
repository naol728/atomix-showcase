import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useActions } from "atomix-react";
import type { Actions, CartItem } from "@/types";

export default function CartItem({ cartitem }: {
    cartitem: CartItem;
}) {
    const { removefromCart, decCartItems, incCartItems }: Actions = useActions()
    return (
        <Card className="flex items-center gap-4 p-4 mb-4">
            <img
                src={cartitem.image}
                alt={cartitem.name}
                className="w-16 h-16 rounded-md object-cover"
            />
            <div className="flex-1 space-y-1">
                <div className="font-medium text-base">{cartitem.name}</div>
                <div className="text-sm text-muted-foreground">${cartitem.price} each</div>
                <div className="flex items-center gap-2 mt-2">
                    <Button variant="outline" size="icon" onClick={() => decCartItems(cartitem.id)}>
                        <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-sm font-semibold">{cartitem.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => incCartItems(cartitem.id)} >
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-end justify-between h-full gap-2">
                <span className="text-sm font-semibold">${cartitem.price * cartitem.quantity}</span>
                <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => removefromCart(cartitem.id)}>
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        </Card>
    );
}
