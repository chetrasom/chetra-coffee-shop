import BorderGradient from "../BorderGradient";

type SectionTitleProps = {
  subTitle?: string;
  title: string;
  description?: string;
  border?: boolean;
};

const SectionTitle = ({ subTitle, title, description, border }: SectionTitleProps) => {
    return (
        <div className="text-center mx-auto max-w-2xl py-10">
            {subTitle && <span className="uppercase text-sm text-muted-foreground">{subTitle}</span>}
            <h2 className="h2 mt-2 mb-4 text-primary" aria-label={title}>
                {title}
            </h2>
            {description && (
                <p className="font-display text-lg mx-auto max-w-xl text-gray-700 dark:text-gray-300 px-5">
                    {description}
                </p>
            )}
            {border && (
                <div className="max-w-sm mx-auto mt-4">
                    <BorderGradient />
                </div>
            )}
        </div>
  );
};

export default SectionTitle;