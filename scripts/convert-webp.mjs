import sharp from "sharp";
import { glob } from "fs/promises";
import path from "path";
import fs from "fs";

const dirs = [
  "public/images",
  "public/images/actual",
  "public/images/actual/clients",
];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const ext = path.extname(entry.name).toLowerCase();
    if (ext !== ".jpg" && ext !== ".jpeg") continue;
    const input = path.join(dir, entry.name);
    const output = path.join(dir, path.basename(entry.name, ext) + ".webp");
    if (fs.existsSync(output)) continue;
    try {
      await sharp(input).webp({ quality: 80 }).toFile(output);
      console.log(`✓ ${entry.name} → ${path.basename(output)}`);
    } catch (err) {
      console.error(`✗ ${entry.name}: ${err.message}`);
    }
  }
}

console.log("\nDone!");
