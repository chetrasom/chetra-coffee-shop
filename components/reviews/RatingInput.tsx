import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type RatingInputProp = {
    name: string;
    labelText?: string;
}

const RatingInput = ({ name, labelText }: RatingInputProp) => {
    const numbers = Array.from({ length: 5 }, (_, i) => {
        const value = i + 1;
        return value.toString();
    }).reverse();

    return (
        <div className="grid w-full gap-2.5">
            <Label htmlFor={name} className="capitalize">{labelText || name}</Label>
            <Select defaultValue={numbers[0]} name={name} required>
                <SelectTrigger className="w-full md:w-[250px] bg-white text-neutral-800 dark:border-muted-foreground">
                    <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent>
                {numbers.map((number) => {
                    return (
                        <SelectItem key={number} value={number}>
                            {number}
                        </SelectItem>
                    );
                })}
                </SelectContent>
            </Select>
        </div>
    )
}
export default RatingInput