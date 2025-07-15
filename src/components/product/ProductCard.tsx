import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useActions, useAtomx } from "atomix-react";
import type { Actions, InitalState, Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
    const { addtoCart, removefromCart }: Actions = useActions()
    const cartItems = useAtomx((s: InitalState) => s.cartItems)
    const idadedtocart = cartItems.some((cartitem) => cartitem.id == product.id)
    return (
        <Card className="w-full max-w-sm shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader className="p-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-t-lg object-cover w-full h-48"
                />
            </CardHeader>
            <CardContent className="space-y-3 p-4">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="outline">${product.price}</Badge>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                    {product.description}
                </CardDescription>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">In Stock: {product.quantity}</span>
                    {
                        idadedtocart ? <Button variant="destructive" onClick={() => removefromCart(product.id)} >
                            remove from Cart
                        </Button> : <Button variant="default" size="sm" onClick={() => addtoCart(product)} > Add to Cart</Button>
                    }
                </div>
            </CardContent>
        </Card>
    );
}
