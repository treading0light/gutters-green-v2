import '@nuxt/schema';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    nodemailer?: {
      from: string;
      host: string;
      port: number;
      secure: boolean;
      auth: {
        user: string,
        pass: string
      };
    };
  }
}