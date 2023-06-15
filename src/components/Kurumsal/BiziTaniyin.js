
import React from "react";


const BiziTaniyin = () => {
  return (
    <div className="w-full lg:px-24 md:px-10 px-4 py-24">
      <div className="lg:grid flex grid-cols-3 w-full  lg:h-[540px]">
        <div className="lg:flex hidden gap-8 col-span-1 w-full   ">
          <div className="w-full flex flex-col h-full gap-8">
            <div className="w-full grid grid-cols-6  gap-8 h-1/2 ">
              <div className="col-span-4 w-full h-full flex  justify-start items-start bg-[#000E36]"></div>
              <div className="col-span-2 w-full h-full flex mt-16 justify-end items-end bg-[#000E36]"></div>
            </div>
            <div className="w-full grid grid-cols-6 gap-8 h-1/2 ">
              <div className="col-span-2 w-full h-full flex  justify-start items-start bg-[#000E36]"></div>
              <div className="col-span-4 w-full h-full flex mt-16 justify-end items-end bg-[#000E36]"></div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-2 flex flex-col lg:px-24 px-2 lg:ml-24 text-[#000E36] tracking-wide ">
            <h2 className="text-2xl  mb-1">// BİZİ TANIYIN</h2>
            <h2 className="text-5xl  font-bold lg:mb-14 md:mb-8 mb-5 ">Biz Kimiz?</h2>
            <p className=" text-xl font-semibold mb-2">Pengona Yazılım ailesi olarak, profesyonel ve yenilikçi çözümler sunarak müşteri memnuniyetini ön planda tutuyoruz. Hosting, Domain, Web tasarım yazılımı, Android/IOS mobil uygulama tasarım yazılımı ve portal gibi geniş bir hizmet yelpazesiyle müşterilerimize kapsamlı çözümler sunuyoruz.</p>
            <p className=" text-xl font-semibold">Pengona Yazılım olarak, müşterilerimizin ihtiyaçlarını anlamak ve onlara en iyi hizmeti sunmak için uzman bir ekip ile çalışıyoruz. İşimizi tutkuyla yapıyor ve en son teknolojik gelişmeleri takip ederek projelerimize yansıtıyoruz.</p>
        </div>
      </div>
    </div>
  );
};

export default BiziTaniyin;
