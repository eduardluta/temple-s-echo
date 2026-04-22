// Generate Salomon_Tempel_HE.docx from all Hebrew content:
// - i18n (he.json)
// - story-content-he.ts
// - privacy-content.ts (he)
// Run with: npx tsx scripts/generate-he-docx.ts

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  PageBreak,
  BorderStyle,
  ShadingType,
  Footer,
  PageNumber,
} from "docx";
import * as fs from "fs";
import storyContentHE from "../src/data/story-content-he";
import { privacyContent } from "../src/data/privacy-content";
import heJson from "../src/i18n/locales/he.json";

const HEBREW_FONT = "Frank Ruhl Libre";
const GOLD = "8B6914";
const GOLD_LIGHT = "C9A84C";
const DARK = "1A1410";
const MUTED = "6B5E4E";
const PARCHMENT = "F5EDD8";

const he = heJson as any;
const privacy = privacyContent.he;

// ── HELPERS ──
const rtlText = (
  text: string,
  opts: {
    bold?: boolean;
    italic?: boolean;
    size?: number;
    color?: string;
  } = {},
) =>
  new TextRun({
    text,
    bold: opts.bold,
    italics: opts.italic,
    size: opts.size ?? 22,
    color: opts.color ?? DARK,
    font: HEBREW_FONT,
  });

const rtlPara = (
  children: TextRun[],
  opts: {
    alignment?: (typeof AlignmentType)[keyof typeof AlignmentType];
    heading?: (typeof HeadingLevel)[keyof typeof HeadingLevel];
    pageBreakBefore?: boolean;
    spacingBefore?: number;
    spacingAfter?: number;
    indent?: { left?: number; right?: number };
    border?: any;
    shading?: any;
  } = {},
) =>
  new Paragraph({
    bidirectional: true,
    alignment: opts.alignment ?? AlignmentType.RIGHT,
    heading: opts.heading,
    pageBreakBefore: opts.pageBreakBefore,
    spacing: {
      before: opts.spacingBefore ?? 120,
      after: opts.spacingAfter ?? 120,
      line: 360,
    },
    indent: opts.indent,
    border: opts.border,
    shading: opts.shading,
    children,
  });

const centered = (
  children: TextRun[],
  opts: {
    spacingBefore?: number;
    spacingAfter?: number;
    heading?: (typeof HeadingLevel)[keyof typeof HeadingLevel];
  } = {},
) =>
  new Paragraph({
    bidirectional: true,
    alignment: AlignmentType.CENTER,
    heading: opts.heading,
    spacing: {
      before: opts.spacingBefore ?? 120,
      after: opts.spacingAfter ?? 120,
      line: 360,
    },
    children,
  });

const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

const sectionDivider = () =>
  new Paragraph({
    bidirectional: true,
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 240 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD_LIGHT, space: 4 },
    },
    children: [new TextRun({ text: "", size: 2 })],
  });

const sectionTitle = (text: string) =>
  centered(
    [rtlText(text, { bold: true, size: 40, color: DARK })],
    { spacingBefore: 360, spacingAfter: 240, heading: HeadingLevel.HEADING_1 },
  );

const subSectionTitle = (text: string) =>
  rtlPara([rtlText(text, { bold: true, size: 28, color: GOLD })], {
    heading: HeadingLevel.HEADING_2,
    spacingBefore: 240,
    spacingAfter: 120,
  });

const bodyPara = (text: string, opts: { italic?: boolean; color?: string } = {}) =>
  rtlPara(
    [rtlText(text, { italic: opts.italic, size: 22, color: opts.color ?? DARK })],
    { alignment: AlignmentType.JUSTIFIED, spacingAfter: 180 },
  );

const children: Paragraph[] = [];

// ══════════════════════════════════════════════════════════════════════════════
// COVER PAGE
// ══════════════════════════════════════════════════════════════════════════════

children.push(
  centered(
    [rtlText(storyContentHE.title, { bold: true, size: 56, color: DARK })],
    { spacingBefore: 2400, spacingAfter: 240 },
  ),
);

children.push(
  centered(
    [rtlText(storyContentHE.hebrew, { size: 48, color: GOLD })],
    { spacingBefore: 120, spacingAfter: 240 },
  ),
);

children.push(
  centered([new TextRun({ text: "✦ ✦ ✦", size: 24, color: GOLD_LIGHT })], {
    spacingBefore: 120,
    spacingAfter: 240,
  }),
);

children.push(
  centered(
    [rtlText(storyContentHE.subtitle, { italic: true, size: 24, color: MUTED })],
    { spacingBefore: 240, spacingAfter: 120 },
  ),
);

children.push(
  centered(
    [rtlText(he.hero.tagline, { size: 18, color: GOLD })],
    { spacingBefore: 480, spacingAfter: 120 },
  ),
);

children.push(
  centered(
    [rtlText("מסמך מלא — כל תוכן האתר", { italic: true, size: 20, color: MUTED })],
    { spacingBefore: 720, spacingAfter: 120 },
  ),
);

// ══════════════════════════════════════════════════════════════════════════════
// PART 1 — HOMEPAGE
// ══════════════════════════════════════════════════════════════════════════════

children.push(pageBreak());
children.push(sectionTitle("דף הבית"));
children.push(sectionDivider());

// Hero
children.push(subSectionTitle("מסך הפתיחה"));
children.push(
  centered(
    [rtlText(he.hero.title, { bold: true, size: 36, color: DARK })],
    { spacingBefore: 120, spacingAfter: 60 },
  ),
);
children.push(
  centered([rtlText(he.hero.hebrew, { size: 32, color: GOLD })], {
    spacingBefore: 60,
    spacingAfter: 180,
  }),
);
children.push(
  centered(
    [rtlText(he.hero.subtitle, { italic: true, size: 22, color: MUTED })],
    { spacingBefore: 60, spacingAfter: 180 },
  ),
);
children.push(bodyPara(he.hero.description));
children.push(bodyPara(he.hero.credit, { italic: true, color: MUTED }));

// Video
children.push(subSectionTitle(`${he.video.label} — ${he.video.title}`));
children.push(bodyPara(he.video.caption, { italic: true, color: MUTED }));

// Intro
children.push(subSectionTitle(he.intro.title));
children.push(bodyPara(he.intro.text));

// Features — 3 areas
children.push(subSectionTitle(he.features.title));

[he.features.card1, he.features.card2, he.features.card3].forEach((card: any) => {
  children.push(
    rtlPara(
      [rtlText(card.category, { size: 18, color: GOLD, bold: true })],
      { spacingBefore: 240, spacingAfter: 60 },
    ),
  );
  children.push(
    rtlPara([rtlText(card.title, { bold: true, size: 26, color: DARK })], {
      spacingBefore: 60,
      spacingAfter: 120,
    }),
  );
  children.push(bodyPara(card.text));
});

// Quote banner
children.push(subSectionTitle("ציטוט"));
children.push(
  rtlPara(
    [rtlText(he.quoteBanner.quote, { italic: true, size: 24, color: GOLD })],
    {
      alignment: AlignmentType.CENTER,
      indent: { left: 720, right: 720 },
      spacingBefore: 240,
      spacingAfter: 240,
      border: {
        top: { style: BorderStyle.SINGLE, size: 4, color: GOLD_LIGHT, space: 8 },
        bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD_LIGHT, space: 8 },
      },
    },
  ),
);

// ══════════════════════════════════════════════════════════════════════════════
// PART 2 — THE STORY (22 scenes)
// ══════════════════════════════════════════════════════════════════════════════

children.push(pageBreak());
children.push(sectionTitle("הסיפור — " + storyContentHE.title));
children.push(sectionDivider());
children.push(
  centered(
    [rtlText(storyContentHE.subtitle, { italic: true, size: 22, color: MUTED })],
    { spacingBefore: 240, spacingAfter: 480 },
  ),
);

storyContentHE.scenes.forEach((scene, idx) => {
  if (idx > 0) children.push(pageBreak());
  else children.push(pageBreak());

  // Scene number
  children.push(
    rtlPara(
      [rtlText(scene.num, { bold: true, size: 18, color: GOLD })],
      { spacingBefore: 0, spacingAfter: 60 },
    ),
  );

  // Scene title
  children.push(
    rtlPara(
      [rtlText(scene.title, { bold: true, size: 36, color: DARK })],
      {
        heading: HeadingLevel.HEADING_1,
        spacingBefore: 60,
        spacingAfter: 60,
      },
    ),
  );

  // Subtitle (optional)
  if (scene.subtitle && scene.subtitle.trim()) {
    children.push(
      rtlPara(
        [rtlText(scene.subtitle, { italic: true, size: 26, color: GOLD })],
        { spacingBefore: 60, spacingAfter: 120 },
      ),
    );
  }

  // Divider
  children.push(
    new Paragraph({
      bidirectional: true,
      spacing: { before: 120, after: 240 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD_LIGHT, space: 1 },
      },
      children: [new TextRun({ text: "", size: 2 })],
    }),
  );

  // Body paragraphs
  scene.body.forEach((p) => children.push(bodyPara(p)));

  // Measurements
  if (scene.measurements && scene.measurements.length > 0) {
    scene.measurements.forEach((m, i) => {
      children.push(
        rtlPara(
          [rtlText(m, { size: 20, color: MUTED })],
          {
            spacingBefore: i === 0 ? 240 : 60,
            spacingAfter: i === scene.measurements!.length - 1 ? 240 : 60,
            indent: { right: 360 },
            border: {
              right: {
                style: BorderStyle.SINGLE,
                size: 18,
                color: GOLD_LIGHT,
                space: 8,
              },
            },
            shading: {
              fill: PARCHMENT,
              type: ShadingType.CLEAR,
              color: "auto",
            },
          },
        ),
      );
    });
  }

  // Quote
  if (scene.quote) {
    children.push(
      rtlPara(
        [rtlText(scene.quote, { italic: true, size: 24, color: GOLD })],
        {
          indent: { left: 720, right: 720 },
          spacingBefore: 240,
          spacingAfter: 60,
          border: {
            top: { style: BorderStyle.SINGLE, size: 4, color: GOLD_LIGHT, space: 8 },
            bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD_LIGHT, space: 8 },
          },
        },
      ),
    );
    if (scene.quoteCite) {
      children.push(
        rtlPara(
          [rtlText(`— ${scene.quoteCite}`, { size: 18, color: MUTED })],
          {
            indent: { left: 720, right: 720 },
            spacingBefore: 60,
            spacingAfter: 240,
          },
        ),
      );
    }
  }
});

// Sources
children.push(pageBreak());
children.push(sectionTitle(storyContentHE.sources.title));
children.push(
  centered(
    [rtlText(storyContentHE.sources.intro, { italic: true, size: 22, color: MUTED })],
    { spacingBefore: 120, spacingAfter: 360 },
  ),
);

storyContentHE.sources.groups.forEach((group) => {
  children.push(subSectionTitle(group.heading));
  group.items.forEach((item) => {
    children.push(
      rtlPara(
        [rtlText(`• ${item}`, { size: 20, color: DARK })],
        { spacingBefore: 40, spacingAfter: 40, indent: { right: 360 } },
      ),
    );
  });
});

children.push(
  centered(
    [rtlText(storyContentHE.sources.total, { italic: true, size: 20, color: MUTED })],
    { spacingBefore: 480, spacingAfter: 240 },
  ),
);

// Closing
children.push(pageBreak());
children.push(
  centered([new TextRun({ text: "✦", size: 32, color: GOLD_LIGHT })], {
    spacingBefore: 2400,
    spacingAfter: 120,
  }),
);
children.push(
  centered(
    [rtlText(storyContentHE.closing, { italic: true, size: 24, color: DARK })],
    { spacingBefore: 240, spacingAfter: 240 },
  ),
);
children.push(
  centered(
    [rtlText(storyContentHE.closingHebrew, { bold: true, size: 36, color: GOLD })],
    { spacingBefore: 240, spacingAfter: 120 },
  ),
);
children.push(
  centered(
    [rtlText(storyContentHE.closingTranslation, { italic: true, size: 22, color: MUTED })],
    { spacingBefore: 120, spacingAfter: 240 },
  ),
);

// ══════════════════════════════════════════════════════════════════════════════
// PART 3 — CONTACT
// ══════════════════════════════════════════════════════════════════════════════

children.push(pageBreak());
children.push(sectionTitle(he.contact.title));
children.push(sectionDivider());
children.push(bodyPara(he.contact.subtitle, { italic: true, color: MUTED }));

children.push(subSectionTitle("שדות הטופס"));
[
  { label: he.contact.name, placeholder: he.contact.namePlaceholder },
  { label: he.contact.email, placeholder: he.contact.emailPlaceholder },
  { label: he.contact.message, placeholder: he.contact.messagePlaceholder },
].forEach((field) => {
  children.push(
    rtlPara(
      [
        rtlText(`${field.label}: `, { bold: true, size: 22, color: DARK }),
        rtlText(field.placeholder, { italic: true, size: 20, color: MUTED }),
      ],
      { spacingBefore: 120, spacingAfter: 120, indent: { right: 360 } },
    ),
  );
});

children.push(
  rtlPara(
    [rtlText(`כפתור: ${he.contact.send}`, { bold: true, size: 22, color: GOLD })],
    { spacingBefore: 240, spacingAfter: 120, indent: { right: 360 } },
  ),
);

children.push(bodyPara(he.contact.privacy, { italic: true, color: MUTED }));

children.push(subSectionTitle("הודעת הצלחה"));
children.push(
  rtlPara([rtlText(he.contact.successTitle, { bold: true, size: 26, color: DARK })], {
    spacingBefore: 120,
    spacingAfter: 120,
  }),
);
children.push(bodyPara(he.contact.successText));

// ══════════════════════════════════════════════════════════════════════════════
// PART 4 — IMPRESSUM (Legal Notice)
// ══════════════════════════════════════════════════════════════════════════════

children.push(pageBreak());
children.push(sectionTitle(he.impressum.title));
children.push(sectionDivider());

// Company info block
children.push(subSectionTitle("פרטי החברה"));
children.push(
  rtlPara(
    [rtlText(he.impressum.companyLabel, { size: 22, color: DARK })],
    { spacingBefore: 120, spacingAfter: 60, indent: { right: 360 } },
  ),
);
children.push(
  rtlPara(
    [rtlText(he.impressum.company, { bold: true, size: 24, color: DARK })],
    { spacingBefore: 60, spacingAfter: 120, indent: { right: 360 } },
  ),
);

[he.impressum.address, he.impressum.city, he.impressum.country].forEach((line) => {
  children.push(
    rtlPara(
      [rtlText(line, { size: 22, color: DARK })],
      { spacingBefore: 40, spacingAfter: 40, indent: { right: 360 } },
    ),
  );
});

children.push(
  rtlPara(
    [rtlText(`${he.impressum.phone}  ·  ${he.impressum.email}`, { size: 22, color: DARK })],
    { spacingBefore: 180, spacingAfter: 60, indent: { right: 360 } },
  ),
);
children.push(
  rtlPara(
    [rtlText(he.impressum.website, { size: 22, color: DARK })],
    { spacingBefore: 40, spacingAfter: 120, indent: { right: 360 } },
  ),
);

// Liability
children.push(subSectionTitle(he.impressum.liability.title));
children.push(bodyPara(he.impressum.liability.text));

// Copyright
children.push(subSectionTitle(he.impressum.copyright.title));
children.push(bodyPara(he.impressum.copyright.text));

// Email Communication
children.push(subSectionTitle(he.impressum.email_comm.title));
children.push(bodyPara(he.impressum.email_comm.text));

// ══════════════════════════════════════════════════════════════════════════════
// PART 5 — PRIVACY POLICY
// ══════════════════════════════════════════════════════════════════════════════

children.push(pageBreak());
children.push(sectionTitle(privacy.title));
children.push(sectionDivider());

// Section 1
children.push(subSectionTitle(privacy.s1_title));
children.push(
  rtlPara([rtlText(privacy.s1_general_title, { bold: true, size: 24, color: DARK })], {
    spacingBefore: 240,
    spacingAfter: 60,
  }),
);
children.push(bodyPara(privacy.s1_general_text));

children.push(
  rtlPara([rtlText(privacy.s1_data_label, { bold: true, size: 22, color: GOLD })], {
    spacingBefore: 240,
    spacingAfter: 120,
  }),
);

[
  { t: privacy.s1_who_title, p: privacy.s1_who_text },
  { t: privacy.s1_how_title, p: privacy.s1_how_text },
  { t: privacy.s1_purpose_title, p: privacy.s1_purpose_text },
].forEach((item) => {
  children.push(
    rtlPara([rtlText(item.t, { bold: true, size: 22, color: DARK })], {
      spacingBefore: 240,
      spacingAfter: 60,
    }),
  );
  children.push(bodyPara(item.p));
});

children.push(
  rtlPara([rtlText(privacy.s1_rights_title, { bold: true, size: 22, color: DARK })], {
    spacingBefore: 240,
    spacingAfter: 60,
  }),
);
children.push(bodyPara(privacy.s1_rights_text1));
children.push(bodyPara(privacy.s1_rights_text2));

// Section 2
children.push(subSectionTitle(privacy.s2_title));

children.push(
  rtlPara([rtlText(privacy.s2_privacy_title, { bold: true, size: 24, color: DARK })], {
    spacingBefore: 240,
    spacingAfter: 60,
  }),
);
children.push(bodyPara(privacy.s2_privacy_text1));
children.push(bodyPara(privacy.s2_privacy_text2));
children.push(bodyPara(privacy.s2_privacy_text3));

children.push(
  rtlPara(
    [rtlText(privacy.s2_responsible_title, { bold: true, size: 24, color: DARK })],
    { spacingBefore: 240, spacingAfter: 60 },
  ),
);
children.push(bodyPara(privacy.s2_responsible_intro));
[
  "Becker Innovation",
  "Mutschellenstrasse 163",
  "8038 Zürich",
  privacy.s2_responsible_country,
  privacy.s2_responsible_phone,
  privacy.s2_responsible_email,
].forEach((line) => {
  children.push(
    rtlPara([rtlText(line, { size: 22, color: DARK })], {
      spacingBefore: 40,
      spacingAfter: 40,
      indent: { right: 360 },
      border: {
        right: { style: BorderStyle.SINGLE, size: 18, color: GOLD_LIGHT, space: 8 },
      },
    }),
  );
});
children.push(bodyPara(privacy.s2_responsible_note));

[
  { t: privacy.s2_revocation_title, p: privacy.s2_revocation_text },
  { t: privacy.s2_objection_title, p1: privacy.s2_objection_text1, p2: privacy.s2_objection_text2 },
  { t: privacy.s2_complaint_title, p: privacy.s2_complaint_text },
  { t: privacy.s2_portability_title, p: privacy.s2_portability_text },
  { t: privacy.s2_ssl_title, p1: privacy.s2_ssl_text1, p2: privacy.s2_ssl_text2 },
  { t: privacy.s2_access_title, p: privacy.s2_access_text },
].forEach((item) => {
  children.push(
    rtlPara([rtlText(item.t, { bold: true, size: 22, color: DARK })], {
      spacingBefore: 240,
      spacingAfter: 60,
    }),
  );
  if (item.p) children.push(bodyPara(item.p));
  if ("p1" in item && item.p1) children.push(bodyPara(item.p1));
  if ("p2" in item && item.p2) children.push(bodyPara(item.p2));
});

// Restriction of processing
children.push(
  rtlPara(
    [rtlText(privacy.s2_restriction_title, { bold: true, size: 22, color: DARK })],
    { spacingBefore: 240, spacingAfter: 60 },
  ),
);
children.push(bodyPara(privacy.s2_restriction_intro));
[
  privacy.s2_restriction_li1,
  privacy.s2_restriction_li2,
  privacy.s2_restriction_li3,
  privacy.s2_restriction_li4,
].forEach((item) => {
  children.push(
    rtlPara([rtlText(`• ${item}`, { size: 20, color: DARK })], {
      spacingBefore: 60,
      spacingAfter: 60,
      indent: { right: 360 },
    }),
  );
});
children.push(bodyPara(privacy.s2_restriction_closing));

// Section 3
children.push(subSectionTitle(privacy.s3_title));

children.push(
  rtlPara([rtlText(privacy.s3_cookies_title, { bold: true, size: 24, color: DARK })], {
    spacingBefore: 240,
    spacingAfter: 60,
  }),
);
children.push(bodyPara(privacy.s3_cookies_text1));
children.push(bodyPara(privacy.s3_cookies_text2));
children.push(bodyPara(privacy.s3_cookies_text3));
children.push(bodyPara(privacy.s3_cookies_text4));

children.push(
  rtlPara([rtlText(privacy.s3_logs_title, { bold: true, size: 24, color: DARK })], {
    spacingBefore: 240,
    spacingAfter: 60,
  }),
);
children.push(bodyPara(privacy.s3_logs_intro));
privacy.s3_logs_items.forEach((item: string) => {
  children.push(
    rtlPara([rtlText(`• ${item}`, { size: 20, color: DARK })], {
      spacingBefore: 40,
      spacingAfter: 40,
      indent: { right: 360 },
    }),
  );
});
children.push(bodyPara(privacy.s3_logs_closing));

children.push(
  rtlPara([rtlText(privacy.s3_contact_title, { bold: true, size: 24, color: DARK })], {
    spacingBefore: 240,
    spacingAfter: 60,
  }),
);
children.push(bodyPara(privacy.s3_contact_text1));
children.push(bodyPara(privacy.s3_contact_text2));
children.push(bodyPara(privacy.s3_contact_text3));

// ══════════════════════════════════════════════════════════════════════════════
// DOCUMENT
// ══════════════════════════════════════════════════════════════════════════════

const doc = new Document({
  creator: "Becker Innovation",
  title: "Salomon Tempel — Hebrew (Complete)",
  description: "Solomon's Temple — Hebrew complete website content",
  styles: {
    default: {
      document: {
        run: { font: HEBREW_FONT, size: 22 },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 40, bold: true, font: HEBREW_FONT, color: DARK },
        paragraph: { spacing: { before: 360, after: 240 }, outlineLevel: 0 },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: HEBREW_FONT, color: GOLD },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "בית המקדש של שלמה  ·  Becker Innovation  ·  ",
                  size: 18,
                  font: HEBREW_FONT,
                  color: GOLD,
                }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  size: 18,
                  font: HEBREW_FONT,
                  color: GOLD,
                }),
              ],
            }),
          ],
        }),
      },
      children,
    },
  ],
});

const outputPath = "public/Salomon_Tempel_HE.docx";

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`✓ Generated ${outputPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
});
