import { IconType } from "react-icons";

type WebStacksProps = {
    iconComponent?: IconType,
    stack: string,
    padding: string,
    textColor?: "text-ivory" | "text-baseFont",
    fontSize?: string,
}

function WebStacks(props: WebStacksProps) {
    const { iconComponent: Icon, stack, padding, textColor, fontSize} = props;

    const containerClassName = `inline-flex items-center space-x-2 rounded-2xl border border-secondary bg-main mr-3 mb-3`;
    const textClassName = `${fontSize || "text-sm"} ${textColor || 'text-ivory'}`;
    const paddingXY = `${padding}`;

    return (
        <li className={`${containerClassName} ${paddingXY}`}>
            {Icon && <Icon fill="#FFFFF0" />}
            <p className={textClassName}>{stack}</p>
        </li>
    )
}

export default WebStacks
