export const findIconByRouteName = (routeName) => {
  let iconName;
  if (routeName === "Calendar") {
    iconName = "md-calendar";
  } else if (routeName === "Progress") {
    iconName = "md-analytics";
  } else if (routeName === "Gym") {
    iconName = "md-barbell";
  } else if (routeName === "Home") {
    iconName = "md-home";
  }
  return iconName;
};
