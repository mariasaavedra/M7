export interface HomeSectionProps {}

export default function HomeSection(props: HomeSectionProps) {
  return (
    <>
      {/* HOME */}
      <div>
        <div className='h-[75vh] w-screen bg-black text-white'>
          <h1 className='text-3xl'>Home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            consectetur corrupti voluptate hic natus voluptatibus aliquam
            similique neque eos impedit itaque nostrum sed nam officiis autem
            distinctio, libero molestias veritatis.
          </p>
        </div>
      </div>
      {/* ABOUT */}
      <div>
        <div className='h-[75vh] w-screen bg-black text-white'>
          <h1 className='text-3xl'>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            consectetur corrupti voluptate hic natus voluptatibus aliquam
            similique neque eos impedit itaque nostrum sed nam officiis autem
            distinctio, libero molestias veritatis.
          </p>
        </div>
      </div>
      {/* WORK */}
      <div>
        <div className='h-[75vh] w-screen bg-black text-white'>
          <h1 className='text-3xl'>Work</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            consectetur corrupti voluptate hic natus voluptatibus aliquam
            similique neque eos impedit itaque nostrum sed nam officiis autem
            distinctio, libero molestias veritatis.
          </p>
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
