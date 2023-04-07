import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#800000",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./mu.png",
  fullDecal: "./threejs.png",
});

export default state;
