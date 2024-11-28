import { IncomesContext } from "../../../../Context/Incomes";
import { UseContextIncomes } from "../../../../Hooks/Usecontext";
import { UseIncomes } from "../../../../Hooks/Useincomes";
import UseSavings from "../../../../Hooks/Usesavings";
import CategoriesCards from "../../../Incomes/Components/Categoriescards/CategoriesCards";
import Savingsgraph from "./Components/Chartsaving/Chartsaving";
import SavingCard from "./Components/Savingcard/SavingCard";


const Category = [{
CategoryName: "Rent or Housing",
CategoryAmount: 0,
CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FRenta.png?alt=media&token=86a9bd6b-fcd8-4205-b848-91c29a276dfc"
},
{
CategoryName: "Food",
CategoryAmount: 0,
CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FMErcado.png?alt=media&token=fa267137-875d-461c-b19f-d3f32bddebfa"
},
{
CategoryName: "Transportation",
CategoryAmount: 0,
CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FTransporte.png?alt=media&token=b00644a4-35bb-405a-9d2d-79b98f0d8c1b"
},
{
CategoryName: "Entertainment",
CategoryAmount: 0,
CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FEntretenimiento.png?alt=media&token=36c0ff91-3af4-4651-b8c4-a2ca8692916f"
},
{
CategoryName: "Education",
CategoryAmount: 0,
CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FEstudios.png?alt=media&token=6bd3aec7-cab0-4637-9515-e876abb60b4d"

},
{
CategoryName: "Health",
CategoryAmount: 0,
CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FSalud.png?alt=media&token=86725444-72ee-48be-940f-b081c7f5e82c"

},
{
CategoryName: "Sports",
CategoryAmount: 0,
CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FDeportes.png?alt=media&token=60c64004-71f6-41a8-a0c4-5e3c9f06cb0d"
},
{
CategoryName: "Clothing",
CategoryAmount: 0,
CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FRopa.png?alt=media&token=27f6a2e8-b38b-4670-971b-612b0350435e"

},
{
CategoryName: "Technology",
CategoryAmount: 0,
CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FTecnologia.png?alt=media&token=74b766cd-4cfd-4b9f-817b-124833548a71"
},
{
CategoryName: "Social Events",
CategoryAmount: 0,
CategoryImg:"https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FFIestas.png?alt=media&token=744b99b4-8fe4-4e50-9fae-4f6292806d7d"

},
{
CategoryName: "Other Expenses",
CategoryAmount: 0,
CategoryImg:"https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FMErcado.png?alt=media&token=fa267137-875d-461c-b19f-d3f32bddebfa"

}
]
const SavingDash = () => {

    const {savings} = UseSavings()

    console.log(savings);

    
    
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
                <h2>{0}</h2>
            </div>

            <div>
            <Savingsgraph/>
            <div>
                {
                    savings.slice(1).map ((saving, index) => (

                        <SavingCard key={index} Categoryimg="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FRenta.png?alt=media&token=86a9bd6b-fcd8-4205-b848-91c29a276dfc" SavingTitle={saving.goalName} savingFrequency={saving.category} Savingmax={saving.goalAmount} Percentagesaved={1}  />
                    ))
                }
                
            </div>
            </div>
        </div>
    )
}

export default SavingDash;