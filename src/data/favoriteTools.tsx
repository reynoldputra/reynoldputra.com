export type FavoriteTool = {
  tag: string;
  tools: {
    img: string;
    name: string;
    color: string;
    colorName: string;
  }[];
};

export const favoriteToolsData: FavoriteTool[] = [
  {
    tag: "Language",
    tools: [
      {
        img: "javascript.svg",
        name: "Javascript",
        color: "#F0DB4F",
        colorName: "javascript",
      },
      {
        img: "typescript.svg",
        name: "Typescript",
        colorName: "typescript",
        color: "#239AEB",
      },
      {
        img: "c.svg",
        name: "C/C++",
        colorName: "clang",
        color: "#FFFFFF",
      },
      {
        img: "php.svg",
        name: "PHP",
        colorName: "php",
        color: "#B0CBFB",
      },
      {
        img: "python.svg",
        name: "Python",
        colorName: "python",
        color: "#2C8FE0",
      },
    ],
  },
  {
    tag: "Frontend",
    tools: [
      {
        img: "react.svg",
        name: "React",
        colorName: "react",
        color: "#00D8FF",
      },
      {
        img: "vue.svg",
        name: "Vue",
        colorName: "vue",
        color: "#41B883",
      },
      {
        img: "next.svg",
        name: "Next.js",
        colorName: "next",
        color: "#F8F8F",
      },
      {
        img: "tailwind.svg",
        name: "Tailwind CSS",
        colorName: "tailwind",
        color: "#38BDF8",
      },
      {
        img: "bootstrap.svg",
        name: "Bootstrap",
        colorName: "bootstrap",
        color: "#9F4DFE",
      },
    ],
  },
  {
    tag: "Backend",
    tools: [
      {
        img: "laravel.svg",
        name: "Laravel",
        colorName: "laravel",
        color: "#D41F13",
      },
      {
        img: "express.svg",
        name: "Express",
        colorName: "express",
        color: "#FFFFFF",
      },
      {
        img: "nest.svg",
        name: "Nest.js",
        colorName: "nest",
        color: "#F31C4D",
      },
    ],
  },
  {
    tag: "Database",
    tools: [
      {
        img: "mysql.svg",
        name: "MySQL",
        colorName: "mysql",
        color: "#3998BA",
      },
      {
        img: "mongo.svg",
        name: "MongoDB",
        colorName: "mongo",
        color: "#10AA50",
      },
      {
        img: "firebase.svg",
        name: "Firebase",
        colorName: "firebase",
        color: "#FCCA3F",
      },
    ],
  },
  {
    tag: "Learn",
    tools: [
      {
        img: "golang.svg",
        name: "Golang",
        colorName: "golang",
        color: "#5DC9E1",
      },
    ],
  },
];
