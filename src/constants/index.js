import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Əsas Səhifə",
  },
  {
    id: "features",
    title: "Xüsusiyyətlər",
  },
  {
    id: "product",
    title: "Məhsul",
  },
  {
    id: "clients",
    title: "Müştərilər",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Asan İmza İnteqrasiyası",
    content: "Hesabınızı Asan İmza ilə bir neçə saniyəyə yaradın və təsdiqləyin – həm təhlükəsiz, həm rahat.",
  },
  {
    id: "feature-2",
    icon: send,
    title: "Təkrar Əməliyyatlar",
    content: "Öncəki ödəniş və müraciətləri bir kliklə təkrar edə bilərsiniz – vaxtınıza qənaət edin.",
  },
 
  {
    id: "feature-3",
    icon: shield,
    title: "Aylıq Onlayn Lotereya",
    content: "Sadəcə tətbiqdən istifadə etməklə hər ay hədiyyə qazanmaq şansını əldə edin.",
  },
]
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Pul sadəcə bir vasitədir. O sizi istədiyiniz yerə aparacaq, amma sürücü rolunu sizdən ala bilməz.",
    name: "Herman Jensen",
    title: "Təsisçi və Lider",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Pul həyatı asanlaşdırır. Əgər onu əldə etmək şansınız varsa, deməli şanslısınız.",
    name: "Steve Mark",
    title: "Təsisçi və Lider",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Ən çox varlı insanlar adətən maliyyə, ticarət və beynəlxalq bizneslə məşğul olanlardır.",
    name: "Kenn Gallagher",
    title: "Təsisçi və Lider",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Aktiv İstifadəçi",
    value: "3000+",
  },
  {
    id: "stats-2",
    title: "Şirkətlərin Etibar Etdiyi",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Əməliyyat",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Faydalı Linklər",
    links: [
      {
        name: "Məzmun",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Necə işləyir",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Yarat",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Kəşf et",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Şərtlər və Xidmətlər",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "İcma",
    links: [
      {
        name: "Dəstək Mərkəzi",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partnyorlar",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Təkliflər",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Bloq",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Bülletenlər",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partnyor",
    links: [
      {
        name: "Bizim Partnyorlar",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Partnyor Ol",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
