import Charts from "../ui/Charts";
import React, { useEffect } from "react";
import { useState } from "react";

function Content() {
  type Shift = {
    shift: string;
    r2: number;
    r4: number;
    total: number;
  };

  type RevenueEntry = {
    tanggal: string;
    shifts: Shift[];
  };

  type Total = {
    r2: number;
    r4: number;
    pendapatan: number;
  };

  const [data, setData] = useState<RevenueEntry[]>([]);
  const [total, setTotal] = useState<Total>({ r2: 0, r4: 0, pendapatan: 0 });
  const [loading, setLoading] = useState(true);
  const [viewType, setViewType] = useState<"harian" | "bulanan">("harian");
  const [selectedMonth, setSelectedMonth] = useState<string>("10");
  const [selectedYear, setSelectedYear] = useState<string>("2025");
 
  /* Data Dummy */
  const dataRevenue = {
    data: [
      {
        tanggal: "27-10-2025",
        shifts: [
          { shift: "Pagi", r2: 10, r4: 30, total: 1000000 },
          { shift: "Siang", r2: 30, r4: 20, total: 1000000 },
          { shift: "Malam", r2: 30, r4: 40, total: 1000000 }
        ]
      },
      {
        tanggal: "28-10-2025",
        shifts: [
          { shift: "Pagi", r2: 10, r4: 30, total: 1000000 },
          { shift: "Siang", r2: 30, r4: 20, total: 1000000 },
          { shift: "Malam", r2: 30, r4: 40, total: 1000000 }
        ]
      }
    ],
    total: {
      r2: 140,
      r4: 180,
      pendapatan: 6000000
    }
  };

  const dailyData = Array.from({ length: 30 }, (_, i) => ({
    name: `${String(i + 1).padStart(2, "0")}/10`,
    value: Math.floor(Math.random() * 1000000) + 200,
  }));

  const monthlyData = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].map((month) => ({
    name: month,
    value: Math.floor(Math.random() * 3000000) + 5000,
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      // pretend we "fetched" it
      setData(dataRevenue.data);
      setTotal(dataRevenue.total);
      setLoading(false);
    }, 800); // simulate a short delay

    return () => clearTimeout(timer);
  }, []);

  const formatRupiah = (num: number) => `Rp. ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

  const chartData = viewType === "harian" ? dailyData : monthlyData;

  if (loading) return (
    <div className="flex w-full min-h-full items-center justify-center">
      <p className="text-center p-4 items-center justify-center text-2xl text-gray-500">Loading data...</p>
    </div>
  )

  return (
    <>
      <div className="flex flex-col w-full p-4">
        {/* Charts */}
        <div className="flex flex-col gap-3 rounded-lg shadow-lg p-4">
          {/* Header */}
          <div className="flex items-center gap-3">
            <p className="font-bold text-2xl text-[#00783e]">Pendapatan Parkir</p>
          </div>

          {/* Filters Section */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Type Selector */}
            <div className="flex items-center gap-2">
              <label className="font-medium text-gray-700">Lihat:</label>
              <select
                value={viewType}
                onChange={(e) =>
                  setViewType(e.target.value as "harian" | "bulanan")
                }
                className="bg-[#3dc8b2] text-white font-medium rounded-md px-3 py-1 cursor-pointer hover:bg-[#34b5a0] transition"
              >
                <option value="harian">Harian</option>
                <option value="bulanan">Bulanan</option>
              </select>
            </div>

            {/* Month Selector (for daily view) */}
            {viewType === "harian" && (
              <div className="flex items-center gap-2">
                <label className="font-medium text-gray-700">Bulan:</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 bg-white cursor-pointer"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                      {new Date(0, i).toLocaleString("id-ID", { month: "long" })}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Year Selector (for monthly view) */}
            {viewType === "bulanan" && (
              <div className="flex items-center gap-2">
                <label className="font-medium text-gray-700">Tahun:</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 bg-white cursor-pointer"
                >
                  {[2023, 2024, 2025, 2026].map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Chart */}
          <Charts tooltipLabel={viewType === "bulanan" ? "Bulan" : "Tanggal"} tooltipDetailLabel="Pendapatan" tooltipDetailLabelHead="Rp" data={chartData} />
        </div>

        {/* Table */}

        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
          <h2 className="text-xl font-semibold text-[#00783e] mb-4 text-center">Data Pendapatan Parkir</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-center shadow-lg rounded-lg border-separate border-spacing-0">
              <thead className="bg-[#3dc8b2] text-white">
                <tr>
                  <th className="py-3 px-4 border-b border-r border-white">Tanggal</th>
                  <th className="py-3 px-4 border-b border-r border-white">Shift</th>
                  <th className="py-3 px-4 border-b border-r border-white">R2</th>
                  <th className="py-3 px-4 border-b border-r border-white">R4</th>
                  <th className="py-3 px-4 border-b">Total</th>
                </tr>
              </thead>

              <tbody>
                {data.map((entry, index) => (
                  <React.Fragment key={index}>
                    {entry.shifts.map((shift, i) => (
                      <tr
                        key={i}
                        className="hover:bg-[#f5f5f5] transition-colors duration-150"
                      >
                        {i === 0 && (
                          <td
                            rowSpan={entry.shifts.length}
                            className="py-2 px-4 border-b border-r border-gray-300 font-medium text-[#00783e] bg-[#e9f9f3]"
                          >
                            {entry.tanggal}
                          </td>
                        )}
                        <td className="py-2 px-4 border-b border-r border-gray-300">
                          {shift.shift}
                        </td>
                        <td className="py-2 px-4 border-b border-r border-gray-300">
                          {shift.r2}
                        </td>
                        <td className="py-2 px-4 border-b border-r border-gray-300">
                          {shift.r4}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300 font-semibold text-[#00783e]">
                          {formatRupiah(shift.total)}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={5} className="border-b border-gray-300"></td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>

              <tfoot>
                <tr className="bg-[#e9f9f3] font-semibold text-[#00783e]">
                  <td
                    colSpan={2}
                    className="py-3 px-4 border-t border-r border-gray-300 text-center"
                  >
                    Total Keseluruhan:
                  </td>
                  <td className="py-3 px-4 border-t border-r border-gray-300">
                    {total.r2}
                  </td>
                  <td className="py-3 px-4 border-t border-r border-gray-300">
                    {total.r4}
                  </td>
                  <td className="py-3 px-4 border-t border-gray-300">
                    {formatRupiah(total.pendapatan)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content