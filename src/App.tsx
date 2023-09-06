import SalmonellaImage from "./assets/Salmonella-typhimurium.webp"
import SalmonellaImage2 from "./assets/Salmonella-typhimurium-Unlike-its-close-relative-Escherichia-coli-Salmonella-enterica.png"

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
            <a href="/learn-more" className="text-lg font-semibold underline">Learn More About Salmonella</a>
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
            <h2 className="flex text-black"><p className="text-gray-600 flex">sal<p className="text-blue-600 font-semibold text-xl">·</p>muh<p className="text-blue-600 font-semibold text-xl">·</p>neh<p className="text-blue-600 font-semibold text-xl">·</p>lah</p></h2>

            <p className="text-black mt-8 text-xl">
            There are several ways in which Salmonella can be contracted:
            <ul className="list-disc ml-6 mb-2">
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
        <div className="flex flex-row-reverse w-full h-screen px-18 py-8 space-x-6">
          <img src={SalmonellaImage2} className="rounded-lg"></img>
          <div className='w-1/2 h-full p-6 bg-white rounded-lg'>
            <h1 className="text-black font-semibold text-4xl mt-2 flex">Causes of Salmonella</h1>
            <h2 className="text-black mt-2 font-semibold">Salmonella</h2>
            <h2 className="flex text-black"><p className="text-gray-600 flex">sal<p className="text-blue-600 font-semibold text-xl">·</p>muh<p className="text-blue-600 font-semibold text-xl">·</p>neh<p className="text-blue-600 font-semibold text-xl">·</p>lah</p></h2>

            <p className="text-black mt-8 text-xl">
            There are several ways in which Salmonella can be contracted:
            <ul className="list-disc ml-6 mb-2">
              <li>Through foodborne illness</li>
              <li>Infected animals</li>
              <li>Contaminated water sources</li>
            </ul>
              Foodborne illness is the most common way that people contract Salmonella. This can happen when food is not cooked to the appropriate temperature or when cross-contamination occurs in the kitchen. Contact with infected animals, such as reptiles and poultry, can also lead to Salmonella infection. Finally, contaminated water sources can also be a source of Salmonella infection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
