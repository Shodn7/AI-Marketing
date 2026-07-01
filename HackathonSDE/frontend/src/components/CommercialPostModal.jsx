import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CommercialPostModal({ isOpen, onClose, product }) {
  const [caption, setCaption] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: true,
    twitter: true,
    tiktok: false
  });

  // توليد النص تلقائياً عند تغيير المنتج المختار
  useEffect(() => {
    if (product) {
      setCaption(`✨ New arrival: ${product.name} ✨\n\nBring nature home with our hand-picked graduation-themed choices — perfect for gifting or treating yourself. 🌿\n\n🛒 Only ${product.price} SAR\n🚚 Fast local delivery\n🔗 Shop now via the link in bio`);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* الترويسة */}
        <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-800">AI Commercial Post</h3>
              <p className="text-[11px] text-neutral-500">Review the AI-generated post and publish it to your connected social accounts.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-md text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        {/* المحتوى الداخلي للنوافذ (المعاينة والخيارات) */}
        <div className="flex-1 overflow-y-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-50/50">
          
          {/* لوحة المعاينة (اليسار) */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Preview</span>
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-xs max-w-xs mx-auto">
              <div className="p-3 flex items-center gap-2 border-b border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-sm">🌱</div>
                <div>
                  <h5 className="text-xs font-bold text-neutral-800">plantie.store</h5>
                  <p className="text-[9px] text-neutral-400">Sponsored</p>
                </div>
              </div>
              <div className="aspect-square bg-neutral-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 space-y-2 border-t border-neutral-100">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-xs font-bold text-neutral-800 leading-tight">{product.name}</h4>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-extrabold text-neutral-900">{product.price}</span>
                    <p className="text-[9px] text-neutral-400 font-bold">SAR</p>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-600 whitespace-pre-line leading-relaxed border-t pt-2 border-neutral-50 line-clamp-4">
                  {caption}
                </p>
              </div>
            </div>
          </div>

          {/* لوحة التحكم والنص (اليمين) */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Caption</span>
                <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                  <button className="hover:text-neutral-800 flex items-center gap-1 cursor-pointer" onClick={() => navigator.clipboard.writeText(caption)}>
                    📋 Copy
                  </button>
                  <button className="hover:text-neutral-800 flex items-center gap-1 cursor-pointer" onClick={() => setCaption(caption)}>
                    🔄 Regenerate
                  </button>
                </div>
              </div>
              <textarea 
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                rows={5}
                className="w-full p-3 bg-white border border-neutral-200 rounded-xl text-xs focus:outline-none focus:border-[var(--color-ring)] leading-relaxed text-neutral-700 shadow-inner resize-none"
              />
            </div>

            {/* قنوات التواصل */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Publish To</span>
              <div className="space-y-1.5">
                <div 
                  onClick={() => setSelectedPlatforms({ ...selectedPlatforms, instagram: !selectedPlatforms.instagram })}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${selectedPlatforms.instagram ? 'bg-emerald-50/60 border-emerald-200' : 'bg-white border-neutral-200'}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📸</span>
                    <div>
                      <p className="text-xs font-bold text-neutral-800">Instagram</p>
                      <p className="text-[10px] text-neutral-400">Connected @plantie.store</p>
                    </div>
                  </div>
                  {selectedPlatforms.instagram && <CheckCircle2 size={18} className="text-emerald-600 fill-emerald-600 text-white" />}
                </div>

                <div 
                  onClick={() => setSelectedPlatforms({ ...selectedPlatforms, twitter: !selectedPlatforms.twitter })}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${selectedPlatforms.twitter ? 'bg-emerald-50/60 border-emerald-200' : 'bg-white border-neutral-200'}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">🐦</span>
                    <div>
                      <p className="text-xs font-bold text-neutral-800">X (Twitter)</p>
                      <p className="text-[10px] text-neutral-400">Connected @plantie</p>
                    </div>
                  </div>
                  {selectedPlatforms.twitter && <CheckCircle2 size={18} className="text-emerald-600 fill-emerald-600 text-white" />}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* أزرار الإجراءات السفلية */}
        <div className="p-3 border-t border-[var(--color-border)] flex items-center justify-between bg-white px-5">
          <span className="text-xs text-neutral-500 font-medium">
            {Object.values(selectedPlatforms).filter(Boolean).length} platforms selected
          </span>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:bg-neutral-50 border border-neutral-200 rounded-lg cursor-pointer">
              Cancel
            </button>
            <button 
              onClick={() => { alert('Post Published!'); onClose(); }}
              className="px-5 py-2 text-xs font-semibold bg-[var(--color-mint)] text-[var(--color-mint-foreground)] rounded-lg hover:opacity-90 shadow-xs cursor-pointer"
            >
              Publish now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}