import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'
import { showToast } from 'astro-pure/utils'

export const theme: ThemeUserConfig = {
  // === Basic configuration ===
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: "Stark's",
  /** Will be used in index page & copyright declaration */
  author: 'Charles Stark',
  /** Description metadata for your website. Can be used in page metadata. */
  description: 'Personal website and blog of Charles Stark',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon.ico',
  /** Specify the default language for this site. */
  locale: {
    lang: 'en-US',
    attrs: 'en_US',
    // Date locale
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: 'src/assets/avatar.jpg',
    alt: 'Avatar'
  },

  // === Global configuration ===
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // in test
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@world0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Projects', link: '/projects' },
      { title: 'Links', link: '/links' },
      { title: 'About', link: '/about' }
    ]
  },

  /** Configure the footer of your site. */
  footer: {
    // Registration information for ICP (optional)
    registration: {
      // url: 'https://icp.gov.moe/?keyword=APTX4869',
      // text: ''
    },
    /** Enable displaying an “Astro & Pure theme powered” link in your site’s footer. */
    credits: true,
    /** Optional details about the social media accounts for this site. */
    social: {
      github: 'https://github.com/Charles-Stark',
      x: 'https://x.com/charlesstark_',
      email: 'mailto:charlesstark918@gmail.com'
    }
  },

  content: {
    externalLinksContent: ' ↗',
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    externalLinkArrow: true, // show external link arrow
    // Currently support weibo, x, bluesky
    share: ['weibo', 'x', 'bluesky']
  }
}

export const integ: IntegrationUserConfig = {
  links: {
    logbook: [{ date: '2025-03-28', content: 'Started!' }],
    // Yourself link info
    applyTip: {
      name: theme.title,
      desc: theme.description || 'Null',
      url: 'https://c12k.dev',
      avatar: 'https://avatars.githubusercontent.com/u/69138022'
    }
  },
  // Enable page search function
  pagefind: true,
  // Add a random quote to the footer (default on homepage footer)
  quote: {
    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80
    server: 'https://v1.hitokoto.cn/?c=i',
    target: `(data) => (data as { hitokoto: string }).hitokoto || 'Error'`
    // https://github.com/lukePeavey/quotable
    // server: 'https://api.quotable.io/quotes/random?maxLength=60',
    // target: `(data) => data[0].content || 'Error'`
  },
  // Tailwindcss typography
  typography: {
    // https://github.com/tailwindlabs/tailwindcss-typography
    class:
      'break-words prose prose-pure dark:prose-invert dark:prose-pure prose-headings:font-medium'
  },
  // A lightbox library that can add zoom effect
  mediumZoom: {
    enable: true, // disable it will not load the whole library
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // Comment system
  waline: {
    enable: true,
    // Server service link
    server: 'https://waline-blog-flame-pi.vercel.app/',
    // Refer https://waline.js.org/en/guide/features/emoji.html
    emoji: ['bmoji', 'qq', 'tw-emoji', 'weibo', 'tieba', 'alus'],
    // Refer https://waline.js.org/en/reference/client/props.html
    additionalConfigs: {
      // search: false,
      lang: 'en',
      pageview: true,
      comment: true,
      locale: {
        reaction0: 'Like',
        placeholder: 'Welcome to comment (login is unnecessary but recommended)',
        nick: 'Nickname',
        admin: 'OP',
        sticky: 'Pinned',
        mail: 'Email',
        hottest: 'Popular',
        anonymous: 'Anonymous',
        mailError: 'Please enter a valid email address',
        waiting: 'Pending',
        unsticky: 'Unpin'
      },
      imageUploader: (_: File) => {
        showToast({ message: 'Not supported yet' })
        alert('Not supported yet')
        return Promise.resolve('')
      }
    }
  }
}

export const terms: CardListData = {
  title: 'Terms content',
  list: [
    {
      title: 'Privacy Policy',
      link: '/terms/privacy-policy'
    },
    {
      title: 'Terms and Conditions',
      link: '/terms/terms-and-conditions'
    },
    {
      title: 'Copyright',
      link: '/terms/copyright'
    },
    {
      title: 'Disclaimer',
      link: '/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config
