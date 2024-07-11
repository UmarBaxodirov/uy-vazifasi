const btns = document.querySelectorAll('.btn')
const text1 = document.querySelector('.home1')
const text2 = document.querySelector('.home2')
const text3 = document.querySelector('.home3')
const text4 = document.querySelector('.home4')
const text5 = document.querySelector('.home5')
const text6 = document.querySelector('.home6')
const text7 = document.querySelector('.home7')
const text8 = document.querySelector('.home8')
const text9 = document.querySelector('.home9')
const text10 = document.querySelector('.home10')
const text11 = document.querySelector('.home11')
const text12 = document.querySelector('.home12')
const text13 = document.querySelector('.home13')
const text14 = document.querySelector('.home14')
const text15 = document.querySelector('.home15')
const text16 = document.querySelector('.home16')
const text17 = document.querySelector('.home17')
const text18 = document.querySelector('.home18')
const text19 = document.querySelector('.home19')
const text20 = document.querySelector('.home20')
const text21 = document.querySelector('.home21')
const text22 = document.querySelector('.home22')
const text23 = document.querySelector('.home23')
const text24 = document.querySelector('.home24')
const text25 = document.querySelector('.home25')
const text26 = document.querySelector('.home26')
const text27 = document.querySelector('.home27')
const text28 = document.querySelector('.home28')
const text29 = document.querySelector('.home29')
const text30 = document.querySelector('.home30')
const text31 = document.querySelector('.home31')
const text32 = document.querySelector('.home32')


btns.forEach(e => {
   e.addEventListener('click', () => {
    const til = e.getAttribute("lang")
    text1.textContent = translate[til].text1
    text2.textContent = translate[til].text2
    text3.textContent = translate[til].text3
    text4.textContent = translate[til].text4
    text5.textContent = translate[til].text5
    text6.textContent = translate[til].text6
    text7.textContent = translate[til].text7
    text8.textContent = translate[til].text8
    text9.textContent = translate[til].text9
    text10.textContent = translate[til].text10
    text11.textContent = translate[til].text11
    text12.textContent = translate[til].text12
    text13.textContent = translate[til].text13
    text14.textContent = translate[til].text14
    text15.textContent = translate[til].text15
    text16.textContent = translate[til].text16
    text17.textContent = translate[til].text17
    text18.textContent = translate[til].text18
    text19.textContent = translate[til].text19
    text20.textContent = translate[til].text20
    text21.textContent = translate[til].text21
    text22.textContent = translate[til].text22
    text23.textContent = translate[til].text23
    text24.textContent = translate[til].text24
    text25.textContent = translate[til].text25
    text26.textContent = translate[til].text26
    text27.textContent = translate[til].text27
    text28.textContent = translate[til].text28
    text29.textContent = translate[til].text29
    text30.textContent = translate[til].text30
    text31.textContent = translate[til].text31
    text32.textContent = translate[til].text32
   })
});

var translate = {
    uz: {
      text1: "UY",
      text2: "BIZ HAQIMIZDA",
      text3: "REJANGIZNI TUZING",
      text4: "Ajoyib kofe oddiy qilingan!",
      text5: "Ertalabki dunyoning eng yaxshi qahvalari bilan boshlang. Sizning jadvalingiz bo'yicha to'g'ridan-to'g'ri eshigingizga etkazib beriladigan eng yaxshi qovuruvchilarimizdan tayyorlangan hunarmand qahvalarimizni sinab ko'ring.",
      text6: "REJANGIZNI TUZING",
      text7: "Ajoyib espresso",
      text8: "Kuchli tajriba uchun kakao va qora murch bilan engil va xushbo'y aralash",
      text9: "Tog'li",
      text10: "To'yingan va baxmal tanasi, meva va yong'oqlarning ishoralari bilan braziliyalik quyuq qovurilgan",
      text11: "Kichik",
      text12: "Qovurilgan bodom va quritilgan olcha notalarini o'z ichiga olgan yumshoq va silliq aralash",
      text13: "Ular sizga beradi",
      text14: "Efiopiya qo'lda yig'ib olingan aralashmasi jonli meva notalari bilan zich o'ralgan",
      text15: "Nega bizni tanlaysiz?",
      text16: "Bizning rolimizning katta qismi qaysi kofelar namoyish etilishini tanlashdir bizning assortimentimizda. Bu berish uchun eng yaxshi qahva ishlab chiqaruvchilari bilan yaqindan ishlashni anglatadi siz har bir darajada yanada ta'sirli tajribaga ega bo'lasiz.",
      text17: "Eng yaxshi sifat",
      text18: "Bizning qovuruvchilarimizdan dunyodagi eng yaxshi hunarmand qahvalarining cheksiz xilma-xilligini kashf eting.",
      text19: "Eksklyuziv imtiyozlar",
      text20: "Obuna bo'lganingizda maxsus takliflar va sovg'alar, shu jumladan birinchi jo'natishingiz uchun 30% chegirma.",
      text21: "Yetkazib berish bepul",
      text22: "Biz xarajatlarni qoplaymiz va qahva tez yetkazib beriladi. Eng yuqori tazelik: kafolatlangan.",
      text23: "U qanday ishlaydi",
      text24: "01",
      text25: "Qahvangizni tanlang",
      text26: "Bizning rivojlanayotgan hunarmand qahvalarimizdan tanlang. Bizning loviyalarimiz axloqiy jihatdan olinadi va biz adolatli to'laymiz ular uchun narxlar. Hammasida yangi kofelar bor har oy sinash uchun profillar.",
      text27: "02",
      text28: "Chastotani tanlang",
      text29: "Buyurtma chastotasini, miqdorini, hatto sozlang qovurish uslubingiz va maydalash turi. To'xtatib turish, o'tkazib yuborish yoki obunani hech qanday majburiyatsiz bekor qiling onlayn portalimiz orqali.",
      text30: "03",
      text31: "Qabul qiling va zavqlaning!",
      text32: "Biz sizning paketingizni 48 soat ichida yangi holda jo'natamiz qovurilgan. Orqaga o'tiring va mukofotga sazovor bo'lgan dunyodan zavqlaning - o'ziga xos ta'mni ta'minlash uchun tayyorlangan kofe sinflari tajriba."
    },
    english: {
      text1: "HOME",
      text2: "ABOUT",
      text3: "CREATE YOUR PLAN",
      text4: "Great coffee made simple!",
      text5: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
      text6: "Create your plan",
      text7: "Gran Espresso",
      text8: "Light and flavorful blend with cocoa and black pepper for an intense experience",
      text9: "Planalto",
      text10: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
      text11: "Piccollo",
      text12: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
      text13: "Danche",
      text14: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
      text15: "Why choose us?",
      text16: "A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level",
      text17: "Best quality",
      text18: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
      text19: "Exclusive benefits",
      text20: "Special offers and swag when you subscribe, including 30% off your first shipment.",
      text21: "Free shipping",
      text22: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
      text23: "How it works",
      text24: "01",
      text25: "Pick your coffee",
      text26: "Select from our evolving range of artisan coffees Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
      text27: "02",
      text28: "Choose the frequency",
      text29: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
      text30: "03",
      text31: "Receive and enjoy!",
      text32: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
    }
  }