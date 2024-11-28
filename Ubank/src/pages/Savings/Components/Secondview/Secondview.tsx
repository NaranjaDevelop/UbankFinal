import Tinycards from "./Components/Tinycards/Tinycards";

const TinycardsData = [{
    title: "Set you goal",
    img: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2Fverified.png?alt=media&token=3f802069-5e83-441b-ab1e-76f9e8f0ab9a"
},
{
    title: "Plan your contribution",  
    img: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2Fsupport-dollar.png?alt=media&token=37dd0f14-bd58-4b9b-ae59-d2ca8e744cf6"
},
{
    title: "Watch your progress",
    img: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2Fcalendar.png?alt=media&token=b7e3d316-c20f-4271-9ccf-682a83bdf154"
},
]
interface ISecondviewProps {
    Handlenext: () => void;
}


const Secontview = ({Handlenext}: ISecondviewProps) => {
    return (
    <div>
        <div className="Secondview-header">
            <h1>Ready to reach your savings goal? </h1>
            <h3>Here's how it works:</h3>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FPig.png?alt=media&token=638e9e45-609a-4ca3-8855-4aa84c1483b4" alt="" />
            </div>
            <div className="Secondview-cards">
                {
                    TinycardsData.map((item, index) => {
                        return <Tinycards key={index} title={item.title} img={item.img} />
                    })
                }
            </div>
            <div className="seccondview-buttons">
                <button>Cancel</button>
                <button onClick={Handlenext}>Continue</button>
            </div>
        </div>
    </div>
    )
}

export default Secontview;