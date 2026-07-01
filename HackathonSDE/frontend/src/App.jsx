import React, { useState } from 'react';
import { Search, Bell, Moon, Plus, Sparkles, AlertTriangle, ChevronDown, List, Grid, SlidersHorizontal, HelpCircle, Home } from 'lucide-react';
import Sidebar from './components/Sidebar';
import CommercialPostModal from './components/CommercialPostModal';

const initialProducts = [
  {
    id: 1,
    name: 'Graduation-themed chocolate cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=200',
    price: 12,
    stock: 'Unlimited',
    categories: ['Add-ons']
  },
  {
    id: 2,
    name: 'Dieffenbachia',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=200',
    price: 220,
    stock: 1,
    categories: ['Indoor plants', 'All (hidden)']
  },
  {
    id: 3,
    name: 'Graduation mini bouquet box',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=200',
    price: 230,
    stock: 19,
    categories: ['Bouquets', 'Boxes']
  },
  {
    id: 4,
    name: 'Mini bouquet with a gift bag',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=200',
    price: 31.5,
    stock: '—',
    categories: [],
    isUncategorized: true
  }
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [activeProduct, setActiveProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openCommercialModal = (product) => {
    setActiveProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] antialiased font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        {/* شريط البحث العلوي */}
        <header className="h-16 bg-white border-b border-[var(--color-border)] px-6 flex items-center justify-between gap-4 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="bg-neutral-900 text-white text-xs font-bold px-2 py-1 rounded">Salla AD</span>
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by product name, category, description or SKU" 
                className="w-full pl-9 pr-20 py-1.5 bg-neutral-50 border border-[var(--color-border)] rounded-lg text-xs focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell size={18} className="text-neutral-500" />
            <Moon size={18} className="text-neutral-500" />
            <span className="text-xs font-medium border-l pl-4">Plantie</span>
          </div>
        </header>

        {/* محتوى الصفحة الرئيسي */}
        <div className="p-6 max-w-7xl w-full mx-auto space-y-4 flex-1">
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <div className="flex items-center gap-1"><Home size={12} /> / <span>Products</span></div>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-[var(--color-mint)] text-[var(--color-mint-foreground)] rounded-lg text-xs font-medium"><HelpCircle size={14} /> Help</button>
          </div>

          <h2 className="text-xl font-bold">Products</h2>

          {/* التنبيهات المستوحاة من الصورة */}
          <div className="space-y-2">
            <div className="bg-[var(--color-warning-bg)] text-[var(--color-warning-fg)] text-xs p-3 rounded-lg border border-amber-200 flex items-center gap-2">
              <AlertTriangle size={16} />
              <span>You have <strong>7 products</strong> running low on stock. <span className="underline cursor-pointer">View products</span></span>
            </div>
          </div>

          {/* شريط الإجراءات فوق الجدول */}
          <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[var(--color-border)]">
            <div className="flex items-center gap-1">
              <button className="p-1.5 bg-neutral-50 border border-neutral-200 rounded-md"><List size={14} /></button>
              <button className="p-1.5 text-neutral-400"><Grid size={14} /></button>
            </div>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-[var(--color-mint)] text-[var(--color-mint-foreground)] text-xs font-semibold rounded-lg">
              <Plus size={14} /> Add new product
            </button>
          </div>

          {/* قائمة المنتجات كصفوف تفاعلية */}
          <div className="space-y-3">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-[var(--color-border)] rounded-xl p-4 flex items-center gap-4">
                <input type="checkbox" className="rounded text-[var(--color-mint)]" />
                
                <div className="relative w-14 h-14 bg-neutral-100 rounded-lg overflow-hidden border">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-neutral-800">{product.name}</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.categories.map((cat, i) => (
                      <span key={i} className="bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] text-[10px] px-2 py-0.5 rounded">
                        {cat}
                      </span>
                    ))}
                    {product.isUncategorized && <span className="text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded">Uncategorized</span>}
                  </div>
                </div>

                {/* سعر المنتج */}
                <div className="w-32 flex items-center border rounded-lg px-2 bg-neutral-50 text-xs py-1.5">
                  <span className="w-full text-right font-medium">{product.price}</span>
                  <span className="text-[10px] text-neutral-400 ml-1">SAR</span>
                </div>

                {/* المخزون */}
                <div className="w-24 border rounded-lg px-2 text-xs py-1.5 text-neutral-600 font-medium">
                  {product.stock}
                </div>

                {/* الأزرار والإجراءات */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => openCommercialModal(product)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-lg hover:bg-emerald-100 border border-emerald-100 cursor-pointer"
                  >
                    <Sparkles size={13} /> <span>Create commercial post</span>
                  </button>
                  <button className="px-3 py-1.5 bg-[var(--color-mint)] text-[var(--color-mint-foreground)] text-xs font-semibold rounded-lg">
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* استدعاء النافذة المنبثقة التفاعلية */}
      <CommercialPostModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        product={activeProduct} 
      />
    </div>
  );
}