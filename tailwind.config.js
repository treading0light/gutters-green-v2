/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [daisyui, tailwindTypography],
  daisyui: {
    themes: [
      {
        mytheme: {
                    
          "primary": "#166534",
                    
          "secondary": "#34d399",
                    
          "accent": "#1f6bff",
                    
          "neutral": "#040c02",
                    
          "base-100": "#23251a",
                    
          "info": "#00b9ff",
                    
          "success": "#7ab300",
                    
          "warning": "#d37800",
                    
          "error": "#ff8d9a",
          },
        },
      ],
    },
}

