import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps } from "react";
import { FaPhone } from "react-icons/fa6";

export default function Footer({ ...props }: ComponentProps<"form">) {
  return (
    <footer {...props} className={cn(`relative isolate`, props.className)}>
      <MainAndFooterDivider />

      <div
        className={cn(
          `grid grid-cols-1 gap-4 px-10 pt-10 pb-16 sm:grid-cols-2 md:px-20 lg:grid-cols-5 lg:px-40`
        )}
      >
        <div className={cn(`lg:col-span-2`)}>
          <div className={cn(`relative size-16`)}>
            <Image
              className={cn(`absolute h-full w-full`)}
              src={"/logo.png"}
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div>
            <div className={cn(`text-bnw-500`)}>
              Made remotely with 💜 and passion
            </div>
            <div>- SecWebXperts.</div>
          </div>
        </div>

        <div className={cn(`flex flex-col gap-y-2 lg:col-start-4`)}>
          <h3 className={cn(`pb-4 text-lg font-medium`)}>Social</h3>

          <FooterLink href={`https://facebook.com`}>Facebook</FooterLink>
          <FooterLink href={`https://instagram.com`}>Instagram</FooterLink>
          <FooterLink href={`https://youtube.com`}>Youtube</FooterLink>
          <FooterLink href={`https://linkedin.com`}>Linkedin</FooterLink>
        </div>

        <div
          className={cn(`flex flex-col gap-y-2 lg:col-start-3 lg:row-start-1`)}
        >
          <h3 className={cn(`pb-4 text-lg font-medium`)}>Important Links</h3>

          <FooterLink href={`terms-and-condition`}>
            Terms & Conditions
          </FooterLink>
          <FooterLink href={`privacy-policy`}>Privacy Policies</FooterLink>
          <FooterLink href={`cookies-policies`}>Cookies Policies</FooterLink>
        </div>

        <div className={cn(`sm:col-start-2 sm:row-start-1 lg:col-start-5`)}>
          <h3 className={cn(`pb-4 text-lg font-medium`)}>Contact Us</h3>

          <FooterLink
            href={`tel:+5245`}
            className={cn(`flex flex-wrap items-center gap-2`)}
          >
            <div
              className={cn(
                `relative flex size-8 items-center justify-center text-3xl`
              )}
            >
              <FaPhone />
            </div>
            <div>+91 - 9876543210</div>
          </FooterLink>
        </div>
      </div>

      <div className={cn(`px-10 pt-8 md:px-20 lg:px-40`)}>
        <div
          aria-hidden
          data-desc="divider"
          className={cn(
            `h-0.25 w-full bg-gradient-to-r from-transparent via-bnw-500 to-transparent`
          )}
        />
        <div className={cn(`py-8 text-center text-bnw-500 md:text-left`)}>
          &copy; All Rights Reserved by SecWebXperts Pvt. Ltd.
        </div>
      </div>

      <FooterBg />
    </footer>
  );
}

export function MainAndFooterDivider({ ...props }: ComponentProps<"div">) {
  return (
    <div
      aria-hidden
      {...props}
      className={cn(`mb-25 h-0.25 bg-bnw-800`, props.className)}
    />
  );
}

export function FooterBg({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `absolute inset-0 -z-1 bg-[conic-gradient(from_90deg_at_50%_0%,_black_0%,_var(--color-primary-500)_25%,_var(--color-primary-500)_25%,_black_50%)] opacity-50`,
        props.className
      )}
    />
  );
}

export function FooterLink({ ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        `text-bnw-500 transition-all hover:text-bnw-300`,
        props.className
      )}
    />
  );
}
