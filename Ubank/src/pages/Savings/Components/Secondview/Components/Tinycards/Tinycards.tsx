interface TinycardsProps {
    title: string;
    img: string;
}

const Tinycards = ({title, img}: TinycardsProps) => {
    return (
    <div className="tinycards">
        <h2>{title}</h2>
        <img src={img} alt="" />
    </div>
    )

}

export default Tinycards;