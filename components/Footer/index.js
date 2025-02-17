import React from "react";
import Section from "../layout/Section";
import Container from "../layout/Container";
import Link from "next/link";
import { FbIcon, TwitterX, Linkedin, Instagram } from "../Icon";

const Footer = () => {
  return (
    <Section>
      <Container>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Brand Name */}
          <h2 className="text-xl font-semibold">Lazy Learner</h2>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-gray-400 transition">
            <TwitterX />
          </Link>

          <Link href="#" className="hover:text-gray-400 transition">
            <Linkedin />
          </Link>

          <Link href="#" className="hover:text-gray-400 transition">
            <FbIcon />
          </Link>

          <Link href="#" className="hover:text-gray-400 transition">
            <Instagram />
          </Link>

          {/* Divider */}
          <div className="border-t border-r-error-700 my-6"></div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
