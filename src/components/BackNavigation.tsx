import Link from "next/link";
import Typography from "./typography/Typography";
import { IoArrowBackOutline } from "react-icons/io5";

const BackNavigation = ({ href }: { href: string }) => {
  return (
    <Link href={href} className="hover:underline decoration-rockblue-500">
      <Typography font="mono" color="gray" className="flex items-center gap-2">
        <IoArrowBackOutline />
        Back
      </Typography>
    </Link>
  );
};

export default BackNavigation;
