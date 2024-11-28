



interface SavingCardProps {
    Categoryimg: string
    SavingTitle: string,
    savingFrequency: string
    Savingmax: number
    Percentagesaved: number 
}


const SavingCard = ({Categoryimg, SavingTitle,savingFrequency, Savingmax, Percentagesaved} : SavingCardProps) => {

    
   
    
    return (
        <div className="saving-card" >
            <div className="saving-card-header">
            <img src={Categoryimg} alt="" />
            <h3>{SavingTitle}</h3>
            <p>{savingFrequency}</p>
            <input type="range" name="range" min="0" max="100" step="1" value="0" id="" />
            
            <div className="minmaxstring">
                <p>{0}</p>
                <p>{Savingmax}</p>
            </div>
            <h1>{Percentagesaved}</h1>
            </div>
        </div>
    )
}

export default SavingCard;