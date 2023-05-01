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
        <div
          className='relative flex h-[90vh] w-screen overflow-hidden bg-black p-16 text-white'
          style={{
            background: `url('/images/videobg.png')`,
            backgroundSize: 'cover',
          }}
        >
          <div className='self-center'>
            <p className='font-secondary w-1/2 text-xl uppercase'>About</p>
            <p className='font-secondary w-1/2 text-6xl'>
              we’re a collection of creatives designing the internet
            </p>
            <img className='absolute top-20' src='/images/galaxy.png'></img>
            <img
              className='absolute bottom-0 right-20'
              src='/images/spaceman.png'
            ></img>
          </div>
        </div>
      </div>
      {/* WORK */}
      <div>
        <div className='relative flex h-[75vh] w-screen overflow-hidden bg-black p-16 text-white'>
          <div className='w-full self-center'>
            <p className='font-secondary text-center text-xl uppercase'>Work</p>
            <p className='font-secondary text-center text-6xl'>
              some of our favorites
            </p>
            <img src='/images/work.jpg' />
          </div>
        </div>
      </div>
      {/* CONTACT */}
      <div>
        <div className='h-[25vh] w-screen bg-black text-white'>
          <h1 className='text-3xl'>Contact</h1>
        </div>
      </div>
    </>
  );
}
