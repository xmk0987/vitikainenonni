import { createSlice } from "@reduxjs/toolkit";

type Project = {
  name: string;
  url?: string;
  description: string;
  technologies: string[];
  images: string[];
};

type ProjectsState = {
  projects: { [key: string]: Project };
  chosenProject: string;
  chosenImage: string;
};

const initialState: ProjectsState = {
  projects: {
    todoGroups: {
      name: "TODO GROUPS",
      url: "https://www.todogroups.com",
      description:
        "A web app to help teachers in the classroom. The teacher can create and share a todo list with the students. Follow the students progress, motivate and have a clear outline for the lesson.",
      technologies: [
        "REACT",
        "EXPRESS",
        "NODEJS",
        "JS",
        "AWS",
        "S3",
        "POSTGRESQL",
        "REDUX",
        "WEBSOCKET",
      ],
      images: [
        "/assets/images/todoGroups/todo1.png",
        "/assets/images/todoGroups/todo2.png",
        "/assets/images/todoGroups/todo3.png",
      ],
    },
    moneySpendTracker: {
      name: "Money Spend Tracker",
      url: "https://www.moneyspendtracker.com/",
      description:
        "A web application to track and visualize your expenses by uploading bank statements. Easily upload your bank statements and get a smart dashboard to track your expenses, spending, and budget insights.",
      technologies: ["REACT", "TYPESCRIPT", "NEXT.js", "REDIS"],
      images: [
        "/assets/images/moneySpend/upload.png",
        "/assets/images/moneySpend/dashboard.png",
        "/assets/images/moneySpend/transactions.png",
      ],
    },
    fastspots: {
      name: "FASTSPOTS",
      description:
        "A third party web app using the Spotify API. User can create playlists faster then with Spotify and see their top tracks and artists. Premium users can also control the music player from this application. Currently not usable for other users due to Spotify API restrictions on the player.",
      technologies: ["NEXTJS", "TS", "OAUTH", "SPOTIFY API", "REDUX", "REACT"],
      images: [
        "/assets/images/fastspots/fastspots1.png",
        "/assets/images/fastspots/fastspots2.png",
      ],
    },
    getDrunk: {
      name: "CARD GAMES",
      url: "https://cardgames-7t5r.onrender.com/",
      description:
        "A fun web app to play classic party card games and some other smaller party games. No deck? No problem! Create lobbies, invite friends play with your phones online. ",
      technologies: ["WEBSOCKET", "NODEJS", "TS", "JS", "REACT", "EXPRESS"],
      images: [
        "/assets/images/getDrunk/getDrunk1.png",
        "/assets/images/getDrunk/getDrunk2.png",
      ],
    },
  },
  chosenProject: "todoGroups",
  chosenImage: "/assets/images/todoGroups/todo1.png",
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setChosenProject: (state, action) => {
      state.chosenProject = action.payload;
      state.chosenImage = state.projects[action.payload].images[0];
    },
    changeChosenImage: (state, action) => {
      const { chosenProject, chosenImage } = state;
      const images = state.projects[chosenProject].images;
      const currentIndex = images.indexOf(chosenImage);

      if (action.payload === "next") {
        const nextIndex = (currentIndex + 1) % images.length;
        state.chosenImage = images[nextIndex];
      } else if (action.payload === "previous") {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        state.chosenImage = images[prevIndex];
      }
    },
  },
});

export const { setChosenProject, changeChosenImage } = projectsSlice.actions;
export default projectsSlice.reducer;
