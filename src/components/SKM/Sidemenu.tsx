import { useState } from "react";
import FormCard from "../ui/FormCard";
import FormFieldCard from "../ui/FormFieldCard";
import Period from "../ui/Period";
import ResultCard from "../ui/RekapCard";

export default function FormSurvey() {
  const [formData, setFormData] = useState({
    triwulan: "",
    tahun: new Date().getFullYear().toString(),
    periodeSurvey: "",
    respondenL: "",
    respondenP: "",
    nilaiIndex: "",
    mutuPelayanan: "",
    kinerja: "",
    nilaiEKM: "",
  });

  const triwulanOptions = [
    { label: "Triwulan 1", value: "1", months: "Januari - Maret" },
    { label: "Triwulan 2", value: "2", months: "April - Juni" },
    { label: "Triwulan 3", value: "3", months: "Juli - September" },
    { label: "Triwulan 4", value: "4", months: "Oktober - Desember" },
  ];

  const tahunOptions = Array.from({ length: 6 }, (_, i) => {
    const year = new Date().getFullYear() - 2 + i;
    return year.toString();
  });

  const handleTriwulanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const selected = triwulanOptions.find((t) => t.value === value);
    setFormData({
      ...formData,
      triwulan: value,
      periodeSurvey: selected ? selected.months : "",
    });
  };

  const handleTahunChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, tahun: e.target.value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.triwulan || !formData.tahun || !formData.periodeSurvey || !formData.respondenL || !formData.respondenP || !formData.nilaiIndex || !formData.mutuPelayanan || !formData.kinerja || !formData.nilaiEKM) {
      alert("Harap isi semua kolom sebelum menyimpan.");
      return;
    }
    console.log("Data SKM tersimpan:", formData);
    alert("Data SKM berhasil disimpan!");
  };

  return (
    <>
      <Period />

      <FormCard title="Rekap Survei Kesehatan Masyarakat" onSubmit={handleSubmit}>
          {/* Nama Periode */}
          <FormFieldCard label="Nama Periode">
            <div className="flex flex-col sm:flex-row gap-1 w-full sm:w-1/2">
              {/* Dropdown Triwulan */}
              <select
                name="triwulan"
                value={formData.triwulan}
                onChange={handleTriwulanChange}
                className="flex-1 bg-white rounded-md border border-gray-300 px-2 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
              >
                <option value="">Pilih Triwulan...</option>
                {triwulanOptions.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>

              {/* Dropdown Tahun */}
              <select
                name="tahun"
                value={formData.tahun}
                onChange={handleTahunChange}
                className="flex-1 bg-white rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
              >
                {tahunOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </FormFieldCard>

          {/* Periode Survey */}
          <FormFieldCard label="Periode Survey">
            <input
              type="text"
              readOnly
              value={formData.periodeSurvey}
              className="bg-gray-100 rounded-md border border-gray-300 px-3 py-2 text-gray-700 w-full sm:w-full focus:outline-none"
              placeholder="Pilih triwulan dahulu"
            />
          </FormFieldCard>

          {/* Jumlah Responden */}
          <FormFieldCard label="Jumlah Responden">
            <div className="flex gap-1 sm:w-full">
              <input
                type="numeric"
                name="respondenL"
                value={formData.respondenL}
                onChange={handleChange}
                className="bg-white rounded-md border border-gray-300 px-2 py-1 text-gray-700 sm:w-full focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
                placeholder="Laki-laki"
                />
              <input
                type="numeric"
                name="respondenP"
                value={formData.respondenP}
                onChange={handleChange}
                className="bg-white rounded-md border border-gray-300 px-2 py-1 text-gray-700 sm:w-full focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
                placeholder="Perempuan"
              />
            </div>
          </FormFieldCard>

          {/* Nilai Index */}
          <FormFieldCard label="Nilai Index (IKM)">
            <input
              type="numeric"
              name="nilaiIndex"
              step="0.01"
              value={formData.nilaiIndex}
              onChange={handleChange}
              className="bg-white rounded-md border border-gray-300 px-3 py-1 text-gray-700 sm:w-full focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
              placeholder="Contoh: 3.44"
            />
          </FormFieldCard>

          {/* Mutu Pelayanan */}
          <FormFieldCard label="Mutu Pelayanan">
            <select
              name="mutuPelayanan"
              value={formData.mutuPelayanan}
              onChange={handleChange}
              className="bg-white rounded-md border border-gray-300 px-3 py-1 text-gray-700 sm:w-full focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
              >
              <option value="">Pilih Mutu</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </FormFieldCard>

          {/* Kinerja */}
          <FormFieldCard label="Kinerja">
            <select
              name="kinerja"
              value={formData.kinerja}
              onChange={handleChange}
              className="bg-white rounded-md border border-gray-300 px-3 py-1 text-gray-700 sm:w-full focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
              >
              <option value="">Pilih Kinerja</option>
              <option value="Baik">Baik</option>
              <option value="Sangat Baik">Sangat Baik</option>
            </select>
          </FormFieldCard>

          {/* Nilai EKM */}
          <FormFieldCard label="Nilai EKM">
            <input
              type="numeric"
              name="nilaiEKM"
              step="0.01"
              value={formData.nilaiEKM}
              onChange={handleChange}
              className="bg-white rounded-md border border-gray-300 px-3 py-1 text-gray-700 sm:w-full focus:outline-none focus:ring-2 focus:ring-[#3dc8b2]"
              placeholder="Contoh: 88.92"
              />
          </FormFieldCard>

          {/* Submit Button */}
          <div className="flex w-full justify-center mt-3">
            <button
              type="submit"
              className="bg-[#008b44] hover:bg-[#00783e] transition text-white font-semibold rounded-md px-12 py-2 shadow-md"
              >
              Simpan
            </button>
          </div>
      </FormCard>

      <ResultCard title="Nilai SKM" className="text-center">
        <p className="text-2xl font-bold text-[#00783e] mt-1">97.79</p>
      </ResultCard>
    </>
  );
}
