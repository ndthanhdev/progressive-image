import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import { usePIContext } from "../hooks/usePIContext";

export const ProgressiveImage = React.forwardRef((props, ref) => {
  const { src, lqip, onError, busref = () => {}, ...elseProps } = props;
  const { bus } = usePIContext();

  const id = uuid();
  busref(id);

  const [loaded, setLoaded] = useState(false);
  const handleLoadCb = () => setLoaded(true);

  useEffect(() => {
    bus.register(id, src, handleLoadCb);
    return () => {
      bus.unregister(id);
    };
  }, []);

  const currentSrc = loaded ? src : lqip;

  return <img {...elseProps} src={currentSrc} ref={ref} />;
});

export default ProgressiveImage;
