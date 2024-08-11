
import { Card, Transactions, Chart, Rightbar } from '@/containers/dashboard/';

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];


const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-3 flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
