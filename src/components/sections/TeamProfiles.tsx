import React from "react";
import Image from "next/image";
import { therapists } from "@/data/team";
import { OrganicLeaf } from "@/components/icons";

/**
 * Full profiles of each therapist, target of the "Ver perfil" links
 * (/nosotros#johanna, /nosotros#lina). Editorial layout that alternates
 * photo/text sides per therapist.
 */
export const TeamProfiles: React.FC = () => {
  return (
    <section aria-labelledby="perfiles-title" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold tracking-[0.18em] text-[#8B7FD1] uppercase">
            Perfiles profesionales
          </span>
          <h2
            id="perfiles-title"
            className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight"
          >
            Conoce a quienes acompañan a tu hijo
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {therapists.map((therapist, index) => {
            const photoFirst = index % 2 === 0;
            return (
              <article
                key={therapist.id}
                id={therapist.id}
                className="scroll-mt-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Photos: candid shot large, professional headshot as a small circle */}
                <div className={`md:col-span-5 ${photoFirst ? "md:order-1" : "md:order-2"}`}>
                  <div className="relative max-w-sm mx-auto">
                    <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={therapist.candidImage}
                        alt={therapist.candidAlt}
                        fill
                        sizes="(max-width: 768px) 90vw, 384px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-6 ${photoFirst ? "-right-4 sm:-right-6" : "-left-4 sm:-left-6"} w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-tr from-[#8B7FD1] via-[#E8E4F7] to-[#5B8FD4] shadow-md`}
                    >
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
                        <Image
                          src={therapist.image}
                          alt={therapist.name}
                          fill
                          sizes="112px"
                          className="object-cover"
                          style={{ objectPosition: therapist.imagePosition }}
                        />
                      </div>
                    </div>
                    <div
                      className={`absolute -top-5 ${photoFirst ? "-left-5" : "-right-5"} pointer-events-none opacity-80`}
                    >
                      <OrganicLeaf size={40} color="#8B7FD1" flip={!photoFirst} />
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className={`md:col-span-7 ${photoFirst ? "md:order-2" : "md:order-1"}`}>
                  <div className="bg-white/90 rounded-[28px] border border-[#E8E4F7] shadow-sm p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D3A]">
                      {therapist.name}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-[#8B7FD1]">
                      {therapist.role}
                      {therapist.specialty && (
                        <>
                          <span aria-hidden="true" className="mx-2 text-[#C3B8E8]">·</span>
                          <span className="text-[#5B4B9E]">{therapist.specialty}</span>
                        </>
                      )}
                    </p>
                    <div className="mt-5 space-y-4 text-sm sm:text-base text-[#3E3B52] leading-relaxed">
                      {therapist.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
