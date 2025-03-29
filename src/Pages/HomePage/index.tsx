import React from "react";
import { HomeSection } from "./Sections/HomeSection";
import { CryptoSection } from "./Sections/CryptoSection";
import { PlatformSection } from "./Sections/PlatformSection";
import { ConverterSection } from './Sections/CoverterSection'

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeSection />
      <CryptoSection />
      <PlatformSection />
      <ConverterSection />
    </>
  );
};
