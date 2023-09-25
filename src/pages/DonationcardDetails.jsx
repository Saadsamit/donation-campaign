import {  useOutletContext, useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationcardDetails = () => {
    const {id} = useParams()
    const mydata = useOutletContext()
    const detailsId = mydata.find(data => data.id === id)
    const handleLS = ()=>{
        const myIdArr = []
        const LsId = JSON.parse(localStorage.getItem('ids'))
        if(!LsId) {
            myIdArr.push(id)
            localStorage.setItem('ids',JSON.stringify(myIdArr))
            swal("Good job!", "Your donation is successfull", "success");
        }
        else{
            const isExist = LsId.find((idx)=> detailsId.id === idx)
            if(!isExist){
                myIdArr.push(...LsId,id)
                localStorage.setItem('ids',JSON.stringify(myIdArr))
                swal("Good job!", "Your donation is successfull", "success");
            }else{
                swal("Error", "Your already donate here", "error");
            }
        }
    }
    return (
        <div className="pt-32 container mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
            <img src={detailsId.img} alt="" className="w-full h-[70vh]" />
            <div className="bg-black bg-opacity-50 p-10 absolute bottom-0 left-0 right-0">
                <button onClick={handleLS} style={{backgroundColor: detailsId.textColor}} className="btn rounded-lg text-white text-xl font-semibold border-none">Donate ${detailsId.donate}</button>
            </div>
            </div>
            <h2 className="text-[#0B0B0B] text-4xl font-bold pt-10 pb-6">{detailsId.title}</h2>
            <p className="text-[#0b0b0bb3] text-base font-normal mb-10">{detailsId.description}</p>
        </div>
    );
};

export default DonationcardDetails;