import { useState } from "react";
import BitCoin from "./BitCoin";
import Ethereum from "./Ethereum";
import Litecoin from "./Litecoin";
import Tab from "./Tab";

const BalanceTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = tabIndex => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className='flex flex-col  items-center py-10 px-4'>
        <div className='text-center'>
          <Tab
            title='Bitcoin'
            active={activeTab === 1}
            onClick={() => handleTabClick(1)}
          />
          <Tab
            title='Litecoin'
            active={activeTab === 2}
            onClick={() => handleTabClick(2)}
          />
          <Tab
            title='Ethereum'
            active={activeTab === 3}
            onClick={() => handleTabClick(3)}
          />
        </div>
        <div className='mt-8 text-white w-full'>
          {activeTab === 1 && <BitCoin />}
          {activeTab === 2 && <Litecoin />}
          {activeTab === 3 && <Ethereum />}
        </div>
      </div>
    </>
  );
};

export default BalanceTabs;
