
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash, Check, X } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  status: "active" | "inactive";
  stock: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Laptop Pro", price: 1299, status: "active", stock: 15 },
    { id: 2, name: "Wireless Mouse", price: 49, status: "active", stock: 50 },
    { id: 3, name: "Keyboard", price: 89, status: "inactive", stock: 0 },
    { id: 4, name: "Monitor 4K", price: 399, status: "active", stock: 8 },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Product>>({});

  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now(),
      name: `New Product ${products.length + 1}`,
      price: 99,
      status: "active",
      stock: 10,
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const startEditing = (product: Product) => {
    setEditingId(product.id);
    setEditForm(product);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEditing = () => {
    if (editingId && editForm) {
      setProducts(products.map(p => 
        p.id === editingId ? { ...p, ...editForm } : p
      ));
      setEditingId(null);
      setEditForm({});
    }
  };

  const toggleStatus = (id: number) => {
    setProducts(products.map(p => 
      p.id === id 
        ? { ...p, status: p.status === "active" ? "inactive" : "active" as const }
        : p
    ));
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Products</h1>
          <Button onClick={addProduct} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  {editingId === product.id ? (
                    <Input
                      value={editForm.name || ""}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="text-lg font-semibold"
                    />
                  ) : (
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  )}
                  <Badge 
                    variant={product.status === "active" ? "default" : "secondary"}
                    className="cursor-pointer"
                    onClick={() => toggleStatus(product.id)}
                  >
                    {product.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {editingId === product.id ? (
                    <div className="space-y-2">
                      <Input
                        type="number"
                        value={editForm.price || ""}
                        onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
                        placeholder="Price"
                      />
                      <Input
                        type="number"
                        value={editForm.stock || ""}
                        onChange={(e) => setEditForm({ ...editForm, stock: Number(e.target.value) })}
                        placeholder="Stock"
                      />
                    </div>
                  ) : (
                    <>
                      <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                      <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                    </>
                  )}
                  
                  <div className="flex gap-2 mt-4">
                    {editingId === product.id ? (
                      <>
                        <Button variant="outline" size="sm" onClick={saveEditing} className="flex-1">
                          <Check className="w-3 h-3 mr-1" />
                          Save
                        </Button>
                        <Button variant="outline" size="sm" onClick={cancelEditing}>
                          <X className="w-3 h-3" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" size="sm" className="flex-1" onClick={() => startEditing(product)}>
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => deleteProduct(product.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash className="w-3 h-3" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
