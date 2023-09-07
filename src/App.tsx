import SalmonellaImage from "./assets/Salmonella-typhimurium.webp"
import SalmonellaImage2 from "./assets/Salmonella-typhimurium-Unlike-its-close-relative-Escherichia-coli-Salmonella-enterica.png"
import SalmonellaImage3 from "./assets/Scanning-electron-micrograph-of-the-Salmonella-used-in-the-inoculation-of-the-broiler.png"
import SalmonellaImage4 from "./assets/d41586-021-01749-7_19289428.jpg"
import SalmonellaImage5 from "./assets/images.jpg"

function HomePage() {
  return (
    <>
      <div className="min-h-screen flex px-4 items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">Salmonella</h1>
          <p className="text-2xl mb-8">Learn all about Salmonella and how to stay safe.</p>
          
          <div className="flex items-center justify-between">
            <div className="bg-white px-3 py-5 rounded-lg hover:shadow-lg hover:drop-shadow-md transition-transform duration-300 transform scale-95 hover:scale-105">
              <h2 className="text-3xl text-blue-500 font-semibold mb-4">What is Salmonella?</h2>
              <p className="text-lg text-gray-800">
                Salmonella is a type of bacteria that can cause food poisoning. It's important to know how to prevent it and what to do if you get sick.
              </p>
            </div>
            
            <div className="bg-white px-3 py-5 rounded-lg hover:shadow-lg hover:drop-shadow-md transition-transform duration-300 transform scale-95 hover:scale-105">
              <h2 className="text-3xl text-blue-500 font-semibold mb-4">Staying Safe</h2>
              <p className="text-lg text-gray-800">
              Wash your hands, cook food thoroughly, and avoid cross-contamination to reduce the risk of Salmonella infection.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="#what-is-salmonellas" className="text-lg font-semibold underline">Learn More About Salmonella</a>
          </div>
        </div>
      </div>
      <div id="what-is-salmonella" className="min-h-screen flex px-4 items-center justify-center bg-gradient-to-b from-blue-700 to-blue-500 text-white">
        <div className="flex w-full h-screen px-18 py-8 space-x-6">
          <div className='w-1/2 h-full p-6 bg-white rounded-lg'>
            <h1 className="text-black font-semibold text-4xl mt-2 flex">What is Salmonella <p className="text-blue-600 ml-1">?</p></h1>
            <h2 className="text-black mt-2 font-semibold">Salmonella</h2>
            <h2 className="flex text-black mt-1"><p className="text-gray-600">/ˌsalməˈnelə/</p> <p className="text-blue-600 ml-1">noun</p></h2>

            <p className="text-black mt-8 text-2xl">
            Salmonella is a type of bacteria that can cause foodborne illnesses in humans. It is commonly found in raw poultry, eggs, and other foods of animal origin. 
            </p>
          </div>
          <img src={SalmonellaImage} className="rounded-lg"></img>
        </div>
      </div>
      <div className="min-h-screen flex px-4 items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 text-white">
        <div className="flex w-full h-screen px-18 py-8 space-x-6">
          <img src={SalmonellaImage2} className="rounded-lg"></img>
          <div className='w-1/2 h-full p-6 bg-white rounded-lg'>
            <h1 className="text-black font-semibold text-4xl mt-2 flex">Causes of Salmonella</h1>
            <h2 className="text-black mt-2 font-semibold">Salmonella</h2>
            <h2 className="flex text-black"><p className="text-gray-600 flex">sal<p className="text-blue-600 font-semibold text-xl">·</p>muh<p className="text-blue-600 font-semibold text-xl">·</p>neh<p className="text-blue-600 font-semibold text-xl">·</p>lah</p><p className="text-blue-600 ml-1">noun</p></h2>

            <p className="text-black mt-8 text-xl">
            There are several ways in which Salmonella can be contracted:
            <ul className="list-disc  marker:text-blue-600 ml-6 mb-2">
              <li>Through foodborne illness</li>
              <li>Infected animals</li>
              <li>Contaminated water sources</li>
            </ul>
              Foodborne illness is the most common way that people contract Salmonella. This can happen when food is not cooked to the appropriate temperature or when cross-contamination occurs in the kitchen. Contact with infected animals, such as reptiles and poultry, can also lead to Salmonella infection. Finally, contaminated water sources can also be a source of Salmonella infection.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex px-4 items-center justify-center bg-gradient-to-b from-blue-700 to-blue-600 text-white">
        <div className="flex w-full h-screen px-18 py-8 space-x-6">
          <div className='w-1/2 h-full p-6 bg-white rounded-lg'>
            <h1 className="text-black font-semibold text-4xl mt-2 flex">Symptoms of Salmonella</h1>
            <h2 className="text-black mt-2 font-semibold">Salmonella</h2>
            <h2 className="flex text-black"><p className="text-gray-600 flex">sal<p className="text-blue-600 font-semibold text-xl">·</p>muh<p className="text-blue-600 font-semibold text-xl">·</p>neh<p className="text-blue-600 font-semibold text-xl">·</p>lah</p><p className="text-blue-600 ml-1">noun</p></h2>

            <p className="text-black mt-8 text-xl">
            Salmonella has several common symptoms such as:
            <ul className="list-disc  marker:text-blue-700 ml-6 mb-2">
              <li>Fever</li>
              <li>Abdominal Cramps</li>
              <li>Nausea</li>
              <li>Vomiting</li>
            </ul>
            While most people recover from Salmonella without treatment, it is important to seek medical attention if symptoms persist or worsen. This is especially true for individuals with weakened immune systems, such as children, elderly adults, and those with chronic illnesses.            </p>
          </div>
          <img src={SalmonellaImage3} className="rounded-lg"></img>

        </div>
      </div>
      <div className="min-h-screen flex px-4 items-center justify-center bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="flex w-full h-screen px-18 py-8 space-x-6">
          <img src={SalmonellaImage4} className="rounded-lg"></img>
          <div className='w-1/2 h-full p-6 bg-white rounded-lg'>
            <h1 className="text-black font-semibold text-4xl mt-2 flex">Treatment Of Salmonella</h1>
            <h2 className="text-black mt-2 font-semibold">Salmonella</h2>
            <h2 className="flex text-black"><p className="text-gray-600 flex">sal<p className="text-blue-600 font-semibold text-xl">·</p>muh<p className="text-blue-600 font-semibold text-xl">·</p>neh<p className="text-blue-600 font-semibold text-xl">·</p>lah</p><p className="text-blue-600 ml-1">noun</p></h2>

            <p className="text-black mt-8 text-2xl">
            The most common treatment for Salmonella is the use of antibiotics, which can help to reduce the severity and duration of symptoms. In addition to antibiotics, patients may also require rehydration therapy, as diarrhea and vomiting can lead to dehydration.
It is important to seek medical attention if you suspect you have contracted Salmonella, as untreated infections can lead to serious complications such as bloodstream infections and meningitis.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex px-4 items-center justify-center bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="flex w-full h-screen px-18 py-8 space-x-6">
          <div className='w-1/2 h-full p-6 bg-white rounded-lg'>
            <h1 className="text-black font-semibold text-4xl mt-2 flex">Prevention of Salmonella</h1>
            <h2 className="text-black mt-2 font-semibold">Salmonella</h2>
            <h2 className="flex text-black"><p className="text-gray-600 flex">sal<p className="text-blue-600 font-semibold text-xl">·</p>muh<p className="text-blue-600 font-semibold text-xl">·</p>neh<p className="text-blue-600 font-semibold text-xl">·</p>lah</p><p className="text-blue-600 ml-1">noun</p></h2>

            <p className="text-black mt-8 text-2xl">
            One of the most effective ways to prevent Salmonella is to practice good hygiene. This includes washing your hands thoroughly with soap and water before and after handling food, using the bathroom, or coming into contact with animals.
It's also important to cook food to the appropriate temperature to kill any potential bacteria. Use a food thermometer to ensure that meat, poultry, and eggs are cooked to the proper internal temperature. And be sure to avoid cross-contamination by keeping raw meat separate from other foods and using different cutting boards and utensils for each.

            </p>
          </div>
          <img src={SalmonellaImage5} className="rounded-lg"></img>
        </div>
      </div>
    </>
  );
}

export default HomePage;
