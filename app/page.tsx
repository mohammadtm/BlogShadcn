"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

import { Clock, House, Mail, Menu, Users } from "lucide-react";
import Image from "next/image";
import IMG from "@/public/images/image.jpg";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/ui/list-item";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Animals",
    href: "/posts/animals",
    description: "All you can read about animals",
  },
  {
    title: "Countries",
    href: "/posts/countries",
    description: "Every country is a mischief.",
  },
  {
    title: "Arts",
    href: "/posts/arts",
    description: "Art from all around the world.",
  },
  {
    title: "Cultures",
    href: "/posts/cultures",
    description: "Get to know new culture every day.",
  },
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(0);
  return (
    <>
      <header className="mx-3 mt-4">
        <div className="flex w-full flex-row items-center justify-between gap-x-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-5 flex flex-col items-start gap-y-2">
                <Button className="gap-x-1 text-lg" size="lg" variant="link">
                  <House />
                  Home
                </Button>
                <Button className="gap-x-1 text-lg" size="lg" variant="link">
                  <Users />
                  About us
                </Button>
                <Button className="gap-x-1 text-lg" size="lg" variant="link">
                  <Mail />
                  Contact us
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <h1 className="relative -top-0.5 flex-grow text-3xl font-bold md:flex-grow-0">
            Blog
          </h1>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </header>
      <main className="mx-3 mt-2">
        <form className="flex flex-row items-center gap-x-2 md:hidden">
          <Input type="text" placeholder="Search here" />
          <Button type="submit">Search</Button>
        </form>
        <section className="mt-3">
          <h2 className="text-2xl font-bold md:hidden">Newest</h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="mt-2 w-full"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="h-[16.5rem] basis-1/2 md:h-[23rem] md:basis-full lg:h-[26rem]"
                >
                  <Card
                    variant="clickableCard"
                    className="h-[98%] bg-[url('/images/image.jpg')] bg-cover bg-no-repeat"
                  >
                    <CardContent className="flex h-full flex-col justify-end gap-y-2 rounded-xl p-2.5 text-slate-50 shadow-cardShadow backdrop-brightness-[0.5] duration-150 hover:backdrop-brightness-[0.4]">
                      <h3 className="font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                      </h3>
                      <div className="flex flex-row gap-x-2 text-muted-foreground">
                        <Clock />
                        <p>10 min</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="flex flex-row gap-x-1">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full md:w-[60%]"
          >
            <CarouselContent className="ml-0.5 gap-x-1">
              <CarouselItem className="basis-1/4 p-0 md:basis-1/5">
                <Button
                  active={activeMenu === 0}
                  onClick={() => setActiveMenu(0)}
                  variant="ghost"
                  className="w-full text-xl font-bold"
                >
                  Popular
                </Button>
              </CarouselItem>
              <CarouselItem className="basis-1/4 p-0 md:basis-1/5">
                <Button
                  active={activeMenu === 1}
                  onClick={() => setActiveMenu(1)}
                  variant="ghost"
                  className="w-full text-xl font-bold"
                >
                  Top
                </Button>
              </CarouselItem>
              <CarouselItem className="basis-1/4 p-0 md:basis-1/5">
                <Button
                  active={activeMenu === 2}
                  onClick={() => setActiveMenu(2)}
                  variant="ghost"
                  className="w-full text-xl font-bold"
                >
                  Trending
                </Button>
              </CarouselItem>
              <CarouselItem className="min-w-fit basis-1/4 p-0 md:basis-1/5">
                <Button
                  active={activeMenu === 3}
                  onClick={() => setActiveMenu(3)}
                  variant="ghost"
                  className="w-full text-xl font-bold"
                >
                  Editor&apos;s Choice
                </Button>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <form className="hidden w-[40%] flex-row gap-x-1 md:flex">
            <Input placeholder="Search Here" className="w-full" />
            <Button>Search</Button>
          </form>
        </section>
        <section className="my-3 flex flex-col gap-y-2 md:hidden">
          <Link draggable={false} href={"/posts/1"}>
            <Card variant="clickableCard">
              <CardContent className="flex flex-row gap-x-2 p-0">
                <Image
                  alt=""
                  src={IMG}
                  className="w size-32 rounded-l-xl object-cover"
                  width={0}
                  height={0}
                />
                <div className="flex flex-col justify-around">
                  <h3 className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    suscipit.
                  </h3>

                  <div className="flex flex-row items-center gap-x-2 text-muted-foreground">
                    <Clock />
                    <p>10 min</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>

        <section className="my-3 hidden grid-cols-3 gap-3 md:grid lg:grid-cols-4">
          <Link draggable={false} href={"/posts/1"}>
            <Card variant="clickableCard">
              <CardContent className="flex flex-col gap-y-2 p-0">
                <Image
                  alt=""
                  src={IMG}
                  className="w-full rounded-t-xl object-cover"
                  width={0}
                  height={0}
                />
                <div className="flex flex-col justify-around gap-y-1.5 p-2">
                  <h3 className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    suscipit.
                  </h3>

                  <div className="flex flex-row items-center gap-x-2 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <p>10 min</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link draggable={false} href={"/posts/1"}>
            <Card variant="clickableCard">
              <CardContent className="flex flex-col gap-y-2 p-0">
                <Image
                  alt=""
                  src={IMG}
                  className="w-full rounded-t-xl object-cover"
                  width={0}
                  height={0}
                />
                <div className="flex flex-col justify-around gap-y-1.5 p-2">
                  <h3 className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    suscipit.
                  </h3>

                  <div className="flex flex-row items-center gap-x-2 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <p>10 min</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link draggable={false} href={"/posts/1"}>
            <Card variant="clickableCard">
              <CardContent className="flex flex-col gap-y-2 p-0">
                <Image
                  alt=""
                  src={IMG}
                  className="w-full rounded-t-xl object-cover"
                  width={0}
                  height={0}
                />
                <div className="flex flex-col justify-around gap-y-1.5 p-2">
                  <h3 className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    suscipit.
                  </h3>

                  <div className="flex flex-row items-center gap-x-2 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <p>10 min</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link draggable={false} href={"/posts/1"}>
            <Card variant="clickableCard">
              <CardContent className="flex flex-col gap-y-2 p-0">
                <Image
                  alt=""
                  src={IMG}
                  className="w-full rounded-t-xl object-cover"
                  width={0}
                  height={0}
                />
                <div className="flex flex-col justify-around gap-y-1.5 p-2">
                  <h3 className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    suscipit.
                  </h3>

                  <div className="flex flex-row items-center gap-x-2 text-sm text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <p>10 min</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>
      </main>
    </>
  );
}
