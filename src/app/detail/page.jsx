export default function Detail() {
    return (
        <div className="px-4 lg:px-8 mb-10">
            <div className="flex justify-center items-center w-full max-w-6xl mx-auto pt-10">
                <img
                    className="w-full h-auto object-cover rounded-3xl shadow-lg"
                    src="./detail-web-1.png"
                    alt="Project Detail"
                />
            </div>

            <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                        Project Overview
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Website ini merupakan bagian dari proyek Assessment dari SMK Taruna Bhakti. <a href="#" className="text-blue-600 hover:underline font-medium">LookSy</a> adalah platform e-commerce modern yang dirancang untuk memberikan pengalaman berbelanja online yang mudah dan menyenangkan. Di halaman utama, kamu akan menemukan berbagai fitur unggulan seperti katalog produk yang terorganisir dengan baik, sistem keranjang belanja yang intuitif, serta tampilan produk dengan foto berkualitas tinggi dan deskripsi yang detail.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Website ini dilengkapi dengan sistem checkout yang aman, integrasi pembayaran digital, dan dashboard untuk manajemen pesanan. Desain responsif memastikan pengalaman berbelanja yang optimal di semua perangkat, dari desktop hingga smartphone. Dengan navigasi yang user-friendly dan loading speed yang cepat, <a href="#" className="text-blue-600 hover:underline font-medium">LookSy</a> memberikan solusi e-commerce yang komprehensif untuk kebutuhan bisnis online modern.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                        Tools Used
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                        Project ini dibangun menggunakan teknologi modern untuk menciptakan pengalaman pengguna yang optimal dan performa yang cepat.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 bg-cyan-50 text-cyan-600 border-cyan-200 transition-transform duration-200 hover:scale-105 hover:shadow-md">
                            <img className="w-10 h-10 rounded-full" src="./tailwind-css.png" alt="" />
                            <span className="font-semibold text-sm sm:text-base">
                                Tailwind CSS
                            </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 bg-orange-50 text-orange-600 border-orange-200 transition-transform duration-200 hover:scale-105 hover:shadow-md">
                            <img className="w-8 h-8" src="./html.png" alt="" />
                            <span className="font-semibold text-sm sm:text-base">
                                HTML5
                            </span>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 bg-yellow-50 text-yellow-600 border-yellow-200 transition-transform duration-200 hover:scale-105 hover:shadow-md">
                            <img className="w-10 h-10" src="./javascript.png" alt="" />
                            <span className="font-semibold text-sm sm:text-base">
                                JavaScript
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}