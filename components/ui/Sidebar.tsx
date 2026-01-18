"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  // Get the route name using usePathname hook to decide if the tab is active or not
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Harizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Harizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          // Finding if the tab is active
          const isActive =
            item.route === pathname || pathname.startsWith(`${item.route}/`);
          console.log("Is Active tab: ", item.route, isActive);
          return (
            <Link
              href={item.route}
              key={item.label}
              /**
               * @firstParam - Any class you would want to give as default
               * @secondParam - Classes you would want to show on specific events (In our case for active tabs)
               */
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
                <p className={cn("sidebar-label", {"!text-white": isActive})}>{item.label}</p>
              </div>

              
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
