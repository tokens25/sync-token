// import React from "react"

type ColorItem = {
  name: string
  hex: string
}

type Props = {
  colors: ColorItem[]
}

export const ColorPalette = ({ colors }: Props) => (
  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
    {colors.map(color => (
      <div key={color.name} style={{ textAlign: "center" }}>
        <div
          style={{
            background: color.hex,
            width: "64px",
            height: "64px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <div style={{ marginTop: "0.5rem", fontSize: "14px" }}>
          <strong>{color.name}</strong>
          <div>{color.hex}</div>
        </div>
      </div>
    ))}
  </div>
)
