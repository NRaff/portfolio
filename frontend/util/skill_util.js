export const skills = ({
  react: {
    title: "React",

  }
})

export const tech = ({
  tech: {
    react: {
      title: "React",
      projects: ["dispatch", "whatTheGif", "portfolio"]
    },
    redux: {
      title: "Redux",
      projects: ["dispatch", "whatTheGif", "portfolio"]
    },
    rails: {
      title: "Ruby on Rails",
      projects: ["dispatch"]
    },
    node: {
      title: "Node.js", 
      projects: ["whatTheGif"]
    },
    express: {
      title: "Express.js", 
      projects: ["whatTheGif"]
    },
    postgreSQL: ["dispatch"],
    mongoDB: ["whatTheGif"],
    websockets: ["whatTheGif", "dispatch"]
  }
})

export const projects = ([
  {
    title: "Dispatch",
    github: "https://github.com/NRaff/Dispatch",
    live: "https://dispatch-one.herokuapp.com/#/signup",
    description: "Dispatch is a messaging application inspired by Slack and Discord. Create workspaces, threads, and DMs to collaborate in real time.",
    techUsed: ["rails", "react", "postgreSQL", "redux", "websockets"]
  },
  {
    title: "What the Gif?!",
    github: "https://github.com/NRaff/what-the-gif",
    live: "https://what-the-gif.herokuapp.com/#/",
    description: "An online game inspired by Apples to Apples and Cards Against Humanity - win by matching your best Gif to a given category!",
    techUsed: ["redux", "react", "mongoDB", "websockets", "express", "node"]
  }
])