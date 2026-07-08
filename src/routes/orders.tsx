import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Package, Calendar, MapPin, CreditCard, ArrowRight, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { useAuth } from "@/contexts/AuthContext";
import { getOrdersFn } from "@/functions/auth";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "My Orders — Fast Computers" },
      { name: "description", content: "View your order history and track your purchases." },
    ],
  }),
  component: OrdersPage,
});

function OrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const result = await getOrdersFn({
          data: {
            userId: user.id,
            email: user.email,
          },
        });
        setOrders(result.orders || []);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return 'text-yellow-500';
      case 'shipped':
        return 'text-blue-500';
      case 'delivered':
        return 'text-green-500';
      case 'cancelled':
        return 'text-red-500';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500';
      case 'shipped':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-500';
      case 'delivered':
        return 'bg-green-500/10 border-green-500/30 text-green-500';
      case 'cancelled':
        return 'bg-red-500/10 border-red-500/30 text-red-500';
      default:
        return 'bg-muted/10 border-border text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero crumb="Account" kicker="My" title="Orders" />

        <div className="mx-auto max-w-7xl px-6 py-12">
          {loading ? (
            <div className="text-center py-20">
              <div className="text-muted-foreground">Loading orders...</div>
            </div>
          ) : orders.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">No Orders Yet</h2>
              <p className="text-muted-foreground mb-6">You haven't placed any orders yet.</p>
              <Link
                to="/shop"
                search={{ category: undefined }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition"
              >
                Start Shopping <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {orders.map((order, index) => (
                <motion.div
                  key={order._id || order.orderNumber}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-sm overflow-hidden"
                >
                  {/* Order Header */}
                  <div className="bg-secondary/30 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-border">
                    <div className="flex items-center gap-6">
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Order Number</div>
                        <div className="font-bold text-foreground">{order.orderNumber}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Date</div>
                        <div className="text-foreground">{new Date(order.createdAt).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border rounded-sm ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      {order.items.map((item: any, itemIndex: number) => (
                        <div key={itemIndex} className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-secondary/30 rounded-sm flex items-center justify-center overflow-hidden">
                            {item.img ? (
                              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            ) : (
                              <Package className="w-8 h-8 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-sm text-muted-foreground">Qty: {item.quantity}</div>
                          </div>
                          <div className="font-bold text-primary">PKR {item.price.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{order.city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          <span>{order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">Total</div>
                          <div className="text-xl font-bold text-primary">PKR {order.total.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Actions */}
                  <div className="bg-secondary/30 px-6 py-4 border-t border-border flex items-center justify-between">
                    <Link
                      to="/shop"
                      search={{ category: undefined }}
                      className="text-sm text-muted-foreground hover:text-primary transition flex items-center gap-2"
                    >
                      Continue Shopping <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
