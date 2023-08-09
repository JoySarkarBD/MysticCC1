import DashboardCard from "../../components/DashboardCard/DashboardCard";
import NewInfo from "../../components/NewInfo/NewInfo";

const Dashboard = () => {
  return (
    <div className='space-y-12'>
      <DashboardCard />
      <NewInfo />
    </div>
  );
};

export default Dashboard;
