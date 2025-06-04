import React, { useState } from 'react';
import { Plus, Save, X } from 'lucide-react';
interface ConfigItem {
  id: string;
  name: string;
}
interface ProductConfigurationPanelProps {
  onSave: () => void;
}
export const ProductConfigurationPanel: React.FC<ProductConfigurationPanelProps> = ({
  onSave
}) => {
  const [products, setProducts] = useState<ConfigItem[]>([{
    id: '1',
    name: 'T-Shirt'
  }, {
    id: '2',
    name: 'Jersey'
  }, {
    id: '3',
    name: 'Polo Shirt'
  }]);
  const [colors, setColors] = useState<ConfigItem[]>([{
    id: '1',
    name: 'White'
  }, {
    id: '2',
    name: 'Black'
  }, {
    id: '3',
    name: 'Red'
  }]);
  const [sizes, setSizes] = useState<ConfigItem[]>([{
    id: '1',
    name: 'S'
  }, {
    id: '2',
    name: 'M'
  }, {
    id: '3',
    name: 'L'
  }, {
    id: '4',
    name: 'XL'
  }]);
  const [newProduct, setNewProduct] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newSize, setNewSize] = useState('');
  const handleAddItem = (type: 'products' | 'colors' | 'sizes', value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    if (!value.trim()) return;
    const newItem = {
      id: Date.now().toString(),
      name: value.trim()
    };
    switch (type) {
      case 'products':
        setProducts([...products, newItem]);
        break;
      case 'colors':
        setColors([...colors, newItem]);
        break;
      case 'sizes':
        setSizes([...sizes, newItem]);
        break;
    }
    setter('');
  };
  const handleRemoveItem = (type: 'products' | 'colors' | 'sizes', id: string) => {
    switch (type) {
      case 'products':
        setProducts(products.filter(item => item.id !== id));
        break;
      case 'colors':
        setColors(colors.filter(item => item.id !== id));
        break;
      case 'sizes':
        setSizes(sizes.filter(item => item.id !== id));
        break;
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to backend
    onSave();
  };
  const ConfigurationSection = ({
    title,
    items,
    newValue,
    onNewValueChange,
    onAdd,
    onRemove,
    placeholder
  }: {
    title: string;
    items: ConfigItem[];
    newValue: string;
    onNewValueChange: (value: string) => void;
    onAdd: () => void;
    onRemove: (id: string) => void;
    placeholder: string;
  }) => <div className="mb-6">
      <h3 className="text-base font-medium text-gray-900 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {items.map(item => <div key={item.id} className="flex items-center bg-gray-100 rounded-md px-3 py-1">
            <span className="text-sm text-gray-700">{item.name}</span>
            <button type="button" onClick={() => onRemove(item.id)} className="ml-2 text-gray-400 hover:text-gray-600">
              <X size={14} />
            </button>
          </div>)}
      </div>
      <div className="flex gap-2">
        <input type="text" value={newValue} onChange={e => onNewValueChange(e.target.value)} placeholder={placeholder} className="flex-1 rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" />
        <button type="button" onClick={onAdd} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md flex items-center hover:bg-gray-200">
          <Plus size={16} className="mr-1" />
          Add
        </button>
      </div>
    </div>;
  return <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <ConfigurationSection title="Product Types" items={products} newValue={newProduct} onNewValueChange={setNewProduct} onAdd={() => handleAddItem('products', newProduct, setNewProduct)} onRemove={id => handleRemoveItem('products', id)} placeholder="Enter new product type..." />
        <ConfigurationSection title="Colors" items={colors} newValue={newColor} onNewValueChange={setNewColor} onAdd={() => handleAddItem('colors', newColor, setNewColor)} onRemove={id => handleRemoveItem('colors', id)} placeholder="Enter new color..." />
        <ConfigurationSection title="Sizes" items={sizes} newValue={newSize} onNewValueChange={setNewSize} onAdd={() => handleAddItem('sizes', newSize, setNewSize)} onRemove={id => handleRemoveItem('sizes', id)} placeholder="Enter new size..." />
      </div>
      <div className="mt-6 flex justify-end">
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md flex items-center hover:bg-primary-700 transition-colors">
          <Save className="w-4 h-4 mr-2" />
          Save Configuration
        </button>
      </div>
    </form>;
};