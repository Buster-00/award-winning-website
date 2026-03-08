<template>
  <section class="bg-black pb-52">
    <div class="container mx-auto px-3 md:px-10">
      <div class="px-5 py-32">
        <p class="font-circular-web text-lg text-blue-50">
          Into the Metagame Layer
        </p>
        <p class="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <BentoTilt class="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="/videos/feature-1.mp4"
          title="radia<b>n</b>t"
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          :is-coming-soon="true"
        />
      </BentoTilt>

      <div class="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt class="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="/videos/feature-2.mp4"
            title="zig<b>m</b>a"
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            :is-coming-soon="true"
          />
        </BentoTilt>

        <BentoTilt class="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="/videos/feature-3.mp4"
            title="n<b>e</b>xus"
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            :is-coming-soon="true"
          />
        </BentoTilt>

        <BentoTilt class="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="/videos/feature-4.mp4"
            title="az<b>u</b>l"
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            :is-coming-soon="true"
          />
        </BentoTilt>

        <BentoTilt class="bento-tilt_2">
          <div class="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 class="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <Icon icon="ti:location-arrow" class="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt class="bento-tilt_2">
          <video
            src="/videos/feature-5.mp4"
            loop
            muted
            autoplay
            class="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BentoTilt from './BentoTilt.vue'
import BentoCard from './BentoCard.vue'
</script>
