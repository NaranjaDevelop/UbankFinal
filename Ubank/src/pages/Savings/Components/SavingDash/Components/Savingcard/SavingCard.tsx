import "./SavingCard.css";

interface SavingCardProps {
  Categoryimg: string;
  SavingTitle: string;
  savingFrequency: string;
  Savingmax: number;
  Percentagesaved: number;
}

const SavingCard = ({
  Categoryimg,
  SavingTitle,
  savingFrequency,
  Savingmax,
  Percentagesaved,
}: SavingCardProps) => {
  return (
    <div className="saving-card-container">
      <div className="saving-card-left">
        <img src={Categoryimg} alt={SavingTitle} className="saving-card-icon" />
        <div className="saving-card-info">
          <h3 className="saving-card-title">{SavingTitle}</h3>
          <p className="saving-card-frequency">{savingFrequency}</p>
          <p className="saving-card-timeleft">3 weeks left</p>
        </div>
      </div>
      <div className="saving-card-right">
        <h1 className="saving-card-percentage">{Percentagesaved}%</h1>
        <div className="saving-card-progress">
          <div
            className="saving-card-progress-bar"
            style={{ width: `${Percentagesaved}%` }}
          ></div>
        </div>
        <div className="saving-card-minmax">
          <p className="saving-card-min">$0</p>
          <p className="saving-card-max">${Savingmax.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default SavingCard;