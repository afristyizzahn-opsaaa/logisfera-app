import React from "react";

export default function Admin() {
  return (
    <div>
      <h2 className="text-2xl mb-3">Admin Panel</h2>
      <div className="bg-white p-4 rounded shadow-sm text-xs leading-relaxed">
        <p className="mb-2">
          Ini adalah halaman <strong>Admin</strong> sederhana sebagai placeholder.  
          Di versi lanjut, kamu bisa tambahkan fitur:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Melihat hasil quiz siswa</li>
          <li>Menambahkan soal baru</li>
          <li>Mengedit data materi (Learning Path)</li>
        </ul>
        <p className="mt-3 text-gray-500">
          Untuk prototype LKTI, halaman ini berfungsi sebagai simulasi tampilan admin.
        </p>
      </div>
    </div>
  );
}
