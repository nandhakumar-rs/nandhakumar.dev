import { readdirSync, readFileSync } from "fs";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import profile from "../../public/profile.png";

export default function AboutPage() {
  return (
    <div className="max-w-screen-sm mx-auto mt-12">
      <section>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-app-primary-100 text-2xl font-bold">Hi there!</p>
            <p className="text-app-primary-100 text-3xl font-bold">
              I‘m Nandhakumar 👋
            </p>
            <div className="text-app-neutral-700 text-sm flex items-center gap-3">
              <p>Creative Software Developer </p>
              <div className="h-0.5 w-0.5 bg-app-neutral-700 rounded-full"></div>
              <p>UI UX Designer</p>
            </div>
          </div>
          <Image
            className="h-40"
            height={160}
            width={160}
            src={profile}
            alt="Nandhakumar's Display Picture"
          />
        </div>
        <p className="mt-8 text-app-primary-100 text-base">
          A self taught developer and desinger. Passionate and Facinated towards
          tech world. Love to help small and large scale business to build
          desing and build apps. If you want to get in touch, you can reach me
          over email and I am more active on twitter and instagram.
        </p>
      </section>
      <section className="mt-16">
        <p className="text-app-primary-100 text-2xl font-bold">{`FAQ's`}</p>
      </section>
    </div>
  );
}


