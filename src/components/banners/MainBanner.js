import volunteer from '../../images/volunteer.png';

function   MainBanner() {
  return (
      <div className='container w-100 bg-gray-200  text-gray-800  transition ease-in-out text-center'>
          <p className="text-[70px] font-sans-[100px] py-2">Sextant</p>
          <img src={volunteer} alt='Main banner'className='w-[100%] h-[400px] '/>
    </div>
  );
};

export default MainBanner