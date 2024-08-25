"use client";
import Cell from "@/components/Cell";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import LenisScrollLayout from "@/components/LenisScrollLayout";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { ReactNode } from "react";

export default function MdxLayout({ children }: { children: ReactNode }) {
  return (
    <LenisScrollLayout>
      <>
        <Navbar />
        <Section className="pb-32 z-30">
          <Grid>
            <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
              {children}
            </Cell>
          </Grid>
        </Section>
        <Footer />
      </>
    </LenisScrollLayout>
  );
}
