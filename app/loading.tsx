import SkeletonCard from "@/components/SkeletonCard";

export default function loading() {
  return (
    <div className="mx-5 mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {"abcdefgi".split("").map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
