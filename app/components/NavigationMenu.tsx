"use client"
import { useEffect, useState } from "react";
import NavigationLink from "./NavigationLink";
import { sectionHeader } from "../constants/mainContent";

function NavigationMenu() {

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".section");
            let currentSection = "about"; // Default section if no section is found

            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;

                if (sectionTop <= 100) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        // Call handleScroll on component mount to set the initial active section
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav id="nav-bar" className="space-y-3 mb-16">

            {Object.values(sectionHeader).map(header => (
                <NavigationLink key={header} href={"#" + header.toLowerCase()} linkName={header.toUpperCase()} isActive={activeSection === header.toLowerCase()} />
            ))}

        </nav>
    );
}

export default NavigationMenu;