import React, { SVGProps } from "react";
import DiscordIcon from "@/components/icons/discord-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import { Separator } from "@/components/ui/separator";
import InstagramIcon from "@/components/icons/instagram-icon";
import Image from "next/image";
import Link from "next/link";
import WhatsappIcon from "@/components/icons/whatsapp-icon";
import { BlurFade } from "@/components/ui/BlurFade";

export const FooterSection = () => {
  const socialIconProps: SVGProps<SVGSVGElement> = {
    className: "w-[24px] h-[24px] md:w-[28px] md:h-[28px]",
  };
  return (
    <footer id="footer" className="container py-10 md:py-32">
      <div className="px-4 py-6 md:p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="col-span-full md:col-span-1">
            <BlurFade delay={0.2} inView>
              <Link href="#" className="flex font-bold items-center">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={60}
                  height={60}
                  className="w-[50px] md:w-[60px]"
                />
              </Link>
            </BlurFade>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <BlurFade delay={0.25} inView>
              <div>
                <Link
                  href="https://chat.whatsapp.com/GgpDcfZc8KwJambREQf823"
                  target="_blank"
                  className="opacity-60 hover:opacity-100"
                >
                  <WhatsappIcon {...socialIconProps} />
                </Link>
              </div>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <div>
                <Link
                  href="https://discord.gg/qaRz3z9rFF"
                  target="_blank"
                  className="opacity-60 hover:opacity-100"
                >
                  <DiscordIcon {...socialIconProps} />
                </Link>
              </div>
            </BlurFade>
            <BlurFade delay={0.25 * 3} inView>
              <div>
                <Link
                  href="https://www.linkedin.com/company/acm-student-chapter-medicaps/posts/?feedView=all"
                  className="opacity-60 hover:opacity-100"
                  target="_blank"
                >
                  <LinkedInIcon {...socialIconProps} />
                </Link>
              </div>
            </BlurFade>
            <BlurFade delay={0.25 * 4} inView>
              <div>
                <Link
                  href="https://www.instagram.com/medicaps_acm/"
                  className="opacity-60 hover:opacity-100"
                  target="_blank"
                >
                  <InstagramIcon {...socialIconProps} />
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="text-center">
          <BlurFade delay={0.25 * 5} inView>
            <h3 className="">Made with 💝 by team ACM</h3>
          </BlurFade>
        </section>
      </div>
    </footer>
  );
};
