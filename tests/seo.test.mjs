import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");
const site = "https://www.humanfactors.pro";
const searchDescription = "Senior Human Factors Design Engineer at Intuitive Surgical, focused on surgical robotics. Prior work at Amazon; Ph.D. internships at NASA and Mercedes-Benz.";
const profileSummary = "Brandon Allan Fluegel, Ph.D., is a Senior Human Factors Design Engineer at Intuitive Surgical. His work focuses on human factors for surgical robotics. He earned his Ph.D. in Human Factors Psychology at Old Dominion University. His portfolio documents prior research and engineering projects at Amazon Devices, NASA, and Mercedes-Benz. He authored a human-AI trust audit framework and is a co-inventor of a U.S. patent.";

test("production HTML exposes the profile and research summaries without JavaScript", async () => {
  const html = await read(".next/server/app/index.html");
  const visibleHtml = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  const hero = visibleHtml.match(/<section aria-labelledby="hero-name"[\s\S]*?<\/section>/);
  const overview = visibleHtml.match(/<section aria-labelledby="research-overview"[\s\S]*?<\/section>/);
  assert.ok(hero, "server-rendered hero is missing");
  assert.match(hero[0], /Brandon Allan Fluegel, Ph\.D\./);
  assert.match(hero[0], /Senior Human Factors Design Engineer at Intuitive Surgical/);
  assert.match(hero[0], /surgical robotics/);
  assert.match(hero[0], /Human Factors Ph\.D\. internship projects at NASA and Mercedes-Benz/);
  assert.ok(hero[0].includes('href="#amazon-section"'), "hero must link to the case studies");
  assert.ok(overview, "server-rendered research overview is missing");
  assert.match(visibleHtml, /Brandon Allan Fluegel, Ph\.D\./);
  assert.match(visibleHtml, /Senior Human Factors Design Engineer at Intuitive Surgical/);
  assert.match(overview[0], /Old Dominion University/);
  assert.match(overview[0], /US Patent 12,532,040 B1/);
  assert.match(overview[0], /outcomes below are reported in my portfolio/i);
  assert.equal((overview[0].match(/<article\b/g) ?? []).length, 4);

  for (const id of ["amazon-section", "nasa-section", "mercedes-section", "agent-trust"]) {
    assert.ok(overview[0].includes(`href="#${id}"`), `missing overview link to ${id}`);
    assert.ok(visibleHtml.includes(`id="${id}"`), `missing target ${id}`);
    assert.ok(visibleHtml.indexOf(`id="${id}"`) < overview.index, `${id} must appear before the overview`);
  }
  assert.ok(visibleHtml.indexOf("<footer") > overview.index, "overview must appear before the footer");
  for (const claim of ["20,000+ trials", "1,000 ms", "projected $50M", "15 months", "75M+ active customers", "30%", "15%", "24%", "four-phase, six-principle"]) {
    assert.ok(overview[0].includes(claim), `missing contextualized claim: ${claim}`);
  }
  assert.equal((overview[0].match(/Human Factors Ph\.D\. Intern/g) ?? []).length, 2);
});

test("structured identity and research links match the published content", async () => {
  const html = await read(".next/server/app/index.html");
  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(jsonLd, "JSON-LD not found");
  const graph = JSON.parse(jsonLd[1])["@graph"];
  const person = graph.find((item) => item["@type"] === "Person");
  const profile = graph.find((item) => item["@type"] === "ProfilePage");
  const patent = graph.find((item) => item["@id"] === `${site}#patent-12532040`);
  const items = graph.find((item) => item["@type"] === "ItemList").itemListElement;

  assert.equal(person.name, "Brandon Allan Fluegel");
  assert.equal(person.jobTitle, "Senior Human Factors Design Engineer");
  assert.equal(person.description, profileSummary);
  assert.equal(profile.mainEntity["@id"], `${site}#person`);
  assert.equal(patent.creator["@id"], `${site}#person`);
  assert.match(patent.name, /Context-based control inputs for a device/);
  assert.equal(items.length, 4);
  assert.equal(items[3].item["@id"], `${site}#human-ai-trust-framework`);
  for (const item of items.slice(0, 3)) {
    assert.equal(item.item.author["@id"], `${site}#person`);
    assert.ok(html.includes(item.item.name), `structured work title is not visible: ${item.item.name}`);
  }
  assert.ok(html.includes(`<link rel="canonical" href="${site}"/>`));
  assert.ok(html.includes("<title>Brandon Allan Fluegel, Ph.D. | Human Factors Design Engineer</title>"));
  assert.ok(html.includes(`<meta name="description" content="${searchDescription}"/>`));
  assert.ok(html.includes(`<meta property="og:description" content="${searchDescription}"/>`));
  assert.ok(html.includes(`<meta name="twitter:description" content="${searchDescription}"/>`));
});

test("crawler permissions, sitemap and supplemental summaries remain available", async () => {
  const [robots, sitemap, concise, full] = await Promise.all([
    read(".next/server/app/robots.txt.body"),
    read(".next/server/app/sitemap.xml.body"),
    read("public/llms.txt"),
    read("public/llms-full.txt"),
  ]);
  assert.match(robots, /User-Agent: \*\s+Allow: \//i);
  assert.ok(robots.includes(`${site}/sitemap.xml`));
  assert.ok(sitemap.includes(`<loc>${site}</loc>`));
  for (const summary of [concise, full]) {
    assert.ok(summary.includes(profileSummary), "profile narrative differs from structured data");
    assert.doesNotMatch(summary, /\b(?:HMI|L2)\b/);
    assert.match(summary, /self-reported/);
    assert.match(summary, /projected/i);
    assert.match(summary, /Human Factors Ph\.D\. intern/i);
    assert.ok(summary.includes("https://patents.google.com/patent/US12532040B1"));
  }
});
