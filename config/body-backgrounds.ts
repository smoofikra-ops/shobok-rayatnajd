export interface BodyBackgroundItem {
  id: string;
  src: string;
  desktopPosition: string;
  mobilePosition: string;
  alt: string;
}

export const bodyBackgrounds: BodyBackgroundItem[] = [
  {
    id: "bg-1",
    src: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/home/sectors/background-1.jpg",
    desktopPosition: "center 20%",
    mobilePosition: "center center",
    alt: "رايات نجد - الشبوك الأمنية والسياج",
  },
  {
    id: "bg-2",
    src: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/home/sectors/background-2.jpg",
    desktopPosition: "center 30%",
    mobilePosition: "center center",
    alt: "رايات نجد - السياج الحديدي والمنشآت",
  },
  {
    id: "bg-3",
    src: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/home/sectors/background-body-3.jpg",
    desktopPosition: "center center",
    mobilePosition: "center center",
    alt: "رايات نجد - القدرات التشغيلية والميدانية",
  },
  {
    id: "bg-4",
    src: "https://nmolabs-cdn.b-cdn.net/shobok-rayatnajd/home/sectors/background-body-4.jpg",
    desktopPosition: "center 40%",
    mobilePosition: "center center",
    alt: "رايات نجد - مشاريع البنية التحتية والهناجر",
  },
];
