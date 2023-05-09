import Image from 'next/image';

import styles from './HomeSection.module.css';

import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Button from '@/components/Button/Button';
import Viewer from '@/components/Viewer/Viewer';

export interface HomeSectionProps {}

export default function HomeSection(props: HomeSectionProps) {
  return (
    <>
      {/* HOME */}
      <div>
        <div
          className={
            styles.bg +
            ' relative flex h-[65vh] w-screen overflow-hidden bg-black text-white'
          }
        >
          <AnimatedText position='top'></AnimatedText>
          <Viewer></Viewer>
          <Image
            className='absolute bottom-20 right-5 z-10 invert md:filter-none'
            src='/images/logo.svg'
            width={120}
            height={120}
            alt=''
          />
          <AnimatedText position='bottom'></AnimatedText>
        </div>
      </div>
      {/* ABOUT */}
      <div>
        <div className='relative flex h-[65vh] w-screen overflow-hidden bg-black p-16 text-white'>
          <div className='relative z-10 self-center'>
            <p className='font-secondary w-1/2 text-xl uppercase'>About</p>
            <p className='font-secondary my-8 text-5xl leading-tight md:w-1/2 md:text-6xl'>
              we’re a collection of creatives designing the internet
            </p>
          </div>
          <video
            className='absolute bottom-0 left-0 right-[-250px] top-0  opacity-60 '
            loop={true}
            autoPlay={true}
            muted={true}
          >
            <source src='/substance.mov' />
          </video>
        </div>
      </div>
      {/* WORK */}
      {/* <div>
        <div className='relative flex h-[60vh] w-screen overflow-hidden bg-blue-500 p-16 text-white'>
          <div className='w-full self-center'>
            <p className='font-secondary mt-32 text-center text-xl uppercase'>
              Work
            </p>
            <p className='font-secondary my-8  text-center text-6xl'>
              some of our favorites
            </p>
            <Image
              className='mx-auto'
              width={900}
              height={100}
              src='/images/work.jpg'
              alt=''
            />
          </div>
        </div>
      </div> */}
      {/* CONTACT */}
      <div>
        <div className='bg-tennis flex h-[25vh]  w-screen  p-16 text-black'>
          <Button>Contact</Button>
        </div>
      </div>
    </>
  );
}
