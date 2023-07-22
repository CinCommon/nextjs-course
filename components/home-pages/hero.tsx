import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-gray-700 bg-subtle-grid-pattern pt-32 pb-16 text-center">
            <div
                className="inline-block mx-auto w-60 h-60 rounded-full overflow-hidden bg-gray-700 shadow-lg transition hover:scale-110">
                <Image width={300} height={300} src="/images/Avatar.jpeg" alt="Steven Avatar" className="w-full h-full object-cover object-top" />
            </div>
            <h1 className="text-4xl mt-4 text-gray-300">Hi, I'm Steven</h1>
            <p className="mt-2 text-lg text-gray-200 max-w-2xl mx-auto">
                I Blog about DevOps and Languages Knowledge.
            </p>
        </section>);
}

export default Hero;
