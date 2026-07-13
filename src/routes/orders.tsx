import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Package, MapPin, CreditCard, ArrowRight, Star, CheckCircle } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { ReviewModal } from "@/components/site/ReviewModal";
import { useAuth } from "@/contexts/AuthContext";
import { getOrdersFn, getUserReviewedProductsFn } from "@/functions/auth";

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
  const [reviewedProductIds, setReviewedProductIds] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Review modal state
  const [reviewModal, setReviewModal] = useState<{
    isOpen: boolean;
    product: { id: string; name: string; img?: string; brand?: string } | null;
    orderId?: string;
  }>({ isOpen: false, product: null });

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
        console.error("Error fetching orders:", error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  // Fetch which products the user has already reviewed
  useEffect(() => {
    const fetchReviewedProducts = async () => {
      if (!user) return;
      try {
        const result = await getUserReviewedProductsFn({ data: { userId: user.id } });
        setReviewedProductIds(result.reviewedProductIds || []);
      } catch {
        setReviewedProductIds([]);
      }
    };
    fetchReviewedProducts();
  }, [user]);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-500";
      case "shipped":
        return "bg-blue-500/10 border-blue-500/30 text-blue-500";
      case "delivered":
        return "bg-green-500/10 border-green-500/30 text-green-500";
      case "cancelled":
        return "bg-red-500/10 border-red-500/30 text-red-500";
      default:
        return "bg-muted/10 border-border text-muted-foreground";
    }
  };

  const filteredOrders = statusFilter === 'all' ? orders : orders.filter(o => o.status === statusFilter);

  const openReviewModal = (item: any, orderId: string) => {
    setReviewModal({
      isOpen: true,
      product: {
        id: item.productId,
        name: item.name,
        img: item.img,
        brand: item.brand,
      },
      orderId,
    });
  };

  const handleReviewSubmitted = (productId: string) => {
    setReviewedProductIds((prev) => [...prev, productId]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero crumb="Account" kicker="My" title="Orders" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="flex justify-center space-x-4 mb-8">
            {['all', 'pending', 'shipped', 'delivered'].map((key) => (
              <button
                key={key}
                onClick={() => setStatusFilter(key)}
                className={`px-4 py-2 rounded ${statusFilter === key ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                {key === 'all' ? 'All' : key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          {loading ? (
            <div className="text-center py-20">
              <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
              <div className="text-muted-foreground text-sm uppercase tracking-widest">Loading orders...</div>
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
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition red-glow"
              >
                Start Shopping <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {filteredOrders.map((order, index) => (
                <motion.div
                  key={order._id || order.orderNumber}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-card border border-border overflow-hidden hover:border-border/80 transition"
                >
                  {/* Order Header */}
                  <div className="bg-secondary/30 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-border">
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Order Number</div>
                        <div className="font-bold text-foreground">{order.orderNumber}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Date</div>
                        <div className="text-foreground text-sm">
                          {new Date(order.createdAt).toLocaleDateString("en-PK", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border ${getStatusBadge(order.status)}`}
                    >
                      {order.status}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-4 sm:p-6">
                    <div className="space-y-4 mb-6">
                      {order.items.map((item: any, itemIndex: number) => {
                        const isDelivered = order.status === "delivered";
                        const alreadyReviewed = reviewedProductIds.includes(item.productId);

                        return (
                          <div
                            key={itemIndex}
                            className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 ${
                              itemIndex !== order.items.length - 1 ? "pb-4 border-b border-border/40" : ""
                            }`}
                          >
                            {/* Product Image + Info */}
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/30 border border-border shrink-0 overflow-hidden">
                                {item.img ? (
                                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                ) : (
                                  <Package className="w-7 h-7 text-muted-foreground m-auto mt-4" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm text-foreground line-clamp-2">{item.name}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">Qty: {item.quantity}</div>
                              </div>
                            </div>

                            {/* Price + Review Button */}
                            <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 pl-[68px] sm:pl-0">
                              <div className="font-bold text-primary text-sm sm:text-base">
                                PKR {item.price.toLocaleString()}
                              </div>

                              {/* Review Button — only for delivered orders */}
                              {isDelivered && (
                                alreadyReviewed ? (
                                  <div className="flex items-center gap-1.5 text-xs text-green-500 font-bold uppercase tracking-wide shrink-0">
                                    <CheckCircle className="w-3.5 h-3.5" />
                                    Reviewed
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => openReviewModal(item, order._id)}
                                    className="flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary text-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition shrink-0"
                                  >
                                    <Star className="w-3.5 h-3.5 fill-primary" />
                                    Review
                                  </button>
                                )
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Order Footer */}
                    <div className="border-t border-border pt-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>{order.city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 shrink-0" />
                          <span>
                            {order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Total</div>
                        <div className="text-xl font-bold text-primary">PKR {order.total.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>

                  {/* Delivered Banner */}
                  {order.status === "delivered" && (
                    <div className="bg-green-500/5 border-t border-green-500/20 px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-wider">
                        <CheckCircle className="w-4 h-4" />
                        Order Delivered — Share your experience!
                      </div>
                      <Link
                        to="/shop"
                        search={{ category: undefined }}
                        className="text-xs text-muted-foreground hover:text-primary transition flex items-center gap-1.5"
                      >
                        Shop More <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                  {/* Non-delivered Footer */}
                  {order.status !== "delivered" && (
                    <div className="bg-secondary/30 px-4 sm:px-6 py-3 border-t border-border">
                      <Link
                        to="/shop"
                        search={{ category: undefined }}
                        className="text-sm text-muted-foreground hover:text-primary transition flex items-center gap-2"
                      >
                        Continue Shopping <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />

      {/* Review Modal */}
      {reviewModal.product && (
        <ReviewModal
          isOpen={reviewModal.isOpen}
          onClose={() => setReviewModal((prev) => ({ ...prev, isOpen: false }))}
          product={reviewModal.product}
          orderId={reviewModal.orderId}
          onReviewSubmitted={() => handleReviewSubmitted(reviewModal.product!.id)}
        />
      )}
    </div>
  );
}
