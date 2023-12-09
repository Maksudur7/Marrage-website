import { useForm } from "react-hook-form"
import useAxiousPublic from "../../Hooks file/useAxiousPublic";
import { useContext, } from "react";
import { AuthContext } from "../Firebase file/AuthProvider";
import Swal from "sweetalert2";
// import { data } from "autoprefixer";
const EditBiodata = () => {
    const {
        register,
        handleSubmit
    } = useForm()

    const { users } = useContext(AuthContext)
    const Image_Api_Key = import.meta.env.VITE_IMAGEHOSTING;
    const Image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${Image_Api_Key}`
    const axiousPublic = useAxiousPublic()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiousPublic.post(Image_Hosting_Api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const age = data.age;
        const dateOfBirth = data.dateOfBirth
        const fathersName = data.fathersName
        const gender = data.gender
        const height = data.height
        const mothersName = data.mothersName
        const name = data.name
        const occupation = data.occupation
        const patnerAge = data.patnerAge
        const patnerHeight = data.patnerHeight
        const patnerWeight = data.patnerWeight
        const permanentDivision = data.permanentDivision
        const presentDivision = data.presentDivision
        const race = data.race
        const weight = data.weight
        const email = users.email
        const phone = data.phone
        const members = 'nonpremium'
        console.log(res.data.data.display_url)
        axiousPublic.post('/profileCard', { age, dateOfBirth, fathersName, gender, height, mothersName, name, occupation, patnerAge, patnerHeight, patnerWeight, permanentDivision, presentDivision, race, weight, image: res.data.data.display_url, email, phone, members })
            .then(res => {
                console.log(res)
                if(res){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New bio add successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=" m-5">
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* Biodata type  */}
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="gender" {...register("gender")} className="w-full" id="">
                            <option value="Gender">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Femail">Femail</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    {/* biodata name */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" {...register("name")} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        <hr />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* profile image */}
                    <div id='selectImage' className="relative z-0 w-full mb-5 group">
                        <label>
                            Select Image <br />
                            <input type="file" name="image" {...register("image")} id="" />
                        </label>
                        <hr />
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="date" name="dateOfBirth" {...register("dateOfBirth")} id="dateOfBirth" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of birth</label>
                        <hr />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="height" {...register("height")} className="w-full" id="">
                            <option value="Height">Height</option>
                            <option value="5">5.2</option>
                            <option value="6">5.3</option>
                            <option value="7">5.4</option>
                            <option value="7">5.5</option>
                            <option value="7">5.6</option>
                            <option value="7">5.7</option>
                            <option value="7">5.8</option>
                            <option value="7">5.9</option>
                            <option value="7">6</option>
                        </select>
                        <hr />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="weight" {...register("weight")} className="w-full" id="">
                            <option value="Weight">Weight</option>
                            <option value="5">130 pound</option>
                            <option value="6">140 pound</option>
                            <option value="7">150 pound</option>
                            <option value="7">160 pound</option>
                            <option value="7">170 pound</option>
                        </select>
                        <hr />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="age" {...register("age")} id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                        <hr />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="occupation" {...register("occupation")} className="w-full" id="">
                            <option value="Occupation">Occupation</option>
                            <option value="Student">Student</option>
                            <option value="Officer">Officer</option>
                            <option value="Bissnessman">Bissnessman</option>
                            <option value="Bissnessman">Engineer</option>
                            <option value="Bissnessman">Docktor</option>
                        </select>
                        <hr />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="race" {...register("race")} className="w-full" id="">
                            <option value="Race">Race</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Khican">Khican</option>
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="fathersName" {...register("fathersName")} id="fathersName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fathers name</label>
                        <hr />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="mothersName" {...register("mothersName")} id="mothersName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mothers name</label>
                        <hr />
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="permanentDivision" {...register("permanentDivision")} className="w-full" id="">
                            <option value="Permanent Division">Permanent Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="presentDivision" {...register("presentDivision")} className="w-full" id="">
                            <option value="Present Division">Present Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="patnerAge" {...register("patnerAge")} id="patnerAge" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expected Partner Age</label>
                        <hr />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="patnerHeight" {...register("patnerHeight")} className="w-full" id="">
                            <option value="Height">Patner Height</option>
                            <option value="5">5.2</option>
                            <option value="6">5.3</option>
                            <option value="7">5.4</option>
                            <option value="7">5.5</option>
                            <option value="7">5.6</option>
                            <option value="7">5.7</option>
                            <option value="7">5.8</option>
                            <option value="7">5.9</option>
                            <option value="7">6</option>
                        </select>

                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select name="patnerWeight" {...register("patnerWeight")} className="w-full" id="">
                            <option value="Weight">Patner Weight</option>
                            <option value="5">130 pound</option>
                            <option value="6">140 pound</option>
                            <option value="7">150 pound</option>
                            <option value="7">160 pound</option>
                            <option value="7">170 pound</option>
                        </select>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="phone" {...register("phone")} id="patnerAge" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                        <hr />
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Publish Now</button>
            </form>

        </div>
    );
};

export default EditBiodata;