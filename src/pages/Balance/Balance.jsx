import BalanceTabs from "../../components/BalanceTabs/BalanceTabs";

const Balance = () => {
  return (
    <div>
      <div className='!bg-[#2E245E] w-11/12 h-[526px] mx-auto my-[10px]'>
        {/* card header */}
        <div className='!pt-[23px] !pb-[17px] '>
          <h1 className='xl:text-2xl lg:text-xl md:text-lg sm:text-base font-normal text-white text-center  '>
            Current Balance: $0.00
          </h1>
        </div>

        <hr
          className='h-[2px] w-11/12 mx-auto border-0 '
          style={{ color: "#8b86a5", backgroundColor: "#8b86a5" }}
        />
        <BalanceTabs />
      </div>
    </div>
  );
};

export default Balance;
