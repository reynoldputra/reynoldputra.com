import Giscus from "@giscus/react";
import Grid from "@/components/Grid";
import Cell from "@/components/Cell";
import Section from "@/components/Section";
import Typography from "@/components/typography/Typography";

export default function GuestBook() {
  return (
    <Section>
      <Grid className="mt-24">
        <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
          <Typography
            variant="h5"
            className="md:text-h4 text-center"
            color="white"
            weight="bold"
          >
            Welcome to my
          </Typography>
          <Typography
            variant="h5"
            className="md:text-h4 text-center"
            color="highlight"
            weight="bold"
            font="mono"
          >
            Guest Book !
          </Typography>
        </Cell>
        <Cell cols="1_full" colsMd="3_8" colsLg="4_6" className="mt-12 pb-24">
          <figure>
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
              theme="cobalt"
              lang="en"
              loading="lazy"
            />
          </figure>
        </Cell>
      </Grid>
    </Section>
  );
}
