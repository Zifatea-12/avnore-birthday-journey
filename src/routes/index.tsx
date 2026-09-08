import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Flower2, Shield } from "lucide-react";

import altarImage from "@/assets/birthday-altar.jpg";
import envelopeImage from "@/assets/avnore-envelope.png";
import botanicalImage from "@/assets/botanical-sprig.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avnore Birthday Journey" },
      { name: "description", content: "A special birthday journey for Avnore" },
      { property: "og:title", content: "A Little Birthday Journey for Avnore" },
      {
        property: "og:description",
        content: "An intimate, interactive birthday archive made for Avnore Daryush.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Scene = "opening" | "archive" | "birthday" | "envelope" | "letter" | "ending";

const archiveEntries = [
  {
    id: "garden",
    number: "01",
    title: "The Garden",
    caption: "Botanical records",
    quote: "For the little things that made staying feel easy.",
    content: `As a Daryzar, I love the way you entertain people in your own way, with your own personality. You don't simply put on a show—you engage with us. You talk to us, ask questions, laugh with us, and read the little comments we leave behind.

You make every stream feel less like we're simply watching someone on a screen, and more like we're actually sharing the same little space for a while.

Maybe you don't care too much about how many people are watching or following. You seem more focused on making the people who are there feel included.

And as a Daryzar, I want to thank you for that. Thank you for making this a place where I feel comfortable staying.`,
    Icon: Flower2,
  },
  {
    id: "armory",
    number: "02",
    title: "The Armory",
    caption: "Notes on strength",
    quote: "A little reminder that even the strongest armor is still worn by a person underneath.",
    content: `I'm not here to speak as if I know you completely. I don't know the person behind "Avnore" beyond what you've chosen to show us.

But as a Daryzar, there's one thing I'd like to remind you of: you don't have to carry everything all the time.

You can't force everything to go the way you want it to. And even the strongest person can have moments when their armor becomes too heavy to wear.

So please, take good care of yourself—not only physically, but mentally and emotionally, too.

You're always reminding us to take care of ourselves. You're always asking if we've eaten, rested, or gotten home safely.

So this time, let me return the reminder to you.

Please take care of yourself, too.`,
    Icon: Shield,
  },
  {
    id: "archive",
    number: "03",
    title: "The Archive",
    caption: "Collected stories",
    quote: "For the stories, streams, jokes, and conversations that stayed.",
    content: `There are things I remember clearly.

There are things I've already forgotten.

And there are things I can't quite put into words.

But somehow, they stayed.

Some streams blur together after a while. I may not remember every joke, every conversation, or every little moment anymore.

But I remember that I laughed.

I remember that there were ordinary days when your stream was simply there in the background—and somehow, that made the day feel a little less ordinary.

Maybe you don't know how many people quietly find comfort in the little world you've built here.

But I hope you know that the things you create can leave traces, even in places you'll never see.`,
    Icon: BookOpen,
  },
] as const;

const letterPages = [
  <>
    <p>
      <em>Dear Avnore,</em>
    </p>
    <p>
      <em>Happy birthday! ♡</em>
    </p>
    <p>
      I know I haven't been following you for that long, I know there are people who have been
      following your journey much longer than I have and I probably haven't been present in every
      stream either. Sometimes university decides to remind me that apparently deadlines are a real
      thing.
    </p>
    <p>
      But somehow, even in the relatively short time I've spent watching your streams, you've
      managed to leave little pieces of joy in my ordinary days.
    </p>
    <p>
      There is something comforting about being able to sit down, listen to someone talk, laugh at
      something silly, and for a little while forget about everything else that needs to be done.
    </p>
  </>,
  <>
    <p>So, on your birthday, I wanted to give something back.</p>
    <p>Not something particularly grand.</p>
    <p>
      Just a small place on the internet, made with a little bit of time, a little bit of code, and
      a lot of sincerity.
    </p>
    <p>
      <em>I hope...</em>
    </p>
    <p>
      I hope you get to meet many more people who enjoy your stories, your humor, and all the little
      things that make your streams yours.
    </p>
    <p>
      <em>I wish...</em>
    </p>
    <p>
      I wish that this next chapter brings you more reasons to laugh, more things to be proud of,
      and perhaps a few dreams that finally decide to come true.
    </p>
  </>,
  <>
    <p>And thank you.</p>
    <p>Thank you for creating a space where people can come and stay for a while.</p>
    <p>
      You might never know exactly who is watching from the other side of the screen, or what kind
      of day they were having before they clicked on your stream.
    </p>
    <p>
      But sometimes, simply being there is already enough to make someone's day a little lighter.
    </p>
    <p>
      <strong>So here's to another year of Avnore Daryush.</strong>
    </p>
    <p>
      May your path take you to places you've never imagined, may your stories reach people you
      haven't met yet, and may there always be something waiting at the end of the road worth
      looking forward to.
    </p>
    <p>
      <strong>Happy birthday, Avnore.</strong>
      <br />
      Thank you for being part of my little corner of the internet.
    </p>
    <p className="letter-signature">— Rhea S. ♡</p>
  </>,
];

function Index() {
  const [scene, setScene] = useState<Scene>("opening");
  const [visited, setVisited] = useState<string[]>([]);
  const [activeEntry, setActiveEntry] = useState<(typeof archiveEntries)[number] | null>(null);
  const [letterPage, setLetterPage] = useState(0);

  const openEntry = (entry: (typeof archiveEntries)[number]) => {
    setActiveEntry(entry);
    setVisited((current) => (current.includes(entry.id) ? current : [...current, entry.id]));
  };

  const openEnvelope = () => {
    // Sound effect (SFX) robek segel amplop
    const AudioContextClass = window.AudioContext ?? window.webkitAudioContext;
    if (AudioContextClass) {
      const context = new AudioContextClass();
      const source = context.createBufferSource();
      const buffer = context.createBuffer(1, context.sampleRate * 0.12, context.sampleRate);
      const channel = buffer.getChannelData(0);
      for (let index = 0; index < channel.length; index += 1)
        channel[index] = (Math.random() * 2 - 1) * (1 - index / channel.length);
      source.buffer = buffer;
      source.connect(context.destination);
      source.start();
    }
    setScene("letter");
  };

  return (
    <main className={`journey scene-${scene}`}>
      <div className="grain" aria-hidden="true" />

      {scene === "opening" && (
        <section className="scene scene-dark opening-scene">
          <div className="corner corner-tl" />
          <div className="corner corner-br" />
          <img className="opening-botanical botanical-left" src={botanicalImage} alt="" />
          <div className="scene-content opening-content">
            <p className="meta reveal-one">ARCHIVE / 001</p>
            <div className="crystal reveal-one" aria-hidden="true">
              <span />
            </div>
            <h1 className="display-title reveal-two">An Unopened Page</h1>
            <p className="dedication reveal-three">For Avnore Daryush</p>
            <div className="ornament reveal-three">
              <span />◇<span />
            </div>
            <p className="opening-quote reveal-four">
              “Some words are better discovered
              <br />
              than simply delivered.”
            </p>
            <Button
              variant="archivalDark"
              size="lg"
              className="reveal-five"
              onClick={() => setScene("archive")}
            >
              Open the page
            </Button>
          </div>
        </section>
      )}

      {scene === "archive" && (
        <section className="scene paper-scene archive-scene">
          <img
            className="archive-botanical"
            src={botanicalImage}
            alt="Pressed botanical illustration"
            width={768}
            height={1024}
          />
          <header className="archive-header">
            <p className="meta">ARCHIVE / 002</p>
            <p className="wordmark">
              AVNORE <em>DARYUSH</em>
            </p>
          </header>
          <div className="archive-intro">
            <p className="meta text-primary">THE GREEN ARCHIVE</p>
            <h2>A small journey awaits.</h2>
            <p>Where would you like to begin?</p>
          </div>
          <div className="archive-grid">
            {archiveEntries.map((entry) => (
              <button
                className={`archive-card ${visited.includes(entry.id) ? "is-visited" : ""}`}
                key={entry.id}
                type="button"
                onClick={() => openEntry(entry)}
              >
                <span className="card-number">{entry.number}</span>
                <entry.Icon aria-hidden="true" />
                <span className="card-title">{entry.title}</span>
                <span className="card-caption">{entry.caption}</span>
                <span className="card-mark">◇</span>
              </button>
            ))}
          </div>
          <div className="archive-progress">
            <span>{visited.length} / 3 records discovered</span>
            <div>
              {archiveEntries.map((entry) => (
                <i key={entry.id} className={visited.includes(entry.id) ? "complete" : ""} />
              ))}
            </div>
          </div>
          {visited.length === 3 && !activeEntry && (
            <Button variant="archival" size="lg" onClick={() => setScene("birthday")}>
              Continue the journey
            </Button>
          )}
          {activeEntry && (
            <div
              className="entry-overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="entry-title"
              onClick={() => setActiveEntry(null)}
            >
              <div className="entry-paper" onClick={(event) => event.stopPropagation()}>
                <p className="meta">RECORD / {activeEntry.number}</p>
                <activeEntry.Icon aria-hidden="true" />
                <h3 id="entry-title">{activeEntry.title}</h3>
                <div className="ornament">
                  <span />◇<span />
                </div>
                <blockquote>“{activeEntry.quote}”</blockquote>
                <div className="entry-content">
                  {activeEntry.content.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <Button variant="archival" onClick={() => setActiveEntry(null)}>
                  Return to archive
                </Button>
              </div>
            </div>
          )}
        </section>
      )}

      {scene === "birthday" && (
        <section className="scene scene-dark birthday-scene">
          <img
            src={altarImage}
            alt="A candlelit birthday altar with emerald crystal and botanical ornaments"
            width={1280}
            height={960}
          />
          <div className="birthday-shade" />
          <div className="scene-content birthday-content">
            <p className="meta">THE BIRTHDAY ROOM / 003</p>
            <h2>
              One More Year.
              <br />
              <em>One More Chapter.</em>
            </h2>
            <div className="ornament">
              <span />✦<span />
            </div>
            <p>Happy Birthday, Avnore Daryush</p>
            <Button variant="archivalDark" size="lg" onClick={() => setScene("envelope")}>
              There is one last thing...
            </Button>
          </div>
        </section>
      )}

      {scene === "envelope" && (
        <section className="scene paper-scene envelope-scene">
          <p className="meta">A LETTER / 004</p>
          <h2>There is one last thing...</h2>
          <button
            className="envelope-button"
            type="button"
            onClick={openEnvelope}
            aria-label="Open the letter"
          >
            <img
              src={envelopeImage}
              alt="Antique ivory envelope sealed with green wax"
              width={1024}
              height={768}
            />
            <span className="envelope-address">
              <b>To:</b> Avnore Daryush
              <br />
              <b>From:</b> Rhea Satvika
            </span>
          </button>
          <p className="meta envelope-instruction">BREAK THE SEAL TO OPEN</p>
        </section>
      )}

      {scene === "letter" && (
        <section className="scene letter-desk">
          <article className="letter-paper">
            <p className="meta">PAGE {String(letterPage + 1).padStart(2, "0")} / 03</p>
            <div className="letter-copy">{letterPages[letterPage]}</div>
            <footer className="letter-nav">
              {letterPage > 0 ? (
                <Button variant="archival" onClick={() => setLetterPage((page) => page - 1)}>
                  Previous page
                </Button>
              ) : (
                <span />
              )}
              {letterPage < letterPages.length - 1 ? (
                <Button variant="archival" onClick={() => setLetterPage((page) => page + 1)}>
                  Next page
                </Button>
              ) : (
                <Button variant="archival" onClick={() => setScene("ending")}>
                  Close letter
                </Button>
              )}
            </footer>
          </article>
        </section>
      )}

      {scene === "ending" && (
        <section className="scene scene-dark ending-scene">
          <img src={botanicalImage} className="ending-botanical" alt="" />
          <div className="scene-content">
            <p className="ending-line ending-delay-one">And that is all I wanted to say.</p>
            <p className="ending-line ending-delay-two">
              <em>Until the next stream.</em>
            </p>
            <div className="crystal ending-delay-two" aria-hidden="true">
              <span />
            </div>
            <h2 className="ending-delay-three">Happy Birthday, Avnore.</h2>
            <p className="meta ending-delay-three">MADE WITH CODE &amp; SINCERITY BY RHEA.</p>
            <p className="fin ending-delay-three">FIN.</p>
          </div>
        </section>
      )}
    </main>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}