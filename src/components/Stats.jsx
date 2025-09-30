import React from 'react'

const Stats = () => {
  return (
    <section className=" text-white py-12 px-4 md:px-20">
      <div className="w-full mx-4 space-y-10">
        <h2 className="text-2xl ss:text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Haqqımızda
        </h2>

        <p className="text-base ss:text-lg leading-relaxed text-gray-300">
          <span className="font-bold text-white"> <span className="text-gradient">JSM Solutions </span> </span> —
          <span className="font-bold text-center bg-gradient-to-r from-green-600 via-green-300 to-white text-transparent bg-clip-text">
            texnologiya və idarəetmənin kəsişməsində yaranmış,
          </span>  innovativ həllər təqdim edən müasir şirkətdir. Komandamız proqram təminatı sahəsində ixtisaslaşmış gənc və dinamik developerlərdən, həmçinin audit, risk idarəetməsi, daxili nəzarətlərin qurulması və biznes proseslərinin optimizasiyası üzrə çoxillik təcrübəyə malik ekspert və layihə rəhbərlərindən ibarətdir.
        </p>

        <p className="text-base ss:text-lg leading-relaxed text-gray-300">
          Bizim əsas məqsədimiz — müəssisələrə effektiv işləmək, resurslara qənaət etmək və idarəetməni gücləndirmək üçün real, tətbiq edilə bilən və dayanıqlı həllər təqdim etməkdir.
        </p>

        <p className="text-base ss:text-lg leading-relaxed text-gray-300">
          Bu məqsədlə yaratdığımız <span className="font-semibold text-white">Easy Business</span> platforması — xüsusilə kiçik və orta sahibkarların, ticarət nöqtələrinin və distribütorların gündəlik əməliyyatlarını asanlaşdırmaq üçün hazırlanıb. Platforma sizə aşağıdakı imkanları təqdim edir:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4 text-sm ss:text-base">
          <li>Satış və sifariş proseslərinin tam izlənməsi</li>
          <li>Əməkdaşlar arasında real vaxtda qarşılıqlı əlaqə</li>
          <li>Xərclərin və risklərin azalması</li>
          <li>Müştəri məmnuniyyətinin artırılması</li>
          <li>Prosesi avtomatlaşdırmaqla vaxt və resurslara qənaət</li>
          <li>Kağız və yanacaq istifadəsinin azaldılması ilə ekoloji təsirin minimuma endirilməsi</li>
        </ul>

        <p className="text-lg leading-relaxed text-gray-300">
          <span className="text-gradient font-bold">Easy Business </span> — yalnız bir  <span className="font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            ERP
          </span> aləti deyil, həm də biznesinizin rəqəmsal izini yaradan güclü platformadır. İstəyimiz odur ki, hər bir əməkdaş, rəhbər və distribütor öz işini daha rahat və şəffaf şəkildə qura bilsin.
        </p>


        <p className="text-lg ss:text-xl font-semibold text-white text-center mt-8">
          <span className="text-gradient">Easy Business </span> -lə Biznesiniz  <span className="font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            easy
          </span> olacaq! 😉
        </p>

        <div className="border-t border-gray-700 pt-6 text-center space-y-2">
          <p className="text-white font-medium">Əlaqə: <a href="tel:+994559009200" className="underline">(+994 55 900 92 00)</a></p>
          <p className="text-white font-medium">Email: <a href="mailto:office@easybusiness.az" className="underline">office@easybusiness.az</a></p>
        </div>
      </div>
    </section>
  )
}

export default Stats
