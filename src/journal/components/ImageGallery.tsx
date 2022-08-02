import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface ImageGallery {
  images?: any;
}

export const ImageGallery = ({ images }: ImageGallery) => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={5} rowHeight={100}>
      {images?.map((image: any) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
