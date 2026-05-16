import { useState } from "react";
import { motion } from "framer-motion";
import { mapPoints } from "../data/portfolioData";
import { Badge, Card, CardContent, SectionTitle } from "./ui";

export default function ImpactMap() {
  const [activePoint, setActivePoint] = useState(mapPoints[0]);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <SectionTitle eyebrow="Mapa de impacto" title="Red educativa alcanzada">
        Cada punto representa una experiencia de capacitación, divulgación o acompañamiento.
      </SectionTitle>

      <Card className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-900/80 backdrop-blur-xl">
        <CardContent className="grid lg:grid-cols-[1.2fr_.8fr]">
          <div className="relative h-[560px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.15),transparent_70%)]" />

            {mapPoints.map((point, index) => (
              <motion.button
                key={point.name}
                onClick={() => setActivePoint(point)}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 + index }}
                className="absolute"
                style={{ left: point.x, top: point.y }}
              >
                <div className="relative flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 backdrop-blur-lg">
                    <div className="h-12 w-12 rounded-full bg-cyan-300/70 shadow-[0_0_30px_rgba(34,211,238,.7)]" />
                  </div>

                  <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-slate-900/80 px-4 py-2 text-sm text-cyan-100 backdrop-blur-md">
                    {point.name}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="border-l border-white/10 bg-white/5 p-8">
            <Badge className="mb-4 bg-cyan-300/10 text-cyan-100">Punto seleccionado</Badge>
            <h3 className="text-3xl font-black text-white">{activePoint.name}</h3>
            <p className="mt-4 text-slate-300">{activePoint.note}</p>

            <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="font-bold text-cyan-100">Sentido del mapa</p>
              <p className="mt-2 text-sm text-slate-300">
                Representa el alcance del semillero en instituciones, colegios y eventos académicos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}