import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Heading from '@/components/Heading/Heading';

export interface HomeSectionProps {}

export default function HomeSection(props: HomeSectionProps) {
  return (
    <>
      {/* HOME */}
      <div>
        <div
          className='relative flex h-[75vh] w-screen overflow-hidden bg-black text-white'
          style={{
            background: `url('/images/bg.png')`,
            backgroundSize: 'cover',
          }}
        >
          <AnimatedText position='top'></AnimatedText>
          <Heading>Home</Heading>
          <img
            className='mx-auto h-2/3 self-center'
            src='/images/head.png'
          ></img>
          <AnimatedText position='bottom'></AnimatedText>
        </div>
      </div>
      {/* ABOUT */}
      <div>
        <div className='relative flex h-[90vh] w-screen overflow-hidden bg-black p-16 text-white'>
          <div className='relative z-10 self-center'>
            <p className='font-secondary w-1/2 text-xl uppercase'>About</p>
            <p className='font-secondary my-8 w-1/2 text-6xl leading-tight'>
              we’re a collection of creatives designing the internet
            </p>
          </div>
          <img
            className='absolute bottom-20 left-[10%] z-10 w-1/3'
            src='/images/galaxy.png'
          ></img>
          <img
            className='absolute bottom-0 right-20 z-10'
            src='/images/spaceman.png'
          ></img>
          <video
            className='absolute right-[-250px]'
            loop={true}
            autoPlay={true}
            muted={true}
          >
            <source src='/substance.mov' />
          </video>
        </div>
      </div>
      {/* WORK */}
      <div>
        <div className='relative flex h-[75vh] w-screen overflow-hidden bg-black p-16 text-white'>
          <div className='w-full self-center'>
            <p className='font-secondary text-center text-xl uppercase'>Work</p>
            <p className='font-secondary my-8  text-center text-6xl'>
              some of our favorites
            </p>
            <img src='/images/work.jpg' />
          </div>
        </div>
      </div>
      {/* CONTACT */}
      <div>
        <div className='bg-tennis flex h-[25vh]  w-screen  p-16 text-black'>
          <h1 className='relative w-full justify-between border-2 border-black p-8 text-6xl font-thin uppercase'>
            <span className='inline-flex'>Contact</span>
            <img
              className=' absolute right-10 inline-flex'
              src='/images/new-tab.png'
            />
          </h1>
        </div>
      </div>
    </>
  );
}
