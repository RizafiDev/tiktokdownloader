import { useState } from "react";

function Header() {
  const [format, setFormat] = useState<"MP3" | "MP4">("MP3");
  const [url, setUrl] = useState("");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (error) {
      console.error("Gagal membaca clipboard:", error);
    }
  };
  return (
    <div className="container mx-auto w-full shadow bg-primary py-14 md:py-20 items-center justify-center text-center px-4 md:px-64 gap-4 flex flex-col">
      <div className="header w-full">
        <h1 className="font-semibold text-4xl text-white">
          Download Tiktok Video & Music Content
        </h1>
      </div>
      <div className="input w-full flex flex-col items-center gap-2 md:flex-row ">
        <input
          type="url"
          value={url}
        onChange={(e) => setUrl(e.target.value)}
          className="w-full rounded-md px-4 pt-3 pb-4 text-xl outline-none items-center justify-center truncate"
          placeholder="Input url here..."
        />
        <div className="action flex gap-2">
        <button onClick={handlePaste} className="flex gap-1 items-center justify-center rounded-md text-primary bg-white font-medium p-4">
          <i className="ri-clipboard-line ri-lg"></i>Paste
        </button>
        <button
          className="flex gap-1 items-center justify-center rounded-md text-primary bg-white font-medium p-4"
          onClick={() => setFormat(format === "MP3" ? "MP4" : "MP3")}
        >
          Format:{format}
        </button>
        <button className="flex gap-1 items-center justify-center rounded-md text-primary bg-white font-medium p-4">
          <i className="ri-download-2-line ri-lg"></i>Download
        </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
