import Link from "next/link";
import clsx from "clsx";
import Typography from "@/components/typography/Typography";
import { BlogFrontmatter } from "@/modules/blog/blog.type";
import { FiArrowUpRight } from "react-icons/fi";

interface BlogCardProps {
  blog: {
    frontmatter: BlogFrontmatter;
    slug: string;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { title, description, topics } = blog.frontmatter;

  return (
    <Link href={`/blog/${blog.slug}`}>
      <div
        className={clsx(
          "group relative rounded-lg p-6 border border-rockblue-900/40 bg-primary-900/50",
          "hover:border-rockblue-500/50 hover:bg-primary-900/70 transition-all duration-300",
          "flex flex-col gap-4 h-full"
        )}
      >
        <div className="flex-1">
          <Typography variant="bt" color="white" weight="bold" className="mb-2 group-hover:text-spray-300 transition-colors">
            {title}
          </Typography>
          <Typography variant="p" color="gray" className="line-clamp-2">
            {description}
          </Typography>
        </div>

        {topics && topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {topics.map((topic, idx) => (
              <span
                key={idx}
                className={clsx(
                  "px-3 py-1 rounded-md text-xs font-mono font-semibold",
                  "bg-spray-300/20 text-spray-300 border border-spray-300/30"
                )}
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

