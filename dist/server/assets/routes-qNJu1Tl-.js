import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { BookOpen, Flower2, Shield, Volume2, VolumeX } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			archival: "rounded-none border border-gold/70 bg-transparent px-7 font-ui text-[11px] uppercase tracking-[0.16em] text-foreground shadow-none transition-all duration-500 hover:border-gold hover:bg-primary hover:text-primary-foreground hover:shadow-emerald active:scale-[0.98]",
			archivalDark: "rounded-none border border-gold/70 bg-transparent px-7 font-ui text-[11px] uppercase tracking-[0.16em] text-dark-foreground shadow-none transition-all duration-500 hover:border-gold hover:bg-primary hover:text-primary-foreground hover:shadow-emerald active:scale-[0.98]",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var archiveEntries = [
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
		Icon: Flower2
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
		Icon: Shield
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
		Icon: BookOpen
	}
];
var letterPages = [
	/* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "Dear Avnore," }) }),
		/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "Happy birthday! ♡" }) }),
		/* @__PURE__ */ jsx("p", { children: "I know I haven't been following you for that long, I know there are people who have been following your journey much longer than I have and I probably haven't been present in every stream either. Sometimes university decides to remind me that apparently deadlines are a real thing." }),
		/* @__PURE__ */ jsx("p", { children: "But somehow, even in the relatively short time I've spent watching your streams, you've managed to leave little pieces of joy in my ordinary days." }),
		/* @__PURE__ */ jsx("p", { children: "There is something comforting about being able to sit down, listen to someone talk, laugh at something silly, and for a little while forget about everything else that needs to be done." })
	] }),
	/* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("p", { children: "So, on your birthday, I wanted to give something back." }),
		/* @__PURE__ */ jsx("p", { children: "Not something particularly grand." }),
		/* @__PURE__ */ jsx("p", { children: "Just a small place on the internet, made with a little bit of time, a little bit of code, and a lot of sincerity." }),
		/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "I hope..." }) }),
		/* @__PURE__ */ jsx("p", { children: "I hope you get to meet many more people who enjoy your stories, your humor, and all the little things that make your streams yours." }),
		/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "I wish..." }) }),
		/* @__PURE__ */ jsx("p", { children: "I wish that this next chapter brings you more reasons to laugh, more things to be proud of, and perhaps a few dreams that finally decide to come true." })
	] }),
	/* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("p", { children: "And thank you." }),
		/* @__PURE__ */ jsx("p", { children: "Thank you for creating a space where people can come and stay for a while." }),
		/* @__PURE__ */ jsx("p", { children: "You might never know exactly who is watching from the other side of the screen, or what kind of day they were having before they clicked on your stream." }),
		/* @__PURE__ */ jsx("p", { children: "But sometimes, simply being there is already enough to make someone's day a little lighter." }),
		/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "So here's to another year of Avnore Daryush." }) }),
		/* @__PURE__ */ jsx("p", { children: "May your path take you to places you've never imagined, may your stories reach people you haven't met yet, and may there always be something waiting at the end of the road worth looking forward to." }),
		/* @__PURE__ */ jsxs("p", { children: [
			/* @__PURE__ */ jsx("strong", { children: "Happy birthday, Avnore." }),
			/* @__PURE__ */ jsx("br", {}),
			"Thank you for being part of my little corner of the internet."
		] }),
		/* @__PURE__ */ jsx("p", {
			className: "letter-signature",
			children: "— Rhea S. ♡"
		})
	] })
];
function Index() {
	const [scene, setScene] = useState("opening");
	const [visited, setVisited] = useState([]);
	const [activeEntry, setActiveEntry] = useState(null);
	const [letterPage, setLetterPage] = useState(0);
	const [muted, setMuted] = useState(true);
	const audioRef = useRef(null);
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;
		audio.muted = muted;
		if (muted) {
			audio.pause();
			return;
		}
		audio.play().catch(() => {
			setMuted(true);
		});
	}, [muted]);
	const toggleSound = () => {
		setMuted((value) => !value);
	};
	const openEntry = (entry) => {
		setActiveEntry(entry);
		setVisited((current) => current.includes(entry.id) ? current : [...current, entry.id]);
	};
	const openEnvelope = () => {
		if (!muted) {
			const AudioContextClass = window.AudioContext ?? window.webkitAudioContext;
			if (AudioContextClass) {
				const context = new AudioContextClass();
				const source = context.createBufferSource();
				const buffer = context.createBuffer(1, context.sampleRate * .12, context.sampleRate);
				const channel = buffer.getChannelData(0);
				for (let index = 0; index < channel.length; index += 1) channel[index] = (Math.random() * 2 - 1) * (1 - index / channel.length);
				source.buffer = buffer;
				source.connect(context.destination);
				source.start();
			}
		}
		setScene("letter");
	};
	return /* @__PURE__ */ jsxs("main", {
		className: `journey scene-${scene}`,
		children: [
			/* @__PURE__ */ jsx("audio", {
				ref: audioRef,
				loop: true,
				preload: "auto",
				src: "/Audio/bg-music.mp3"
			}),
			/* @__PURE__ */ jsx("button", {
				className: "sound-toggle",
				type: "button",
				onClick: toggleSound,
				"aria-label": muted ? "Enable sound" : "Mute sound",
				title: muted ? "Enable sound" : "Mute sound",
				children: muted ? /* @__PURE__ */ jsx(VolumeX, {}) : /* @__PURE__ */ jsx(Volume2, {})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grain",
				"aria-hidden": "true"
			}),
			scene === "opening" && /* @__PURE__ */ jsxs("section", {
				className: "scene scene-dark opening-scene",
				children: [
					/* @__PURE__ */ jsx("div", { className: "corner corner-tl" }),
					/* @__PURE__ */ jsx("div", { className: "corner corner-br" }),
					/* @__PURE__ */ jsx("img", {
						className: "opening-botanical botanical-left",
						src: "/assets/botanical-sprig-8kGmff6Y.png",
						alt: ""
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "scene-content opening-content",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "meta reveal-one",
								children: "ARCHIVE / 001"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "crystal reveal-one",
								"aria-hidden": "true",
								children: /* @__PURE__ */ jsx("span", {})
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "display-title reveal-two",
								children: "An Unopened Page"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "dedication reveal-three",
								children: "For Avnore Daryush"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ornament reveal-three",
								children: [
									/* @__PURE__ */ jsx("span", {}),
									"◇",
									/* @__PURE__ */ jsx("span", {})
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "opening-quote reveal-four",
								children: [
									"“Some words are better discovered",
									/* @__PURE__ */ jsx("br", {}),
									"than simply delivered.”"
								]
							}),
							/* @__PURE__ */ jsx(Button, {
								variant: "archivalDark",
								size: "lg",
								className: "reveal-five",
								onClick: () => setScene("archive"),
								children: "Open the page"
							})
						]
					})
				]
			}),
			scene === "archive" && /* @__PURE__ */ jsxs("section", {
				className: "scene paper-scene archive-scene",
				children: [
					/* @__PURE__ */ jsx("img", {
						className: "archive-botanical",
						src: "/assets/botanical-sprig-8kGmff6Y.png",
						alt: "Pressed botanical illustration",
						width: 768,
						height: 1024
					}),
					/* @__PURE__ */ jsxs("header", {
						className: "archive-header",
						children: [/* @__PURE__ */ jsx("p", {
							className: "meta",
							children: "ARCHIVE / 002"
						}), /* @__PURE__ */ jsxs("p", {
							className: "wordmark",
							children: ["AVNORE ", /* @__PURE__ */ jsx("em", { children: "DARYUSH" })]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "archive-intro",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "meta text-primary",
								children: "THE GREEN ARCHIVE"
							}),
							/* @__PURE__ */ jsx("h2", { children: "A small journey awaits." }),
							/* @__PURE__ */ jsx("p", { children: "Where would you like to begin?" })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "archive-grid",
						children: archiveEntries.map((entry) => /* @__PURE__ */ jsxs("button", {
							className: `archive-card ${visited.includes(entry.id) ? "is-visited" : ""}`,
							type: "button",
							onClick: () => openEntry(entry),
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "card-number",
									children: entry.number
								}),
								/* @__PURE__ */ jsx(entry.Icon, { "aria-hidden": "true" }),
								/* @__PURE__ */ jsx("span", {
									className: "card-title",
									children: entry.title
								}),
								/* @__PURE__ */ jsx("span", {
									className: "card-caption",
									children: entry.caption
								}),
								/* @__PURE__ */ jsx("span", {
									className: "card-mark",
									children: "◇"
								})
							]
						}, entry.id))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "archive-progress",
						children: [/* @__PURE__ */ jsxs("span", { children: [visited.length, " / 3 records discovered"] }), /* @__PURE__ */ jsx("div", { children: archiveEntries.map((entry) => /* @__PURE__ */ jsx("i", { className: visited.includes(entry.id) ? "complete" : "" }, entry.id)) })]
					}),
					visited.length === 3 && !activeEntry && /* @__PURE__ */ jsx(Button, {
						variant: "archival",
						size: "lg",
						onClick: () => setScene("birthday"),
						children: "Continue the journey"
					}),
					activeEntry && /* @__PURE__ */ jsx("div", {
						className: "entry-overlay",
						role: "dialog",
						"aria-modal": "true",
						"aria-labelledby": "entry-title",
						onClick: () => setActiveEntry(null),
						children: /* @__PURE__ */ jsxs("div", {
							className: "entry-paper",
							onClick: (event) => event.stopPropagation(),
							children: [
								/* @__PURE__ */ jsxs("p", {
									className: "meta",
									children: ["RECORD / ", activeEntry.number]
								}),
								/* @__PURE__ */ jsx(activeEntry.Icon, { "aria-hidden": "true" }),
								/* @__PURE__ */ jsx("h3", {
									id: "entry-title",
									children: activeEntry.title
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "ornament",
									children: [
										/* @__PURE__ */ jsx("span", {}),
										"◇",
										/* @__PURE__ */ jsx("span", {})
									]
								}),
								/* @__PURE__ */ jsxs("blockquote", { children: [
									"“",
									activeEntry.quote,
									"”"
								] }),
								/* @__PURE__ */ jsx("div", {
									className: "entry-content",
									children: activeEntry.content.split("\n\n").map((paragraph, index) => /* @__PURE__ */ jsx("p", { children: paragraph }, index))
								}),
								/* @__PURE__ */ jsx(Button, {
									variant: "archival",
									onClick: () => setActiveEntry(null),
									children: "Return to archive"
								})
							]
						})
					})
				]
			}),
			scene === "birthday" && /* @__PURE__ */ jsxs("section", {
				className: "scene scene-dark birthday-scene",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: "/assets/birthday-altar-u8leUlhO.jpg",
						alt: "A candlelit birthday altar with emerald crystal and botanical ornaments",
						width: 1280,
						height: 960
					}),
					/* @__PURE__ */ jsx("div", { className: "birthday-shade" }),
					/* @__PURE__ */ jsxs("div", {
						className: "scene-content birthday-content",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "meta",
								children: "THE BIRTHDAY ROOM / 003"
							}),
							/* @__PURE__ */ jsxs("h2", { children: [
								"One More Year.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("em", { children: "One More Chapter." })
							] }),
							/* @__PURE__ */ jsxs("div", {
								className: "ornament",
								children: [
									/* @__PURE__ */ jsx("span", {}),
									"✦",
									/* @__PURE__ */ jsx("span", {})
								]
							}),
							/* @__PURE__ */ jsx("p", { children: "Happy Birthday, Avnore Daryush" }),
							/* @__PURE__ */ jsx(Button, {
								variant: "archivalDark",
								size: "lg",
								onClick: () => setScene("envelope"),
								children: "There is one last thing..."
							})
						]
					})
				]
			}),
			scene === "envelope" && /* @__PURE__ */ jsxs("section", {
				className: "scene paper-scene envelope-scene",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "meta",
						children: "A LETTER / 004"
					}),
					/* @__PURE__ */ jsx("h2", { children: "There is one last thing..." }),
					/* @__PURE__ */ jsxs("button", {
						className: "envelope-button",
						type: "button",
						onClick: openEnvelope,
						"aria-label": "Open the letter",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/assets/avnore-envelope-CsPig8U9.png",
							alt: "Antique ivory envelope sealed with green wax",
							width: 1024,
							height: 768
						}), /* @__PURE__ */ jsxs("span", {
							className: "envelope-address",
							children: [
								/* @__PURE__ */ jsx("b", { children: "To:" }),
								" Avnore Daryush",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("b", { children: "From:" }),
								" Rhea Satvika"
							]
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "meta envelope-instruction",
						children: "BREAK THE SEAL TO OPEN"
					})
				]
			}),
			scene === "letter" && /* @__PURE__ */ jsx("section", {
				className: "scene letter-desk",
				children: /* @__PURE__ */ jsxs("article", {
					className: "letter-paper",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "meta",
							children: [
								"PAGE ",
								String(letterPage + 1).padStart(2, "0"),
								" / 03"
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "letter-copy",
							children: letterPages[letterPage]
						}),
						/* @__PURE__ */ jsxs("footer", {
							className: "letter-nav",
							children: [letterPage > 0 ? /* @__PURE__ */ jsx(Button, {
								variant: "archival",
								onClick: () => setLetterPage((page) => page - 1),
								children: "Previous page"
							}) : /* @__PURE__ */ jsx("span", {}), letterPage < letterPages.length - 1 ? /* @__PURE__ */ jsx(Button, {
								variant: "archival",
								onClick: () => setLetterPage((page) => page + 1),
								children: "Next page"
							}) : /* @__PURE__ */ jsx(Button, {
								variant: "archival",
								onClick: () => setScene("ending"),
								children: "Close letter"
							})]
						})
					]
				})
			}),
			scene === "ending" && /* @__PURE__ */ jsxs("section", {
				className: "scene scene-dark ending-scene",
				children: [/* @__PURE__ */ jsx("img", {
					src: "/assets/botanical-sprig-8kGmff6Y.png",
					className: "ending-botanical",
					alt: ""
				}), /* @__PURE__ */ jsxs("div", {
					className: "scene-content",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "ending-line ending-delay-one",
							children: "And that is all I wanted to say."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "ending-line ending-delay-two",
							children: /* @__PURE__ */ jsx("em", { children: "Until the next stream." })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "crystal ending-delay-two",
							"aria-hidden": "true",
							children: /* @__PURE__ */ jsx("span", {})
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "ending-delay-three",
							children: "Happy Birthday, Avnore."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "meta ending-delay-three",
							children: "MADE WITH CODE & SINCERITY BY RHEA."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "fin ending-delay-three",
							children: "FIN."
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
