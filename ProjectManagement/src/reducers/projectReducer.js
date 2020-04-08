let projectReducer = (state, action) => {
  if (state === undefined) {
    state = {
      projects: [
        {
          id: "0",
          title: "test",
          category: "Front-End",
        },
      ],
    };

    switch (action.type) {
      case "addProject":
        return {
          ...state,
          projects: state.projects.concat(action.project),
        };

      case "deleteProject":
        let filteredProjects = [...state.projects];
        //console.log("copy array: ", filteredProjects);
        let index = filteredProjects.findIndex((pObj) => pObj.id === action.id);

        //console.log("filter array: ", filteredProjects);
        filteredProjects.splice(index, 1);

        //console.log("spliced array: ", filteredProjects);

        return {
          ...state,
          projects: filteredProjects,
        };

      default:
        console.log("nothing found: error");
        return state;
    }
  }
};

export default projectReducer;
