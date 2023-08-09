import { Link } from "react-router-dom";
import cardImg from "../../assets/Card.png";
import dashboardImg from "../../assets/Diamond.png";
import msgImg from "../../assets/Message.png";
import settingImg from "../../assets/setting.png";

const Navbar = () => {
  return (
    <div className='py-20'>
      <div className='navbar bg-base-100 py-10 px-4 rounded-[30px] !bg-[#231b49b3] text-white '>
        <div className='navbar-start'>
          <div className='dropdown '>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-[#231b49b3] text-white '>
              <li>
                <Link
                  to='dashboard'
                  className='flex justify-start items-center mx-5'>
                  <img src={dashboardImg} alt='' />
                  <span className='font-normal text-lg pl-1'> Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to='credit-card'
                  className='flex justify-start items-center mx-5'>
                  <img src={cardImg} alt='' />
                  Credit Cards
                </Link>
              </li>

              <li>
                <Link to='support' className='flex items-center mx-5'>
                  <img src={msgImg} alt='' className='w-[35px] h-[35px]' />
                  <span className='font-normal text-lg xl:text-lg pl-1 lg:text-base'>
                    {" "}
                    Support{" "}
                  </span>
                </Link>
              </li>

              <li>
                <Link to='settings' className='flex items-center mx-5'>
                  <img src={settingImg} alt='' className='w-[35px] h-[35px]' />
                  <span className='font-normal text-lg xl:text-lg pl-1 lg:text-base'>
                    {" "}
                    Settings{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* nav left */}
          <div className='lg:flex lg:items-center  hidden'>
            <Link to='dashboard' className='flex items-center mx-5 '>
              <img src={dashboardImg} alt='' className='w-[35px] h-[35px]  ' />
              <span className='font-normal text-lg xl:text-lg pl-1 lg:text-base '>
                {" "}
                Dashboard
              </span>
            </Link>
            <Link to='credit-card' className='flex items-center mx-5'>
              <img src={cardImg} alt='' className='w-[35px] h-[35px]  ' />
              <span className='font-normal text-lg xl:text-lg pl-1 lg:text-base'>
                Credit Cards{" "}
              </span>
            </Link>
          </div>
        </div>
        {/* Nav Center */}
        <div className='navbar-center justify-end lg:flex lg:justify-center !sm:hidden'>
          <h1 className='xl:text-4xl font-bold lg:text-3xl md:text-2xl sm:text-xl'>
            MysticCC
          </h1>
        </div>

        {/* Nav Right */}
        <div className='navbar-end '>
          <div className='border border-white p-1'>
            <h4></h4>
            <Link
              to='balance'
              className='font-normal xl:text-lg pl-1 lg:text-base md:text-base sm:text-sm'>
              Balance: $0.00
            </Link>
          </div>

          <div className='lg:flex lg:items-center hidden'>
            <Link to='support' className='flex items-center mx-5'>
              <img src={msgImg} alt='' className='w-[35px] h-[35px]' />
              <span className='font-normal text-lg xl:text-lg pl-1 lg:text-base'>
                {" "}
                Support{" "}
              </span>
            </Link>
            <Link to='settings' className='flex items-center mx-5'>
              <img src={settingImg} alt='' className='w-[35px] h-[35px]' />
              <span className='font-normal text-lg xl:text-lg pl-1 lg:text-base'>
                {" "}
                Settings{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
