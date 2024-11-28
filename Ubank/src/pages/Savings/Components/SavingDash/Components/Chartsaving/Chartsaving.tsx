

import { PieChart, Pie, Cell } from 'recharts'



const Savingsgraph = () => {


    return (
        <div className="savings-goals1">

            <div className="IconImage" style={{ display: "flex", flexDirection: "row", marginLeft:"-50px", marginTop: "10px"}} >
                <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FExpensesIcon.png?alt=media&token=7d512b2b-ae50-4ad1-a596-c09ff45f8498" alt="Icon" className="Icon1" height={29} /> 
                <h2>goals</h2> 
                
            </div>
                
            <div className="circular-chart1">
                <PieChart width={200} height={200}>
                    <Pie
                        data={[{ name: 'Expenses', value: 100 }, { name: 'Minor Expenses', value: 100 }]}
                        outerRadius={100}
                        innerRadius={80}
                        paddingAngle={0}
                        dataKey={"value"}

                    >
                        <Cell fill="#B7C7FF" />
                        <Cell fill="#FF7008" />
                    </Pie>
                </PieChart>
                <div className="blue">
                    <h5>savings goals</h5>
                    <h3>${1}</h3>
                </div>
                

                <div className="labels">
                    <div className="label1">
                        <h4>category</h4>
                        <h3>{1}</h3>
                    </div>
                    <div className="label2">
                        <div className="square"></div>
                        <h4>category</h4>
                        <h3>{1}</h3>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Savingsgraph;
