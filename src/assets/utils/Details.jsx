import React, { useState, useEffect } from "react";

export const Details = (props) => {
  const [detail, setDetail] = useState("");

  useEffect(() => {
    // Extract date from props.detail
    const dateString = props.detail.substring(0, 10);
    const regex = /(\d{4})-(\d{2})-(\d{2})/;
    const match = dateString.match(regex);

    function getFlagEmoji(countryCode) {
      countryCode = countryCode.toUpperCase();
      const flagOffset = 0x1f1e6;
      const asciiOffset = 0x41;

      return countryCode
        .split("")
        .map((char) =>
          String.fromCodePoint(flagOffset + char.charCodeAt(0) - asciiOffset)
        )
        .join("");
    }

    if (match) {
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const d = new Date(dateString);
      const day = weekday[d.getDay()];
      const year = d.getFullYear();
      const date = d.getDate();
      const new_day = `${date} ${day}, ${year}`;
      setDetail(new_day);
    } else {
      if (props.detail.length == 2) {
        const flagString = getFlagEmoji(props.detail);

        setDetail(flagString);
      } else setDetail(props.detail);
    }
  }, [props.detail]); // Only run the effect when props.detail changes

  return (
    <div className="text-black/[0.70]">
      <p className="text-[0.65rem] font-sans">{props.label}</p>
      <p className="font-semibold text-lg text-balance font-mono">
        {detail}
        {props.offset ? ` (${props.offset})` : " "}
      </p>
    </div>
  );
};
