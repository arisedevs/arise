import ParticlesComponent from "./components/ParticlesComponent";
import BackgroundImage from "./components/BackgroundImage";
import { PiArrowRightFill } from "react-icons/pi";
import Link from "next/link";

function PageNotFound() {

    return (
        <section>
            <main className="flex justify-center items-center h-dvh max-w-[1300px] mx-auto flex-col space-y-7">
                <h1 className="text-9xl text-ivory font-medium">Oops!</h1>
                <h2 className="text-2xl">404 - PAGE NOT FOUND</h2>
                <Link href="/" className="px-8 py-2 rounded-full border border-secondary bg-main mr-3 mb-3 text-ivory flex items-center group">GO TO HOME
                <span>
                    <PiArrowRightFill fill="#FFFFF0" className="ml-2 transition-all duration-300 ease-in-out group-hover:translate-x-3"/>
                </span>
                </Link>

            </main>
            <BackgroundImage />
            <ParticlesComponent />
        </section>

    )
}

export default PageNotFound
