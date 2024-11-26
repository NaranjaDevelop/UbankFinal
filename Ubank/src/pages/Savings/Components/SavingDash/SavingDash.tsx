
interface SavingDashProps {
    saved: number;
}

const SavingDash = ({ saved }: SavingDashProps) => {
    return (
        <div>
            <div className="header-container" >

                <img src="" alt="" />
            </div>
            <div>
                <h1>Goals</h1>
                <p>Your goals</p>
            </div>
            <div>
                <h3>You have saved</h3>
                <h2>${saved}</h2>
            </div>


            <div>

            </div>
        </div>
    )
}

export default SavingDash;