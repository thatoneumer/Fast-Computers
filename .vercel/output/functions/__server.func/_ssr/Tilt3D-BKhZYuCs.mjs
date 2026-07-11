import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { u as useMotionValue, a as useSpring } from "../_libs/framer-motion.mjs";
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function Tilt3D({
  children,
  maxTilt = 8,
  scale = 1.04,
  perspective = 1e3,
  className,
  style,
  disabled = false,
  ...props
}) {
  const ref = reactExports.useRef(null);
  const isMobile = useIsMobile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 400, damping: 25 });
  const rotateY = useSpring(x, { stiffness: 400, damping: 25 });
  const scaleSpring = useSpring(1, { stiffness: 400, damping: 25 });
  const handleMouseMove = (e) => {
    if (disabled || isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const relX = (e.clientX - rect.left) / width - 0.5;
    const relY = (e.clientY - rect.top) / height - 0.5;
    x.set(relX * maxTilt);
    y.set(-relY * maxTilt);
  };
  const handleMouseEnter = () => {
    if (disabled || isMobile) return;
    scaleSpring.set(scale);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleSpring.set(1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      style: {
        transformStyle: "preserve-3d",
        perspective,
        rotateX: disabled || isMobile ? 0 : rotateX,
        rotateY: disabled || isMobile ? 0 : rotateY,
        scale: disabled || isMobile ? 1 : scaleSpring,
        ...style
      },
      className,
      children
    }
  );
}
export {
  Tilt3D as T
};
