<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:ml-auto lg:pl-4 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base/7 font-semibold text-secondary"></h2>
              <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Follow us on Facebook!</p>
              <p class="mt-6 text-lg/8 text-gray-600">Stay up to date with our latest gutter cleaning and installation projects, tips to protect your home from water damage, and behind-the-scenes looks at our work. We’re committed to providing top-quality service, and we love sharing the results!</p>
              <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <component :is="feature.icon" class="absolute left-1 top-1 size-5 text-secondary" aria-hidden="true" />
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="flex items-start justify-center lg:justify-start lg:order-first">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0uuLRnms4UwG55e8W3cDe5nMxjD8xxEHbeALrvuUKcBPXZSeLDHjq5T1LCpjGJnhXl%26id%3D61551824939216&show_text=true&width=500" 
            width="500" height="601" style="border:none;overflow:hidden" 
            scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { WrenchIcon, ChatBubbleLeftEllipsisIcon, CameraIcon} from '@heroicons/vue/20/solid'
  
  const features = [
    {
      name: 'See Our Work In Action.',
      description:
        'We post plenty of photos and videos of our recent jobs, so you can see firsthand the difference a clean and properly installed gutter system makes. Whether it’s a quick maintenance job or a full installation, we take pride in every project.',
      icon: WrenchIcon,
    },
    {
      name: 'Helpful Tips & Advice',
      description: 'Not sure when to clean your gutters? Wondering how to prevent clogs and damage? We share practical tips to help homeowners keep their gutters in top shape year-round.',
      icon: ChatBubbleLeftEllipsisIcon,
    },
    {
      name: 'Stay Connected',
      description: 'Have questions about our services? Want to see more of a specific project? Follow us and drop a comment! We love hearing from our customers and sharing insights about the work we do every day.',
      icon: CameraIcon,
    },
  ]
  </script>