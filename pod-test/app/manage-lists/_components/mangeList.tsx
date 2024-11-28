"use client";
 
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card";
import { Text } from "@/components/Text";
import Link from "next/link";
import { Row } from "@/components/Row";
import { Columns } from "@/components/Columns";
 
interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
 
const products: Product[] = [
  {
    id: 1,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024",
    imageUrl: "/images/bread.png",
  },
  {
    id: 2,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/pista.png",
  },
  {
    id: 3,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/bread.png",
  },
  {
    id: 4,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/pista.png",
  },
  {
    id: 5,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/pista.png",
  },
  {
    id: 6,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/bread.png",
  },
  {
    id: 7,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024",
    imageUrl: "/images/pista.png",
  },
  {
    id: 8,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/bread.png",
  },
  {
    id: 9,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/bread.png",
  },
  {
    id: 10,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/pista.png",
  },
  {
    id: 11,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/bread.png",
  },
  {
    id: 12,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/pista.png",
  },
  {
    id: 13,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024",
    imageUrl: "/images/pista.png",
  },
  {
    id: 14,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/bread.png",
  },
  {
    id: 15,
    name: "Sunday BBQ",
    description: "Last updated Jan 1, 2024.",
    imageUrl: "/images/pista.png",
  },
];
 
const ManageList: React.FC = () => {
  return (
    <div className="container ui-pb-6">
      <div className="productListing ui-pt-12">
        <Row>
          <Columns className="col-12 col-xl-12">
            <div className="productListing">
              <div className="ui-mb-[26px]">
                <Row>
                  <Columns className="col-12 col-xl-12">
                    <div className="ui-flex ui-items-center">
                      <Text className="!ui-text-[#000000] ui-font-MontserratExtraBold ui-text-[28px] sm:ui-text-[20px] ui-leading-normal">Manage Lists</Text>
                      <Link className="ui-flex ui-items-center ui-justify-center ui-underline ui-ml-[23px]" href="#" target="_self" aria-label="Click here to go to Shop page">
                          <span className="plusIcon ui-mr-[4.5px]">
                            <Image
                              src={"/images/plus-green.svg"}
                              alt={"Plus Icon"}
                              width={12}
                              height={12}
                              className="ui-inline"
                            />
                          </span> 
                          <span className="ui-font-poppinsBold ui-text-[#003D2A] ui-text-sm sm:ui-text-xs ui-leading-normal">
                            Add new
                          </span>
                      </Link>
                    </div>
                  </Columns>
                </Row>
              </div>

              <Row>
                {products.map((product) => (
                <Columns className="col-12 col-sm-12 col-md-6 col-lg-6 col-2xl-3 ui-mb-6">
                  <Card key={product.id} className="!ui-shadow-lightGray !ui-rounded-large">
                    <CardHeader className="ui-flex ui-items-center ui-justify-center !ui-p-0 !ui-border-[0px] !ui-pt-[8px] ui-relative">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={342}
                        height={238}
                      />
                      <button
                        className="ui-bg-white ui-w-10 ui-h-10 ui-absolute ui-right-[20px] ui-top-[16px] ui-flex ui-items-center ui-justify-center ui-rounded-full ui-border ui-border-[#003D2A]"
                        onClick={() => alert(`Added ${product.name} to the cart!`)}
                      >
                        <Image
                          src={'../images/dots.svg'}
                          alt={"Plus Icon"}
                          width={24}
                          height={24}
                        />
                      </button>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="!ui-text-black !ui-text-base ui-mb-1 ui-font-poppinsBold">{product.name}</CardTitle>
                      <CardDescription className="!ui-text-black ui-leading-normal">{product.description}</CardDescription>
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
 
export default ManageList;