import Image from 'next/image';
import classes from './hero.module.css';

function Hero(){
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src='/images/site/githubPrImg.jpg'
                    alt='Showing PrImage'
                    width={300}
                    height={300}
                />
            </div>
            <h1>HI My name is DongHyunLee aka.Daniele</h1>
            <p>
                I set MyBlog for Studing Frontend frameworks studying
            </p>
        </section>
    )

}

export default Hero;