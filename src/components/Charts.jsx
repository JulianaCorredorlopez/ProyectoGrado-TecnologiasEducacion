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
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionTitle eyebrow="Resultados visuales" title="Gráficas de impacto">
        Resumen visual del alcance del trabajo realizado.
      </SectionTitle>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-900/80 backdrop-blur-lg sm:rounded-[2rem]">
          <CardContent className="p-4 sm:p-7">
            <h3 className="mb-2 text-xl font-black text-white sm:text-2xl">
              Promedio de estudiantes por colegio
            </h3>

            <p className="mb-5 text-sm text-slate-300">
              Estudiantes impactados en instituciones educativas.
            </p>

            <div className="h-[430px] rounded-3xl border border-white/10 bg-white/5 p-3 sm:h-[430px] sm:p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={estudiantesPorColegio}
                  layout="vertical"
                  margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 11, fill: "#ffffff" }}
                    domain={[0, 35]}
                  />
                  <YAxis
                    type="category"
                    dataKey="colegio"
                    width={120}
                    tick={{ fontSize: 10, fill: "#ffffff" }}
                  />
                  <Tooltip />
                  <Bar
                    dataKey="promedio"
                    fill="#22d3ee"
                    radius={[0, 10, 10, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-900/80 backdrop-blur-lg sm:rounded-[2rem]">
          <CardContent className="p-4 sm:p-7">
            <h3 className="mb-2 text-xl font-black text-white sm:text-2xl">
              Distribución del impacto por año
            </h3>

            <p className="mb-5 text-sm text-slate-300">
              Comparación porcentual del impacto entre los años trabajados.
            </p>

            <div className="h-[330px] rounded-3xl border border-white/10 bg-white/5 p-3 sm:h-[430px] sm:p-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={impactoPorAnio}
                    cx="50%"
                    cy="42%"
                    outerRadius="65%"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {impactoPorAnio.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index]} />
                    ))}
                  </Pie>

                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend
                    verticalAlign="bottom"
                    wrapperStyle={{ fontSize: "12px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}