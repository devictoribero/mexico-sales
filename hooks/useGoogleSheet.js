import { useState, useEffect } from "react";

const EXCEL_URL =
  "https://docs.google.com/spreadsheets/d/1V0voHbac2XbAxAlwVysLgb8awaDh-Hyshk6d9QvDIpo/gviz/tq?";
const product_name_index = 1;
const selling_price_index = 3;
const category_index = 5;
const status_index = 6;
const informative_text_index = 8;
const image_name_1_index = 9;
const image_name_2_index = 10;
const image_name_3_index = 11;
const image_name_4_index = 12;

export const useGoogleSheet = () => {
  const [fetchedProducts, setFetchedProducts] = useState();

  useEffect(() => {
    fetch(EXCEL_URL)
      .then((res) => res.text())
      .then((res) => {
        const data = JSON.parse(res.substr(47).slice(0, -2));
        let products = [];
        let productsReserved = [];
        let productsSold = [];
        data.table.rows
          .map((row) => row?.c)
          .map((rowValues) => {
            const getCellValue = (index) =>
              rowValues[index]?.f || rowValues[index]?.v;

            const productName = getCellValue(product_name_index);
            if (!productName) {
              return;
            }

            const category = getCellValue(category_index);
            const status = getCellValue(status_index);

            const product = {
              name: getCellValue(product_name_index),
              price: getCellValue(selling_price_index) || "Preguntar",
              status: getCellValue(status_index),
              informative_text: getCellValue(informative_text_index),
              images: [
                getCellValue(image_name_1_index),
                getCellValue(image_name_2_index),
              ]
                .filter(Boolean)
                .filter((name) => name.includes(".jpg")) // Make sure the image is present and is not an annotation
                .map((imageName) => `images/plants/${imageName}`),
            };

            if (status === "vendido") {
              productsSold.push(product);
              return;
            }

            if (status === "reservado") {
              productsReserved.push(product);
              return;
            }

            const isPlant = category === "Plantas";
            if (
              !isPlant ||
              (category === "Plantas" && product.images.length > 0)
            ) {
              products.push(product);
            }
          });

        setFetchedProducts([...products, ...productsReserved, ...productsSold]);
      });
  }, []);

  return fetchedProducts;
};
