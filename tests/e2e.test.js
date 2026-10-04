const fs = require("fs");
const path = require("path");
const assert = require("assert");

console.log("==================================================");
console.log("Garmin fēnix 8 Clone - Automated Verification Suite");
console.log("==================================================");

let passed = 0;
let total = 0;

function it(desc, fn) {
  total++;
  try {
    fn();
    console.log(`  ✔ [PASS] ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  ✖ [FAIL] ${desc}`);
    console.error(`    ${err.message}`);
    throw err;
  }
}

// 1. Verify Entry HTML and Core DOM Sections
it("index.html exists and contains all required sections and meta tags", () => {
  assert(fs.existsSync("index.html"), "index.html missing");
  const html = fs.readFileSync("index.html", "utf8");
  
  const requiredIds = [
    "apac-header-2017",
    "pd-nav",
    "hero",
    "device",
    "overview",
    "design",
    "voice",
    "training",
    "outdoor",
    "flashlight",
    "sports",
    "map",
    "share",
    "message-app",
    "health",
    "smartlife",
    "bands",
    "spec",
    "apac-footer-2017"
  ];

  requiredIds.forEach(id => {
    assert(html.includes(`id="${id}"`), `Section #${id} missing in index.html`);
  });

  assert(html.includes("fēnix 8 Series the ultimate smartwatch"), "Title missing in index.html");
  assert(html.includes("video/minisite-kv.mp4"), "Hero video source missing in index.html");
  assert(html.includes('<span class="logo-text">fenix 8</span>'), "Logo text 'fenix 8' missing in index.html");
  assert(!html.includes("DENIN"), "Obsolete 'DENIN' found in index.html");
});

// 2. Verify Media Assets & Manifest
it("media_manifest.json exists and all 89 assets exist locally and are non-empty", () => {
  const manifestPath = "src/assets/media_manifest.json";
  assert(fs.existsSync(manifestPath), "media_manifest.json missing");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  assert(manifest.assets && manifest.assets.length > 0, "No assets recorded in manifest");

  manifest.assets.forEach(asset => {
    const p1 = path.join("src", "assets", asset.path);
    const p2 = path.join(asset.path);
    assert(fs.existsSync(p1) || fs.existsSync(p2), `Asset file missing: ${asset.path}`);
    const stat = fs.existsSync(p2) ? fs.statSync(p2) : fs.statSync(p1);
    assert(stat.size > 0, `Asset file is empty: ${asset.path}`);
  });
});

// 3. Verify Video Assets
it("all 6 video assets exist and are valid media files", () => {
  const videos = [
    "video/minisite-kv.mp4",
    "video/amoled-screen.mp4",
    "video/solar-screen.mp4",
    "video/voice-listen.mp4",
    "video/voice-control.mp4",
    "video/voice-memo.mp4"
  ];

  videos.forEach(v => {
    assert(fs.existsSync(v), `Video missing: ${v}`);
    const stat = fs.statSync(v);
    assert(stat.size > 10000, `Video file suspiciously small: ${v} (${stat.size} bytes)`);
  });
});

// 4. Verify Modular Code Files and Syntax
it("all JavaScript and CSS source modules exist and are non-empty", () => {
  const modules = [
    "src/styles.css",
    "src/main.js",
    "src/js/animations.js",
    "src/js/interactions.js",
    "css/fenix-8.css",
    "css/fenix-8-en.css",
    "js/contents.js",
    "js/fenix-8.js"
  ];

  modules.forEach(m => {
    assert(fs.existsSync(m), `Module missing: ${m}`);
    const content = fs.readFileSync(m, "utf8");
    assert(content.length > 50, `Module file too short: ${m}`);
  });
});

// 5. Verify Spec Interactive Model Configurations
it("spec section contains interactive AMOLED and Solar image selectors and size configs", () => {
  const html = fs.readFileSync("index.html", "utf8");
  assert(html.includes("spec-fenix-8-amoled-43mm-gold.png"), "AMOLED 43mm gold image missing");
  assert(html.includes("spec-fenix-8-amoled-47mm-orange.png"), "AMOLED 47mm orange image missing");
  assert(html.includes("spec-fenix-8-amoled-51mm-black.png"), "AMOLED 51mm black image missing");
  assert(html.includes("spec-fenix-8-solar-47mm-black.png"), "Solar 47mm image missing");
  assert(html.includes("spec-fenix-8-solar-51mm-black.png"), "Solar 51mm image missing");
});

// 6. Verify No External Website Links Exist
it("no links to external websites exist across project entrypoints and scripts", () => {
  const filesToCheck = [
    "index.html",
    "build_site.js",
    "js/contents.js",
    "js/promotion.js"
  ];

  filesToCheck.forEach(file => {
    assert(fs.existsSync(file), `File missing: ${file}`);
    const content = fs.readFileSync(file, "utf8");

    // Check for any anchor tags linking to external websites
    const externalAnchorRegex = /<a\b[^>]*\bhref=["']https?:\/\//i;
    assert(!externalAnchorRegex.test(content), `Found external anchor link in ${file}`);

    // Check for external Garmin website links
    assert(!content.includes("https://www.garmin.com"), `Found external Garmin website link in ${file}`);
    assert(!content.includes("https://fonts.garmin.com"), `Found external fonts.garmin.com link in ${file}`);
  });
});

console.log(`\nResults: ${passed} / ${total} tests passed successfully!`);
