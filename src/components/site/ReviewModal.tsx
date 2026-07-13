import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Star, Send, CheckCircle2, AlertCircle, Package } from "lucide-react";
import { submitReviewFn } from "@/functions/auth";
import { useAuth } from "@/contexts/AuthContext";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    img?: string;
    brand?: string;
  };
  orderId?: string;
  onReviewSubmitted?: () => void;
}

export function ReviewModal({ isOpen, onClose, product, orderId, onReviewSubmitted }: ReviewModalProps) {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    if (submitting) return;
    // Reset state when closing
    setTimeout(() => {
      setRating(0);
      setHoveredRating(0);
      setComment("");
      setError("");
      setSubmitted(false);
    }, 300);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!user) {
      setError("You must be logged in to submit a review.");
      return;
    }
    if (rating === 0) {
      setError("Please select a star rating.");
      return;
    }
    if (comment.trim().length < 5) {
      setError("Please write at least 5 characters in your review.");
      return;
    }

    setSubmitting(true);
    try {
      await submitReviewFn({
        data: {
          userId: user.id,
          productId: product.id,
          rating,
          comment: comment.trim(),
          orderId: orderId || "",
        },
      });
      setSubmitted(true);
      onReviewSubmitted?.();
    } catch (err: any) {
      setError(err?.message || "Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const ratingLabels = ["", "Poor", "Fair", "Good", "Great", "Excellent"];
  const displayRating = hoveredRating || rating;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="relative w-full max-w-lg bg-card border border-border overflow-hidden"
              style={{ pointerEvents: "auto" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header accent line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-primary via-ember to-transparent" />

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <div>
                  <h2 className="text-lg font-display font-bold uppercase tracking-wider text-foreground">
                    Write a Review
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-widest">
                    Verified Purchase
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition text-muted-foreground"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-6 py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-2">
                    Review Submitted!
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Thank you for your feedback. Your review helps other customers make informed decisions.
                  </p>
                  <div className="flex justify-center gap-1 mb-2">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-4 bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                /* Review Form */
                <form onSubmit={handleSubmit} className="px-6 py-5">
                  {/* Product Info */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-background/50 border border-border/60">
                    <div className="w-14 h-14 bg-secondary/30 border border-border overflow-hidden shrink-0">
                      {product.img ? (
                        <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <Package className="w-7 h-7 text-muted-foreground m-auto mt-3.5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-foreground line-clamp-2">{product.name}</div>
                      {product.brand && (
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{product.brand}</div>
                      )}
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="mb-5">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-3">
                      Your Rating <span className="text-primary">*</span>
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110 active:scale-95"
                          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                        >
                          <Star
                            className={`w-8 h-8 transition-colors duration-150 ${
                              star <= displayRating
                                ? "text-primary fill-primary"
                                : "text-border hover:text-primary/50"
                            }`}
                          />
                        </button>
                      ))}
                      {displayRating > 0 && (
                        <motion.span
                          key={displayRating}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="ml-2 text-sm font-bold text-primary uppercase tracking-wider"
                        >
                          {ratingLabels[displayRating]}
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="mb-5">
                    <label
                      htmlFor="review-comment"
                      className="text-xs uppercase tracking-widest text-muted-foreground block mb-2"
                    >
                      Your Review <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="review-comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share your experience with this product..."
                      rows={4}
                      maxLength={800}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition resize-none"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-muted-foreground">Minimum 5 characters</span>
                      <span className="text-xs text-muted-foreground">{comment.length}/800</span>
                    </div>
                  </div>

                  {/* Error */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-start gap-2 bg-primary/10 border border-primary/30 px-4 py-3 mb-5 text-sm text-primary"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      disabled={submitting}
                      className="flex-1 border border-border py-3 text-sm font-bold uppercase tracking-widest hover:border-primary transition disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting || rating === 0}
                      className="flex-1 bg-primary text-primary-foreground py-3 text-sm font-bold uppercase tracking-widest hover:brightness-110 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed red-glow"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Review
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
