const NewInfo = () => {
  return (
    <div className='!pb-[100px]'>
      <h2 className='text-white font-bold text-[1.875rem] mb-4'>News & INFO</h2>
      <div className='card bg-[#231b49b3] text-white shadow-xl rounded-none'>
        <div className='card-body space-y-16'>
          {/* Info */}
          <div>
            <div className=''>
              <h2 className='text-white font-bold text-[1.875rem] border-b-2 px-4'>
                INFO
              </h2>
            </div>

            <div className='mt-4 text-xl font-bold space-y-2'>
              <h3 className='px-4'>How to purchase BTC</h3>
              <div className='ml-10 space-y-2'>
                <p>
                  <span>1.</span> Coinbase.com allows you to purchase
                </p>
                <p>
                  <span>2.</span> You can puchase of an exchange or directly
                  from me @ponzBTC on telegram{" "}
                </p>
              </div>
            </div>
          </div>

          {/* News */}
          <div>
            <div className=''>
              <h2 className='text-white font-bold text-[1.875rem] border-b-2 px-4'>
                News
              </h2>
            </div>

            <div className='mt-4 text-xl font-bold space-y-2 px-8'>
              <h3 className=''>Latest News:</h3>
              <div className='space-y-2'>
                <p>- VISA, Mastercard reduced!</p>
                <p>- New back-end work so you can apply as a seller!</p>
              </div>

              <div className='space-y-2 !mt-6'>
                <p>Official Store Domains: mysticcc.store</p>
                <p>Official Telegram group: t.me/mmysticcc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInfo;
