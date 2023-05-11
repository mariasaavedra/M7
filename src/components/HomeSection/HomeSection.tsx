import Image from 'next/image';
import Link from 'next/link';

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
            ' relative  flex h-[65vh] w-screen overflow-hidden bg-black text-white'
          }
        >
          <AnimatedText position='top'></AnimatedText>
          <Viewer></Viewer>
          <div className='absolute bottom-20 left-5  z-10  mx-auto  h-fit w-fit self-center'></div>
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
        <div className='relative flex h-[80vh] w-screen overflow-hidden bg-black p-8 text-white'>
          <div className='relative z-10 self-center'>
            <p className='font-secondary py-8 text-xl uppercase '>About Us</p>
            <p className='my-8  w-full text-2xl font-light leading-tight md:w-1/2 md:text-3xl'>
              Whether you need to improve your e-commerce capabilities, build a
              new website, or enhance your brand visibility, we have the
              expertise to help you achieve your goals in the digital space.
              <br />
              <br />
              From fledgling start-ups or industry giants, our clients value our
              professionalism, expertise, and pursuit of excellence.
              <br />
              <br /> Embark on this journey with M7 and witness your vision's
              realization.
            </p>
          </div>
          <video
            className='absolute bottom-0  right-[-250px] top-0  opacity-90 '
            loop={true}
            autoPlay={true}
            muted={true}
          >
            <source src='/substance.mov' />
          </video>
        </div>
      </div>
      {/* SERVICES */}
      <div>
        <p className='font-secondary bg-black px-8 py-8 text-xl uppercase text-white'>
          Services
        </p>
        <div className='font-secondary flex flex-col bg-black  text-3xl font-thin uppercase leading-loose tracking-widest text-white md:flex-row '>
          <div className='m-4 rounded-lg  p-4  '>
            <ul>
              <li className='border-b-2'>E-commerce</li>
              <li className='border-b-2'>Web Development</li>
              <li className='border-b-2'>Custom Software</li>
              <li className='border-b-2'>SEO + CRO</li>
            </ul>
          </div>
          <div className='m-4 rounded-lg  p-4  '>
            <ul>
              <li className='border-b-2'>Business Strategy</li>
              <li className='border-b-2'>Content Creation</li>
              <li className='border-b-2'>Branding</li>
              <li className='border-b-2'>Marketing</li>
            </ul>
          </div>
        </div>
      </div>
      {/* WORK */}
      <div className='mx-auto bg-black px-4 py-16 text-center'>
        <p className='font-secondary  my-8 bg-black  px-4 text-xl uppercase text-white'>
          RECENT WORK
        </p>
        <div className='mx-auto flex justify-center text-center'>
          <Button>
            <Link
              href='https://www.figma.com/proto/3l1CWDVlEHYvyfXbULUVdn/Projects-(Community)?page-id=0%3A1&type=design&node-id=2-4&viewport=300%2C1010%2C0.19&scaling=scale-down'
              target='_blank'
            >
              VIEW WORK
            </Link>
          </Button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className='bg-black p-8 text-xl text-white'>
        <p className='my-4 uppercase tracking-widest'>
          email: info@m7studio.com
        </p>
        <p className='my-4 uppercase tracking-widest'>phone: 8168103333</p>
        <p className='my-4 uppercase tracking-widest underline'>
          Schedule a call
        </p>
        {/* CONTACT */}
        <section className='bg-black py-8'>
          <Button>
            <Link
              href='https://mariasaavedra.typeform.com/to/IkPubgrS'
              target='_blank'
            >
              CONTACT
            </Link>
          </Button>
        </section>
      </footer>
    </>
  );
}
