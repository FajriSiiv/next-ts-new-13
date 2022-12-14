"use client";
import React, { FormEvent, useEffect, useState } from "react";

const Timer = () => {
  const [detik, setDetik] = useState("");
  const [waktu, setWaktu] = useState();
  const [bgChange, setBgChange] = useState("");
  // const [menit, setMenit] = useState("");
  // const [jam, setJam] = useState("");

  function submitCall(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let timeDetik = parseFloat(detik);

    setTimeout(() => {
      setBgChange("bg-red-500");
      setTimeout(() => {
        setBgChange("bg-blue-500");
      }, 3000);
    }, timeDetik * 1000);
  }

  return (
    <div
      className={`${bgChange} h-[100vh] flex justify-center items-center transition-all bg-blue-500`}
    >
      <form onSubmit={submitCall} className="flex flex-col">
        <label className="text-3xl uppercase text-center">Detik</label>
        <input
          type="number"
          value={detik}
          onChange={(e: any) => setDetik(e.target.value)}
          className="h-10 border-2 px-2"
        />
        <div className="mt-5 grid grid-cols-2 gap-x-2">
          <button
            className="py-1 px-3 bg-teal-400"
            onClick={() => setDetik("5")}
            type="submit"
          >
            5 Detik
          </button>
          <button
            className="py-1 px-3 bg-teal-400"
            onClick={() => setDetik("1860")}
            type="submit"
          >
            30 Menit
          </button>
        </div>
        <button type="submit" className="px-4 py-2 bg-green-400 mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Timer;
