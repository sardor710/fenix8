const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = parseInt(process.env.PORT, 10) || 3005;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject"
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  if (pathname === "/" || pathname === "") {
    pathname = "/index.html";
  }

  const safePath = path.normalize(path.join(ROOT_DIR, pathname));

  // Directory traversal guard
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("403 Forbidden");
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 Internal Server Error");
      }
      return;
    }

    if (stats.isDirectory()) {
      const indexPath = path.join(safePath, "index.html");
      if (fs.existsSync(indexPath)) {
        serveFile(indexPath, fs.statSync(indexPath), req, res);
      } else {
        res.writeHead(403, { "Content-Type": "text/plain" });
        res.end("403 Forbidden");
      }
      return;
    }

    serveFile(safePath, stats, req, res);
  });
});

function serveFile(filePath, stats, req, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const totalSize = stats.size;

  // Handle Range requests for smooth video playback (HTML5 video)
  const range = req.headers.range;
  if (range && ext === ".mp4") {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;

    if (start >= totalSize || end >= totalSize) {
      res.writeHead(416, {
        "Content-Range": `bytes */${totalSize}`
      });
      res.end();
      return;
    }

    const chunksize = end - start + 1;
    const fileStream = fs.createReadStream(filePath, { start, end });

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${totalSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": contentType
    });

    fileStream.pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": totalSize,
      "Content-Type": contentType,
      "Accept-Ranges": "bytes",
      "Cache-Control": "no-cache"
    });

    fs.createReadStream(filePath).pipe(res);
  }
}

server.listen(PORT, "0.0.0.0", () => {
  console.log(`[fēnix 8 Server] Running at http://localhost:${PORT}/`);
});
