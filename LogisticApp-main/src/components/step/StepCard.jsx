function StepCard({id, body, icon}) {
  return (
    <div className="rounded-xl border-[5px] border-[#10B3D6] w-2/3 mx-auto mt-4 h-full">
        <h1 className="rounded-t-md font-bold p-3 text-xl sm:text-2xl bg-[#DAF6FC]">
            Step {id}
        </h1>
        <div>
            <img src={icon} alt="" className="w-2/3 mx-auto"/>
            <p className="p-3 text-lg sm:text-xl font-semibold ">{body}</p>
        </div>
    </div>
  )
}

export default StepCard