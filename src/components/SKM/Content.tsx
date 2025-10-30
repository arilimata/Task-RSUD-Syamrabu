import Charts from "../ui/Charts";
import { useState } from "react";
  
function Content() {
  type ChartData = {
    name: string; // Periode (Triwulan 1, 2, dst)
    value: number;
    year: number;
  }[];
  // === Dummy data ===
  const dummyData: ChartData = [
    { name: "Triwulan 1", value: 42.4, year: 2023 },
    { name: "Triwulan 2", value: 55.1, year: 2023 },
    { name: "Triwulan 3", value: 96.7, year: 2023 },
    { name: "Triwulan 4", value: 78.0, year: 2023 },

    { name: "Triwulan 1", value: 84.5, year: 2024 },
    { name: "Triwulan 2", value: 86.3, year: 2024 },
    { name: "Triwulan 3", value: 87.8, year: 2024 },
    { name: "Triwulan 4", value: 89.2, year: 2024 },

    { name: "Triwulan 1", value: 86.1, year: 2025 },
    { name: "Triwulan 2", value: 88.4, year: 2025 },
    { name: "Triwulan 3", value: 89.7, year: 2025 },
    { name: "Triwulan 4", value: 90.5, year: 2025 },
  ];

  const tableData = [
    {
      nomor: 1,
      namaPeriode: "Triwulan 1 2025",
      periodeSurvey: "Januari - Maret",
      laki: 125,
      perempuan: 87,
      nilaiIndex: 3.45,
      mutuPelayanan: "B",
      kinerja: "Baik",
      nilaiEKM: 82.05,
    },
    {
      nomor: 2,
      namaPeriode: "Triwulan 2 2025",
      periodeSurvey: "April - Juni",
      laki: 125,
      perempuan: 87,
      nilaiIndex: 3.45,
      mutuPelayanan: "B",
      kinerja: "Baik",
      nilaiEKM: 82.05,
    },
    {
      nomor: 3,
      namaPeriode: "Triwulan 3 2025",
      periodeSurvey: "Juli - September",
      laki: 125,
      perempuan: 87,
      nilaiIndex: 3.45,
      mutuPelayanan: "B",
      kinerja: "Baik",
      nilaiEKM: 82.05,
    },
    {
      nomor: 4,
      namaPeriode: "Triwulan 4 2025",
      periodeSurvey: "Ooktober - Desember",
      laki: 125,
      perempuan: 87,
      nilaiIndex: 3.45,
      mutuPelayanan: "B",
      kinerja: "Baik",
      nilaiEKM: 82.05,
    },
    {
      nomor: 5,
      namaPeriode: "Triwulan 1 2024",
      periodeSurvey: "Januari - Maret",
      laki: 125,
      perempuan: 87,
      nilaiIndex: 3.45,
      mutuPelayanan: "B",
      kinerja: "Baik",
      nilaiEKM: 82.05,
    },
    {
      nomor: 6,
      namaPeriode: "Triwulan 2 2024",
      periodeSurvey: "April - Juni",
      laki: 125,
      perempuan: 87,
      nilaiIndex: 3.45,
      mutuPelayanan: "B",
      kinerja: "Baik",
      nilaiEKM: 82.05,
    },
  ]

  const [selectedYear, setSelectedYear] = useState("2025");
  
  const filteredData = dummyData.filter(
    (item) => item.year.toString() === selectedYear
  );

  return (
    <>
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-col gap-3 rounded-lg shadow-lg p-4">
          <p className="font-bold text-2xl text-[#00783e]">Survei Kesehatan Masyarakat</p>
         {/* Filter Tahun */}
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-700">Tahun:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 bg-white cursor-pointer hover:border-[#3dc8b2] focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
            >
              {[2023, 2024, 2025].map((year) => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        <Charts tooltipDetailLabel="EKM" data={filteredData}/>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
          <h2 className="text-xl font-semibold text-[#00783e] mb-4 text-center">
            Data Hasil Survey Kepuasan Masyarakat
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-center shadow-lg rounded-lg border-separate border-spacing-0">
              <thead className="bg-[#3dc8b2] text-white">
                <tr>
                  <th
                    rowSpan={2}
                    className="py-3 px-4 border-b border-r border-white align-middle"
                  >
                    No
                  </th>
                  <th
                    rowSpan={2}
                    className="py-3 px-4 border-b border-r border-white align-middle"
                  >
                    Nama Periode
                  </th>
                  <th
                    rowSpan={2}
                    className="py-3 px-4 border-b border-r border-white align-middle"
                  >
                    Periode Survey
                  </th>
                  <th
                    colSpan={2}
                    className="py-3 px-4 border-b border-r border-white align-middle"
                  >
                    Jumlah Responden
                  </th>
                  <th
                    rowSpan={2}
                    className="py-3 px-4 border-b border-r border-white align-middle"
                  >
                    Nilai Index
                  </th>
                  <th
                    rowSpan={2}
                    className="py-3 px-4 border-b border-r border-white align-middle"
                  >
                    Mutu Pelayanan
                  </th>
                  <th
                    rowSpan={2}
                    className="py-3 px-4 border-b border-r border-white align-middle"
                  >
                    Kinerja
                  </th>
                  <th
                    rowSpan={2}
                    className="py-3 px-4 border-b border-white align-middle"
                  >
                    Nilai EKM
                  </th>
                </tr>

                {/* Subheader khusus untuk jenis kelamin */}
                <tr className="bg-[#32b19e] text-white">
                  <th className="py-2 px-4 border-b border-x border-white">Laki-Laki</th>
                  <th className="py-2 px-4 border-b border-r border-white">Perempuan</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#f5f5f5] transition-colors duration-150"
                  >
                    <td className="py-2 px-4 border-b border-r border-gray-300 font-medium text-[#00783e] bg-[#e9f9f3]">
                      {row.nomor}
                    </td>
                    <td className="py-2 px-4 border-b border-r border-gray-300">
                      {row.namaPeriode}
                    </td>
                    <td className="py-2 px-4 border-b border-r border-gray-300">
                      {row.periodeSurvey}
                    </td>
                    <td className="py-2 px-4 border-b border-r border-gray-300">
                      {row.laki}
                    </td>
                    <td className="py-2 px-4 border-b border-r border-gray-300">
                      {row.perempuan}
                    </td>
                    <td className="py-2 px-4 border-b border-r border-gray-300">
                      {row.nilaiIndex}
                    </td>
                    <td className="py-2 px-4 border-b border-r border-gray-300">
                      {row.mutuPelayanan}
                    </td>
                    <td className="py-2 px-4 border-b border-r border-gray-300">
                      {row.kinerja}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 font-semibold text-[#00783e]">
                      {row.nilaiEKM}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content