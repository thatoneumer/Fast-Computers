import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { a as useAuth, y as submitReviewFn } from "./router-B3L3dKbz.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, j as CircleCheck, S as Star, P as Package, k as CircleAlert, l as Send } from "../_libs/lucide-react.mjs";
function ReviewModal({ isOpen, onClose, product, orderId, onReviewSubmitted }) {
  const { user } = useAuth();
  const [rating, setRating] = reactExports.useState(0);
  const [hoveredRating, setHoveredRating] = reactExports.useState(0);
  const [comment, setComment] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const handleClose = () => {
    if (submitting) return;
    setTimeout(() => {
      setRating(0);
      setHoveredRating(0);
      setComment("");
      setError("");
      setSubmitted(false);
    }, 300);
    onClose();
  };
  const handleSubmit = async (e) => {
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
          orderId: orderId || ""
        }
      });
      setSubmitted(true);
      onReviewSubmitted?.();
    } catch (err) {
      setError(err?.message || "Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const ratingLabels = ["", "Poor", "Fair", "Good", "Great", "Excellent"];
  const displayRating = hoveredRating || rating;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
        onClick: handleClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
        transition: { type: "spring", stiffness: 400, damping: 30 },
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full max-w-lg bg-card border border-border overflow-hidden",
            style: { pointerEvents: "auto" },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-primary via-ember to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-5 border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold uppercase tracking-wider text-foreground", children: "Write a Review" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 uppercase tracking-widest", children: "Verified Purchase" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: handleClose,
                    className: "w-8 h-8 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition text-muted-foreground",
                    "aria-label": "Close modal",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              submitted ? (
                /* Success State */
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    className: "px-6 py-12 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { scale: 0 },
                          animate: { scale: 1 },
                          transition: { type: "spring", stiffness: 400, damping: 20, delay: 0.1 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-16 h-16 text-green-500 mx-auto mb-4" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase tracking-wide text-foreground mb-2", children: "Review Submitted!" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-6", children: "Thank you for your feedback. Your review helps other customers make informed decisions." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mb-2", children: Array.from({ length: rating }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-primary fill-primary" }, i)) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: handleClose,
                          className: "mt-4 bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition",
                          children: "Close"
                        }
                      )
                    ]
                  }
                )
              ) : (
                /* Review Form */
                /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "px-6 py-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6 p-4 bg-background/50 border border-border/60", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-secondary/30 border border-border overflow-hidden shrink-0", children: product.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.img, alt: product.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-7 h-7 text-muted-foreground m-auto mt-3.5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-foreground line-clamp-2", children: product.name }),
                      product.brand && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider mt-0.5", children: product.brand })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-muted-foreground block mb-3", children: [
                      "Your Rating ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setRating(star),
                          onMouseEnter: () => setHoveredRating(star),
                          onMouseLeave: () => setHoveredRating(0),
                          className: "transition-transform hover:scale-110 active:scale-95",
                          "aria-label": `Rate ${star} star${star > 1 ? "s" : ""}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Star,
                            {
                              className: `w-8 h-8 transition-colors duration-150 ${star <= displayRating ? "text-primary fill-primary" : "text-border hover:text-primary/50"}`
                            }
                          )
                        },
                        star
                      )),
                      displayRating > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.span,
                        {
                          initial: { opacity: 0, x: -6 },
                          animate: { opacity: 1, x: 0 },
                          className: "ml-2 text-sm font-bold text-primary uppercase tracking-wider",
                          children: ratingLabels[displayRating]
                        },
                        displayRating
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "review-comment",
                        className: "text-xs uppercase tracking-widest text-muted-foreground block mb-2",
                        children: [
                          "Your Review ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        id: "review-comment",
                        value: comment,
                        onChange: (e) => setComment(e.target.value),
                        placeholder: "Share your experience with this product...",
                        rows: 4,
                        maxLength: 800,
                        className: "w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition resize-none"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Minimum 5 characters" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        comment.length,
                        "/800"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      className: "flex items-start gap-2 bg-primary/10 border border-primary/30 px-4 py-3 mb-5 text-sm text-primary",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: handleClose,
                        disabled: submitting,
                        className: "flex-1 border border-border py-3 text-sm font-bold uppercase tracking-widest hover:border-primary transition disabled:opacity-50",
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "submit",
                        disabled: submitting || rating === 0,
                        className: "flex-1 bg-primary text-primary-foreground py-3 text-sm font-bold uppercase tracking-widest hover:brightness-110 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed red-glow",
                        children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" }),
                          "Submitting..."
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                          "Submit Review"
                        ] })
                      }
                    )
                  ] })
                ] })
              )
            ]
          }
        )
      }
    )
  ] }) });
}
export {
  ReviewModal as R
};
