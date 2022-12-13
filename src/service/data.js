const catalog = [
  {
    id: 1,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/texnika_dlya_doma.svg",
    title: "Maishiy texnika",
  },
  {
    id: 2,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/ofisnaya_texnika.svg",
    title: "Ofis jixozlari",
  },
  {
    id: 3,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/texnika_dlya_kuxni.svg",
    title: "Oshxona uchun texnika",
  },
  {
    id: 4,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/posuda_dlya_doma.svg",
    title: "Uy uchun idishlar",
  },
  {
    id: 5,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/tovar_dlya_avto.svg",
    title: "Avtomobil uchun mahsulotlar",
  },
  {
    id: 6,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/klimaticheskaya_texnika.svg",
    title: "Iqlim texnikasi",
  },
  {
    id: 7,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/televizori_i_telekarti.svg",
    title: "Televizorlar va telefonlar",
  },
  {
    id: 8,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/telefoni_i_gatjeti.svg",
    title: "Telefonlar va gadjetlar",
  },
  {
    id: 9,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/komputernaya_texnika.svg",
    title: "Kompyuter texnikasi",
  },
  {
    id: 10,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/audiotexnika_i_hifi.svg",
    title: "Audio texnika va  Hi-Fi",
  },
  {
    id: 11,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/krasota_i_zdorove.svg",
    title: "Go'zallik va salomatlik",
  },
  {
    id: 12,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/tovati_dlya_detey.svg",
    title: "Bolalar uchun mahsulotlar",
  },
  {
    id: 13,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/foto_i_video.svg",
    title: "Rasmlar va videolar",
  },
  {
    id: 14,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/igroviye_pristavki.svg",
    title: "Oýin konsollari",
  },
  {
    id: 15,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/tovari_dlya_doma.svg",
    title: "Maishiy mahsulotlar",
  },
  {
    id: 16,
    img: "https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/aksii_i_skidki.svg",
    title: "Aksiya va chegirmalar",
  },
];

const information = [
  {
    id: 1,
    title: "TIKUV MASHINALARI",
  },
  {
    id: 1,
    text: "chayka",
  },
  {
    id: 1,
    text: "Aurora",
  },
  {
    id: 1,
    text: "Janome",
  },
  {
    id: 1,
    text: "Bernette",
  },
  {
    id: 1,
    text: "Оверлоки",
  },
  {
    id: 1,
    text: "Швейные наборы",
  },
  {
    id: 1,
    title: "KIYIM QURITKICHLAR",
  },
  {
    id: 1,
    title: "YUVISH VOSITASI",
  },
  {
    id: 1,
    title: "CHIM O'RGICH",
  },
  {
    id: 1,
    text: "Садовые триммеры",
  },
  {
    id: 1,
    text: "Бензиновые газонокосилки",
  },
  {
    id: 1,
    text: "Электрические газонокосилки",
  },
  {
    id: 1,
    text: "Аккумуляторные газонокосилки",
  },
  {
    id: 1,
    text: "",
  },

  {
    id: 2,
    title: "OFIS NOUTBUKLARI",
  },
  {
    id: 2,
    title: "SHAXSIY KOMPYUTERLAR",
  },
  {
    id: 2,
    title: "PRINTERLAR",
  },
  {
    id: 2,
    text: "Принтеры от HP",
  },
  {
    id: 2,
    title: "OFIS MONITORLARI",
  },
  {
    id: 2,
    title: "PROEKTORLAR",
  },
  {
    id: 2,
    title: "SUV SOVUTGICHILAR",
  },
  {
    id: 2,
    title: "OFIS MEBELI",
  },
];

const data = [
  {
    category: {
      id: 33,
      title: "Швейные машинки",
      small_front_icon: "",
      mobile_icon: "",
      image: "/files/global/icons/75.png",
      slug: "shveinya-mashina",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 470,
        title: "Chayka",
        slug: "shvejnye-mashinki-chayka",
        detailUrl:
          "/api/application/product/category?id=shvejnye-mashinki-chayka",
        productsCount: "11",
      },
      {
        id: 924,
        title: "Aurora",
        slug: "shvenie-mashinki-aurora",
        detailUrl:
          "/api/application/product/category?id=shvenie-mashinki-aurora",
        productsCount: "5",
      },
      {
        id: 469,
        title: "Janome",
        slug: "shvejnye-mashinki-janome",
        detailUrl:
          "/api/application/product/category?id=shvejnye-mashinki-janome",
        productsCount: "10",
      },
      {
        id: 789,
        title: "Bernette",
        slug: "shvejnye-mashiny-bernette",
        detailUrl:
          "/api/application/product/category?id=shvejnye-mashiny-bernette",
        productsCount: "4",
      },
      {
        id: 787,
        title: "Оверлоки",
        slug: "shvejnaya-mashinka",
        detailUrl: "/api/application/product/category?id=shvejnaya-mashinka",
        productsCount: "30",
      },
      {
        id: 471,
        title: "Швейные наборы",
        slug: "nabory-shvejnye",
        detailUrl: "/api/application/product/category?id=nabory-shvejnye",
        productsCount: "12",
      },
    ],
  },
  {
    category: {
      id: 37,
      title: "Сушилки для белья",
      small_front_icon: "",
      mobile_icon: "",
      image: "/files/global/icons/34.png",
      slug: "sushilka-dlya-belya",
      hasSubCategory: false,
    },
    subArray: [],
  },
  {
    category: {
      id: 36,
      title: "Моющее средства",
      small_front_icon: "",
      mobile_icon: "",
      image: "/files/global/icons/32.png",
      slug: "moyushchee-sredstvo",
      hasSubCategory: false,
    },
    subArray: [],
  },
  {
    category: {
      id: 34,
      title: "Газонокосилки",
      small_front_icon: "",
      mobile_icon: "",
      image: "/files/global/icons/30.png",
      slug: "gazonokosilka",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 939,
        title: "Садовые триммеры",
        slug: "sadovye-trimmery",
        detailUrl: "/api/application/product/category?id=sadovye-trimmery",
        productsCount: "1",
      },
      {
        id: 938,
        title: "Бензиновые газонокосилки",
        slug: "benzinovye-gazonokosilki",
        detailUrl:
          "/api/application/product/category?id=benzinovye-gazonokosilki",
        productsCount: "0",
      },
      {
        id: 936,
        title: "Электрические газонокосилки",
        slug: "ehlektricheskie-gazonokosilki",
        detailUrl:
          "/api/application/product/category?id=ehlektricheskie-gazonokosilki",
        productsCount: "1",
      },
      {
        id: 937,
        title: "Аккумуляторные газонокосилки",
        slug: "akkumulyatornye-gazonokosilki",
        detailUrl:
          "/api/application/product/category?id=akkumulyatornye-gazonokosilki",
        productsCount: "0",
      },
    ],
  },
  {
    category: {
      id: 35,
      title: "Гладильные доски",
      small_front_icon: "",
      mobile_icon: "",
      image: "/files/global/icons/31.png",
      slug: "Gladilnaja-doska",
      hasSubCategory: false,
    },
    subArray: [],
  },
  {
    category: {
      id: 276,
      title: "Парогенераторы",
      small_front_icon: "",
      mobile_icon: "",
      image:
        "/files/global/icons/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB_%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B4%D0%BE%D0%BC%D0%B0_%D0%9F%D0%B0%D1%80%D0%BE%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80.png",
      slug: "parogenerator",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 782,
        title: "Электрические парогенераторы",
        slug: "parogenirator",
        detailUrl: "/api/application/product/category?id=parogenirator",
        productsCount: "37",
      },
      {
        id: 466,
        title: "Парогенераторы Rowenta",
        slug: "parogeneratory-rowenta",
        detailUrl:
          "/api/application/product/category?id=parogeneratory-rowenta",
        productsCount: "2",
      },
      {
        id: 468,
        title: "Парогенераторы Philips",
        slug: "parogeneratory-philips",
        detailUrl:
          "/api/application/product/category?id=parogeneratory-philips",
        productsCount: "12",
      },
      {
        id: 465,
        title: "Парогенераторы Braun",
        slug: "parogeneratory-braun",
        detailUrl: "/api/application/product/category?id=parogeneratory-braun",
        productsCount: "12",
      },
      {
        id: 467,
        title: "Парогенераторы Bosch",
        slug: "parogeneratory-bosch",
        detailUrl: "/api/application/product/category?id=parogeneratory-bosch",
        productsCount: "2",
      },
      {
        id: 464,
        title: "Парогенераторы Tefal",
        slug: "parogeneratory-tefal",
        detailUrl: "/api/application/product/category?id=parogeneratory-tefal",
        productsCount: "9",
      },
    ],
  },
  {
    category: {
      id: 275,
      title: "Вертикальный отпариватель",
      small_front_icon: "",
      mobile_icon: "",
      image:
        "/files/global/icons/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB_%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B4%D0%BE%D0%BC%D0%B0_%D0%92%D0%B5%D1%80%D1%82%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BE%D1%82%D0%BF%D0%B0%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C.png",
      slug: "vertikalnyj-otparivatel",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 783,
        title: "Отпариватели для одежды",
        slug: "otparivatel",
        detailUrl: "/api/application/product/category?id=otparivatel",
        productsCount: "42",
      },
      {
        id: 784,
        title: "Ручные отпариватели",
        slug: "ruchnoj-otparivatel",
        detailUrl: "/api/application/product/category?id=ruchnoj-otparivatel",
        productsCount: "10",
      },
      {
        id: 472,
        title: "Отпариватели Philips",
        slug: "vertikalnyj-otparivatel-philips",
        detailUrl:
          "/api/application/product/category?id=vertikalnyj-otparivatel-philips",
        productsCount: "19",
      },
      {
        id: 473,
        title: "Отпариватели Polaris",
        slug: "vertikalnyj-otparivatel-polaris",
        detailUrl:
          "/api/application/product/category?id=vertikalnyj-otparivatel-polaris",
        productsCount: "5",
      },
      {
        id: 474,
        title: "Отпариватели Tefal",
        slug: "vertikalnyj-otparivatel-tefal",
        detailUrl:
          "/api/application/product/category?id=vertikalnyj-otparivatel-tefal",
        productsCount: "12",
      },
    ],
  },
  {
    category: {
      id: 7,
      title: "Утюги",
      small_front_icon: "",
      mobile_icon: "",
      image: "/files/global/icons/5.png",
      slug: "utyugi",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 960,
        title: "Беспроводные утюги",
        slug: "besprovodnye-utyugi",
        detailUrl: "/api/application/product/category?id=besprovodnye-utyugi",
        productsCount: "4",
      },
      {
        id: 963,
        title: "Гладильная система",
        slug: "gladilnaya-sistema",
        detailUrl: "/api/application/product/category?id=gladilnaya-sistema",
        productsCount: "0",
      },
      {
        id: 961,
        title: "Дорожные утюги",
        slug: "dorozhnye-utyugi",
        detailUrl: "/api/application/product/category?id=dorozhnye-utyugi",
        productsCount: "0",
      },
      {
        id: 962,
        title: "Проводной утюг",
        slug: "provodnye-utyugi",
        detailUrl: "/api/application/product/category?id=provodnye-utyugi",
        productsCount: "12",
      },
      {
        id: 779,
        title: "Паровые утюги",
        slug: "parovye-utyugi",
        detailUrl: "/api/application/product/category?id=parovye-utyugi",
        productsCount: "116",
      },
      {
        id: 453,
        title: "Утюги Panasonic",
        slug: "panasonic-utyugi",
        detailUrl: "/api/application/product/category?id=panasonic-utyugi",
        productsCount: "2",
      },
      {
        id: 456,
        title: "Утюги Rowenta",
        slug: "utyugi-rowenta",
        detailUrl: "/api/application/product/category?id=utyugi-rowenta",
        productsCount: "0",
      },
      {
        id: 458,
        title: "Утюги Gorenje",
        slug: "gorenje-utyugi",
        detailUrl: "/api/application/product/category?id=gorenje-utyugi",
        productsCount: "4",
      },
      {
        id: 461,
        title: "Утюги Shivaki",
        slug: "shivaki-utyugi",
        detailUrl: "/api/application/product/category?id=shivaki-utyugi",
        productsCount: "7",
      },
      {
        id: 460,
        title: "Утюги Philips",
        slug: "philips-utyugi",
        detailUrl: "/api/application/product/category?id=philips-utyugi",
        productsCount: "27",
      },
      {
        id: 459,
        title: "Утюги Polaris",
        slug: "polaris-utyugi",
        detailUrl: "/api/application/product/category?id=polaris-utyugi",
        productsCount: "10",
      },
      {
        id: 452,
        title: "Утюги Bosch",
        slug: "utyugi-bosch",
        detailUrl: "/api/application/product/category?id=utyugi-bosch",
        productsCount: "3",
      },
      {
        id: 457,
        title: "Утюги Braun",
        slug: "braun-utyugi",
        detailUrl: "/api/application/product/category?id=braun-utyugi",
        productsCount: "16",
      },
      {
        id: 454,
        title: "Утюги VITEK ",
        slug: "utyugi-vitek",
        detailUrl: "/api/application/product/category?id=utyugi-vitek",
        productsCount: "11",
      },
      {
        id: 463,
        title: "Утюги Neos",
        slug: "neos-utyugi",
        detailUrl: "/api/application/product/category?id=neos-utyugi",
        productsCount: "3",
      },
      {
        id: 455,
        title: "Утюги Tefal",
        slug: "tefal-utyugi",
        detailUrl: "/api/application/product/category?id=tefal-utyugi",
        productsCount: "25",
      },
      {
        id: 462,
        title: "Утюги Artel",
        slug: "artel-utyugi",
        detailUrl: "/api/application/product/category?id=artel-utyugi",
        productsCount: "8",
      },
    ],
  },
  {
    category: {
      id: 278,
      title: "Беспроводные пылесосы",
      small_front_icon: "",
      mobile_icon: "",
      image:
        "/files/global/icons/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB_%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B4%D0%BE%D0%BC%D0%B0_%D0%91%D0%B5%D1%81%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9_%D0%BF%D1%8B%D0%BB%D0%B5%D1%81%D0%BE%D1%81.png",
      slug: "besprovodnoj-pylesos",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 821,
        title: "Вертикальные беспроводные пылесосы",
        slug: "vertikalnyj-besprovodnoj-pylesos",
        detailUrl:
          "/api/application/product/category?id=vertikalnyj-besprovodnoj-pylesos",
        productsCount: "12",
      },
      {
        id: 785,
        title: "Беспроводные пылесосы для дома",
        slug: "besprovodnye-pylesosy-dlya-doma",
        detailUrl:
          "/api/application/product/category?id=besprovodnye-pylesosy-dlya-doma",
        productsCount: "12",
      },
      {
        id: 601,
        title: "Беспроводные пылесосы Polaris",
        slug: "besprovodnoj-pylesos-polaris",
        detailUrl:
          "/api/application/product/category?id=besprovodnoj-pylesos-polaris",
        productsCount: "1",
      },
      {
        id: 599,
        title: "Беспроводные пылесосы Philips ",
        slug: "besprovodnoj-pylesos-philips",
        detailUrl:
          "/api/application/product/category?id=besprovodnoj-pylesos-philips",
        productsCount: "1",
      },
      {
        id: 916,
        title: "Беспроводные пылесосы Tefal",
        slug: "besprovodnoj-pylesos-tefal",
        detailUrl:
          "/api/application/product/category?id=besprovodnoj-pylesos-tefal",
        productsCount: "8",
      },
      {
        id: 600,
        title: "Беспроводные пылесосы LG",
        slug: "besprovodnoj-pylesos-lg",
        detailUrl:
          "/api/application/product/category?id=besprovodnoj-pylesos-lg",
        productsCount: "0",
      },
    ],
  },
  {
    category: {
      id: 277,
      title: "Робот пылесос",
      small_front_icon: "",
      mobile_icon: "",
      image:
        "/files/global/icons/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB_%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B4%D0%BE%D0%BC%D0%B0_%D0%A0%D0%BE%D0%B1%D0%BE%D1%82_%D0%BF%D1%8B%D0%BB%D0%B5%D1%81%D0%BE%D1%81.png",
      slug: "robot-pylesos",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 788,
        title: "Все марки робот-пылесосов",
        slug: "roboty-pylesosy",
        detailUrl: "/api/application/product/category?id=roboty-pylesosy",
        productsCount: "9",
      },
      {
        id: 933,
        title: "Робот-пылесос Xiaomi",
        slug: "robot-pylesos-xiaomi",
        detailUrl: "/api/application/product/category?id=robot-pylesos-xiaomi",
        productsCount: "4",
      },
      {
        id: 603,
        title: "Polaris робот пылесос",
        slug: "robot-pylesos-polaris",
        detailUrl: "/api/application/product/category?id=robot-pylesos-polaris",
        productsCount: "0",
      },
      {
        id: 602,
        title: "LG робот пылесос",
        slug: "robot-pylesos-lg",
        detailUrl: "/api/application/product/category?id=robot-pylesos-lg",
        productsCount: "0",
      },
    ],
  },
  {
    category: {
      id: 6,
      title: "Пылесосы",
      small_front_icon: "",
      mobile_icon: "",
      image: "/files/global/icons/33.png",
      slug: "pylesosy",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 778,
        title: "Все марки пылесосов",
        slug: "pylesosy-dlya-doma",
        detailUrl: "/api/application/product/category?id=pylesosy-dlya-doma",
        productsCount: "98",
      },
      {
        id: 414,
        title: "Пылесосы Samsung",
        slug: "pylesosy-samsung",
        detailUrl: "/api/application/product/category?id=pylesosy-samsung",
        productsCount: "29",
      },
      {
        id: 417,
        title: "Пылесосы Gorenje",
        slug: "pylesosy-gorenje",
        detailUrl: "/api/application/product/category?id=pylesosy-gorenje",
        productsCount: "4",
      },
      {
        id: 419,
        title: "Пылесосы Sencor",
        slug: "pylesosy-sencor",
        detailUrl: "/api/application/product/category?id=pylesosy-sencor",
        productsCount: "1",
      },
      {
        id: 416,
        title: "Пылесосы Philips",
        slug: "pylesosy-philips",
        detailUrl: "/api/application/product/category?id=pylesosy-philips",
        productsCount: "8",
      },
      {
        id: 886,
        title: "Пылесосы Avalon",
        slug: "pylesosy-avalon",
        detailUrl: "/api/application/product/category?id=pylesosy-avalon",
        productsCount: "8",
      },
      {
        id: 420,
        title: "Пылесосы Bosch",
        slug: "pylesosy-bosch",
        detailUrl: "/api/application/product/category?id=pylesosy-bosch",
        productsCount: "7",
      },
      {
        id: 885,
        title: "Пылесосы Konig",
        slug: "pylesosy-konig",
        detailUrl: "/api/application/product/category?id=pylesosy-konig",
        productsCount: "0",
      },
      {
        id: 418,
        title: "Пылесосы Tefal",
        slug: "pylesosy-tefal",
        detailUrl: "/api/application/product/category?id=pylesosy-tefal",
        productsCount: "12",
      },
      {
        id: 415,
        title: "Пылесосы Artel",
        slug: "pylesosy-artel",
        detailUrl: "/api/application/product/category?id=pylesosy-artel",
        productsCount: "7",
      },
      {
        id: 377,
        title: "Пылесосы LG",
        slug: "pylesos-lg",
        detailUrl: "/api/application/product/category?id=pylesos-lg",
        productsCount: "11",
      },
      {
        id: 880,
        title: "Пылесосы ручные",
        slug: "ruchnye-pylesosy",
        detailUrl: "/api/application/product/category?id=ruchnye-pylesosy",
        productsCount: "0",
      },
      {
        id: 878,
        title: "Моющие пылесосы",
        slug: "moyushchie-pylesosy",
        detailUrl: "/api/application/product/category?id=moyushchie-pylesosy",
        productsCount: "1",
      },
      {
        id: 887,
        title: "Аквапылесос",
        slug: "akvapylesos",
        detailUrl: "/api/application/product/category?id=akvapylesos",
        productsCount: "2",
      },
      {
        id: 883,
        title: "Стандартные пылесосы",
        slug: "standartnyj-pylesos",
        detailUrl: "/api/application/product/category?id=standartnyj-pylesos",
        productsCount: "126",
      },
      {
        id: 890,
        title: "Вертикальные пылесосы",
        slug: "vertikalnyj-pylesosy",
        detailUrl: "/api/application/product/category?id=vertikalnyj-pylesosy",
        productsCount: "2",
      },
      {
        id: 879,
        title: "Контейнерные пылесосы",
        slug: "kontejnernye-pylesosy",
        detailUrl: "/api/application/product/category?id=kontejnernye-pylesosy",
        productsCount: "76",
      },
      {
        id: 888,
        title: "Беспроводные пылесосы",
        slug: "besprovodnye-pylesosy",
        detailUrl: "/api/application/product/category?id=besprovodnye-pylesosy",
        productsCount: "0",
      },
      {
        id: 884,
        title: "Компрессорные пылесосы",
        slug: "kompressornye-pylesosy",
        detailUrl:
          "/api/application/product/category?id=kompressornye-pylesosy",
        productsCount: "5",
      },
      {
        id: 881,
        title: "Аккумуляторные пылесосы",
        slug: "akkumulyatornye-pylesosy",
        detailUrl:
          "/api/application/product/category?id=akkumulyatornye-pylesosy",
        productsCount: "0",
      },
      {
        id: 882,
        title: "Пылесосы с пылесборником",
        slug: "pylesosy-s-pylesbornikom",
        detailUrl:
          "/api/application/product/category?id=pylesosy-s-pylesbornikom",
        productsCount: "121",
      },
      {
        id: 915,
        title: "Фильтры для пылесосов",
        slug: "filtr-dlya-pylesosa",
        detailUrl: "/api/application/product/category?id=filtr-dlya-pylesosa",
        productsCount: "1",
      },
    ],
  },
  {
    category: {
      id: 9,
      title: "Кулеры для воды",
      small_front_icon: "",
      mobile_icon: "",
      image: "/files/global/icons/13.png",
      slug: "kulery-dlya-vody",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 793,
        title: "Диспенсеры",
        slug: "dispensery-dlya-vody",
        detailUrl: "/api/application/product/category?id=dispensery-dlya-vody",
        productsCount: "10",
      },
      {
        id: 648,
        title: "Кулеры для воды Vital",
        slug: "kulery-vital",
        detailUrl: "/api/application/product/category?id=kulery-vital",
        productsCount: "0",
      },
      {
        id: 649,
        title: " Кулеры для воды Bona",
        slug: "kulery-bona",
        detailUrl: "/api/application/product/category?id=kulery-bona",
        productsCount: "10",
      },
    ],
  },
  {
    category: {
      id: 8,
      title: "Стиральные машины",
      small_front_icon: "",
      mobile_icon: "",
      image: "/files/global/icons/4.png",
      slug: "stiralnaja-mashina",
      hasSubCategory: true,
    },
    subArray: [
      {
        id: 368,
        title: "Все марки стиральных машин",
        slug: "stiralnye-mashinki",
        detailUrl: "/api/application/product/category?id=stiralnye-mashinki",
        productsCount: "92",
      },
      {
        id: 425,
        title: "Стиральные машины Whirlpool",
        slug: "stiralnye-mashiny-whirlpool",
        detailUrl:
          "/api/application/product/category?id=stiralnye-mashiny-whirlpool",
        productsCount: "0",
      },
      {
        id: 428,
        title: "Стиральные машины Electrolux",
        slug: "stiralnye-mashiny-electrolux",
        detailUrl:
          "/api/application/product/category?id=stiralnye-mashiny-electrolux",
        productsCount: "3",
      },
      {
        id: 421,
        title: "Стиральные машины Samsung",
        slug: "stiralnye-mashiny-samsung",
        detailUrl:
          "/api/application/product/category?id=stiralnye-mashiny-samsung",
        productsCount: "30",
      },
      {
        id: 422,
        title: "Стиральные машины Indesit",
        slug: "stiralnaya-mashina-indesit",
        detailUrl:
          "/api/application/product/category?id=stiralnaya-mashina-indesit",
        productsCount: "1",
      },
      {
        id: 910,
        title: "Стиральные машины Shivaki",
        slug: "stiralnie-mashinki-shivaki",
        detailUrl:
          "/api/application/product/category?id=stiralnie-mashinki-shivaki",
        productsCount: "9",
      },
      {
        id: 427,
        title: "Стиральные машины Bosch",
        slug: "stiralnye-mashiny-bosch",
        detailUrl:
          "/api/application/product/category?id=stiralnye-mashiny-bosch",
        productsCount: "0",
      },
      {
        id: 911,
        title: "Стиральные машины Atlant",
        slug: "stiralnie-mashini-atlant",
        detailUrl:
          "/api/application/product/category?id=stiralnie-mashini-atlant",
        productsCount: "0",
      },
      {
        id: 426,
        title: "Стиральные машины Beko",
        slug: "stiralnye-mashiny-beko",
        detailUrl:
          "/api/application/product/category?id=stiralnye-mashiny-beko",
        productsCount: "9",
      },
      {
        id: 423,
        title: "Стиральные машины Artel",
        slug: "stiralnaya-mashina-artel",
        detailUrl:
          "/api/application/product/category?id=stiralnaya-mashina-artel",
        productsCount: "9",
      },
      {
        id: 378,
        title: "Стиральные машины LG",
        slug: "stiralnaya-mashina-lg",
        detailUrl: "/api/application/product/category?id=stiralnaya-mashina-lg",
        productsCount: "19",
      },
      {
        id: 904,
        title: "Узкие стиральные машины",
        slug: "uzkie-stiralnye-mashinki",
        detailUrl:
          "/api/application/product/category?id=uzkie-stiralnye-mashinki",
        productsCount: "51",
      },
      {
        id: 902,
        title: "Стиральные машины автомат",
        slug: "avtomat-stiralnye-mashinki",
        detailUrl:
          "/api/application/product/category?id=avtomat-stiralnye-mashinki",
        productsCount: "78",
      },
      {
        id: 895,
        title: "Стиральные машины с сушкой",
        slug: "s-sushkoj",
        detailUrl: "/api/application/product/category?id=s-sushkoj",
        productsCount: "9",
      },
      {
        id: 897,
        title: "Бесшумные стиральные машинки",
        slug: "tihie-stiralnye-mashinki",
        detailUrl:
          "/api/application/product/category?id=tihie-stiralnye-mashinki",
        productsCount: "12",
      },
      {
        id: 892,
        title: "Недорогие стиральные машинки",
        slug: "byudzhetnye-stiralnye-mashinki",
        detailUrl:
          "/api/application/product/category?id=byudzhetnye-stiralnye-mashinki",
        productsCount: "24",
      },
      {
        id: 893,
        title: "Компактные стиральные машинки",
        slug: "kompaktnye-stiralnye-mashinki",
        detailUrl:
          "/api/application/product/category?id=kompaktnye-stiralnye-mashinki",
        productsCount: "47",
      },
      {
        id: 891,
        title: "Полуавтомат стиральные машинки",
        slug: "poluavtomat",
        detailUrl: "/api/application/product/category?id=poluavtomat",
        productsCount: "20",
      },
      {
        id: 899,
        title: "Инверторные стиральные машинки",
        slug: "invertornye-stiralnye-mashinki",
        detailUrl:
          "/api/application/product/category?id=invertornye-stiralnye-mashinki",
        productsCount: "63",
      },
      {
        id: 903,
        title: "Стиральные машинки под раковину",
        slug: "stiralnye-mashinki-pod-rakovinu",
        detailUrl:
          "/api/application/product/category?id=stiralnye-mashinki-pod-rakovinu",
        productsCount: "56",
      },
      {
        id: 898,
        title: "Встраиваемые стиральные машинки",
        slug: "vstraivaemye-stiralnie-mashini",
        detailUrl:
          "/api/application/product/category?id=vstraivaemye-stiralnie-mashini",
        productsCount: "5",
      },
      {
        id: 900,
        title: "Премиум класса стиральные машины",
        slug: "premium-stiralnye-mashinki",
        detailUrl:
          "/api/application/product/category?id=premium-stiralnye-mashinki",
        productsCount: "30",
      },
      {
        id: 901,
        title: "С прямым приводом стиральные машины",
        slug: "stiralnye-mashinki-s-pryamym-privodom",
        detailUrl:
          "/api/application/product/category?id=stiralnye-mashinki-s-pryamym-privodom",
        productsCount: "22",
      },
      {
        id: 894,
        title: "С фронтальной загрузкой",
        slug: "s-frontalnoj-zagruzkoj",
        detailUrl:
          "/api/application/product/category?id=s-frontalnoj-zagruzkoj",
        productsCount: "75",
      },
      {
        id: 896,
        title: "С вертикальной загрузкой",
        slug: "s-vertikalnoj-zagruzkoj",
        detailUrl:
          "/api/application/product/category?id=s-vertikalnoj-zagruzkoj",
        productsCount: "20",
      },
    ],
  },
];
