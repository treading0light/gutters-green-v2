<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const tabs = [
  "overview",
  "services",
  "contact"

]

const pageTabs = [
  "about",
  "faq",
  "blog",
]

const activeTab = ref('overview')

const captilize = (str) => {
  if (str === 'faq') return 'FAQ'

  return str.charAt(0).toUpperCase() + str.slice(1)
}

const goHome = async () => {
  activeTab.value = null
  await navigateTo('/')
}

onMounted(() => {
  const elements = tabs.map(id => document.getElementById(id)).filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              activeTab.value = entry.target.id
          }
      });
  });
  
  elements.forEach(element => observer.observe(element));

})




const handleTabChange = async (tab) => {
  // activeTab.value = tab

  if (pageTabs.includes(tab)) {
    await navigateTo(`/${tab}`)
    return
  }

  const currentRoute = useRoute()
  if (currentRoute.path === '/') {
    scrollToSection(tab)
  } else {
    await navigateTo(`/#${tab}`)
  }
}

const scrollToSection = (tab) => {
  const section = document.getElementById(tab)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth'})
    history.pushState(null, '', `#${tab}`);
    history.replaceState(history.state, '')

  }
}
</script>

<template>
    <Disclosure as="nav" class="bg-gray-100 sticky top-0 z-50 shadow " v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div @click.prevent="goHome" class="flex shrink-0 items-center">
              <MyLogo />
            </div>

            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <a v-for="(tab, index) in tabs" :href="`#${tab}`" @click.prevent="handleTabChange(tab)"
              :class="['inline-flex items-center border-b-2 text-gray-700 border-primary px-1 pt-1 text-sm font-medium',
               activeTab === tab ? 'border-primary text-gray-900' : 'border-transparent hover:border-gray-300 hover:text-gray-700']">
               {{ captilize(tab) }}
              </a>

              <a v-for="(tab, index) in pageTabs" @click.prevent="handleTabChange(tab)"
              :class="['inline-flex items-center border-b-2 text-gray-700 border-primary px-1 pt-1 text-sm font-medium hover:cursor-pointer',
               activeTab === tab ? 'border-primary text-gray-900' : 'border-transparent hover:border-gray-300 hover:text-gray-700']">
               {{  captilize(tab) }}
              </a>
            </div>
          </div>

          <div class="hidden sm:ml-6 sm:flex sm:items-center">

          </div>

          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
              <XMarkIcon v-else class="block size-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pb-3 pt-2">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <DisclosureButton v-for="tab in tabs" @click.prevent="handleTabChange(tab)" :class="['block border-l-4  py-2 pl-3 pr-4  font-medium',
          activeTab === tab ? 'border-primary bg-secondary text-gray-800' : 'border-transparent text-base text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700' ]">
            {{ captilize(tab) }}
          </DisclosureButton>        
        </div>

        <div class="border-t border-b border-gray-200 pb-3 pt-4">
          <div class="mt-3 space-y-1">
            <DisclosureButton v-for="tab in pageTabs" @click.prevent="handleTabChange(tab)" :class="['block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800',
              activeTab === tab ? 'border-primary bg-secondary text-gray-800' : 'border-transparent text-base text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
            ]">
              {{ captilize(tab) }}
            </DisclosureButton>
          </div>
        </div>

      </DisclosurePanel>
    </Disclosure>
  </template>
  
