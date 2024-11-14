export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export interface Category {
  id:number;
  name: string;
};
export interface Product {
  id:number;
  name:string;
  image: string;
  categoryId: number;
  desc: string;
};
export const categories: Category[] = [
  {id:1,name:"Laptops"},
  {id:2,name:"Mobiles"},
]
export const work: Product[] = [
  {id:1, name: "Iphone 13 pro max", image:"/mobile13pro.png",categoryId: 2, desc:"Iphone 13 pro max"},
  {id:1, name: "Mac book 2021", image:"/mobile-1.jpg",categoryId: 1, desc:"Mac book 2021"},
  {id:1, name: "Mac book 2024", image:"/macbook2024.png",categoryId: 1, desc:"Mac book 2024"},
  {id:1, name: "Iphone 14 pro max", image:"/mobile14pro.png",categoryId: 2, desc:"Iphone 14 pro max"},
  {id:1, name: "Iphone 15 pro max", image:"/mobile15pro.png",categoryId: 2, desc:"Iphone 15 pro max"},
  {id:1, name: "Mac book 2022", image:"/macbook2022.png",categoryId: 1, desc:"Mac book 2022"},
];


export const skills = [
  {
    name:"SEO",
    percentage: "85%",
    image:"/seo.png"
  },
  {
    name:"On Page SEO",
    percentage: "80%",
    image: "/on.png"
  },
  {
    name:"Off Page SEO",
    percentage: "90%",
    image: "/off.png"
  },
  {
    name:"Technical SEO",
    percentage: "50%",
    image:"/technical.png"
  },
  {
    name:"Social media MRK",
    percentage: "60%",
    image:"/social.png"
  },
]


export const experience = [
  {
    id: 1,
    startDate: "2023",
    endDate: "continue",
    title: "SEO Expert",
    descripton: "Search engine optimization & also expert in onpage & offpage",
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "continue",
    title: "Content optimization & content generator",
    descripton: "Create content for blogging sites and also optimize them",
  },
  {
    id: 3,
    startDate: "2024",
    endDate: "continue",
    title: "Social media marketing",
    descripton: "Post and ads management",
  },
  {
    id: 4,
    startDate: "2021",
    endDate: "2023",
    title: "Finance management",
    descripton: "Work as a HR",
  },
]