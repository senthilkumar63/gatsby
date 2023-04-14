import { useState } from "react";
import React from "react";
import SelectComponent from "./SelectComponent";
import "./styles.css";

const options = [
  { key: 1, value: "client-solution"  },
  { key: 2, value: "Global Solutions" },
  { key: 3, value: "Relocating employee solutions" },
  { key: 4, value: "departure services" },
  { key: 5, value: "destination services"},
  { key: 6, value: "domestic relocation"},
  { key: 7, value: "international assignment"},
  { key: 8, value: "pre-decision services"},
  { key: 9, value: "program design + optimization"},
  { key: 10, value: "united states + canada"}
];
export default function App() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="App">
      <h1>Cartus</h1>
      <SelectComponent
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"Type to search"}
        />
      
    </div>
  );
}
