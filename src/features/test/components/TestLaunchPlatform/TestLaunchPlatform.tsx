import {
  ArrowRightIcon,
  EmailIcon,
} from "@/features/test/assets/icons/components";
import jackAvatar from "@/features/test/assets/icons/ecommerce/jack-avatar.svg";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import { launchPlatformStyles } from "./TestLaunchPlatform.styles";

const jackAvatarImage = jackAvatar as StaticImageData;

const fieldClassName =
  "w-full rounded-xl border border-white/10 bg-[#00122e]/55 px-4 py-3 text-[16px] font-medium leading-6 text-white outline-none placeholder:text-white/40 focus:border-white/25";

export function TestLaunchPlatform() {
  return (
    <section
      className={cn(figtree.className, "w-full bg-white pb-12 pt-4 lg:pb-24")}
    >
      <div className={launchPlatformStyles.shell}>
        <div className={launchPlatformStyles.content}>
          <div className={launchPlatformStyles.panel}>
            <div className={launchPlatformStyles.decorLayer} aria-hidden>
              <div className={launchPlatformStyles.ringOuter} />
              <div className={launchPlatformStyles.ringMid} />
              <div className={launchPlatformStyles.ringInner} />
            </div>

            <div className={launchPlatformStyles.contentGrid}>
              <div className={launchPlatformStyles.copyCol}>
                <h2 className={launchPlatformStyles.title}>
                  Do you want to launch
                  <br />
                  an ecommerce platform?
                </h2>
                <p className={launchPlatformStyles.text}>
                  We&apos;ll help you design, build, and launch a platform that
                  not only looks great but drives real sales from day one.
                </p>
                <Link
                  href="mailto:business@stellar-soft.com"
                  className={launchPlatformStyles.emailLink}
                >
                  <EmailIcon className={launchPlatformStyles.emailIcon} />
                  business@stellar-soft.com
                </Link>
              </div>

              <div className={launchPlatformStyles.formCol}>
                <div className={launchPlatformStyles.fieldGrid}>
                  <label
                    className={launchPlatformStyles.nameLabel}
                    htmlFor="launch-name"
                  >
                    Name
                  </label>
                  <input
                    id="launch-name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={fieldClassName}
                    autoComplete="name"
                  />
                  <label
                    className={launchPlatformStyles.companyLabel}
                    htmlFor="launch-email"
                  >
                    Email
                  </label>
                  <input
                    id="launch-email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={fieldClassName}
                    autoComplete="email"
                  />
                </div>

                <label
                  className={launchPlatformStyles.emailLabel}
                  htmlFor="launch-message"
                >
                  Message
                </label>
                <textarea
                  id="launch-message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className={cn(
                    fieldClassName,
                    "min-h-[140px] resize-none py-3",
                  )}
                />

                <button
                  type="button"
                  className={launchPlatformStyles.submitBtn}
                >
                  <Image
                    src={jackAvatarImage}
                    alt=""
                    width={54}
                    height={54}
                    className={launchPlatformStyles.submitLogo}
                    aria-hidden
                  />
                  <span className={launchPlatformStyles.submitText}>
                    Book a call with Jack, CTO
                  </span>
                  <ArrowRightIcon className={launchPlatformStyles.submitIcon} />
                </button>

                <p className={launchPlatformStyles.disclaimer}>
                  By submitting this form, you agree to our{" "}
                  <Link href="#" className={launchPlatformStyles.privacyLink}>
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className={launchPlatformStyles.termsLink}>
                    Terms of Use
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
