import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.AboutComponent}>
      {/* ABOUT */}
      <div className='relative flex h-[80vh] w-screen overflow-hidden bg-black p-8 text-white'>
        <div className='relative z-10 self-center'>
          <p className='font-secondary py-8 text-xl uppercase '>About Us</p>
          <p className='my-8  w-full text-2xl font-light leading-tight md:w-1/2 md:text-3xl'>
            Whether you need to improve your e-commerce capabilities, build a
            new website, or enhance your brand visibility, we have the expertise
            to help you achieve your goals in the digital space.
            <br />
            <br />
            From fledgling start-ups or industry giants, our clients value our
            professionalism, expertise, and pursuit of excellence.
            <br />
            <br /> Embark on this journey with M7 and witness your vision's
            realization.
          </p>
        </div>
        {/* <video
          className='absolute bottom-0 right-[-250px] top-0 hidden opacity-90  md:block '
          loop={true}
          autoPlay={true}
          muted={true}
          preload='false'
        >
          <source src='/s3.mp4' />
        </video> */}
      </div>
    </div>
  );
}
