export type Branch = {
  name: string;
  address: string;
  mapSrc: string | null;
};

export const BRANCHES: Branch[] = [
  {
    name: "Kantor Pusat Surabaya",
    address: "Jl. Demak Timur X No.1, Gundih, Kec. Bubutan, Surabaya, Jawa Timur 60172",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9307.350623105778!2d112.7234465!3d-7.247314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9de9aba3909%3A0x8525907af2994d3!2sPT%20IRJA%20EXPRESS%20LOGISTIC%20OFFICE!5e1!3m2!1sen!2sid!4v1786507520494!5m2!1sen!2sid",
  },
  {
    name: "Stuffing Barang Surabaya",
    address: "Jl. Laksda Moh. Nazir No.17, Perak Bar., Kec. Krembangan, Surabaya, Jawa Timur 60177",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37229.46409064458!2d112.7038538!3d-7.2465685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9185d5723e1%3A0x178b065a3edf099c!2sCV.%20IRJA%20EXPRESS!5e1!3m2!1sen!2sid!4v1786593814680!5m2!1sen!2sid",
  },
  {
    name: "Kantor Pusat & Stuffing Barang Timika",
    address: "Jl. Poros Makpur Jaya, Wonosari Jaya, Kec. Mimika Baru, Kabupaten Mimika, Papua Tengah 99971",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4676.1583281490175!2d136.87711539999998!3d-4.582371799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68237957b3cab4d3%3A0x4e7002c9930b4622!2sPT%20IRJA%20EXPRESS%20LOGISTIC%20TIMIKA!5e1!3m2!1sen!2sid!4v1786593741851!5m2!1sen!2sid"
    ,
  },
];
