import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.ServicesComponent}>
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
    </div>
  );
}
