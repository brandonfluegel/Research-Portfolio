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
  ZAxis,
  Cell
} from 'recharts';

// --- SXI MATRIX DATA & HELPERS ---

interface MatrixDataPoint {
  name: string;
  x: number;
  y: number;
  z: number;
  type: string;
}

const data: MatrixDataPoint[] = [
  { name: 'Live TV Guide', x: 85, y: -40, z: 90, type: 'Friction' }, // High Hours, Low SXI (Monitor) - High Churn Risk
  { name: 'DVR Space', x: 75, y: 87, z: 20, type: 'Growth' },        // High Hours, High SXI (Fortify) - Low Churn Risk
  { name: 'Home Discovery', x: 65, y: 45, z: 40, type: 'Neutral' },  // Mid Hours, Mid SXI
  { name: 'Search', x: 30, y: -20, z: 60, type: 'Friction' },        // Low Hours, Low SXI (Prospect)
  { name: 'Collections', x: 25, y: 78, z: 15, type: 'Growth' },      // Low Hours, High SXI (Prioritize)
  { name: 'Details Page', x: 55, y: 10, z: 35, type: 'Neutral' },    // Mid
  { name: 'Settings', x: 15, y: -65, z: 10, type: 'Neutral' },       // Low Hours, Very Low SXI
  { name: 'On Demand', x: 60, y: 72, z: 25, type: 'Growth' },        // Mid-High Hours, High SXI
];

// Helper to get qualitative labels
const getSatisfactionLabel = (score: number) => {
  if (score >= 65) return "Growth Driver";
  if (score > 40) return "Satisfied";
  if (score > 0) return "Neutral";
  if (score > -40) return "Friction";
  return "Critical Issue";
};

const getEngagementLabel = (hours: number) => {
  if (hours > 60) return "High Utility";
  if (hours > 30) return "Moderate Use";
  return "Low Adoption";
};

// Custom Tooltip
const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: MatrixDataPoint }[] }) => {
  if (active && payload && payload.length && payload[0].payload) {
    const data = payload[0].payload;
    const satisfaction = getSatisfactionLabel(data.y);
    const engagement = getEngagementLabel(data.x);
    
    return (
      <div className="bg-zinc-900/95 border border-white/10 p-3 md:p-4 rounded-lg shadow-2xl backdrop-blur-md min-w-[200px]">
        <h4 className="font-bold text-white text-sm mb-3 border-b border-white/10 pb-2">{data.name}</h4>
        
        {/* Metric Grid */}
        <div className="grid grid-cols-2 gap-4 mb-3">
          
          {/* Satisfaction Col */}
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Satisfaction</div>
            <div className={`text-lg font-bold ${data.y > 0 ? "text-green-400" : "text-amber-500"}`}>
              {data.y > 0 ? "+" : ""}{data.y}
            </div>
            <div className={`text-[10px] font-medium ${data.y > 0 ? "text-green-400/70" : "text-amber-500/70"}`}>
              {satisfaction}
            </div>
          </div>

          {/* Engagement Col */}
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Watch Time</div>
            <div className="text-lg font-bold text-blue-400">{data.x}h</div>
            <div className="text-[10px] text-blue-300/70 font-medium">{engagement}</div>
          </div>
        </div>

        {/* Action / Churn Risk Footer */}
        <div className={`text-[10px] font-bold px-2 py-1.5 rounded text-center border uppercase tracking-widest ${
          data.z > 50 
            ? "bg-red-500/10 border-red-500/20 text-red-400" 
            : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
        }`}>
          {data.z > 50 ? "⚠ High Churn Risk" : "✓ Retention Driver"}
        </div>
      </div>
    );
  }
  return null;
};

function SXIProjectMatrix() {
  return (
    <div className="w-full bg-black/50 p-4 md:p-6 rounded-xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
      
      {/* Aesthetic Background Gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-6 relative z-10 gap-4 md:gap-0">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            SXI PRIORITIZATION MATRIX
          </h3>
          <p className="text-[10px] md:text-xs text-zinc-400 mt-1 font-mono uppercase tracking-widest">
            Portfolio Performance • Q4 2025
          </p>
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-3 md:gap-4 text-[9px] md:text-[10px] text-zinc-500 font-mono uppercase">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500/80" /> Growth
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500/80" /> Friction
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full border border-zinc-600" /> Size = Churn
          </div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-[350px] md:h-[450px] w-full font-sans text-xs relative z-10 group bg-zinc-900/50 rounded-xl border border-white/5 backdrop-blur-sm overflow-hidden">
        
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* HTML Text Overlay for Quadrants (Refined Minimalist HUD - Professional Grade) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
             
             {/* Top Right: FORTIFY (Strategic Win) */}
             <div className="absolute top-0 right-0 p-6 text-right">
                <div className="flex flex-col items-end">
                  <div className="text-emerald-500/80 text-[10px] uppercase font-mono tracking-[0.2em] font-bold mb-1">Star Strategy</div>
                  <div className="text-emerald-500 font-bold text-3xl md:text-5xl uppercase tracking-tighter leading-none opacity-20 mix-blend-overlay">Fortify</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="h-px w-8 bg-emerald-500/40"></span>
                    <span className="text-emerald-400/50 text-[9px] font-mono tracking-wide">High Value / Low Friction</span>
                  </div>
                </div>
             </div>
             
             {/* Bottom Right: FIX PRIORITY (Critical) */}
             <div className="absolute bottom-0 right-0 p-6 text-right">
                <div className="flex flex-col items-end">
                   <div className="text-red-500/80 text-[10px] uppercase font-mono tracking-[0.2em] font-bold mb-1">Critical Risk</div>
                   <div className="text-red-500 font-bold text-3xl md:text-5xl uppercase tracking-tighter leading-none opacity-20 mix-blend-overlay">Fix<br/>Priority</div>
                   <div className="flex items-center gap-2 mt-2">
                     <span className="h-px w-8 bg-red-500/40"></span>
                     <span className="text-red-400/50 text-[9px] font-mono tracking-wide">High Usage / High Friction</span>
                   </div>
                </div>
             </div>

             {/* Top Left: NICHE (Tactical) */}
             <div className="absolute top-0 left-0 p-6 text-left">
                <div className="flex flex-col items-start">
                   <div className="text-blue-500/80 text-[10px] uppercase font-mono tracking-[0.2em] font-bold mb-1">Maintain</div>
                   <div className="text-blue-500 font-bold text-3xl md:text-5xl uppercase tracking-tighter leading-none opacity-20 mix-blend-overlay">Niche</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-blue-400/50 text-[9px] font-mono tracking-wide">Low Usage / Satisfaction</span>
                      <span className="h-px w-8 bg-blue-500/40"></span>
                    </div>
                </div>
             </div>

             {/* Bottom Left: DEPRIORITIZE (Trash) */}
             <div className="absolute bottom-0 left-0 p-6 text-left">
                <div className="flex flex-col items-start">
                   <div className="text-zinc-500/80 text-[10px] uppercase font-mono tracking-[0.2em] font-bold mb-1">Ignore</div>
                   <div className="text-zinc-500 font-bold text-3xl md:text-5xl uppercase tracking-tighter leading-none opacity-20 mix-blend-overlay">Deprioritize</div>
                   <div className="flex items-center gap-2 mt-2">
                      <span className="text-zinc-500/50 text-[9px] font-mono tracking-wide">Low Value Loop</span>
                      <span className="h-px w-8 bg-zinc-500/40"></span>
                   </div>
                </div>
             </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{ top: 40, right: 40, bottom: 40, left: 10 }}
          >
            {/* Minimalist Grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" vertical={false} horizontal={false} opacity={0.15} />

            {/* Subtle Gradient Zones - Even more subtle professional look */}
            <ReferenceArea x1={50} x2={100} y1={0} y2={100} fill="#10b981" fillOpacity={0.02} />
            <ReferenceArea x1={50} x2={100} y1={-100} y2={0} fill="#ef4444" fillOpacity={0.03} />
            <ReferenceArea x1={0} x2={50} y1={0} y2={100} fill="#3b82f6" fillOpacity={0.02} />
            <ReferenceArea x1={0} x2={50} y1={-100} y2={0} fill="#71717a" fillOpacity={0.02} />


            {/* X-Axis: Engagement - Professional styling */}
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Engagement" 
              unit=""
              stroke="#52525b"
              tick={{ fill: '#a1a1aa', fontSize: 10, fontFamily: 'monospace' }}
              tickFormatter={(value) => `${value}h`}
              tickLine={{ stroke: '#52525b', opacity: 0.5 }}
              axisLine={{ stroke: '#52525b', opacity: 0.3 }}
              domain={[0, 100]}
              dy={10}
            >
              <Label 
                value="Engagement (Hours Watched)" 
                offset={0} 
                position="insideBottom" 
                dy={35} 
                className="fill-zinc-500 text-[9px] font-mono uppercase tracking-[0.2em] font-bold" 
              />
            </XAxis>

            {/* Y-Axis: SXI Score - Professional styling */}
            <YAxis 
              type="number" 
              dataKey="y" 
              name="SXI Score" 
              unit=""
              stroke="#52525b"
              tick={{ fill: '#a1a1aa', fontSize: 10, fontFamily: 'monospace' }}
              tickFormatter={(value) => value > 0 ? `+${value}` : `${value}`}
              tickLine={{ stroke: '#52525b', opacity: 0.5 }}
              axisLine={{ stroke: '#52525b', opacity: 0.3 }}
              domain={[-100, 100]}
              dx={-10}
            >
              <Label 
                value="User Satisfaction (SXI Score)" 
                angle={-90} 
                position="insideLeft" 
                className="fill-zinc-500 text-[9px] font-mono uppercase tracking-[0.2em] font-bold" 
                style={{ textAnchor: 'middle' }} 
                dx={-20}
              />
            </YAxis>

            {/* Z-Axis: Bubble Size */}
            <ZAxis type="number" dataKey="z" range={[80, 500]} name="Churn Correlation" />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3', stroke: '#ffffff20' }} />

            {/* Reference Lines - Professional Clean Look */}
            <ReferenceLine x={50} stroke="#3f3f46" strokeDasharray="3 3" strokeOpacity={0.5} />
            <ReferenceLine y={0} stroke="#3f3f46" strokeDasharray="3 3" strokeOpacity={0.5} />

            {/* Churn Cliff - Technical Marker Style */}
            <ReferenceLine 
              y={65} 
              stroke="#f59e0b" 
              strokeDasharray="4 2" 
              strokeWidth={1}
              strokeOpacity={0.8}
            >
               <Label 
                  value="CHURN CLIFF (65)" 
                  position="insideTopRight" 
                  fill="#f59e0b" 
                  fontSize={9}
                  className="font-mono font-bold tracking-wider"
                  offset={10}
                />
            </ReferenceLine>

            {/* Data Points - Enhanced */}
            <Scatter name="Features" data={data} fill="#8884d8">
              {data.map((entry: MatrixDataPoint, index: number) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.y > 65 ? '#10b981' : (entry.y > 0 ? '#a3e635' : '#fbbf24')} 
                  stroke={entry.z > 50 ? '#ef4444' : '#ffffff20'} 
                  strokeWidth={entry.z > 50 ? 2 : 1}
                  opacity={0.9}
                  style={{ filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.5))' }}
                />
              ))}
            </Scatter>

          </ScatterChart>
        </ResponsiveContainer>
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
