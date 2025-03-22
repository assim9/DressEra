import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const Homepage = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: "HOME", active: true },
    { name: "ABOUT US", active: false },
    { name: "SERVICES", active: false },
    { name: "PAGES", active: false },
  ];

  // Collection items
  const collectionItems = [
    { name: "T-SHIRT", image: "/rectangle-10.png" },
    { name: "LONG SLEEVE", image: "/rectangle-11.png" },
    { name: "SWEATER", image: "/rectangle-12.png" },
  ];

  // Best seller products
  const bestSellerProducts = [
    {
      name: "Pastel Long Sleeve",
      image: "/rectangle-75.png",
      rating: "/rating.png",
      originalPrice: 220,
      salePrice: 140,
    },
    {
      name: "Pastel Long Sleeve",
      image: "/rectangle-76.png",
      rating: "/rating-1.png",
      originalPrice: 202,
      salePrice: 124,
    },
    {
      name: "Pastel sweater",
      image: "/rectangle-77.png",
      rating: "/rating-2.png",
      originalPrice: 220,
      salePrice: 173,
    },
  ];

  // Product categories
  const productCategories = [
    { name: "HOT", active: false },
    { name: "ON SALE", active: false },
    { name: "TRENDING NEW", active: true },
    { name: "NEW ARRIVAL", active: false },
  ];

  // Products for first row
  const productsRow1 = [
    {
      name: "Pastel Long Sleeve",
      image: "/rectangle-31.png",
      rating: "/rating-3.png",
      originalPrice: 220,
      salePrice: 140,
    },
    {
      name: "Pastel Long Sleeve",
      image: "/rectangle-30.png",
      rating: "/rating-4.png",
      originalPrice: 220,
      salePrice: 140,
    },
    {
      name: "Pastel Long Sleeve",
      image: "/rectangle-29.png",
      rating: "/rating-5.png",
      originalPrice: 220,
      salePrice: 140,
    },
    {
      name: "Pastel Long Sleeve",
      image: "/rectangle-28.png",
      rating: "/rating-6.png",
      originalPrice: 220,
      salePrice: 140,
    },
  ];

  // Products for second row
  const productsRow2 = [
    {
      name: "Pastel sweater",
      image: "/rectangle-81.png",
      rating: "/rating-7.png",
      originalPrice: 220,
      salePrice: 173,
    },
    {
      name: "Pastel sweater",
      image: "/rectangle-80.png",
      rating: "/rating-8.png",
      originalPrice: 220,
      salePrice: 173,
    },
    {
      name: "Pastel sweater",
      image: "/rectangle-79.png",
      rating: "/rating-9.png",
      originalPrice: 220,
      salePrice: 173,
    },
    {
      name: "Pastel sweater",
      image: "/rectangle-78.png",
      rating: "/rating-10.png",
      originalPrice: 220,
      salePrice: 173,
    },
  ];

  // Footer links
  const footerLinks = ["MEN", "WOMAN", "KIDS", "TRENDS", "CONTACT US", "FAQ"];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1024px] relative">
        {/* Hero Section */}
        <section className="w-full h-[578px] bg-[#edece7] relative">
          <div className="flex justify-between items-center px-6 pt-8">
            <h1 className="[font-family:'Butler-Medium',Helvetica] font-medium text-[#2c2a27] text-[32px] tracking-[0.64px]">
              DressEra
            </h1>

            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="flex gap-4">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      className={`[font-family:'Butler-Medium',Helvetica] font-medium text-xl tracking-[0] ${
                        item.active ? "text-[#2c2a27e6]" : "text-[#2c2a2799]"
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="w-5 h-5">
              <img
                className="w-[17px] h-[19px] mt-px ml-0.5"
                alt="Shopping bag"
                src="/group.png"
              />
            </div>
          </div>

          <div className="absolute w-[388px] top-[113px] left-[83px] [font-family:'Butler-Light',Helvetica] font-light text-[#0f1511] text-[70px] tracking-[0] leading-normal">
            Find The Best Fashion Style for You.
          </div>

          <div className="absolute w-[299px] top-[379px] left-[83px] [font-family:'Butler-Light',Helvetica] font-light text-[#0f1511] text-base tracking-[1.60px] leading-normal">
            Creation timelines for the standard lorem ipsum passage vary, with
            some citing the 15th.
          </div>

          <Button className="absolute w-[145px] h-[45px] top-[467px] left-[83px] bg-[#2c2a27] rounded-none shadow-[0px_32px_70px_#0000001a,0px_126px_126px_#00000017,0px_285px_171px_#0000000d,0px_506px_202px_#00000003,0px_790px_221px_transparent] [font-family:'Butler-Bold',Helvetica] font-bold text-base tracking-[1.60px]">
            Shop
          </Button>

          <div className="absolute w-[497px] h-[475px] top-[103px] left-[503px]">
            <img
              className="w-[162px] h-[207px] top-[67px] left-[335px] absolute object-cover"
              alt="Fashion model"
              src="/rectangle-7.png"
            />
            <img
              className="absolute w-[202px] h-[276px] top-[199px] left-[214px] object-cover"
              alt="Fashion model"
              src="/rectangle-6.png"
            />
            <img
              className="absolute w-[325px] h-[409px] top-0 left-0 object-cover"
              alt="Fashion model"
              src="/rectangle-5.png"
            />
          </div>
        </section>

        {/* New Collection Section */}
        <section className="mt-12 mb-16">
          <h2 className="text-center [font-family:'Butler-Medium',Helvetica] font-medium text-[#0f1511] text-4xl tracking-[1.44px] mb-4">
            New Collection
          </h2>
          <p className="text-center [font-family:'Butler-Light',Helvetica] font-light text-[#0f1511] text-lg tracking-[0.36px] mb-12 max-w-[670px] mx-auto">
            Creation timelines for the standard lorem ipsum passage vary, with
            some citing the 15th.
          </p>

          <div className="flex justify-center gap-4 px-4">
            {collectionItems.map((item, index) => (
              <div
                key={index}
                className="w-80 h-80 relative bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute w-[220px] h-[34px] bottom-[10px] left-[50px] bg-[#34251f] flex items-center justify-center">
                  <div className="[font-family:'Butler-Bold',Helvetica] font-bold text-white text-lg tracking-[0]">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Fashion Since 2022 Section */}
        <section className="w-full px-6 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="relative flex-1">
              <img
                className="w-[361px] h-[478px] ml-20 object-cover relative z-10"
                alt="Fashion model"
                src="/rectangle-16.png"
              />
              <img
                className="absolute w-[220px] h-[260px] bottom-0 left-0"
                alt="Fashion background"
                src="/rectangle-17.png"
              />
              <img
                className="absolute w-[134px] h-[108px] top-0 right-16"
                alt="Vector decoration"
                src="/vector.svg"
              />
            </div>

            <div className="flex-1">
              <h2 className="[font-family:'Butler-Light',Helvetica] font-light text-[#0f1511] text-[70px] tracking-[0] leading-normal mb-8">
                Best Fashion Since 2022
              </h2>
              <p className="[font-family:'Butler-Light',Helvetica] font-light text-[#0f1511] text-base tracking-[0.64px] leading-normal max-w-[320px]">
                So how did the classical Latin become so incoherent? According
                to McClintock, a 15th century typesetter likely scrambled part
                of Cicero&#39;s De Finibus in order to provide placeholder text
                to mockup various fonts for a type specimen book.
              </p>
            </div>
          </div>

          <Card className="w-[570px] h-[130px] ml-auto mt-4 bg-[#edece7] rounded-none border-none">
            <CardContent className="flex items-center justify-between p-0 h-full">
              <div className="flex flex-col items-center justify-center flex-1">
                <span className="[font-family:'Butler-Medium',Helvetica] font-medium text-[#0f1511] text-2xl tracking-[0.96px]">
                  2022
                </span>
                <span className="[font-family:'Butler-UltraLight',Helvetica] font-light text-[#0f1511cc] text-sm">
                  DressEra
                </span>
              </div>

              <Separator orientation="vertical" className="h-8" />

              <div className="flex flex-col items-center justify-center flex-1">
                <span className="[font-family:'Butler-Medium',Helvetica] font-medium text-[#0f1511] text-2xl tracking-[0.96px]">
                  3800+
                </span>
                <span className="[font-family:'Butler-UltraLight',Helvetica] font-light text-[#0f1511cc] text-sm">
                  Product sold
                </span>
              </div>

              <Separator orientation="vertical" className="h-8" />

              <div className="flex flex-col items-center justify-center flex-1">
                <span className="[font-family:'Butler-Medium',Helvetica] font-medium text-[#0f1511] text-2xl tracking-[0.96px]">
                  2300+
                </span>
                <span className="[font-family:'Butler-UltraLight',Helvetica] font-light text-[#0f1511cc] text-sm">
                  Best Reviews
                </span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Seller Product Section */}
        <section className="w-full bg-[#2c2a27] py-16">
          <h2 className="[font-family:'Frank_Ruhl_Libre',Helvetica] font-medium text-white text-[32px] text-center mb-4">
            Best Seller Product
          </h2>
          <p className="[font-family:'Butler-Light',Helvetica] font-light text-[#eeddcc] text-lg tracking-[0.36px] text-center mb-8 max-w-[434px] mx-auto">
            Creation timelines for the standard lorem ipsum passage
          </p>

          <div className="flex justify-center gap-4 px-4">
            {bestSellerProducts.map((product, index) => (
              <Card
                key={index}
                className="w-[310px] h-[400px] bg-[#edece7] rounded-none border-none"
              >
                <CardContent className="p-0">
                  <img
                    className="w-full h-[311px] object-cover"
                    alt={product.name}
                    src={product.image}
                  />
                  <div className="p-8 pt-4">
                    <img className="h-3" alt="Rating" src={product.rating} />
                    <p className="[font-family:'Frank_Ruhl_Libre',Helvetica] font-normal text-colorprimarydark-brown text-sm mt-2">
                      {product.name}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="opacity-20 [font-family:'Lato',Helvetica] font-normal text-sm line-through mr-2">
                        <span className="text-[#c20909]">$</span>
                        <span className="text-black">
                          {product.originalPrice}
                        </span>
                      </span>
                      <span className="opacity-90 [font-family:'Lato',Helvetica] font-bold text-[#2c2a27] text-sm">
                        ${product.salePrice}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div
                  key={index}
                  className={`w-[13px] h-[13px] rounded-full border border-white ${index === 0 ? "bg-white" : ""}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Product Section */}
        <section className="py-16">
          <h2 className="[font-family:'Frank_Ruhl_Libre',Helvetica] font-medium text-[#0f1511] text-4xl text-center mb-8">
            Our Product
          </h2>

          <Tabs defaultValue="TRENDING NEW" className="w-full mb-8">
            <TabsList className="flex justify-center bg-transparent h-auto mb-4">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className={`[font-family:'Inter',Helvetica] font-medium text-lg px-4 data-[state=active]:text-[#0f1511] data-[state=inactive]:text-[#0f1511b2] data-[state=active]:border-b-2 data-[state=active]:border-[#0f1511] data-[state=active]:rounded-none data-[state=active]:shadow-none bg-transparent`}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* First row of products */}
          <div className="grid grid-cols-4 gap-4 px-4 mb-8">
            {productsRow1.map((product, index) => (
              <div key={index} className="flex flex-col">
                <img
                  className="w-[230px] h-[220px] object-cover"
                  alt={product.name}
                  src={product.image}
                />
                <div className="mt-4">
                  <img className="h-3" alt="Rating" src={product.rating} />
                  <p className="[font-family:'Frank_Ruhl_Libre',Helvetica] font-normal text-colorprimarydark-brown text-sm mt-2">
                    {product.name}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="opacity-20 [font-family:'Lato',Helvetica] font-normal text-sm line-through mr-2">
                      <span className="text-[#c20909]">$</span>
                      <span className="text-black">
                        {product.originalPrice}
                      </span>
                    </span>
                    <span className="opacity-90 [font-family:'Lato',Helvetica] font-bold text-[#2c2a27] text-sm">
                      ${product.salePrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row of products */}
          <div className="grid grid-cols-4 gap-4 px-4 mb-16">
            {productsRow2.map((product, index) => (
              <div key={index} className="flex flex-col">
                <img
                  className="w-[230px] h-[220px] object-cover"
                  alt={product.name}
                  src={product.image}
                />
                <div className="mt-4">
                  <img className="h-3" alt="Rating" src={product.rating} />
                  <p className="[font-family:'Frank_Ruhl_Libre',Helvetica] font-normal text-colorprimarydark-brown text-sm mt-2 text-center">
                    {product.name}
                  </p>
                  <div className="flex justify-center mt-2">
                    <span className="opacity-20 [font-family:'Lato',Helvetica] font-normal text-sm line-through mr-2 text-center">
                      <span className="text-[#c20909]">$</span>
                      <span className="text-black">
                        {product.originalPrice}
                      </span>
                    </span>
                    <span className="opacity-90 [font-family:'Lato',Helvetica] font-bold text-[#2c2a27] text-sm text-center">
                      ${product.salePrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Promotional Sections */}
          <div className="flex gap-4 px-4 mb-8">
            <div className="w-[447px] h-[202px] bg-[#2c2a27] relative">
              <div className="p-8">
                <h3 className="[font-family:'Butler-Medium',Helvetica] font-medium text-white text-2xl">
                  Winter Collections
                </h3>
                <p className="[font-family:'Butler-Medium',Helvetica] font-medium text-white text-[32px] mt-2">
                  UP TO 50% OFF
                </p>
                <Button className="mt-4 w-[125px] h-[45px] bg-[#edece7] text-[#2c2a27] rounded-none shadow-[0px_32px_70px_#0000001a,0px_126px_126px_#00000017,0px_285px_171px_#0000000d,0px_506px_202px_#00000003,0px_790px_221px_transparent] [font-family:'Butler-Bold',Helvetica] font-bold text-base tracking-[1.60px]">
                  Shop Now
                </Button>
              </div>
              <img
                className="absolute w-[165px] h-[202px] top-0 right-0 object-cover"
                alt="Winter collection"
                src="/rectangle-85.png"
              />
            </div>

            <div className="w-[499px] h-[370px] bg-[#2c2a27] relative">
              <div className="p-8">
                <h3 className="[font-family:'Butler-Medium',Helvetica] font-medium text-white text-[26px]">
                  Women Collections
                </h3>
                <p className="[font-family:'Butler-Medium',Helvetica] font-medium text-white text-4xl mt-8">
                  UP TO 30% OFF
                </p>
                <Button className="mt-8 w-[145px] h-[45px] bg-[#edece7] text-[#2c2a27] rounded-none shadow-[0px_32px_70px_#0000001a,0px_126px_126px_#00000017,0px_285px_171px_#0000000d,0px_506px_202px_#00000003,0px_790px_221px_transparent] [font-family:'Butler-Bold',Helvetica] font-bold text-xl tracking-[2.00px]">
                  Shop Now
                </Button>
              </div>
              <img
                className="absolute w-[228px] h-[370px] top-0 right-4 object-cover"
                alt="Women collection"
                src="/rectangle-82.png"
              />
            </div>
          </div>

          {/* Brand Logos */}
          <div className="flex gap-4 px-4 mb-8">
            <Card className="w-[317px] h-[90px] bg-[#edece7] shadow-[0px_4px_4px_#00000040] rounded-none border-none">
              <CardContent className="flex items-center justify-center h-full p-0">
                <img
                  className="w-[301px] h-11"
                  alt="Brand logo"
                  src="/vector-1.svg"
                />
              </CardContent>
            </Card>

            <Card className="w-[310px] h-[90px] bg-[#edece7] shadow-[0px_4px_4px_#00000040] rounded-none border-none">
              <CardContent className="flex items-center justify-center h-full p-0">
                <img
                  className="w-[294px] h-[46px]"
                  alt="Brand logo"
                  src="/vector-2.svg"
                />
              </CardContent>
            </Card>

            <Card className="w-[317px] h-[90px] bg-[#edece7] shadow-[0px_4px_4px_#00000040] rounded-none border-none">
              <CardContent className="flex items-center justify-center h-full p-0">
                <div className="flex items-center">
                  <img
                    className="h-[63px]"
                    alt="Brand logo part"
                    src="/path116.svg"
                  />
                  <img
                    className="h-[22px]"
                    alt="Brand logo part"
                    src="/path84.svg"
                  />
                  <img
                    className="h-[29px]"
                    alt="Brand logo part"
                    src="/path86.svg"
                  />
                  <img
                    className="h-[22px]"
                    alt="Brand logo part"
                    src="/path88.svg"
                  />
                  <img
                    className="h-[22px]"
                    alt="Brand logo part"
                    src="/path90.svg"
                  />
                  <img
                    className="h-[35px]"
                    alt="Brand logo part"
                    src="/path92.svg"
                  />
                  <img
                    className="h-[33px]"
                    alt="Brand logo part"
                    src="/path94.svg"
                  />
                  <img
                    className="h-[22px]"
                    alt="Brand logo part"
                    src="/polygon96.svg"
                  />
                  <img
                    className="h-[22px]"
                    alt="Brand logo part"
                    src="/path98.svg"
                  />
                  <img
                    className="h-[22px]"
                    alt="Brand logo part"
                    src="/path88.svg"
                  />
                  <img
                    className="h-[33px]"
                    alt="Brand logo part"
                    src="/path102.svg"
                  />
                  <img
                    className="h-[22px]"
                    alt="Brand logo part"
                    src="/path104.svg"
                  />
                  <img
                    className="h-[22px]"
                    alt="Brand logo part"
                    src="/path84.svg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Section */}
          <section className="w-full bg-[#edece7] py-16 relative">
            <div className="flex px-14">
              <Card className="w-[520px] h-[297px] bg-[#2c2a27] rounded-none border-none relative">
                <CardContent className="p-8 pt-16 relative">
                  <div className="absolute top-8 left-4">
                    <img
                      className="w-[130px] h-[120px] object-cover"
                      alt="Testimonial author"
                      src="/rectangle-90.svg"
                    />
                  </div>
                  <div className="ml-[158px]">
                    <h3 className="[font-family:'Butler-Medium',Helvetica] font-medium text-white text-xl">
                      Olivia Jones
                    </h3>
                    <p className="[font-family:'Butler-Medium',Helvetica] font-medium text-[#edece7b2] text-sm mt-1">
                      fashion designer
                    </p>
                  </div>
                  <p className="[font-family:'Butler-Medium',Helvetica] font-medium text-white text-[13px] mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="absolute top-4 right-4 [font-family:'Butler-Medium',Helvetica] font-medium text-[#edece7b2] text-[180px] rotate-180">
                    &quot;
                  </div>
                </CardContent>
              </Card>

              <div className="flex-1 relative">
                <img
                  className="w-[411px] h-[591px]"
                  alt="Fashion model"
                  src="/rectangle-89.svg"
                />
              </div>
            </div>

            <button className="absolute top-1/2 left-7 transform -translate-y-1/2">
              <img className="w-6 h-6" alt="Previous" src="/frame-1.svg" />
            </button>

            <button className="absolute top-1/2 right-[420px] transform -translate-y-1/2">
              <img className="w-6 h-6" alt="Next" src="/frame.svg" />
            </button>
          </section>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#34251f] py-12">
          <div className="flex justify-center gap-[45px] mb-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Butler-Medium',Helvetica] font-medium text-colorsecondarywhite text-xl tracking-[2.00px]"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-center [font-family:'Lato',Helvetica] font-normal text-white text-sm opacity-[0.67]">
            © 2023 DressEra. All Right Reserved
          </p>
        </footer>
      </div>
    </div>
  );
};
