'use client'
import Giscus from "@giscus/react";
import Grid from "@/components/Grid";
import Cell from "@/components/Cell";
import Section from "@/components/Section";
import Typography from "@/components/typography/Typography";
import { useTheme } from "@/hooks/useTheme";

export default function GuestBook() {
  const { theme } = useTheme();
  return (
    <Section className="relative z-30">
      <Grid className="mt-24">
        <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
          <h1>
            <Typography
              as="span"
              variant="h5"
              className="md:text-h4 text-center block"
              color="foreground"
              weight="bold"
            >
              Welcome to my
            </Typography>
            <Typography
              as="span"
              variant="h5"
              className="md:text-h4 text-center block"
              color="heading"
              weight="bold"
              font="mono"
            >
              Guest Book !
            </Typography>
          </h1>
        </Cell>
        <Cell cols="1_full" colsMd="3_8" colsLg="4_6" className="mt-12 pb-24">
          <figure>
            {theme && (
              <Giscus
                id="comments"
                repo="reynoldputra/reynoldputra.com"
                repoId="R_kgDOJYXGGQ"
                category="General"
                categoryId="DIC_kwDOJYXGGc4CW4Nl"
                mapping="specific"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={theme === "dark" ? "cobalt" : "light"}
                lang="en"
                loading="lazy"
              />
            )}
          </figure>
        </Cell>
      </Grid>
    </Section>
  );
}
