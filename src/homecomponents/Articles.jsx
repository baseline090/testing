import React from 'react'

const Articles = () => {
  return (
  <>
  <section className="py-8">
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Read top articles from health experts</h2>
            <p className="text-gray-700">Health articles that keep you informed about good health practices and achieve your goals.</p>
            <button className="mt-6 inline-flex items-center px-6 py-3 text-white buttoncolor rounded-lg  focus:outline-none focus:ring-4 focus:ring-blue-300">
                See all articles
            </button>
        </div>
       
        <div className="flex flex-wrap -mx-4">
     
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src="./coronavirus.jpg" alt="Article Image"/>
                    <div className="p-6">
                        <h3 className="text-gray-800 text-lg font-semibold mb-2">Coronavirus</h3>
                        <p className="text-gray-600 text-sm font-medium mb-4">12 Coronavirus Myths and Facts That You Should Be Aware Of</p>
                        <p className="text-gray-700 text-sm">Dr. Diana Borgio</p>
                    </div>
                </div>
            </div>
         
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src="./health.jpg" alt="Article Image"/>
                    <div className="p-6">
                        <h3 className="text-gray-800 text-lg font-semibold mb-2">Vitamins and Supplements</h3>
                        <p className="text-gray-600 text-sm mb-4 font-medium">Eating Right to Build Immunity Against Cold and Viral Infections</p>
                        <p className="text-gray-700 text-sm">Dr. Diana Borgio</p>
                    </div>
                </div>
            </div>
            
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src="./doctor.jpg" alt="Article Image"/>
                    <div className="p-6">
                        <h3 className="text-gray-800 text-lg font-semibold mb-2">Health Tips</h3>
                        <p className="text-gray-600 text-sm mb-4 font-medium">Top 10 Tips to Stay Healthy and Fit During Winter</p>
                        <p className="text-gray-700 text-sm">Dr. John Doe</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  </>
  )
}

export default Articles