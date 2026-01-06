import { Suspense } from "react";
import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Typography from "@/components/typography/Typography";
import { getAllBlogs } from "@/modules/blog/blog.action";
import BlogCard from "./BlogCard";

const BlogListSection = async () => {
  const blogs = await getAllBlogs();

  return (
    <div className="relative">
      <Section>
        <Grid screenHeight={false}>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
            <Typography variant="h5" color="highlight" weight="bold">
              Blog
            </Typography>
            <Typography className="mt-2" variant="p" color="white">
              Dive into insights, best practices, and in-depth articles on software engineering. 
              Explore topics like design patterns, coding tips, and the latest trends to enhance 
              your skills and stay ahead in the tech world.
            </Typography>
            <div className="mt-24">
              <Suspense fallback={<div className="text-rockblue-500 font-mono text-md">Loading...</div>}>
                {blogs.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {blogs.map((blog, idx) => (
                      <BlogCard key={idx} blog={blog} />
                    ))}
                  </div>
                ) : (
                  <div className="text-rockblue-500 font-mono text-md">
                    No blog posts yet. Check back soon!
                  </div>
                )}
              </Suspense>
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
};

export default BlogListSection;

