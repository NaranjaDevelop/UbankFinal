import './Tinycards.css';

interface TinycardsProps {
    title: string;
    img: string;
}

const Tinycards = ({title, img}: TinycardsProps) => {
    return (
    <div className="tinycards">
        <img src={img} alt={`${title} icon`} />
        <h2>{title}</h2>
    </div>
    )

}

export default Tinycards;