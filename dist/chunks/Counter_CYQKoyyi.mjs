import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = ({
  count,
  suffix,
  prefix,
  duration,
  className,
  start: initialStart,
  end: initialEnd
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);
  useEffect(() => {
    if (inView) {
      setStart(initialStart);
      setEnd(initialEnd);
    } else {
      setStart(initialEnd);
      setEnd(initialStart);
    }
  }, [inView, initialStart, initialEnd]);
  return /* @__PURE__ */ jsx("span", { ref, children: inView && /* @__PURE__ */ jsx(
    CountUp,
    {
      ...duration && { duration },
      prefix,
      className: `${className}`,
      end: count ? +count : end,
      suffix,
      start
    }
  ) });
};

export { Counter as C };
