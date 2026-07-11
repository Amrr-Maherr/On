import { memo } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

type ProductLightboxProps = {
  open: boolean;
  index: number;
  slides: { src: string }[];
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const ProductLightbox = memo(function ProductLightbox({
  open,
  index,
  slides,
  onClose,
  onIndexChange,
}: ProductLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Zoom, Fullscreen, Thumbnails, Counter]}
      zoom={{ maxZoomPixelRatio: 5, zoomInMultiplier: 2 }}
      thumbnails={{ border: 1, borderRadius: 4, padding: 2 }}
      counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      on={{ view: ({ index: currentIndex }) => onIndexChange(currentIndex) }}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, 0.92)" },
        thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
      }}
    />
  );
});

export default ProductLightbox;
