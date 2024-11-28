"use client";
 
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card";
import { Text } from "@/components/Text";
import Link from "next/link";
import { Row } from "@/components/Row";
import { Columns } from "@/components/Columns";
import { FoodType, Product } from "./_typedefinition";
 
 
const foodTypes: FoodType[] = [
  {
    id: 1,
    name: "BBQ",
    imageUrl: "/images/bbq.png",
  },
  {
    id: 2,
    name: "Juice",
    imageUrl: "/images/orange.png",
  },
  {
    id: 3,
    name: "Organic",
    imageUrl: "/images/bbq.png",
  },
  {
    id: 4,
    name: "Juice",
    imageUrl: "/images/orange.png",
  },
];
 
const products: Product[] = [
  {
    id: 1,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf",
    price: "$20.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product1.png",
  },
  {
    id: 2,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$30.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product2.png",
  },
  {
    id: 3,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$20.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product1.png",
  },
  {
    id: 4,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$30.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product2.png",
  },
  {
    id: 5,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$20.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product1.png",
  },
  {
    id: 6,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$30.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product2.png",
  },
  {
    id: 7,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf",
    price: "$20.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product1.png",
  },
  {
    id: 8,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$30.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product2.png",
  },
  {
    id: 9,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$20.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product1.png",
  },
  {
    id: 10,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$30.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product2.png",
  },
  {
    id: 11,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$20.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product1.png",
  },
  {
    id: 12,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$30.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product2.png",
  },
  {
    id: 13,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf",
    price: "$20.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product1.png",
  },
  {
    id: 14,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$30.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product2.png",
  },
  {
    id: 15,
    name: "Sobeys",
    description: "Freshly baked sourdough loaf.",
    price: "$20.00",
    quantity: "608g($1.69 per 100g)",
    imageUrl: "/images/product1.png",
  },
];
 
const ProductsList: React.FC = () => {
  return (
    <div className="container ui-pb-6">
      <div className="productListing ui-pt-12">
        <Row>
          <Columns className="col-12 col-xl-3">Sidebar</Columns>
          <Columns className="col-12 col-xl-9">
            <div className="productListing">
              <div className="categoryListing">
                <Row>
                    {foodTypes.map((foodType) => (
                      <Columns className="col-12 col-sm-12 col-md-6 col-lg-3 ui-mb-6">
                        <Card key={foodType.id} className="!ui-shadow-none !ui-rounded-large ui-border ui-border-lightgray">
                          <CardHeader className="ui-flex ui-items-center ui-justify-center !ui-p-0 !ui-border-[0px]">
                            <Image
                              src={foodType.imageUrl}
                              alt={foodType.name}
                              width={268.6}
                              height={154}
                            />
                          </CardHeader>
                          <CardContent className="ui-pt-2 ui-pb-4 ui-px-[18px]">
                            <CardTitle className="!ui-text-base !ui-text-[#191919]">{foodType.name}</CardTitle>
                          </CardContent>
                        </Card>
                      </Columns>
                    ))}
                </Row>
              </div>
 
              <div className="ui-mb-6">
                <Text className="!ui-text-[#313131]">Prices are subject to change based on time and loation of purchase. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </div>
 
              <div className="ui-mb-[26px]">
                <Row>
                  <Columns className="col-8 col-xl-10">
                    <Text className="!ui-text-[#000000] ui-font-poppinsBold ui-text-2xl ui-leading-9">Lorem Ipsum</Text>
                  </Columns>
                  <Columns className="col-4 col-xl-2">
                    <Link className="ui-font-poppinsBold ui-text-[#003D2A] ui-text-sm ui-float-right ui-leading-normal" href="#" target="_self" aria-label="Click here to go to Shop page">Shop all</Link>
                  </Columns>
                </Row>
              </div>

              <Row>
                {products.map((product) => (
                <Columns className="col-12 col-sm-12 col-md-6 col-lg-4 col-2xl-3 ui-mb-6">
                  <Card key={product.id} className="!ui-shadow-lightGray !ui-rounded-large">
                    <CardHeader className="ui-flex ui-items-center ui-justify-center !ui-p-0 !ui-border-[0px] !ui-pt-[32px] ui-relative">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={188}
                        height={128}
                      />
                      <button
                        className="ui-bg-[#003D2A] ui-w-10 ui-h-10 ui-absolute ui-right-[8px] ui-bottom-0 ui-flex ui-items-center ui-justify-center ui-rounded-full"
                        onClick={() => alert(`Added ${product.name} to the cart!`)}
                      >
                        <Image
                          src={'../images/plus.svg'}
                          alt={"Plus Icon"}
                          width={14}
                          height={14}
                        />
                      </button>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="!ui-text-black !ui-text-base ui-mb-1 ui-font-poppinsBold">{product.price}</CardDescription>
                      <CardDescription className="!ui-text-black ui-text-xs ui-mb-2 ui-leading-[18px]">{product.quantity}</CardDescription>
                      <CardTitle className="!ui-text-black ui-text-xs ui-mb-1 ui-leading-[18px]">{product.name}</CardTitle>
                      <CardDescription className="!ui-text-black">{product.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Columns>
                ))}
              </Row>
            </div>
          </Columns>
        </Row>
      </div>
    </div>
  );
};
 
export default ProductsList;