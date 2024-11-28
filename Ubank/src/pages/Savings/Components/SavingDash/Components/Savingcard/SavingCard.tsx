



interface SavingCardProps {
    Categoryimg: string
    SavingTitle: string,
    savingFrequency: string

}
const Savingtimeleft = "Time left: 12 months"
const Savingmin = "$100"
const Savingmax = "$500"
const Percentagesaved = "Percentage saved: 50%"

const SavingCard = ({Categoryimg, SavingTitle,savingFrequency} : SavingCardProps) => {

    
   
    
    return (
        <div className="saving-card">
            <div className="saving-card-header">
            <img src={Categoryimg} alt="" />
            <h3>{SavingTitle}</h3>
            <p>{savingFrequency}</p>
            <input type="range" name="range" min="0" max="100" step="1" value="0" id="" />
            
            <div className="minmaxstring">
                <p>{Savingmin}</p>
                <p>{Savingmax}</p>
            </div>
            <h1>{Percentagesaved}</h1>
            </div>
        </div>
    )
}

export default SavingCard;