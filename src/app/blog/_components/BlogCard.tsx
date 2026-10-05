import Link from "next/link";
import clsx from "clsx";
import Typography from "@/components/typography/Typography";
import { BlogFrontmatter } from "@/modules/blog/blog.type";
import { FiArrowUpRight } from "react-icons/fi";
import { readableDate } from "@/libs/helper";

interface BlogCardProps {
  blog: {
    frontmatter: BlogFrontmatter;
    slug: string;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { title, description, topics, created_at } = blog.frontmatter;

  return (
    <Link href={`/blog/${blog.slug}`}>
      <div
        className={clsx(
          "group relative rounded-lg p-6 border border-line bg-surface/50",
          "hover:border-muted/50 hover:bg-surface/70 transition-all duration-300",
          "flex flex-col gap-4 h-full"
        )}
      >
        <div className="flex-1">
          <Typography as="h2" variant="bt" color="white" weight="bold" className="group-hover:text-accent transition-colors">
            {title}
          </Typography>
          <Typography variant="p" font="mono" color="gray" className="mt-2">
            {readableDate(new Date(created_at))}
          </Typography>

          {topics && topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {topics.map((topic, idx) => (
                <span
                  key={idx}
                  className={clsx(
                    "px-3 py-1 rounded-md text-xs font-mono font-semibold",
                    "bg-accent/10 text-accent border border-accent/30"
                  )}
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          <Typography variant="p" color="gray" className="line-clamp-2 mt-4">
            {description}
          </Typography>
        </div>
      </div>
    </Link>
  );
}

