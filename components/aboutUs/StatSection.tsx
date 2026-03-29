interface Stat { value: string; label: string; }
interface Props { stats: Stat[]; }

const FALLBACK: Stat[] = [
  { value: "500+", label: "Happy Clients" },
  { value: "250+", label: "Avg ROI Increase" },
  { value: "5 Years", label: "Industry Experience" },
];

export default function StatSection({ stats }: Props) {
  const list = stats.length > 0 ? stats : FALLBACK;
  return (
    <div className="flex justify-center pt-10 pb-16 w-full">
      <div className="flex w-11/12 max-w-6xl justify-around bg-white rounded-2xl py-8 shadow-[0_8px_30px_rgba(34,161,216,0.15)]">
        {list.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}