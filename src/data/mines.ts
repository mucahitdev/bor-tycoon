interface IRegion {
  title: string;
  latitude: number;
  longitude: number;
}

interface IProducts {
  id: number;
  name: string;
  storageSpace: number;
  ratio: number;
}

export interface IMines {
  id: number;
  name: string;
  region: IRegion;
  description: string;
  products: IProducts[];
}

export const mines: IMines[] = [
  {
    id: 1,
    name: "Kolemanit",
    region: {
      title: "Kütahya - Emet",
      latitude: 39.34443047795569,
      longitude: 29.257973014583037,
    },
    description: "Kolemanit, boraks ve borik asit üretiminde kullanılır.",
    products: [
      {
        id: 1,
        name: "Cam",
        storageSpace: 1,
        ratio: 1,
      },
      {
        id: 2,
        name: "Seramik",
        storageSpace: 2,
        ratio: 2,
      },
      {
        id: 3,
        name: "Deterjan",
        storageSpace: 3,
        ratio: 3,
      },
      {
        id: 4,
        name: "Antibiyotik",
        storageSpace: 4,
        ratio: 4,
      },
    ],
  },
  {
    id: 2,
    name: "Tinkal",
    region: {
      title: "Eskişehir - Kırka",
      latitude: 39.283896219870094,
      longitude: 30.533590573818405,
    },
    description: "Tinkal, kozmetik, ilaç ve tarım sektörlerinde kullanılır.",
    products: [
      {
        id: 5,
        name: "Kozmetik",
        storageSpace: 2,
        ratio: 2,
      },
      {
        id: 6,
        name: "İlaç",
        storageSpace: 3,
        ratio: 3,
      },
      {
        id: 7,
        name: "Gübre",
        storageSpace: 4,
        ratio: 4,
      },
    ],
  },
  {
    id: 3,
    name: "Üleksit",
    region: {
      title: "Balıkesir - Bigadiç",
      latitude: 39.39393408334004,
      longitude: 28.131661579622012,
    },
    description:
      "Üleksit, elektronik, cam ve ısı yalıtım malzemelerinde kullanılır.",
    products: [
      {
        id: 8,
        name: "Çip",
        storageSpace: 5,
        ratio: 5,
      },
      {
        id: 9,
        name: "Özel cam türleri",
        storageSpace: 6,
        ratio: 6,
      },
      {
        id: 10,
        name: "Isı yalıtım malzemeleri",
        storageSpace: 7,
        ratio: 7,
      },
      {
        id: 11,
        name: "Yüksek Teknolojik Parça",
        storageSpace: 8,
        ratio: 8,
      },
    ],
  },
];
