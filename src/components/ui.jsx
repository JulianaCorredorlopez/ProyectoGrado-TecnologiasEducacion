import { motion } from "framer-motion";

export function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function Button({ children, className = "" }) {
  return (
    <button className={`inline-flex items-center justify-center font-semibold transition ${className}`}>
      {children}
    </button>
  );
}

export function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}>
      {children}
    </span>
  );
}

export function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mb-8">
      <Badge className="mb-3 border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
        {eyebrow}
      </Badge>

      <h2 className="text-3xl font-black text-white drop-shadow-[0_0_18px_rgba(34,211,238,.45)] md:text-5xl">
        {title}
      </h2>

      {children && <p className="mt-4 max-w-3xl text-slate-300">{children}</p>}
    </div>
  );
}

export function StatCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <Card className="rounded-3xl border border-cyan-300/20 bg-white/10 shadow-[0_0_30px_rgba(34,211,238,.08)] backdrop-blur-lg">
        <CardContent className="p-5">
          <Icon className="mb-4 h-8 w-8 text-cyan-300" />
          <p className="text-3xl font-black text-white">{item.value}</p>
          <p className="mt-1 text-sm text-slate-300">{item.label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Progress({ value = 0 }) {
  return (
    <div className="h-4 overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}