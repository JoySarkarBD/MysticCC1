import card from "./../../assets/Card.png";
import wallet from "./../../assets/wallet.png";

const DashboardCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 space-y-4 md:space-y-0">
      <div className="card bg-[#231b49b3] text-white shadow-xl">
        <div className="card-body">
          {/* title */}
          <div className="flex items-center gap-x-2">
            <img src={card} alt="" />
            <h2 className="card-title">Total CVVs</h2>
          </div>

          <div className="space-y-2">
            <p className="text-[2.1875rem] font-bold">29</p>
            <hr className="h-[0.0625rem]" />
            <p className="text-xl font-normal">Credit Cards</p>
          </div>
        </div>
      </div>

      {/* Orders Card*/}
      <div className="card bg-[#231b49b3] text-white shadow-xl">
        <div className="card-body">
          {/* title */}
          <div className="flex items-center gap-x-2">
            <img src={card} alt="" />
            <h2 className="card-title">Orders</h2>
          </div>

          <div className="space-y-2">
            <p className="text-[2.1875rem] font-bold">0</p>
            <hr className="h-[0.0625rem]" />
            <p className="text-xl font-normal">Orders</p>
          </div>
        </div>
      </div>

      {/* Ballance Card */}
      <div className="card bg-[#231b49b3] text-white shadow-xl md:!mt-4 lg:!mt-0">
        <div className="card-body">
          {/* title */}
          <div className="flex items-center gap-x-2">
            <img src={wallet} alt="" />
            <h2 className="card-title">Balance</h2>
          </div>

          <div className="space-y-2">
            <p className="text-[2.1875rem] font-bold">
              $0.00{" "}
              <sub className="text-base font-medium">/Current Balance</sub>
            </p>
            <hr className="h-[0.0625rem]" />
            <p className="text-xl font-normal">Balance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
