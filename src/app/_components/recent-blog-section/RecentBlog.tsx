import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import ButtonAnimation from "@/components/button/ButtonAnimation";
import Typography from "@/components/typography/Typography";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const RecentBlog = () => {
  return (
    <div className="relative mt-24">
      <Section>
        <Grid screenHeight={false}>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
            <Typography variant="h5" color="highlight" weight="bold">
              Recent Blogs
            </Typography>
            <Typography className="mt-2" variant="p" color="white">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet.
            </Typography>
            <Link href="/blogs">
              <ButtonAnimation className="border-rockblue-50 mt-4">
                <Typography
                  font="mono"
                  variant="c1"
                  className="z-20 transition-all group-hover:font-bold text-rockblue-50 group-hover:text-primary-950"
                >
                  See more
                </Typography>
                <FaChevronRight className="z-20 h-3  transition-all text-rockblue-50 group-hover:text-primary-950" />
              </ButtonAnimation>
            </Link>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
};

export default RecentBlog;
