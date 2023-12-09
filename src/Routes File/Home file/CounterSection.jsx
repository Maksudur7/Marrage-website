import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { CgBoy, CgGirl } from 'react-icons/cg';
import { GiLifeBar } from 'react-icons/gi';

const CounterSection = () => {
    const [girls, setgirls] = useState([])
    const [boys, setboys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/profileCard')
            .then(res => res.json())
            .then(datas => {

                const find = datas.filter(Element => Element.gender === 'Femail')
                console.log(find)
                setgirls(find)
                const boy = datas.filter(element => element.gender === 'Male')
                setboys(boy)
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
        <>
            <section className="grid gap-12 md:grid-cols-3 md:gap-16 mx-40 my-20">
                <article>
                    <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">
                        <CgGirl className='text-5xl' />
                    </div>
                    <h2>
                        <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
                            <div>

                                <CountUp start={0} end={girls.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">girls biodata</span>
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

                                <CountUp start={0} end={boys.length}>
                                </CountUp>
                            </div>
                        </span>
                        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">boys biodata</span>
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
        </>

    );
};

export default CounterSection;