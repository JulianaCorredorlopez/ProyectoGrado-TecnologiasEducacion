import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Card, CardContent, SectionTitle } from "./ui";

const estudiantesPorColegio = [
  { colegio: "Guillermo León Valencia", promedio: 30.5 },
  { colegio: "Colegio Boyacá", promedio: 30.0 },
  { colegio: "Instituto Técnico Gonzalo Suárez Rendón", promedio: 27.5 },
  { colegio: "Colegio Turmequé Diego Torres", promedio: 27.5 },
  { colegio: "Colegio Libertador Simón Bolívar", promedio: 30.0 },
  { colegio: "Colegio Comfaboy", promedio: 27.5 },
  { colegio: "Colegio de Chiquinquirá", promedio: 27.5 },
  { colegio: "Colegio Villa de Leyva", promedio: 25.0 },
];

const impactoPorAnio = [
  { name: "2023", value: 33 },
  { name: "2024", value: 33 },
  { name: "2025", value: 34 },
];

const COLORS = ["#2F73B8", "#C53532", "#8DBB3A"];

export default function Charts() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <SectionTitle eyebrow="Resultados visuales" title="Gráficas de impacto">
        Resumen visual del alcance del trabajo realizado.
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-[2rem] border border-cyan-300/20 bg-slate-900/80 backdrop-blur-lg">
          <CardContent className="p-7">
            <h3 className="mb-2 text-2xl font-black text-white">
              Promedio de estudiantes por colegio
            </h3>

            <p className="mb-6 text-sm text-slate-300">
              Estudiantes impactados en instituciones educativas.
            </p>

            <div className="h-[430px] rounded-3xl border border-white/10 bg-white/5 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={estudiantesPorColegio}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis
                    dataKey="colegio"
                    tick={{ fontSize: 10, fill: "#ffffff" }}
                    angle={-35}
                    textAnchor="end"
                    height={120}
                  />
                  <YAxis tick={{ fill: "#ffffff" }} />
                  <Tooltip />
                  <Bar
                    dataKey="promedio"
                    fill="#22d3ee"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border border-cyan-300/20 bg-slate-900/80 backdrop-blur-lg">
          <CardContent className="p-7">
            <h3 className="mb-2 text-2xl font-black text-white">
              Distribución del impacto por año
            </h3>

            <p className="mb-6 text-sm text-slate-300">
              Comparación porcentual del impacto entre los años trabajados.
            </p>

            <div className="h-[430px] rounded-3xl border border-white/10 bg-white/5 p-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={impactoPorAnio}
                    cx="50%"
                    cy="45%"
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {impactoPorAnio.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index]} />
                    ))}
                  </Pie>

                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}