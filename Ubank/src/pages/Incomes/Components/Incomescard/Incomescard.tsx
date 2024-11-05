
import './Incomescard.css'

interface IncomescardProps {
    IncomeTitle: string;
  IncomeAmount: number;
  IncomeDate: string;
  Incomesimg: string;
}

const Incomescard = ({IncomeTitle, IncomeAmount, IncomeDate, Incomesimg}:IncomescardProps) => {
    return (
    <>
    <div id='incomescards'>
      <div id='row-incomescard'>
        <img src={Incomesimg} alt="" height={39} width={39} />
        <div id='incomescard-details'>

        <h2 id='incomescard-title'>{IncomeTitle}</h2>
        <h3>{IncomeAmount} $</h3>
      </div>
        </div>
        <div id='incomescard-date'>
            <h3>{IncomeDate}</h3>
        </div>
    </div>
    </>
  );
};


export default Incomescard;