import Link from "next/link";
import IconGithub from "../icons/Icon-github";
import IconLinkedin from "../icons/Icon-linkedin";
import IconTwitter from "../icons/Icon-twitter";

function MainFooter() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto flex justify-between">
                <div>
                    <h2 className="text-lg font-semibold uppercase">
                        <Link href={"/"}>
                            Steven's Blog
                        </Link>
                    </h2>
                </div>
                <div className="flex space-x-6">
                    <Link
                        target={"_blank"}
                        href="https://github.com/CinCommon" className="text-gray-400 hover:text-gray-100 transition">
                        <IconGithub/>
                    </Link>
                    <Link
                        target={"_blank"} href="https://www.linkedin.com/in/steven-yin/"
                        className="text-gray-400 hover:text-gray-100 transition">
                        <IconLinkedin/>
                    </Link>

                    <Link
                        target={"_blank"} href="https://twitter.com/CommonCin"
                        className="text-gray-400 hover:text-gray-100 transition">
                        <IconTwitter/>
                    </Link>
                </div>
            </div>
            {/*Twitter*/}
            {/*Linkedin*/}
            {/*Github*/}
            {/*Blog*/}
        </footer>
    );
}

export default MainFooter;
