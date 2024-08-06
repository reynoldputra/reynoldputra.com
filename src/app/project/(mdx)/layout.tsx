import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import { ReactNode } from "react";

export default function MdxLayout({ children }: { children: ReactNode }) {
  return (
    <Section>
      <Grid>
        <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
          <article className="prose prose-invert">{children}</article>
        </Cell>
      </Grid>
    </Section>
  );
}
