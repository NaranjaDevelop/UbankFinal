import './TypeExpenses.css';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4081', '#795548', '#9E9E9E'];


const TypeExpensesWheel = ({ data }: { data: any }) => {
    console.log(data);
    
    return (
        <div className="monthly-budget">
            <div className="IconImage" style={{ display: "flex", flexDirection: "row" }}>
                <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FExpensesIcon.png?alt=media&token=7d512b2b-ae50-4ad1-a596-c09ff45f8498" alt="Icon" className="Icon1" height={40} />
                <div className="ExpensesText-wheel">
                    <h2>Expenses</h2>
                    <p>your expenses this month</p>
                </div>
            </div>

            <div className="circular-chart">
                <PieChart width={200} height={200}>
                    <Pie
                        data={data}
                        outerRadius={100}
                        innerRadius={60}
                        dataKey="CategoryAmount"
                    >
                        {
                            data.map((entry: any, index: any) => (
                                <Cell fill={COLORS[index % COLORS.length]} key={index} /> // Using index as key is okay for simple lists
                            ))
                            
                        }
                    </Pie>
                </PieChart>
            </div>
        </div>
    );
}

export default TypeExpensesWheel;
