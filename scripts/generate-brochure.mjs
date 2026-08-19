import PDFDocument from "pdfkit";
import fs from "fs";

const doc = new PDFDocument({
  size: "A4",
  info: {
    Title: "Shree Om Sai Packaging – Product Brochure",
    Author: "Shree Om Sai Packaging",
    Subject: "Steel Cable Drum Product Catalog",
  },
});

doc.pipe(fs.createWriteStream("public/brochure.pdf"));

const primary = "#006b31";
const green = "#00A54F";

function header(text, y) {
  doc.fontSize(22).font("Helvetica-Bold").fillColor(primary).text(text, 50, y);
}

function body(text, y) {
  doc.fontSize(11).font("Helvetica").fillColor("#333").text(text, 50, y, { width: 495, align: "left" });
}

// Cover
doc.fontSize(36).font("Helvetica-Bold").fillColor(primary).text("SHREE OM SAI", 50, 120, { align: "center" });
doc.fontSize(28).font("Helvetica-Bold").fillColor(primary).text("PACKAGING", 50, 160, { align: "center" });
doc.fontSize(14).font("Helvetica").fillColor(green).text("Steel Cable Drum Manufacturer", 50, 210, { align: "center" });
doc.fontSize(10).fillColor("#666").text("ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018 · ZED Gold Certified", 50, 240, { align: "center" });
doc.fontSize(10).fillColor("#666").text("Save Wood, Go Green", 50, 270, { align: "center" });

doc.moveTo(50, 310).lineTo(545, 310).strokeColor(primary).lineWidth(2).stroke();

doc.fontSize(10).fillColor("#333").text("Plot No. F-596, M.I.A. Extension, Alwar-301030, Rajasthan", 50, 340, { align: "center" });
doc.fontSize(10).text("info@sospackaging.com | 0144 - 2881561 | www.sospackaging.com", 50, 355, { align: "center" });

doc.addPage();

// About
header("About Us", 50);
body("Established in 2008, Shree Om Sai Packaging is a leading steel cable drum manufacturing company based in Alwar, Rajasthan. We operate 4 manufacturing units (3 in Alwar, 1 in Reengus) with a monthly capacity of 450-500 metric tonnes, producing approximately 1500 drums per month.", 80);
body("Our mission is to revolutionize the cable drum industry by replacing traditional wooden drums with durable, eco-friendly steel cable drums that are 100% recyclable and reusable up to 3 times.", 140);

doc.moveTo(50, 190).lineTo(545, 190).strokeColor("#ddd").lineWidth(1).stroke();

// Products
header("Product Range", 210);

const products = [
  { name: "Corrugated Steel Cable Drum", desc: "Ribbed corrugated design for exceptional strength-to-weight ratio. Ideal for high-tension cable winding and heavy-load transport. Replaces traditional wooden drums." },
  { name: "Process Drum", desc: "Specialized heavy-duty steel containers for in-house cable twisting, sheathing, and extrusion lines. Galvanized framework for enhanced stability." },
  { name: "MS Tie Rod", desc: "High-strength mild steel tie rods for drum assembly and structural bracing. Galvanized finish for superior corrosion resistance." },
  { name: "Hybrid Drum", desc: "Combines steel strength with engineered materials for lightweight durability. Excellent impact resistance in varied conditions." },
  { name: "Export Drum", desc: "Manufactured to international export standards. Engineered for safe ocean freight and container loading with optimum weight design." },
  { name: "Refurbished Drum", desc: "Cost-effective reconditioned drums. Thorough inspection and restoration to extend lifecycle and reduce packaging costs." },
];

let y = 245;
for (const p of products) {
  if (y > 700) { doc.addPage(); y = 50; }
  doc.fontSize(12).font("Helvetica-Bold").fillColor(primary).text(p.name, 50, y);
  doc.fontSize(10).font("Helvetica").fillColor("#444").text(p.desc, 70, y + 18, { width: 475 });
  y += 58;
}

doc.addPage();

// Certifications
header("Certifications & Recognition", 50);
const certs = [
  "ISO 9001:2015 — Quality Management System (TUV Rheinland)",
  "ISO 14001:2015 — Environmental Management System (TUV Rheinland)",
  "ISO 45001:2018 — Occupational Health & Safety (TUV Rheinland)",
  "ZED Gold Certification — Zero Effect Zero Defect (1st in India for steel cable drums)",
  "State Safety Award 2022, 2023 & 2024 — Factories & Boilers Dept., Rajasthan",
  "MSME Recognition",
];

y = 80;
for (const c of certs) {
  doc.fontSize(10).font("Helvetica").fillColor("#333").text(`• ${c}`, 70, y, { width: 475 });
  y += 20;
}

doc.moveTo(50, y + 20).lineTo(545, y + 20).strokeColor("#ddd").lineWidth(1).stroke();

// Capacity
header("Manufacturing Capacity", y + 40);
body("• Monthly: 450-500 MT (~1500 drums)", y + 70);
body("• Daily: 45-50 drums", y + 90);
body("• 4 units: 3 in Alwar + 1 in Reengus", y + 110);
body("• USP: On-time delivery — first choice for order booking", y + 130);

doc.moveTo(50, y + 155).lineTo(545, y + 155).strokeColor("#ddd").lineWidth(1).stroke();

// Contact
header("Contact Us", y + 175);
body("Shree Om Sai Packaging", y + 205);
body("Plot No. F-596, M.I.A. Extension, Alwar - 301030, Rajasthan", y + 225);
body("Phone: 0144 - 2881561", y + 245);
body("Email: info@sospackaging.com", y + 265);
body("Web: www.sospackaging.com", y + 285);
body("Sister Company: Cabreel Drums — cabreeldrums@gmail.com | 7976122394", y + 305);

doc.end();

console.log("✓ public/brochure.pdf generated");
