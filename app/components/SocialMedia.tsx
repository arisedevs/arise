import Icon from "./Icon";
import hrefIconObj from "../constants/socialMedia";

function SocialMedia() {

    return (
        <div className="flex items-center space-x-4">

            {
                Object.entries(hrefIconObj).map(([href, icon]) => (
                    <Icon key={href} href={href} iconType={icon} />
                ))
            }
        </div>
    );
}

export default SocialMedia;
