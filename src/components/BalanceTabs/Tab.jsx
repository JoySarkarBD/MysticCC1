/* eslint-disable react/prop-types */
const Tab = ({ title, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 font-semibold ${
        active ? "border border-white text-white" : "border-0  text-white"
      }`}>
      {title}
    </button>
  );
};

export default Tab;
