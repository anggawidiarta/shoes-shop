/* eslint-disable no-unused-vars */
import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  adidas,
  adidasShoe1,
  bigShoe1,
  bigShoe2,
  bigShoe3,
  converse,
  converseShoe1,
  customer1,
  customer2,
  eiger,
  nbShoe1,
  puma,
  shoe1,
  shoe2,
  shoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Beranda" },
  { href: "#products", label: "Produk" },
  { href: "#about-us", label: "Tentang Kami" },
  { href: "#contact-us", label: "Hubungi Kami" },
];

export const shoes = [
  {
    thumbnail: eiger,
    bigShoe: eiger,
  },
  {
    thumbnail: puma,
    bigShoe: puma,
  },

  {
    thumbnail: converse,
    bigShoe: converse,
  },
];

export const statistics = [
  { value: "500", label: "Merk" },
  { value: "150", label: "Cabang" },
  { value: "500k+", label: "Pelanggan" },
];

export const products = [
  {
    imgURL: shoe1,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    rating: "4.8",
  },
  {
    imgURL: shoe2,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    rating: "4.5",
  },
  {
    imgURL: shoe3,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    rating: "4.9",
  },
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    rating: "4.2",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
