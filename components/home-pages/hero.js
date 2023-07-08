import classes from './hero.module.css'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>Image</div>
            <h1>Hi, I'm Steven</h1>
            <p>
                I Blog about DevOps and Languages Knowledge.
            </p>
        </section>
    )
}

export default Hero;