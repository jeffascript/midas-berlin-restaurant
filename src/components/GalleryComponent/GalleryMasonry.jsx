import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "react-photo-gallery";
import PhotoHelper from "./PhotoHelper"
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./PhotoAlbumArray"



const SortablePhoto = SortableElement(item => <PhotoHelper {...item} />);

const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
)); 



const GalleryMasonry = () => {
    const [items, setItems] = useState(photos);

    const onSortEnd = ({ oldIndex, newIndex }) => {
      setItems(arrayMove(items, oldIndex, newIndex));
    };

    
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container fluid style={{ padding: "7em 1em" }}>
      <Row>
        <div className="col-12 mt-3 mb-4">
          <Container>
            <div data-aos="fade-up">
              <h1 className="text-center mx-auto sub-header">
                Photo Gallery
              </h1>
              <div className="header-divider"></div>
            </div>
          </Container>
        </div>

        <div className="col-12">
        <div>
    
      <h3 className="text-center mx-auto ">Drag and drop photos to rearrange</h3>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
        </div>
      </Row>
    </Container>
  );
};

export default GalleryMasonry;
