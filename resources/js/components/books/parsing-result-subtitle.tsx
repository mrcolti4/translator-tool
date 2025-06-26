import { twMerge } from "tailwind-merge";

export default function ParsingResultSubtitle({ children, className }) {
    const classes = twMerge("text-3xl font-bold", className);
    return (
        <div className={classes}>
            {children}
        </div>
    );
}
