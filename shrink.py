import re

with open("components/sections/FrameworkSection.tsx", "r") as f:
    text = f.read()

# Section padding
text = text.replace('py-16 md:py-24', 'py-8 md:py-12')
# Header margins
text = text.replace('mb-10 border-b', 'mb-6 border-b')
text = text.replace('pb-6 flex flex-col', 'pb-4 flex flex-col')
text = text.replace('text-[10px] font-black uppercase tracking-widest mb-4', 'text-[10px] font-black uppercase tracking-widest mb-2')
text = text.replace('text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3', 'text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2')
text = text.replace('text-base text-zinc-400 font-medium tracking-tight mb-4', 'text-sm text-zinc-400 font-medium tracking-tight mb-3')
text = text.replace('text-xs md:text-sm font-mono text-zinc-500 leading-relaxed border-l-2', 'text-xs font-mono text-zinc-500 leading-relaxed border-l-2')

# Columns wrapper
text = text.replace('gap-8 lg:gap-10 items-start', 'gap-4 xl:gap-6 items-start')

# Sidebar
text = text.replace('w-full lg:w-80 shrink-0 flex flex-col sticky top-24 z-20', 'w-full lg:w-64 shrink-0 flex flex-col sticky top-20 z-20')
text = text.replace('p-5 flex flex-col', 'p-4 flex flex-col')
text = text.replace('<div className="space-y-6">', '<div className="space-y-3">')
text = text.replace('text-[10px] font-black text-zinc-500 uppercase tracking-widest px-1 mb-3', 'text-[10px] font-black text-zinc-500 uppercase tracking-widest px-1 mb-2')
text = text.replace('w-full text-left px-4 py-2.5 rounded-xl text-xs', 'w-full text-left px-3 py-1.5 rounded-lg text-[11px]')
text = text.replace('pt-5 mt-4 border-t', 'pt-3 mt-3 border-t')
text = text.replace('py-3.5 px-4', 'py-2 px-3')
text = text.replace('mt-3 font-mono', 'mt-2 font-mono')

# Main Content Details
text = text.replace('p-6 lg:p-8 flex flex-col justify-center', 'p-4 md:p-6 flex flex-col justify-center')
text = text.replace('space-y-6 w-full', 'space-y-4 w-full')
text = text.replace('w-10 h-10 rounded-xl', 'w-8 h-8 rounded-lg')
text = text.replace('svg className="w-5 h-5"', 'svg className="w-4 h-4"')
text = text.replace('svg className="w-5 h-5 text-zinc-400"', 'svg className="w-4 h-4 text-zinc-400"')
text = text.replace('mb-2 tracking-tight">', 'mb-1 tracking-tight">')
text = text.replace('text-xl font-bold text-white', 'text-lg font-bold text-white')
text = text.replace('text-sm leading-relaxed font-medium', 'text-xs leading-relaxed font-medium')
text = text.replace('gap-4 flex-col sm:flex-row', 'gap-4 flex-col sm:flex-row items-start')

# Scientific Foundation
text = text.replace('mt-6 p-5', 'mt-4 p-4')

# Checklist Column
text = text.replace('w-full xl:w-[360px] p-6 lg:p-8', 'w-full xl:w-[300px] p-4 md:p-6')
text = text.replace('hidden xl:block mb-5', 'hidden xl:block mb-4')
text = text.replace('space-y-2', 'space-y-1.5')
text = text.replace('gap-3 p-3.5 rounded-xl', 'gap-2 p-2.5 rounded-lg')
text = text.replace('w-4 h-4 rounded border-2 shrink-0 mt-0.5', 'w-3.5 h-3.5 rounded border border-zinc-500 shrink-0 mt-0.5')
text = text.replace('svg className="w-2.5 h-2.5 text-white"', 'svg className="w-2 h-2 text-white"')
text = text.replace('border-2 shrink-0 border-indigo-500', 'border shrink-0 border-indigo-500')
text = text.replace('border-2 shrink-0 mt-0.5', 'border-2 shrink-0 mt-px')

with open("components/sections/FrameworkSection.tsx", "w") as f:
    f.write(text)
