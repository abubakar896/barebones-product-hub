
import { Layout } from "@/components/Layout";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-blue-500 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p className="text-blue-100">Manage your products and tasks</p>
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border p-4">
            <h3 className="text-gray-600 text-sm">Products</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <h3 className="text-gray-600 text-sm">Tasks</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <h3 className="text-gray-600 text-sm">Team</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button 
              onClick={() => navigate('/products')}
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Product
            </button>
            <button 
              onClick={() => navigate('/tasks')}
              className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
