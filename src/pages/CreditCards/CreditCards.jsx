import CreditCardHead from "../../components/CreditCardHead/CreditCardHead";
import DataTableComponent from "../../components/DataTable/DataTableComponent";

const CreditCards = () => {
  return (
    <div className=''>
      <CreditCardHead />
      <div className='!pb-[100px]'>
        <DataTableComponent />
      </div>
    </div>
  );
};

export default CreditCards;
