import { useOutletContext } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";


const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className="font-bold text-xl"
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const RechartsPi = () => {
    const myData = useOutletContext();
    const LsData = JSON.parse(localStorage.getItem("ids"));
    const filterid = myData.filter((data) => LsData?.includes(data.id));
    const totalDonateArr = myData.length
    const LstotalDonateArr = filterid.length
    const totalDonation = totalDonateArr - LstotalDonateArr
    const data = [
  { name: "Total Donation",value: totalDonation },
  { name: "Your Donation",value: LstotalDonateArr }
    ];
    console.log(data);
    return (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
};

export default RechartsPi;