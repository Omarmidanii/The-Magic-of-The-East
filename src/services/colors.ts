export interface colorProperties {
  base: string;
  border: string;
}

const colors: colorProperties[] = [
  { base: "Black", border: "#444444" },
  { base: "gray.400", border: "#63666A" },
  { base: "#EEEEEE", border: "#DDDDDD" }, //white
  { base: "#F5F5BB", border: "#F5F5DC" },//beige
  { base: "pink", border: "#FF78BF" },
  { base: "magenta", border: "#FF00FF" },
  { base: "purple", border: "#800080" },
  { base: "red.500", border: "#B22222" },
  { base: "#A5453A", border: "#A52A2A" },//brown
  { base: "#DAA60B", border: "#EFA720" }, //gold
  { base: "orange", border: "#FF4500" },
  { base: "yellow", border: "#FFD700" },
  { base: "cyan", border: "#00FFFF" },
  { base: "blue.300", border: "#1E7ADA" },
  { base: "blue.700", border: "#1E1A5A" },
  { base: "green", border: "#63666A" },
  { base: "#00EE00", border: "#55FF55" },//lightgreen
];

export default colors;
