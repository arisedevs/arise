"use client"
import React from "react";

type NavigationLinkProps = React.ComponentPropsWithoutRef<"a"> & {
    isActive: boolean,
    linkName: React.ReactNode
}

function NavigationLink(props: NavigationLinkProps) {

    const { isActive, linkName, href } = props;
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent the default action of following the link

        const target = e.currentTarget.getAttribute('href');

        if (target !== null) {

            const element = document.querySelector(target);
            const offset = 90;

            if (element !== null) {
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="flex">
            <a href={href} onClick={handleClick} className="inline-flex items-center space-x-3 cursor-pointer group">
                <hr className={`w-10 transition-all duration-300 ease-in-out group-hover:w-20 group-hover:border-ivory ${isActive && "w-20 text-ivory"}`} />
                <h1 className={`transition-all duration-300 ease-in-out group-hover:text-ivory ${isActive && "text-ivory"}`}>
                    {linkName}
                </h1>
            </a>
        </div>
    );
}

export default NavigationLink;
