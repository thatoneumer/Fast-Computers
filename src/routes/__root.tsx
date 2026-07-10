import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartWishlistProvider } from "@/contexts/CartWishlistContext";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fast Computers — Build Your Dream Gaming Rig" },
      { name: "description", content: "High performance PCs, gaming components, laptops, monitors, and peripherals for gamers and creators." },
      { name: "author", content: "Fast Computers" },
      { property: "og:title", content: "Fast Computers — Build Your Dream Gaming Rig" },
      { property: "og:description", content: "High performance PCs, gaming components, laptops, monitors, and peripherals for gamers and creators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fast Computers — Build Your Dream Gaming Rig" },
      { name: "twitter:description", content: "High performance PCs, gaming components, laptops, monitors, and peripherals for gamers and creators." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/00ce0920-daf4-4ffa-b4cf-a9d63a347b01/id-preview-43f838aa--38242687-96ca-421e-989a-6f034bc70d4d.lovable.app-1783245354548.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/00ce0920-daf4-4ffa-b4cf-a9d63a347b01/id-preview-43f838aa--38242687-96ca-421e-989a-6f034bc70d4d.lovable.app-1783245354548.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [checkedLocalStorage, setCheckedLocalStorage] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  // Check localStorage on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasLoaded(localStorage.getItem("fastcomputers_loaded") === "true");
    }
    setCheckedLocalStorage(true);
  }, []);

  // Service Worker Registration
  useEffect(() => {
    if (typeof window !== "undefined" && 'serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  setWaitingWorker(newWorker);
                  setShowUpdate(true);
                }
              });
            }
          });
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });

      // Listen for controlling changes
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Clear loading state when new service worker takes control
        localStorage.removeItem("fastcomputers_loaded");
        // When the new service worker takes control, reload the page
        window.location.reload();
      });
    }
  }, []);

  const handleUpdateClick = () => {
    if (waitingWorker) {
      // Tell the waiting service worker to skip waiting
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    // If already loaded before, skip loading screen
    if (hasLoaded) {
      setIsLoading(false);
    }
  }, [hasLoaded]);

  const handleLoadingComplete = () => {
    // Mark as loaded only after loading screen completes
    if (typeof window !== "undefined") {
      localStorage.setItem("fastcomputers_loaded", "true");
    }
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartWishlistProvider>
          {checkedLocalStorage && isLoading && !hasLoaded && (
            <LoadingScreen onComplete={handleLoadingComplete} />
          )}
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          
          {/* Update Notification */}
          {showUpdate && (
            <div className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 animate-in slide-in-from-bottom-4">
              <div className="flex-1">
                <p className="font-semibold text-sm">New version available!</p>
                <p className="text-xs opacity-90">Click to refresh and get the latest updates.</p>
              </div>
              <button
                onClick={handleUpdateClick}
                className="bg-white text-primary px-4 py-2 rounded font-semibold text-sm hover:bg-white/90 transition"
              >
                Update Now
              </button>
            </div>
          )}
        </CartWishlistProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
