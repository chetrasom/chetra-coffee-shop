'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import SelectProductAmount from '../single-products/SelectProductAmount';
import { Mode } from '../single-products/SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { removeCartItemAction, updateCartItemAction } from '@/utils/actions';
import { Button } from '../ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useToast } from '../ui/use-toast';
import { BsTrash } from 'react-icons/bs';
import { SubmitButtonIcon } from '../form/Buttons';

type CartColumnAmountProp = {
    quantity: number; 
    id: string
};

const CartColumnAmount = ({ quantity, id }: CartColumnAmountProp) => {
    const [amount, setAmount] = useState(quantity);

    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleAmountChange = async (value: number) => {
        setIsLoading(true);
        toast({ description: 'Calculating...' });

        const result = await updateCartItemAction({
            amount: value,
            cartItemId: id,
        });

        setAmount(value);
        toast({ description: result.message });
        setIsLoading(false);
    };

    return (
        <div className="flex items-center gap-x-2">
            <SelectProductAmount
                amount={amount}
                setAmount={handleAmountChange}
                mode={Mode.CartItem}
                isLoading={isLoading}
            />

            {/* Remove CartItem */}
            <FormContainer action={removeCartItemAction}>
                <input type='hidden' name='id' value={id} />
                <SubmitButtonIcon />
            </FormContainer>
        </div>
    )
}
export default CartColumnAmount