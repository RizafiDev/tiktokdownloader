import { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

function Header() {
  const [format, setFormat] = useState<"MP3" | "MP4">("MP3");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (error) {
      console.error("Gagal membaca clipboard:", error);
    }
  };

  const validateTikTokUrl = (url: string): boolean => {
    // Pattern untuk format lengkap TikTok URL
    const fullTikTokPattern = /^https?:\/\/(?:www\.)?tiktok\.com\/@[\w.-]+\/video\/\d+(?:\?[^?]*)?$/;
    
    // Pattern untuk format pendek vt.tiktok.com
    const shortTikTokPattern = /^https?:\/\/(?:vt\.)?tiktok\.com\/\w+\/?(?:\?[^?]*)?$/;
    
    return fullTikTokPattern.test(url) || shortTikTokPattern.test(url);
  };

  const handleDownload = async () => {
    if (!validateTikTokUrl(url)) {
      setError("URL tidak valid. Harap masukkan URL TikTok yang valid.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:7000/download?url=${encodeURIComponent(url)}&format=${format}`
      );

      const downloadUrl = response.data.downloadUrl;
      const res = await axios.get(downloadUrl, { responseType: "blob" });

      const blob = new Blob([res.data], {
        type: format === "MP3" ? "audio/mpeg" : "video/mp4",
      });
      saveAs(blob, `tiktok.${format.toLowerCase()}`);
    } catch (error) {
      console.error("Gagal mengunduh video:", error);
      setError("Gagal mengunduh video. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto w-full shadow-lg bg-primary py-14 lg:py-20 items-center justify-center lg:justify-between text-center px-4 lg:px-64 gap-4 flex flex-col">
      <div className="header w-full">
        <h1 className="font-semibold text-4xl text-white">
          Download TikTok Video & Music Content
        </h1>
      </div>
      <div className="input lg:w-full flex flex-col items-center gap-2 lg:flex-row">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full rounded-md px-4 pt-3 pb-4 text-xl outline-none items-center justify-center truncate"
          placeholder="Input URL here..."
        />
        <div className="action flex gap-2">
          <button
            onClick={handlePaste}
            className="flex gap-1 items-center justify-center rounded-md text-primary bg-white font-medium p-4"
          >
            <i className="ri-clipboard-line ri-lg"></i>Paste
          </button>
          <button
            className="flex gap-1 items-center justify-center rounded-md text-primary bg-white font-medium p-4"
            onClick={() => setFormat(format === "MP3" ? "MP4" : "MP3")}
          >
            Format:{format}
          </button>
          <button
            onClick={handleDownload}
            disabled={loading}
            className="flex gap-1 items-center justify-center rounded-md text-primary bg-white font-medium p-4"
          >
            {loading ? (
              <span className="animate-spin border-4 border-t-transparent border-primary rounded-full w-5 h-5"></span>
            ) : (
              <>
                <i className="ri-download-2-line ri-lg"></i>Download
              </>
            )}
          </button>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Header;