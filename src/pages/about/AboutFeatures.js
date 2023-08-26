import React from 'react'

const AboutFeatures = () => {
  return (
    <div className="py-16 bg-white overflow-hidden m-2 shadow">
    <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
      <div>
        <span className="text-gray-700 text-lg font-semibold"></span>
        <h2 className="mt-4 text-2xl text-black text-center font-bold md:text-4xl">
          الميزات الاساسية
        </h2>
      </div>
      <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
          <div className="relative p-8 space-y-8 w-full flex flex-col items-end">
            <img
              src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
              className="w-10"
              width={512}
              height={512}
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 text-right font-medium transition group-hover:text-yellow-600">
                اضافة المكونات
              </h5>
              <p className="text-sm text-gray-600 text-right">
               يمكنك اضافة المكونات ل ايجات الوصفات التي تناسبك
              </p>
            </div>
          </div>
        </div>
        <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
          <div className="relative p-8 space-y-8 w-full flex flex-col items-end">
            <img
              src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
              className="w-10"
              width={512}
              height={512}
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 text-right font-medium transition group-hover:text-yellow-600">
                البحث عن الوصفات بلمكونات المتاحة
              </h5>
              <p className="text-sm text-gray-600 text-right">
                يمكنك اضافة الموكونات الى قائمتك لتسهيل عملة البحث عن الوصفات
              </p>
            </div>
          </div>
        </div>
        <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
          <div className="relative p-8 space-y-8 w-full flex flex-col items-end">
            <img
              src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
              className="w-10"
              width={512}
              height={512}
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 text-right font-medium transition group-hover:text-yellow-600">
                صنع الوصفات
              </h5>
              <p className="text-sm text-gray-600 text-right">
               يمكنك مشاركة الاخرين بلوصفات التي تفضلها
              </p>
            </div>
          </div>
        </div>
        <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
          <div className="relative p-8 space-y-8 w-full flex flex-col items-end    border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border ">
            <img
              src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
              className="w-10"
              width={512}
              height={512}
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl text-gray-800 text-right font-medium transition group-hover:text-yellow-600">
                سهولة التعامل مع الموقفع
              </h5>
              <p className="text-sm text-gray-600 text-right">
                الامكانية للوصول الي الوصفة بسهولة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutFeatures