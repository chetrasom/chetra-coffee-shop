import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
    name: string;
    labelText?: string;
    defaultValue?: string;
};

const TextAreaInput = ({ name, labelText, defaultValue }: TextAreaInputProps) => {
    return (
        <div className='grid w-full gap-2.5'>
            <Label htmlFor={name} className='capitalize'>
                {labelText || name}
            </Label>
            <Textarea
                id={name}
                name={name}
                defaultValue={defaultValue}
                rows={5}
                required
                className='leading-loose dark:border-muted-foreground bg-white text-neutral-800 min-h-[150px] w-full'
            />
        </div>
    )
}
export default TextAreaInput