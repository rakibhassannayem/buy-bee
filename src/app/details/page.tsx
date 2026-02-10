import { productsData } from "@/data/productsData";
import ProductImage from "@/components/pages/detailsPage/ProductImage";
import ProductInfo from "@/components/pages/detailsPage/ProductInfo";
import ProductActions from "@/components/pages/detailsPage/ProductActions";
import RatingsSummary from "@/components/pages/detailsPage/RatingsSummary";
import ReviewsList from "@/components/pages/detailsPage/ReviewsList";
import ExploreProducts from "@/components/pages/home/ExploreProducts";

const {
  image,
  title,
  rating,
  price,
  description,
  brand,
  keySpecifications,
  reviews,
} = productsData[1];

const ProductDetailsPage = () => {
  return (
    <div className="container mx-auto px-3 px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-12">
        <ProductImage image={image} title={title} />
        <ProductInfo
          title={title}
          rating={rating}
          reviewCount={reviews.length}
          price={price}
          description={description}
          brand={brand}
          keySpecifications={keySpecifications}
        />
      </div>

      <ProductActions />

      <p className="rounded py-2 pl-4 bg-[#C2FFFA] mt-7 font-bold">
        Ratings & Review
      </p>

      <RatingsSummary />

      <ReviewsList reviews={reviews} />

      <div className="mt-5">
        <div className="font-bold text-primary border-b-5 border-primary w-fit pb-3">
          You May Also Like
        </div>
        <ExploreProducts />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
