import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const Quicksand = {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
};

const OtherFonts = {
  SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  SpaceMonoItalic: require("../../assets/fonts/SpaceMono-Italic.ttf"),
  SpaceMonoBold: require("../../assets/fonts/SpaceMono-Bold.ttf"),
  SpaceMonoBoldItalic: require("../../assets/fonts/SpaceMono-BoldItalic.ttf"),
};

const Fonts = {
  ...Quicksand,
  ...OtherFonts,
};

export default Fonts;
