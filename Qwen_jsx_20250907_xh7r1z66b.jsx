import React from 'react';

const App = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Jual Beli Lira Turki <br /> dengan Aman & Terpercaya
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Lebih cepat, mudah, dan hemat dibanding beli di bandara atau bank.
            </p>
            <a 
              href="https://t.me/LiraKuBot" 
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Mulai Transaksi Sekarang
            </a>
          </div>
          <div className="flex-1">
            <img 
              src="https://placehold.co/600x500/60A5FA/FFFFFF?text=LiraKu+Exchange" 
              alt="LiraKu Exchange" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Mengapa Memilih LiraKu.id?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-blue-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Tersedia 24/7</h3>
              <p className="text-gray-600">Layanan kami siap melayani Anda kapan saja, tanpa batas waktu operasional.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-blue-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Proses 5 Menit</h3>
              <p className="text-gray-600">Transaksi cepat dan efisien, selesai dalam hitungan menit.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-blue-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Kurs Real-time</h3>
              <p className="text-gray-600">Dapatkan kurs terbaik dengan update harga secara real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Kerja Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Cara Kerja</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">1️⃣</div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Klik tombol transaksi</h3>
                <p className="text-gray-600">Mulai transaksi dengan mengklik tombol dan terhubung ke bot Telegram kami.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">2️⃣</div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Masukkan nominal & data</h3>
                <p className="text-gray-600">Isi informasi yang diperlukan seperti nominal dan detail transaksi Anda.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">3️⃣</div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Transfer ke rekening</h3>
                <p className="text-gray-600">Lakukan transfer ke rekening yang ditentukan sesuai instruksi.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">4️⃣</div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Terima Lira/Rupiah</h3>
                <p className="text-gray-600">Dana akan segera diproses dan dikirimkan ke akun Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Testimoni Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Ahmad R.</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"Prosesnya sangat cepat! Dalam 5 menit sudah selesai. Sangat direkomendasikan!"</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Siti N.</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"Kursnya lebih baik dari bank dan prosesnya sangat mudah melalui Telegram."</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">B</div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Budi S.</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"Pelayanan 24 jam sangat membantu saya yang sering transaksi di malam hari."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Kedua */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Siap mulai transaksi aman & cepat?</h2>
          <a 
            href="https://t.me/LiraKuBot" 
            className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            🚀 Mulai Transaksi Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-white">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">LiraKu.id</div>
        </div>
      </footer>
    </div>
  );
};

export default App;