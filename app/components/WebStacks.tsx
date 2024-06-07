import { IconType } from "react-icons";

type WebStacksProps = {
    iconComponent?: IconType,
    stack: string,
    paddingX?: number,
    paddingY?: number,
    textColor?: "text-ivory" | "text-baseFont",
    fontSize?: "text-sm" | "text-xs",
}

function WebStacks(props: WebStacksProps) {
    const { iconComponent: Icon, stack, paddingX, paddingY, textColor, fontSize} = props;

    const containerClassName = `inline-flex items-center space-x-2 rounded-full border border-secondary bg-main mr-3 mb-3 px-3 py-2`;
    const textClassName = `${fontSize || "text-sm"} ${textColor || 'text-ivory'}`;

    return (
        <li className={`${containerClassName} px-${paddingX || 3} py-${paddingY || 2}`}>
            {Icon && <Icon fill="#FFFFF0" />}
            <p className={textClassName}>{stack}</p>
        </li>
    )
}

export default WebStacks
