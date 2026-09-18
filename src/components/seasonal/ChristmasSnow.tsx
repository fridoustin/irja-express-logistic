"use client";

export default function ChristmasSnow() {
  return (
    <div
      className="winter-is-coming"
      aria-hidden="true"
    >
      {/* Near layer */}
      <div className="snow snow--near" />
      <div className="snow snow--near snow--alt" />

      {/* Mid layer */}
      <div className="snow snow--mid" />
      <div className="snow snow--mid snow--alt" />

      {/* Far layer */}
      <div className="snow snow--far" />
      <div className="snow snow--far snow--alt" />
    </div>
  );
}