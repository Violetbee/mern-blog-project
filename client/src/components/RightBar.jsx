import SharePostButton from './SharePostButton';

function RightBar() {
  return (
    <div className='sticky z-0 top-16 md:w-[20%] lg:w-3/12 hidden md:block'>
      <div className='w-full flex flex-col gap-2'>
        <SharePostButton />
        <div className='bg-white border-[1px] h-32 w-full rounded-md'></div>
      </div>
    </div>
  );
}
export default RightBar;
