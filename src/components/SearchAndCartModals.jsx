import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ShoppingBag, Trash2, ArrowRight, ExternalLink, Sparkles, Plus, Minus } from 'lucide-react';
import { menuItems } from '../data/menuItems';

export function SearchModal({ isOpen, onClose, onSelectItem }) {
  const [query, setQuery] = useState('');

  const searchResults = query.trim() === '' ? [] : menuItems.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#111317] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-white/10 gap-2">
              <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search signature dishes, coffee, sizzlers..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none"
                />
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[55vh] sm:max-h-[50vh] overflow-y-auto mt-3 sm:mt-4 space-y-2 pr-1">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (onSelectItem) onSelectItem(item);
                      onClose();
                    }}
                    className="p-2.5 sm:p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800/80 border border-white/5 flex items-center justify-between cursor-pointer transition-colors group gap-2"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <img src={item.image} alt={item.name} className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[9px] sm:text-[10px] text-blue-400 uppercase font-bold tracking-wider block">
                          {item.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 truncate">
                          {item.name}
                        </h4>
                        <span className="text-[11px] sm:text-xs text-neutral-400 line-clamp-1">{item.description}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pl-1">
                      <span className="font-mono font-bold text-xs sm:text-sm text-white">₹{item.price}</span>
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md border border-amber-400/20 group-hover:bg-amber-400 group-hover:text-black transition-all whitespace-nowrap">
                        Order →
                      </span>
                    </div>
                  </div>
                ))
              ) : query.trim() !== '' ? (
                <div className="py-8 text-center text-sm text-neutral-500">
                  No dishes found for &quot;{query}&quot;. Try &apos;Coffee&apos;, &apos;Burger&apos;, or &apos;Pizza&apos;.
                </div>
              ) : (
                <div className="py-8 text-center text-xs text-neutral-500">
                  Type to search popular items from Blue Mug Cafe Kolkata
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-[#0e1014] border-l border-white/10 text-white flex flex-col justify-between shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">Your Cafe Order</h3>
                    <span className="text-[11px] text-neutral-400">{cartItems.length} items in tray</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-neutral-900/80 border border-white/5 flex items-center justify-between gap-3"
                    >
                      <img src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
                      
                      <div className="flex-1">
                        <h4 className="font-bold text-xs text-white leading-tight">{item.name}</h4>
                        <span className="font-mono text-xs text-amber-400 font-bold block mt-1">₹{item.price}</span>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-xs hover:bg-white/20"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-xs hover:bg-white/20"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-center text-neutral-500 text-sm">
                    Your order tray is currently empty.
                  </div>
                )}
              </div>

              {/* Footer Checkout */}
              <div className="p-6 border-t border-white/10 bg-neutral-950 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Estimated Total</span>
                  <span className="font-mono font-bold text-xl text-white">₹{subtotal}</span>
                </div>

                <div className="space-y-2">
                  <a
                    href="https://www.zomato.com/kolkata/blue-mug-jodhpur-park/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-[#e23744] hover:bg-[#d02835] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <span>Instant Order on Zomato</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://www.swiggy.com/city/kolkata/cafe-blue-mug-jodhpur-park-jadavpur-rest56983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-[#fc8019] hover:bg-[#e46f0f] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <span>Instant Order on Swiggy</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-[10px] text-center text-neutral-500">
                  Direct table reservations &amp; takeaway available at +91 62904 41067
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
