<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import * as yup from 'yup'

const form = ref({
  name: '',
  email: '',
  address: '',
  city: '',
  state: '',
  phone: '',
  message: ''
})

const errors = ref({})
const errorMessage = ref('')
const successMessage = ref('')
const loading = ref(false)
const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    message: ''
  }
}

const formSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Must be a valid email'),
  address: yup
    .string()
    .required('Address is required')
    .max(100, 'Address cannot exceed 100 characters'),
  city: yup
    .string()
    .required('City is required')
    .max(50, 'City cannot exceed 50 characters'),
  state: yup
    .string()
    .required('State is required')
    .length(2, 'State must be exactly 2 characters (e.g., CA, NY)'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/,
      'Must be a valid phone number'
    ),
  message: yup
    .string()
    .max(500, 'Message cannot exceed 500 characters'),
});

const validateForm = async () => {
  try {
    await formSchema.validate(form.value, { abortEarly: false });
    // console.log('Form is valid:', form.value);
    sendEmail()
  } catch (err) {
    // Handle validation errors
    errors.value = err.inner.reduce((acc, curr) => {
      acc[curr.path] = curr.message;
      return acc;
    }, {});
    // console.error('Validation errors:', errors);
  }
};

const sendEmail = async () => {
  loading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: form.value,
    });

    if (response) {
      successMessage.value = 'Email sent successfully!';
      resetForm()
    }
  } catch (error) {
    console.error('Error sending email:', error);
    errorMessage.value = 'Failed to send email.';
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="relative isolate bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            <svg class="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white" />
              <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
          </div>
          <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Get your free quote today!</h2>
          <p class="mt-6 text-lg/8 text-gray-600">Reach out today and we will contact you.</p>
          <dl class="mt-10 space-y-4 text-base/7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>Federal Way, Wa 98023</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-gray-900" href="tel:+1 (253) 248-4670">253-248-4670</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-gray-900" href="mailto:hello@example.com">tonygreen@theguttersgreen.com</a></dd>
            </div>
          </dl>
        </div>
      </div>
      <form @submit.prevent="validateForm" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

            <div>
              <label for="name" class="block text-sm/6 font-semibold text-gray-900">Name</label>
              <div class="mt-2.5">
                <input v-model="form.name" type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                <span class="error">{{ errors.name }}</span>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
              <div class="mt-2.5">
                <input v-model="form.email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                <span class="error">{{ errors.email }}</span>
              </div>
            </div>

            <div>
              <label for="address" class="block text-sm/6 font-semibold text-gray-900">Address</label>
              <div class="mt-2.5">
                <input v-model="form.address" type="text" name="address" id="address" autocomplete="street-address" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                <span class="error">{{ errors.address }}</span>
              </div>
            </div>

            <div>
              <label for="city" class="block text-sm/6 font-semibold text-gray-900">City</label>
              <div class="mt-2.5">
                <input v-model="form.city" type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                <span class="error">{{ errors.city }}</span>
              </div>
            </div>

            <div>
              <label for="state" class="block text-sm/6 font-semibold text-gray-900">State</label>
              <div class="mt-2.5">
                <input v-model="form.state" type="text" name="state" id="state" autocomplete="address-level4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                <span class="error">{{ errors.state }}</span>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="phone" class="block text-sm/6 font-semibold text-gray-900">Phone number</label>
              <div class="mt-2.5">
                <input v-model="form.phone" type="tel" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                <span class="error">{{ errors.phone }}</span>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea v-model="form.message" name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary" />
                <span class="error">{{ errors.message }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-end">
          
            <button type="submit"
            class="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Send message</button>
          </div>
          <span class="error">{{ errorMessage }}</span>
          <span class="success">{{ successMessage }}</span>

        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
  
