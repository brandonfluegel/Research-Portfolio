"use client";

import React from 'react';
import { motion } from "framer-motion";
import LogoBadge from "@/components/ui/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
  Label,
  LabelList,
  ZAxis,
  Cell
} from 'recharts';

// --- SXI MATRIX DATA & HELPERS ---

interface SXIDataPoint {
  name: string;
  sxi: number;       // Y-axis: Net Good Index (-100 to +100)
  engagement: number; // X-axis: Monthly Viewing Hours (0-100)
  volume: number;     // Bubble size
  friction: string;   // Primary friction point
}

const sxiData: SXIDataPoint[] = [
  { name: "DVR Recording", sxi: 87, engagement: 88, volume: 953, friction: "Missed/Incomplete recordings" },
  { name: "Collections", sxi: 85, engagement: 32, volume: 890, friction: "Horizontal scrolling fatigue" },
  { name: "App Navigation", sxi: 82, engagement: 92, volume: 912, friction: "Too many clicks to destination" },
  { name: "Info Card Details", sxi: 76, engagement: 48, volume: 840, friction: "Descriptions too short/unhelpful" },
  { name: "Home Discovery", sxi: 73, engagement: 72, volume: 875, friction: "Random/Irrelevant recommendations" },
  { name: "Video Player", sxi: 69, engagement: 94, volume: 934, friction: "Fast Forward/Rewind is jumpy" },
  { name: "Value Clarity", sxi: 66, engagement: 58, volume: 926, friction: "Confusion: Free vs. Paid content" },
  { name: "Live TV Guide", sxi: 64, engagement: 98, volume: 991, friction: "Channel bloat & confusing order" },
];

// Color logic: >= 70 green, 66-69 amber, <= 65 red
const getSXIColor = (sxi: number) => {
  if (sxi >= 70) return "#00ff87";   // neon green
  if (sxi >= 66) return "#ffb020";   // amber
  return "#ff3b5c";                  // critical red
};

const getSXIGlow = (sxi: number) => {
  if (sxi >= 70) return "rgba(0,255,135,0.45)";
  if (sxi >= 66) return "rgba(255,176,32,0.4)";
  return "rgba(255,59,92,0.5)";
};

const getSXILabel = (sxi: number) => {
  if (sxi >= 70) return "Healthy";
  if (sxi >= 66) return "At Risk";
  return "Critical";
};

// Custom Scatter Label — selective, clean labels for key data points only
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCustomLabel = (props: any) => {
  const { x, y, value } = props;
  if (x == null || y == null) return null;
  const item = sxiData.find(d => d.name === value);
  if (!item) return null;

  // Only label the 3 strategic narrative points
  const labelConfig: Record<string, { dy: number; dx: number; anchor: string }> = {
    "DVR Recording":  { dy: -22, dx: 0,  anchor: "middle" },
    "Video Player":   { dy: -18, dx: 0,  anchor: "middle" },
    "Live TV Guide":  { dy: 22,  dx: 0,  anchor: "middle" },
  };

  const config = labelConfig[item.name];
  if (!config) return null; // Skip unlabeled points — tooltip handles them

  const color = getSXIColor(item.sxi);

  return (
    <text
      x={x + config.dx}
      y={y + config.dy}
      fill={color}
      fontSize={10}
      fontWeight="bold"
      textAnchor={config.anchor}
      fontFamily="monospace"
      style={{ letterSpacing: '0.03em' }}
    >
      {item.name}
    </text>
  );
};

// Custom Tooltip — "Diagnostic Card"
const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: SXIDataPoint }[] }) => {
  if (active && payload && payload.length && payload[0].payload) {
    const d = payload[0].payload;
    const color = getSXIColor(d.sxi);
    const label = getSXILabel(d.sxi);

    return (
      <div className="bg-[#0a0a0a]/95 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-xl min-w-[230px]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
          <h4 className="font-bold text-white text-sm tracking-tight">{d.name}</h4>
        </div>

        {/* Metrics */}
        <div className="space-y-2.5 mb-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">SXI Score</span>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold" style={{ color }}>{d.sxi}%</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider" 
                    style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>
                {label}
              </span>
            </div>
          </div>

        </div>

        {/* Friction */}
        <div className="p-2.5 bg-red-500/5 border border-red-500/10 rounded-lg">
          <div className="text-[9px] text-red-400/70 uppercase tracking-wider font-mono font-bold mb-1">Primary Friction</div>
          <p className="text-[11px] text-zinc-300 leading-relaxed">{d.friction}</p>
        </div>
      </div>
    );
  }
  return null;
};

function SXIProjectMatrix() {
  return (
    <div className="w-full rounded-2xl relative overflow-hidden group shadow-2xl" style={{ backgroundColor: '#050505' }}>

      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.06]" />

      {/* Ambient gradient orbs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 p-4 md:p-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-6 gap-4 md:gap-0">
          <div>
            <h3 className="text-base md:text-lg font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
              </span>
              SXI PRIORITIZATION MATRIX
            </h3>
            <p className="text-[10px] md:text-xs text-zinc-500 mt-1.5 font-mono uppercase tracking-[0.2em] pl-5">
              Q4 2025 • Net Good Index vs. Engagement
            </p>
          </div>
        </div>

        {/* Chart Container */}
        <div className="h-[380px] md:h-[480px] w-full relative rounded-xl overflow-hidden border border-white/[0.04]" style={{ backgroundColor: '#080808' }}>

          {/* Micro grid pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.06]"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} />



          <ResponsiveContainer width="100%" height="100%">
<ScatterChart margin={{ top: 30, right: 40, bottom: 50, left: 15 }}>

              {/* Strategic Quadrant Shading */}
              {/* Fortify / Target Zone: Top-Right (x>50, y>70) */}
              <ReferenceArea x1={50} x2={120} y1={70} y2={100} fill="#00ff87" fillOpacity={0.02} />
              {/* Prioritize / Danger Zone: Bottom-Right (x>50, y<65 — below Churn Cliff) */}
              <ReferenceArea x1={50} x2={120} y1={50} y2={65} fill="#ff3b5c" fillOpacity={0.06} />
              {/* Monitor: Top-Left (x<50, y>70) */}
              <ReferenceArea x1={15} x2={50} y1={70} y2={100} fill="#71717a" fillOpacity={0.01} />
              {/* Prospect: Bottom-Left (x<50, y<70) */}
              <ReferenceArea x1={15} x2={50} y1={50} y2={70} fill="#71717a" fillOpacity={0.01} />
              {/* Transition Zone: Right side between Churn Cliff (65) and Quadrant line (70) */}
              <ReferenceArea x1={50} x2={120} y1={65} y2={70} fill="#ffb020" fillOpacity={0.015} />

              {/* Ultra-faint grid */}
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity={0.015} />

              {/* X-Axis: Engagement */}
              <XAxis
                type="number"
                dataKey="engagement"
                name="Engagement"
                stroke="#27272a"
                tick={{ fill: '#52525b', fontSize: 10, fontFamily: 'monospace' }}
                tickFormatter={(v) => `${v}h`}
                tickLine={false}
                axisLine={{ stroke: '#27272a' }}
                domain={[15, 120]}
                dy={8}
              >
                <Label
                  value="MONTHLY ENGAGEMENT (HOURS)"
                  offset={0}
                  position="insideBottom"
                  dy={30}
                  className="fill-zinc-600 text-[8px] font-mono uppercase tracking-[0.25em] font-bold"
                />
              </XAxis>

              {/* Y-Axis: Net Good Index */}
              <YAxis
                type="number"
                dataKey="sxi"
                name="Net Good Index"
                stroke="#27272a"
                tick={{ fill: '#52525b', fontSize: 10, fontFamily: 'monospace' }}
                tickFormatter={(v) => (v > 0 ? `+${v}` : `${v}`)}
                tickLine={false}
                axisLine={{ stroke: '#27272a' }}
                domain={[50, 100]}
                dx={-5}
              >
                <Label
                  value="NET GOOD INDEX"
                  angle={-90}
                  position="insideLeft"
                  className="fill-zinc-600 text-[8px] font-mono uppercase tracking-[0.25em] font-bold"
                  style={{ textAnchor: 'middle' }}
                  dx={5}
                />
              </YAxis>

              {/* Z-Axis: Bubble Size = Volume (aggressive scaling for visual hierarchy) */}
              <ZAxis type="number" dataKey="volume" range={[300, 1800]} name="User Volume" />

              {/* Tooltip */}
              <Tooltip
                cursor={{ strokeDasharray: '3 3', stroke: '#ffffff15' }}
                content={<CustomTooltip />}
                wrapperStyle={{ zIndex: 50 }}
              />

              {/* Quadrant dividers */}
              <ReferenceLine x={50} stroke="#27272a" strokeWidth={1} strokeOpacity={0.5} />
              <ReferenceLine y={70} stroke="#27272a" strokeWidth={1} strokeOpacity={0.5} />

              {/* Data Points */}
              <Scatter name="Features" data={sxiData}>
                {sxiData.map((entry, index) => {
                  const color = getSXIColor(entry.sxi);
                  const glow = getSXIGlow(entry.sxi);
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={color}
                      stroke={color}
                      strokeWidth={2}
                      fillOpacity={0.35}
                      strokeOpacity={0.7}
                      style={{
                        filter: `drop-shadow(0 0 6px ${glow})`,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                    />
                  );
                })}

              </Scatter>

              {/* CHURN CLIFF at y=65 — rendered after Scatter so line draws on top of bubbles */}
              <ReferenceLine
                y={65}
                stroke="#ff3b5c"
                strokeDasharray="5 5"
                strokeWidth={2}
                strokeOpacity={0.85}
                style={{ filter: 'drop-shadow(0 0 5px #ff3b5c)' }}
              >
                <Label
                  value="▸ CHURN CLIFF (Critical Threshold)"
                  position="insideBottomRight"
                  fill="#ff3b5c"
                  fontSize={9}
                  className="font-mono font-bold tracking-wider uppercase"
                  offset={8}
                />
              </ReferenceLine>

            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Footer Legend */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex flex-wrap gap-3 text-[9px] md:text-[10px] font-mono uppercase tracking-wider">
            <div className="flex items-center gap-1.5 text-zinc-500">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#00ff87', boxShadow: '0 0 6px rgba(0,255,135,0.4)' }} />
              <span>SXI &ge; 70 (Healthy)</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ffb020', boxShadow: '0 0 6px rgba(255,176,32,0.4)' }} />
              <span>SXI 66–69 (At Risk)</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ff3b5c', boxShadow: '0 0 6px rgba(255,59,92,0.4)' }} />
              <span>SXI &le; 65 (Critical)</span>
            </div>
          </div>
          <p className="text-[9px] md:text-[10px] text-zinc-600 font-mono tracking-wider">
            Color = SXI Health Status
          </p>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---

export default function SlingProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden bg-black" ref={ref}>
      
      {/* BACKGROUND ACCENTS - MATCHING ALEXA SECTION */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12 md:mb-24 max-w-7xl mx-auto px-6 border-b border-white/10 pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <LogoBadge 
            logoSrc="/assets/Sling-logo.png" 
            alt="Sling" 
            className="w-20 md:w-28 h-auto opacity-100 brightness-0 invert" 
          />
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <div className="hidden md:block">
            <h2 className="text-lg text-white font-medium tracking-tight">Staff Product Researcher</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Product Strategy Lead</p>
          </div>
        </div>
        
        <div className="md:hidden">
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">Staff Product Researcher</p>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT STACK */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 space-y-32 md:space-y-48">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-start"
        >
          {/* LEFT: NARRATIVE */}
          <motion.div variants={fadeInFromLeft} className="lg:col-span-5 pt-2">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Product Research Leadership
              </h3>

              {/* --- MOBILE ONLY: KEY METRIC --- */}
              <div className="block md:hidden mb-6 p-4 bg-zinc-900/50 border border-green-500/30 rounded-lg">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">Business Impact</span>
                 </div>
                 <div className="text-3xl font-bold text-green-400">+17% Lift</div>
                 <p className="text-xs text-zinc-400 mt-1">Lift in subscription conversion via checkout innovations.</p>
              </div>
              {/* ------------------------------------------------ */}

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                Directing the research roadmap for monetization and Human-AI interaction, reporting directly to the VP of Product.
              </p>
            </div>

            {/* PROCESS TIMELINE / CONTENT BLOCKS */}
            <div className="relative ml-3 md:ml-0 pl-6 md:pl-8 border-l border-white/10 space-y-12 md:space-y-16">
              
              {/* Block 1: SXI (Framework) */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">STRATEGIC FRAMEWORK: SLING EXPERIENCE INDEX (SXI)</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Architected a proprietary quantitative framework (SXI) that merged behavioral telemetry with user-perceived friction, transitioning leadership to a proactive prioritization model now used for all VP+ product reviews.
                </p>
              </div>

               {/* Block 2: Roadmap Realignment */}
               <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">STRATEGIC PIVOT: ROADMAP REALIGNMENT</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Leveraging SXI longitudinal data, I orchestrated a 2025 roadmap realignment. I secured executive buy-in to halt low-value feature releases and instead prioritize a foundational overhaul of the checkout architecture to address critical friction hotspots.
                </p>
              </div>

              {/* Block 3: Measurable Impact */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">MEASURABLE IMPACT</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  The re-architected checkout flow directly resulted in a <span className="text-green-400 font-bold">17% lift in subscription conversion</span> during Q4 2025, validating the financial impact of the SXI framework in resolving systemic friction.
                </p>
              </div>

               {/* Block 4: Human-AI */}
               <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">HUMAN-AI INTERACTION: ARCHITECTING TRUST</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
Led foundational research to define the multi-turn interaction model for a conversational TV assistant. Established performance benchmarks for latency and ambiguity resolution, and developed a &quot;Trust & System Status&quot; framework to align with customer mental models during complex, multi-turn tasks.
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: DATA VISUALIZATION - SXI IMPACT */}
          <motion.div variants={fadeInFromRight} className="lg:col-span-7 flex flex-col justify-center h-full pt-8 lg:pt-0">
            <div className="relative w-full max-w-2xl mx-auto">
               <SXIProjectMatrix />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
