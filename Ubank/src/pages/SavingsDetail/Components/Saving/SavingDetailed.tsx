
interface SavingDetailedProps {
    savingtitle: string;
    savingamount: number;
    savingdate: string;
    savingFrequency: string;
    savingsdone:[ {
        amount: number;
        date: string;
    }]// Change here to allow multiple savings
    savedtotal: number;
}

const SavingDetailed = ({
    savingtitle,
    savingamount,
    savingdate,
    savingFrequency,
    savingsdone = [{amount: 0, date: ''}],
    savedtotal
}: SavingDetailedProps) => {
    return (
        <div>
            <h2>{savingtitle}</h2>
            <p>Amount: {savingamount}</p>
            <p>Date: {savingdate}</p>
            <p>Frequency: {savingFrequency}</p>
            {
                savingsdone.map((saving, index) => (
                    <div key={index}>
                        <p>Savings: {saving.amount}</p>
                        <p>Date: {saving.date}</p>
                    </div>
                ))
            }
            <p>Saved Total: {savedtotal}</p>
        </div>
    )
}
export default SavingDetailed;