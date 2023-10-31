import { useState } from "react"
import Header from "./Header";

const Container = () => {

    const [selected] = useState([])

    return (
        <section className="bg-white rounded-md border  shadow text-slate-700 w-full lg:w-[900px]  mx-auto ">

            {/* Header Section  */}
            <Header selected={selected} />
            {/* main Container  */}
            <div className="p-4">

            </div>
        </section>
    )
}

export default Container