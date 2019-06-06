import React, { FunctionComponent, useState, useEffect } from "react";
import uuid from "uuid/v1";
import { usePIContext } from "../hooks/useProgressiveImageContext";

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  lqip: string;
  preloadFunc: (src: string) => Promise<boolean>;
}

export const PImage: FunctionComponent<IProps> = props => {
  const { src, lqip } = props;

  const { bus, loader } = usePIContext();

  const [loaded, setLoaded] = useState(false);
  const load = () => loader.load(src).then(() => setLoaded(true));

  useEffect(() => {
    const id = uuid();
    bus.register(id, load);
  }, []);

  const currentSrc = loaded ? src : lqip;

  return <img {...props} src={currentSrc} />;
};

export default PImage;
