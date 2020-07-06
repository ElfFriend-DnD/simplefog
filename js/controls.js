import { SimplefogConfig } from "./config.js";

Hooks.on("getSceneControlButtons", (controls) => {
  if (game.user.isGM) {
    controls.push({
      name: "simplefog",
      title: "Simple Fog",
      icon: "fas fa-cloud",
      layer: "SimpleFogLayer",
      tools: [
        {
          name: "simplefogtoggle",
          title: "Enable/Disable Simple Fog",
          icon: "fas fa-eye",
          onClick: canvas.simplefog.toggle,
          active: canvas.simplefog.visible,
          toggle: true
        },
        {
          name: "brush",
          title: "Brush Tool",
          icon: "fas fa-paint-brush"
        },
        {
          name: "grid",
          title: "Grid Tool",
          icon: "fas fa-border-none",
        },
        {
          name: "shape",
          title: "Shape Tool",
          icon: "fas fa-draw-polygon",
        },
        {
          name: "box",
          title: "Box Tool",
          icon: "far fa-square",
        },
        {
          name: "circle",
          title: "Circle Tool",
          icon: "far fa-circle",
        },
        {
          name: "colorize",
          title: "CONTROLS.Colorize",
          icon: "fas fa-cog",
          onClick: () => {
            new SimplefogConfig().render(true);
          },
          button: true,
        },
        {
          name: "clearfog",
          title: "Clear Simple Fog",
          icon: "fas fa-trash",
          onClick: () => {
            Dialog.confirm({
              title: "Reset Simple Fog",
              content: "Are you sure? Fog of war will be reset.",
              yes: () => {
                canvas.simplefog.resetFog();
              },
              defaultYes: true,
            });
          },
          button: true,
        },
      ],
      activeTool: 'brush'
    });


    
  }
});