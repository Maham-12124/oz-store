// src/app/admin/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Header } from '@/components/layout/Header';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Package, ShoppingCart, Users, DollarSign, TrendingUp, Eye } from 'lucide-react';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== 'ADMIN') {
    redirect('/');
  }

  const [totalOrders, totalUsers, totalProducts, revenueData, recentOrders] = await Promise.all([
    prisma.order.count(),
    prisma.user.count(),
    prisma.product.count(),
    prisma.order.aggregate({ _sum: { total: true }, where: { paymentStatus: 'PAID' } }),
    prisma.order.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { name: true } }, items: true },
    }),
  ]);

  const stats = [
    { title: 'Total Orders', value: totalOrders, icon: ShoppingCart, color: 'bg-blue-500', change: '+12%' },
    { title: 'Total Revenue', value: formatPrice(revenueData._sum.total || 0), icon: DollarSign, color: 'bg-green-500', change: '+8%' },
    { title: 'Total Users', value: totalUsers, icon: Users, color: 'bg-purple-500', change: '+5%' },
    { title: 'Total Products', value: totalProducts, icon: Package, color: 'bg-orange-500', change: '+3%' },
  ];

  const statusColors: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-700',
    CONFIRMED: 'bg-blue-100 text-blue-700',
    DELIVERED: 'bg-green-100 text-green-700',
    CANCELLED: 'bg-red-100 text-red-700',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex gap-2">
            <Link href="/admin/products" className="bg-[#F85606] text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-orange-600">
              Manage Products
            </Link>
            <Link href="/admin/orders" className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-lg font-medium hover:bg-gray-50">
              Manage Orders
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map(({ title, value, icon: Icon, color, change }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`${color} w-10 h-10 rounded-xl flex items-center justify-center`}>
                  <Icon size={18} className="text-white" />
                </div>
                <span className="text-xs text-green-600 font-medium flex items-center gap-0.5">
                  <TrendingUp size={11} /> {change}
                </span>
              </div>
              <p className="text-xl font-bold text-gray-800">{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{title}</p>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-gray-800">Recent Orders</h2>
            <Link href="/admin/orders" className="text-sm text-[#F85606] hover:underline">View All</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Order #</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Customer</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Items</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Total</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3 font-medium text-gray-800">{order.orderNumber}</td>
                    <td className="px-5 py-3 text-gray-600">{order.user.name}</td>
                    <td className="px-5 py-3 text-gray-600">{order.items.length} item(s)</td>
                    <td className="px-5 py-3 font-semibold text-[#F85606]">{formatPrice(order.total)}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[order.status] || 'bg-gray-100 text-gray-600'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="px-5 py-3">
                      <Link href={`/orders/${order.id}`} className="text-gray-400 hover:text-[#F85606]">
                        <Eye size={15} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
