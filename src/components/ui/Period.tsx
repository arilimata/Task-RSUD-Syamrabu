function Period() {
  return (
    <div className="flex flex-row items-center justify-between w-full bg-linear-to-r from-[#e6f0ef] to-[#ffffff] p-4 m-2 rounded-lg shadow-sm border-b-4 border-[#3dc8b2]/40">
      {/* Label */}
      <p className="text-[#00783e] font-semibold text-lg">Periode</p>

      {/* Date Range Selector */}
      <div className="flex flex-row items-center gap-6 px-4 py-2 ">
        <p className="text-gray-700 font-medium">January 2025</p>
        <span className="text-gray-400 font-semibold">-</span>
        <p className="text-gray-700 font-medium">December 2025</p>

        {/* Calendar Button */}
        <button className="ml-2 hover:scale-105 transition-transform duration-200">
          <img src="./src/assets/calendar.svg" alt="calendar" className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default Period;