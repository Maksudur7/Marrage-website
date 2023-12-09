
import { useState } from "react";
import BiodataCard from "./BiodataCard";


const Biodata = () => {
    const [fild, setfild] = useState([])
    const handelbioSearch = e => {
        e.preventDefault()

        const age = e.target.age.value
        const gender = e.target.gender.value
        const division = e.target.division.value
        console.log(age, gender, division)
        const searchFild = { age, gender, division }
        setfild(searchFild)
    }
    return (
        <div className="flex w-full relative">
            <div className=" max-h-full fixed w-80 mt-20  mx-10">
                <form onSubmit={handelbioSearch}>

                    <select name="age" className="w-full" id="" >
                        <option value="age">age</option>
                        <option value="23">23</option>
                        <option value="45">45</option>
                        <option value="30">30</option>
                    </select>

                    <br /><br />
                    <select name="gender" className="w-full" id="">
                        <option value="gender">gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <br /><br />
                    <select name="division" className="w-full" id="">
                        <option value="division">division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                    <button className="btn mt-5 btn-primary w-full">Search</button>
                </form>
            </div>
            <div className=" flex-1  absolute left-96 right-0">
                <BiodataCard searchFild={fild}></BiodataCard>
            </div>
        </div>
    );
};

export default Biodata;