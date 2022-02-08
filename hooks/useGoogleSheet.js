import { useState, useEffect } from "react";

const EXCEL_URL =
  "https://docs.google.com/spreadsheets/d/1V0voHbac2XbAxAlwVysLgb8awaDh-Hyshk6d9QvDIpo/gviz/tq?";
const product_name_index = 1;
const selling_price_index = 3;
const status_index = 6;
const quantity_index = 7;
const image_name_1_index = 8;
const image_name_2_index = 9;
const informative_text_index = 10;

export const useGoogleSheet = () => {
  const [fetchedProducts, setFetchedProducts] = useState();

  useEffect(() => {
    fetch(EXCEL_URL)
      .then((res) => res.text())
      .then((res) => {
        const data = JSON.parse(res.substr(47).slice(0, -2));
        let products = [];
        data.table.rows
          .map((row) => row?.c)
          .map((rowValues) => {
            const getCellValue = (index) =>
              rowValues[index]?.f || rowValues[index]?.v;

            const productName = getCellValue(product_name_index);
            if (!productName) {
              return;
            }

            // Get the images of the plant. Max 2
            const image1 = getCellValue(image_name_1_index);
            const image2 = getCellValue(image_name_2_index);
            const images = [image1, image2]
              .filter(Boolean)
              .map((imageName) => `images/plants/${imageName}`);

            images.length > 0 &&
              products.push({
                name: getCellValue(product_name_index),
                price: getCellValue(selling_price_index) || "Preguntar",
                status: getCellValue(status_index),
                quantity: getCellValue(quantity_index),
                informative_text: getCellValue(informative_text_index),
                images: images,
              });
          });

        setFetchedProducts(products);
      });
  }, []);

  return fetchedProducts;
};
