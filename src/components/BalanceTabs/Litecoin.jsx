import QRCode from "react-qr-code";
const Litecoin = () => {
  return (
    <div>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: "150px",
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value="bc1qfwr5xmulxpzdthwtdt0jd2jzvl9uqgtx0hfrkf"
          viewBox={`0 0 256 256`}
        />
      </div>

      <div className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 mt-5 gap-x-4 space-y-3 md:space-y-0 lg:space-y-0">
        <div className="col-span-12 md:col-span-8 lg:col-span-8 bg-[#A667E4] px-5 py-1 ">
          <p className="text-[0.9375rem]">Address</p>
          <span className="text-[12px] md:text-[0.9375rem] lg:text-[0.9375rem]">
            LiDJBEfvu2TYCi3ATR73rcJdMx8ru1Ad9b
          </span>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4 bg-[#A667E4] px-5">
          <p className="text-[0.9375rem]">Coin</p>
          <span className="text-[0.9375rem]">LTC</span>
        </div>
      </div>

      <div className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 mt-5 gap-x-4">
        <hr className="col-span-12 mb-4" />
        <div className="col-span-12 bg-[#9630C7] px-5 py-1 text-center">
          <span className="text-[0.9375rem]">
            Your deposit will automatically get credited to your balance once
            transaction is confirmed.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Litecoin;
