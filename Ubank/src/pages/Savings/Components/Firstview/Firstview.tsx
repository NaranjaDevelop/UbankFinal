import './FirstView.css';
interface Props {
    handlenext: () => void;
        }
const Firstview = ({handlenext}: Props) => {
    return (
    <div className="firstview-container">
        <h1 className='tittle-firstView'>Start Your Savings Journey!</h1>
        <h3>Hit the Create Goal button and take the first step towards achieving your financial dreams!</h3>
        <img className='img-savings-firstview' src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FSavings.png?alt=media&token=7da05bcf-5576-47ae-909e-789e418122bb" alt="" />
        <button className='create-goal-button' onClick={handlenext}>Create Goal</button>
        <h5>Ready to reach your savings goal? </h5>
    </div>
    )
}
export default Firstview;