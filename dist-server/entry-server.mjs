import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { Link, MemoryRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/components/ui/Image.tsx
function Image({ src, alt, fill, priority, quality: _quality, className, style, ...props }) {
	return /* @__PURE__ */ jsx("img", {
		src,
		alt,
		className,
		style: fill ? {
			position: "absolute",
			height: "100%",
			width: "100%",
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			objectFit: "cover",
			...style
		} : { ...style },
		loading: priority ? "eager" : "lazy",
		...props
	});
}
//#endregion
//#region src/components/ui/Link.tsx
function Link$1({ href, children, ...props }) {
	const isHash = href.startsWith("#");
	const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
	if (isHash || isExternal) return /* @__PURE__ */ jsx("a", {
		href,
		...props,
		children
	});
	return /* @__PURE__ */ jsx(Link, {
		to: href,
		...props,
		children
	});
}
//#endregion
//#region src/components/layout/Header.tsx
var MEGA_CATEGORIES = [
	{
		title: "Jeoteknik Çözümler",
		color: "#10B981",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "#10B981",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ jsx("path", { d: "M2 22L12 2l10 20" }), /* @__PURE__ */ jsx("path", { d: "M6 16h12" })]
		}),
		services: [
			{
				title: "Yamaç Yüzeyi Temizleme",
				href: "/hizmetler/yamac-yuzeyi-temizleme"
			},
			{
				title: "Şev Örtüleme Sistemleri",
				href: "/hizmetler/sev-ortuleme"
			},
			{
				title: "Kaya Bariyeri Kurulumu",
				href: "/hizmetler/kaya-bariyeri"
			},
			{
				title: "Deflektör Tip Örtüleme",
				href: "/hizmetler/deflektor-tip-ortuleme"
			},
			{
				title: "Moloz Bariyer Sistemleri",
				href: "/hizmetler/moloz-bariyer"
			},
			{
				title: "Gabion Duvar",
				href: "/hizmetler/gabion-duvar"
			},
			{
				title: "Kar ve Çığ Kontrolü",
				href: "/hizmetler/kar-ve-cig-kontrolu"
			}
		]
	},
	{
		title: "Endüstriyel Dağcılık",
		color: "#3E92CC",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "#3E92CC",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ jsx("path", { d: "M12 2L2 22h20L12 2z" }),
				/* @__PURE__ */ jsx("path", { d: "M12 13v4" }),
				/* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "9",
					r: "1"
				})
			]
		}),
		services: [
			{
				title: "Dış Cephe Dekoratif Aydınlatma",
				href: "/hizmetler/dis-cephe-dekoratif-aydinlatma"
			},
			{
				title: "Tersane ve Offshore Hizmetleri",
				href: "/hizmetler/tersane-ve-offshore-hizmetleri"
			},
			{
				title: "İç ve Dış Cephe Temizlik",
				href: "/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri"
			},
			{
				title: "Güvenlik Ağı Kurulumu",
				href: "/hizmetler/guvenlik-agi-kurulumu"
			},
			{
				title: "Yatay & Düşey Yaşam Hattı",
				href: "/hizmetler/yatay-ve-dusey-yasam-hatti"
			},
			{
				title: "Rüzgar Enerji Santralleri",
				href: "/hizmetler/ruzgar-enerji-santralleri"
			},
			{
				title: "Hassas Endüstriyel Alan Koruması",
				href: "/hizmetler/hassas-endustriyel-alan-korumasi"
			},
			{
				title: "Ormanda İple Erişim",
				href: "/hizmetler/ormanda-iple-erisim-hizmetleri"
			}
		]
	},
	{
		title: "Diğer Hizmetler",
		color: "#8B5CF6",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "#8B5CF6",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "10"
			}), /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })]
		}),
		services: [
			{
				title: "Stand-by Rescue Hizmeti",
				href: "/hizmetler/stand-by-rescue-hizmeti"
			},
			{
				title: "Sahne İşleri & Rigging",
				href: "/hizmetler/sahne-isleri-rigging"
			},
			{
				title: "SPRAT Eğitimi",
				href: "/hizmetler/sprat-egitimi"
			},
			{
				title: "IRATA Eğitimi",
				href: "/hizmetler/irata-egitimi"
			}
		]
	}
];
var NAV_LINKS = [
	{
		title: "Anasayfa",
		href: "/"
	},
	{
		title: "Hakkımızda",
		href: "/hakkimizda"
	},
	{
		title: "İletişim",
		href: "/iletisim"
	}
];
function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [megaOpen, setMegaOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeMobileCategory, setActiveMobileCategory] = useState(null);
	const megaRef = useRef(null);
	const megaTimeoutRef = useRef(null);
	const { pathname } = useLocation();
	const toggleMobileCategory = (title) => {
		setActiveMobileCategory(activeMobileCategory === title ? null : title);
	};
	useEffect(() => {
		setMobileMenuOpen(false);
		setServicesOpen(false);
		setMegaOpen(false);
		setActiveMobileCategory(null);
	}, [pathname]);
	useEffect(() => {
		if (mobileMenuOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const handleMegaEnter = () => {
		if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
		setMegaOpen(true);
	};
	const handleMegaLeave = () => {
		megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 200);
	};
	const isActive = (href) => {
		if (href === "/") return pathname === "/";
		return pathname.startsWith(href);
	};
	return /* @__PURE__ */ jsxs("header", {
		className: `header ${scrolled ? "scrolled" : ""}`,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "container",
				children: /* @__PURE__ */ jsxs("nav", {
					className: "nav",
					children: [
						/* @__PURE__ */ jsx(Link$1, {
							href: "/",
							className: "logo",
							children: /* @__PURE__ */ jsx(Image, {
								src: "/logo/logo.png",
								alt: "Kutup Grup",
								width: 125,
								height: 60,
								priority: true
							})
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "nav-menu",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link$1, {
									href: "/",
									className: isActive("/") ? "active" : "",
									children: "Anasayfa"
								}) }),
								/* @__PURE__ */ jsxs("li", {
									ref: megaRef,
									className: "nav-mega-trigger",
									onMouseEnter: handleMegaEnter,
									onMouseLeave: handleMegaLeave,
									children: [/* @__PURE__ */ jsxs("span", {
										className: `nav-mega-label ${isActive("/hizmetler") ? "active" : ""}`,
										children: ["Hizmetlerimiz", /* @__PURE__ */ jsx("svg", {
											width: "12",
											height: "12",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: `mega-chevron ${megaOpen ? "open" : ""}`,
											children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: `mega-menu ${megaOpen ? "active" : ""}`,
										children: /* @__PURE__ */ jsxs("div", {
											className: "mega-inner",
											children: [/* @__PURE__ */ jsx("div", {
												className: "mega-columns",
												children: MEGA_CATEGORIES.map((cat) => /* @__PURE__ */ jsxs("div", {
													className: "mega-column",
													children: [/* @__PURE__ */ jsxs("h4", {
														className: "mega-category-title",
														children: [/* @__PURE__ */ jsx("span", {
															className: "mega-icon-wrapper",
															style: {
																backgroundColor: `${cat.color}15`,
																color: cat.color
															},
															children: cat.icon
														}), /* @__PURE__ */ jsx("span", {
															className: "mega-title-text",
															style: { color: cat.color },
															children: cat.title
														})]
													}), /* @__PURE__ */ jsx("ul", {
														className: "mega-list",
														children: cat.services.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
															href: s.href,
															className: `mega-link ${isActive(s.href) ? "mega-link-active" : ""}`,
															children: [/* @__PURE__ */ jsxs("svg", {
																width: "14",
																height: "14",
																viewBox: "0 0 24 24",
																fill: "none",
																stroke: cat.color,
																strokeWidth: "2.5",
																strokeLinecap: "round",
																strokeLinejoin: "round",
																className: "mega-arrow",
																children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
															}), /* @__PURE__ */ jsx("span", {
																className: "mega-link-text",
																children: s.title
															})]
														}) }, s.href))
													})]
												}, cat.title))
											}), /* @__PURE__ */ jsx("div", {
												className: "mega-cta-panel",
												children: /* @__PURE__ */ jsxs("div", {
													className: "mega-cta-content",
													children: [/* @__PURE__ */ jsxs("div", {
														className: "mega-cta-text",
														children: [
															/* @__PURE__ */ jsx("p", {
																className: "mega-cta-eyebrow",
																children: "Tüm Hizmetler"
															}),
															/* @__PURE__ */ jsx("h5", {
																className: "mega-cta-title",
																children: "20+ Hizmet Alanında Uzman Çözümler"
															}),
															/* @__PURE__ */ jsx("p", {
																className: "mega-cta-desc",
																children: "Endüstriyel dağcılık ve jeoteknik alanında profesyonel çözümler."
															})
														]
													}), /* @__PURE__ */ jsxs(Link$1, {
														href: "/hizmetler",
														className: "mega-cta-btn",
														children: ["Tüm Hizmetleri Gör", /* @__PURE__ */ jsxs("svg", {
															width: "16",
															height: "16",
															viewBox: "0 0 24 24",
															fill: "none",
															stroke: "currentColor",
															strokeWidth: "2",
															strokeLinecap: "round",
															strokeLinejoin: "round",
															children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
														})]
													})]
												})
											})]
										})
									})]
								}),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link$1, {
									href: "/hakkimizda",
									className: isActive("/hakkimizda") ? "active" : "",
									children: "Hakkımızda"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link$1, {
									href: "/iletisim",
									className: isActive("/iletisim") ? "active" : "",
									children: "İletişim"
								}) })
							]
						}),
						/* @__PURE__ */ jsx(Link$1, {
							href: "/iletisim",
							className: "btn btn-primary nav-cta desktop-only",
							children: "Teklif Alın"
						}),
						/* @__PURE__ */ jsx("button", {
							className: `hamburger ${mobileMenuOpen ? "active" : ""}`,
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							"aria-label": "Menüyü aç/kapat",
							"aria-expanded": mobileMenuOpen,
							children: /* @__PURE__ */ jsxs("div", {
								className: "hamburger-inner",
								children: [
									/* @__PURE__ */ jsx("span", { className: "hamburger-line line-1" }),
									/* @__PURE__ */ jsx("span", { className: "hamburger-line line-2" }),
									/* @__PURE__ */ jsx("span", { className: "hamburger-line line-3" })
								]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: `mobile-overlay ${mobileMenuOpen ? "active" : ""}`,
				onClick: () => setMobileMenuOpen(false)
			}),
			/* @__PURE__ */ jsxs("div", {
				className: `mobile-menu-drawer ${mobileMenuOpen ? "active" : ""}`,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mobile-drawer-header",
						children: [/* @__PURE__ */ jsx(Link$1, {
							href: "/",
							onClick: () => setMobileMenuOpen(false),
							className: "mobile-logo",
							children: /* @__PURE__ */ jsx(Image, {
								src: "/logo/logo.png",
								alt: "Kutup Grup",
								width: 100,
								height: 48,
								style: { filter: "brightness(0) invert(1)" }
							})
						}), /* @__PURE__ */ jsx("button", {
							className: "mobile-close-btn",
							onClick: () => setMobileMenuOpen(false),
							"aria-label": "Menüyü kapat",
							children: /* @__PURE__ */ jsxs("svg", {
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ jsx("line", {
									x1: "18",
									y1: "6",
									x2: "6",
									y2: "18"
								}), /* @__PURE__ */ jsx("line", {
									x1: "6",
									y1: "6",
									x2: "18",
									y2: "18"
								})]
							})
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mobile-drawer-scroll",
						children: /* @__PURE__ */ jsxs("nav", {
							className: "mobile-drawer-nav",
							children: [
								/* @__PURE__ */ jsx(Link$1, {
									href: "/",
									className: `drawer-main-link ${isActive("/") ? "active" : ""}`,
									onClick: () => setMobileMenuOpen(false),
									children: "Anasayfa"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "drawer-accordion-group",
									children: [/* @__PURE__ */ jsxs("button", {
										className: `drawer-main-link drawer-accordion-btn ${servicesOpen ? "open" : ""} ${isActive("/hizmetler") ? "active" : ""}`,
										onClick: () => setServicesOpen(!servicesOpen),
										children: [/* @__PURE__ */ jsx("span", { children: "Hizmetlerimiz" }), /* @__PURE__ */ jsx("svg", {
											width: "20",
											height: "20",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: "drawer-chevron",
											children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: `drawer-accordion-content ${servicesOpen ? "expanded" : ""}`,
										children: [MEGA_CATEGORIES.map((cat) => {
											const isCatOpen = activeMobileCategory === cat.title;
											return /* @__PURE__ */ jsxs("div", {
												className: "drawer-sub-group",
												children: [/* @__PURE__ */ jsxs("button", {
													className: `drawer-sub-btn ${isCatOpen ? "open" : ""}`,
													onClick: () => toggleMobileCategory(cat.title),
													children: [/* @__PURE__ */ jsx("span", {
														style: { color: isCatOpen ? cat.color : "inherit" },
														children: cat.title
													}), /* @__PURE__ */ jsx("svg", {
														width: "16",
														height: "16",
														viewBox: "0 0 24 24",
														fill: "none",
														stroke: "currentColor",
														strokeWidth: "2",
														strokeLinecap: "round",
														strokeLinejoin: "round",
														className: "drawer-sub-chevron",
														children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" })
													})]
												}), /* @__PURE__ */ jsx("div", {
													className: `drawer-sub-links-container ${isCatOpen ? "expanded" : ""}`,
													children: /* @__PURE__ */ jsx("div", {
														className: "drawer-sub-links",
														children: cat.services.map((s) => /* @__PURE__ */ jsx(Link$1, {
															href: s.href,
															className: `drawer-sub-link ${isActive(s.href) ? "active" : ""}`,
															onClick: () => setMobileMenuOpen(false),
															children: s.title
														}, s.href))
													})
												})]
											}, cat.title);
										}), /* @__PURE__ */ jsx(Link$1, {
											href: "/hizmetler",
											className: "drawer-all-services",
											onClick: () => setMobileMenuOpen(false),
											children: "Tüm Hizmetleri Gör ➔"
										})]
									})]
								}),
								NAV_LINKS.slice(1).map((link) => /* @__PURE__ */ jsx(Link$1, {
									href: link.href,
									className: `drawer-main-link ${isActive(link.href) ? "active" : ""}`,
									onClick: () => setMobileMenuOpen(false),
									children: link.title
								}, link.href))
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mobile-drawer-footer",
						children: [/* @__PURE__ */ jsxs(Link$1, {
							href: "/iletisim",
							className: "drawer-cta",
							onClick: () => setMobileMenuOpen(false),
							children: ["Projeye Başlayalım", /* @__PURE__ */ jsxs("svg", {
								width: "20",
								height: "20",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ jsx("line", {
									x1: "5",
									y1: "12",
									x2: "19",
									y2: "12"
								}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "drawer-contact",
							children: [/* @__PURE__ */ jsx("a", {
								href: "mailto:info@kutupgrup.com",
								children: "info@kutupgrup.com"
							}), /* @__PURE__ */ jsx("a", {
								href: "tel:+905335176609",
								children: "+90 (533) 517 66 09"
							})]
						})]
					})
				]
			})
		]
	});
}
var Newsletter_module_default = {
	newsletter: "_newsletter_1voxx_1",
	content: "_content_1voxx_24",
	title: "_title_1voxx_28",
	subtitle: "_subtitle_1voxx_36",
	form: "_form_1voxx_43",
	inputGroup: "_inputGroup_1voxx_49",
	input: "_input_1voxx_49",
	button: "_button_1voxx_82",
	message: "_message_1voxx_106",
	success: "_success_1voxx_111",
	error: "_error_1voxx_115"
};
//#endregion
//#region src/components/features/Newsletter.tsx
function Newsletter() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("idle");
	const [message, setMessage] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("loading");
		try {
			const response = await fetch("/api/newsletter", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email })
			});
			const data = await response.json();
			if (response.ok && data.success) {
				setStatus("success");
				setMessage("Başarıyla abone oldunuz!");
				setEmail("");
				setTimeout(() => {
					setStatus("idle");
					setMessage("");
				}, 5e3);
			} else {
				setStatus("error");
				setMessage(data.message || "Bir hata oluştu. Lütfen tekrar deneyin.");
			}
		} catch {
			setStatus("error");
			setMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: Newsletter_module_default.newsletter,
		children: [/* @__PURE__ */ jsxs("div", {
			className: Newsletter_module_default.content,
			children: [/* @__PURE__ */ jsx("h3", {
				className: Newsletter_module_default.title,
				children: "Bültenimize Abone Olun"
			}), /* @__PURE__ */ jsx("p", {
				className: Newsletter_module_default.subtitle,
				children: "Yeni projeler, güncellemeler ve özel tekliflerden haberdar olun"
			})]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			className: Newsletter_module_default.form,
			children: [/* @__PURE__ */ jsxs("div", {
				className: Newsletter_module_default.inputGroup,
				children: [/* @__PURE__ */ jsx("input", {
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					placeholder: "E-posta adresiniz",
					required: true,
					disabled: status === "loading",
					className: Newsletter_module_default.input
				}), /* @__PURE__ */ jsx("button", {
					type: "submit",
					disabled: status === "loading",
					className: Newsletter_module_default.button,
					children: status === "loading" ? "Gönderiliyor..." : "Abone Ol"
				})]
			}), message && /* @__PURE__ */ jsx("p", {
				className: `${Newsletter_module_default.message} ${status === "success" ? Newsletter_module_default.success : Newsletter_module_default.error}`,
				children: message
			})]
		})]
	});
}
var CookieConsent_module_default = {
	cookieBanner: "_cookieBanner_8qw0y_1",
	slideUp: "_slideUp_8qw0y_1",
	cookieContent: "_cookieContent_8qw0y_27",
	cookieText: "_cookieText_8qw0y_37",
	cookieLink: "_cookieLink_8qw0y_44",
	cookieButtons: "_cookieButtons_8qw0y_54",
	acceptButton: "_acceptButton_8qw0y_59",
	declineButton: "_declineButton_8qw0y_60"
};
//#endregion
//#region src/components/features/CookieConsent.tsx
function CookieConsent() {
	const [showBanner, setShowBanner] = useState(false);
	useEffect(() => {
		if (!localStorage.getItem("cookie-consent")) setShowBanner(true);
	}, []);
	const handleAccept = () => {
		localStorage.setItem("cookie-consent", "accepted");
		setShowBanner(false);
	};
	const handleDecline = () => {
		localStorage.setItem("cookie-consent", "declined");
		setShowBanner(false);
	};
	if (!showBanner) return null;
	return /* @__PURE__ */ jsx("div", {
		className: CookieConsent_module_default.cookieBanner,
		children: /* @__PURE__ */ jsxs("div", {
			className: CookieConsent_module_default.cookieContent,
			children: [/* @__PURE__ */ jsxs("p", {
				className: CookieConsent_module_default.cookieText,
				children: [
					"🍪 Bu web sitesi, deneyiminizi geliştirmek için çerezler kullanmaktadır. Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.",
					" ",
					/* @__PURE__ */ jsx(Link$1, {
						href: "/cerez-politikasi",
						className: CookieConsent_module_default.cookieLink,
						children: "Çerez Politikası"
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: CookieConsent_module_default.cookieButtons,
				children: [/* @__PURE__ */ jsx("button", {
					onClick: handleAccept,
					className: CookieConsent_module_default.acceptButton,
					children: "Kabul Et"
				}), /* @__PURE__ */ jsx("button", {
					onClick: handleDecline,
					className: CookieConsent_module_default.declineButton,
					children: "Reddet"
				})]
			})]
		})
	});
}
var WhatsAppButton_module_default = {
	whatsappButton: "_whatsappButton_7ot19_1",
	pulse: "_pulse_7ot19_1",
	icon: "_icon_7ot19_25",
	tooltip: "_tooltip_7ot19_30",
	fadeIn: "_fadeIn_7ot19_1"
};
//#endregion
//#region src/components/features/WhatsAppButton.tsx
function WhatsAppButton() {
	const [isHovered, setIsHovered] = useState(false);
	return /* @__PURE__ */ jsxs("a", {
		href: `https://wa.me/905335176609?text=${encodeURIComponent("Merhaba, Kutup Grup hizmetleriniz hakkında bilgi almak istiyorum.")}`,
		target: "_blank",
		rel: "noopener noreferrer",
		className: WhatsAppButton_module_default.whatsappButton,
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		"aria-label": "WhatsApp ile iletişime geçin",
		children: [/* @__PURE__ */ jsx("svg", {
			viewBox: "0 0 32 32",
			className: WhatsAppButton_module_default.icon,
			children: /* @__PURE__ */ jsx("path", {
				d: "M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.332 22.616c-.39 1.1-2.274 2.104-3.156 2.168-.792.058-1.756.082-2.832-.178a25.9 25.9 0 01-2.566-.948c-4.512-1.946-7.458-6.542-7.682-6.846-.224-.302-1.83-2.434-1.83-4.642 0-2.208 1.158-3.294 1.568-3.744.39-.428 1.068-.612 1.714-.612.208 0 .394.01.562.018.45.02.676.046 .972.752.37.882 1.27 3.09 1.38 3.314.112.224.186.486.038.784-.15.302-.224.486-.448.748-.224.262-.47.584-.674.784-.224.224-.458.466-.196.914.262.448 1.164 1.92 2.5 3.112 1.718 1.532 3.168 2.006 3.614 2.23.45.224.71.186.972-.112.262-.3 1.12-1.306 1.42-1.756.298-.448.598-.374.998-.224.402.15 2.544 1.2 2.982 1.42.436.222.728.332.836.516.108.186.108 1.072-.282 2.168z",
				fill: "currentColor"
			})
		}), isHovered && /* @__PURE__ */ jsx("span", {
			className: WhatsAppButton_module_default.tooltip,
			children: "WhatsApp ile yazın"
		})]
	});
}
var ScrollToTop_module_default = {
	scrollToTop: "_scrollToTop_9rs46_1",
	fadeIn: "_fadeIn_9rs46_1"
};
//#endregion
//#region src/components/features/ScrollToTop.tsx
function ScrollToTop$1() {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const toggle = () => setIsVisible(window.scrollY > 400);
		window.addEventListener("scroll", toggle);
		return () => window.removeEventListener("scroll", toggle);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	if (!isVisible) return null;
	return /* @__PURE__ */ jsx("button", {
		className: ScrollToTop_module_default.scrollToTop,
		onClick: scrollToTop,
		"aria-label": "Yukarı çık",
		children: /* @__PURE__ */ jsx("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ jsx("polyline", { points: "18 15 12 9 6 15" })
		})
	});
}
//#endregion
//#region src/components/layout/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("footer", {
			className: "footer",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "newsletter-wrapper",
						children: /* @__PURE__ */ jsx(Newsletter, {})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-grid",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "footer-col brand-col",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "logo-container",
										children: /* @__PURE__ */ jsx(Image, {
											src: "/logo/logo-white.png",
											alt: "Kutup Grup",
											width: 110,
											height: 53,
											className: "footer-logo"
										})
									}),
									/* @__PURE__ */ jsx("p", {
										className: "footer-desc",
										children: "Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "social-links",
										children: [
											/* @__PURE__ */ jsx(Link$1, {
												href: "https://facebook.com",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "social-btn",
												"aria-label": "Facebook",
												children: /* @__PURE__ */ jsx("svg", {
													width: "18",
													height: "18",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "2",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													children: /* @__PURE__ */ jsx("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })
												})
											}),
											/* @__PURE__ */ jsx(Link$1, {
												href: "https://www.instagram.com/kutup_endustriyel_dagcilik",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "social-btn",
												"aria-label": "Instagram",
												children: /* @__PURE__ */ jsxs("svg", {
													width: "18",
													height: "18",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "2",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													children: [
														/* @__PURE__ */ jsx("rect", {
															width: "20",
															height: "20",
															x: "2",
															y: "2",
															rx: "5",
															ry: "5"
														}),
														/* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
														/* @__PURE__ */ jsx("line", {
															x1: "17.5",
															x2: "17.51",
															y1: "6.5",
															y2: "6.5"
														})
													]
												})
											}),
											/* @__PURE__ */ jsx(Link$1, {
												href: "https://linkedin.com",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "social-btn",
												"aria-label": "LinkedIn",
												children: /* @__PURE__ */ jsxs("svg", {
													width: "18",
													height: "18",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "2",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													children: [
														/* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
														/* @__PURE__ */ jsx("rect", {
															width: "4",
															height: "12",
															x: "2",
															y: "9"
														}),
														/* @__PURE__ */ jsx("circle", {
															cx: "4",
															cy: "4",
															r: "2"
														})
													]
												})
											}),
											/* @__PURE__ */ jsx(Link$1, {
												href: "https://youtube.com",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "social-btn",
												"aria-label": "YouTube",
												children: /* @__PURE__ */ jsxs("svg", {
													width: "18",
													height: "18",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "2",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													children: [/* @__PURE__ */ jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" }), /* @__PURE__ */ jsx("polygon", { points: "10 15 15 12 10 9 10 15" })]
												})
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "footer-col links-col services-col",
								children: [/* @__PURE__ */ jsx("h4", { children: "Hizmetlerimiz" }), /* @__PURE__ */ jsxs("ul", {
									className: "services-links-grid",
									children: [
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/dis-cephe-dekoratif-aydinlatma",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Dış Cephe Aydınlatma"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/tersane-ve-offshore-hizmetleri",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Tersane & Offshore"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Dış Cephe Temizliği"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/guvenlik-agi-kurulumu",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Güvenlik Ağı Kurulumu"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/yatay-ve-dusey-yasam-hatti",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Yaşam Hattı Sistemleri"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/jeoteknik-uygulamalar",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Jeoteknik Çözümler"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/yamac-yuzeyi-temizleme",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Yamaç Temizleme"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/sev-ortuleme",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Şev Örtüleme"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/hassas-endustriyel-alan-korumasi",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Hassas Alan Koruması"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/kaya-bariyeri",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Kaya Bariyeri"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/deflektor-tip-ortuleme",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Deflektör Örtüleme"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/moloz-bariyer",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Moloz Bariyeri"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/ormanda-iple-erisim-hizmetleri",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Ormanda İple Erişim"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/stand-by-rescue-hizmeti",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Stand-by & Rescue"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/ruzgar-enerji-santralleri",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "RES Bakım Onarım"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/gabion-duvar",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Gabion Duvar"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/sahne-isleri-rigging",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Rigging & Sahne"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/sprat-egitimi",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "SPRAT Eğitimi"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/irata-egitimi",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "IRATA Eğitimi"]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
											href: "/hizmetler/kar-ve-cig-kontrolu",
											className: "sliding-link",
											children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Kar & Çığ Kontrolü"]
										}) })
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "footer-col links-col",
								children: [/* @__PURE__ */ jsx("h4", { children: "Kurumsal" }), /* @__PURE__ */ jsxs("ul", { children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
										href: "/hakkimizda",
										className: "sliding-link",
										children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Hakkımızda"]
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
										href: "/iletisim",
										className: "sliding-link",
										children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "İletişim"]
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link$1, {
										href: "/sss",
										className: "sliding-link",
										children: [/* @__PURE__ */ jsx("span", { className: "bullet" }), "Sıkça Sorulan Sorular"]
									}) })
								] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "footer-col contact-col",
								children: [/* @__PURE__ */ jsx("h4", { children: "İletişim" }), /* @__PURE__ */ jsxs("ul", {
									className: "contact-info",
									children: [
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
											href: "mailto:info@kutupgrup.com",
											className: "contact-item",
											children: [/* @__PURE__ */ jsx("div", {
												className: "icon-wrapper",
												children: /* @__PURE__ */ jsxs("svg", {
													width: "15",
													height: "15",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "2.5",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													children: [/* @__PURE__ */ jsx("rect", {
														width: "20",
														height: "16",
														x: "2",
														y: "4",
														rx: "2"
													}), /* @__PURE__ */ jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" })]
												})
											}), /* @__PURE__ */ jsx("span", { children: "info@kutupgrup.com" })]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
											href: "tel:+905335176609",
											className: "contact-item",
											children: [/* @__PURE__ */ jsx("div", {
												className: "icon-wrapper",
												children: /* @__PURE__ */ jsx("svg", {
													width: "15",
													height: "15",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "2.5",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2A19.88 19.88 0 0 1 3.09 5.22 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 11.5a16 16 0 0 0 6.41 6.41l2.33-2.25a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68a2 2 0 0 1 1.72 2.03z" })
												})
											}), /* @__PURE__ */ jsx("span", { children: "+90 (533) 517 66 09" })]
										}) }),
										/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("span", {
											className: "contact-item no-click",
											children: [/* @__PURE__ */ jsx("div", {
												className: "icon-wrapper",
												children: /* @__PURE__ */ jsxs("svg", {
													width: "15",
													height: "15",
													viewBox: "0 0 24 24",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "2.5",
													strokeLinecap: "round",
													strokeLinejoin: "round",
													children: [/* @__PURE__ */ jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" }), /* @__PURE__ */ jsx("circle", {
														cx: "12",
														cy: "10",
														r: "3"
													})]
												})
											}), /* @__PURE__ */ jsx("span", { children: "İstanbul, Türkiye" })]
										}) })
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "footer-bottom",
						children: /* @__PURE__ */ jsxs("div", {
							className: "footer-bottom-flex",
							children: [/* @__PURE__ */ jsxs("p", {
								className: "copyright",
								children: [
									"© ",
									(/* @__PURE__ */ new Date()).getFullYear(),
									" Kutup Grup. Tüm hakları saklıdır."
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "bottom-links",
								children: [
									/* @__PURE__ */ jsx(Link$1, {
										href: "/gizlilik-politikasi",
										className: "bottom-link",
										children: "Gizlilik Politikası"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "separator",
										children: "•"
									}),
									/* @__PURE__ */ jsx(Link$1, {
										href: "/cerez-politikasi",
										className: "bottom-link",
										children: "Çerez Politikası"
									})
								]
							})]
						})
					})
				]
			}), /* @__PURE__ */ jsx("style", {
				jsx: true,
				children: `
        .footer {
          background: #030712;
          background-image: 
            radial-gradient(circle at 100% 0%, rgba(62, 146, 204, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 0% 100%, rgba(165, 216, 221, 0.1) 0%, transparent 40%),
            linear-gradient(rgba(3, 7, 18, 0.6) 0%, #030712 100%),
            radial-gradient(circle, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 100% 100%, 24px 24px;
          color: var(--color-polar-white);
          padding: var(--spacing-16) 0 var(--spacing-8);
          position: relative;
          z-index: 5;
          overflow: visible;
          border-top: 1px solid rgba(165, 216, 221, 0.15);
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(62, 146, 204, 0.5), transparent);
          z-index: 10;
        }
        
        .newsletter-wrapper {
          position: relative;
          margin-top: 0;
          margin-bottom: var(--spacing-16);
          z-index: 12;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.6fr 0.7fr 1fr;
          gap: var(--spacing-10);
          margin-bottom: var(--spacing-16);
          position: relative;
          z-index: 2;
        }

        .services-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px 20px;
        }

        @media (max-width: 480px) {
          .services-links-grid {
            grid-template-columns: 1fr;
            gap: 6px 0;
          }
        }
        
        .footer-col h4 {
          color: var(--color-polar-white);
          font-size: var(--font-size-base);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--spacing-6);
          position: relative;
          padding-bottom: var(--spacing-2);
        }

        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-arctic-blue), var(--color-ice-blue));
          border-radius: 2px;
        }
        
        .logo-container {
          margin-bottom: var(--spacing-4);
          opacity: 0.95;
        }

        .footer-logo {
          object-fit: contain;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
        }
        
        .footer-desc {
          color: rgba(255, 255, 255, 0.7);
          line-height: var(--line-height-relaxed);
          font-size: 0.95rem;
          margin-bottom: var(--spacing-6);
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .social-btn:hover {
          color: var(--color-polar-white);
          background: linear-gradient(135deg, var(--color-arctic-blue) 0%, var(--color-deep-navy) 100%);
          border-color: rgba(62, 146, 204, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(62, 146, 204, 0.3);
        }
        
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-col li {
          margin-bottom: var(--spacing-4);
        }
        
        :global(.sliding-link) {
          color: rgba(255, 255, 255, 0.7) !important;
          display: inline-flex;
          align-items: center;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .bullet {
          width: 0;
          height: 1.5px;
          background: var(--color-ice-blue);
          margin-right: 0;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          opacity: 0;
        }

        :global(.sliding-link:hover) {
          color: var(--color-ice-blue) !important;
          transform: translateX(6px);
        }

        :global(.sliding-link:hover) .bullet {
          width: 8px;
          margin-right: 8px;
          opacity: 1;
        }
        
        .contact-info li {
          margin-bottom: var(--spacing-4);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .contact-item.no-click {
          cursor: default;
        }

        .icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(62, 146, 204, 0.1);
          border: 1px solid rgba(62, 146, 204, 0.15);
          color: var(--color-ice-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        a.contact-item:hover {
          color: var(--color-ice-blue);
        }

        a.contact-item:hover .icon-wrapper {
          background: rgba(62, 146, 204, 0.25);
          border-color: rgba(62, 146, 204, 0.4);
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(62, 146, 204, 0.15);
        }
        
        .footer-bottom {
          padding-top: var(--spacing-8);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          z-index: 2;
        }

        .footer-bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .footer-bottom p.copyright {
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
          font-size: 0.9rem;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bottom-link {
          color: rgba(255, 255, 255, 0.45);
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .bottom-link:hover {
          color: var(--color-ice-blue);
          text-decoration: underline;
        }

        .separator {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.8rem;
        }
        
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-8);
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 0 0 var(--spacing-6);
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-10);
            margin-bottom: var(--spacing-10);
          }

          .footer-bottom-flex {
            flex-direction: column;
            text-align: center;
            gap: var(--spacing-3);
          }
        }
      `
			})]
		}),
		/* @__PURE__ */ jsx(CookieConsent, {}),
		/* @__PURE__ */ jsx(WhatsAppButton, {}),
		/* @__PURE__ */ jsx(ScrollToTop$1, {})
	] });
}
//#endregion
//#region src/components/animations/MagneticButton.tsx
function MagneticButton({ children, className = "" }) {
	const ref = useRef(null);
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});
	const handleMouse = (e) => {
		const { clientX, clientY } = e;
		if (!ref.current) return;
		const { height, width, left, top } = ref.current.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({
			x: middleX * .2,
			y: middleY * .2
		});
	};
	const reset = () => {
		setPosition({
			x: 0,
			y: 0
		});
	};
	return /* @__PURE__ */ jsx(motion.div, {
		className,
		ref,
		onMouseMove: handleMouse,
		onMouseLeave: reset,
		animate: {
			x: position.x,
			y: position.y
		},
		transition: {
			type: "spring",
			stiffness: 150,
			damping: 15,
			mass: .1
		},
		style: { display: "inline-flex" },
		children
	});
}
//#endregion
//#region src/components/sections/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "hero",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "hero-bg",
				children: /* @__PURE__ */ jsx(Image, {
					src: "/images/slope-stabilization.png",
					alt: "Kutup Grup Hero Background",
					fill: true,
					priority: true,
					quality: 90,
					sizes: "100vw",
					style: {
						objectFit: "cover",
						objectPosition: "center"
					}
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "hero-overlay" }),
			/* @__PURE__ */ jsx("div", {
				className: "hero-content",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "hero-text",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "hero-badge",
								children: [/* @__PURE__ */ jsxs("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })]
								}), "Türkiye'nin Öncü Endüstriyel Dağcılık Firması"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "hero-title",
								children: [
									"Yüksekteki ",
									/* @__PURE__ */ jsx("span", {
										className: "hero-gradient-text",
										children: "Güvenliğiniz"
									}),
									/* @__PURE__ */ jsx("br", {}),
									"Bizim İşimiz"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "hero-subtitle",
								children: "Endüstriyel dağcılık, jeoteknik uygulamalar ve yüksek yapı çözümlerinde 15+ yıllık deneyim. Heyelan, kaya düşmesi ve yüksekte çalışma problemlerinize profesyonel çözümler sunuyoruz."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "hero-cta",
								children: [/* @__PURE__ */ jsx(MagneticButton, { children: /* @__PURE__ */ jsxs(Link$1, {
									href: "/iletisim",
									className: "btn btn-cta",
									children: ["Ücretsiz Teklif Alın", /* @__PURE__ */ jsxs("svg", {
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
									})]
								}) }), /* @__PURE__ */ jsx(MagneticButton, { children: /* @__PURE__ */ jsx(Link$1, {
									href: "/hizmetler",
									className: "btn btn-secondary",
									children: "Hizmetlerimiz"
								}) })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "hero-trust",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "trust-item",
										children: [/* @__PURE__ */ jsxs("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											children: [/* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })]
										}), /* @__PURE__ */ jsx("span", { children: "IRATA Sertifikalı" })]
									}),
									/* @__PURE__ */ jsx("div", { className: "trust-divider" }),
									/* @__PURE__ */ jsxs("div", {
										className: "trust-item",
										children: [/* @__PURE__ */ jsxs("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											children: [/* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })]
										}), /* @__PURE__ */ jsx("span", { children: "ISO 9001 & 45001" })]
									}),
									/* @__PURE__ */ jsx("div", { className: "trust-divider" }),
									/* @__PURE__ */ jsxs("div", {
										className: "trust-item",
										children: [/* @__PURE__ */ jsxs("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2.5",
											children: [/* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })]
										}), /* @__PURE__ */ jsx("span", { children: "500+ Proje" })]
									})
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "scroll-indicator",
				children: /* @__PURE__ */ jsx("div", { className: "scroll-line" })
			}),
			/* @__PURE__ */ jsx("style", {
				jsx: true,
				children: `
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 80px;
          background: #030712;
        }
        
        /* Full width background image container */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          transform: scale(1.02);
          animation: zoomSlow 30s ease-out infinite alternate;
        }

        @keyframes zoomSlow {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.08); }
        }
        
        /* Brightened premium overlay for readability without dimming the image */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3, 7, 18, 0.3) 0%, rgba(3, 7, 18, 0.65) 100%);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: var(--spacing-20) 0;
        }
        
        .hero-text {
          max-width: 840px;
          text-align: center;
          margin: 0 auto;
        }
        
        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 22px;
          background: rgba(3, 7, 18, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          font-family: var(--font-heading);
          margin-bottom: var(--spacing-8);
          animation: fadeInDown 0.8s ease-out;
        }
        
        .hero-badge svg {
          color: var(--color-arctic-blue);
        }
        
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hero-title {
          font-size: clamp(2.6rem, 5.5vw, 4.4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: var(--spacing-6);
          color: white;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 16px rgba(3, 7, 18, 0.85);
          animation: fadeIn 0.8s ease-out 0.1s both;
        }
        
        .hero-gradient-text {
          background: linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #00f2fe 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientText 6s ease infinite;
          font-weight: 900;
        }
        
        @keyframes gradientText {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hero-subtitle {
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.95);
          line-height: var(--line-height-relaxed);
          margin-bottom: var(--spacing-10);
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 0 2px 10px rgba(3, 7, 18, 0.9);
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
        
        .hero-cta {
          display: flex;
          gap: var(--spacing-4);
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeIn 0.8s ease-out 0.3s both;
        }

         .hero-cta .btn-cta {
          background: linear-gradient(135deg, var(--color-deep-navy) 0%, var(--color-arctic-blue) 100%) !important;
          color: white !important;
          padding: var(--spacing-4) var(--spacing-8);
          border-radius: var(--radius-full);
          font-weight: 700;
          font-family: var(--font-heading);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 10px 25px rgba(62, 146, 204, 0.3);
        }

        .hero-cta .btn-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(62, 146, 204, 0.5);
          color: white !important;
        }

        .hero-cta .btn-secondary {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          border: 1.5px solid #ffffff !important;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: var(--spacing-4) var(--spacing-8);
          border-radius: var(--radius-full);
          font-weight: 700;
          font-family: var(--font-heading);
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .hero-cta .btn-secondary:hover {
          background: #ffffff !important;
          color: var(--color-deep-navy) !important;
          transform: translateY(-2px);
          border-color: #ffffff !important;
        }
        
        /* Trust bar */
        .hero-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-6);
          margin-top: var(--spacing-12);
          animation: fadeIn 0.8s ease-out 0.5s both;
        }
        
        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          text-shadow: 0 2px 8px rgba(3, 7, 18, 0.8);
        }
        
        .trust-item svg {
          color: var(--color-success-green);
          flex-shrink: 0;
        }
        
        .trust-divider {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.25);
        }
        
        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        
        .scroll-line {
          width: 2px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }
        
        .scroll-line::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 50%;
          background: var(--color-arctic-blue);
          border-radius: 2px;
          animation: scrollDown 1.8s ease-in-out infinite;
        }
        
        @keyframes scrollDown {
          0% { top: -50%; }
          100% { top: 150%; }
        }
        
        @media (max-width: 768px) {
          .hero {
            min-height: 85vh;
            padding: var(--spacing-12) 0;
          }
          
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-cta .btn {
            width: 100%;
            max-width: 300px;
          }
          
          .hero-trust {
            flex-direction: column;
            gap: var(--spacing-3);
          }
          
          .trust-divider {
            display: none;
          }
        }
      `
			})
		]
	});
}
//#endregion
//#region src/components/animations/FadeUp.tsx
function FadeUp({ children, delay = 0, duration = .8, y = 40, className = "" }) {
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-50px"
		},
		transition: {
			duration,
			delay,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		},
		className,
		children
	});
}
//#endregion
//#region src/components/sections/ServicesShowcase.tsx
var LightbulbIcon$1 = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.8",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M9 18h6" }),
		/* @__PURE__ */ jsx("path", { d: "M10 22h4" }),
		/* @__PURE__ */ jsx("path", { d: "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" })
	]
});
var MountainIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.8",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }), /* @__PURE__ */ jsx("path", { d: "m4.14 15.08 2.86-2.7 3 2.7" })]
});
var SparklesIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.8",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "m12 3-1.912 5.813a2 2 0 01-1.275 1.275L3 12l5.813 1.912a2 2 0 011.275 1.275L12 21l1.912-5.813a2 2 0 011.275-1.275L21 12l-5.813-1.912a2 2 0 01-1.275-1.275L12 3z" }),
		/* @__PURE__ */ jsx("path", { d: "M5 3v4" }),
		/* @__PURE__ */ jsx("path", { d: "M19 17v4" }),
		/* @__PURE__ */ jsx("path", { d: "M3 5h4" }),
		/* @__PURE__ */ jsx("path", { d: "M17 19h4" })
	]
});
var ShieldIcon$2 = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.8",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })]
});
var LinkIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.8",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }), /* @__PURE__ */ jsx("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })]
});
var WindIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.8",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M17.7 7.7a2.5 2.5 0 111.8 4.3H2" }),
		/* @__PURE__ */ jsx("path", { d: "M9.6 4.6A2 2 0 1111 8H2" }),
		/* @__PURE__ */ jsx("path", { d: "M12.6 19.4A2 2 0 1014 16H2" })
	]
});
var ArrowRightIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
});
var services = [
	{
		title: "Jeoteknik Uygulamalar",
		description: "Şev stabilizasyonu, kaya bariyeri ve heyelan önleme sistemleri.",
		icon: /* @__PURE__ */ jsx(MountainIcon, {}),
		href: "/hizmetler/jeoteknik-uygulamalar",
		color: "#10B981",
		image: "/services/kaya-bariyeri.png"
	},
	{
		title: "Dış Cephe Dekoratif Aydınlatma",
		description: "Yüksek yapılarınıza modern ve estetik aydınlatma çözümleri.",
		icon: /* @__PURE__ */ jsx(LightbulbIcon$1, {}),
		href: "/hizmetler/dis-cephe-dekoratif-aydinlatma",
		color: "#F59E0B",
		image: "/services/dis-cephe-aydinlatma.png"
	},
	{
		title: "İç ve Dış Cephe Temizliği",
		description: "Yüksek yapılarda profesyonel temizlik ve bakım hizmetleri.",
		icon: /* @__PURE__ */ jsx(SparklesIcon, {}),
		href: "/hizmetler/ic-ve-dis-cephe-temizlik-hizmetleri",
		color: "#3E92CC",
		image: "/services/cephe-temizlik.png"
	},
	{
		title: "Güvenlik Ağı Kurulumu",
		description: "İş güvenliği için kalıcı ve geçici güvenlik ağı sistemleri.",
		icon: /* @__PURE__ */ jsx(ShieldIcon$2, {}),
		href: "/hizmetler/guvenlik-agi-kurulumu",
		color: "#EF4444",
		image: "/services/guvenlik-agi.png"
	},
	{
		title: "Yatay & Düşey Yaşam Hattı",
		description: "Yüksekte çalışan personel için can güvenliği sistemleri.",
		icon: /* @__PURE__ */ jsx(LinkIcon, {}),
		href: "/hizmetler/yatay-ve-dusey-yasam-hatti",
		color: "#8B5CF6",
		image: "/services/yasam-hatti.png"
	},
	{
		title: "Rüzgar Enerji Santralleri",
		description: "RES bakım, onarım ve montaj hizmetleri.",
		icon: /* @__PURE__ */ jsx(WindIcon, {}),
		href: "/hizmetler/ruzgar-enerji-santralleri",
		color: "#06B6D4",
		image: "/services/ruzgar-turbini.png"
	}
];
function ServicesShowcase() {
	return /* @__PURE__ */ jsxs("section", {
		className: "section services-showcase-section",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs(FadeUp, {
				className: "section-header text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "section-title",
					children: "Hizmetlerimiz"
				}), /* @__PURE__ */ jsx("p", {
					className: "section-subtitle",
					children: "Yüksekte çalışma, jeoteknik ve iş güvenliğinde kapsamlı çözümler sunuyoruz"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "services-grid",
				children: services.map((service, index) => /* @__PURE__ */ jsx(FadeUp, {
					delay: index * .1,
					className: "service-card-wrapper",
					children: /* @__PURE__ */ jsxs(Link$1, {
						href: service.href,
						className: "service-card",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "service-card-image",
							children: [/* @__PURE__ */ jsx(Image, {
								src: service.image,
								alt: service.title,
								fill: true,
								sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
								style: { objectFit: "cover" }
							}), /* @__PURE__ */ jsx("div", {
								className: "service-icon-wrapper",
								style: { "--icon-color": service.color },
								children: service.icon
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "service-card-content",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "service-title",
									children: service.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "service-desc",
									children: service.description
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "service-link",
									children: ["Detaylı Bilgi ", /* @__PURE__ */ jsx(ArrowRightIcon, {})]
								})
							]
						})]
					})
				}, index))
			})]
		}), /* @__PURE__ */ jsx("style", {
			jsx: true,
			children: `
        .services-showcase-section {
          background: #f8fafc;
          padding: var(--spacing-20) 0;
        }

        .section-header {
          margin-bottom: var(--spacing-16);
        }
        
        .section-title {
          font-size: var(--font-size-h2);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-4);
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        
        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: var(--line-height-relaxed);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: var(--spacing-8);
        }

        :global(.service-card-wrapper) {
          height: 100%;
        }
        
        .service-card {
          background: white;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          height: 100%;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
          z-index: 3;
        }
        
        .service-card:hover::before {
          transform: scaleX(1);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-arctic-blue);
          box-shadow: 0 20px 40px rgba(10, 36, 99, 0.12);
        }
        
        .service-card-image {
          position: relative;
          height: 200px;
          width: 100%;
          overflow: hidden;
          background: #f1f5f9;
        }
        
        .service-card-image :global(img) {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        
        .service-card:hover .service-card-image :global(img) {
          transform: scale(1.06);
        }
        
        .service-icon-wrapper {
          position: absolute;
          bottom: 16px;
          left: 16px;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.95);
          color: var(--icon-color);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 2;
        }
        
        .service-card:hover .service-icon-wrapper {
          background: var(--icon-color);
          color: white;
          transform: scale(1.05);
        }
        
        .service-card-content {
          padding: var(--spacing-6);
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        
        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-2);
          transition: color 0.3s ease;
        }
        
        .service-card:hover .service-title {
          color: var(--color-arctic-blue);
        }
        
        .service-desc {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-4);
          line-height: var(--line-height-relaxed);
          font-size: 0.95rem;
          flex-grow: 1;
        }
        
        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--color-arctic-blue);
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          transition: all 0.2s ease;
          margin-top: auto;
        }
        
        .service-card:hover .service-link {
          gap: 10px;
          color: var(--color-deep-navy);
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }
          .service-card-image {
            height: 180px;
          }
          .services-showcase-section {
            padding: var(--spacing-12) 0;
          }
        }
      `
		})]
	});
}
//#endregion
//#region src/components/sections/Stats.tsx
var stats$1 = [
	{
		number: 500,
		suffix: "+",
		label: "Tamamlanan Proje",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ jsx("path", { d: "M2 20h20" }),
				/* @__PURE__ */ jsx("path", { d: "M5 20V10l7-7 7 7v10" }),
				/* @__PURE__ */ jsx("path", { d: "M9 20v-6h6v6" })
			]
		})
	},
	{
		number: 15,
		suffix: "+",
		label: "Yıllık Deneyim",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ jsx("rect", {
					width: "18",
					height: "18",
					x: "3",
					y: "4",
					rx: "2",
					ry: "2"
				}),
				/* @__PURE__ */ jsx("line", {
					x1: "16",
					y1: "2",
					x2: "16",
					y2: "6"
				}),
				/* @__PURE__ */ jsx("line", {
					x1: "8",
					y1: "2",
					x2: "8",
					y2: "6"
				}),
				/* @__PURE__ */ jsx("line", {
					x1: "3",
					y1: "10",
					x2: "21",
					y2: "10"
				})
			]
		})
	},
	{
		number: 200,
		suffix: "+",
		label: "Mutlu Müşteri",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ jsx("path", { d: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" }),
				/* @__PURE__ */ jsx("circle", {
					cx: "9",
					cy: "7",
					r: "4"
				}),
				/* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 00-3-3.87" }),
				/* @__PURE__ */ jsx("path", { d: "M16 3.13a4 4 0 010 7.75" })
			]
		})
	},
	{
		number: 50,
		suffix: "+",
		label: "Uzman Ekip",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })]
		})
	}
];
function Counter({ end, duration = 2e3, isVisible }) {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (!isVisible) return;
		let start = 0;
		const increment = end / (duration / 16);
		const timer = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(timer);
			} else setCount(Math.floor(start));
		}, 16);
		return () => clearInterval(timer);
	}, [
		end,
		duration,
		isVisible
	]);
	return /* @__PURE__ */ jsx(Fragment, { children: count });
}
function Stats() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.unobserve(el);
			}
		}, { threshold: .3 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "section-divider",
			children: /* @__PURE__ */ jsx("svg", {
				viewBox: "0 0 1440 60",
				preserveAspectRatio: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: /* @__PURE__ */ jsx("path", {
					d: "M0 60L48 52C96 44 192 28 288 22C384 16 480 20 576 28C672 36 768 48 864 50C960 52 1056 44 1152 36C1248 28 1344 20 1392 16L1440 12V60H0Z",
					fill: "#0A2463"
				})
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			ref: sectionRef,
			className: "stats-section",
			children: [/* @__PURE__ */ jsx("div", {
				className: "container",
				children: /* @__PURE__ */ jsx("div", {
					className: "stats-grid",
					children: stats$1.map((stat, index) => /* @__PURE__ */ jsxs("div", {
						className: "stat-card",
						style: {
							animationDelay: `${index * 150}ms`,
							opacity: isVisible ? 1 : 0,
							transform: isVisible ? "translateY(0)" : "translateY(30px)",
							transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`
						},
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "stat-icon",
								children: stat.icon
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "stat-number",
								children: [/* @__PURE__ */ jsx(Counter, {
									end: stat.number,
									isVisible
								}), stat.suffix]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "stat-label",
								children: stat.label
							})
						]
					}, index))
				})
			}), /* @__PURE__ */ jsx("style", {
				jsx: true,
				children: `
                    .stats-section {
                        padding: var(--spacing-20) 0;
                        background: var(--gradient-dark);
                        position: relative;
                        overflow: hidden;
                    }

                    .stats-section::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background-image:
                            radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                        background-size: 28px 28px;
                        pointer-events: none;
                    }

                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: var(--spacing-8);
                        position: relative;
                        z-index: 1;
                    }
                    
                    .stat-card {
                        text-align: center;
                        padding: var(--spacing-8) var(--spacing-4);
                        border-radius: var(--radius-lg);
                        background: rgba(255, 255, 255, 0.04);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        backdrop-filter: blur(4px);
                        transition: all 0.3s ease;
                    }

                    .stat-card:hover {
                        background: rgba(255, 255, 255, 0.08);
                        border-color: rgba(255, 255, 255, 0.15);
                        transform: translateY(-4px) !important;
                    }

                    .stat-icon {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        background: rgba(62, 146, 204, 0.15);
                        color: var(--color-ice-blue);
                        margin: 0 auto var(--spacing-4);
                    }
                    
                    .stat-number {
                        font-size: clamp(2.5rem, 5vw, 3.5rem);
                        font-weight: 800;
                        font-family: var(--font-heading);
                        background: linear-gradient(135deg, #FFFFFF 0%, #A5D8DD 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        margin-bottom: var(--spacing-2);
                        letter-spacing: -0.02em;
                    }
                    
                    .stat-label {
                        font-size: var(--font-size-base);
                        color: rgba(255, 255, 255, 0.65);
                        font-weight: 500;
                        font-family: var(--font-heading);
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                    }
                    
                    @media (max-width: 768px) {
                        .stats-grid {
                            grid-template-columns: repeat(2, 1fr);
                            gap: var(--spacing-4);
                        }

                        .stat-card {
                            padding: var(--spacing-6) var(--spacing-3);
                        }
                    }
                `
			})]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "section-divider section-divider-flip",
			children: /* @__PURE__ */ jsx("svg", {
				viewBox: "0 0 1440 60",
				preserveAspectRatio: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: /* @__PURE__ */ jsx("path", {
					d: "M0 60L48 52C96 44 192 28 288 22C384 16 480 20 576 28C672 36 768 48 864 50C960 52 1056 44 1152 36C1248 28 1344 20 1392 16L1440 12V60H0Z",
					fill: "#0A2463"
				})
			})
		})
	] });
}
//#endregion
//#region src/components/ui/ScrollReveal.tsx
var variantStyles = {
	fadeUp: {
		hidden: {
			opacity: 0,
			transform: "translateY(40px)"
		},
		visible: {
			opacity: 1,
			transform: "translateY(0)"
		}
	},
	fadeDown: {
		hidden: {
			opacity: 0,
			transform: "translateY(-40px)"
		},
		visible: {
			opacity: 1,
			transform: "translateY(0)"
		}
	},
	fadeLeft: {
		hidden: {
			opacity: 0,
			transform: "translateX(-40px)"
		},
		visible: {
			opacity: 1,
			transform: "translateX(0)"
		}
	},
	fadeRight: {
		hidden: {
			opacity: 0,
			transform: "translateX(40px)"
		},
		visible: {
			opacity: 1,
			transform: "translateX(0)"
		}
	},
	scaleIn: {
		hidden: {
			opacity: 0,
			transform: "scale(0.9)"
		},
		visible: {
			opacity: 1,
			transform: "scale(1)"
		}
	},
	slideUp: {
		hidden: {
			opacity: 0,
			transform: "translateY(60px)"
		},
		visible: {
			opacity: 1,
			transform: "translateY(0)"
		}
	}
};
function ScrollReveal({ children, variant = "fadeUp", delay = 0, duration = 700, threshold = .15, className = "", style = {}, once = true }) {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				if (once) observer.unobserve(el);
			} else if (!once) setIsVisible(false);
		}, {
			threshold,
			rootMargin: "0px 0px -40px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold, once]);
	const { hidden, visible } = variantStyles[variant];
	return /* @__PURE__ */ jsx("div", {
		ref,
		className,
		style: {
			...style,
			...isVisible ? visible : hidden,
			transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
			willChange: "opacity, transform"
		},
		children
	});
}
//#endregion
//#region src/components/seo/StructuredData.tsx
function StructuredData({ data }) {
	return /* @__PURE__ */ jsx("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
//#endregion
//#region src/lib/seo.ts
var SITE_NAME = "Kutup Grup";
var SITE_URL = "https://kutupgrup.com";
var SITE_DESCRIPTION = "Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz. İple erişim teknikleri, jeoteknik uygulamalar ve yüksek yapı çözümleri.";
function generateOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE_NAME,
		url: SITE_URL,
		logo: `${SITE_URL}/logo/logo.png`,
		description: SITE_DESCRIPTION,
		address: {
			"@type": "PostalAddress",
			addressCountry: "TR"
		},
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "customer service",
			availableLanguage: ["tr", "en"]
		}
	};
}
function generateServiceSchema(service) {
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name: service.name,
		description: service.description,
		url: service.url,
		provider: {
			"@type": "Organization",
			name: SITE_NAME,
			url: SITE_URL
		},
		areaServed: {
			"@type": "Country",
			name: "Turkey"
		}
	};
}
function generateBreadcrumbSchema(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}
function generateFAQSchema(faqs) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer
			}
		}))
	};
}
//#endregion
//#region src/pages/Home.tsx
var TrophyIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "28",
	height: "28",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M6 9H4.5a2.5 2.5 0 010-5C7 4 9 8 9 8s2-4 4.5-4a2.5 2.5 0 010 5H12" }),
		/* @__PURE__ */ jsx("path", { d: "M12 9v12" }),
		/* @__PURE__ */ jsx("path", { d: "M6 9h12l-1.5 12h-9L6 9z" })
	]
});
var ShieldIcon$1 = () => /* @__PURE__ */ jsxs("svg", {
	width: "28",
	height: "28",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })]
});
var BoltIcon$1 = () => /* @__PURE__ */ jsx("svg", {
	width: "28",
	height: "28",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
});
var CheckCircleIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "28",
	height: "28",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })]
});
var QuoteIcon = () => /* @__PURE__ */ jsx("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	opacity: "0.15",
	children: /* @__PURE__ */ jsx("path", { d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" })
});
var features = [
	{
		icon: /* @__PURE__ */ jsx(TrophyIcon, {}),
		title: "Deneyimli Ekip",
		description: "15 yılı aşkın sektör deneyimi ile uzman kadromuz her projede yanınızda.",
		color: "#F59E0B",
		bg: "rgba(245, 158, 11, 0.1)"
	},
	{
		icon: /* @__PURE__ */ jsx(ShieldIcon$1, {}),
		title: "Güvenlik Odaklı",
		description: "İş güvenliği standartlarına tam uyum, sertifikalı ekipman ve süreçler.",
		color: "#3E92CC",
		bg: "rgba(62, 146, 204, 0.1)"
	},
	{
		icon: /* @__PURE__ */ jsx(BoltIcon$1, {}),
		title: "Hızlı Çözüm",
		description: "Acil durumlarda 7/24 müdahale, projelerde zamanında teslimat.",
		color: "#8B5CF6",
		bg: "rgba(139, 92, 246, 0.1)"
	},
	{
		icon: /* @__PURE__ */ jsx(CheckCircleIcon, {}),
		title: "Kalite Garantisi",
		description: "ISO sertifikalı süreçler, kaliteli malzeme ve işçilik garantisi.",
		color: "#10B981",
		bg: "rgba(16, 185, 129, 0.1)"
	}
];
var testimonials = [
	{
		name: "M. K.",
		company: "Proje Müdürü, Yapı A.Ş.",
		text: "Kutup Grup ile birçok projede çalıştık. Profesyonellikleri ve güvenlik odaklı yaklaşımları bizi her zaman etkiledi.",
		rating: 5
	},
	{
		name: "A. D.",
		company: "Şantiye Şefi, İnşaat Ltd.",
		text: "Acil durumlarda bile hızlı müdahale kapasiteleri mükemmel. Her projede kaliteli iş çıkardılar.",
		rating: 5
	},
	{
		name: "C. Ö.",
		company: "Operasyon Yöneticisi, Enerji Grubu",
		text: "Rüzgar türbini bakım projelerimizde güvenle çalıştığımız tek firma. IRATA sertifikalı ekipleri fark yaratıyor.",
		rating: 5
	}
];
var certifications$1 = [
	"IRATA Sertifikası",
	"SPRAT Belgesi",
	"ISO 9001",
	"ISO 14001",
	"ISO 45001",
	"CE Belgesi"
];
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(StructuredData, { data: generateOrganizationSchema() }),
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(ServicesShowcase, {}),
			/* @__PURE__ */ jsx(Stats, {}),
			/* @__PURE__ */ jsx("section", {
				className: "section dot-grid",
				style: { background: "#f8fafc" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
						className: "section-header text-center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "section-eyebrow",
								children: "Avantajlarımız"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "section-title",
								children: "Neden Kutup Grup?"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "section-subtitle",
								children: "Yüksekte çalışma ve jeoteknik alanında güvenilir çözüm ortağınız"
							})
						]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "features-grid",
						children: features.map((feature, index) => /* @__PURE__ */ jsx(ScrollReveal, {
							variant: "fadeUp",
							delay: index * 120,
							children: /* @__PURE__ */ jsxs("div", {
								className: "feature-card card-premium",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "feature-icon",
										style: {
											background: feature.bg,
											color: feature.color
										},
										children: feature.icon
									}),
									/* @__PURE__ */ jsx("h3", { children: feature.title }),
									/* @__PURE__ */ jsx("p", { children: feature.description })
								]
							})
						}, index))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
						className: "section-header text-center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "section-eyebrow",
								children: "Müşteri Yorumları"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "section-title",
								children: "Müşterilerimiz Ne Diyor?"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "section-subtitle",
								children: "Birlikte çalıştığımız firmalardan geri bildirimler"
							})
						]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "testimonials-grid",
						children: testimonials.map((t, index) => /* @__PURE__ */ jsx(ScrollReveal, {
							variant: "fadeUp",
							delay: index * 150,
							children: /* @__PURE__ */ jsxs("div", {
								className: "testimonial-card",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "testimonial-quote",
										children: /* @__PURE__ */ jsx(QuoteIcon, {})
									}),
									/* @__PURE__ */ jsx("p", {
										className: "testimonial-text",
										children: t.text
									}),
									/* @__PURE__ */ jsx("div", {
										className: "testimonial-stars",
										children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ jsx("svg", {
											width: "16",
											height: "16",
											viewBox: "0 0 24 24",
											fill: "#F59E0B",
											stroke: "#F59E0B",
											strokeWidth: "1",
											children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
										}, i))
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "testimonial-author",
										children: [/* @__PURE__ */ jsx("div", {
											className: "testimonial-avatar",
											children: t.name.charAt(0)
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
											className: "testimonial-name",
											children: t.name
										}), /* @__PURE__ */ jsx("div", {
											className: "testimonial-company",
											children: t.company
										})] })]
									})
								]
							})
						}, index))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "section",
				style: { background: "#f8fafc" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
						className: "section-header text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "section-eyebrow",
							children: "Sertifikalarımız"
						}), /* @__PURE__ */ jsx("h2", {
							className: "section-title",
							children: "Güvenilir Standartlar"
						})]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "certifications-grid",
						children: certifications$1.map((cert, index) => /* @__PURE__ */ jsx(ScrollReveal, {
							variant: "scaleIn",
							delay: index * 80,
							children: /* @__PURE__ */ jsxs("div", {
								className: "cert-badge",
								children: [/* @__PURE__ */ jsxs("svg", {
									width: "20",
									height: "20",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })]
								}), /* @__PURE__ */ jsx("span", { children: cert })]
							})
						}, index))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "cta-section",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "cta-bg-shapes",
					children: [/* @__PURE__ */ jsx("div", { className: "cta-shape cta-shape-1" }), /* @__PURE__ */ jsx("div", { className: "cta-shape cta-shape-2" })]
				}), /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						variant: "scaleIn",
						children: /* @__PURE__ */ jsxs("div", {
							className: "cta-content",
							children: [
								/* @__PURE__ */ jsx("h2", { children: "Projeniz İçin Ücretsiz Teklif Alın" }),
								/* @__PURE__ */ jsx("p", { children: "Uzman ekibimiz projenizi değerlendirip size en uygun çözümü sunmaya hazır." }),
								/* @__PURE__ */ jsxs(Link$1, {
									href: "/iletisim",
									className: "btn btn-cta-white",
									children: ["Hemen İletişime Geçin", /* @__PURE__ */ jsxs("svg", {
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
									})]
								})
							]
						})
					})
				})]
			})
		] }),
		/* @__PURE__ */ jsx(Footer, {}),
		/* @__PURE__ */ jsx("style", {
			jsx: true,
			children: `
        /* Section header shared styling */
        .section-header {
          margin-bottom: var(--spacing-12);
        }

        .section-eyebrow {
          font-size: var(--font-size-sm);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-arctic-blue);
          margin-bottom: var(--spacing-2);
          font-family: var(--font-heading);
        }
        
        .section-title {
          font-size: var(--font-size-h2);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-4);
          letter-spacing: -0.02em;
        }
        
        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-6);
        }
        
        .feature-card {
          text-align: center;
          padding: var(--spacing-8) var(--spacing-6);
        }
        
        .feature-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-5);
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover .feature-icon {
          transform: scale(1.12) rotate(3deg);
        }
        
        .feature-card h3 {
          font-size: var(--font-size-h5);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-3);
        }
        
        .feature-card p {
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-6);
        }

        .testimonial-card {
          background: white;
          border-radius: var(--radius-lg);
          padding: var(--spacing-8);
          border: 1px solid var(--border-default);
          transition: all 0.35s ease;
          position: relative;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(10, 36, 99, 0.1);
          border-color: rgba(62, 146, 204, 0.2);
        }

        .testimonial-quote {
          margin-bottom: var(--spacing-4);
          color: var(--color-arctic-blue);
        }

        .testimonial-text {
          font-size: var(--font-size-base);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          margin-bottom: var(--spacing-4);
          font-style: italic;
        }

        .testimonial-stars {
          display: flex;
          gap: 2px;
          margin-bottom: var(--spacing-4);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding-top: var(--spacing-4);
          border-top: 1px solid var(--border-default);
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: var(--font-size-lg);
        }

        .testimonial-name {
          font-weight: 600;
          color: var(--color-deep-navy);
          font-size: var(--font-size-sm);
        }

        .testimonial-company {
          font-size: var(--font-size-xs);
          color: var(--text-muted);
        }

        /* Certifications */
        .certifications-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-4);
          justify-content: center;
        }

        .cert-badge {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-3) var(--spacing-5);
          background: white;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-full);
          font-size: var(--font-size-sm);
          font-weight: 600;
          color: var(--color-deep-navy);
          transition: all 0.3s ease;
          cursor: default;
        }

        .cert-badge:hover {
          border-color: var(--color-arctic-blue);
          box-shadow: 0 4px 12px rgba(62, 146, 204, 0.15);
          transform: translateY(-2px);
        }

        .cert-badge svg {
          color: var(--color-success-green);
        }

        /* CTA Section */
        .cta-section {
          background: var(--gradient-primary);
          padding: var(--spacing-24) 0;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .cta-bg-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .cta-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          background: white;
        }

        .cta-shape-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          right: -50px;
        }

        .cta-shape-2 {
          width: 200px;
          height: 200px;
          bottom: -60px;
          left: -40px;
        }
        
        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-content h2 {
          font-size: var(--font-size-h2);
          color: white;
          margin-bottom: var(--spacing-4);
          letter-spacing: -0.02em;
        }
        
        .cta-content p {
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: var(--spacing-8);
          max-width: 550px;
          margin-left: auto;
          margin-right: auto;
        }
        
        :global(.btn-cta-white) {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          background: white !important;
          color: var(--color-deep-navy) !important;
          padding: var(--spacing-4) var(--spacing-8) !important;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: var(--font-size-base);
          text-decoration: none;
          transition: all 0.35s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        :global(.btn-cta-white:hover) {
          transform: translateY(-4px);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.3);
          color: var(--color-deep-navy) !important;
          background: #f8fafc !important;
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-4);
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-4);
          }

          .certifications-grid {
            gap: var(--spacing-3);
          }

          .cert-badge {
            font-size: var(--font-size-xs);
            padding: var(--spacing-2) var(--spacing-4);
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `
		})
	] });
}
//#endregion
//#region src/pages/About.tsx
var CalendarIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("rect", {
			width: "18",
			height: "18",
			x: "3",
			y: "4",
			rx: "2",
			ry: "2"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "16",
			y1: "2",
			x2: "16",
			y2: "6"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "8",
			y1: "2",
			x2: "8",
			y2: "6"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "3",
			y1: "10",
			x2: "21",
			y2: "10"
		})
	]
});
var BuildingIcon$1 = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M2 20h20" }),
		/* @__PURE__ */ jsx("path", { d: "M5 20V10l7-7 7 7v10" }),
		/* @__PURE__ */ jsx("path", { d: "M9 20v-6h6v6" })
	]
});
var UsersIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" }),
		/* @__PURE__ */ jsx("circle", {
			cx: "9",
			cy: "7",
			r: "4"
		}),
		/* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 00-3-3.87" }),
		/* @__PURE__ */ jsx("path", { d: "M16 3.13a4 4 0 010 7.75" })
	]
});
var StarIcon = () => /* @__PURE__ */ jsx("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
});
var ShieldIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })]
});
var BoltIcon = () => /* @__PURE__ */ jsx("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
});
var LightbulbIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }),
		/* @__PURE__ */ jsx("path", { d: "M9 18h6" }),
		/* @__PURE__ */ jsx("path", { d: "M10 22h4" })
	]
});
var HandshakeIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M11 17a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" }), /* @__PURE__ */ jsx("path", { d: "M20 8.35V4a2 2 0 00-2-2h-4l-4 4h-2a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2v-5.35" })]
});
var GlobeIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "10"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "2",
			y1: "12",
			x2: "22",
			y2: "12"
		}),
		/* @__PURE__ */ jsx("path", { d: "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
	]
});
var BookIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ jsx("path", { d: "M4 19.5A2.5 2.5 0 016.5 17H20" }), /* @__PURE__ */ jsx("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" })]
});
var TargetIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "28",
	height: "28",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "10"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "6"
		}),
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "2"
		})
	]
});
var RocketIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "28",
	height: "28",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" }),
		/* @__PURE__ */ jsx("path", { d: "M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" }),
		/* @__PURE__ */ jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
		/* @__PURE__ */ jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
	]
});
var stats = [
	{
		icon: /* @__PURE__ */ jsx(CalendarIcon, {}),
		label: "Deneyim",
		value: "15+ Yıl",
		color: "#F59E0B",
		bg: "rgba(245, 158, 11, 0.1)"
	},
	{
		icon: /* @__PURE__ */ jsx(BuildingIcon$1, {}),
		label: "Tamamlanan Proje",
		value: "500+",
		color: "#3E92CC",
		bg: "rgba(62, 146, 204, 0.1)"
	},
	{
		icon: /* @__PURE__ */ jsx(UsersIcon, {}),
		label: "Mutlu Müşteri",
		value: "200+",
		color: "#10B981",
		bg: "rgba(16, 185, 129, 0.1)"
	},
	{
		icon: /* @__PURE__ */ jsx(StarIcon, {}),
		label: "Başarı Oranı",
		value: "%100",
		color: "#8B5CF6",
		bg: "rgba(139, 92, 246, 0.1)"
	}
];
var values = [
	{
		icon: /* @__PURE__ */ jsx(ShieldIcon, {}),
		title: "Güvenlik",
		description: "İş güvenliği ve personel sağlığı bizim için en öncelikli konudur. IRATA ve SPRAT standartlarına uygun çalışmalarla sıfır kaza hedefleriz.",
		color: "#EF4444",
		bg: "rgba(239, 68, 68, 0.08)"
	},
	{
		icon: /* @__PURE__ */ jsx(BoltIcon, {}),
		title: "Kalite",
		description: "ISO sertifikalı süreçler, CE onaylı ekipmanlar ve deneyimli ekibimizle en yüksek kalite standartlarını garanti ediyoruz.",
		color: "#F59E0B",
		bg: "rgba(245, 158, 11, 0.08)"
	},
	{
		icon: /* @__PURE__ */ jsx(LightbulbIcon, {}),
		title: "İnovasyon",
		description: "Sektördeki en son teknolojileri takip eder, yenilikçi çözümler geliştirerek müşterilerimize değer katarız.",
		color: "#3E92CC",
		bg: "rgba(62, 146, 204, 0.08)"
	},
	{
		icon: /* @__PURE__ */ jsx(HandshakeIcon, {}),
		title: "Müşteri Memnuniyeti",
		description: "Her projede müşteri beklentilerini aşmayı hedefleriz. Şeffaf iletişim ve zamanında teslimat prensiplerimizdir.",
		color: "#10B981",
		bg: "rgba(16, 185, 129, 0.08)"
	},
	{
		icon: /* @__PURE__ */ jsx(GlobeIcon, {}),
		title: "Çevre Bilinci",
		description: "Doğaya saygılı çalışma prensipleriyle çevresel etkiyi minimuma indirerek sürdürülebilir projeler gerçekleştiririz.",
		color: "#8B5CF6",
		bg: "rgba(139, 92, 246, 0.08)"
	},
	{
		icon: /* @__PURE__ */ jsx(BookIcon, {}),
		title: "Sürekli Gelişim",
		description: "Ekibimize düzenli eğitimler vererek sektördeki gelişmeleri takip eder, kendimizi sürekli geliştiririz.",
		color: "#EC4899",
		bg: "rgba(236, 72, 153, 0.08)"
	}
];
var certifications = [
	"IRATA Sertifikalı Teknisyenler",
	"SPRAT Eğitimli Personel",
	"ISO 9001 Kalite Yönetim Sistemi",
	"ISO 14001 Çevre Yönetim Sistemi",
	"ISO 45001 İş Sağlığı ve Güvenliği",
	"CE Sertifikalı Ekipmanlar"
];
function AboutPageClient() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsxs("section", {
				className: "about-hero",
				children: [/* @__PURE__ */ jsx("div", { className: "hero-grid-bg" }), /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "hero-content",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hero-eyebrow",
								children: "Hakkımızda"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Kutup Grup Hakkında" }),
							/* @__PURE__ */ jsx("p", {
								className: "hero-subtitle",
								children: "Endüstriyel dağcılık ve jeoteknik çözümler alanında Türkiye'nin önde gelen şirketi"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "stats-bar",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx("div", {
						className: "stats-grid",
						children: stats.map((stat, index) => /* @__PURE__ */ jsx(ScrollReveal, {
							variant: "fadeUp",
							delay: index * 100,
							children: /* @__PURE__ */ jsxs("div", {
								className: "stat-item",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "stat-icon",
										style: {
											background: stat.bg,
											color: stat.color
										},
										children: stat.icon
									}),
									/* @__PURE__ */ jsx("div", {
										className: "stat-value",
										children: stat.value
									}),
									/* @__PURE__ */ jsx("div", {
										className: "stat-label",
										children: stat.label
									})
								]
							})
						}, index))
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "section dot-grid",
				style: { background: "#f8fafc" },
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "story-layout",
						children: [/* @__PURE__ */ jsx(ScrollReveal, {
							variant: "fadeLeft",
							children: /* @__PURE__ */ jsxs("div", {
								className: "story-text",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "section-eyebrow",
										children: "Hikayemiz"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "section-title",
										children: "2008'den Bugüne Güçlü Bir Yolculuk"
									}),
									/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "Kutup Grup" }), ", 2008 yılında endüstriyel dağcılık ve iple erişim teknikleri alanında uzmanlaşmış bir ekip tarafından kuruldu. Kuruluşumuzdan bu yana, heyelan, kaya düşmesi ve yüksek yapı çözümleri konusunda Türkiye'nin en güvenilir firmalarından biri haline geldik."] }),
									/* @__PURE__ */ jsx("p", { children: "İlk projelerimizde küçük ölçekli cephe temizleme işleriyle başlayan yolculuğumuz, bugün 500'den fazla büyük ölçekli projeyi başarıyla tamamlamış, sektörün öncü firmalarından biri konumuna ulaşmıştır." }),
									/* @__PURE__ */ jsx("p", { children: "Türkiye'nin dört bir yanında, enerji santrallerinden köprü bakımlarına, tersane işlerinden yüksek bina aydınlatmalarına kadar geniş bir yelpazede hizmet sunuyoruz." })
								]
							})
						}), /* @__PURE__ */ jsx(ScrollReveal, {
							variant: "fadeRight",
							children: /* @__PURE__ */ jsx("div", {
								className: "story-visual",
								children: /* @__PURE__ */ jsxs("div", {
									className: "story-card",
									children: [/* @__PURE__ */ jsx("div", {
										className: "story-card-number",
										children: "15+"
									}), /* @__PURE__ */ jsx("div", {
										className: "story-card-text",
										children: "Yıllık Sektör Deneyimi"
									})]
								})
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
						className: "section-header text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "section-eyebrow",
							children: "Misyon & Vizyon"
						}), /* @__PURE__ */ jsx("h2", {
							className: "section-title",
							children: "Amacımız ve Hedefimiz"
						})]
					}) }), /* @__PURE__ */ jsxs("div", {
						className: "mv-grid",
						children: [/* @__PURE__ */ jsx(ScrollReveal, {
							variant: "fadeLeft",
							children: /* @__PURE__ */ jsxs("div", {
								className: "mv-card mission",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "mv-icon-wrapper",
										children: /* @__PURE__ */ jsx(TargetIcon, {})
									}),
									/* @__PURE__ */ jsx("h3", { children: "Misyonumuz" }),
									/* @__PURE__ */ jsx("p", { children: "Endüstriyel dağcılık ve jeoteknik uygulamalar alanında, uluslararası standartlara uygun, güvenli ve kaliteli hizmet sunarak müşterilerimizin ihtiyaçlarına en uygun çözümleri üretmek." })
								]
							})
						}), /* @__PURE__ */ jsx(ScrollReveal, {
							variant: "fadeRight",
							children: /* @__PURE__ */ jsxs("div", {
								className: "mv-card vision",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "mv-icon-wrapper",
										children: /* @__PURE__ */ jsx(RocketIcon, {})
									}),
									/* @__PURE__ */ jsx("h3", { children: "Vizyonumuz" }),
									/* @__PURE__ */ jsx("p", { children: "Türkiye ve bölge ülkelerinde endüstriyel dağcılık ve jeoteknik çözümler alanında lider konumunu pekiştirerek, global standartlarda hizmet sunan bir organizasyon olmak." })
								]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "section dot-grid",
				style: { background: "#f8fafc" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
						className: "section-header text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "section-eyebrow",
							children: "Değerlerimiz"
						}), /* @__PURE__ */ jsx("h2", {
							className: "section-title",
							children: "Temel Değerlerimiz"
						})]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "values-grid",
						children: values.map((value, index) => /* @__PURE__ */ jsx(ScrollReveal, {
							variant: "fadeUp",
							delay: index * 80,
							children: /* @__PURE__ */ jsxs("div", {
								className: "value-card",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "value-icon",
										style: {
											background: value.bg,
											color: value.color
										},
										children: value.icon
									}),
									/* @__PURE__ */ jsx("h3", { children: value.title }),
									/* @__PURE__ */ jsx("p", { children: value.description })
								]
							})
						}, index))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "section",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [/* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", {
						className: "section-header text-center",
						children: [/* @__PURE__ */ jsx("p", {
							className: "section-eyebrow",
							children: "Sertifikalar"
						}), /* @__PURE__ */ jsx("h2", {
							className: "section-title",
							children: "Sertifikalar & Standartlar"
						})]
					}) }), /* @__PURE__ */ jsx("div", {
						className: "cert-grid",
						children: certifications.map((cert, index) => /* @__PURE__ */ jsx(ScrollReveal, {
							variant: "scaleIn",
							delay: index * 60,
							children: /* @__PURE__ */ jsxs("div", {
								className: "cert-item",
								children: [/* @__PURE__ */ jsxs("svg", {
									width: "20",
									height: "20",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									style: { color: "#10B981" },
									children: [/* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })]
								}), /* @__PURE__ */ jsx("span", { children: cert })]
							})
						}, index))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cta-section",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						variant: "scaleIn",
						children: /* @__PURE__ */ jsxs("div", {
							className: "cta-inner",
							children: [
								/* @__PURE__ */ jsx("h2", { children: "Bizimle Çalışmaya Hazır Mısınız?" }),
								/* @__PURE__ */ jsx("p", { children: "Projeleriniz için profesyonel çözümler sunmaya hazırız." }),
								/* @__PURE__ */ jsxs("div", {
									className: "cta-buttons",
									children: [/* @__PURE__ */ jsxs(Link$1, {
										href: "/iletisim",
										className: "btn btn-cta",
										children: ["İletişime Geçin", /* @__PURE__ */ jsxs("svg", {
											width: "18",
											height: "18",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2",
											children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
										})]
									}), /* @__PURE__ */ jsx(Link$1, {
										href: "/referanslar",
										className: "btn btn-secondary-light",
										children: "Referanslarımız"
									})]
								})
							]
						})
					})
				})
			})
		] }),
		/* @__PURE__ */ jsx(Footer, {}),
		/* @__PURE__ */ jsx("style", {
			jsx: true,
			children: `
                /* Hero */
                .about-hero {
                    position: relative;
                    padding: 160px 0 80px;
                    background: linear-gradient(135deg, #0A2463 0%, #1e3a8a 60%, #3E92CC 100%);
                    overflow: hidden;
                    text-align: center;
                }
                .hero-grid-bg {
                    position: absolute; inset: 0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
                    background-size: 28px 28px;
                }
                .hero-content { position: relative; z-index: 1; }
                .hero-eyebrow {
                    font-size: 0.85rem; font-weight: 700; text-transform: uppercase;
                    letter-spacing: 0.15em; color: var(--color-ice-blue); margin-bottom: var(--spacing-3);
                }
                .about-hero h1 {
                    font-size: clamp(2.25rem, 5vw, 3.5rem); color: white;
                    letter-spacing: -0.02em; margin-bottom: var(--spacing-4);
                }
                .hero-subtitle { font-size: var(--font-size-lg); color: rgba(255,255,255,0.75); max-width: 560px; margin: 0 auto; }

                /* Shared */
                .section-header { margin-bottom: var(--spacing-12); }
                .section-eyebrow {
                    font-size: var(--font-size-sm); font-weight: 700; text-transform: uppercase;
                    letter-spacing: 0.1em; color: var(--color-arctic-blue); margin-bottom: var(--spacing-2);
                }
                .section-title { font-size: var(--font-size-h2); color: var(--color-deep-navy); letter-spacing: -0.02em; }
                .text-center { text-align: center; }

                /* Stats Bar */
                .stats-bar { padding: var(--spacing-12) 0; background: white; border-bottom: 1px solid var(--border-default); }
                .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--spacing-6); }
                .stat-item { text-align: center; }
                .stat-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-3); }
                .stat-value { font-size: var(--font-size-h3); font-weight: 800; color: var(--color-deep-navy); font-family: var(--font-heading); }
                .stat-label { font-size: var(--font-size-sm); color: var(--text-muted); font-weight: 500; }

                /* Story */
                .story-layout { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: var(--spacing-12); align-items: center; }
                .story-text h2 { margin-bottom: var(--spacing-6); }
                .story-text p { color: var(--text-secondary); line-height: var(--line-height-relaxed); }
                .story-visual { display: flex; justify-content: center; }
                .story-card {
                    background: var(--gradient-primary); border-radius: var(--radius-xl);
                    padding: var(--spacing-12) var(--spacing-8); text-align: center; color: white; width: 280px;
                }
                .story-card-number { font-size: 4rem; font-weight: 800; font-family: var(--font-heading); line-height: 1; margin-bottom: var(--spacing-2); }
                .story-card-text { font-size: var(--font-size-lg); opacity: 0.85; }

                /* Mission & Vision */
                .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-8); }
                .mv-card {
                    background: white; border-radius: var(--radius-lg); padding: var(--spacing-10);
                    border: 1px solid var(--border-default); transition: all 0.35s ease; position: relative; overflow: hidden;
                }
                .mv-card::before {
                    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
                    background: var(--gradient-primary); transform: scaleX(0); transform-origin: left;
                    transition: transform 0.4s ease;
                }
                .mv-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(10,36,99,0.1); }
                .mv-card:hover::before { transform: scaleX(1); }
                .mv-icon-wrapper {
                    width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center;
                    margin-bottom: var(--spacing-5);
                }
                .mission .mv-icon-wrapper { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
                .vision .mv-icon-wrapper { background: rgba(139, 92, 246, 0.1); color: #8B5CF6; }
                .mv-card h3 { font-size: var(--font-size-h4); color: var(--color-deep-navy); margin-bottom: var(--spacing-4); }
                .mv-card p { color: var(--text-secondary); line-height: var(--line-height-relaxed); margin: 0; }

                /* Values */
                .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-6); }
                .value-card {
                    background: white; border-radius: var(--radius-lg); padding: var(--spacing-8) var(--spacing-6);
                    border: 1px solid var(--border-default); transition: all 0.35s ease; text-align: center;
                }
                .value-card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px rgba(10,36,99,0.1); }
                .value-icon { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-4); }
                .value-card h3 { font-size: var(--font-size-h5); color: var(--color-deep-navy); margin-bottom: var(--spacing-3); }
                .value-card p { color: var(--text-secondary); line-height: var(--line-height-relaxed); margin: 0; font-size: var(--font-size-sm); }

                /* Certifications */
                .cert-grid { display: flex; flex-wrap: wrap; gap: var(--spacing-4); justify-content: center; }
                .cert-item {
                    display: flex; align-items: center; gap: var(--spacing-2);
                    padding: var(--spacing-3) var(--spacing-5); background: white;
                    border: 1px solid var(--border-default); border-radius: var(--radius-full);
                    font-size: var(--font-size-sm); font-weight: 600; color: var(--color-deep-navy);
                    transition: all 0.3s ease;
                }
                .cert-item:hover { border-color: var(--color-arctic-blue); box-shadow: 0 4px 12px rgba(62,146,204,0.15); transform: translateY(-2px); }

                /* CTA */
                .cta-section { background: var(--gradient-primary); padding: var(--spacing-24) 0; text-align: center; position: relative; overflow: hidden; }
                .cta-inner { position: relative; z-index: 1; }
                .cta-inner h2 { color: white; font-size: var(--font-size-h2); margin-bottom: var(--spacing-4); }
                .cta-inner p { color: rgba(255,255,255,0.85); font-size: var(--font-size-lg); margin-bottom: var(--spacing-8); }
                .cta-buttons { display: flex; gap: var(--spacing-4); justify-content: center; flex-wrap: wrap; }
                .btn-secondary-light {
                    display: inline-flex; align-items: center; gap: var(--spacing-2);
                    background: transparent; color: white; border: 2px solid rgba(255,255,255,0.5);
                    padding: var(--spacing-4) var(--spacing-8); border-radius: var(--radius-md);
                    font-weight: 600; font-family: var(--font-heading); text-decoration: none; transition: all 0.3s ease;
                }
                .btn-secondary-light:hover { background: rgba(255,255,255,0.15); border-color: white; color: white; }

                @media (max-width: 768px) {
                    .stats-grid { grid-template-columns: repeat(2, 1fr); }
                    .story-layout { grid-template-columns: 1fr; }
                    .mv-grid { grid-template-columns: 1fr; }
                    .values-grid { grid-template-columns: 1fr; }
                    .about-hero { padding: 130px 0 60px; }
                    .cta-buttons { flex-direction: column; align-items: center; }
                }
            `
		})
	] });
}
//#endregion
//#region src/lib/services-data.ts
var services_data_exports = /* @__PURE__ */ __exportAll({ SERVICES_DATA: () => SERVICES_DATA });
var SERVICES_DATA = {
	"dis-cephe-dekoratif-aydinlatma": {
		slug: "dis-cephe-dekoratif-aydinlatma",
		title: "Dış Cephe Dekoratif Aydınlatma",
		metaDescription: "Yüksek yapılar için profesyonel dış cephe dekoratif aydınlatma hizmetleri. İple erişim teknikleri ile güvenli ve estetik aydınlatma çözümleri.",
		keywords: [
			"dış cephe aydınlatma",
			"dekoratif aydınlatma",
			"yüksek yapı aydınlatma",
			"iple erişim aydınlatma",
			"bina cephesi aydınlatma"
		],
		category: "endustriyel",
		icon: "💡",
		heroImage: "/services/dis-cephe-aydinlatma.png",
		intro: "Yüksek yapılarınıza modern ve estetik aydınlatma çözümleri sunuyoruz. İple erişim teknikleri kullanarak güvenli bir şekilde en zor noktalara ulaşıyor, binanızın mimarisini öne çıkaran aydınlatma sistemleri kuruyoruz.",
		sections: [
			{
				heading: "Dış Cephe Aydınlatma Nedir?",
				content: "Dış cephe dekoratif aydınlatma, binaların dış yüzeylerinde estetik ve işlevsel amaçlarla kullanılan profesyonel aydınlatma sistemleridir. Modern mimari yapılarda, binaların gece görüntüsünü iyileştirmek, marka kimliğini vurgulamak ve çevreye estetik değer katmak amacıyla kullanılır. Kutup Grup olarak, yüksek yapılarda iple erişim teknikleri kullanarak güvenli ve profesyonel dış cephe aydınlatma hizmetleri sunuyoruz.\n\nDış cephe aydınlatması, sadece estetik bir unsur değil, aynı zamanda binanın değerini artıran, gece güvenliğini sağlayan ve mimari özellikleri vurgulayan önemli bir yatırımdır. LED teknolojisi sayesinde enerji tasarruflu ve uzun ömürlü çözümler sunarak, işletmelerin ve bina sahiplerinin hem estetik hem de ekonomik beklentilerini karşılıyoruz."
			},
			{
				heading: "Hizmet Kapsamımız",
				content: "Dış cephe aydınlatma hizmetlerimiz geniş bir yelpazede sunulmaktadır. Modern LED aydınlatma sistemleri, RGB renkli aydınlatma çözümleri, dinamik aydınlatma senaryoları, akıllı kontrol sistemleri ve enerji tasarruflu çözümler sunuyoruz. Her proje için özel tasarım yapıyor, binanın mimarisine uygun aydınlatma planları geliştiriyoruz.\n\nYüksek yapılarda çalışırken, iple erişim teknisyenlerimiz en yüksek güvenlik standartlarına uyarak çalışır. IRATA ve SPRAT sertifikalı ekibimiz, her türlü yükseklikte güvenli ve hızlı çözümler sunar. Aydınlatma sistemlerinin montajından bakım ve onarımına kadar tüm süreçleri yönetiyoruz."
			},
			{
				heading: "LED Teknolojisi ve Enerji Verimliliği",
				content: "Modern dış cephe aydınlatmalarında LED teknolojisini tercih ediyoruz. LED aydınlatma sistemleri, geleneksel aydınlatma yöntemlerine göre %80'e varan enerji tasarrufu sağlar. Uzun ömürlü olmaları (50.000+ saat) sayesinde bakım maliyetlerini minimuma indirir. Ayrıca, LED sistemler çevre dostu olup, zararlı madde içermez.\n\nRGB LED teknolojisi ile binalarınızı istediğiniz renkte aydınlatabilir, özel günlerde veya etkinliklerde farklı renk senaryoları oluşturabilirsiniz. Akıllı kontrol sistemleri sayesinde aydınlatmayı uzaktan yönetebilir, zamanlama yapabilir ve enerji tüketimini optimize edebilirsiniz. Bu teknoloji, hem işlevsellik hem de maliyet tasarrufu açısından ideal bir çözümdür."
			},
			{
				heading: "İple Erişim Teknikleri ile Avantajlar",
				content: "Geleneksel iskele veya vinç kullanımına göre iple erişim teknikleri birçok avantaj sunar. İskele kurulumuna gerek olmadığı için maliyet %30-50 oranında düşer. Çalışma süresi kısalır ve trafik veya iş akışı kesintisi minimize edilir. Dar ve ulaşılması zor alanlarda bile güvenli çalışma imkanı sağlar.\n\nİple erişim yöntemi, binanın cephesine zarar vermeden çalışma imkanı tanır. Hafif ekipmanlar kullanıldığı için yapıya yük bindirmez. Sertifikalı teknisyenlerimiz, en yüksek güvenlik standartlarına uyarak her türlü hava koşulunda çalışabilir. Bu yöntem, hem hızlı hem de güvenli bir çözüm sunar."
			},
			{
				heading: "Proje Yönetimi ve Özel Tasarım",
				content: "Her dış cephe aydınlatma projesi benzersizdir ve özel bir yaklaşım gerektirir. Kutup Grup olarak, projenizin başlangıcından tamamlanmasına kadar her aşamada yanınızdayız. İlk adım, binanın mimari analizi ve aydınlatma ihtiyaçlarının belirlenmesidir. Daha sonra, 3D görselleştirme ve simülasyon ile tasarımı sizinle paylaşıyoruz.\n\nProje yönetimi sürecinde, kaliteli malzeme seçimi, profesyonel montaj, test ve devreye alma aşamalarını titizlikle yürütüyoruz. Tüm sistemler garanti kapsamında olup, düzenli bakım ve teknik destek sunuyoruz. Projelerimizde, müşteri memnuniyeti ve kalite bizim önceliğimizdir."
			},
			{
				heading: "Bakım ve Onarım Hizmetleri",
				content: "Dış cephe aydınlatma sistemlerinin uzun ömürlü ve verimli çalışması için düzenli bakım esastır. Kutup Grup olarak, kurulum sonrası sürekli destek ve bakım hizmetleri sunuyoruz. LED armatürlerin kontrolü, kablo bağlantılarının incelenmesi, kontrol sistemlerinin test edilmesi ve temizlik işlemlerini periyodik olarak gerçekleştiriyoruz.\n\nArıza durumlarında 7/24 acil müdahale ekibimiz hizmete hazırdır. İple erişim teknikleri sayesinde hızlı müdahale edebilir, en kısa sürede sistemi yeniden aktif hale getirebiliriz. Yedek parça stokumuz ile kesintisiz hizmet garantisi veriyoruz."
			}
		],
		advantages: [
			"Enerji tasarruflu LED teknolojisi kullanımı",
			"İskele kurulumu gerektirmeden hızlı montaj",
			"Uzun ömürlü ve düşük bakım maliyeti",
			"Akıllı kontrol sistemleri ile uzaktan yönetim",
			"Çevre dostu ve sürdürülebilir çözümler",
			"Mimari estetiği öne çıkaran özel tasarım",
			"7/24 teknik destek ve acil müdahale",
			"IRATA/SPRAT sertifikalı profesyonel ekip"
		],
		applications: [
			"Ofis binaları ve plazalar",
			"Alışveriş merkezleri",
			"Oteller ve rezidanslar",
			"Köprüler ve alt geçitler",
			"Tarihi yapılar ve anıtlar",
			"Stadyumlar ve spor tesisleri",
			"Endüstriyel tesisler ve fabrikalar",
			"Kamu binaları ve belediye tesisleri"
		],
		technicalDetails: [
			"LED teknolojisi: 50.000+ saat ömür, %80 enerji tasarrufu",
			"RGB renkli aydınlatma: 16 milyon renk seçeneği",
			"IP65/IP67 koruma sınıfı: Su ve toz geçirmez",
			"DMX512 kontrol protokolü: Profesyonel ışık yönetimi",
			"Akıllı sistemler: Zamanlama, sensör entegrasyonu",
			"Montaj: İple erişim teknikleri, güvenli ve hızlı",
			"Garanti: 5 yıl ürün garantisi, 2 yıl işçilik garantisi",
			"Sertifikalar: CE, RoHS, ISO 9001 uyumlu"
		],
		whyChooseUs: [
			"15+ yıl dış cephe aydınlatma deneyimi",
			"500+ başarıyla tamamlanmış proje portföyü",
			"IRATA Level 3 sertifikalı baş teknisyenler",
			"Türkiye'nin dört bir yanında hizmet ağı",
			"Garantili işçilik ve kaliteli malzeme kullanımı",
			"Profesyonel proje yönetimi ve 3D tasarım",
			"Rekabetçi fiyatlar ve esnek ödeme seçenekleri",
			"Müşteri memnuniyeti odaklı hizmet anlayışı"
		],
		faqs: [
			{
				question: "Dış cephe aydınlatma maliyeti ne kadardır?",
				answer: "Maliyet, binanın yüksekliği, cephe alanı, kullanılacak LED sayısı ve özel tasarım gereksinimlerine göre değişir. Ortalama bir ofis binası için m² başına 150-300 TL arası değişebilir. Ücretsiz keşif ve teklif için bizimle iletişime geçebilirsiniz."
			},
			{
				question: "Montaj süresi ne kadardır?",
				answer: "İple erişim teknikleri sayesinde, orta ölçekli bir bina (20-30 kat) için montaj süresi 5-10 gün arasındadır. İskele kurulumu gerektirmediği için süre önemli ölçüde kısalır."
			},
			{
				question: "LED aydınlatma sistemleri ne kadar dayanıklıdır?",
				answer: "Kullandığımız profesyonel LED sistemler 50.000 saatten fazla ömre sahiptir. Bu, günde 12 saat kullanımda yaklaşık 11 yıl kesintisiz çalışma demektir. Garanti süremiz 5 yıldır."
			},
			{
				question: "Enerji tüketimi ne kadardır?",
				answer: "LED teknolojisi sayesinde, geleneksel aydınlatmaya göre %80 daha az enerji tüketimi sağlanır. Akıllı kontrol sistemleri ile tüketim daha da optimize edilebilir."
			},
			{
				question: "Bakım gereksinimi var mıdır?",
				answer: "LED sistemler minimum bakım gerektirir. Yılda bir kez genel kontrol ve temizlik önerilir. Kutup Grup olarak, periyodik bakım hizmeti sunuyoruz."
			}
		],
		relatedServices: [
			"ic-ve-dis-cephe-temizlik-hizmetleri",
			"yatay-ve-dusey-yasam-hatti",
			"guvenlik-agi-kurulumu"
		]
	},
	"tersane-ve-offshore-hizmetleri": {
		slug: "tersane-ve-offshore-hizmetleri",
		title: "Tersane ve Offshore Hizmetleri",
		metaDescription: "Tersaneler ve offshore platformlar için profesyonel iple erişim hizmetleri. Gemi inşa, bakım, onarım, boya, kaynak ve muayene işlemlerinde uzman ekip.",
		keywords: [
			"tersane hizmetleri",
			"offshore hizmetleri",
			"gemi bakım",
			"iple erişim tersane",
			"deniz platformu bakım"
		],
		category: "endustriyel",
		icon: "⚓",
		heroImage: "/services/tersane-offshore.png",
		intro: "Tersaneler ve offshore platformlarda iple erişim teknikleri kullanarak kapsamlı hizmetler sunuyoruz. Gemi inşa, bakım, onarım, boya, kaynak, muayene ve temizlik işlemlerinde deneyimli ekibimiz ile güvenli çözüm ortağınızız.",
		sections: [{
			heading: "Tersane ve Offshore Hizmetleri",
			content: "Gemi inşa sektörü ve deniz platformlarında gerçekleştirilen özel teknik işlemleri kapsar. IRATA ve SPRAT sertifikalı ekibimiz ile tersane ve offshore sektöründe güvenli ve profesyonel hizmetler sunuyoruz. İple erişim teknikleri, iskele kurulumu gerektirmeden hızlı ve güvenli çalışma imkanı sağlar."
		}],
		advantages: [
			"İskele ve vinç kullanımına gerek yok",
			"%40-60 maliyet tasarrufu",
			"Hızlı proje tamamlama süresi"
		],
		applications: ["Tersaneler", "Offshore platformlar"],
		technicalDetails: ["IRATA Level 3", "NDT sertifikaları"],
		whyChooseUs: ["10+ yıl deneyim", "Sertifikalı ekip"],
		faqs: [],
		relatedServices: ["guvenlik-agi-kurulumu"]
	},
	"ic-ve-dis-cephe-temizlik-hizmetleri": {
		slug: "ic-ve-dis-cephe-temizlik-hizmetleri",
		title: "İç ve Dış Cephe Temizlik Hizmetleri",
		metaDescription: "Yüksek yapılarda profesyonel iç ve dış cephe temizlik hizmetleri. Cam temizliği, gökdelen yıkama, saf su teknolojisi ve atrium temizliği.",
		keywords: [
			"cephe temizliği",
			"yüksek yapı temizliği",
			"cam temizliği",
			"gökdelen cam temizleme",
			"saf su cam yıkama"
		],
		category: "endustriyel",
		icon: "✨",
		heroImage: "/services/cephe-temizlik.png",
		intro: "Yüksek yapılarda, gökdelenlerde ve plazalarda profesyonel iç ve dış cephe temizlik hizmetleri sunuyoruz. Klasik vinç ve iskele yöntemlerinin ulaşamadığı sarp cephelerde, IRATA ve SPRAT sertifikalı endüstriyel dağcı ekibimizle, iş güvenliğinden taviz vermeden lekesiz, ekolojik ve kalıcı çözümler üretiyoruz.",
		sections: [
			{
				heading: "Dış Cephe Temizliği ve Cam Yıkama",
				content: "Yüksek katlı binaların dış cephe camları ve kompozit panelleri, zamanla hava kirliliği, asit yağmurları ve toz nedeniyle yıpranır ve kirlenir. Bu kirlilik sadece kötü bir görünüme neden olmakla kalmaz, aynı zamanda cam yüzeyinde kalıcı korozyona (cam yanması) yol açar. İple erişim yöntemlerimizle, bina yapısına zarar vermeden her noktaya ulaşıyor; özel arıtılmış (deiyonize saf su) sistemlerimizle durulama gerektirmeden, lekesiz temizlik sağlıyoruz."
			},
			{
				heading: "Ekolojik Temizlik ve Saf Su Teknolojisi",
				content: "Çevre dostu ve sürdürülebilir temizlik ilkemiz doğrultusunda, kimyasal deterjanlar yerine %100 saf su teknolojisini kullanıyoruz. Saf su, minerallerinden arındırıldığı için doğal bir çözücü görevi görür; kir, toz ve yağ parçacıklarını mıknatıs gibi çekerek cam ve kompozit yüzeyleri pürüzsüzleştirir. Kimyasal kalıntı bırakmadığı için cepheler daha geç kirlenir ve çevreye sıfır zarar verilir."
			},
			{
				heading: "İç Cephe Galeri ve Atrium Temizliği",
				content: "AVM'ler, oteller, plazalar ve iş merkezlerinin iç mekanlarında yer alan yüksek tavanlı atriumlar, galeri boşlukları, cam asansör kuyuları ve dekoratif aydınlatma armatürlerinin temizliği özel ekipman gerektirir. Endüstriyel dağcılarımız, iç mekan zeminlerine ağır platform yükü bindirmeden, yukarıdan sarkarak bu zorlu alanların temizliğini ve toz alımını hızlıca gerçekleştirir."
			}
		],
		advantages: [
			"İskele ve vinç maliyetlerine kıyasla %40-60 oranında bütçe tasarrufu",
			"Kurulum süresi olmadığı için işe anında başlama ve hızlı teslimat",
			"Sıfır zemin işgali ile bina giriş-çıkış trafiğini ve iş akışını engellememe",
			"Ekolojik saf su teknolojisi sayesinde lekesiz ve daha geç kirlenen camlar",
			"Vinçlerin ulaşamadığı dar açılı, eğimli veya girintili mimari cephelerde %100 erişim",
			"Ağır iş makineleri kullanılmadığı için çevreye ve bina peyzajına sıfır zarar"
		],
		applications: [
			"Plazalar, gökdelenler ve yüksek katlı iş merkezleri",
			"Alışveriş merkezleri (AVM) dış cephe ve iç atrium alanları",
			"Oteller, hastaneler ve kamu binaları",
			"Endüstriyel fabrikalar, depolar ve silo dış yüzeyleri",
			"Tarihi yapılar, müzeler ve hassas cam kubbeli mimariler",
			"Cam asansör kuyuları ve yüksek tavanlı iç mekan galerileri"
		],
		technicalDetails: [
			"Deiyonize Saf Su Üretim Cihazları: 0 PPM mineral seviyesinde saf su kullanımı",
			"Karbon Fiber Teleskopik Uzatma Sistemleri: 20 metreye kadar teleskopik yıkama barları",
			"Emniyet Sistemleri: EN 1891 Type A statik ipler ve EN 12841 emniyet araçları",
			"Özel Temizlik Kimyasalları: PH nötr, biyolojik olarak parçalanabilir çevre dostu şampuanlar",
			"Cam Kazıma ve Kireç Sökücüler: Cepheye zarar vermeyen özel cam kazıma aparatları"
		],
		whyChooseUs: [
			"İple erişimde uluslararası geçerli IRATA ve SPRAT Level 3 lider teknisyen gözetimi",
			"Yüksekte çalışma güvenliğinde sıfır kaza (zero-accident) kurumsal geçmişi",
			"Binanızın yapısal özelliklerine özel statik analiz ve risk değerlendirme planı",
			"Çevre dostu yeşil temizlik standartlarına uygun teknolojik altyapı",
			"Tüm temizlik operasyonları süresince 3. şahıs mali mesuliyet sigorta güvencesi"
		],
		faqs: [
			{
				question: "Dış cephe cam temizliği hangi sıklıkla yapılmalıdır?",
				answer: "Çevresel etkenlere ve binanın konumuna bağlı olarak yılda en az 2 veya 4 kez temizlik yapılması önerilir. Sanayi bölgelerindeki ve yoğun trafikli caddelerdeki binaların cepheleri daha sık temizlenmelidir."
			},
			{
				question: "Saf su ile temizlik neden daha etkilidir?",
				answer: "Saf su, cam üzerinde leke bırakan kalsiyum, magnezyum gibi minerallerden tamamen arındırılmıştır. Yıkama sonrası cam kendi kendine kururken üzerinde hiçbir leke, dalgalanma veya deterjan kalıntısı kalmaz. Bu da camların daha geç kirlenmesini sağlar."
			},
			{
				question: "İple erişim temizliği sırasında bina sakinleri rahatsız olur mu?",
				answer: "Hayır. İskele kurulumu gibi gürültülü veya vinçler gibi bina girişini kapatan işlemler olmadığı için günlük iş akışınız veya yaşam alanınız kesintiye uğramaz. Ekiplerimiz son derece sessiz ve hızlı çalışır."
			},
			{
				question: "Hava koşulları çalışmayı nasıl etkiler?",
				answer: "Aşırı rüzgar (20 knot ve üzeri), şiddetli yağmur veya buzlanma durumlarında iş güvenliği standartlarımız gereği operasyon ertelenir. Uygun hava koşulları oluştuğunda çalışma hızla tamamlanır."
			}
		],
		relatedServices: [
			"dis-cephe-dekoratif-aydinlatma",
			"yatay-ve-dusey-yasam-hatti",
			"guvenlik-agi-kurulumu"
		]
	},
	"guvenlik-agi-kurulumu": {
		slug: "guvenlik-agi-kurulumu",
		title: "Güvenlik Ağı Kurulumu",
		metaDescription: "İş güvenliği için profesyonel güvenlik ağı kurulum hizmetleri. Kalıcı ve geçici güvenlik ağı sistemleri, yüksekten düşme koruması ve iş kazası önleme çözümleri.",
		keywords: [
			"güvenlik ağı",
			"yüksekten düşme koruması",
			"iş güvenliği ağı",
			"emniyet ağı",
			"yapı güvenlik ağı"
		],
		category: "endustriyel",
		icon: "🛡️",
		heroImage: "/services/yasam-hatti.png",
		intro: "Yüksekte çalışmalarda can güvenliği için profesyonel güvenlik ağı kurulumu yapıyoruz. Kalıcı ve geçici sistemler ile iş kazalarını önlüyor, çalışan güvenliğini maksimize ediyoruz.",
		sections: [{
			heading: "Güvenlik Ağı Nedir ve Neden Gereklidir?",
			content: "Güvenlik ağları, yüksekte çalışan personelin yüksekten düşme riskine karşı korunması için kullanılan hayat kurtarıcı sistemlerdir. İnşaat şantiyeleri, endüstriyel tesisler, otopark rampları, stadyumlar ve yüksek yapılarda zorunlu iş güvenliği önlemidir. 6331 sayılı İSG Kanunu ve Yüksekte Çalışma Yönetmeliği uyarınca, 2 metreden yüksek çalışmalarda düşme koruması sağlanması zorunludur. Güvenlik ağları, düşme durumunda çalışanın yaralanmasını önler veya minimuma indirir. İstatistiklere göre inşaat sektöründeki ölümlü iş kazalarının %40'ı yüksekten düşme sonucu gerçekleşmektedir. Profesyonelce kurulmuş güvenlik ağları, bu riski neredeyse sıfıra indirir."
		}, {
			heading: "Güvenlik Ağı Çeşitleri",
			content: "Geçici güvenlik ağları: İnşaat şantiyelerinde kullanılır, proje bitiminde sökülür. Kalıcı güvenlik ağları: Stadyum tribünleri, otopark rampaları, endüstriyel tesislerde kalıcı olarak monte edilir. Yatay güvenlik ağları: Çatı kenarları, platform kenarlarında yatay olarak gerilerek düşmeyi engeller. Dikey güvenlik ağları: Bina cephelerinde düşeyolarak asılarak moloz ve malzeme düşmesini önler. Açıklık güvenlik ağları: Asansör boşlukları, merdiven boşlukları gibi açıklıkları kapatarak düşmeyi engeller. Her ağ türü, kullanım amacına göre farklı test yüklerine ve özelliklere sahiptir."
		}],
		advantages: [
			"Yüksekten düşme kazalarını %100 önler",
			"TSE, CE sertifikalı malzeme kullanımı",
			"Hızlı kurulum ve söküm imkanı",
			"Kalıcı ve geçici çözüm seçenekleri",
			"İSG mevzuatına tam uyum",
			"Profesyonel montaj ekibi",
			"UV dayanımlı, hava koşullarına dirençli",
			"Maliyet etkin iş güvenliği çözümü"
		],
		applications: [
			"İnşaat şantiyeleri",
			"Endüstriyel tesisler ve fabrikalar",
			"Stadyumlar ve spor tesisleri",
			"Otopark rampaları",
			"Çatı kenarı koruması",
			"Köprü ve viyadük inşaatı",
			"Asansör ve merdiven boşlukları",
			"Yüksek yapı bakım ve onarımı"
		],
		technicalDetails: [
			"Malzeme: PE (Polyethylene) veya PP (Polypropylene) ağ",
			"Göz açıklığı: 45mm, 60mm, 100mm seçenekleri",
			"Test yükü: 500-1000 kg/m² (EN 1263 standardı)",
			"UV dayanımlı, hava koşullarına dirençli",
			"Kenar ipi: 8-12mm polyester veya polipropilen",
			"Sertifikalar: TSE, CE, ISO 9001 uyumlu",
			"Montaj: Çelik kablo veya ankraj sistemleri ile",
			"Garanti: 2 yıl malzeme garantisi"
		],
		whyChooseUs: [
			"15+ yıl güvenlik ağı kurulum deneyimi",
			"Sertifikalı malzeme garantisi",
			"Hızlı ve profesyonel montaj",
			"Rekabetçi fiyatlandırma",
			"İSG uzmanı danışmanlık desteği",
			"Periyodik kontrol ve bakım hizmeti",
			"7/24 acil kurulum hizmeti",
			"Proje bazlı özel çözümler"
		],
		faqs: [
			{
				question: "Güvenlik ağı kurulumu zorunlu mudur?",
				answer: "Evet, 6331 sayılı İSG Kanunu ve Yüksekte Çalışma Yönetmeliği gereği 2 metreden yüksek çalışmalarda düşme koruması sağlanması zorunludur. İş müfettişleri tarafından kontrol edilir ve eksiklik durumunda idari para cezası uygulanır. Kazalarda işveren cezai sorumluluk taşır."
			},
			{
				question: "Güvenlik ağı ne kadar süre dayanır?",
				answer: "Kaliteli PE güvenlik ağları, dış mekanda UV dayanımlı olup 3-5 yıl kullanılabilir. İç mekanlarda ömür daha uzundur. Düzenli kontrol ve bakım ile ömür uzatılabilir. Yıpranma, yırtık varsa derhal değiştirilmelidir."
			},
			{
				question: "Kurulum ne kadar sürer?",
				answer: "Orta ölçekli bir inşaat şantiyesi için 500-1000 m² ağ kurulumu 1-2 gün sürer. Ekip sayısı ve saha koşullarına göre süre değişebilir. Acil durumlarda aynı gün kurulum yapılabilir."
			}
		],
		relatedServices: [
			"yatay-ve-dusey-yasam-hatti",
			"tersane-ve-offshore-hizmetleri",
			"dis-cephe-dekoratif-aydinlatma"
		]
	},
	"yatay-ve-dusey-yasam-hatti": {
		slug: "yatay-ve-dusey-yasam-hatti",
		title: "Yatay ve Düşey Yaşam Hattı Sistemleri",
		metaDescription: "Yüksekte çalışan personel için yaşam hattı sistemleri kurulumu. Yatay yaşam hattı, düşey yaşam hattı, sabit hat ve mobil hat çözümleri ile can güvenliği.",
		keywords: [
			"yaşam hattı",
			"yatay yaşam hattı",
			"düşey yaşam hattı",
			"lifeline",
			"fall protection",
			"düşme koruması"
		],
		category: "endustriyel",
		heroImage: "/services/guvenlik-agi.png",
		icon: "🔗",
		intro: "Yüksekte çalışan personelin can güvenliği için profesyonel yaşam hattı sistemleri kuruyoruz. Yatay, düşey, sabit ve mobil yaşam hatları ile tam koruma sağlıyoruz.",
		sections: [{
			heading: "Yaşam Hattı Sistemleri Nedir?",
			content: "Yaşam hattı, yüksekte çalışan kişinin emniyet kemerinin bağlandığı, düşme durumunda can güvenliğini sağlayan sabit veya mobil kablo/ray sistemleridir. Çatılarda, platform kenarlarında, bakım yollarında, merdiven boşluklarında ve her türlü yüksekte çalışma alanında kullanılır. EN 795 standardına uygun olarak tasarlanan yaşam hatları, kişinin düşme mesafesini minimize eder ve düşme durdurma kuvvetini güvenli seviyelerde tutar. Sistem, ankraj noktaları, yaşam hattı kablosu, kaydırıcı (runner) ve emniyet kemerinden oluşur. Çalışan, emniyet kemerindeki şok emici kordon ile yaşam hattına bağlanır, böylece düşme durumunda sistem devreye girer."
		}, {
			heading: "Yaşam Hattı Türleri ve Kullanım Alanları",
			content: "Yatay yaşam hattı: Çatı kenarları, köprü bakımı, çelik konstrüksiyon montajı gibi yatay hareketli çalışmalarda kullanılır. Kablo veya ray üzerinde hareket eder. Düşey yaşam hattı: Merdiven koruması, baca içi çalışmaları, silo girişi gibi dikey hareketlerde kullanılır. Yukarı-aşağı hareket imkanı sağlar. Sabit ray sistemi: Endüstriyel tesislerde sürekli kullanım için kalıcı kurulur. Alüminyum veya çelik raydan oluşur. Mobil yaşam hattı: Geçici çalışmalar için taşınabilir üçayak veya ağırlık bloklu sistemler. Esnek kullanım sağlar. Her sistem, kullanım amacına göre statik hesap ile boyutlandırılır ve güvenli kullanım sağlanır."
		}],
		advantages: [
			"EN 795 standardına tam uyumlu sistemler",
			"Paslanmaz çelik (AISI 316) ve galvaniz seçenekleri",
			"Ömür boyu garanti (paslanmaz çelik)",
			"Kolay kullanım, minimal eğitim gereksinimi",
			"Profesyonel proje ve statik hesaplama",
			"Her türlü yapıya uygun çözümler",
			"Bakım gereksinimleri minimal",
			"CE sertifikalı malzeme"
		],
		applications: [
			"Çatı kenarı ve teras koruması",
			"Endüstriyel tesisler ve fabrikalar",
			"Köprü ve viyadük bakım çalışmaları",
			"Silo ve tank bakımı",
			"Baca ve kule çıkışları",
			"Uçak hangarları ve havalimanları",
			"Enerji santralleri",
			"Merdiven ve platform koruması"
		],
		technicalDetails: [
			"Malzeme: Paslanmaz çelik AISI 316 / Galvaniz çelik",
			"Kablo çapı: 8mm, 10mm, 12mm seçenekleri",
			"Test yükü: 10-15 kN (EN 795 Tip C/D)",
			"Ankraj noktası aralığı: Her 12-15 metrede",
			"Maksimum kullanıcı: 1-3 kişi (sisteme göre)",
			"Şok emici: Entegre veya harici şok emici",
			"Kurulum: Kimyasal ankraj veya mekanik ankraj",
			"Sertifikalar: CE, EN 795, test raporları"
		],
		whyChooseUs: [
			"Statik hesaplama ve mühendislik desteği",
			"CE sertifikalı, test edilmiş malzeme",
			"Profesyonel montaj ekibi",
			"Kullanıcı eğitimi dahil",
			"Periyodik kontrol ve bakım hizmeti",
			"Kapsamlı dokümantasyon ve raporlama",
			"10+ yıl sistem garantisi (paslanmaz)",
			"Türkiye çapında hizmet ağı"
		],
		faqs: [
			{
				question: "Yaşam hattı ne sıklıkla kontrol edilmelidir?",
				answer: "Yılda en az bir kez yıllık periyodik kontrol yapılmalıdır. Kontrol sonrası rapor düzenlenir ve sistemin güvenli kullanımı garanti edilir. Ayrıca her kullanımdan önce görsel kontrol önerilir."
			},
			{
				question: "Yaşam hattı ve güvenlik ağı arasındaki fark nedir?",
				answer: "Yaşam hattı, kişinin aktif olarak bağlandığı bireysel koruma sistemidir. Güvenlik ağı ise pasif toplu koruma sistemidir. Yaşam hattı daha kontrollü ve güvenlidir, ancak kullanıcı eğitimi gerektirir."
			},
			{
				question: "Yaşam hattı maliyeti ne kadardır?",
				answer: "Maliyet, sistemin türü (yatay/düşey), uzunluğu, malzeme seçimi ve montaj zorluğuna göre değişir. Metre başına 200-500 TL arasında değişmektedir. Ücretsiz keşif ve teklif için iletişime geçebilirsiniz."
			}
		],
		relatedServices: [
			"guvenlik-agi-kurulumu",
			"ic-ve-dis-cephe-temizlik-hizmetleri",
			"ruzgar-enerji-santralleri"
		]
	},
	"jeoteknik-uygulamalar": {
		slug: "jeoteknik-uygulamalar",
		title: "Jeoteknik Uygulamalar",
		metaDescription: "Zorlu arazi ve yamaçlarda kaya bariyeri, şev örtüleme, kaya temizleme ve çığ kontrolü gibi profesyonel jeoteknik mühendislik uygulamaları.",
		keywords: [
			"jeoteknik",
			"şev stabilizasyonu",
			"kaya bariyeri",
			"heyelan önleme",
			"kaya temizleme",
			"yamaç güvenliği"
		],
		category: "jeoteknik",
		heroImage: "/services/yamac-temizleme.png",
		icon: "🏔️",
		intro: "Zorlu arazi şartlarında, yüksek riskli yamaçlarda ve şevlerde kaya düşmesi, heyelan ve çığ risklerine karşı profesyonel jeoteknik çözümler sunuyoruz. İple erişim yöntemlerimizle en sarp yamaçlara dahi ulaşıyor, kalıcı ve geçici güvenlik önlemlerini başarıyla hayata geçiriyoruz.",
		sections: [{
			heading: "Jeoteknik Uygulamalar Nelerdir?",
			content: "Jeoteknik uygulamalar, dik yamaçlar, karayolları kenarları, demiryolu güzergahları ve maden sahaları gibi heyelan ve kaya düşmesi riski taşıyan bölgelerde can ve mal güvenliğini sağlamak amacıyla uygulanan mühendislik çözümleridir. Gevşek kaya bloklarının temizlenmesinden yüksek enerjili kaya bariyerleri kurulumuna, şev yüzeylerinin yüksek mukavemetli çelik tel ağlarla örtülmesinden gabion duvar inşasına kadar geniş bir yelpazede çözümler içerir. Kutup Grup olarak, en dik ve sarp arazilerde dahi iple erişim tekniklerini kullanarak bu uygulamaları sıfır kaza prensibiyle hayata geçiriyoruz."
		}, {
			heading: "Kapsamlı Jeoteknik Çözümlerimiz",
			content: "Jeoteknik güvenlik zincirinin her bir halkasında uzmanlaşmış durumdayız. Yamaç yüzeyindeki tehlikeli blokların kontrollü bir şekilde düşürülmesi (yamaç yüzeyi temizleme), şev yüzeylerinin çelik ağlarla sarılması (şev örtüleme), düşebilecek kaya bloklarının yola veya tesise ulaşmasını engelleyen bariyerler (kaya ve moloz bariyerleri) ve çığ kontrol sistemleri gibi hayati önem taşıyan projeleri projelendirmeden montaja kadar anahtar teslim yürütüyoruz."
		}],
		advantages: [
			"En zorlu ve sarp yamaçlarda iple erişimle güvenli çalışma",
			"Yüksek enerjili dinamik kaya bariyerleri ile %100 koruma",
			"TSE, CE ve uluslararası standartlara uygun sertifikalı malzemeler",
			"Heyelan, kaya düşmesi ve çığ risklerini mini düzeye indiren çözümler",
			"Ulaşılması imkansız görülen dik yamaçlarda hızlı kurulum",
			"Deneyimli ve sertifikalı endüstriyel dağcı mühendis ekibi",
			"Minimum çevresel tahribatla doğa dostu uygulama teknikleri",
			"Uzun ömürlü, korozyona dayanıklı çelik tel ağ ve bariyer sistemleri"
		],
		applications: [
			"Karayolları ve demiryolu güzergahları",
			"Açık ocak maden sahaları ve ocak şevleri",
			"Hes baraj gölleri ve su iletim hatları yamaçları",
			"Tünel portal girişleri ve çıkışları",
			"Yerleşim yerleri arkasındaki dik yamaçlar",
			"Tarihi yapılar ve antik kent yamaç güvenlikleri",
			"Sanayi tesisleri ve fabrika arkası dik şevler",
			"Kayak merkezleri ve dağlık turizm yolları"
		],
		technicalDetails: [
			"Dinamik Kaya Bariyerleri: 100 kJ ile 9000 kJ arası enerji sönümleme kapasitesi",
			"Çelik Tel Ağlar: Çift bükümlü galvanizli / yüksek mukavemetli çelik tel ağ sistemleri",
			"Ankraj Sistemleri: Kendinden delen ibo bulon, halatlı ankraj ve epoksi enjeksiyon ankrajlar",
			"Moloz Bariyerleri: Sel ve heyelan taşıntılarına karşı esnek çelik ağ tasarımları",
			"Şev Örtüleme: Aktif ve pasif şev stabilizasyon sistemleri (Tecco, Maccaferri vb.)",
			"Standartlar: ETAG 027 (Kaya Bariyerleri), EN 10223-3 (Çift Bükümlü Tel Ağlar)"
		],
		whyChooseUs: [
			"15+ yıllık jeoteknik saha ve iple erişim tecrübesi",
			"Mühendislik analizleri ve detaylı risk değerlendirme raporlamaları",
			"Anahtar teslim projelendirme ve uygulama desteği",
			"Uluslararası sertifikalı (IRATA / SPRAT) dağcı teknisyen ekibi",
			"Zor arazilerde hızlı mobilizasyon ve esnek şantiye yönetimi",
			"Yüksek iş güvenliği standartları (Sıfır kaza hedefi)"
		],
		faqs: [
			{
				question: "Kaya düşmesi riski nasıl analiz edilir?",
				answer: "Mühendislerimiz ve iple erişim teknisyenlerimiz sahada jeolojik inceleme yapar. Yamaçtaki gevşek blokların hacmi, dikliği, çatlak yapısı ve düşme yörüngeleri özel simülasyon yazılımları ile analiz edilerek en uygun çözüm (temizleme, bariyer veya örtüleme) belirlenir."
			},
			{
				question: "Dinamik kaya bariyerleri ne kadar güvenlidir?",
				answer: "Dinamik kaya bariyerleri uluslararası standartlara (ETAG 027) göre test edilmiş esnek çelik ağ yapısı ile yüksek hızda düşen dev kaya bloklarını sönümleyerek durdurur. 9000 kJ kapasiteye kadar olan bariyerlerimiz en zorlu heyelan alanlarında dahi tam koruma sağlar."
			},
			{
				question: "Şev örtüleme pasif mi aktif mi yapılmalıdır?",
				answer: "Yamaçtaki kaya yapısı çok gevşekse ve yerinde tutulması gerekiyorsa aktif örtüleme (ankrajlar ve çelik tel ağların gerilerek yamaç yüzeyine bastırılması) uygulanır. Sadece kopan taşların kontrollüce tabana süzülmesi isteniyorsa pasif örtüleme tercih edilir."
			}
		],
		relatedServices: [
			"yamac-yuzeyi-temizleme",
			"sev-ortuleme",
			"kaya-bariyeri",
			"moloz-bariyer"
		]
	},
	"yamac-yuzeyi-temizleme": {
		slug: "yamac-yuzeyi-temizleme",
		title: "Yamaç Yüzeyi Temizleme",
		metaDescription: "Heyelan riski taşıyan yamaçlarda profesyonel yüzey temizleme hizmetleri. Gevşek kaya temizliği, kök sökümü, tehlikeli blok kaldırma ile güvenli yamaçlar.",
		keywords: [
			"yamaç temizleme",
			"gevşek kaya temizliği",
			"heyelan önleme",
			"şev stabilizasyonu",
			"jeoteknik temizlik"
		],
		category: "jeoteknik",
		icon: "🏔️",
		heroImage: "/services/yamac-temizleme.png",
		intro: "Heyelan ve kaya düşmesi riski taşıyan yamaçların güvenli hale getirilmesi için profesyonel yüzey temizleme hizmetleri sunuyoruz. Jeoteknik mühendislik desteği ile kalıcı çözümler üretiyoruz.",
		sections: [{
			heading: "Yamaç Yüzeyi Temizleme Nedir?",
			content: "Yamaç yüzeyi temizleme, heyelan ve kaya düşmesi riskini azaltmak için yapılan özel jeoteknik uygulamadır. Gevşemiş kayalar, tehlikeli bloklar, bitki kökleri ve ayrışmış malzeme yamadan kontrollü olarak uzaklaştırılır. Özellikle yol kenarları, yerleşim alanları yakını, demiryolu güzergahları ve kritik altyapı tesislerinde hayati öneme sahiptir. Türkiye'de her yıl onlarca kişi kaya düşmesi sonucu hayatını kaybetmektedir. Profesyonel yamaç temizliği, bu riskleri minimuma indirir. İşlem, jeoloji mühendisi ve iple erişim uzmanı koordinasyonunda gerçekleştirilir. Tüm tehlikeli bloklar tespit edilir, statik analiz yapılır ve güvenli kaldırma planı hazırlanır."
		}, {
			heading: "Yamaç Temizleme Uygulama Süreci",
			content: "Öncelikle jeolojik etüt ve risk analizi yapılır. Yamaç geometrisi, kaya yapısı, fay hatları ve jeomekanik özellikler incelenir. İple erişim teknikleri ile yamaç yüzeyi detaylı olarak muayene edilir. Gevşek bloklar, çatlak yapılar ve tehlikeli bölgeler işaretlenir. Daha sonra kontrollü blok kaldırma işlemine geçilir. Küçük bloklar manuel olarak, büyükler özel kaldırma sistemleri veya kontrollü patlatma ile kaldırılır. Bitki kökleri temizlenir, çünkü kökler zamanla kayaları parçalar ve gevşetir. Son olarak yamaç yüzeyi düzenlenir ve gerekirse stabilirasyon çalışmaları yapılır. Tüm işlem boyunca iş güvenliği kurallarına titizlikle uyulur."
		}],
		advantages: [
			"Heyelan ve kaya düşmesi riskini minimuma indirir",
			"Jeoteknik mühendislik desteği ile güvenli uygulama",
			"İple erişim teknikleriile ulaşılamaz alanlarda çalışma",
			"Çevre ve altyapıya zarar vermeden temizlik",
			"Kalıcı ve uzun ömürlü çözüm",
			"Kamu güvenliği sağlanır",
			"Altyapı tesislerinin korunması",
			"Maliyet etkin risk azaltma"
		],
		applications: [
			"Karayolu kenarı yamaçlar",
			"Demiryolu güzer gahları",
			"Yerleşim alanı arkası yamaçlar",
			"Baraj ve gölet yan duvarları",
			"Tünel portal alanları",
			"Maden ocağı yamaçları",
			"Turizm bölgeleri",
			"Enerji nakil hatları güzergahları"
		],
		technicalDetails: [
			"Yöntem: İple erişim + jeoteknik analiz + kontrollü kaldırma",
			"Ekipman: Kırıcı, burgu, kaldıraç, vinç sistemleri",
			"Güvenlik: Kontrollü patlama, blok fren sistemleri, koruma bariyerleri",
			"Personel: Jeolog, jeoteknik mühendisi, iple erişim teknisyeni",
			"Standartlar: 2014/3 \"Tahkimat, Istinat Yapıları ve Şev Duraylılığı\" Tebliği",
			"Raporlama: Jeoteknik rapor, risk değerlendirmesi, uygulama raporu",
			"Garanti: 2 yıl uygulama garantisi"
		],
		whyChooseUs: [
			"Jeoloji mühendisi gözetiminde çalışma",
			"20+ yıl yamaç stabilizasyonu deneyimi",
			"Güvenli ve kontrollü uygulamalar",
			"Kapsamlı jeoteknik raporlama",
			"Kamu projelerinde referanslar",
			"Hızlı acil müdahale kapasitesi",
			"Çevre dostu uygulamalar",
			"Rekabetçi fiyatlandırma"
		],
		faqs: [{
			question: "Yamaç temizleme ne zaman yapılmalıdır?",
			answer: "Yol yapımı öncesi, heyelan riski tespiti sonrası, deprem sonrası, şiddetli yağışlardan sonra yapılması önerilir. Ayrıca risk taşıyan yamaçlarda 3-5 yılda bir periyodik kontrol ve gerekirse temizlik yapılmalıdır."
		}, {
			question: "Yamaç temizleme maliyeti ne kadardır?",
			answer: "Maliyet, yamaç yüksekliği, erişim zorluğu, temizlenecek alan ve blok sayısına göre değişir. Ortalama 500-2000 TL/m² arasındadır. Ücretsiz keşif ve teklif için iletişime geçebilirsiniz."
		}],
		relatedServices: [
			"sev-ortuleme",
			"kaya-bariyeri",
			"deflektor-tip-ortuleme"
		]
	},
	"sev-ortuleme": {
		slug: "sev-ortuleme",
		title: "Şev Örtüleme Sistemleri",
		metaDescription: "Yamaç stabilizasyonu için profesyonel şev örtüleme uygulamaları. Tel örgü, hasır çelik, beton püskürtme ile uzun ömürlü yamaç koruma çözümleri.",
		keywords: [
			"şev örtüleme",
			"yamaç koruma",
			"tel örgü örtüleme",
			"hasır çelik",
			"yamaç stabilizasyonu",
			"shotcrete"
		],
		heroImage: "/services/sev-ortuleme.png",
		category: "jeoteknik",
		icon: "🧱",
		intro: "Yamaç ve şevlerin stabilizasyonu için profesyonel örtüleme sistemleri uyguluyoruz. Tel örgü, hasır çelik ve beton püskürtme ile yamaçlarınızı uzun yıllar koruyoruz.",
		sections: [{
			heading: "Şev Örtüleme Nedir?",
			content: "Şev örtüleme, yamaçların yüzeyini tel örgü, hasır çelik veya özel ağlar ile kaplayarak taş/kaya düşmesini önleyen ve yamaç stabilizasyonunu sağlayan jeoteknik uygulamadır. Gevşek kayaları tutar, bitki örtüsü oluşumuna yardımcı olur ve erozyonu önler. Sistem, şev yüzeyine ankrajlarla sabitlenen esnek örtü malzemelerinden oluşur. Örtü, düşen küçük kayaları tutar ve büyük blokların enerjisini emerek kontrollü düşmesini sağlar. Özellikle karayolu şevleri, maden ocağı yamaçları ve risk altındaki yerleşim alanlarında yaygın kullanılır. Doğru tasarlanmış şev örtüleme, 20-30 yıl etkin koruma sağlar."
		}, {
			heading: "Şev Örtüleme Sistemleri ve Malzemeleri",
			content: "Tel örgü örtüleme: Galvaniz çelik tel, 3-4 mm çap, 80x100mm göz açıklığı. En ekonomik ve yaygın çözüm. Hasır çelik örtüleme: Ankrajlı sistem, φ6-8mm çelik hasır, yüksek mukavemet, ağır blok tutma kapasiteli. Çelik halat ağ: Spider ağ sistemi, 12-16mm halat, büyük göz açıklığı (300-500mm), ağır blokları tutar. Jeo sentetik ağlar: Polimer bazlı, erozyon kontrolü, bitki gelişimine uygun, hafif şevlerde kullanılır. Shotcrete (Beton püskürtme): 5-15cm kalınlık, yüksek dayanım, hasar görmüş yamaçların onarımında kullanılır, genellikle tel örgü ile kombine uygulanır. Her sistem, şevin jeolojik yapısına, eğimine ve risk düzeyine göre seçilir."
		}],
		advantages: [
			"Taş düşmesini %95 oranında önler",
			"UV dayanımlı, galvaniz kaplı uzun ömürlü malzeme",
			"Bitki gelişimine izin verir (ekolojik çözüm)",
			"Uzun ömürlü (20-30 yıl)",
			"Maliyet etkin koruma çözümü",
			"Hızlı uygulama",
			"Minimal bakım gereksinimi",
			"Esnekliğiyle şiddetli darbeleri emer"
		],
		applications: [
			"Karayolu şevleri",
			"Maden ocağı yamaçları",
			"Baraj yan duvarları",
			"Tünel portalleri",
			"Demiryolu güzergahları",
			"Yerleşim alanı arka yamaçları",
			"Otopark rampaları",
			"Turistik bölge yamaçları"
		],
		technicalDetails: [
			"Tel örgü: Galvaniz 3-4mm tel, göz açıklığı 80x100mm",
			"Hasır çelik: φ6-8mm çelik, 150x150mm göz, kaynaklı",
			"Ankraj: 16-25mm çelik çubuk, 1.5-4m derinlik, 500 kN kapasiteli",
			"Ankraj aralığı: 2-4 m (şeve ve malzemeye göre)",
			"Kaplama alanı: 500-2000 m²/gün (ekip ve koşullara göre)",
			"Standart: ETAG 027, EN 15381 uyumlu",
			"Garanti: 5 yıl malzeme, 2 yıl işçilik"
		],
		whyChooseUs: [
			"Jeoteknik mühendislik hesap ve proje desteği",
			"Kaliteli galvaniz malzeme garantisi",
			"Hızlı ve profesyonel uygulama",
			"Kapsamlı uygulama sonrası raporlama",
			"Türkiye genelinde proje deneyimi",
			"Rekabetçi fiyatlandırma",
			"Periyodik kontrol hizmeti",
			"Uzun dönem garanti"
		],
		faqs: [{
			question: "Şev örtüleme ne kadar dayanıklıdır?",
			answer: "Kaliteli galvaniz tel örgü sistemler 20-25 yıl, paslanmaz çelik sistemler 30+ yıl dayanıklıdır. Süre, iklim koşulları ve bakıma bağlıdır. Deniz kenarı gibi korozif ortamlarda paslanmaz çelik tercih edilmelidir."
		}, {
			question: "Örtüleme sonrası bitki örtüsü oluşur mu?",
			answer: "Evet, tel örgü sistemleri bitki gelişimine izin verir. Hatta tohumlama ve hidroseeding ile bitki gelişimi teşvik edilir. Bu hem estetik hem de ek stabilizasyon sağlar."
		}],
		relatedServices: [
			"yamac-yuzeyi-temizleme",
			"deflektor-tip-ortuleme",
			"kaya-bariyeri"
		]
	},
	"hassas-endustriyel-alan-korumasi": {
		slug: "hassas-endustriyel-alan-korumasi",
		title: "Hassas Endüstriyel Alan Koruması",
		metaDescription: "Petrokimya, enerji ve kritik endüstriyel tesislerde profesyonel yüksekte çalışma ve koruma hizmetleri. Patlayıcı ortamlarda özel ekipman ve eğitimli personel.",
		keywords: [
			"hassas endüstriyel koruma",
			"petrokimya bakımı",
			"atex ortam",
			"patlayıcı ortam çalışması",
			"kritik tesis bakımı"
		],
		heroImage: "/services/hassas-endustriyel.png",
		category: "endustriyel",
		icon: "⚗️",
		intro: "Petrokimya, enerji santralleri ve kritik endüstriyel tesislerde hassas koruma ve bakım hizmetleri sunuyoruz. ATEX sertifikalı ekipman ve özel eğitimli personel ile güvenli çalışmalar gerçekleştiriyoruz.",
		sections: [{
			heading: "Hassas Endüstriyel Alanlar ve Özel Gereksinimler",
			content: "Petrokimya tesisleri, rafineri ler, LNG terminalleri, enerji santralleri ve kimya fabrikaları hassas endüstriyel alan olarak sınıflandırılır. Bu alanlarda patlayıcı gaz/buhar, yanıcı sıvılar, yüksek basınç ve sıcaklık riski bulunur. ATEX Direktifi (2014/34/EU) ve Türk İSG mevzuatı, bu alanlarda özel ekipman ve eğitimli personel kullanımını zorunlu kılar. İple erişim teknisyenleri, ATEX ortamlarında çalışma sertifikası almalı, antistatik ekipman kullanmalı ve acil durum prosedürlerini bilmelidir. Kutup Grup, tüm personeline ATEX Zone 1 ve Zone 2 eğitimi verir, antistatik halat, karabina ve ekipman kullanır."
		}, {
			heading: "Hizmet Kapsamı ve Uygulama Alanları",
			content: "Rafineriler de boru hatları, tanklar, kolon bakımı. LNG terminallerinde kriojenikalanlar, yükleme kolları. Petrokimya tesislerinde reaktör, fırın, baca bakımı. Enerji santrallerinde türbin, kazan, baca muayenesi. Kimya fabrikalarında karıştırıcı, tank, sintikler. Atık su arıtma tesislerinde havuz, tank, boru hatları. Tüm işler, tesis prosedürlerine (Permit to Work, Hot Work Permit, Confined Space) uygun gerçekleştirilir. Gaz algılayıcı (LEL, H2S, CO) cihazlar sürekli kullanılır."
		}],
		advantages: [
			"ATEX sertifikalı ekipman ve antistatik malzeme",
			"ATEX ortam eğitimli personel",
			"Gaz algılayıcı ve acil müdahale ekipmanları",
			"Tesis prosedürlerine tam uyum",
			"Minimal duruş süresi (tesis verimliliği)",
			"7/24 acil müdahale kapasitesi",
			"Kapsamlı sigorta ve yasal uyum",
			"Deneyimli proje yönetimi"
		],
		applications: [
			"Rafineri ve petrokimya tesisleri",
			"LNG ve doğalgaz terminalleri",
			"Enerji santralleri (termik, kojenerasyon)",
			"Kimya üretim tesisleri",
			"İlaç fabrikaları",
			"Atık su arıtma tesisleri",
			"Depolama tankları (fuel, kimyasal)",
			"Boru hatları ve vana istasyonları"
		],
		technicalDetails: [
			"Ekipman: ATEX sertifikalı, antistatik halat ve metal aksamlar",
			"Giysi: Antistatik, alev almaz tulum",
			"Takım: Non-sparking alet takımı (bronz, pirinç)",
			"Algılayıcı: LEL, H2S, CO, O2 gaz dedektörü",
			"İletişim: ATEX sertifikalı telsiz",
			"Eğitim: IRATA + ATEX + Confined Space + First Aid",
			"Dokümantasyon: Work Permit, JSA, Risk Assessment"
		],
		whyChooseUs: [
			"10+ yıl hassas tesis deneyimi",
			"TUPRAS, BOTAŞ, PETKİM referansları",
			"ATEX ve ISO 9001 sertifikasyonu",
			"Kapsamlı sigorta (10 Milyon TL)",
			"Acil kurtarma ekibi ve ambulans",
			"24/7 operasyon kapasitesi",
			"Profesyonel proje yönetimi",
			"Sıfır kaza hedefi"
		],
		faqs: [{
			question: "ATEX sertifikasyonu nedir ve neden gereklidir?",
			answer: "ATEX, patlayıcı ortamlarda (Explosive Atmospheres) kullanılacak ekipman ve çalışacak personel için Avrupa standardıdır. Yanıcı gaz, buhar veya toz bulunduran alanlarda kıvılcım, statik elektrik çıkarabilecek ekipman kullanılamaz. ATEX sertifikalı ekipman, antistatik ve kıvılcım çıkarmaz özelliktedir."
		}, {
			question: "Hassas tesislerde çalışma süresi ne kadardır?",
			answer: "Tesis duruş süresini minimize etmek için hızlı müdahale yapılır. Bakım pencereleri (turnaround) sırasında 7/24 çalışma ile proje tamamlanır. Takvim, tesis tarafından belirlenir."
		}],
		relatedServices: [
			"ruzgar-enerji-santralleri",
			"tersane-ve-offshore-hizmetleri",
			"yatay-ve-dusey-yasam-hatti"
		]
	},
	"kaya-bariyeri": {
		slug: "kaya-bariyeri",
		title: "Kaya Bariyeri Kurulumu",
		heroImage: "/services/kaya-bariyeri.png",
		metaDescription: "Kaya düşmesine karşı profesyonel kaya bariyeri kurulumu. Dinamik kaya bariyerleri ile yollar, yerleşim alanları ve kritik tesisleri koruyoruz.",
		keywords: [
			"kaya bariyeri",
			"taş bariyeri",
			"rockfall barrier",
			"kaya düşme koruması",
			"dinamik bariyer"
		],
		category: "jeoteknik",
		icon: "🛑",
		intro: "Kaya ve taş düşmesine karşı en etkili koruma sistemi olan kaya bariyerlerini profesyonelce kuruyoruz. Dinamik enerji emme kapasiteli bariyerler ile can ve mal güvenliğini sağlıyoruz.",
		sections: [{
			heading: "Kaya Bariyeri Nedir?",
			content: "Kaya bariyerleri, yamaçlardan düşen kaya ve taş bloklarını durdurarak arkasındaki yol, bina veya tesisi koruyan dinamik çelik sistemlerdir. Geleneksel beton duvarların aksine, düşen kayanın kinetik enerjisini emerek kontrollü olarak durdurur. Sistem, çelik direkler, çelik halat ağ, fren halat ları ve enerji emici elemanlardan oluşur. Enerji kapasitesi 100 kJ ile 5000 kJ arasında değişir. ETAG 027 standardına uygun sistemler, sertifikalı ve test edilmiştir. Türkiye'de her yıl kaya düşmesi nedeniyle can ve mal kaybı yaşanmaktadır. Kaya bariyerleri, bu riski minimuma indirir."
		}, {
			heading: "Bariyer Türleri ve Kapasite Seçimi",
			content: "Düşük kapasite (100-250 kJ): Küçük taş düşmesi, düşük enerji. Orta kapasite (500-1000 kJ): Orta boy bloklar, karayolu kenarı. Yüksek kapasite (1500-3000 kJ): Büyük bloklar, yüksek yamaçlar. Ekstrem kapasite (5000+ kJ): Dev bloklar, kritik altyapı. Kapasite seçimi, yamaç yüksekliği, eğim, kaya boyutu ve yamaç-yol arası mesafeye göre jeoteknik mühendis tarafından hesaplanır. Her sistemde ağ, halat, direk ve fren elemanlarının kapasitesi uyumlu olmalıdır."
		}],
		advantages: [
			"Yüksek enerji emme kapasitesi",
			"Düşük bakım gereksinimi",
			"Uzun ömürlü (30+ yıl)",
			"Hızlı kurulum (beton duvara göre)",
			"Manzara engellenmez (şeffaf)",
			"Modüler sistem, genişletilebilir",
			"ETAG 027 sertifikalı",
			"Maliyet etkin (uzun vadede)"
		],
		applications: [
			"Karayolu kenarı koruma",
			"Demiryolu güzergahları",
			"Yerleşim alanı koruması",
			"Enerji nakil hatları",
			"Baraj ve HES tesisleri",
			"Maden ocağı yolları",
			"Turizm bölgeleri",
			"Köprü ve viyadük yaklaşımları"
		],
		technicalDetails: [
			"Kapasite: 100 kJ - 5000 kJ (MEL değeri)",
			"Ağ: Çelik halat ağ, 3-4mm tel, göz 200-300mm",
			"Halat: 16-20mm çelik halat, galvaniz",
			"Direk: HEB veya boru profil, ankrajlı",
			"Fren elemanları: Ring brake, friction brake",
			"Yükseklik: 3m, 4m, 5m, 7m seçenekleri",
			"Uzunluk: Modüler, 10-15m paneller",
			"Standart: ETAG 027, EN 1317 uyumlu",
			"Test: Sertifikalı, full-scale test raporlu"
		],
		whyChooseUs: [
			"Avrupa markalarının yetkili satıcısı",
			"Jeoteknik hesap ve proje desteği",
			"Hızlı ve profesyonel montaj",
			"Full-scale test raporları",
			"10+ yıl garanti",
			"Bakım ve periyodik kontrol hizmeti",
			"Türkiye çapında referanslar",
			"Teknik destek ve eğitim"
		],
		faqs: [{
			question: "Kaya bariyeri maliyeti ne kadardır?",
			answer: "Maliyet, kapasite, uzunluk ve montaj zorluğuna göre değişir. Metre başına 15.000-50.000 TL arasındadır. Uzun vadede beton duvara göre daha ekonomiktir. Ücretsiz keşif için iletişime geçebilirsiniz."
		}, {
			question: "Bariyer ne kadar dayanıklıdır?",
			answer: "Galvaniz çelik sistem 30+ yıl dayanıklıdır. Her darbe sonrası sistem muayene edilmeli, hasar görmüş parçalar değiştirilmelidir. Yıllık periyodik kontrol önerilir."
		}],
		relatedServices: [
			"moloz-bariyer",
			"deflektor-tip-ortuleme",
			"yamac-yuzeyi-temizleme"
		]
	},
	"deflektor-tip-ortuleme": {
		slug: "deflektor-tip-ortuleme",
		title: "Deflektör Tip Şev Örtüleme",
		metaDescription: "Yüksek enerjili kaya düşmelerine karşı deflektör tip örtüleme sistemleri. Çelik halat ağ ile taş düşmesini yönlendirerek güvenli alan yaratıyoruz.",
		keywords: [
			"deflektör örtüleme",
			"çelik halat ağ",
			"yönlendirici örtü",
			"aktif yamaç koruma",
			"high-tensile mesh"
		],
		category: "jeoteknik",
		icon: "🔀",
		heroImage: "/services/deflektor-tip.png",
		intro: "Yüksek enerjili kaya düşmelerine karşı deflektör tip örtüleme sistemleri uyguluyoruz. Çelik halat ağ ve ankrajlarla yamaç yüzeyini kaplayarak taşları kontrollü yönlendiriyor, düşme hızını azaltıyoruz.",
		sections: [{
			heading: "Deflektör Örtüleme Nedir?",
			content: "Deflektör tip örtüleme, klasik tel örgü örtülemeden daha güçlü, yüksek mukavemetli çelik halat ağlarla yapılan aktif yamaç koruma sistemidir. Normal tel örgü küçük taşları tutar, deflektör sistem ise büyük blokları kontrollü olarak yönlendirir ve yavaşlatır. Sistem, yamaç yüzeyine ankrajlarla sabitlenen yüksek mukavemetli çelik halat ağdan (3-5mm tel, kaynaklı veya örgülü) oluşur. Ağ, taşların yamactan kopmasını önlemez, ancak kopan taşları tutar ve kontrollü olarak kaydırır. Böylece taşlar, güvenli bir alana (moloz hendeği, bariyer arkası) yönlendirilir. Özellikle yüksek yamaçlarda kaya bariyeri maliyeti çok yüksekse, deflektör örtüleme ekonomik alternatiftir."
		}, {
			heading: "Deflektör ve Klasik Örtü Farkı",
			content: "Klasik örtü: 3-4mm tel örgü, taşları tutar, düşük enerji (50-100 kJ). Deflektör örtü: 3-5mm halat ağ, taşları yönlendirir, orta-yüksek enerji (200-500 kJ). Yüksek mukavemetli örtü: Double-twist veya ring net, büyük blokları tutar, yüksek enerji (500-1500 kJ). Deflektör sistem, her ankraj noktası 50-100 kN yük alır. Ankraj aralığı 3-4 m, derinlik 3-6 m'dir. Sistemin altına moloz hendeği veya kaya bariyeri eklenir."
		}],
		advantages: [
			"Yüksek mukavemet ve enerji emme",
			"Büyük blokları yönlendirir",
			"Kaya bariyerine göre ekonomik",
			"Hızlı montaj",
			"Esnek sistem, darbeleri emer",
			"Uzun ömürlü (25-30 yıl)",
			"Bitki gelişimine izin verir",
			"Modüler, genişletilebilir"
		],
		applications: [
			"Yüksek karayolu şevleri",
			"Maden ocağı yamaçları",
			"Demiryolu güzergahları",
			"Kritik altyapı yakınları",
			"Tünel portalleri",
			"Baraj yan duvarları",
			"Aktif heyelan bölgeleri",
			"Yerleşim arkası yüksek yamaçlar"
		],
		technicalDetails: [
			"Malzeme: Yüksek mukavemetli çelik halat, galvaniz",
			"Tel çapı: 3-5mm, kaynaklı veya örgülü",
			"Göz açıklığı: 150-300mm (ring net 300-500mm)",
			"Ankraj: 20-32mm çelik çubuk, 3-6m derinlik",
			"Ankraj kapasitesi: 50-150 kN",
			"Ankraj aralığı: 3-4m",
			"Enerji kapasitesi: 200-1500 kJ (sisteme göre)",
			"Standart: ETAG 027, EN 15381"
		],
		whyChooseUs: [
			"Jeoteknik mühendis proje desteği",
			"Sertifikalı yüksek mukavemetli ağ",
			"Deneyimli montaj ekibi",
			"Ankraj test ve raporlama",
			"Garanti ve bakım hizmeti",
			"Avrupa standartlarında uygulama",
			"Rekabetçi fiyat",
			"Hızlı teslimat"
		],
		faqs: [{
			question: "Deflektör örtü ne kadar dayanıklıdır?",
			answer: "Galvaniz çelik sistem 25-30 yıl dayanıklıdır. Ancak darbe sonrası muayene yapılmalı, hasar görmüş bölgeler onarılmalıdır. 2-3 yılda bir periyodik kontrol önerilir."
		}, {
			question: "Maliyet klasik örtüye göre ne kadar fark eder?",
			answer: "Deflektör örtü, klasik tel örgüden %50-100 daha pahalıdır (m² başına). Ancak daha yüksek koruma sağlar ve kaya bariyerine göre %40-60 ekonomiktir."
		}],
		relatedServices: [
			"sev-ortuleme",
			"kaya-bariyeri",
			"yamac-yuzeyi-temizleme"
		]
	},
	"moloz-bariyer": {
		slug: "moloz-bariyer",
		title: "Moloz Bariyer Sistemleri",
		metaDescription: "Moloz ve enkaz düşmesine karşı profesyonel bariyer kurulumu. İnşaat şantiyeleri, yıkım sahaları ve yamaç altı koruması için esnek çözümler.",
		heroImage: "/services/moloz-bariyer.png",
		keywords: [
			"moloz bariyeri",
			"debris barrier",
			"inşaat güvenlik bariyeri",
			"yıkım moloz koruması",
			"enkaz bariyeri"
		],
		category: "jeoteknik",
		icon: "🚧",
		intro: "Moloz, enkaz ve inşaat malzemesi düşmesine karşı profesyonel moloz bariyeri kurulumu yapıyoruz. Esnek ve modüler sistemler ile şantiye, yıkım sahası ve yamaç altı koruması sağlıyoruz.",
		sections: [{
			heading: "Moloz Bariyeri Nedir?",
			content: "Moloz bariyerleri, inşaat şantiyelerinde, yıkım sahalarında ve yamaç altı bölgelerde moloz, enkaz ve inşaat malzemelerinin düşmesi sonucu oluşabilecek kazaları önleyen koruyucu sistemlerdir. Kaya bariyerlerine benzer çalışma prensibi vardır, ancak daha hafif taşımar için tasarlanmıştır. Enerji kapasitesi 50-500 kJ arasındadır. Özellikle şehir içi yıkım çalışmalarında, yamaç kenarındaki şantiyelerde ve eski binaların yıkımında hayati önem taşır. Geçici veya yarı-kalıcı olarak kurulabilir, proje sonunda sökülüp başka sahada kullanılabilir. Sistem, hafif çelik direkler, polietilen veya çelik tel ağ ve fren elemanlarından oluşur."
		}, {
			heading: "Moloz Bariyer Türleri",
			content: "Geçici şantiye bariyeri: İnşaat süresince yan yola moloz düşmesini engellemek için. Yıkım sahası bariyeri: Bina yıkımında yan binalara veya yola moloz gelmesini önler. Yamaç altı bariyer: Yamaç kenarındaki şantiyelerin altına kurulan yarı-kalıcı sistem. Trafik moloz bariyeri: Üst şantiyelerin alt yola taş/moloz bırakmaması için. Her sistemde enerji kapasitesi, beklenen moloz boyutuna göre seçilir. Polietilen ağ, hafif moloz (tuğla, kiremit) için uygundur. Çelik tel ağ, ağır parçalar (beton, demir) için tercih edilir."
		}],
		advantages: [
			"Hızlı kurulum ve söküm",
			"Taşınabilir, tekrar kullanılabilir",
			"Düşük maliyet",
			"Esnek kapasiteler (50-500 kJ)",
			"Hafif ve kolay taşınır",
			"İSG mevzuatına uygun",
			"Minimal bakım",
			"Modüler sistem"
		],
		applications: [
			"İnşaat şantiyeleri (yamaç kenarı)",
			"Bina yıkım sahaları",
			"Yol genişletme çalışmaları",
			"Tünel portali inşaatı",
			"Köprü yapımı",
			"Geçici yamaç koruması",
			"Deprem sonrası yıkım çalışmaları",
			"Tadilat işlerinde moloz koruması"
		],
		technicalDetails: [
			"Kapasite: 50 kJ - 500 kJ",
			"Ağ: PE (Polietilen) veya çelik tel",
			"Göz açıklığı: 100-200mm",
			"Direk: Galvaniz boru, hafif profil",
			"Yükseklik: 2m, 3m, 4m",
			"Uzunluk: Modüler 10m paneller",
			"Montaj: Ankraj veya beton blok tabanlı",
			"Taşınabilir: Evet, tekrar kullanılabilir"
		],
		whyChooseUs: [
			"Hızlı tedarik ve kurulum",
			"Kiralama veya satış seçenekleri",
			"Proje bazlı kapasite hesabı",
			"Montaj ve söküm hizmeti",
			"Uygun fiyat",
			"Sertifikalı sistemler",
			"Türkiye genelinde hizmet",
			"Teknik destek"
		],
		faqs: [{
			question: "Moloz bariyeri ile kaya bariyeri arasındaki fark nedir?",
			answer: "Moloz bariyeri daha hafif sistemdir, 50-500 kJ kapasiteli, geçici kullanım için uygundur. Kaya bariyeri ise 100-5000 kJ kapasiteli, kalıcı veya uzun süreli koruma için tasarlanmıştır ve daha pahalıdır."
		}, {
			question: "Moloz bariyeri kiralan abilir miyim?",
			answer: "Evet, kısa süreli projeler için kiralama hizmeti sunulmaktadır. Aylık veya proje bazlı kiralama seçenekleri mevcuttur. Uzun süreli kullanımda satın almak daha ekonomiktir."
		}],
		relatedServices: [
			"kaya-bariyeri",
			"guvenlik-agi-kurulumu",
			"yamac-yuzeyi-temizleme"
		]
	},
	"ormanda-iple-erisim-hizmetleri": {
		slug: "ormanda-iple-erisim-hizmetleri",
		title: "Ormanda İple Erişim Hizmetleri",
		metaDescription: "Ormancılık ve ağaç bakımı için profesyonel iple erişim hizmetleri. Budama, kesim, hastalık kontrolü ve orman amenajmanı çalışmalarında uzman ekip.",
		keywords: [
			"ağaç budama",
			"ormancılık iple erişim",
			"arborist",
			"ağaç bakımı",
			"orman amenajmanı"
		],
		category: "endustriyel",
		icon: "🌲",
		heroImage: "/services/ormanda-iple-erisim.png",
		intro: "Ormancılık ve ağaç bakımı çalışmalarında profesyonel iple erişim hizmetleri sunuyoruz. ISA sertifikalı arboristler ile güvenli budama, kesim ve bakım hizmetleri.",
		sections: [{
			heading: "Ormanda İple Erişim Nedir?",
			content: "Ormanda iple erişim (Tree Climbing / Arboriculture), yüksek ağaçlarda bakım, budama, kesim ve muayene için iple tırmanma tekniklerinin kullanıldığı uzmanlık alanıdır. Geleneksel vinç veya platform kullanılamayan dar alanlarda, hassas ağaçlarda veya korunan bölgelerde tercih edilir. ISA (International Society of Arboriculture) standartlarına uygun olarak gerçekleştirilir. Ağaç sağlığını koruyarak, kontrollü budama ve kesim yapılır. Kentsel alanlarda, parklarda, tarihi mekanlarda, üniversite kampüslerinde ve orman amenajmanı çalışmalarında yaygın kullanılır."
		}, {
			heading: "Hizmet Kapsamı",
			content: "Ağaç budama: Şekillendirme, hastalık kontrolü, tehlikeli dalların kesilmesi. Ağaç kesimi: Kontrollü parça-parça indirme, güvenli alanda zemin kesimi. Ağaç sağlığı muayenesi: Hastalık, zararlı, çürüme tespiti, raporlama. Fırtına hasarı müdahalesi: Kırılan dalların temizlenmesi, acil kesim. Kablo ve destek sistemi: Zayıf dalların kablo ile desteklenmesi. Tohum toplama: Doğal tohum elde etme, genetik koruma. ISA Certified Arborist uzmanlarımız, ağaç fizyolojisi bilgisi ile çalışır. Tüm işlemler ağacın sağlığını koruyarak gerçekleştirilir."
		}],
		advantages: [
			"ISA sertifikalı arborist ekip",
			"Ağaç sağlığını koruyan uygulamalar",
			"Dar alanlarda çalışma imkanı",
			"Çevre hassasiyeti, minimal zarar",
			"Hızlı ve güvenli müdahale",
			"Profesyonel ekipman ve teknikler",
			"Acil durum müdahale kapasitesi",
			"Raporlama ve danışmanlık"
		],
		applications: [
			"Kentsel park ve bahçeler",
			"Üniversite ve okul kampüsleri",
			"Tarihi mekanlar ve korunan alanlar",
			"Konut bahçeleri",
			"Orman amenajmanı",
			"Fırtına sonrası temizlik",
			"Ağaç sağlığı kontrolü",
			"Tohum ve gen kaynağı koruma"
		],
		technicalDetails: [
			"Ekipman: Statik halat, SRT/SRS sistemleri, testere",
			"Sertifikasyon: ISA Certified Arborist, SPRAT/IRATA",
			"Teknikler: SRT (Single Rope Technique), DRT (Double Rope Technique)",
			"Güvenlik: ANSI Z133, ISA standartları",
			"Rapor: Ağaç sağlık raporu, risk değerlendirmesi"
		],
		whyChooseUs: [
			"ISA sertifikalı arborist ekip",
			"Ağaç fizyolojisi bilgisi",
			"10+ yıl ormancılık deneyimi",
			"Profesyonel ekipman",
			"Çevre dostu uygulamalar",
			"Acil müdahale 7/24",
			"Rekabetçi fiyat"
		],
		faqs: [{
			question: "Ağaç budama ne zaman yapılmalıdır?",
			answer: "Meyve ağaçları için dinlenme dönemi (kış sonu), süs ağaçları için her mevsim uygundur. Hastalıklı dallar derhal alınmalıdır. Uzman arborist, ağaç türüne göre en uygun zamanı belirler."
		}, {
			question: "Budama ağaca zarar verir mi?",
			answer: "Profesyonelce yapılan budama ağaca zarar vermez, aksine sağlığını artırır. Yanlış budama ise ağacı strese sokar ve hastalığa açık hale getirir. ISA standartlarına uygun budama yapılmalıdır."
		}],
		relatedServices: ["yatay-ve-dusey-yasam-hatti", "dis-cephe-dekoratif-aydinlatma"]
	},
	"stand-by-rescue-hizmeti": {
		slug: "stand-by-rescue-hizmeti",
		title: "Stand-by & Rescue Hizmeti",
		metaDescription: "Yüksekte çalışmalarda acil kurtarma ve stand-by rescue hizmetleri. IRATA sertifikalı kurtarma ekipleri ile 7/24 güvenli çalışma ortamı.",
		heroImage: "/services/standby-rescue.png",
		keywords: [
			"acil kurtarma",
			"stand-by rescue",
			"yüksekte kurtarma",
			"rope rescue",
			"confined space rescue"
		],
		category: "endustriyel",
		icon: "🚑",
		intro: "Yüksekte ve kapalı alanlarda çalışan ekipler için profesyonel stand-by ve acil kurtarma hizmetleri sunuyoruz. IRATA Level 3 sertifikalı kurtarma uzmanları ile 7/24 güvenlik sağlıyoruz.",
		sections: [{
			heading: "Stand-by & Rescue Nedir?",
			content: "Stand-by & Rescue, yüksekte çalışma, kapalı alan (confined space) girişi veya risk li operasyonlar sırasında hazırda bekleyen acil kurtarma ekibidir. İSG mevzuatı, yüksek riskli işlerde acil durum planı ve kurtarma ekibi bulundurulmasını zorunlu kılar. Ekip, kaza anında derhal müdahale ederek yaralının güvenli bir şekilde indirilmesini veya çıkarılmasını sağlar. IRATA Level 3 sertifikalı teknisyenler, ileri kurtarma teknikleri bilgisine sahiptir. Ekipte ilk yardım sertifikalı personel ve tam kurtarma ekipmanı bulunur. Petrokimya, enerji, inşaat ve offshore sektörlerinde yaygın kullanılır."
		}, {
			heading: "Hizmet Kapsamı ve Kurtarma Senaryoları",
			content: "Yüksekte kurtarma: Vincde asılı kalan, bilinç kaybı yaşayan personelin indirilmesi. Kapalı alan kurtarma (Confined Space): Tank, silo, kuyu içinde mahsur kalan personelin çıkarılması. Yaralı taşıma: Sedye ile güvenli noktalara transport. Acil tıbbi müdahale: İlk yardım, defibrilatör, oksijen desteği. Ekip, tesis acil durum planına göre özelleştirilmiş eğitim alır. Tesis personeli ile koordineli çalışır. Senaryolu tatbikatlar düzenli olarak gerçekleştirilir."
		}],
		advantages: [
			"IRATA Level 3 sertifikalı kurtarma ekibi",
			"İlk yardım ve AED (defibrilatör) donanımlı",
			"7/24 hazır bekleyiş",
			"Hızlı müdahale süresi (<5 dakika)",
			"Tam kurtarma ekipmanı",
			"Tesis özel tatbikat ve eğitim",
			"İSG mevzuatına tam uyum",
			"Deneyimli proje yönetimi"
		],
		applications: [
			"Rafineri ve petrokimya tesisleri",
			"LNG ve doğalgaz terminalleri",
			"Enerji santralleri",
			"Offshore platformlar",
			"Yüksek yapı inşaatları",
			"Kapalı alan (confined space) çalışmaları",
			"Köprü ve viyadük bakımı",
			"Rüzgar türbini bakımı"
		],
		technicalDetails: [
			"Ekipman: Kurtarma setleri, sedye, tripod, vinç",
			"İletişim: Telsiz, acil çağrı sistemleri",
			"Tıbbi: İlk yardım çantası, AED, oksijen",
			"Sertifikasyon: IRATA Level 3, İlk Yardım, BLS",
			"Standartlar: OSHA, ANSI Z359, ISO 22846",
			"Müdahale Süresi: <5 dakika"
		],
		whyChooseUs: [
			"IRATA Level 3 sertifikalı ekip",
			"15+ yıl kurtarma deneyimi",
			"TUPRAS, BOTAŞ, PETKİM projeleri",
			"Kapsamlı ekipman envanteri",
			"Düzenli tatbik at ve eğitim",
			"Sıfır kaza hedefi",
			"24/7 operasyon kapasitesi"
		],
		faqs: [{
			question: "Stand-by ekibi ne zaman zorunludur?",
			answer: "İSG Yüksekte Çalışma Yönetmeliği ve Kapalı Alanlarda Çalışma Talimatına göre, yüksek riskli işlerde acil kurtarma planı ve ekibi bulundurulması gereklidir. Özellikle petrokimya, offshore ve enerji sektörlerinde zorunludur."
		}, {
			question: "Stand-by ekibi nasıl çalışır?",
			answer: "Ekip, operasyon sırasında tam donanımlı olarak hazır bekler. Acil durum anında derhal müdahale eder. Tesis acil durum planına göre hareket eder, düzenli tatbikatlar ile hazırlıklı tutulur."
		}],
		relatedServices: [
			"hassas-endustriyel-alan-korumasi",
			"tersane-ve-offshore-hizmetleri",
			"ruzgar-enerji-santralleri"
		]
	},
	"ruzgar-enerji-santralleri": {
		slug: "ruzgar-enerji-santralleri",
		title: "Rüzgar Enerji Santralleri Bakım Hizmetleri",
		heroImage: "/services/ruzgar-turbini.png",
		metaDescription: "Rüzgar türbinleri için profesyonel bakım, muayene ve onarım hizmetleri. GWO sertifikalı ekip ile güvenli ve hızlı servis.",
		keywords: [
			"rüzgar türbini bakımı",
			"GWO",
			"wind turbine",
			"blade repair",
			"türbin muayenesi"
		],
		category: "endustriyel",
		icon: "💨",
		intro: "Rüzgar enerji santralleri ve türbinleri için profesyonel bakım, muayene ve onarım hizmetleri sunuyoruz. GWO (Global Wind Organisation) sertifikalı ekibimiz ile güvenli ve verimli servis.",
		sections: [{
			heading: "Rüzgar Türbini Bakım Hizmetleri",
			content: "Rüzgar türbinleri, 80-150 metre yükseklikte, zorlu hava koşullarında çalışan kompleks sistemlerdir. Düzenli bakım ve muayene, verimliliği artırır ve arızaları önler. İple erişim teknikleri, türbin dış yüzeylerinde, kanat (blade) üzerinde ve nacelle dışında çalışmayı sağlar. Geleneksel vinç kullanımına göre %40-60 maliyet tasarrufu sağlar. GWO (Global Wind Organisation) standardı, rüzgar enerjisi sektöründe dünya çapında kabul gören eğitim ve güvenlik standardıdır. Ekibimiz, GWO Basic Safety Training, Blade Repair ve Advanced Rescue sertifikalarına sahiptir."
		}, {
			heading: "Hizmet Kapsamı",
			content: "Kanat (Blade) muayenesi: Görsel muayene, ultrasonik test, çatlak tespiti. Kanat onarımı: Leading edge erozyon tamiri, boyama, laminasyon onarımı. Nacelle dış yüzey  muayenesi: Korozyon kontrolü, bağlantı elemanları kontrolü. Kablo ve sensör kontrolü: Anemometre, vane, kablo bağlantıları. Yıldırım koruma sistemi: LPS kontrolü, bakımı. Cleaning (temizlik): Kanat ve nacelle yüzey temizliği (verimlilik artışı). Acil onarım: Fırtına sonrası hasar onarımı. Tüm işler, OEM (Original Equipment Manufacturer) prosedürlerine uygun gerçekleştirilir."
		}],
		advantages: [
			"GWO sertifikalı ekip",
			"Maliyet tasarrufu (%40-60 vinçe göre)",
			"Hızlı müdahale",
			"Minimal türbin duruşu",
			"Tam ekipman envanteri",
			"7/24 acil servis",
			"OEM prosedürlerine uygun",
			"Kapsamlı raporlama"
		],
		applications: [
			"Onshore (karadaki) rüzgar santralleri",
			"Offshore (denizdeki) rüzgar santralleri",
			"Kanat onarımı ve bakımı",
			"Nacelle muayenesi",
			"Kablo ve sensör bakımı",
			"Yıldırım koruma sistemi",
			"Periyodik muayene",
			"Acil onarım"
		],
		technicalDetails: [
			"Sertifikasyon: GWO Basic Safety, GWO Blade Repair, Advanced Rescue",
			"Ekipman: İple erişim seti, kompozit onarım malzemesi",
			"Test: Ultrasonik test, termal kamera",
			"Standartlar: ISO 12944, DNVGL standards",
			"İletişim: ATEX sertifikalı telsiz"
		],
		whyChooseUs: [
			"GWO sertifikalı deneyimli ekip",
			"Türkiye ve yurtdışı proje  deneyimi",
			"Hızlı mob ilizasyon",
			"Rekabetçi fiyat",
			"Kapsamlı ekipman",
			"OEM onaylı prosedürler",
			"Garanti ve destek"
		],
		faqs: [{
			question: "Rüzgar türbini bakımı ne sıklıkla yapılmalıdır?",
			answer: "Üretici (OEM) önerileri doğrultusunda yılda 1-2 kez periyodik bakım yapılmalıdır. Kanat muayenesi 2-3 yılda bir, detaylı muayene 5 yılda bir önerilir. Fırtına sonrası acil kontrol gereklidir."
		}, {
			question: "İple erişim ile ne kadar tasarruf sağlanır?",
			answer: "Vinç kullanımına göre %40-60 maliyet tasarrufu sağlanır. Ayrıca hızlı mobilizasyon ve minimal türbin duruşu sayesinde enerji üretim kaybı azalır."
		}],
		relatedServices: [
			"hassas-endustriyel-alan-korumasi",
			"stand-by-rescue-hizmeti",
			"yatay-ve-dusey-yasam-hatti"
		]
	},
	"gabion-duvar": {
		slug: "gabion-duvar",
		title: "Gabion Duvar Uygulamaları",
		metaDescription: "Gabion duvar ve istinat yapıları için profesyonel proje ve uygulama hizmetleri. Doğal taş dolgulu gabion sistemleri ile uzun ömürlü ve estetik çözümler.",
		keywords: [
			"gabion duvar",
			"istinat duvarı",
			"gabion sepet",
			"peyzaj gabion",
			"taş duvar"
		],
		category: "jeoteknik",
		icon: "🪨",
		heroImage: "/services/gabion-duvar.png",
		intro: "Gabion duvar ve istinat yapıları için profesyonel proje ve uygulama hizmetleri sunuyoruz. Galvaniz veya PVC kaplı çelik sepetler ve doğal taş dolgular ile uzun ömürlü, estetik ve ekonomik çözümler.",
		sections: [{
			heading: "Gabion Duvar Nedir?",
			content: "Gabion, taş veya kaya parçaları ile doldurulmuş çelik tel kafes (sepet) sistemlerdir. İstinat duvarları, erozyon kontrolü, peyzaj düzenlemesi ve dere ıslahında kullanılır. Galvaniz veya PVC kaplı çelik tellerden örülmüş sepetler, 1x1x0.5m, 2x1x1m gibi standart ebatlarda üretilir. Doğal taş (kırma taş, kübik taş, küp taş) ile doldurulur. Geçirimli yapısı sayesinde su baskısı oluşturmaz, drenaj sağlar. Esnek yapısı, zemindeki oturmalara uyum sağlar. Beton duvara göre daha ekonomik, doğal ve estetkidir. Ömrü 50-100 yıldır (PVC kaplı sepetlerde daha uzun)."
		}, {
			heading: "Gabion Uygulama Türleri",
			content: "Gabion istinat duvarı: Şev ve yamaç stabilizasyonu, zemin tutucu. Gabion dere ıslahı: Dere yata ğı koruması, erozyon önleme. Gabion kıyı koruması: Deniz ve göl kenarı koruma. Gabion  peyzaj: Bahçe duvarı, oturma grupları, dekoratif uygulamalar. Gabion gürültü bariyeri: Otoyol ve demiryolu gürültü azaltımı. Statik hesap ile boyutlandırılır, zemin özellikleri dikkate alınır. Doğru uygulama ile uzun ömürlü ve bakımsız çözüm sağlar."
		}],
		advantages: [
			"Ekonomik (beton duvara göre %30-40 ucuz)",
			"Uzun ömürlü (50-100 yıl)",
			"Esnek yapı, oturmalara uyumlu",
			"Drenaj sağlar, su baskısı yok",
			"Doğal ve estetik görünüm",
			"Hızlı uygulama",
			"Bakım gerektirmez",
			"Çevre dostu"
		],
		applications: [
			"İstinat duvarları",
			"Dere ıslahı ve erozyon kontrolü",
			"Kıyı koruması",
			"Yamaç stabilizasyonu",
			"Peyzaj duvarları",
			"Gürültü bariyerleri",
			"Köprü ayak koruması",
			"Bahçe ve park düzenlemesi"
		],
		technicalDetails: [
			"Sepet malzemesi: Galvaniz çelik (250-300 g/m² Zn) veya PVC kaplı",
			"Tel çapı: 2.7-3.4mm",
			"Göz açıklığı: 80x100mm, 60x80mm",
			"Sepet ebatları: 1x1x0.5m, 2x1x0.5m, 2x1x1m",
			"Dolgu: Kırma taş, kübik taş (100-250mm)",
			"Standart: EN 10223-3, ASTM A975",
			"Garanti: 10 yıl (galvaniz), 25 yıl (PVC)"
		],
		whyChooseUs: [
			"Statik hesap ve proje desteği",
			"Kaliteli galvaniz/PVC sepet",
			"Profesyonel uygulama ekibi",
			"Hızlı teslimat",
			"Uygun fiyat",
			"Garanti ve destek",
			"Türkiye genelinde hizmet"
		],
		faqs: [{
			question: "Gabion duvar ne kadar dayanıklıdır?",
			answer: "Galvaniz sepetler 50+ yıl, PVC kaplı sepetler 75-100 yıl dayanıklıdır. Süre, iklim koşulları ve su temas ına bağlıdır. Deniz kenarı gibi korozif ortamlarda PVC tercih edilmelidir."
		}, {
			question: "Gabion duvar maliyeti ne kadardır?",
			answer: "Maliyet, duvar yüksekliği, uzunluğu, sepet t ipi ve dolgu taşına göre değişir. M³ başına 1500-3000 TL arasındadır. Beton duvara göre %30-40 daha ekonomiktir. Ücretsiz keşif için iletişime geçebilirsiniz."
		}],
		relatedServices: [
			"sev-ortuleme",
			"yamac-yuzeyi-temizleme",
			"kaya-bariyeri"
		]
	},
	"sahne-isleri-rigging": {
		slug: "sahne-isleri-rigging",
		title: "Sahne İşleri (Rigging) Hizmetleri",
		metaDescription: "Konser, etkinlik ve sahne kurulumları için profesyonel rigging hizmetleri. Ses, ışık, dekor asma sistemleri, güvenli ve hızlı kurulum.",
		keywords: [
			"sahne rigging",
			"konser kurulumu",
			"ses ışık asma",
			"etkinlik rigging",
			"sahne güvenliği"
		],
		category: "diger",
		icon: "🎭",
		heroImage: "/services/sahne-rigging.png",
		intro: "Konser, festival, etkinlik ve canlı performanslar için profesyonel sahne rigging (asma işleri) hizmetleri sunuyoruz. Ses, ışık, video, dekor sistemlerinin güvenli kurulumu.",
		sections: [{
			heading: "Sahne Rigging Nedir?",
			content: "Rigging, sahne ve etkinliklerde ses, ışık, video ekranı, dekor ve diğer ekipmanların tavandan veya trusslara güvenli bir şekilde asılması işlemidir. Konserlerde 10-50 ton ağırlık havada asılı kalabilir. Yanlış rigging, can kaybına yol açabilir. Profesyonel rigging teknisyenleri, yük hesabı, truss yapısı, motor seçimi, bağlantı noktaları ve güvenlik faktörlerini hesaplar. Kullanılan ekipman: Chain motor (zincir motor), truss (alüminyum kafes sistem), shackle, steel wire rope, karabina. Tüm ekipman CE ve TÜV sertifikalı olmalıdır. Rigging planı, yapısal mühendis tarafından onaylanmalıdır."
		}, {
			heading: "Hizmet Kapsamı",
			content: "Rigging planı hazırlama: Yük hesabı, truss tasarımı, motor yerleşimi. Ground support (zemin truss) veya hanging (tavana asma) sistemleri. Chain motor (elektrikli halat motor) kurulumu. Truss montaj: Triangular, square, ladder truss. Ses, ışık, video ekranı asma işleri. Yük testi ve güvenlik kontrol. Etkinlik sonrası söküm. Stadyum, açık hava, salon konserler, festivaller, kurumsal etkinlikler, tiyatro ve opera prodüksiyonlarında hizmet veriyoruz."
		}],
		advantages: [
			"Deneyimli rigging ekibi",
			"CE/TÜV sertifikalı ekipman",
			"Yapısal mühendis onaylı plan",
			"Hızlı kurulum-söküm",
			"Güvenlik öncelikli",
			"7/24 teknik destek",
			"Kapsamlı sigorta",
			"Uluslararası standartlar"
		],
		applications: [
			"Konser ve festivaller",
			"Stadyum etkinlikleri",
			"Açık hava konserleri",
			"Kurumsal etkinlikler",
			"Tiyatro ve opera",
			"TV stüdyo kurulumu",
			"Fuar ve sergi"
		],
		technicalDetails: [
			"Motor: Chain motor 250kg-2000kg SWL",
			"Truss: Alüminyum, 30x30cm, 50x50cm",
			"Konnektör: Shackle, steel wire rope",
			"Standart: BGV-C1, DGUV 17, EN 13814",
			"Test: Load test, non-destructive",
			"Sertifikasyon: CE, TÜV, DGUV"
		],
		whyChooseUs: [
			"15+ yıl rigging deneyimi",
			"Büyük konser referansları",
			"Tam ekipman envanteri",
			"Yapısal mühendis ekip",
			"Hızlı mobilizasyon",
			"Rekabetçi fiyat",
			"Sigorta ve garanti"
		],
		faqs: [{
			question: "Rigging maliyeti nasıl hesaplanır?",
			answer: "Maliyet, asılacak ağırlık, truss uzunluğu, motor sayısı, etkinlik süresi ve kurulum zorluğuna göre değişir. Detaylı rigging planı sonrası teklif sunulur."
		}, {
			question: "Rigging güvenlik sertifikası gerekli midir?",
			answer: "Evet, Türkiye'de etkinlik izni için rigging planı ve yapısal mühendis raporu gereklidir. Tüm ekipman CE/TÜV sertifikalı olmalı, periyodik testlerden geçmiş olmalıdır."
		}],
		relatedServices: ["dis-cephe-dekoratif-aydinlatma", "yatay-ve-dusey-yasam-hatti"]
	},
	"sprat-egitimi": {
		slug: "sprat-egitimi",
		title: "SPRAT Eğitimi ve Sertifikasyonu",
		metaDescription: "Uluslararası geçerliliği olan SPRAT (Society of Professional Rope Access Technicians) eğitimi ve sertifikasyon programları. Level 1, 2, 3 eğitimleri.",
		keywords: [
			"SPRAT eğitimi",
			"rope access sertifikası",
			"SPRAT Level 1",
			"SPRAT Level 2",
			"iple erişim eğitimi"
		],
		category: "diger",
		icon: "🎓",
		heroImage: "/services/rope-access-egitim.png",
		intro: "SPRAT (Society of Professional Rope Access Technicians) standartlarına uygun iple erişim eğitimi ve sertifikasyonu sunuyoruz. Uluslararası geçerliliği olan Level 1, 2, 3 sertifikaları.",
		sections: [{
			heading: "SPRAT Nedir?",
			content: "SPRAT (Society of Professional Rope Access Technicians), iple erişim sektöründe ABD ve Kanada merkezli önde gelen sertifikasyon kuruluşudur. IRATA benzeri, ancak Kuzey Amerika'da daha yaygındır. SPRAT Level 1: Temel iple erişim teknisyeni, süpervizyon altında çalışır. SPRAT Level 2: Bağımsız teknisyen, ekip lideri yardımcısı. SPRAT Level 3: İleri seviye teknisyen, ekip lideri, kurtarma uzmanı, eğitmen. Sertifika 3 yıl geçerlidir, süresi içinde yenilenmelidir. Dünya çapında offshore, enerji, inşaat sektörlerinde tanınır."
		}, {
			heading: "Eğitim İçeriği",
			content: "SPRAT Level 1 (5 gün): Ekipman tanıma, temel düğümler, çıkış-iniş teknikleri, iş yerleştirme, temel kurtarma. SPRAT Level 2 (5 gün): İleri teknikler, ekip yönetimi, risk değerlendirme, kurtarma senaryoları. SPRAT Level 3 (5 gün): Kompleks kurtarma, eğitmen yetenekleri, sistem kurma, acil durum yönetimi. Eğitim teorik ve pratik içerir. Sınav: Yazılı test + pratik test. Başarılı olanlara SPRAT sertifikası verilir."
		}],
		advantages: [
			"Uluslararası geçerli sertifika",
			"Deneyimli SPRAT eğitmenler",
			"Sertifikalı ekipman",
			"Teorik + pratik eğitim",
			"Sınav dahil",
			"Küçük gruplar (max 6 kişi)",
			"3 yıl geçerlilik",
			"Global iş imkanları"
		],
		applications: [
			"Offshore platformlar",
			"Enerji santralleri",
			"İnşaat sektörü",
			"Rüzgar santralleri",
			"Telekomünikasyon",
			"Endüstriyel bakım"
		],
		technicalDetails: [
			"Seviyeler: Level 1, 2, 3",
			"Süre: 5 gün/seviye",
			"Katılımcı: Max 6 kişi/grup",
			"Yaş: Min. 18",
			"Sağlık: Tıbbi rapor gerekli",
			"Sertifika geçerlilik: 3 yıl",
			"Standart: SPRAT Safe Practices"
		],
		whyChooseUs: [
			"SPRAT sertifikalı eğitmenler",
			"10+ yıl eğitim deneyimi",
			"Tam ekipman sağlanır",
			"Pratik odaklı eğitim",
			"Yüksek başarı oranı",
			"Uluslararası network",
			"İş yerleştirme desteği"
		],
		faqs: [{
			question: "SPRAT ve IRATA farkı nedir?",
			answer: "SPRAT ABD/Kanada merkezli, IRATA ise İngiltere merkezlidir. İkisi de uluslararası geçerlidir. IRATA Avrupa, Orta Doğu, Asya'da yaygın, SPRAT ise Kuzey Amerika'da tercih edilir. Sistemleri benzerdir."
		}, {
			question: "SPRAT eğitimi için ön koşul var mı?",
			answer: "Level 1 için ön koşul yoktur. Level 2 için Level 1 sertifikası ve 500 saat tecrübe gereklidir. Level 3 için Level 2 ve 1000 saat tecrübe gerekir. Tıbbi uygunluk raporu zorunludur."
		}],
		relatedServices: ["irata-egitimi", "stand-by-rescue-hizmeti"]
	},
	"irata-egitimi": {
		slug: "irata-egitimi",
		title: "IRATA Eğitimi ve Sertifikasyonu",
		metaDescription: "Uluslararası IRATA (Industrial Rope Access Trade Association) eğitimi ve sertifikasyonu. Level 1, 2, 3 iple erişim teknisyen eğitimleri.",
		keywords: [
			"IRATA eğitimi",
			"rope access eğitim",
			"IRATA Level 1",
			"IRATA Level 2",
			"iple erişim sertifikası"
		],
		category: "diger",
		icon: "📜",
		heroImage: "/services/rope-access-egitim.png",
		intro: "IRATA (Industrial Rope Access Trade Association) standartlarına uygun profesyonel iple erişim eğitimi ve sertifikasyonu. Dünya çapında geçerli Level 1, 2, 3 programları.",
		sections: [{
			heading: "IRATA Nedir?",
			content: "IRATA (Industrial Rope Access Trade Association), 1987'de İngiltere'de kurulan, iple erişim sektörünün en prestijli uluslararası kuruluşudur. IRATA sertifikası, 90'dan fazla ülkede tanınır ve kabul edilir. IRATA Level 1: Temel teknisyen, süpervizyon altında çalışır. IRATA Level 2: Deneyimli teknisyen, bağımsız çalışır, ekip koordine eder. IRATA Level 3: İleri seviye, ekip lideri, risk değerlendirme, acil kurtarma ve eğitim otoritesi. Sertifika 3 yıl geçerlidir, her yıl logbook kaydı gereklidir. Dünyada petrokimya, offshore, enerji, inşaat sektörlerinde en çok tercih edilen standarttır."
		}, {
			heading: "Eğitim Programı",
			content: "IRATA Level 1 (5 gün): Ekipman tanıma, düğümler, çıkış-iniş basit sistemleri, iş yerleştirme, temel kurtarma. IRATA Level 2 (5 gün): İleri teknikler (deviated descent, rope-to-rope transfer), ekip yönetimi, kompleks kurtarma. IRATA Level 3 (5 gün): Sistem kurma, risk değerlendirme, acil kurtarma planlaması, eğitmen becerileri. Eğitim teorik dersler ve yoğun pratik tatbikatları kapsar. Sınav: Teorik yazılı test, pratik beceri testleri. Başarılı olanlara IRATA Uluslararası Sertifika verilir."
		}],
		advantages: [
			"90+ ülkede geçerli sertifika",
			"IRATA sertifikalı eğitmenler",
			"ISO 23846 uyumlu",
			"Yoğun pratik eğitim",
			"Küçük gruplar (max 6 kişi)",
			"Tam ekipman sağlanır",
			"Uluslararası iş fırsatları",
			"Logbook desteği"
		],
		applications: [
			"Offshore oil & gas platformlar",
			"Petrokimya tesisleri",
			"Enerji santralleri",
			"Rüzgar türbini bakımı",
			"Cephe bakımı",
			"Köprü ve baraj muayenesi",
			"Telekomünikasyon kuleleri"
		],
		technicalDetails: [
			"Seviyeler: Level 1, 2, 3",
			"Süre: 5 gün/seviye",
			"Katılımcı: Max 6 kişi",
			"Yaş: Min. 18",
			"Sağlık: IRATA medical form",
			"Sertifika geçerlilik: 3 yıl",
			"Standart: IRATA ICOP (Code of Practice)"
		],
		whyChooseUs: [
			"IRATA Full Member eğitim merkezi",
			"15+ yıl IRATA eğitim tecrübesi",
			"Tam donanımlı eğitim sahası",
			"Yüksek başarı oranı (%95+)",
			"Uluslararası iş network",
			"Yurtdışı iş yerleştirme desteği",
			"Garanti ve mentorluk"
		],
		faqs: [{
			question: "IRATA sertifikası ile nerede çalışabilirim?",
			answer: "IRATA sertifikası, dünya çapında offshore platformlar, petrokimya tesisleri, enerji santralleri, rüzgar türbinleri, köprüler ve yüksek yapılarda geçerlidir. Özellikle Avrupa, Orta Doğu, Asya, Avustralya ve Afrika'da yüksek talep vardır."
		}, {
			question: "IRATA Level 2 için gereksinimler nedir?",
			answer: "IRATA Level 2 için Level 1 sertifikası ve minimum 1000 saat (yaklaşık 6 ay) iple erişim iş tecrübesi gereklidir. Ayrıca güncel logbook (çalışma kaydı) ibraz edilmelidir."
		}],
		relatedServices: [
			"sprat-egitimi",
			"stand-by-rescue-hizmeti",
			"tersane-ve-offshore-hizmetleri"
		]
	},
	"kar-ve-cig-kontrolu": {
		slug: "kar-ve-cig-kontrolu",
		title: "Kar ve Çığ Kontrolü Uygulamaları",
		metaDescription: "Profesyonel kar ve çığ kontrolü uygulamaları. Çığ bariyeri kurulumu, kar tutucu sistemler, çığ tetikleme ve risk analizi hizmetleri ile can ve mal güvenliğinizi koruyoruz.",
		keywords: [
			"çığ kontrolü",
			"kar kontrolü",
			"çığ bariyeri",
			"kar tutucu sistem",
			"çığ tetikleme",
			"çığ risk analizi",
			"avalanche control",
			"çığ koruma",
			"dağ güvenliği",
			"kar yönetimi"
		],
		category: "jeoteknik",
		icon: "❄️",
		heroImage: "/services/kar-cig.png",
		intro: "Dağlık bölgelerde can ve mal güvenliğini tehdit eden kar ve çığ tehlikelerine karşı profesyonel mühendislik çözümleri sunuyoruz. Çığ bariyeri kurulumu, kar tutucu sistemler, çığ tetikleme operasyonları ve kapsamlı risk analizleri ile yaşam alanlarını, altyapıyı ve ulaşım hatlarını güvenli kılıyoruz.",
		sections: [
			{
				heading: "Kar ve Çığ Kontrolü Nedir?",
				content: "Kar ve çığ kontrolü, dağlık ve eğimli arazilerde biriken karın kontrolsüz şekilde kaymasını (çığ) önlemek veya etkisini azaltmak amacıyla uygulanan mühendislik disiplinidir. Çığ, tonlarca karın büyük bir hız ve enerjiyle yamaçtan aşağıya inmesi olayıdır ve insanlar, yerleşim yerleri, yollar, demiryolları ve enerji hatları için ciddi tehlikeler oluşturur.\n\nKutup Grup olarak, uluslararası standartlara uygun kar ve çığ kontrol sistemleri tasarlıyor, kuruyoruz. Swiss Federal Institute for Snow and Avalanche Research (SLF) ve European Avalanche Warning Services (EAWS) standartlarını benimsiyoruz. Deneyimli jeoteknik mühendislerimiz ve endüstriyel dağcılık ekibimiz, en zorlu arazi koşullarında bile güvenli ve etkili çözümler sunuyor.\n\nTürkiye'nin Doğu Anadolu, Karadeniz ve İç Anadolu bölgelerinde birçok çığ riski taşıyan güzergah bulunmaktadır. Karayolları, demiryolları, enerji iletim hatları ve dağ turizmi tesisleri bu riskten doğrudan etkilenmektedir. Profesyonel çığ kontrol uygulamaları, bu risklerin yönetilmesinde kritik bir rol oynar."
			},
			{
				heading: "Çığ Bariyeri Kurulumu",
				content: "Çığ bariyerleri, kar kütlesinin yamaçtan ayrılmasını fiziksel olarak engelleyen veya çığın yönünü değiştiren yapılardır. Çelik ağ bariyerler, kar köprüleri, rüzgar direkleri ve deflektör yapılar olmak üzere farklı çığ bariyeri türleri mevcuttur.\n\nÇelik ağ çığ bariyerleri, en yaygın kullanılan pasif koruma yöntemidir. Yüksek dayanımlı çelik halatlardan üretilen bu sistemler, karın yamaçta kalmasını sağlar. 3-5 metre yüksekliğinde kurulur ve kar basıncına karşı dayanıklıdır. Kurulum sırasında yamaç eğimi, kar birikimi miktarı, rüzgar yönü ve zemin koşulları analiz edilir.\n\nKar köprüleri, geleneksel ama etkili çığ kontrol yapılarıdır. Ahşap veya çelikten üretilen bu yapılar, karı yamacın üst kısımlarında tutarak çığ oluşumunu engeller. Özellikle Avrupa Alpleri'nde yaygın olarak kullanılan bu yöntem, Türkiye koşullarına da başarıyla adapte edilmiştir.\n\nDeflektör yapılar, çığın yönünü değiştirerek korunması gereken yapıları veya yolları çığ etkisinden korur. Betonarme veya çelik deflektörler, çığın enerji yoğunluğunu azaltarak güvenli bir yöne kanalize eder. Yerleşim yerleri ve altyapı tesislerinin korunmasında kritik öneme sahiptir."
			},
			{
				heading: "Kar Tutucu Sistemler",
				content: "Kar tutucu sistemler, çatılarda, yamaçlarda ve altyapı çevresinde karın kontrolsüz kaymasını önleyen mühendislik çözümleridir. Bu sistemler, çığ bariyerlerinden farklı olarak daha küçük ölçekli ve yapı odaklıdır.\n\nÇatı kar tutucuları, binaların çatılarından düşen kar kütlesinin insanlara ve araçlara zarar vermesini önler. Türkiye'de özellikle Doğu Anadolu ve Karadeniz bölgesindeki yoğun kar yağışı alan illerde zorunlu hale getirilmiştir. Çelik borulu, ağlı ve levhalı kar tutucu tipleri mevcuttur.\n\nYamaç kar tutucuları, yamaçlarda kar birikimini kontrol altında tutar. Kar çitler, kar baraları ve kar hendekleri bu kategoriye girer. Bu sistemler, özellikle karayolları ve demiryolları kenarındaki yamaçlarda kullanılır. Karın belirli noktalarda birikmesini sağlayarak çığ riskini azaltır.\n\nAltyapı çevresi kar koruma sistemleri, enerji iletim hatları, baz istasyonları, trafolar ve endüstriyel tesislerin çevresine kurulan koruma yapılarıdır. Bu yapılar, hem kar birikimini hem de çığ etkisini azaltarak altyapının sürekli ve güvenli çalışmasını sağlar."
			},
			{
				heading: "Çığ Tetikleme Operasyonları",
				content: "Kontrollü çığ tetikleme, büyük çığ tehlikesi oluşmadan önce küçük ve yönetilebilir çığların kontrollü olarak oluşturulmasıdır. Bu yöntem, büyük ve yıkıcı çığları önlemenin en etkili aktif yöntemlerinden biridir.\n\nGazex sistemi, uzaktan kumandalı gaz patlatma yöntemiyle çığ tetikler. Sabit kurulumlu bu sistem, tehlikeli kar birikimi tespit edildiğinde operatör tarafından güvenli bir mesafeden aktive edilir. Propan-oksijen karışımı ile oluşturulan basınç dalgası, karın kontrollü şekilde kaymasını sağlar.\n\nHelikopterle çığ tetikleme, erişilmesi güç bölgelerde uygulanan bir yöntemdir. Helikopterden patlatıcı madde bırakılarak veya ses dalgası oluşturularak kontrollü çığ tetiklenir. Bu yöntem, özellikle kayak merkezleri ve otoyolların güvenliği için kullanılır.\n\nManuel çığ tetikleme, uzman personel tarafından yerinde yapılan kontrollü tetikleme operasyonudur. IRATA ve SPRAT sertifikalı dağcılık uzmanlarımız, güvenli pozisyonlardan patlatıcı veya mekanik yöntemlerle çığ tetikler. Her operasyon öncesi detaylı risk analizi yapılır ve güvenlik perimetresi oluşturulur."
			},
			{
				heading: "Çığ Risk Analizi ve Haritalama",
				content: "Çığ risk analizi, bir bölgenin çığ tehlikesinin bilimsel yöntemlerle değerlendirilmesidir. Topografik analiz, iklim verileri, kar profili ölçümleri ve tarihsel çığ kayıtları bu analizin temel bileşenleridir.\n\nTopoğrafik analiz, yamaç eğimi, yönü, yüksekliği ve şekli gibi fiziksel özelliklerin incelenmesini kapsar. Çığ oluşumu için kritik eğim aralığı 25-60 derece arasındadır. Güneye bakan yamaçlarda kar erimesi kaynaklı ıslak çığ riski artarken, kuzeye bakan yamaçlarda sulu çığ daha az görülür.\n\nKar profili ölçümleri, kar tabakasının iç yapısını analiz eder. Karın yoğunluğu, sıcaklığı, nem içeriği ve tabaka arası bağlantı gücü ölçülür. Zayıf tabakalar çığ kopma noktaları olarak tanımlanır. Bu ölçümler düzenli periyotlarla tekrarlanarak kar stabilitesi takip edilir.\n\nGIS (Coğrafi Bilgi Sistemi) tabanlı çığ haritalama, tüm verilerin dijital haritalar üzerinde birleştirilmesidir. Bu haritalar, çığ tehlikeli alanları, kaçış güzergahlarını, koruma yapılarının optimal konumlarını ve risk seviyelerini görselleştirir. Belediyeler, karayolları müdürlükleri ve kayak merkezleri için kritik planlama aracıdır."
			},
			{
				heading: "Erken Uyarı Sistemleri",
				content: "Çığ erken uyarı sistemleri, çığ oluşum riskini sürekli izleyen ve tehlike durumunda uyarı veren teknolojik çözümlerdir. Meteorolojik sensörler, sismik algılayıcılar, radar sistemleri ve kamera ağları bu sistemlerin temel bileşenleridir.\n\nOtomatik meteoroloji istasyonları, kar yağışı miktarı, rüzgar hızı ve yönü, sıcaklık ve nem gibi verileri anlık olarak toplar. Bu veriler çığ tahmin modelleriyle işlenerek risk seviyesi hesaplanır. Kritik eşik değerleri aşıldığında otomatik uyarılar tetiklenir.\n\nSismik algılayıcılar, zemindeki titreşimleri izleyerek kar hareketlerini tespit eder. Çığ başlamadan önce oluşan mikro sarsıntılar bu sensörler tarafından yakalanır ve erken uyarı sağlanır. Özellikle kritik altyapı güzergahlarında yaygın olarak kullanılır.\n\nEntegre çığ yönetim platformu, tüm sensör verilerini merkezi bir kontrol odasında toplayan yazılım sistemidir. Yapay zeka destekli tahmin modelleri, geçmiş ve anlık verileri analiz ederek çığ olasılığını hesaplar. Bu platform, yetkili birimlere anlık bildirim göndererek hızlı müdahale imkanı sağlar."
			}
		],
		advantages: [
			"Uluslararası standartlarda (SLF, EAWS) çığ kontrol çözümleri",
			"IRATA ve SPRAT sertifikalı dağcılık uzmanları",
			"15+ yıl jeoteknik mühendislik deneyimi",
			"GIS tabanlı dijital çığ haritalama",
			"Otomatik erken uyarı sistemi kurulumu",
			"Kontrollü çığ tetikleme operasyonları",
			"7/24 acil müdahale ekibi",
			"Türkiye genelinde hizmet ağı"
		],
		applications: [
			"Karayolları ve otoyollar çığ koruması",
			"Demiryolları güzergah güvenliği",
			"Kayak merkezleri çığ yönetimi",
			"Enerji iletim hatları koruması",
			"Dağ turizm tesisleri güvenliği",
			"Yerleşim yerleri çığ koruması",
			"Maden ve taş ocakları güvenliği",
			"Baraj ve HES tesisleri koruması",
			"Askeri tesisler ve güzergahlar",
			"Doğalgaz ve petrol boru hatları"
		],
		technicalDetails: [
			"Çelik ağ çığ bariyeri: en 750 kJ darbe dayanımı",
			"Kar tutucu yükseklik: 3-5 metre (arazi koşullarına göre)",
			"Çığ tetikleme Gazex kapasitesi: 1-4 m³ patlama hacmi",
			"Meteoroloji istasyonu: -40°C ile +50°C çalışma aralığı",
			"Sismik algılayıcı hassasiyeti: 0.001g",
			"GIS haritalama çözünürlüğü: 1m DEM verileri",
			"Erken uyarı sistemi reaksiyon: <60 saniye",
			"Standart: EN 16366, SLF Guideline 2015"
		],
		whyChooseUs: [
			"Türkiye'nin lider çığ kontrol ekibi",
			"Swiss ve Avusturya standartlarında çözümler",
			"Entegre mühendislik + dağcılık uzmanlığı",
			"Tam kapsamlı çözüm: analiz-tasarım-kurulum-bakım",
			"Dijital çığ yönetim platformu",
			"Gazex ve Wyssen çığ tetikleme teknolojileri",
			"7/24 acil durum müdahale kapasitesi"
		],
		faqs: [
			{
				question: "Çığ kontrolü neden önemlidir?",
				answer: "Çığlar, saatte 300+ km hıza ulaşabilen yıkıcı doğal olaylardır. Yerleşim yerleri, yollar, enerji hatları ve turizm tesisleri için ciddi risk oluşturur. Profesyonel çığ kontrol sistemleri, can ve mal güvenliğini sağlamanın yanı sıra, altyapı yatırımlarını korur ve kesintisiz hizmet sunmayı mümkün kılar."
			},
			{
				question: "Çığ bariyeri kurulumu ne kadar sürer?",
				answer: "Çığ bariyeri kurulumu, projenin büyüklüğüne ve arazi koşullarına göre 2-8 hafta arasında sürer. Standart bir karayolu çığ koruma projesi yaklaşık 4-6 hafta, büyük kayak merkezi projeleri ise 2-3 ay sürebilir. Kış öncesinde kurulumun tamamlanması kritik öneme sahiptir."
			},
			{
				question: "Kontrollü çığ tetikleme güvenli midir?",
				answer: "Evet, kontrollü çığ tetikleme uluslararası standartlarda uygulanan güvenli bir yöntemdir. Her operasyon öncesi kapsamlı risk analizi yapılır, güvenlik perimetresi belirlenir ve tüm ilgili birimler bilgilendirilir. IRATA/SPRAT sertifikalı uzmanlarımız tarafından gerçekleştirilir."
			}
		],
		relatedServices: [
			"kaya-bariyeri",
			"moloz-bariyer",
			"yamac-yuzeyi-temizleme"
		]
	}
};
//#endregion
//#region src/pages/Services.tsx
var CATEGORIES$1 = [
	{
		key: "all",
		label: "Tümü"
	},
	{
		key: "endustriyel",
		label: "Endüstriyel Dağcılık"
	},
	{
		key: "jeoteknik",
		label: "Jeoteknik Çözümler"
	},
	{
		key: "diger",
		label: "Diğer Hizmetler"
	}
];
var categoryIcons = {
	endustriyel: /* @__PURE__ */ jsxs("svg", {
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M2 20h20" }),
			/* @__PURE__ */ jsx("path", { d: "M5 20V10l7-7 7 7v10" }),
			/* @__PURE__ */ jsx("path", { d: "M9 20v-6h6v6" })
		]
	}),
	jeoteknik: /* @__PURE__ */ jsx("svg", {
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
	}),
	diger: /* @__PURE__ */ jsx("svg", {
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
	})
};
var categoryColors = {
	endustriyel: {
		bg: "rgba(62, 146, 204, 0.1)",
		color: "#3E92CC"
	},
	jeoteknik: {
		bg: "rgba(16, 185, 129, 0.1)",
		color: "#10B981"
	},
	diger: {
		bg: "rgba(139, 92, 246, 0.1)",
		color: "#8B5CF6"
	}
};
function HizmetlerPageClient() {
	const [activeCategory, setActiveCategory] = useState("all");
	const allServices = Object.values(SERVICES_DATA);
	const filteredServices = activeCategory === "all" ? allServices : allServices.filter((s) => s.category === activeCategory);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsxs("section", {
				className: "hizmetler-hero",
				children: [/* @__PURE__ */ jsx("div", { className: "hero-grid-bg" }), /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsxs("div", {
						className: "hero-content",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "hero-eyebrow",
								children: "Profesyonel Çözümler"
							}),
							/* @__PURE__ */ jsx("h1", { children: "Tüm Hizmetlerimiz" }),
							/* @__PURE__ */ jsxs("p", {
								className: "hero-subtitle",
								children: [
									"Endüstriyel dağcılık, jeoteknik uygulamalar ve iş güvenliği alanında",
									" ",
									/* @__PURE__ */ jsx("strong", { children: allServices.length }),
									" farklı hizmet sunuyoruz"
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "section dot-grid",
				style: { background: "#f8fafc" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "container",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "filter-container",
							children: /* @__PURE__ */ jsx("div", {
								className: "filter-bar filter-buttons",
								children: CATEGORIES$1.map((cat) => /* @__PURE__ */ jsx("button", {
									onClick: () => setActiveCategory(cat.key),
									className: `filter-btn ${activeCategory === cat.key ? "active" : ""}`,
									children: cat.label
								}, cat.key))
							})
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "filter-count",
							children: [filteredServices.length, " hizmet görüntüleniyor"]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "services-grid",
							children: filteredServices.map((service, index) => {
								const colors = categoryColors[service.category] || categoryColors.diger;
								const icon = categoryIcons[service.category] || categoryIcons.diger;
								return /* @__PURE__ */ jsx(ScrollReveal, {
									variant: "fadeUp",
									delay: Math.min(index * 80, 400),
									children: /* @__PURE__ */ jsx(Link$1, {
										href: `/hizmetler/${service.slug}`,
										className: "service-card-link",
										children: /* @__PURE__ */ jsxs("div", {
											className: "service-card",
											children: [service.heroImage && /* @__PURE__ */ jsx("div", {
												className: "service-card-image",
												children: /* @__PURE__ */ jsx(Image, {
													src: service.heroImage,
													alt: service.title,
													width: 400,
													height: 220,
													style: {
														objectFit: "cover",
														width: "100%",
														height: "180px"
													}
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "service-card-body",
												children: [
													/* @__PURE__ */ jsx("div", {
														className: "service-icon",
														style: {
															background: colors.bg,
															color: colors.color
														},
														children: icon
													}),
													/* @__PURE__ */ jsx("div", {
														className: "service-category",
														children: service.category === "endustriyel" ? "Endüstriyel" : service.category === "jeoteknik" ? "Jeoteknik" : "Diğer"
													}),
													/* @__PURE__ */ jsx("h3", { children: service.title }),
													/* @__PURE__ */ jsxs("p", { children: [service.metaDescription.slice(0, 120), "..."] }),
													/* @__PURE__ */ jsxs("span", {
														className: "service-link",
														children: ["Detayları İncele", /* @__PURE__ */ jsxs("svg", {
															width: "16",
															height: "16",
															viewBox: "0 0 24 24",
															fill: "none",
															stroke: "currentColor",
															strokeWidth: "2",
															strokeLinecap: "round",
															strokeLinejoin: "round",
															children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
														})]
													})
												]
											})]
										})
									})
								}, service.slug);
							})
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "cta-section",
				children: /* @__PURE__ */ jsx("div", {
					className: "container",
					children: /* @__PURE__ */ jsx(ScrollReveal, {
						variant: "scaleIn",
						children: /* @__PURE__ */ jsxs("div", {
							className: "cta-inner",
							children: [
								/* @__PURE__ */ jsx("h2", { children: "İhtiyacınıza Uygun Hizmeti Bulamadınız mı?" }),
								/* @__PURE__ */ jsx("p", { children: "Uzman ekibimize danışarak projenize özel çözüm oluşturabilirsiniz." }),
								/* @__PURE__ */ jsxs(Link$1, {
									href: "/iletisim",
									className: "btn btn-cta",
									children: ["Bizimle İletişime Geçin", /* @__PURE__ */ jsxs("svg", {
										width: "18",
										height: "18",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
									})]
								})
							]
						})
					})
				})
			})
		] }),
		/* @__PURE__ */ jsx(Footer, {}),
		/* @__PURE__ */ jsx("style", {
			jsx: true,
			children: `
                /* Hero */
                .hizmetler-hero {
                    position: relative;
                    padding: 160px 0 80px;
                    background: linear-gradient(135deg, #0A2463 0%, #1e3a8a 60%, #3E92CC 100%);
                    overflow: hidden;
                    text-align: center;
                }

                .hero-grid-bg {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
                    background-size: 28px 28px;
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                }

                .hero-eyebrow {
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-ice-blue);
                    margin-bottom: var(--spacing-3);
                }

                .hizmetler-hero h1 {
                    font-size: clamp(2.25rem, 5vw, 3.5rem);
                    color: white;
                    letter-spacing: -0.02em;
                    margin-bottom: var(--spacing-4);
                }

                .hero-subtitle {
                    font-size: var(--font-size-lg);
                    color: rgba(255,255,255,0.75);
                    max-width: 560px;
                    margin: 0 auto;
                    line-height: var(--line-height-relaxed);
                }

                .hero-subtitle strong {
                    color: white;
                }

                /* Filter Bar */
                .filter-bar {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--spacing-3);
                    justify-content: center;
                    margin-bottom: var(--spacing-4);
                }

                .filter-btn {
                    padding: var(--spacing-2) var(--spacing-5);
                    border: 1px solid var(--border-default);
                    border-radius: var(--radius-full);
                    background: white;
                    font-size: var(--font-size-sm);
                    font-weight: 600;
                    font-family: var(--font-heading);
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: all 0.25s ease;
                }

                .filter-btn:hover {
                    border-color: var(--color-arctic-blue);
                    color: var(--color-arctic-blue);
                }

                .filter-btn.active {
                    background: var(--color-deep-navy);
                    color: white;
                    border-color: var(--color-deep-navy);
                }

                .filter-count {
                    text-align: center;
                    font-size: var(--font-size-sm);
                    color: var(--text-muted);
                    margin-bottom: var(--spacing-10);
                }

                /* Services Grid */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: var(--spacing-6);
                }

                .service-card-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                    height: 100%;
                }

                .service-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--border-default);
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                }

                .service-card-image {
                    width: 100%;
                    overflow: hidden;
                }

                .service-card-image img {
                    transition: transform 0.5s ease;
                }

                .service-card:hover .service-card-image img {
                    transform: scale(1.05);
                }

                .service-card-body {
                    padding: var(--spacing-6);
                }

                .service-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: var(--gradient-primary);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.4s ease;
                }

                .service-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(10,36,99,0.12);
                    border-color: rgba(62,146,204,0.25);
                }

                .service-card:hover::before {
                    transform: scaleX(1);
                }

                .service-icon {
                    width: 52px;
                    height: 52px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: var(--spacing-4);
                    transition: transform 0.3s ease;
                }

                .service-card:hover .service-icon {
                    transform: scale(1.1) rotate(3deg);
                }

                .service-category {
                    font-size: var(--font-size-xs);
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--text-muted);
                    margin-bottom: var(--spacing-2);
                }

                .service-card h3 {
                    font-size: var(--font-size-h6);
                    color: var(--color-deep-navy);
                    margin-bottom: var(--spacing-3);
                    line-height: 1.3;
                }

                .service-card p {
                    font-size: var(--font-size-sm);
                    color: var(--text-secondary);
                    line-height: var(--line-height-relaxed);
                    margin-bottom: var(--spacing-4);
                }

                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: var(--font-size-sm);
                    font-weight: 600;
                    color: var(--color-arctic-blue);
                    transition: gap 0.3s ease;
                }

                .service-card:hover .service-link {
                    gap: 10px;
                }

                /* CTA */
                .cta-section {
                    background: var(--gradient-primary);
                    padding: var(--spacing-20) 0;
                    text-align: center;
                }

                .cta-inner {
                    position: relative;
                    z-index: 1;
                }

                .cta-inner h2 {
                    color: white;
                    font-size: var(--font-size-h3);
                    margin-bottom: var(--spacing-4);
                }

                .cta-inner p {
                    color: rgba(255,255,255,0.85);
                    font-size: var(--font-size-lg);
                    margin-bottom: var(--spacing-8);
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                }

                @media (max-width: 768px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: var(--spacing-4);
                    }

                    .hizmetler-hero {
                        padding: 110px 0 48px;
                    }

                    .hizmetler-hero h1 {
                        font-size: 1.75rem;
                        line-height: 1.25;
                    }

                    .hizmetler-hero p {
                        font-size: 0.95rem;
                    }

                    .filter-container {
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                        padding-bottom: 4px;
                    }

                    .filter-container::-webkit-scrollbar {
                        display: none;
                    }

                    .filter-buttons {
                        flex-wrap: nowrap;
                        justify-content: flex-start;
                        gap: 8px;
                        padding: 0 var(--spacing-4);
                    }

                    .filter-btn {
                        white-space: nowrap;
                        padding: 8px 16px;
                        font-size: 0.82rem;
                        flex-shrink: 0;
                    }

                    .service-card-body {
                        padding: var(--spacing-4) var(--spacing-5);
                    }

                    .service-card h3 {
                        font-size: 1rem;
                    }

                    .service-card p {
                        font-size: 0.85rem;
                        line-height: 1.55;
                    }

                    .service-card-image img {
                        height: 160px !important;
                    }

                    .cta-section {
                        padding: var(--spacing-12) 0;
                    }

                    .cta-inner h2 {
                        font-size: 1.5rem;
                    }

                    .cta-inner p {
                        font-size: 0.95rem;
                    }

                    .section-content {
                        padding: var(--spacing-12) 0;
                    }
                }

                @media (max-width: 480px) {
                    .hizmetler-hero {
                        padding: 100px 0 40px;
                    }

                    .hizmetler-hero h1 {
                        font-size: 1.5rem;
                    }

                    .service-card-image img {
                        height: 140px !important;
                    }

                    .service-card-body {
                        padding: var(--spacing-4);
                    }

                    .service-icon {
                        width: 44px;
                        height: 44px;
                        border-radius: 12px;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `
		})
	] });
}
//#endregion
//#region src/components/services/ServiceContentClient.tsx
var SERVICE_ICON_MAP = {
	"💡": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M9 18h6" }),
			/* @__PURE__ */ jsx("path", { d: "M10 22h4" }),
			/* @__PURE__ */ jsx("path", { d: "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" })
		]
	}),
	"⚓": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "5",
				r: "3"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "12",
				y1: "22",
				x2: "12",
				y2: "8"
			}),
			/* @__PURE__ */ jsx("path", { d: "M5 12H2a10 10 0 0020 0h-3" })
		]
	}),
	"✨": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "m12 3-1.912 5.813a2 2 0 01-1.275 1.275L3 12l5.813 1.912a2 2 0 011.275 1.275L12 21l1.912-5.813a2 2 0 011.275-1.275L21 12l-5.813-1.912a2 2 0 01-1.275-1.275L12 3z" }),
			/* @__PURE__ */ jsx("path", { d: "M5 3v4" }),
			/* @__PURE__ */ jsx("path", { d: "M19 17v4" }),
			/* @__PURE__ */ jsx("path", { d: "M3 5h4" }),
			/* @__PURE__ */ jsx("path", { d: "M17 19h4" })
		]
	}),
	"🛡️": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }), /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })]
	}),
	"🔗": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ jsx("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }), /* @__PURE__ */ jsx("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })]
	}),
	"🏔️": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ jsx("path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }), /* @__PURE__ */ jsx("path", { d: "m4.14 15.08 2.86-2.7 3 2.7" })]
	}),
	"🧱": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("rect", {
				x: "1",
				y: "6",
				width: "22",
				height: "4",
				rx: "1"
			}),
			/* @__PURE__ */ jsx("rect", {
				x: "1",
				y: "14",
				width: "22",
				height: "4",
				rx: "1"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "12",
				y1: "6",
				x2: "12",
				y2: "10"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "6",
				y1: "14",
				x2: "6",
				y2: "18"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "18",
				y1: "14",
				x2: "18",
				y2: "18"
			})
		]
	}),
	"⚗️": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M10 2v6l-6 10a1 1 0 00.87 1.5h14.26a1 1 0 00.87-1.5L14 8V2" }),
			/* @__PURE__ */ jsx("line", {
				x1: "8.5",
				y1: "2",
				x2: "15.5",
				y2: "2"
			}),
			/* @__PURE__ */ jsx("path", { d: "M7 16h10" })
		]
	}),
	"🛑": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }), /* @__PURE__ */ jsx("line", {
			x1: "4.93",
			y1: "4.93",
			x2: "19.07",
			y2: "19.07"
		})]
	}),
	"🔀": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("polyline", { points: "16 3 21 3 21 8" }),
			/* @__PURE__ */ jsx("line", {
				x1: "4",
				y1: "20",
				x2: "21",
				y2: "3"
			}),
			/* @__PURE__ */ jsx("polyline", { points: "21 16 21 21 16 21" }),
			/* @__PURE__ */ jsx("line", {
				x1: "15",
				y1: "15",
				x2: "21",
				y2: "21"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "4",
				y1: "4",
				x2: "9",
				y2: "9"
			})
		]
	}),
	"🚧": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("rect", {
				x: "2",
				y: "6",
				width: "20",
				height: "12",
				rx: "2"
			}),
			/* @__PURE__ */ jsx("path", { d: "M12 6v12" }),
			/* @__PURE__ */ jsx("path", { d: "M2 12h20" })
		]
	}),
	"🌲": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M17 22v-2" }),
			/* @__PURE__ */ jsx("path", { d: "M7 22v-2" }),
			/* @__PURE__ */ jsx("path", { d: "M17 13H7l5-10 5 10z" }),
			/* @__PURE__ */ jsx("path", { d: "M19 18H5l2-5h10l2 5z" })
		]
	}),
	"🚑": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M10 10H6" }),
			/* @__PURE__ */ jsx("path", { d: "M8 8v4" }),
			/* @__PURE__ */ jsx("path", { d: "M22 18v-7a2 2 0 00-.67-1.49L17 6H3a1 1 0 00-1 1v11" }),
			/* @__PURE__ */ jsx("circle", {
				cx: "7",
				cy: "18",
				r: "2"
			}),
			/* @__PURE__ */ jsx("path", { d: "M9 18h6" }),
			/* @__PURE__ */ jsx("circle", {
				cx: "17",
				cy: "18",
				r: "2"
			})
		]
	}),
	"💨": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M17.7 7.7a2.5 2.5 0 111.8 4.3H2" }),
			/* @__PURE__ */ jsx("path", { d: "M9.6 4.6A2 2 0 1111 8H2" }),
			/* @__PURE__ */ jsx("path", { d: "M12.6 19.4A2 2 0 1014 16H2" })
		]
	}),
	"🪨": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M11 18l1.5-6.5L18 9l-2-5-6 1L4 10l3 4 4 4z" }),
			/* @__PURE__ */ jsx("path", { d: "M20 21l-3-3" }),
			/* @__PURE__ */ jsx("path", { d: "M8 21l-2-6" })
		]
	}),
	"❄️": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("line", {
				x1: "12",
				y1: "2",
				x2: "12",
				y2: "22"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "2",
				y1: "12",
				x2: "22",
				y2: "12"
			}),
			/* @__PURE__ */ jsx("path", { d: "M20 16l-4-4 4-4" }),
			/* @__PURE__ */ jsx("path", { d: "M4 8l4 4-4 4" }),
			/* @__PURE__ */ jsx("path", { d: "M16 4l-4 4-4-4" }),
			/* @__PURE__ */ jsx("path", { d: "M8 20l4-4 4 4" })
		]
	}),
	"🎭": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M2 12a5 5 0 005 5 8 8 0 001.5-.2 5 5 0 007 0A8 8 0 0017 17a5 5 0 005-5V7h-5a8 8 0 00-10 0H2v5z" }),
			/* @__PURE__ */ jsx("path", { d: "M6 11a.5.5 0 001 0 .5.5 0 00-1 0z" }),
			/* @__PURE__ */ jsx("path", { d: "M17 11a.5.5 0 001 0 .5.5 0 00-1 0z" })
		]
	}),
	"🎓": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ jsx("path", { d: "M22 10v6M2 10l10-5 10 5-10 5z" }), /* @__PURE__ */ jsx("path", { d: "M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" })]
	}),
	"📜": /* @__PURE__ */ jsxs("svg", {
		width: "48",
		height: "48",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
			/* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
			/* @__PURE__ */ jsx("line", {
				x1: "16",
				y1: "13",
				x2: "8",
				y2: "13"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "16",
				y1: "17",
				x2: "8",
				y2: "17"
			}),
			/* @__PURE__ */ jsx("polyline", { points: "10 9 9 9 8 9" })
		]
	})
};
var FallbackIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "48",
	height: "48",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "10"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "12",
			y1: "16",
			x2: "12",
			y2: "12"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "12",
			y1: "8",
			x2: "12.01",
			y2: "8"
		})
	]
});
var BuildingIcon = () => /* @__PURE__ */ jsxs("svg", {
	width: "28",
	height: "28",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [
		/* @__PURE__ */ jsx("rect", {
			x: "4",
			y: "2",
			width: "16",
			height: "20",
			rx: "2",
			ry: "2"
		}),
		/* @__PURE__ */ jsx("path", { d: "M9 22v-4h6v4" }),
		/* @__PURE__ */ jsx("line", {
			x1: "8",
			y1: "6",
			x2: "10",
			y2: "6"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "14",
			y1: "6",
			x2: "16",
			y2: "6"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "8",
			y1: "10",
			x2: "10",
			y2: "10"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "14",
			y1: "10",
			x2: "16",
			y2: "10"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "8",
			y1: "14",
			x2: "10",
			y2: "14"
		}),
		/* @__PURE__ */ jsx("line", {
			x1: "14",
			y1: "14",
			x2: "16",
			y2: "14"
		})
	]
});
var CheckIcon = () => /* @__PURE__ */ jsx("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "var(--color-arctic-blue, #3E92CC)",
	strokeWidth: "2.5",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
});
function getServiceIcon(icon) {
	return SERVICE_ICON_MAP[icon] || /* @__PURE__ */ jsx(FallbackIcon, {});
}
function getRelatedServiceTitle(slug) {
	const service = SERVICES_DATA[slug];
	return service ? service.title : slug;
}
function ServiceContentClient({ service }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("main", {
		className: "service-page",
		children: [/* @__PURE__ */ jsx("section", {
			className: "service-hero",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "breadcrumb",
					children: [
						/* @__PURE__ */ jsx(Link$1, {
							href: "/",
							children: "Anasayfa"
						}),
						/* @__PURE__ */ jsx("span", { children: " / " }),
						/* @__PURE__ */ jsx(Link$1, {
							href: "/hizmetler",
							children: "Hizmetler"
						}),
						/* @__PURE__ */ jsx("span", { children: " / " }),
						/* @__PURE__ */ jsx("span", { children: service.title })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "service-hero-layout",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "service-hero-text",
						children: [
							/* @__PURE__ */ jsx("h1", { children: service.title }),
							/* @__PURE__ */ jsx("p", {
								className: "service-intro",
								children: service.intro
							}),
							/* @__PURE__ */ jsx(Link$1, {
								href: "/iletisim",
								className: "btn btn-cta",
								children: "Ücretsiz Teklif Alın"
							})
						]
					}), service.heroImage && /* @__PURE__ */ jsx("div", {
						className: "service-hero-image",
						children: /* @__PURE__ */ jsx(Image, {
							src: service.heroImage,
							alt: service.title,
							width: 560,
							height: 400,
							priority: true,
							style: {
								objectFit: "cover",
								borderRadius: "16px",
								width: "100%",
								height: "auto"
							}
						})
					})]
				})]
			})
		}), /* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsx("div", {
				className: "container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "service-content",
					children: [/* @__PURE__ */ jsxs("article", {
						className: "service-article",
						children: [
							service.sections.map((section, index) => /* @__PURE__ */ jsxs("div", {
								className: "content-section",
								children: [/* @__PURE__ */ jsx("h2", { children: section.heading }), /* @__PURE__ */ jsx("p", { children: section.content })]
							}, index)),
							service.slug === "jeoteknik-uygulamalar" && /* @__PURE__ */ jsxs("div", {
								className: "content-section sub-services-section",
								children: [
									/* @__PURE__ */ jsx("h2", { children: "Jeoteknik Çözümlerimiz & Hizmetlerimiz" }),
									/* @__PURE__ */ jsx("p", {
										className: "sub-services-intro",
										children: "Kutup Grup olarak, zorlu arazi koşullarında kaya düşmesini önleme, şev stabilizasyonu ve yamaç güvenliği konularında uzman ekiplerimizle profesyonel mühendislik çözümleri sunuyoruz. İşte bu kapsamda sunduğumuz temel hizmetlerimiz:"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "sub-services-grid",
										children: Object.values(SERVICES_DATA).filter((s) => s.category === "jeoteknik" && s.slug !== "jeoteknik-uygulamalar").map((s) => /* @__PURE__ */ jsxs("div", {
											className: "sub-service-card",
											children: [s.heroImage && /* @__PURE__ */ jsx("div", {
												className: "sub-service-image-wrapper",
												children: /* @__PURE__ */ jsx(Image, {
													src: s.heroImage,
													alt: s.title,
													width: 360,
													height: 200,
													className: "sub-service-img"
												})
											}), /* @__PURE__ */ jsxs("div", {
												className: "sub-service-content-wrap",
												children: [
													/* @__PURE__ */ jsxs("div", {
														className: "sub-service-header",
														children: [/* @__PURE__ */ jsx("span", {
															className: "sub-service-icon",
															children: getServiceIcon(s.icon)
														}), /* @__PURE__ */ jsx("h3", { children: s.title })]
													}),
													/* @__PURE__ */ jsx("p", { children: s.intro }),
													/* @__PURE__ */ jsxs(Link$1, {
														href: `/hizmetler/${s.slug}`,
														className: "sub-service-link",
														children: ["Detaylı Bilgi", /* @__PURE__ */ jsxs("svg", {
															width: "16",
															height: "16",
															viewBox: "0 0 24 24",
															fill: "none",
															stroke: "currentColor",
															strokeWidth: "2.5",
															strokeLinecap: "round",
															strokeLinejoin: "round",
															children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
														})]
													})
												]
											})]
										}, s.slug))
									})
								]
							}),
							service.advantages.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "content-section",
								children: [/* @__PURE__ */ jsx("h2", { children: "Avantajlarımız" }), /* @__PURE__ */ jsx("ul", {
									className: "advantages-list",
									children: service.advantages.map((advantage, index) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
										className: "check-icon",
										children: /* @__PURE__ */ jsx(CheckIcon, {})
									}), advantage] }, index))
								})]
							}),
							service.applications.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "content-section",
								children: [/* @__PURE__ */ jsx("h2", { children: "Uygulama Alanları" }), /* @__PURE__ */ jsx("div", {
									className: "applications-grid",
									children: service.applications.map((app, index) => /* @__PURE__ */ jsxs("div", {
										className: "application-card",
										children: [/* @__PURE__ */ jsx("span", {
											className: "app-icon",
											children: /* @__PURE__ */ jsx(BuildingIcon, {})
										}), /* @__PURE__ */ jsx("p", { children: app })]
									}, index))
								})]
							}),
							service.technicalDetails.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "content-section",
								children: [/* @__PURE__ */ jsx("h2", { children: "Teknik Detaylar" }), /* @__PURE__ */ jsx("ul", {
									className: "tech-list",
									children: service.technicalDetails.map((detail, index) => /* @__PURE__ */ jsx("li", { children: detail }, index))
								})]
							}),
							service.faqs.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "content-section",
								children: [/* @__PURE__ */ jsx("h2", { children: "Sıkça Sorulan Sorular" }), /* @__PURE__ */ jsx("div", {
									className: "faq-list",
									children: service.faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", {
										className: "faq-item",
										children: [/* @__PURE__ */ jsx("h3", { children: faq.question }), /* @__PURE__ */ jsx("p", { children: faq.answer })]
									}, index))
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("aside", {
						className: "service-sidebar",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "sidebar-card card-premium",
								children: [
									/* @__PURE__ */ jsx("h3", { children: "İletişime Geçin" }),
									/* @__PURE__ */ jsx("p", { children: "Projeniz için ücretsiz keşif ve teklif almak ister misiniz?" }),
									/* @__PURE__ */ jsx(Link$1, {
										href: "/iletisim",
										className: "btn btn-primary",
										style: { width: "100%" },
										children: "Teklif İsteyin"
									})
								]
							}),
							service.relatedServices.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "sidebar-card",
								children: [/* @__PURE__ */ jsx("h3", { children: "İlgili Hizmetler" }), /* @__PURE__ */ jsx("ul", {
									className: "related-services",
									children: service.relatedServices.map((relatedSlug, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link$1, {
										href: `/hizmetler/${relatedSlug}`,
										children: getRelatedServiceTitle(relatedSlug)
									}) }, index))
								})]
							}),
							service.whyChooseUs.length > 0 && /* @__PURE__ */ jsxs("div", {
								className: "sidebar-card",
								children: [/* @__PURE__ */ jsx("h3", { children: "Neden Kutup Grup?" }), /* @__PURE__ */ jsx("ul", {
									className: "why-list",
									children: service.whyChooseUs.map((reason, index) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", {
										className: "check-icon",
										children: /* @__PURE__ */ jsx(CheckIcon, {})
									}), reason] }, index))
								})]
							})
						]
					})]
				})
			})
		})]
	}), /* @__PURE__ */ jsx("style", {
		jsx: true,
		children: `
        /* Sub Services Grid (for Category Page) */
        .sub-services-section {
          margin-top: var(--spacing-8);
        }
        .sub-services-intro {
          margin-bottom: var(--spacing-8) !important;
          font-size: 1.05rem !important;
        }
        .sub-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-6);
        }
        @media (min-width: 640px) {
          .sub-services-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .sub-service-card {
          background: white;
          border: 1px solid var(--border-default);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(10, 36, 99, 0.02);
        }
        .sub-service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 12px 24px rgba(10, 36, 99, 0.06);
        }
        .sub-service-image-wrapper {
          width: 100%;
          height: 180px;
          position: relative;
          overflow: hidden;
          background: var(--bg-secondary);
        }
        .sub-service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .sub-service-card:hover .sub-service-img {
          transform: scale(1.06);
        }
        .sub-service-content-wrap {
          padding: var(--spacing-5) var(--spacing-6) var(--spacing-6);
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .sub-service-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-4);
        }
        .sub-service-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .sub-service-card:hover .sub-service-icon {
          transform: scale(1.08) rotate(2deg);
        }
        .sub-service-icon :global(svg) {
          width: 22px;
          height: 22px;
        }
        .sub-service-header h3 {
          margin: 0;
          font-size: 1.15rem;
          color: var(--color-deep-navy);
          font-family: var(--font-heading);
          font-weight: 700;
        }
        .sub-service-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: var(--spacing-5);
          flex: 1;
        }
        .sub-service-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #10B981;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.2s ease;
          width: fit-content;
        }
        .sub-service-link svg {
          transition: transform 0.2s ease;
        }
        .sub-service-link:hover {
          color: var(--color-deep-navy);
        }
        .sub-service-link:hover svg {
          transform: translateX(4px);
        }

        .service-page {
          margin-top: 80px;
        }
        
        .service-hero {
          background: var(--gradient-subtle);
          padding: var(--spacing-12) 0 var(--spacing-16);
          border-bottom: 1px solid var(--border-default);
          position: relative;
        }

        .service-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-10);
          align-items: center;
        }

        .service-hero-image {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(10, 36, 99, 0.15);
          border: 3px solid rgba(62,146,204,0.15);
        }
        
        .breadcrumb {
          margin-bottom: var(--spacing-6);
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }
        
        .breadcrumb a {
          color: var(--color-arctic-blue);
        }
        
        .breadcrumb span {
          margin: 0 var(--spacing-2);
        }
        
        .service-hero-text {
          text-align: left;
        }
        
        .service-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(62, 146, 204, 0.12), rgba(10, 36, 99, 0.08));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-6);
          color: var(--color-arctic-blue);
        }
        
        .service-hero-content h1 {
          font-size: var(--font-size-h1);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-6);
        }
        
        .service-intro {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          line-height: var(--line-height-relaxed);
          margin-bottom: var(--spacing-8);
        }
        
        .service-content {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: var(--spacing-12);
        }
        
        .service-article {
          max-width: 100%;
        }
        
        .content-section {
          margin-bottom: var(--spacing-12);
        }
        
        .content-section h2 {
          font-size: var(--font-size-h3);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-6);
          padding-bottom: var(--spacing-3);
          border-bottom: 3px solid var(--color-ice-blue);
        }
        
        .content-section p {
          font-size: var(--font-size-base);
          line-height: var(--line-height-relaxed);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-4);
        }
        
        .advantages-list, .tech-list, .why-list {
          list-style: none;
          padding: 0;
        }
        
        .advantages-list li, .why-list li {
          padding: var(--spacing-3) 0;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-default);
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }
        
        .tech-list li {
          padding: var(--spacing-3) 0;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-default);
          padding-left: var(--spacing-4);
          position: relative;
        }

        .tech-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-arctic-blue);
        }
        
        .check-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        
        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--spacing-4);
        }
        
        .application-card {
          background: var(--bg-secondary);
          padding: var(--spacing-5);
          border-radius: var(--radius-base);
          text-align: center;
          border: 1px solid var(--border-default);
          transition: all 0.3s ease;
        }

        .application-card:hover {
          border-color: var(--color-arctic-blue);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(62,146,204,0.1);
        }
        
        .app-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--spacing-3);
          color: var(--color-arctic-blue);
        }
        
        .application-card p {
          font-size: var(--font-size-sm);
          color: var(--text-primary);
          margin: 0;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
        }
        
        .faq-item {
          background: var(--bg-secondary);
          padding: var(--spacing-6);
          border-radius: var(--radius-base);
          border-left: 4px solid var(--color-arctic-blue);
        }
        
        .faq-item h3 {
          font-size: var(--font-size-lg);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-3);
        }
        
        .faq-item p {
          margin: 0;
        }
        
        .service-sidebar {
          position: sticky;
          top: 100px;
          align-self: start;
        }
        
        .sidebar-card {
          background: white;
          border: 2px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          margin-bottom: var(--spacing-6);
        }
        
        .sidebar-card h3 {
          font-size: var(--font-size-h5);
          color: var(--color-deep-navy);
          margin-bottom: var(--spacing-4);
        }
        
        .sidebar-card p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-4);
        }
        
        .related-services {
          list-style: none;
          padding: 0;
        }
        
        .related-services li {
          margin-bottom: var(--spacing-3);
        }
        
        .related-services a {
          color: var(--text-primary);
          display: block;
          padding: var(--spacing-3);
          border-radius: var(--radius-sm);
          transition: background 0.2s ease;
          font-size: var(--font-size-sm);
        }
        
        .related-services a:hover {
          background: var(--bg-secondary);
          color: var(--color-arctic-blue);
        }
        
        @media (max-width: 1024px) {
          .service-content {
            grid-template-columns: 1fr;
          }
          
          .service-sidebar {
            position: static;
          }
        }
        
        @media (max-width: 768px) {
          .service-hero-layout {
            grid-template-columns: 1fr;
            gap: var(--spacing-6);
          }

          .service-hero-image {
            order: -1;
          }

          .service-hero-text {
            text-align: center;
          }

          .service-hero-text h1 {
            font-size: 1.65rem;
            line-height: 1.25;
          }

          .service-intro {
            font-size: 0.95rem;
          }

          .service-icon-wrap {
            margin: 0 auto var(--spacing-5);
          }

          .btn-cta {
            display: inline-flex;
            margin: 0 auto;
          }

          .service-hero {
            padding: var(--spacing-8) 0 var(--spacing-10);
          }
          
          .applications-grid {
            grid-template-columns: 1fr;
          }

          .section-content h2 {
            font-size: 1.35rem;
          }

          .section-content p {
            font-size: 0.92rem;
            line-height: 1.7;
          }

          .sidebar-card {
            padding: var(--spacing-5);
          }

          .breadcrumb {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .service-page {
            margin-top: 70px;
          }

          .service-hero {
            padding: var(--spacing-6) 0 var(--spacing-8);
          }

          .service-hero-text h1 {
            font-size: 1.4rem;
          }

          .service-intro {
            font-size: 0.9rem;
          }

          .service-icon-wrap {
            width: 52px;
            height: 52px;
            border-radius: 14px;
          }

          .section-content {
            padding: var(--spacing-8) 0;
          }

          .section-content h2 {
            font-size: 1.2rem;
          }

          .application-card {
            padding: var(--spacing-4);
          }

          .why-list li {
            font-size: 0.88rem;
          }
        }
      `
	})] });
}
//#endregion
//#region src/pages/ServiceDetail.tsx
function ServiceDetail() {
	const { slug } = useParams();
	const decodedSlug = decodeURIComponent(slug || "");
	if (decodedSlug === "deflektör-tip-ortuleme" || slug === "deflekt%C3%B6r-tip-ortuleme") return /* @__PURE__ */ jsx(Navigate, {
		to: "/hizmetler/deflektor-tip-ortuleme",
		replace: true
	});
	const service = SERVICES_DATA[decodedSlug];
	if (!service) return /* @__PURE__ */ jsx(Navigate, {
		to: "/404",
		replace: true
	});
	const serviceSchema = generateServiceSchema({
		name: service.title,
		description: service.metaDescription,
		url: `https://kutupgrup.com/hizmetler/${service.slug}`
	});
	const faqSchema = service.faqs.length > 0 ? generateFAQSchema(service.faqs) : null;
	const breadcrumbSchema = generateBreadcrumbSchema([
		{
			name: "Anasayfa",
			url: "https://kutupgrup.com"
		},
		{
			name: "Hizmetler",
			url: "https://kutupgrup.com/#hizmetler"
		},
		{
			name: service.title,
			url: `https://kutupgrup.com/hizmetler/${service.slug}`
		}
	]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(serviceSchema) }
		}),
		faqSchema && /* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) }
		}),
		/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(breadcrumbSchema) }
		}),
		/* @__PURE__ */ jsx(ServiceContentClient, { service }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
var contact_module_default = {
	contactPage: "_contactPage_zjsfs_1",
	hero: "_hero_zjsfs_7",
	heroContent: "_heroContent_zjsfs_15",
	heroTitle: "_heroTitle_zjsfs_21",
	fadeInUp: "_fadeInUp_zjsfs_1",
	heroSubtitle: "_heroSubtitle_zjsfs_29",
	container: "_container_zjsfs_36",
	contactInfo: "_contactInfo_zjsfs_43",
	infoCard: "_infoCard_zjsfs_50",
	infoIcon: "_infoIcon_zjsfs_66",
	infoTitle: "_infoTitle_zjsfs_71",
	infoText: "_infoText_zjsfs_78",
	contentGrid: "_contentGrid_zjsfs_94",
	sectionTitle: "_sectionTitle_zjsfs_107",
	formSection: "_formSection_zjsfs_115",
	contactForm: "_contactForm_zjsfs_122",
	formGroup: "_formGroup_zjsfs_128",
	formRow: "_formRow_zjsfs_134",
	label: "_label_zjsfs_146",
	required: "_required_zjsfs_152",
	input: "_input_zjsfs_156",
	select: "_select_zjsfs_157",
	textarea: "_textarea_zjsfs_158",
	inputError: "_inputError_zjsfs_183",
	errorText: "_errorText_zjsfs_191",
	checkboxLabel: "_checkboxLabel_zjsfs_202",
	checkbox: "_checkbox_zjsfs_202",
	submitButton: "_submitButton_zjsfs_225",
	successMessage: "_successMessage_zjsfs_247",
	errorMessage: "_errorMessage_zjsfs_256",
	mapSection: "_mapSection_zjsfs_266",
	mapContainer: "_mapContainer_zjsfs_273",
	workingHours: "_workingHours_zjsfs_279",
	hoursTitle: "_hoursTitle_zjsfs_286",
	hoursList: "_hoursList_zjsfs_293",
	whatsappSection: "_whatsappSection_zjsfs_316",
	whatsappCard: "_whatsappCard_zjsfs_320",
	whatsappIcon: "_whatsappIcon_zjsfs_337",
	whatsappContent: "_whatsappContent_zjsfs_341",
	whatsappButton: "_whatsappButton_zjsfs_356"
};
//#endregion
//#region src/pages/Contact.tsx
function ContactPageClient() {
	const [formData, setFormData] = useState({
		ad_soyad: "",
		email: "",
		telefon: "",
		konu: "",
		mesaj: "",
		kvkk_onay: false
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState("idle");
	const validateForm = () => {
		const newErrors = {};
		if (!formData.ad_soyad.trim()) newErrors.ad_soyad = "Ad Soyad gereklidir";
		if (!formData.email.trim()) newErrors.email = "E-posta gereklidir";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Geçerli bir e-posta adresi girin";
		if (!formData.telefon.trim()) newErrors.telefon = "Telefon gereklidir";
		else if (!/^[0-9\s\-\+\(\)]{10,}$/.test(formData.telefon)) newErrors.telefon = "Geçerli bir telefon numarası girin";
		if (!formData.mesaj.trim()) newErrors.mesaj = "Mesaj gereklidir";
		else if (formData.mesaj.trim().length < 10) newErrors.mesaj = "Mesaj en az 10 karakter olmalıdır";
		if (!formData.kvkk_onay) newErrors.kvkk_onay = "KVKK metnini onaylamanız gerekmektedir";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;
		setIsSubmitting(true);
		setSubmitStatus("idle");
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData)
			});
			const data = await response.json();
			if (response.ok && data.success) {
				setSubmitStatus("success");
				setFormData({
					ad_soyad: "",
					email: "",
					telefon: "",
					konu: "",
					mesaj: "",
					kvkk_onay: false
				});
				setErrors({});
			} else {
				console.error("Form submission failed:", data.message);
				setSubmitStatus("error");
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};
	const handleChange = (e) => {
		const { name, value, type } = e.target;
		if (type === "checkbox") {
			const checked = e.target.checked;
			setFormData((prev) => ({
				...prev,
				[name]: checked
			}));
		} else setFormData((prev) => ({
			...prev,
			[name]: value
		}));
		if (errors[name]) setErrors((prev) => {
			const newErrors = { ...prev };
			delete newErrors[name];
			return newErrors;
		});
	};
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsxs("div", {
			className: contact_module_default.contactPage,
			children: [/* @__PURE__ */ jsx("section", {
				className: contact_module_default.hero,
				children: /* @__PURE__ */ jsxs("div", {
					className: contact_module_default.heroContent,
					children: [/* @__PURE__ */ jsx("h1", {
						className: contact_module_default.heroTitle,
						children: "İletişime Geçin"
					}), /* @__PURE__ */ jsx("p", {
						className: contact_module_default.heroSubtitle,
						children: "Projeleriniz için bize ulaşın, size en uygun çözümü sunalım"
					})]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: contact_module_default.container,
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: contact_module_default.contactInfo,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: contact_module_default.infoCard,
								children: [
									/* @__PURE__ */ jsx("div", {
										className: contact_module_default.infoIcon,
										children: /* @__PURE__ */ jsxs("svg", {
											width: "24",
											height: "24",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.5",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [/* @__PURE__ */ jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" }), /* @__PURE__ */ jsx("circle", {
												cx: "12",
												cy: "10",
												r: "3"
											})]
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: contact_module_default.infoTitle,
										children: "Şirket Bilgileri"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: contact_module_default.infoText,
										style: {
											textAlign: "left",
											width: "100%"
										},
										children: [
											/* @__PURE__ */ jsx("strong", {
												style: {
													display: "block",
													marginBottom: "12px"
												},
												children: "KUTUP GRUP İNŞAAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ"
											}),
											/* @__PURE__ */ jsxs("div", {
												style: { marginBottom: "12px" },
												children: [
													/* @__PURE__ */ jsx("strong", {
														style: { color: "var(--color-arctic-blue)" },
														children: "İstanbul Merkez (Genel Müdürlük):"
													}),
													/* @__PURE__ */ jsx("br", {}),
													"Esentepe Mah. Büyükdere Cad. Levent 199 No: 199 İç Kapı No: 6 Şişli / İstanbul"
												]
											}),
											/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx("strong", {
													style: { color: "var(--color-arctic-blue)" },
													children: "Balıkesir Şubesi:"
												}),
												/* @__PURE__ */ jsx("br", {}),
												"Soma Cd. 111A Altıeylül Balıkesir / Türkiye"
											] })
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: contact_module_default.infoCard,
								children: [
									/* @__PURE__ */ jsx("div", {
										className: contact_module_default.infoIcon,
										children: /* @__PURE__ */ jsx("svg", {
											width: "24",
											height: "24",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.5",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" })
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: contact_module_default.infoTitle,
										children: "Telefon"
									}),
									/* @__PURE__ */ jsx("p", {
										className: contact_module_default.infoText,
										children: /* @__PURE__ */ jsx("a", {
											href: "tel:+905335176609",
											children: "+90 (533) 517 66 09"
										})
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: contact_module_default.infoCard,
								children: [
									/* @__PURE__ */ jsx("div", {
										className: contact_module_default.infoIcon,
										children: /* @__PURE__ */ jsxs("svg", {
											width: "24",
											height: "24",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.5",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [/* @__PURE__ */ jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), /* @__PURE__ */ jsx("polyline", { points: "22,6 12,13 2,6" })]
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: contact_module_default.infoTitle,
										children: "E-posta"
									}),
									/* @__PURE__ */ jsx("p", {
										className: contact_module_default.infoText,
										children: /* @__PURE__ */ jsx("a", {
											href: "mailto:info@kutupgrup.com",
											children: "info@kutupgrup.com"
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: contact_module_default.contentGrid,
						children: [/* @__PURE__ */ jsxs("div", {
							className: contact_module_default.formSection,
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: contact_module_default.sectionTitle,
									children: "Bize Mesaj Gönderin"
								}),
								submitStatus === "success" && /* @__PURE__ */ jsx("div", {
									className: contact_module_default.successMessage,
									children: "✓ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız."
								}),
								submitStatus === "error" && /* @__PURE__ */ jsx("div", {
									className: contact_module_default.errorMessage,
									children: "✗ Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya telefon ile iletişime geçin."
								}),
								/* @__PURE__ */ jsxs("form", {
									onSubmit: handleSubmit,
									className: contact_module_default.contactForm,
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: contact_module_default.formGroup,
											children: [
												/* @__PURE__ */ jsxs("label", {
													htmlFor: "ad_soyad",
													className: contact_module_default.label,
													children: ["Ad Soyad ", /* @__PURE__ */ jsx("span", {
														className: contact_module_default.required,
														children: "*"
													})]
												}),
												/* @__PURE__ */ jsx("input", {
													type: "text",
													id: "ad_soyad",
													name: "ad_soyad",
													value: formData.ad_soyad,
													onChange: handleChange,
													className: `${contact_module_default.input} ${errors.ad_soyad ? contact_module_default.inputError : ""}`,
													placeholder: "Adınız ve Soyadınız"
												}),
												errors.ad_soyad && /* @__PURE__ */ jsx("span", {
													className: contact_module_default.errorText,
													children: errors.ad_soyad
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: contact_module_default.formRow,
											children: [/* @__PURE__ */ jsxs("div", {
												className: contact_module_default.formGroup,
												children: [
													/* @__PURE__ */ jsxs("label", {
														htmlFor: "email",
														className: contact_module_default.label,
														children: ["E-posta ", /* @__PURE__ */ jsx("span", {
															className: contact_module_default.required,
															children: "*"
														})]
													}),
													/* @__PURE__ */ jsx("input", {
														type: "email",
														id: "email",
														name: "email",
														value: formData.email,
														onChange: handleChange,
														className: `${contact_module_default.input} ${errors.email ? contact_module_default.inputError : ""}`,
														placeholder: "ornek@email.com"
													}),
													errors.email && /* @__PURE__ */ jsx("span", {
														className: contact_module_default.errorText,
														children: errors.email
													})
												]
											}), /* @__PURE__ */ jsxs("div", {
												className: contact_module_default.formGroup,
												children: [
													/* @__PURE__ */ jsxs("label", {
														htmlFor: "telefon",
														className: contact_module_default.label,
														children: ["Telefon ", /* @__PURE__ */ jsx("span", {
															className: contact_module_default.required,
															children: "*"
														})]
													}),
													/* @__PURE__ */ jsx("input", {
														type: "tel",
														id: "telefon",
														name: "telefon",
														value: formData.telefon,
														onChange: handleChange,
														className: `${contact_module_default.input} ${errors.telefon ? contact_module_default.inputError : ""}`,
														placeholder: "+90 5XX XXX XX XX"
													}),
													errors.telefon && /* @__PURE__ */ jsx("span", {
														className: contact_module_default.errorText,
														children: errors.telefon
													})
												]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: contact_module_default.formGroup,
											children: [/* @__PURE__ */ jsx("label", {
												htmlFor: "konu",
												className: contact_module_default.label,
												children: "Konu"
											}), /* @__PURE__ */ jsxs("select", {
												id: "konu",
												name: "konu",
												value: formData.konu,
												onChange: handleChange,
												className: contact_module_default.select,
												children: [
													/* @__PURE__ */ jsx("option", {
														value: "",
														children: "Konu Seçiniz"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "teklif",
														children: "Teklif Talebi"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "genel",
														children: "Genel Bilgi"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "proje",
														children: "Proje Danışmanlığı"
													}),
													/* @__PURE__ */ jsx("option", {
														value: "diger",
														children: "Diğer"
													})
												]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: contact_module_default.formGroup,
											children: [
												/* @__PURE__ */ jsxs("label", {
													htmlFor: "mesaj",
													className: contact_module_default.label,
													children: ["Mesajınız ", /* @__PURE__ */ jsx("span", {
														className: contact_module_default.required,
														children: "*"
													})]
												}),
												/* @__PURE__ */ jsx("textarea", {
													id: "mesaj",
													name: "mesaj",
													value: formData.mesaj,
													onChange: handleChange,
													rows: 6,
													className: `${contact_module_default.textarea} ${errors.mesaj ? contact_module_default.inputError : ""}`,
													placeholder: "Projeniz hakkında detaylı bilgi veriniz..."
												}),
												errors.mesaj && /* @__PURE__ */ jsx("span", {
													className: contact_module_default.errorText,
													children: errors.mesaj
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: contact_module_default.formGroup,
											children: [/* @__PURE__ */ jsxs("label", {
												className: contact_module_default.checkboxLabel,
												children: [/* @__PURE__ */ jsx("input", {
													type: "checkbox",
													name: "kvkk_onay",
													checked: formData.kvkk_onay,
													onChange: handleChange,
													className: contact_module_default.checkbox
												}), /* @__PURE__ */ jsxs("span", { children: [
													/* @__PURE__ */ jsx("a", {
														href: "/gizlilik-politikasi",
														target: "_blank",
														rel: "noopener noreferrer",
														children: "KVKK Aydınlatma Metni"
													}),
													"'ni okudum, kabul ediyorum. ",
													/* @__PURE__ */ jsx("span", {
														className: contact_module_default.required,
														children: "*"
													})
												] })]
											}), errors.kvkk_onay && /* @__PURE__ */ jsx("span", {
												className: contact_module_default.errorText,
												children: errors.kvkk_onay
											})]
										}),
										/* @__PURE__ */ jsx("button", {
											type: "submit",
											disabled: isSubmitting,
											className: contact_module_default.submitButton,
											children: isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"
										})
									]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: contact_module_default.mapSection,
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: contact_module_default.sectionTitle,
									children: "Konum"
								}),
								/* @__PURE__ */ jsx("div", {
									className: contact_module_default.mapContainer,
									children: /* @__PURE__ */ jsx("iframe", {
										src: "https://maps.google.com/maps?q=Levent%20199,%20Esentepe%20Mahallesi,%20%C5%9Ei%C5%9Fli,%20%C4%B0stanbul&t=&z=16&ie=UTF8&iwloc=&output=embed",
										width: "100%",
										height: "400",
										style: { border: 0 },
										allowFullScreen: true,
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade",
										title: "Kutup Grup Konum"
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: contact_module_default.workingHours,
									children: [/* @__PURE__ */ jsx("h3", {
										className: contact_module_default.hoursTitle,
										children: "Çalışma Saatleri"
									}), /* @__PURE__ */ jsxs("ul", {
										className: contact_module_default.hoursList,
										children: [
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "Pazartesi - Cuma:" }), /* @__PURE__ */ jsx("strong", { children: "09:00 - 18:00" })] }),
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "Cumartesi:" }), /* @__PURE__ */ jsx("strong", { children: "Randevuyla" })] }),
											/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("span", { children: "Pazar:" }), /* @__PURE__ */ jsx("strong", { children: "Kapalı" })] })
										]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsx("section", {
						className: contact_module_default.whatsappSection,
						children: /* @__PURE__ */ jsxs("div", {
							className: contact_module_default.whatsappCard,
							children: [
								/* @__PURE__ */ jsx("div", {
									className: contact_module_default.whatsappIcon,
									children: /* @__PURE__ */ jsx("svg", {
										width: "24",
										height: "24",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: /* @__PURE__ */ jsx("path", { d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" })
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: contact_module_default.whatsappContent,
									children: [/* @__PURE__ */ jsx("h3", { children: "Hızlı İletişim için WhatsApp" }), /* @__PURE__ */ jsx("p", { children: "Acil durumlar için WhatsApp üzerinden bize ulaşabilirsiniz" })]
								}),
								/* @__PURE__ */ jsx("a", {
									href: "https://wa.me/905335176609",
									target: "_blank",
									rel: "noopener noreferrer",
									className: contact_module_default.whatsappButton,
									children: "WhatsApp ile İletişim"
								})
							]
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
//#region src/pages/References.tsx
function ReferanslarPageClient() {
	return /* @__PURE__ */ jsxs("div", {
		className: "maintenance-page",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "maintenance-main",
				children: [
					/* @__PURE__ */ jsx("div", { className: "maintenance-bg-grid" }),
					/* @__PURE__ */ jsx("div", { className: "maintenance-glow-1" }),
					/* @__PURE__ */ jsx("div", { className: "maintenance-glow-2" }),
					/* @__PURE__ */ jsx("div", {
						className: "maintenance-container",
						children: /* @__PURE__ */ jsxs("div", {
							className: "maintenance-card",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "maintenance-icon-wrapper",
									children: /* @__PURE__ */ jsx("svg", {
										width: "48",
										height: "48",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: /* @__PURE__ */ jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
									})
								}),
								/* @__PURE__ */ jsx("p", {
									className: "maintenance-eyebrow",
									children: "Yapım Aşamasında"
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "maintenance-title",
									children: "Referanslarımız Yakında Burada"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "maintenance-description",
									children: "Kutup Grup olarak gerçekleştirdiğimiz 500+ endüstriyel dağcılık ve jeoteknik projelerimizin detaylı portföyü ve vaka analizleri çok yakında yayında olacaktır. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "maintenance-buttons",
									children: [/* @__PURE__ */ jsx(Link$1, {
										href: "/iletisim",
										className: "btn btn-primary",
										children: "Bizimle İletişime Geçin"
									}), /* @__PURE__ */ jsx(Link$1, {
										href: "/",
										className: "btn btn-secondary",
										children: "Anasayfaya Dön"
									})]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx("style", {
				jsx: true,
				children: `
                .maintenance-page {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    background: #030712;
                    overflow: hidden;
                    position: relative;
                }
                
                .maintenance-main {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: var(--spacing-16) 0;
                    margin-top: 80px;
                    position: relative;
                }
                
                .maintenance-bg-grid {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                }
                
                .maintenance-glow-1 {
                    position: absolute;
                    top: 20%;
                    left: 10%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(62, 146, 204, 0.1) 0%, transparent 70%);
                    pointer-events: none;
                }
                
                .maintenance-glow-2 {
                    position: absolute;
                    bottom: 20%;
                    right: 10%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
                    pointer-events: none;
                }
                
                .maintenance-container {
                    max-width: 700px;
                    width: 100%;
                    padding: 0 var(--spacing-6);
                    position: relative;
                    z-index: 2;
                }
                
                .maintenance-card {
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    padding: var(--spacing-10) var(--spacing-8);
                    text-align: center;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
                }
                
                .maintenance-icon-wrapper {
                    width: 90px;
                    height: 90px;
                    border-radius: 22px;
                    background: linear-gradient(135deg, rgba(62, 146, 204, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%);
                    color: var(--color-arctic-blue);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto var(--spacing-6);
                    border: 1px solid rgba(62, 146, 204, 0.2);
                    box-shadow: 0 10px 25px rgba(62, 146, 204, 0.1);
                    animation: float-anim 4s ease-in-out infinite;
                }
                
                @keyframes float-anim {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                
                .maintenance-eyebrow {
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    color: var(--color-arctic-blue);
                    margin-bottom: var(--spacing-3);
                }
                
                .maintenance-title {
                    font-size: 2.2rem;
                    color: white;
                    margin-bottom: var(--spacing-4);
                    font-family: var(--font-heading);
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    line-height: 1.25;
                }
                
                .maintenance-description {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.6;
                    margin-bottom: var(--spacing-8);
                    max-width: 580px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .maintenance-buttons {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--spacing-4);
                    flex-wrap: wrap;
                }
                
                .btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 28px;
                    border-radius: var(--radius-full);
                    font-weight: 700;
                    font-size: 0.9rem;
                    font-family: var(--font-heading);
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    border: 1px solid transparent;
                }
                
                .btn-primary {
                    background: linear-gradient(135deg, var(--color-deep-navy) 0%, var(--color-arctic-blue) 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(62, 146, 204, 0.2);
                }
                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(62, 146, 204, 0.35);
                }
                
                .btn-secondary {
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                    border-color: rgba(255, 255, 255, 0.1);
                }
                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.08);
                    transform: translateY(-2px);
                }
                
                @media (max-width: 640px) {
                    .maintenance-title {
                        font-size: 1.8rem;
                    }
                    .maintenance-card {
                        padding: var(--spacing-8) var(--spacing-5);
                    }
                    .maintenance-buttons {
                        flex-direction: column;
                        width: 100%;
                    }
                    .btn {
                        width: 100%;
                    }
                }
            `
			})
		]
	});
}
var sss_module_default = {
	sssPage: "_sssPage_rsv0q_1",
	hero: "_hero_rsv0q_6",
	heroContent: "_heroContent_rsv0q_14",
	heroTitle: "_heroTitle_rsv0q_20",
	fadeInUp: "_fadeInUp_rsv0q_1",
	heroSubtitle: "_heroSubtitle_rsv0q_28",
	container: "_container_rsv0q_34",
	filterSection: "_filterSection_rsv0q_41",
	filterButtons: "_filterButtons_rsv0q_46",
	filterButton: "_filterButton_rsv0q_46",
	filterButtonActive: "_filterButtonActive_rsv0q_71",
	filterCount: "_filterCount_rsv0q_77",
	faqList: "_faqList_rsv0q_83",
	faqItem: "_faqItem_rsv0q_90",
	faqItemOpen: "_faqItemOpen_rsv0q_104",
	faqQuestion: "_faqQuestion_rsv0q_109",
	faqQuestionText: "_faqQuestionText_rsv0q_128",
	faqCategory: "_faqCategory_rsv0q_135",
	faqIcon: "_faqIcon_rsv0q_147",
	faqAnswer: "_faqAnswer_rsv0q_166",
	ctaSection: "_ctaSection_rsv0q_184",
	ctaCard: "_ctaCard_rsv0q_188",
	ctaTitle: "_ctaTitle_rsv0q_195",
	ctaText: "_ctaText_rsv0q_202",
	ctaButton: "_ctaButton_rsv0q_208"
};
//#endregion
//#region src/pages/FAQ.tsx
var FAQS = [
	{
		id: 1,
		category: "Genel",
		question: "Kutup Grup hangi hizmetleri sunuyor?",
		answer: "Kutup Grup olarak endüstriyel dağcılık (iple erişim teknikleri) ve jeoteknik uygulamalar olmak üzere iki ana kategoride hizmet sunuyoruz. Cephe temizliği, aydınlatma kurulumu, tersane işleri, rüzgar türbini bakımı, kaya bariyeri, şev örtüleme, yamaç stabilizasyonu gibi 19 farklı hizmet alanımız bulunmaktadır."
	},
	{
		id: 2,
		category: "Genel",
		question: "Hangi bölgelerde hizmet veriyorsunuz?",
		answer: "Türkiye'nin tüm bölgelerinde hizmet vermekteyiz. Merkez ofisimiz İstanbul'da olmakla birlikte, mobil ekiplerimiz sayesinde ülkenin her noktasında proje gerçekleştirebiliyoruz. Özellikle İstanbul, Ankara, İzmir, Bursa, Kocaeli ve çevre illerde yoğun olarak çalışmaktayız."
	},
	{
		id: 3,
		category: "Sertifikasyon",
		question: "IRATA nedir ve neden önemlidir?",
		answer: "IRATA (Industrial Rope Access Trade Association), endüstriyel iple erişim çalışmaları için dünya çapında kabul görmüş bir sertifikasyon sistemidir. IRATA sertifikalı teknisyenlerimiz uluslararası güvenlik standartlarına uygun olarak eğitilmiş ve düzenli olarak yetkinlikleri denetlenmektedir. Bu, çalışanlarımızın en yüksek güvenlik düzeyinde iş yapmasını garanti eder."
	},
	{
		id: 4,
		category: "Sertifikasyon",
		question: "SPRAT ve IRATA arasındaki fark nedir?",
		answer: "SPRAT (Society of Professional Rope Access Technicians) ve IRATA, iple erişim alanında kabul görmüş iki ana sertifikasyon kuruluşudur. Her ikisi de benzer güvenlik standartlarına sahiptir. IRATA daha çok Avrupa ve Asya'da, SPRAT ise Amerika kıtasında yaygındır. Kutup Grup olarak her iki sertifikaya sahip teknisyenlere sahibiz."
	},
	{
		id: 5,
		category: "Güvenlik",
		question: "İş güvenliği önlemleriniz nelerdir?",
		answer: "İş güvenliği bizim için en öncelikli konudur. Tüm projelerimizde ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi standartlarına uygun çalışırız. IRATA/SPRAT sertifikalı teknisyenler, CE onaylı ekipmanlar, kapsamlı risk analizleri, iş öncesi güvenlik brifingleri, kurtarma planları ve 7/24 güvenlik gözetimi sağlarız."
	},
	{
		id: 6,
		category: "Güvenlik",
		question: "Çalışanlarınız sigortalı mı?",
		answer: "Evet, tüm çalışanlarımız SGK sigortalıdır ve ek olarak özel iş kazası sigortası kapsamındadır. Ayrıca yaptığımız her proje için sorumluluk sigortası poliçesi mevcuttur."
	},
	{
		id: 7,
		category: "Proje Süreci",
		question: "Proje süreci nasıl işliyor?",
		answer: "Proje sürecimiz şu adımlardan oluşur: 1) İlk görüşme ve ihtiyaç analizi, 2) Saha keşfi ve teknik inceleme, 3) Risk analizi ve metod belirleme, 4) Detaylı teklif sunumu, 5) Sözleşme imzalama, 6) Proje uygulama, 7) Kalite kontrol ve teslimat, 8) Garanti ve periyodik bakım desteği."
	},
	{
		id: 8,
		category: "Proje Süreci",
		question: "Teklif almak için ne yapmam gerekiyor?",
		answer: "İletişim sayfamızdaki formu doldurarak veya telefon/e-posta ile bize ulaşabilirsiniz. Projeniz hakkında temel bilgileri paylaştığınızda, ekibimiz en kısa sürede sizinle iletişime geçerek detaylı bilgi alacak ve saha keşfi için randevu ayarlayacaktır. Saha keşfi sonrası 3-5 iş günü içinde detaylı teklifimizi sunuyoruz."
	},
	{
		id: 9,
		category: "Hizmet Detayları",
		question: "Cephe temizliği ne kadar sürer?",
		answer: "Cephe temizliği süresi binanın yüksekliği, toplam metrekaresi, cam yüzeyinin kirliliği ve hava koşullarına göre değişir. Ortalama bir 10 katlı binanın cephesi 2-3 gün içinde tamamlanabilir. Detaylı süre tahmini için saha keşfi yapmamız gerekir."
	},
	{
		id: 10,
		category: "Hizmet Detayları",
		question: "Kaya bariyeri fiyatı nasıl hesaplanır?",
		answer: "Kaya bariyeri fiyatı şu faktörlere göre belirlenir: 1) Bariyerin enerji emme kapasitesi (kJ cinsinden), 2) Metre cinsinden uzunluk, 3) Arazinin tehlike derecesi ve erişilebilirliği, 4) Montaj zorluk derecesi, 5) Kullanılacak malzeme standardı (EN 1317). Her proje özeldir, bu nedenle kesin fiyat için saha incelemesi gerekir."
	},
	{
		id: 11,
		category: "Hizmet Detayları",
		question: "Rüzgar türbini bakımı ne sıklıkla yapılmalıdır?",
		answer: "Rüzgar türbinlerinin periyodik bakımı yılda en az 2 kez (bahar ve sonbahar) yapılmalıdır. İlave olarak fırtına sonrası acil kontroller, kanat temizliği (performans için), ve üretici tavsiyelerine göre major bakımlar gerekebilir. Kutup Grup olarak yıllık bakım kontratları sunuyoruz."
	},
	{
		id: 12,
		category: "Hizmet Detayları",
		question: "Şev örtüleme nedir ve neden gereklidir?",
		answer: "Şev örtüleme, eğimli arazilerde (yamaçlarda) toprak erozyonunu ve kaya/moloz düşmesini önlemek için yapılan jeoteknik bir uygulamadır. Özellikle karayolu kenarları, demiryolu hatları ve yerleşim alanlarına yakın yamaçlarda can ve mal güvenliği için kritik önem taşır. Çelik tel örgü veya özel sentezik ağlarla yamaç yüzeyi sabitlenir."
	},
	{
		id: 13,
		category: "Teknik",
		question: "Hangi ekipmanları kullanıyorsunuz?",
		answer: "Tüm ekipmanlarımız CE sertifikalı ve uluslararası standartlara uygundur. Statik ve dinamik ipler (EN 1891, EN 892), askı sistemleri, descent cihazları, karabinalar, kasklar, emniyet kemerleri kullanırız. Ekipmanlar düzenli olarak test edilir ve yıllık sertifikasyon yenilenir."
	},
	{
		id: 14,
		category: "Teknik",
		question: "ATEX bölgelerinde çalışabiliyor musunuz?",
		answer: "Evet, patlayıcı atmosfer (ATEX) riski olan hassas endüstriyel alanlarda çalışma yetkimiz ve deneyimimiz vardır. Bu tür alanlarda antistatic ekipman, izinsiz elektrik kaynağı olmayan aletler, gaz dedektörleri ve özel eğitimli personel ile çalışırız."
	},
	{
		id: 15,
		category: "Fiyatlandırma",
		question: "Fiyatlarınız neden farklılık gösterir?",
		answer: "Her proje kendine özgüdür. Fiyatlandırmada şu faktörler etkilidir: çalışma yüksekliği, tehlike derecesi, erişilebilirlik, malzeme gereksinimi, proje süresi, mevsimsel koşullar, özel ekipman ihtiyacı. Bu nedenle standardize fiyat vermek yerine her proje için özel teklif hazırlıyoruz."
	},
	{
		id: 16,
		category: "Fiyatlandırma",
		question: "Ödeme koşullarınız nedir?",
		answer: "Genellikle %40 avans, %60 iş bitiminde ödeme şeklinde çalışırız. Büyük projelerde hakediş usulü ödeme de kabul edilebilir. Kurumsal müşterilerimize ödeme vadeleri sunabiliyoruz. Detaylar sözleşme aşamasında belirlenir."
	},
	{
		id: 17,
		category: "Garanti",
		question: "Garanti süreleriniz nedir?",
		answer: "Hizmet garantimiz işin türüne göre değişir: İskele/lift montajları: 6 ay, Kaya/moloz bariyerleri: 2 yıl, Şev örtüleme sistemleri: 5 yıl, Yaşam hattı sistemleri: 10 yıl (paslanmaz çelik). Tüm garantiler malzeme ve işçilik hatalarını kapsar."
	},
	{
		id: 18,
		category: "Acil Durum",
		question: "Acil durumlar için nasıl ulaşabilirim?",
		answer: "Acil durumlar için 7/24 ulaşabileceğiniz telefon hattımız mevcuttur. Kaza, hasar veya tehlikeli durumlar için acil müdahale ekibimiz 2-4 saat içinde sahaya intikal edebilir. İletişim sayfamızdaki acil durum numarasını kaydetmenizi öneririz."
	}
];
var CATEGORIES = [
	"Tümü",
	"Genel",
	"Sertifikasyon",
	"Güvenlik",
	"Proje Süreci",
	"Hizmet Detayları",
	"Teknik",
	"Fiyatlandırma",
	"Garanti",
	"Acil Durum"
];
function SSSPageClient() {
	const [selectedCategory, setSelectedCategory] = useState("Tümü");
	const [openId, setOpenId] = useState(null);
	const filteredFAQs = selectedCategory === "Tümü" ? FAQS : FAQS.filter((faq) => faq.category === selectedCategory);
	const toggleFAQ = (id) => {
		setOpenId(openId === id ? null : id);
	};
	const faqSchema = generateFAQSchema(FAQS.map((faq) => ({
		question: faq.question,
		answer: faq.answer
	})));
	return /* @__PURE__ */ jsxs("div", {
		className: sss_module_default.sssPage,
		children: [
			/* @__PURE__ */ jsx(StructuredData, { data: faqSchema }),
			/* @__PURE__ */ jsx("section", {
				className: sss_module_default.hero,
				children: /* @__PURE__ */ jsxs("div", {
					className: sss_module_default.heroContent,
					children: [/* @__PURE__ */ jsx("h1", {
						className: sss_module_default.heroTitle,
						children: "Sıkça Sorulan Sorular"
					}), /* @__PURE__ */ jsx("p", {
						className: sss_module_default.heroSubtitle,
						children: "Kutup Grup hizmetleri hakkında merak ettikleriniz"
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: sss_module_default.container,
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: sss_module_default.filterSection,
						children: [/* @__PURE__ */ jsx("div", {
							className: sss_module_default.filterButtons,
							children: CATEGORIES.map((category) => /* @__PURE__ */ jsx("button", {
								onClick: () => setSelectedCategory(category),
								className: `${sss_module_default.filterButton} ${selectedCategory === category ? sss_module_default.filterButtonActive : ""}`,
								children: category
							}, category))
						}), /* @__PURE__ */ jsxs("p", {
							className: sss_module_default.filterCount,
							children: [filteredFAQs.length, " soru görüntüleniyor"]
						})]
					}),
					/* @__PURE__ */ jsx("section", {
						className: sss_module_default.faqList,
						children: filteredFAQs.map((faq) => /* @__PURE__ */ jsxs("div", {
							className: `${sss_module_default.faqItem} ${openId === faq.id ? sss_module_default.faqItemOpen : ""}`,
							children: [/* @__PURE__ */ jsxs("button", {
								className: sss_module_default.faqQuestion,
								onClick: () => toggleFAQ(faq.id),
								children: [/* @__PURE__ */ jsxs("span", {
									className: sss_module_default.faqQuestionText,
									children: [/* @__PURE__ */ jsx("span", {
										className: sss_module_default.faqCategory,
										children: faq.category
									}), faq.question]
								}), /* @__PURE__ */ jsx("span", {
									className: sss_module_default.faqIcon,
									children: openId === faq.id ? "−" : "+"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: sss_module_default.faqAnswer,
								children: /* @__PURE__ */ jsx("p", { children: faq.answer })
							})]
						}, faq.id))
					}),
					/* @__PURE__ */ jsx("section", {
						className: sss_module_default.ctaSection,
						children: /* @__PURE__ */ jsxs("div", {
							className: sss_module_default.ctaCard,
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: sss_module_default.ctaTitle,
									children: "Sorunuza Cevap Bulamadınız mı?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: sss_module_default.ctaText,
									children: "Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız"
								}),
								/* @__PURE__ */ jsx(Link$1, {
									href: "/iletisim",
									className: sss_module_default.ctaButton,
									children: "İletişime Geçin"
								})
							]
						})
					})
				]
			})
		]
	});
}
var legal_module_default = {
	legalPage: "_legalPage_1qufr_1",
	hero: "_hero_1qufr_6",
	heroContent: "_heroContent_1qufr_14",
	heroTitle: "_heroTitle_1qufr_20",
	heroSubtitle: "_heroSubtitle_1qufr_27",
	container: "_container_1qufr_33",
	content: "_content_1qufr_39",
	section: "_section_1qufr_46",
	contactBox: "_contactBox_1qufr_117",
	warningBox: "_warningBox_1qufr_134",
	tableContainer: "_tableContainer_1qufr_148",
	table: "_table_1qufr_148",
	buttonGroup: "_buttonGroup_1qufr_188",
	primaryButton: "_primaryButton_1qufr_195"
};
//#endregion
//#region src/pages/Privacy.tsx
function GizlilikPolitikasiClient() {
	return /* @__PURE__ */ jsxs("div", {
		className: legal_module_default.legalPage,
		children: [/* @__PURE__ */ jsx("section", {
			className: legal_module_default.hero,
			children: /* @__PURE__ */ jsxs("div", {
				className: legal_module_default.heroContent,
				children: [/* @__PURE__ */ jsx("h1", {
					className: legal_module_default.heroTitle,
					children: "Gizlilik Politikası ve KVKK"
				}), /* @__PURE__ */ jsx("p", {
					className: legal_module_default.heroSubtitle,
					children: "Son Güncelleme: 15 Şubat 2026"
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: legal_module_default.container,
			children: /* @__PURE__ */ jsxs("article", {
				className: legal_module_default.content,
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [/* @__PURE__ */ jsx("h2", { children: "1. Giriş" }), /* @__PURE__ */ jsx("p", { children: "Kutup Grup olarak, kişisel verilerinizin gizliliğini ve güvenliğini korumayı en önemli önceliklerimiz arasında tutmaktayız. Bu Gizlilik Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır." })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "2. Veri Sorumlusu" }),
							/* @__PURE__ */ jsx("p", { children: "KVKK kapsamında veri sorumlusu Kutup Grup olup, toplanan kişisel verilerinizin işlenme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan taraf Kutup Grup'tur." }),
							/* @__PURE__ */ jsxs("div", {
								className: legal_module_default.contactBox,
								children: [
									/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "Adres:" }), " Esentepe Mah. Büyükdere Cad. Levent 199 No: 199 İç Kapı No: 6 Şişli / İstanbul"] }),
									/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "E-posta:" }), " kvkk@kutupgrup.com"] }),
									/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "Telefon:" }), " +90 (533) 517 66 09"] })
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "3. Toplanan Kişisel Veriler" }),
							/* @__PURE__ */ jsx("p", { children: "Şirketimiz tarafından toplanan kişisel veriler aşağıdaki kategorilerde sınıflandırılmaktadır:" }),
							/* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Kimlik Bilgileri:" }), " Ad, soyad, T.C. kimlik numarası (yasal zorunluluk halinde)"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "İletişim Bilgileri:" }), " Telefon numarası, e-posta adresi, açık adres"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Müşteri İşlem Bilgileri:" }), " Talep edilen hizmet bilgileri, proje detayları, teklif bilgileri"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "İşlem Güvenliği Bilgileri:" }), " IP adresi, çerez verileri, oturum kayıtları"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Finansal Bilgiler:" }), " Fatura bilgileri, ödeme bilgileri (ödeme işlemcisi üzerinden)"] })
							] })
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "4. Kişisel Verilerin İşlenme Amaçları" }),
							/* @__PURE__ */ jsx("p", { children: "Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:" }),
							/* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsx("li", { children: "Hizmet taleplerinizi değerlendirmek ve teklif sunmak" }),
								/* @__PURE__ */ jsx("li", { children: "Sözleşme süreçlerini yürütmek ve hizmet sağlamak" }),
								/* @__PURE__ */ jsx("li", { children: "Faturalandırma ve ödeme işlemlerini gerçekleştirmek" }),
								/* @__PURE__ */ jsx("li", { children: "Yasal yükümlülükleri yerine getirmek" }),
								/* @__PURE__ */ jsx("li", { children: "Müşteri memnuniyetini ölçmek ve hizmet kalitesini artırmak" }),
								/* @__PURE__ */ jsx("li", { children: "İstatistiksel analiz ve raporlama yapmak" }),
								/* @__PURE__ */ jsx("li", { children: "Pazarlama ve iletişim faaliyetleri yürütmek (açık rıza ile)" })
							] })
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "5. Kişisel Verilerin Aktarımı" }),
							/* @__PURE__ */ jsx("p", { children: "Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde ve bu Gizlilik Politikası'nda belirtilen amaçlarla sınırlı olarak:" }),
							/* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsx("li", { children: "İş ortaklarımız ve tedarikçilerimiz ile (proje gereksinimleri kapsamında)" }),
								/* @__PURE__ */ jsx("li", { children: "Yasal yükümlülükler gereği kamu kurum ve kuruluşları ile" }),
								/* @__PURE__ */ jsx("li", { children: "Hukuki işlemlerin yürütülmesi amacıyla hukuk danışmanları ve denetçiler ile" }),
								/* @__PURE__ */ jsx("li", { children: "Bilişim altyapı hizmeti sağlayıcıları ile (veri güvenliği sağlanarak)" })
							] }),
							/* @__PURE__ */ jsx("p", { children: "paylaşılabilmektedir." })
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "6. Kişisel Verilerin Saklanma Süresi" }),
							/* @__PURE__ */ jsx("p", { children: "Kişisel verileriniz, ilgili mevzuatta öngörülen ve işlendikleri amaç için gerekli olan azami süre ve herhalde kanuni zamanaşımı süreleri kadar muhafaza edilmektedir. Saklama süreleri sona erdiğinde kişisel veriler silinir, yok edilir veya anonim hale getirilir." }),
							/* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Sözleşme ve Fatura Bilgileri:" }), " 10 yıl (Vergi Usul Kanunu gereği)"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "İletişim Kayıtları:" }), " 2 yıl"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Pazarlama Onayları:" }), " Onay geri çekilene kadar"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Website Logları:" }), " 6 ay"] })
							] })
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "7. KVKK Kapsamındaki Haklarınız" }),
							/* @__PURE__ */ jsx("p", { children: "KVKK'nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:" }),
							/* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsx("li", { children: "Kişisel verilerinizin işlenip işlenmediğini öğrenme" }),
								/* @__PURE__ */ jsx("li", { children: "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme" }),
								/* @__PURE__ */ jsx("li", { children: "Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme" }),
								/* @__PURE__ */ jsx("li", { children: "Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme" }),
								/* @__PURE__ */ jsx("li", { children: "Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme" }),
								/* @__PURE__ */ jsx("li", { children: "KVKK'da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme" }),
								/* @__PURE__ */ jsx("li", { children: "Kişisel verilerinizin aktarıldığı üçüncü kişilere yukarıdaki değişikliklerin bildirilmesini isteme" }),
								/* @__PURE__ */ jsx("li", { children: "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize sonuç çıkmasına itiraz etme" }),
								/* @__PURE__ */ jsx("li", { children: "Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme" })
							] })
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "8. Haklarınızı Kullanma" }),
							/* @__PURE__ */ jsx("p", { children: "Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici belgeler ile birlikte talebinizi;" }),
							/* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Yazılı olarak:" }), " Esentepe Mah. Büyükdere Cad. Levent 199 No: 199 İç Kapı No: 6 Şişli / İstanbul adresine"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "E-posta ile:" }), " kvkk@kutupgrup.com adresine"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "KEP adresi ile:" }), " kutupgrup@hs03.kep.tr adresine"] })
							] }),
							/* @__PURE__ */ jsx("p", { children: "iletebilirsiniz. Talebiniz en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir." })
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [/* @__PURE__ */ jsx("h2", { children: "9. Çerezler (Cookies)" }), /* @__PURE__ */ jsxs("p", { children: [
							"Web sitemizde kullanıcı deneyimini geliştirmek amacıyla çerezler kullanılmaktadır. Çerezlerin kullanımı hakkında detaylı bilgi için ",
							/* @__PURE__ */ jsx("a", {
								href: "/cerez-politikasi",
								children: "Çerez Politikamızı"
							}),
							" inceleyebilirsiniz."
						] })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [/* @__PURE__ */ jsx("h2", { children: "10. Güvenlik" }), /* @__PURE__ */ jsx("p", { children: "Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler alınmaktadır. Verileriniz, yetkisiz erişime, kaybolmaya, kötüye kullanıma karşı korunmaktadır. SSL sertifikası, güvenlik duvarları, şifreleme teknolojileri ve erişim kontrolleri kullanılarak verileriniz korunmaktadır." })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [/* @__PURE__ */ jsx("h2", { children: "11. Değişiklikler" }), /* @__PURE__ */ jsx("p", { children: "Bu Gizlilik Politikası'nda yapılacak değişiklikler web sitemizde yayınlanacaktır. Politika'nın güncel versiyonunu düzenli olarak kontrol etmenizi öneririz." })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "12. İletişim" }),
							/* @__PURE__ */ jsx("p", { children: "Gizlilik Politikamız ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:" }),
							/* @__PURE__ */ jsxs("div", {
								className: legal_module_default.contactBox,
								children: [/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "E-posta:" }), " kvkk@kutupgrup.com"] }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "Telefon:" }), " +90 (533) 517 66 09"] })]
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/pages/Cookies.tsx
function CerezPolitikasiClient() {
	return /* @__PURE__ */ jsxs("div", {
		className: legal_module_default.legalPage,
		children: [/* @__PURE__ */ jsx("section", {
			className: legal_module_default.hero,
			children: /* @__PURE__ */ jsxs("div", {
				className: legal_module_default.heroContent,
				children: [/* @__PURE__ */ jsx("h1", {
					className: legal_module_default.heroTitle,
					children: "Çerez Politikası"
				}), /* @__PURE__ */ jsx("p", {
					className: legal_module_default.heroSubtitle,
					children: "Son Güncelleme: 15 Şubat 2026"
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: legal_module_default.container,
			children: /* @__PURE__ */ jsxs("article", {
				className: legal_module_default.content,
				children: [
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [/* @__PURE__ */ jsx("h2", { children: "1. Giriş" }), /* @__PURE__ */ jsx("p", { children: "Bu Çerez Politikası, Kutup Grup'un web sitesinde (kutupgrup.com) kullanılan çerezler ve benzeri teknolojiler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır. Web sitemizi ziyaret ettiğinizde çerezlerin kullanımına ilişkin tercihlerinizi belirtebilirsiniz." })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [/* @__PURE__ */ jsx("h2", { children: "2. Çerez Nedir?" }), /* @__PURE__ */ jsx("p", { children: "Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır.  Çerezler, web sitelerinin daha verimli çalışmasını sağlamak ve web sitesi sahiplerine bilgi sağlamak için yaygın olarak kullanılır." })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "3. Çerez Türleri" }),
							/* @__PURE__ */ jsx("p", { children: "Web sitemizde kullanılan çerezler aşağıdaki kategorilerde sınıflandırılabilir:" }),
							/* @__PURE__ */ jsx("div", {
								className: legal_module_default.tableContainer,
								children: /* @__PURE__ */ jsxs("table", {
									className: legal_module_default.table,
									children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("th", { children: "Çerez Türü" }),
										/* @__PURE__ */ jsx("th", { children: "Amaç" }),
										/* @__PURE__ */ jsx("th", { children: "Süre" })
									] }) }), /* @__PURE__ */ jsxs("tbody", { children: [
										/* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("strong", { children: "Zorunlu Çerezler" }) }),
											/* @__PURE__ */ jsx("td", { children: "Web sitesinin temel işlevlerini yerine getirmesi için gereklidir" }),
											/* @__PURE__ */ jsx("td", { children: "Oturum / Kalıcı" })
										] }),
										/* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("strong", { children: "Performans Çerezleri" }) }),
											/* @__PURE__ */ jsx("td", { children: "Web sitesinin performansını analiz etmek ve iyileştirmek için kullanılır" }),
											/* @__PURE__ */ jsx("td", { children: "1-2 yıl" })
										] }),
										/* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("strong", { children: "İşlevsellik Çerezleri" }) }),
											/* @__PURE__ */ jsx("td", { children: "Tercihlerinizi hatırlamak ve kişiselleştirilmiş deneyim sunmak için kullanılır" }),
											/* @__PURE__ */ jsx("td", { children: "1 yıl" })
										] }),
										/* @__PURE__ */ jsxs("tr", { children: [
											/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("strong", { children: "Hedefleme/Reklam Çerezleri" }) }),
											/* @__PURE__ */ jsx("td", { children: "İlgi alanlarınıza uygun reklamlar göstermek için kullanılır" }),
											/* @__PURE__ */ jsx("td", { children: "1-2 yıl" })
										] })
									] })]
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "4. Kullandığımız Çerezler" }),
							/* @__PURE__ */ jsx("h3", { children: "4.1. Zorunlu Çerezler" }),
							/* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Oturum Çerezleri:" }), " Web sitesinde gezinmenizi sağlar ve güvenlik için gereklidir"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Form Çerezleri:" }), " İletişim formlarının doğru çalışmasını sağlar"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Güvenlik Çerezleri:" }), " Güvenlik önlemlerini destekler ve kötüye kullanımı önler"] })
							] }),
							/* @__PURE__ */ jsx("h3", { children: "4.2. Analitik Çerezler" }),
							/* @__PURE__ */ jsxs("ul", { children: [/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Google Analytics:" }), " Ziyaretçi istatistikleri, sayfa görüntülemeleri, kaynak analizi"] }), /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Kullanım verileri:" }), " Hangi sayfaların ziyaret edildiği, ne kadar süre kalındığı"] })] }),
							/* @__PURE__ */ jsx("h3", { children: "4.3. İşlevsellik Çerezleri" }),
							/* @__PURE__ */ jsxs("ul", { children: [/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Dil tercihleri:" }), " Seçtiğiniz dil ayarını hatırlar"] }), /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Filtreleme tercihleri:" }), " Hizmet filtreleme seçimlerinizi saklar"] })] })
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "5. Üçüncü Taraf Çerezleri" }),
							/* @__PURE__ */ jsx("p", { children: "Web sitemizde aşağıdaki üçüncü taraf hizmetleri kullanılmaktadır:" }),
							/* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsxs("li", { children: [
									/* @__PURE__ */ jsx("strong", { children: "Google Analytics:" }),
									" Web sitesi performansını ve kullanıcı davranışlarını analiz etmek için. Daha fazla bilgi için: ",
									/* @__PURE__ */ jsx("a", {
										href: "https://policies.google.com/privacy",
										target: "_blank",
										rel: "noopener",
										children: "Google Gizlilik Politikası"
									})
								] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Google Maps:" }), " Konum bilgilerini görüntülemek için."] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Font Providers (Google Fonts):" }), " Web fontlarını yüklemek için."] })
							] })
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "6. Çerezleri Nasıl Kontrol Edebilirsiniz?" }),
							/* @__PURE__ */ jsx("p", { children: "Çerezleri kontrol etmek ve yönetmek için tarayıcı ayarlarınızı kullanabilirsiniz. Çoğu tarayıcı otomatik olarak çerezleri kabul eder, ancak bunu değiştirmek için tarayıcı ayarlarınızı düzenleyebilirsiniz." }),
							/* @__PURE__ */ jsx("h3", { children: "Popüler Tarayıcılarda Çerez Ayarları:" }),
							/* @__PURE__ */ jsxs("ul", { children: [
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Chrome:" }), " Ayarlar → Gizlilik ve güvenlik → Çerezler ve diğer site verileri"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Firefox:" }), " Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Safari:" }), " Tercihler → Gizlilik → Çerezleri ve web sitesi verilerini yönet"] }),
								/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Edge:" }), " Ayarlar → Çerezler ve site izinleri → Çerezleri yönet ve sil"] })
							] }),
							/* @__PURE__ */ jsx("div", {
								className: legal_module_default.warningBox,
								children: /* @__PURE__ */ jsxs("p", { children: [
									"⚠️ ",
									/* @__PURE__ */ jsx("strong", { children: "Önemli:" }),
									" Çerezleri tamamen devre dışı bırakırsanız, web sitemizin bazı özellikleri düzgün çalışmayabilir veya bazı hizmetlere erişiminiz kısıtlanabilir."
								] })
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "7. Çerez Tercihlerinizi Değiştirme" }),
							/* @__PURE__ */ jsx("p", { children: "Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz. Daha önce verdiğiniz onayı geri çekmek için tarayıcınızın ayarlarından çerezleri silebilir veya bu sayfanın altındaki bağlantıyı kullanabilirsiniz." }),
							/* @__PURE__ */ jsx("div", {
								className: legal_module_default.buttonGroup,
								children: /* @__PURE__ */ jsx("button", {
									className: legal_module_default.primaryButton,
									children: "Çerez Tercihlerini Yönet"
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [/* @__PURE__ */ jsx("h2", { children: "8. \"Do Not Track\" (İzleme Yapma) Sinyalleri" }), /* @__PURE__ */ jsx("p", { children: "Bazı tarayıcılar \"Do Not Track\" (DNT) sinyali gönderme özelliğine sahiptir. Şu anda DNT sinyallerini nasıl ele alacağımız konusunda evrensel bir standart bulunmamaktadır. Bu nedenle, web sitemiz şu anda DNT sinyallerine otomatik olarak yanıt vermemektedir." })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [/* @__PURE__ */ jsx("h2", { children: "9. Çocukların Gizliliği" }), /* @__PURE__ */ jsx("p", { children: "Web sitemiz 18 yaşın altındaki çocuklara yönelik değildir ve bilerek 18 yaşın altındaki bireylerden kişisel veri toplamayız." })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [/* @__PURE__ */ jsx("h2", { children: "10. Politika Güncellemeleri" }), /* @__PURE__ */ jsx("p", { children: "Bu Çerez Politikası'nı zaman zaman güncelleyebiliriz. Yapılan değişiklikler bu sayfada yayınlanacaktır ve \"Son Güncelleme\" tarihi değiştirilecektir. Düzenli olarak bu sayfayı kontrol etmenizi öneririz." })]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: legal_module_default.section,
						children: [
							/* @__PURE__ */ jsx("h2", { children: "11. İletişim" }),
							/* @__PURE__ */ jsx("p", { children: "Çerez Politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:" }),
							/* @__PURE__ */ jsxs("div", {
								className: legal_module_default.contactBox,
								children: [/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "E-posta:" }), " info@kutupgrup.com"] }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "Telefon:" }), " +90 (533) 517 66 09"] })]
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/pages/NotFound.tsx
function NotFound() {
	return /* @__PURE__ */ jsxs("div", {
		className: "not-found-container",
		children: [
			/* @__PURE__ */ jsx("div", { className: "background-noise" }),
			/* @__PURE__ */ jsx("div", {
				className: "not-found-content",
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						ease: [
							.21,
							.47,
							.32,
							.98
						]
					},
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "logo-wrap",
							children: /* @__PURE__ */ jsx(Image, {
								src: "/logo/logo.png",
								alt: "Kutup Grup",
								width: 140,
								height: 67,
								style: { filter: "brightness(0) invert(1)" }
							})
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "error-code",
							children: "404"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "error-title",
							children: "Sayfa Bulunamadı"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "error-desc",
							children: "Aradığınız sayfayı bulamadık. Belki taşınmış, silinmiş veya geçici olarak ulaşılamıyor olabilir."
						}),
						/* @__PURE__ */ jsxs(Link$1, {
							href: "/",
							className: "back-btn",
							children: [/* @__PURE__ */ jsx("span", { children: "Ana Sayfaya Dön" }), /* @__PURE__ */ jsxs("svg", {
								width: "20",
								height: "20",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [/* @__PURE__ */ jsx("line", {
									x1: "5",
									y1: "12",
									x2: "19",
									y2: "12"
								}), /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("style", {
				jsx: true,
				children: `
        .not-found-container {
          position: relative;
          min-height: 100vh;
          background: #030816;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
          font-family: var(--font-sans);
          padding: 20px;
        }

        .background-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          z-index: 0;
        }

        .not-found-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 500px;
        }

        .logo-wrap {
          margin-bottom: 2rem;
          opacity: 0.8;
        }

        .error-code {
          font-family: var(--font-heading);
          font-size: 8rem;
          font-weight: 800;
          line-height: 1;
          margin: 0;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.04em;
        }

        .error-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 600;
          margin: 1rem 0;
          color: #f0f4f9;
        }

        .error-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #0a2463 0%, #247ba0 50%, #3e92cc 100%);
          color: white;
          text-decoration: none;
          border-radius: 100px;
          font-weight: 600;
          font-size: 1.1rem;
          font-family: var(--font-heading);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(36, 123, 160, 0.25);
        }

        .back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(36, 123, 160, 0.4);
        }

        .back-btn svg {
          transition: transform 0.3s ease;
        }

        .back-btn:hover svg {
          transform: translateX(4px);
        }
      `
			})
		]
	});
}
//#endregion
//#region src/components/seo/MetaHelper.tsx
var META_MAP = {
	"/": {
		title: "Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler",
		description: "Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz. İple erişim teknikleri, jeoteknik uygulamalar ve yüksek yapı çözümleri."
	},
	"/hakkimizda": {
		title: "Hakkımızda - Kutup Grup",
		description: "Kutup Grup, endüstriyel dağcılık ve jeoteknik çözümler alanında IRATA ve SPRAT sertifikalı profesyonel hizmet sağlayıcısıdır."
	},
	"/hizmetler": {
		title: "Hizmetlerimiz - Kutup Grup",
		description: "Endüstriyel dağcılık, yüksekte çalışma güvenliği ve jeoteknik koruma sistemleri alanlarındaki profesyonel hizmetlerimizi inceleyin."
	},
	"/iletisim": {
		title: "İletişim - Kutup Grup",
		description: "Kutup Grup ile iletişime geçin. İstanbul ve Balıkesir ofis bilgilerimiz, telefon numaralarımız ve e-posta adreslerimiz."
	},
	"/sss": {
		title: "Sıkça Sorulan Sorular - Kutup Grup",
		description: "Endüstriyel dağcılık, iple erişim güvenliği, kullanılan ekipmanlar ve proje süreçlerimiz hakkında merak edilen tüm sorular ve cevapları."
	},
	"/referanslar": {
		title: "Referanslarımız - Kutup Grup",
		description: "Kutup Grup olarak başarıyla tamamladığımız endüstriyel dağcılık ve jeoteknik projelerimiz."
	},
	"/gizlilik-politikasi": {
		title: "Gizlilik Politikası ve KVKK - Kutup Grup",
		description: "Kişisel verilerinizin korunması ve işlenmesi hakkında detaylı yasal aydınlatma metnimiz."
	},
	"/cerez-politikasi": {
		title: "Çerez Politikası - Kutup Grup",
		description: "Web sitemizde kullanılan çerezler, çerez türleri ve bunların yönetimi hakkında bilgilendirme."
	}
};
function MetaHelper() {
	const { pathname } = useLocation();
	useEffect(() => {
		let meta = META_MAP[pathname];
		if (!meta && pathname.startsWith("/hizmetler/")) {
			const slug = pathname.replace("/hizmetler/", "");
			Promise.resolve().then(() => services_data_exports).then((module) => {
				const service = module.SERVICES_DATA[slug];
				if (service) updateMeta(service.title + " - Kutup Grup", service.metaDescription, `https://kutupgrup.com/hizmetler/${service.slug}`);
			});
			return;
		}
		if (meta) updateMeta(meta.title, meta.description, `https://kutupgrup.com${pathname === "/" ? "" : pathname}`);
		else updateMeta("Sayfa Bulunamadı - Kutup Grup", "Aradığınız sayfa mevcut değil veya taşınmış olabilir.");
	}, [pathname]);
	const updateMeta = (title, description, canonicalUrl) => {
		document.title = title;
		let metaDesc = document.querySelector("meta[name=\"description\"]");
		if (!metaDesc) {
			metaDesc = document.createElement("meta");
			metaDesc.setAttribute("name", "description");
			document.head.appendChild(metaDesc);
		}
		metaDesc.setAttribute("content", description);
		let linkCanonical = document.querySelector("link[rel=\"canonical\"]");
		if (!linkCanonical) {
			linkCanonical = document.createElement("link");
			linkCanonical.setAttribute("rel", "canonical");
			document.head.appendChild(linkCanonical);
		}
		const finalCanonical = canonicalUrl || `https://kutupgrup.com${pathname === "/" ? "" : pathname}`;
		linkCanonical.setAttribute("href", finalCanonical);
	};
	return null;
}
//#endregion
//#region src/App.tsx
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
function AppRoutes() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(ScrollToTop, {}),
		/* @__PURE__ */ jsx(MetaHelper, {}),
		/* @__PURE__ */ jsxs(Routes, { children: [
			/* @__PURE__ */ jsx(Route, {
				path: "/",
				element: /* @__PURE__ */ jsx(Home, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/hakkimizda",
				element: /* @__PURE__ */ jsx(AboutPageClient, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/hizmetler",
				element: /* @__PURE__ */ jsx(HizmetlerPageClient, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/hizmetler/:slug",
				element: /* @__PURE__ */ jsx(ServiceDetail, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/iletisim",
				element: /* @__PURE__ */ jsx(ContactPageClient, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/referanslar",
				element: /* @__PURE__ */ jsx(ReferanslarPageClient, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/sss",
				element: /* @__PURE__ */ jsx(SSSPageClient, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/gizlilik-politikasi",
				element: /* @__PURE__ */ jsx(GizlilikPolitikasiClient, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/cerez-politikasi",
				element: /* @__PURE__ */ jsx(CerezPolitikasiClient, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "*",
				element: /* @__PURE__ */ jsx(NotFound, {})
			})
		] })
	] });
}
//#endregion
//#region src/entry-server.tsx
function render(url) {
	return renderToString(/* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(MemoryRouter, {
		initialEntries: [url],
		children: /* @__PURE__ */ jsx(AppRoutes, {})
	}) }));
}
//#endregion
export { render };
