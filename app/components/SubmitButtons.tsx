"use client"

import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { useFormStatus } from "react-dom";

interface buttonProps {
    text: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
}

const SubmitButton = ({text, variant}: buttonProps) => {
    const {pending} = useFormStatus();
  
    return (
        <>
            {pending ? (
                <Button disabled variant={variant}>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait...
                </Button>
            ) : (
                <Button variant={variant} type="submit">{text}</Button>
            )}
        </>
    );
}

const ShoppingBagButton = () => {
    const { pending } = useFormStatus();
  
    return (
      <>
        {pending ? (
          <Button disabled size="lg" className="w-full mt-5">
            <Loader2 className="mr-4 h-5 w-5 animate-spin" /> Please Wait
          </Button>
        ) : (
          <Button size="lg" className="w-full mt-5" type="submit">
            <ShoppingBag className="mr-4 h-5 w-5" /> Add to Cart
          </Button>
        )}
      </>
    );
  }

  const DeleteItemButton = () => {
    const {pending} = useFormStatus();

    return(
      <>
        {pending ? (
          <button disabled className="font-medium text-primary text-end">
            Removing...
          </button>
        ) : (
          <button type="submit" className="font-medium text-primary text-end">
            Delete
          </button>
        )}
      </>
    )
  }

const CheckoutButton = () => {
  const {pending} = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size="lg" className="w-full mt-5">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Please Wait
      </Button>
      ) : (
        <Button type="submit" size="lg" className="w-full mt-5">
          Checkout
        </Button>
      )}
    </>
  );
}

export {SubmitButton, ShoppingBagButton, DeleteItemButton, CheckoutButton};