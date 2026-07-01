import React from 'react';
import { 
  Home, Package, ShoppingBag, Users, BarChart3, HelpCircle, 
  MessageSquare, FileText, Megaphone, MapPin, Monitor, Settings 
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[var(--sidebar)] text-[var(--sidebar-foreground)] flex flex-col border-r border-neutral-800/50 shrink-0 h-screen sticky top-0">
      {/* الهوية والشعار */}
      <div className="p-4 flex items-center gap-3 border-b border-neutral-800/60">
        <div className="w-10 h-10 rounded-xl bg-[var(--mint)] flex items-center justify-center text-[var(--mint-foreground)] font-bold text-xl shadow-inner">
          🌱
        </div>
        <div>
          <h1 className="font-bold text-sm text-neutral-100 tracking-wide">Plantie</h1>
          <p className="text-[11px] text-neutral-400">Merchant Dashboard</p>
        </div>
      </div>

      {/* زر زيارة المتجر */}
      <div className="p-3">
        <button className="w-full flex items-center justify-between px-3 py-2 text-xs bg-neutral-800 hover:bg-neutral-700/80 rounded-lg transition-all duration-200 text-white cursor-pointer group">
          <span className="flex items-center gap-2 text-neutral-300 group-hover:text-white">
            <Monitor size={14} /> Visit Store
          </span>
          <span className="text-[10px] bg-neutral-700 px-1.5 py-0.5 rounded text-neutral-400 font-semibold">PLUS</span>
        </button>
      </div>

      {/* القائمة الرئيسية للوحة التحكم */}
      <nav className="flex-1 px-2 py-3 space-y-1 overflow-y-auto text-sm scrollbar-none">
        <a href="#home" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <Home size={18} /> <span>Home</span>
        </a>
        <a href="#products" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[var(--sidebar-active)] text-[var(--mint)] font-medium transition-all duration-150">
          <Package size={18} /> <span>Products</span>
        </a>
        <a href="#orders" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <ShoppingBag size={18} /> <span>Orders</span>
        </a>
        <a href="#customers" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <Users size={18} /> <span>Customers</span>
        </a>
        <a href="#reports" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <BarChart3 size={18} /> <span>Reports</span>
        </a>
        <a href="#reviews" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <HelpCircle size={18} /> <span>Questions & Reviews</span>
        </a>
        <a href="#pages" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <FileText size={18} /> <span>Pages</span>
        </a>
        <a href="#marketing" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <Megaphone size={18} /> <span>Marketing Tools</span>
        </a>
        <a href="#chat" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <span className="flex items-center gap-3"><MessageSquare size={18} /> Store Chat</span>
          <span className="text-[10px] bg-[var(--mint)] text-[var(--mint-foreground)] font-bold px-1.5 py-0.5 rounded shadow-xs">New</span>
        </a>

        <div className="pt-4 pb-1 px-3 text-[11px] font-bold uppercase tracking-wider text-neutral-500">Sales Channels</div>
        <a href="#local" className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <MapPin size={16} /> <span>Local</span>
        </a>
        <a href="#pos" className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <ShoppingBag size={16} /> <span>Point of Sale</span>
        </a>

        <div className="pt-4 pb-1 px-3 text-[11px] font-bold uppercase tracking-wider text-neutral-500">Support Tools</div>
        <a href="#services" className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40 transition-all duration-150">
          <Settings size={16} /> <span>Store Services</span>
        </a>
      </nav>
    </aside>
  );
}