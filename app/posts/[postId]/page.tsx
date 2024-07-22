"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function PostPage() {
  const router = useRouter();
  return (
    <>
      <main className="h-dvh">
        <Card className="h-1/2 rounded-none bg-[url('/images/image.jpg')] bg-cover bg-no-repeat lg:h-[60%]">
          <CardContent className="flex h-full flex-col justify-end gap-y-2 rounded-xl p-4 text-slate-50 shadow-cardShadow backdrop-brightness-[0.5]">
            <h3 className="text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h3>
            <div className="flex flex-row gap-x-2 text-muted-foreground">
              <Clock />
              <p>10 min</p>
            </div>
            <Button
              onClick={() => router.back()}
              className="absolute left-5 top-5 md:hidden"
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="text-secondary-foreground" />
            </Button>
          </CardContent>
        </Card>
        <section className="flex flex-col items-center px-5 py-4 leading-7">
          <p className="text-justify md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad
            nam, accusantium dignissimos, dolore possimus ullam quaerat
            distinctio illum non nesciunt mollitia enim nihil voluptatem.
            Tenetur doloremque vel perspiciatis hic eos, delectus quos suscipit
            dolorem? Fugiat ad fuga numquam repellendus soluta ipsam earum. Modi
            hic similique aliquid aperiam aliquam maiores eos accusantium fugit,
            et expedita non asperiores sed. Placeat ipsa eaque reprehenderit
            labore incidunt laboriosam voluptatem maxime explicabo id inventore
            tempora praesentium facere quo eligendi assumenda nostrum
            dignissimos modi quod autem, tenetur consequatur, ea natus.
            Explicabo impedit recusandae corporis maiores, sunt tempora
            consectetur expedita pariatur cumque molestias enim, ex facere
            reprehenderit eos maxime! Pariatur repellat ullam placeat odio quis
            voluptatem sunt quas ab, consequatur, quisquam ducimus minus esse
            magnam eaque accusantium error. Voluptatibus debitis, incidunt
            facere possimus, assumenda mollitia, ea eaque voluptas enim ab
            sapiente quasi? Ipsa eius autem facilis sed incidunt illo corrupti
            expedita! Itaque aspernatur impedit qui delectus dignissimos officia
            laudantium corporis dolor amet maxime. Omnis voluptatem excepturi
            neque inventore quisquam animi voluptatibus quaerat quibusdam
            ducimus assumenda facere magnam quidem praesentium reiciendis
            obcaecati quas cupiditate sapiente qui quam similique, est natus.
            Sint ut, tenetur minima minus veritatis amet natus veniam earum
            rerum nobis quibusdam cumque id nisi tempora.
          </p>
        </section>
      </main>
    </>
  );
}
