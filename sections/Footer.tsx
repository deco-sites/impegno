import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Whatsapp";
  href: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
  social?: Social[];
}

export default function Footer({
  logo = {
    src:
      "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/impegno/dc119955-2751-4d68-80da-5b448c074eb7/impegno-nobg.png",
    alt: "Logo",
  },
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
  social = [
    { network: "Facebook", href: "" },
    { network: "Whatsapp", href: "" },
  ],
}: Props) {
  return (
    <div class="lg:container mx-auto md:max-w-6xl px-4 pt-16 text-sm">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-6 justify-between lg:flex-row">
          <div>
            <Image
              src={logo.src || ""}
              width={146}
              height={25}
              alt={logo.alt}
            />
          </div>
        </div>
        <div class="border-primary border-t flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-center py-8">
          <div class="flex gap-3">
            {social?.map((item) => (
              <a class="block" href={item.href} target="_blank">
                {item.network == "Facebook" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12.3311C22 6.77453 17.5229 2.27002 12 2.27002C6.47715 2.27002 2 6.77453 2 12.3311C2 17.3528 5.65684 21.5152 10.4375 22.27V15.2394H7.89844V12.3311H10.4375V10.1145C10.4375 7.59298 11.9305 6.20014 14.2146 6.20014C15.3088 6.20014 16.4531 6.39665 16.4531 6.39665V8.87263H15.1922C13.95 8.87263 13.5625 9.64824 13.5625 10.4439V12.3311H16.3359L15.8926 15.2394H13.5625V22.27C18.3432 21.5152 22 17.353 22 12.3311Z"
                      fill="#18181B"
                    />
                  </svg>
                )}
                {item.network == "Whatsapp" && (
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 3.27002H8C5.23858 3.27002 3 5.5086 3 8.27002V16.27C3 19.0314 5.23858 21.27 8 21.27H16C18.7614 21.27 21 19.0314 21 16.27V8.27002C21 5.5086 18.7614 3.27002 16 3.27002ZM19.25 16.27C19.2445 18.0626 17.7926 19.5145 16 19.52H8C6.20735 19.5145 4.75549 18.0626 4.75 16.27V8.27002C4.75549 6.47737 6.20735 5.02551 8 5.02002H16C17.7926 5.02551 19.2445 6.47737 19.25 8.27002V16.27ZM16.75 8.52002C17.3023 8.52002 17.75 8.0723 17.75 7.52002C17.75 6.96774 17.3023 6.52002 16.75 6.52002C16.1977 6.52002 15.75 6.96774 15.75 7.52002C15.75 8.0723 16.1977 8.52002 16.75 8.52002ZM12 7.77002C9.51472 7.77002 7.5 9.78474 7.5 12.27C7.5 14.7553 9.51472 16.77 12 16.77C14.4853 16.77 16.5 14.7553 16.5 12.27C16.5027 11.0757 16.0294 9.92959 15.1849 9.0851C14.3404 8.24061 13.1943 7.76736 12 7.77002ZM9.25 12.27C9.25 13.7888 10.4812 15.02 12 15.02C13.5188 15.02 14.75 13.7888 14.75 12.27C14.75 10.7512 13.5188 9.52002 12 9.52002C10.4812 9.52002 9.25 10.7512 9.25 12.27Z"
                      fill="#18181B"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
