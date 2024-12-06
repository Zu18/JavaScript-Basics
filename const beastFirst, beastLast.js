function feast(beast, dish) {
  const [beastFirst, beastLast] = [beast.charAt(0), beast.charAt(beast.length - 1)];
  const [dishFirst, dishLast] = [dish.charAt(0), dish.charAt(dish.length - 1)];
  return [beastFirst, beastLast].join("") == [dishFirst, dishLast].join("")
}
