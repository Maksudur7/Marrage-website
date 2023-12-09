import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { CgBoy, CgGirl } from 'react-icons/cg';
import { GiLifeBar } from 'react-icons/gi';
import { SiVirustotal } from 'react-icons/si';


const AdminDashbord = () => {
    const [bio, setBio] = useState([])
    const [mail, setMail] = useState([])
    const [femail, setFemail] = useState([])
    // console.log(bio)
    // console.log(mail)
    // console.log(femail)
    useEffect(() => {
        fetch('http://localhost:5000/profileCard')
            .then(res => res.json())
            .then(data => {
                setBio(data)
                const mail = data.filter(Element => Element.gender === 'Male')
                const femail = data.filter(element => element.gender === 'Femail')
                setMail(mail)
                setFemail(femail)

            })
    }, [])
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/successCopul')
            .then(res => res.json())
            .then(datas => {
                setdata(datas)
                console.log(datas)
            })
    }, [])
    return (
        <div>
            <section className="grid gap-12 md:grid-cols-3 md:gap-16 mx-40 my-20">
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <SiVirustotal className='text-5xl' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div>

                                <CountUp start={0} end={bio.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Total biodata</span>
                    </h2>
                    {/* <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p> */}
                </article>
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <CgBoy className='text-5xl' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div>

                                <CountUp start={0} end={mail.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Boys biodata</span>
                    </h2>
                    {/* <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p> */}
                </article>
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <CgGirl className='text-5xl' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div>

                                <CountUp start={0} end={femail.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Girls biodata</span>
                    </h2>
                    {/* <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p> */}
                </article>
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <GiLifeBar className='text-5xl' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div>

                                <CountUp start={0} end={data.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">marriages have been completed through the website</span>
                    </h2>
                    {/* <p className="text-sm text-slate-500">Many desktop publishing packages and web page editors now use Pinky as their default model text.</p> */}
                </article>
            </section>
        </div>
    );
};

export default AdminDashbord;