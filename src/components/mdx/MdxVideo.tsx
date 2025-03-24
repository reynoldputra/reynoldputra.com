export default function MdxVideo({ url }: { url: string }) {
  return (
    <div className="w-full max-w-[300px] mx-auto">
      <video src={url} width="100%" />
    </div>
  );
}
