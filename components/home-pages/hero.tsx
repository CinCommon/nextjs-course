import classes from './hero.module.css'
import Image from "next/image";
import PostsMainContainer from "../posts/posts-main-container";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src={"/images/Avatar.jpeg"} alt={"Steven Avatar"} width={300} height={300}/>
            </div>
            <h1>Hi, I'm Steven</h1>
            <p>
                I Blog about DevOps and Languages Knowledge.
            </p>
            <PostsMainContainer />
        </section>
    )
}

export default Hero;