const templates = [
  { text: "I {verb} your {adj} {noun}", verbType: "my" },
  { text: "There’s something about your {adj} {noun} that I just {verb}", verbType: "my" },
  { text: "Every time I see your {noun}, I {verb} {adv}", verbType: "my" },
  { text: "I can’t stop thinking about how {adj} your {noun} is", verbType: "my" },
  { text: "You {verb} my heart with your {adj} {noun}", verbType: "her" },
  { text: "Your {noun} always {verb}s me {adv}", verbType: "her" },
  { text: "Your {noun} makes me feel {adj}", verbType: "her" },
  { text: "I {verb} the way your {noun} shines so {adv}", verbType: "my" },
  { text: "No one’s {noun} has ever {verb} me this {adv} before", verbType: "her" },
  { text: "Your {adj} {noun} is the reason I {verb} every day", verbType: "my" }
];

const nouns = [
  // Her Essence & Spirit
  "smile", "eyes", "voice", "energy", "style", "soul", "laugh", "touch", "presence", "kindness",
  "heart", "spirit", "aura", "grace", "warmth", "charm", "gaze", "strength", "light", "beauty",
  "essence", "magic", "glow", "radiance", "spark", "fire", "passion", "depth", "wisdom", "serenity",
  "vibe", "mystery", "elegance", "poise", "dignity", "vulnerability", "courage", "resilience", "hope", "dream",

  // Her Physical Beauty & Presence
  "silhouette", "figure", "curl", "lips", "skin", "hair", "scent", "embrace", "hand",
  "kiss", "grace", "reflection", "image", "form", "profile", "shadow", "curves", "neck", "smirk", "whisper",

  // Her Mind & Intellect
  "mind", "wit", "intellect", "thought", "idea", "perspective", "insight", "creativity", "imagination", "genius",
  "curiosity", "intuition", "humor", "wisdom", "cunning", "brilliance", "perception", "judgment", "cleverness", "talent",

  // Her Heart & Emotional Qualities
  "love", "compassion", "empathy", "tenderness", "care", "affection", "devotion", "loyalty", "faith", "trust",
  "honesty", "purity", "innocence", "gentleness", "sensitivity", "generosity", "selflessness", "warmth", "comfort", "solace",

  // Her Strength & Power
  "power", "will", "determination", "ambition", "drive", "focus", "fortitude", "fearlessness", "confidence", "independence",
  "resolve", "tenacity", "perseverance", "might", "influence", "authority", "command", "leadership", "vigor", "vitality",

];

const myVerbs = [
  "love", "admire", "cherish", "adore", "crave", "need", "treasure", "miss", "dream of",
  "worship", "value", "embrace", "seek", "yearn for", "respect", "honor"
];

const herVerbs = [
  "captivate", "melt", "hypnotize", "move", "enchant", "disarm", "touch", "amaze",
  "light up", "overwhelm", "fascinate", "stir", "dazzle", "inspire", "haunt", "shake", "comfort",
  "seduce", "charm", "calm", "heal", "motivate",
  "empower", "strengthen", "awaken", "ignite", "inflame"
];

const adjs = [
  "beautiful", "warm", "gentle", "radiant", "magnetic", "sweet", "captivating", "glowing", "bright", "soft",
  "charming", "delicate", "graceful", "shining", "elegant", "enchanting", "divine", "precious", "lovely", "pure"
];

const advs = [
  "deeply", "truly", "endlessly", "madly", "completely", "tenderly", "passionately", "always", "eternally", "so much",
  "forever", "constantly", "unconditionally", "faithfully", "infinitely", "genuinely", "wholeheartedly", "steadily", "without end",
  "profoundly", "fiercely", "ardently", "fervently", "devotedly", "utterly", "absolutely", "unwaveringly", "boundlessly",
  "breathlessly", "hopelessly", "irrevocably", "undeniably", "unreservedly", "limitlessly", "intensely", "desperately", "helplessly", "powerlessly",
  "unfailingly", "loyally", "purely", "sacredly", "reverently", "earnestly", "ardently", "zealously", "vehemently", "immeasurably",
  "incandescently", "perpetually", "everlastingly", "to infinity"
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomMessage(): string {
  const t = pick(templates);
  const verb = t.verbType === "my" ? pick(myVerbs) : pick(herVerbs);

  return t.text
    .replace("{verb}", verb)
    .replace("{adj}", pick(adjs))
    .replace("{noun}", pick(nouns))
    .replace("{adv}", pick(advs));
}
