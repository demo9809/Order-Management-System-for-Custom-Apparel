import React from 'react';
import { Plus, Minus, X } from 'lucide-react';
interface Variant {
  id: string;
  color: string;
  size: string;
  quantity: number;
}
interface ProductVariantSelectorProps {
  variants: Variant[];
  colors: string[];
  sizes: string[];
  onAddVariant: () => void;
  onRemoveVariant: (id: string) => void;
  onUpdateVariant: (id: string, field: keyof Variant, value: string | number) => void;
}
export const ProductVariantSelector: React.FC<ProductVariantSelectorProps> = ({
  variants,
  colors,
  sizes,
  onAddVariant,
  onRemoveVariant,
  onUpdateVariant
}) => {
  return <div className="space-y-4">
      {variants.map(variant => <div key={variant.id} className="flex flex-wrap items-center gap-4 p-4 border rounded-lg bg-gray-50">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color
            </label>
            <select value={variant.color} onChange={e => onUpdateVariant(variant.id, 'color', e.target.value)} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
              <option value="">Select color</option>
              {colors.map(color => <option key={color} value={color}>
                  {color}
                </option>)}
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Size
            </label>
            <select value={variant.size} onChange={e => onUpdateVariant(variant.id, 'size', e.target.value)} className="w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
              <option value="">Select size</option>
              {sizes.map(size => <option key={size} value={size}>
                  {size}
                </option>)}
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <div className="flex items-center">
              <button type="button" onClick={() => onUpdateVariant(variant.id, 'quantity', Math.max(0, variant.quantity - 1))} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                <Minus size={16} />
              </button>
              <input type="number" min="0" value={variant.quantity} onChange={e => onUpdateVariant(variant.id, 'quantity', Number(e.target.value))} className="mx-2 w-20 rounded-md border border-gray-300 py-2 px-3 text-sm text-center focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
              <button type="button" onClick={() => onUpdateVariant(variant.id, 'quantity', variant.quantity + 1)} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                <Plus size={16} />
              </button>
            </div>
          </div>
          <button type="button" onClick={() => onRemoveVariant(variant.id)} className="p-2 text-gray-400 hover:text-gray-600 self-end">
            <X size={20} />
          </button>
        </div>)}
      <button type="button" onClick={onAddVariant} className="w-full mt-4 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 flex items-center justify-center">
        <Plus size={16} className="mr-2" />
        Add Another Variant
      </button>
    </div>;
};