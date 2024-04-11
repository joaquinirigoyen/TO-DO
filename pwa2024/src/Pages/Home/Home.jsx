import { Title } from "../../Components/Title/Title"

function Home() {
    return (
        <div className=" bg-slate-600 min-h-screen h-ful text-gray-200 flex items-center justify-center py-20 px-5 " >
            <div className="container flex flex-col max-w-xl">
                <Title />
            </div>
        </div >
    );
}

export default Home;
