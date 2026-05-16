import { motion } from "framer-motion";
import { activityCounts } from "../data/portfolioData";
import { Card, CardContent, SectionTitle } from "./ui";

export default function Charts() {
  const max = Math.max(...activityCounts.map((a) => a.value));
  const students = [240, 270, 300];
  const labels = ["Mínimo", "Promedio", "Máximo"];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <SectionTitle eyebrow="Resultados visuales" title="Gráficas de impacto">
        Resumen visual del alcance del trabajo realizado.
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-[2rem] border border-violet-300/30 bg-slate-900/80 backdrop-blur-lg">
          <CardContent className="p-7">
            <h3 className="mb-2 text-2xl font-black text-white">Estudiantes impactados</h3>
            <p className="mb-6 text-sm text-violet-100">
              Rango estimado con grupos de 20 a 25 estudiantes.
            </p>

            <div className="flex h-72 items-end justify-around gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
              {students.map((value, index) => (
                <div key={value} className="flex flex-col items-center">
                  <motion.div
                    className="flex w-20 items-start justify-center rounded-t-3xl bg-gradient-to-t from-cyan-500 to-violet-500 pt-4 text-lg font-black text-white"
                    initial={{ height: 0 }}
                    whileInView={{ height: value / 2.2 }}
                    transition={{ duration: 0.9, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {value}
                  </motion.div>
                  <p className="mt-3 text-sm text-slate-300">{labels[index]}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border border-pink-300/30 bg-slate-900/80 backdrop-blur-lg">
          <CardContent className="p-7">
            <h3 className="mb-2 text-2xl font-black text-white">Participación académica</h3>

            <div className="space-y-5">
              {activityCounts.map((item, index) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between text-sm text-slate-300">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>

                  <div className="h-5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-pink-400 to-cyan-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.value / max) * 100}%` }}
                      transition={{ duration: 0.85, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}