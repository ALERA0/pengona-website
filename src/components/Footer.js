import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "../../public/icons/socialMedia/facebook.svg";
import instagramIcon from "../../public/icons/socialMedia/instagram.svg";
import twitterIcon from "../../public/icons/socialMedia/twitter.svg";
import linkedinIcon from "../../public/icons/socialMedia/linkedin.svg";
import { motion } from "framer-motion";
import phoneIcon from "../../public/icons/telephone.png";
import logo from "../../public/images/logo.jpg";

const Footer = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_TEL_NUMBER;
  const email = process.env.NEXT_PUBLIC_EMAIL;

  const handlePhoneClick = () => {
    window.location.href = `tel:+905433524256`;
  };

  return (
    <footer className="w-full border-t-2 border-solid border-dark bg-[#000E30] ">
      <Layout className="flex flex-col items-center justify-center pt-12 pb-0 md:!px-12 px-2 lg:!px-48 w-full !bg-[#000E30] ">
        {/* Footerın üst Kısmı */}
        <div className="flex items-center justify-between w-full h-full  ">
          <div className="flex flex-col items-start justify-center  ">
            <div className="flex flex-col items-start justify-center  text-white ">
              <h2 className=" mb-2 text-xl">Pengona</h2>
              <a href="https://www.google.com/maps/place/Pengona+Yaz%C4%B1l%C4%B1m/@37.9833585,32.5205138,17z/data=!3m1!4b1!4m6!3m5!1s0x14d08f23a4285db5:0x55c83d9918c956d8!8m2!3d37.9833585!4d32.5205138!16s%2Fg%2F11q3y1x100?entry=ttu">
                Kosova Mah., Güneş Sk. No: 1G, 42300
              </a>
              <p className="mb-3"> Selçuklu/Konya</p>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <Link href="/" className="p-1 rounded-full bg-white">
                <Image src={facebookIcon} width={25} height={25} />
              </Link>
              <Link href="/" className="p-2 rounded-full bg-white">
                <Image src={instagramIcon} width={15} height={15} />
              </Link>
              <Link href="/" className="p-2 rounded-full bg-white">
                <Image src={twitterIcon} width={15} height={15} />
              </Link>
              <Link href="/" className="p-2 rounded-full bg-white">
                <Image src={linkedinIcon} width={15} height={15} />
              </Link>
            </div>
          </div>
          <div className="lg:flex hidden items-center justify-center  bg-[#001653] ">
            <a href="/">
              <Image src={logo} alt="logo" width={220} height={50} />
            </a>
          </div>
          <div className="h-36 w-36 md:w-auto md:h-auto flex  md:mr-0  ">
            <Link
              href="mailto:info@pengona.com"
              target="_blank"
              className="text-light md:text-xl text-base md:ml-8 rounded-full underline hover:text-blue-300 flex justify-end items-end    "
            >
              Bize Mail Atın
            </Link>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          className="flex md:hidden w-full mt-6  "
        >
          <div
            className="flex md:hidden items-center bg-transparent py-3 lg:px-5 md:px-2 rounded-lg border border-solid border-[#0079FF] hover:shadow-xl  bg-white w-full justify-center  "
            onClick={handlePhoneClick}
          >
            {/* Icon ve Yazı*/}
            <Image src={phoneIcon} alt="telephone" width={20} height={20} />
            <p className="text-[#000E36] ml-2 text-2xl ">+905433524256</p>
          </div>
        </motion.div>
        {/* Footerın alt Kısmı */}
        <div className="md:mt-12 mt-6 lg:px-44 md:px-16 px-4  py-6 flex items-center justify-between w-full  border-solid border-2 border-white text-light rounded-lg underline ">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/kurumsal">Kurumsal</Link>
          <Link href="/urunler">Hizmetlerimiz</Link>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            className="md:relative absolute left-0  "
          >
            <Link
              href="/"
              className="md:flex items-center bg-transparent py-3 lg:px-5 md:px-2 rounded-lg border border-solid border-[#0079FF] hover:shadow-xl ml-4 hidden bg-white "
            >
              {/* Icon ve Yazı*/}
              <Image src={phoneIcon} alt="telephone" width={20} height={20} />
              <p className="text-[#000E36] ml-2  ">+95433524256</p>
            </Link>
          </motion.div>
        </div>
      </Layout>
      <div className="   w-full border-t-2 border-solid border-white py-2 mt-8 bg-light">
        <p className="text-center text-sm text-[#000B27 ] ">
          © {new Date().getFullYear()} Pengona Software, Tüm Hakları Saklıdır.
          Kurumsal Web Sitesi Pengona Software tarafından yapılmıştır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
