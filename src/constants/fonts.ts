import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const Quicksand = {
  Q_3: Quicksand_300Light,
  Q_4: Quicksand_400Regular,
  Q_5: Quicksand_500Medium,
  Q_6: Quicksand_600SemiBold,
  Q_7: Quicksand_700Bold,
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
