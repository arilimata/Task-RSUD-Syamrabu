import { useState } from "react";
import Period from "../ui/Period";
import FormFieldCard from "../ui/FormFieldCard";
import FormCard from "../ui/FormCard";
import ResultCard from "../ui/RekapCard";

function PendapatanParkirSideMenu() {
  const [formData, setFormData] = useState({
    tanggal: "",
    shift: "",
    r2: "",
    r4: "",
  });
  
  const formatCurrency = (value: string) => {
    const numberValue = value.replace(/\D/g, "");
    if (!numberValue) return "";

    // Format as Indonesian currency
    return "Rp " + parseInt(numberValue).toLocaleString("id-ID");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Special handling for R2 and R4
    if (name === "r2" || name === "r4") {
      const formatted = formatCurrency(value);
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.tanggal || !formData.shift || !formData.r2 || !formData.r4) {
      alert("Harap isi semua kolom sebelum menyimpan.");
      return;
    }

    console.log("Data tersimpan:", formData);
    alert("Data berhasil disimpan!");
  };

  return (
    <>
      <Period />
      
      {/* Rekap */}
      <FormCard title="Rekap Pendapatan Parkir" onSubmit={handleSubmit}>
        <FormFieldCard label="Tanggal Transaksi">
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            className="bg-white rounded-md border border-gray-300 px-3 py-1 text-gray-700 sm:w-full focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
          />
        </FormFieldCard>

        <FormFieldCard label="Shift">
          <select
            name="shift"
            value={formData.shift}
            onChange={handleChange}
            className="bg-white rounded-md border border-gray-300 px-3 py-1 text-gray-700 sm:w-full focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
          >
            <option value="">Pilih Shift</option>
            <option value="Pagi">Pagi</option>
            <option value="Siang">Siang</option>
            <option value="Malam">Malam</option>
          </select>
        </FormFieldCard>

        <FormFieldCard label="Pendapatan R2">
          <input
            type="text"
            name="r2"
            inputMode="numeric"
            value={formData.r2}
            onChange={handleChange}
            className="bg-white rounded-md border border-gray-300 px-3 py-1 text-gray-700 text-right focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
          />
        </FormFieldCard>

        <FormFieldCard label="Pendapatan R4">
          <input
            type="text"
            name="r4"
            inputMode="numeric"
            value={formData.r4}
            onChange={handleChange}
            className="bg-white rounded-md border border-gray-300 px-3 py-1 text-gray-700 text-right focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
          />
        </FormFieldCard>

        <div className="flex w-full justify-center mt-2">
          <button
            type="submit"
            className="bg-[#008b44] hover:bg-[#00783e] transition text-white font-semibold rounded-md px-12 py-2 shadow-md"
          >
            Simpan
          </button>
        </div>
      </FormCard>


      {/* Result Tab */}
      {/* Pendapatan Parkir */}
      <ResultCard title="Total Pendapatan Keseluruhan">
      {/* Total Pendapatan */}
      <div className="flex flex-col text-center justify-center rounded-lg shadow-inner py-6">
        <p className="text-3xl font-bold text-[#249c83] tracking-wide">
          Rp 10.000.000
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Total keseluruhan pendapatan parkir
        </p>
      </div>

      {/* Divider totals */}
      <div className="flex flex-row justify-around items-center rounded-lg shadow-inner p-4">
        {/* R2 */}
        <div className="flex flex-col items-center w-1/2">
          <p className="font-semibold text-gray-600">Total Pendapatan R2</p>
          <p className="text-2xl font-bold text-[#00783e] mt-1">Rp 6.000.000</p>
        </div>

        {/* Vertical divider */}
        <div className="h-10 w-0.5 bg-gray-300 mx-4"></div>

        {/* R4 */}
        <div className="flex flex-col items-center w-1/2">
          <p className="font-semibold text-gray-600">Total Pendapatan R4</p>
          <p className="text-2xl font-bold text-[#00783e] mt-1">Rp 4.000.000</p>
        </div>
      </div>
    </ResultCard>
    </>
  );
}

export default PendapatanParkirSideMenu;
