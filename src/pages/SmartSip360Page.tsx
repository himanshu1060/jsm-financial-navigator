import { useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Shield,
  TrendingUp,
  Heart,
  Wallet,
  CheckCircle2,
  Star,
  Phone,
  Users,
  Target,
  Award,
  Landmark,
  BadgeCheck,
  ArrowRight,
  Lightbulb,
  HandCoins,
  GraduationCap,
  Home,
  Briefcase,
  Baby,
  PiggyBank,
} from "lucide-react";

// ─── Content in English & Hindi ───
const content = {
  en: {
    langBtn: "हिंदी में देखें",
    hero: {
      h1: "SMART SIP 360 by Tata AIA – Build Wealth. Protect Family. Create Future Income.",
      h2: "Market-Linked Investment Plan with Life Cover up to 360X.",
      desc: [
        "Invest regularly like a SIP.",
        "Enjoy market-linked growth.",
        "Secure your family with powerful life protection.",
      ],
      bullets: [
        "100% Tax-free maturity amount",
        "Tax-Free Growth",
        "Inbuilt Life Cover",
        "Smart Withdrawal Options",
      ],
      cta1: "Know More – Get Personalized Plan",
      cta2: "Calculate My Benefit",
    },
    whatIs: {
      title: "What is SMART SIP 360?",
      text: "SMART SIP 360 is a comprehensive Unit Linked Insurance Plan (ULIP) that combines the power of systematic investment with robust life insurance coverage. It empowers you to grow your wealth while safeguarding your family's future.",
      boxes: [
        { title: "Wealth Creation", desc: "Grow your money with market-linked returns through disciplined SIP investing." },
        { title: "Life Protection", desc: "Inbuilt life cover ensures your family is financially secure, come what may." },
        { title: "Goal-Based Planning", desc: "Align your investments to specific goals — education, retirement, home, or legacy." },
        { title: "Second Income", desc: "Create a future income stream through smart partial withdrawal strategies." },
      ],
    },
    powerful: {
      title: "Why SMART SIP 360 is Powerful?",
      cards: [
        { title: "100% Premium Investment", desc: "Every rupee you invest works for you from day one with zero allocation charges after initial years." },
        { title: "Life Cover up to 360X", desc: "Example: ₹20,000 monthly SIP = ₹72 Lakhs life cover to protect your loved ones." },
        { title: "Tax-Free Structure", desc: "Maturity proceeds are 100% tax-free under Section 10(10D), boosting your effective returns." },
        { title: "Smart Partial Withdrawals", desc: "Access your funds when you need them — for emergencies, goals, or creating second income." },
        { title: "Waiver of Premium", desc: "In case of unfortunate events, future premiums are waived and the plan continues for your family." },
        { title: "Women Empowerment", desc: "Special benefits and discounts for women investors to encourage financial independence." },
      ],
    },
    plans: {
      title: "Choose Your Plan Option",
      items: [
        { name: "Wealth Secure", desc: "Focused on long-term wealth creation with maximum market exposure and growth potential.", recommended: false },
        { name: "Future Secure", desc: "Balanced approach combining growth with protection for your family's milestones.", recommended: false },
        { name: "Family Secure", desc: "Maximum life coverage with wealth-building — ideal for breadwinners who want both security and growth.", recommended: true },
      ],
    },
    illustration: {
      title: "Investment Illustration",
      disclaimer: "Returns are market-linked and not guaranteed. Investment risk is borne by the policyholder.",
    },
    whoShould: {
      title: "Who Should Invest?",
      items: [
        "Salaried professionals looking for disciplined wealth creation",
        "Young earners wanting life cover + investment together",
        "Parents planning for children's education or marriage",
        "Anyone seeking tax-efficient long-term investment",
        "Individuals wanting a second income stream post-retirement",
        "Women looking for empowerment benefits",
      ],
    },
    planDetails: {
      title: "Plan Details",
      rows: [
        ["Entry Age", "0 – 60 years"],
        ["Policy Term", "15 / 20 / 25 / 30 years"],
        ["Premium Payment Term", "5 / 7 / 10 / 12 years"],
        ["Min Premium", "₹3,000/month"],
        ["Sum Assured", "Up to 360X monthly premium"],
        ["Fund Options", "Multiple fund choices across equity, debt & balanced"],
        ["Partial Withdrawal", "Allowed after 5 policy years"],
        ["Tax Benefit", "Section 80C (premiums) & 10(10D) (maturity)"],
        ["Loan Facility", "Not applicable (ULIP)"],
        ["Settlement Options", "Lumpsum or staggered payout"],
      ],
    },
    whyUs: {
      title: "Why Invest Through Us?",
      items: [
        { title: "12+ Years Experience", desc: "Trusted advisory across hundreds of families." },
        { title: "Personalized Planning", desc: "Every plan is tailored to your unique goals and risk profile." },
        { title: "End-to-End Support", desc: "From onboarding to claims — we're with you at every step." },
        { title: "Transparent Process", desc: "No hidden charges, no surprises — complete clarity always." },
        { title: "Post-Sale Service", desc: "Regular reviews, rebalancing suggestions, and proactive communication." },
      ],
    },
    cta: {
      title: "Get Your Custom Plan Now",
      subtitle: "Fill in your details and our advisor will reach out within 24 hours.",
      fields: { name: "Name", mobile: "Mobile Number", email: "Email", budget: "Monthly Investment Budget", goal: "Your Goal" },
      goals: ["Child's Education", "Retirement Planning", "Wealth Creation", "Tax Saving", "Family Protection", "Second Income"],
      btn: "GET MY CUSTOM PLAN NOW",
      call: "Call / WhatsApp: 9425393438",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "What is SMART SIP 360?", a: "SMART SIP 360 is a ULIP (Unit Linked Insurance Plan) offered by Tata AIA that combines systematic investment with life insurance. It lets you invest like a SIP while providing life cover up to 360 times your monthly premium." },
        { q: "Is SMART SIP 360 safe?", a: "Like all market-linked plans, returns depend on fund performance. However, the life cover component guarantees protection for your family. You can choose from multiple fund options to match your risk appetite." },
        { q: "What are the tax benefits?", a: "Premiums qualify for deduction under Section 80C, and maturity proceeds are tax-free under Section 10(10D), subject to conditions." },
        { q: "Can I withdraw money before maturity?", a: "Yes, partial withdrawals are allowed after 5 completed policy years, subject to terms and conditions. This helps create a second income stream." },
        { q: "What happens if I miss a premium?", a: "There is a grace period. If premiums remain unpaid, the policy may convert to a paid-up or discontinued status. We recommend setting up auto-debit to avoid lapses." },
        { q: "What is the Waiver of Premium benefit?", a: "If the policyholder passes away during the premium payment term, all future premiums are waived by the insurance company. The policy continues for the benefit of the family." },
        { q: "Who is eligible to buy this plan?", a: "Anyone aged 0 to 60 years can purchase this plan. Minors can be covered through parent proposals." },
        { q: "How is this different from a regular SIP in mutual funds?", a: "Unlike mutual fund SIPs, SMART SIP 360 provides inbuilt life insurance cover, tax-free maturity, and waiver of premium benefit — making it a comprehensive financial solution." },
      ],
    },
  },
  hi: {
    langBtn: "View in English",
    hero: {
      h1: "SMART SIP 360 by Tata AIA – संपत्ति बनाएं। परिवार सुरक्षित करें। भविष्य की आय बनाएं।",
      h2: "360X तक लाइफ कवर के साथ मार्केट-लिंक्ड निवेश योजना।",
      desc: [
        "SIP की तरह नियमित रूप से निवेश करें।",
        "मार्केट-लिंक्ड ग्रोथ का आनंद लें।",
        "शक्तिशाली लाइफ प्रोटेक्शन से अपने परिवार को सुरक्षित करें।",
      ],
      bullets: [
        "100% टैक्स-फ्री मैच्योरिटी राशि",
        "टैक्स-फ्री ग्रोथ",
        "इनबिल्ट लाइफ कवर",
        "स्मार्ट विड्रॉल विकल्प",
      ],
      cta1: "और जानें – पर्सनलाइज्ड प्लान पाएं",
      cta2: "मेरा लाभ कैलकुलेट करें",
    },
    whatIs: {
      title: "SMART SIP 360 क्या है?",
      text: "SMART SIP 360 एक व्यापक यूनिट लिंक्ड इंश्योरेंस प्लान (ULIP) है जो व्यवस्थित निवेश की शक्ति को मजबूत जीवन बीमा कवरेज के साथ जोड़ता है। यह आपको अपनी संपत्ति बढ़ाने के साथ-साथ अपने परिवार के भविष्य की सुरक्षा करने में सक्षम बनाता है।",
      boxes: [
        { title: "संपत्ति निर्माण", desc: "अनुशासित SIP निवेश के माध्यम से मार्केट-लिंक्ड रिटर्न से अपना पैसा बढ़ाएं।" },
        { title: "लाइफ प्रोटेक्शन", desc: "इनबिल्ट लाइफ कवर सुनिश्चित करता है कि आपका परिवार आर्थिक रूप से सुरक्षित रहे।" },
        { title: "लक्ष्य-आधारित योजना", desc: "अपने निवेश को विशिष्ट लक्ष्यों से जोड़ें — शिक्षा, रिटायरमेंट, घर, या विरासत।" },
        { title: "दूसरी आय", desc: "स्मार्ट आंशिक निकासी रणनीतियों के माध्यम से भविष्य की आय धारा बनाएं।" },
      ],
    },
    powerful: {
      title: "SMART SIP 360 शक्तिशाली क्यों है?",
      cards: [
        { title: "100% प्रीमियम निवेश", desc: "आपका हर रुपया पहले दिन से आपके लिए काम करता है।" },
        { title: "360X तक लाइफ कवर", desc: "उदाहरण: ₹20,000 मासिक SIP = ₹72 लाख लाइफ कवर।" },
        { title: "टैक्स-फ्री संरचना", desc: "मैच्योरिटी राशि सेक्शन 10(10D) के तहत 100% टैक्स-फ्री है।" },
        { title: "स्मार्ट आंशिक निकासी", desc: "जरूरत पड़ने पर अपने फंड तक पहुंचें।" },
        { title: "प्रीमियम की छूट", desc: "दुर्भाग्यपूर्ण घटनाओं में, भविष्य के प्रीमियम माफ कर दिए जाते हैं।" },
        { title: "महिला सशक्तिकरण", desc: "महिला निवेशकों के लिए विशेष लाभ और छूट।" },
      ],
    },
    plans: {
      title: "अपना प्लान विकल्प चुनें",
      items: [
        { name: "वेल्थ सिक्योर", desc: "अधिकतम मार्केट एक्सपोज़र और ग्रोथ पोटेंशियल के साथ दीर्घकालिक संपत्ति निर्माण पर केंद्रित।", recommended: false },
        { name: "फ्यूचर सिक्योर", desc: "आपके परिवार की उपलब्धियों के लिए ग्रोथ और प्रोटेक्शन का संतुलित दृष्टिकोण।", recommended: false },
        { name: "फैमिली सिक्योर", desc: "अधिकतम लाइफ कवरेज के साथ संपत्ति-निर्माण — सुरक्षा और ग्रोथ दोनों चाहने वालों के लिए आदर्श।", recommended: true },
      ],
    },
    illustration: {
      title: "निवेश चित्रण",
      disclaimer: "रिटर्न मार्केट-लिंक्ड हैं और गारंटीड नहीं हैं। निवेश जोखिम पॉलिसीधारक द्वारा वहन किया जाता है।",
    },
    whoShould: {
      title: "किसे निवेश करना चाहिए?",
      items: [
        "अनुशासित संपत्ति निर्माण चाहने वाले वेतनभोगी पेशेवर",
        "लाइफ कवर + निवेश दोनों चाहने वाले युवा कमाने वाले",
        "बच्चों की शिक्षा या शादी की योजना बनाने वाले माता-पिता",
        "टैक्स-कुशल दीर्घकालिक निवेश चाहने वाले",
        "रिटायरमेंट के बाद दूसरी आय धारा चाहने वाले व्यक्ति",
        "सशक्तिकरण लाभ चाहने वाली महिलाएं",
      ],
    },
    planDetails: {
      title: "प्लान विवरण",
      rows: [
        ["प्रवेश आयु", "0 – 60 वर्ष"],
        ["पॉलिसी अवधि", "15 / 20 / 25 / 30 वर्ष"],
        ["प्रीमियम भुगतान अवधि", "5 / 7 / 10 / 12 वर्ष"],
        ["न्यूनतम प्रीमियम", "₹3,000/माह"],
        ["बीमा राशि", "मासिक प्रीमियम का 360X तक"],
        ["फंड विकल्प", "इक्विटी, डेट और बैलेंस्ड में कई फंड विकल्प"],
        ["आंशिक निकासी", "5 पॉलिसी वर्षों के बाद अनुमति"],
        ["टैक्स लाभ", "सेक्शन 80C (प्रीमियम) और 10(10D) (मैच्योरिटी)"],
        ["लोन सुविधा", "लागू नहीं (ULIP)"],
        ["सेटलमेंट विकल्प", "एकमुश्त या किस्तों में भुगतान"],
      ],
    },
    whyUs: {
      title: "हमारे माध्यम से क्यों निवेश करें?",
      items: [
        { title: "12+ वर्षों का अनुभव", desc: "सैकड़ों परिवारों में विश्वसनीय सलाह।" },
        { title: "व्यक्तिगत योजना", desc: "हर प्लान आपके अनूठे लक्ष्यों के अनुसार तैयार किया जाता है।" },
        { title: "संपूर्ण सहायता", desc: "ऑनबोर्डिंग से लेकर क्लेम तक — हम हर कदम पर आपके साथ हैं।" },
        { title: "पारदर्शी प्रक्रिया", desc: "कोई छिपे शुल्क नहीं, कोई आश्चर्य नहीं।" },
        { title: "बिक्री के बाद सेवा", desc: "नियमित समीक्षा, रीबैलेंसिंग सुझाव, और सक्रिय संवाद।" },
      ],
    },
    cta: {
      title: "अपना कस्टम प्लान अभी पाएं",
      subtitle: "अपना विवरण भरें और हमारे सलाहकार 24 घंटे में आपसे संपर्क करेंगे।",
      fields: { name: "नाम", mobile: "मोबाइल नंबर", email: "ईमेल", budget: "मासिक निवेश बजट", goal: "आपका लक्ष्य" },
      goals: ["बच्चे की शिक्षा", "रिटायरमेंट प्लानिंग", "संपत्ति निर्माण", "टैक्स बचत", "परिवार सुरक्षा", "दूसरी आय"],
      btn: "अभी मेरा कस्टम प्लान पाएं",
      call: "कॉल / WhatsApp: 9425393438",
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      items: [
        { q: "SMART SIP 360 क्या है?", a: "SMART SIP 360 Tata AIA द्वारा पेश किया गया एक ULIP है जो व्यवस्थित निवेश को जीवन बीमा के साथ जोड़ता है।" },
        { q: "क्या SMART SIP 360 सुरक्षित है?", a: "रिटर्न फंड प्रदर्शन पर निर्भर करते हैं। हालांकि, लाइफ कवर घटक आपके परिवार के लिए सुरक्षा की गारंटी देता है।" },
        { q: "टैक्स लाभ क्या हैं?", a: "प्रीमियम सेक्शन 80C के तहत कटौती के लिए योग्य हैं, और मैच्योरिटी राशि सेक्शन 10(10D) के तहत टैक्स-फ्री है।" },
        { q: "क्या मैं मैच्योरिटी से पहले पैसे निकाल सकता हूं?", a: "हां, 5 पॉलिसी वर्ष पूरे होने के बाद आंशिक निकासी की अनुमति है।" },
        { q: "अगर मैं प्रीमियम चुकाना भूल जाऊं तो?", a: "एक ग्रेस पीरियड होता है। ऑटो-डेबिट सेट करने की सलाह दी जाती है।" },
        { q: "प्रीमियम की छूट का लाभ क्या है?", a: "यदि पॉलिसीधारक की मृत्यु हो जाती है, तो सभी भविष्य के प्रीमियम माफ कर दिए जाते हैं।" },
        { q: "यह म्यूचुअल फंड SIP से कैसे अलग है?", a: "म्यूचुअल फंड SIP के विपरीत, SMART SIP 360 इनबिल्ट लाइफ कवर, टैक्स-फ्री मैच्योरिटी, और प्रीमियम छूट लाभ प्रदान करता है।" },
      ],
    },
  },
};

// Icon arrays for sections
const whatIsIcons = [TrendingUp, Shield, Target, HandCoins];
const powerfulIcons = [Wallet, Shield, Landmark, HandCoins, Heart, Users];
const whoShouldIcons = [Briefcase, Lightbulb, Baby, PiggyBank, Home, Users];
const whyUsIcons = [Award, Target, Heart, BadgeCheck, Star];

const SmartSip360Page = () => {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Language Toggle */}
      <div className="fixed top-20 right-4 z-40">
        <Button
          size="sm"
          variant="outline"
          className="rounded-full border-[hsl(220,60%,35%)] text-[hsl(220,60%,35%)] hover:bg-[hsl(220,60%,35%)] hover:text-white shadow-md"
          onClick={() => setLang(lang === "en" ? "hi" : "en")}
        >
          {t.langBtn}
        </Button>
      </div>

      {/* ── HERO ── */}
      <section className="section-padding pt-28 md:pt-32 bg-gradient-to-br from-[hsl(220,60%,15%)] to-[hsl(220,55%,25%)] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">{t.hero.h1}</h1>
              <h2 className="text-lg md:text-xl font-medium text-[hsl(220,80%,80%)]">{t.hero.h2}</h2>
              <div className="space-y-1 text-white/90 text-sm md:text-base">
                {t.hero.desc.map((d, i) => <p key={i}>{d}</p>)}
              </div>
              <ul className="space-y-2">
                {t.hero.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm md:text-base">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(142,55%,45%)] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 text-sm md:text-base px-6"
                  onClick={() => document.querySelector("#sip-cta")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t.hero.cta1} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/40 text-white hover:bg-white/10 text-sm md:text-base px-6"
                  onClick={() => document.querySelector("#illustration")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t.hero.cta2}
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center aspect-[4/3] text-white/60 text-center p-8">
              {/* Replace with actual hero illustration */}
              <div>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <TrendingUp className="h-10 w-10" />
                </div>
                <p className="text-sm font-medium">Image Placeholder</p>
                <p className="text-xs mt-1">Smart SIP 360 Hero Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 – What is SMART SIP 360? ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">{t.whatIs.title}</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <p className="text-muted-foreground leading-relaxed">{t.whatIs.text}</p>
            {/* Image Placeholder */}
            <div className="bg-muted rounded-2xl flex items-center justify-center aspect-[4/3] text-muted-foreground text-center p-8 border border-border">
              {/* Replace with ULIP Working Illustration */}
              <div>
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-secondary flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-secondary-foreground" />
                </div>
                <p className="text-sm font-medium">Image Placeholder</p>
                <p className="text-xs mt-1">ULIP Working Illustration</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whatIs.boxes.map((box, i) => {
              const Icon = whatIsIcons[i];
              return (
                <Card key={i} className="text-center hover:shadow-lg transition-shadow border-border">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[hsl(220,60%,95%)] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[hsl(220,60%,35%)]" />
                    </div>
                    <CardTitle className="text-base">{box.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{box.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 – Why Powerful ── */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">{t.powerful.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.powerful.cards.map((card, i) => {
              const Icon = powerfulIcons[i];
              return (
                <Card key={i} className="hover:shadow-lg transition-shadow border-border">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 mb-2 rounded-lg bg-[hsl(220,60%,95%)] flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[hsl(220,60%,35%)]" />
                    </div>
                    <CardTitle className="text-base">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{card.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 – Plan Options ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">{t.plans.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.plans.items.map((plan, i) => (
              <Card
                key={i}
                className={`relative hover:shadow-xl transition-shadow ${
                  plan.recommended ? "border-2 border-destructive ring-2 ring-destructive/20" : "border-border"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-destructive text-destructive-foreground text-xs font-bold px-4 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  {/* Replace with plan image */}
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <Shield className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{plan.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 – Illustration ── */}
      <section id="illustration" className="section-padding bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">{t.illustration.title}</h2>
          {/* Replace with Investment Chart */}
          <div className="bg-card border border-border rounded-2xl aspect-[16/9] flex items-center justify-center text-muted-foreground mb-6 mx-auto max-w-3xl">
            <div>
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                <TrendingUp className="h-8 w-8" />
              </div>
              <p className="text-sm font-medium">Image Placeholder</p>
              <p className="text-xs mt-1">Investment Chart Example</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground italic">{t.illustration.disclaimer}</p>
        </div>
      </section>

      {/* ── SECTION 6 – Who Should Invest ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">{t.whoShould.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.whoShould.items.map((item, i) => {
              const Icon = whoShouldIcons[i];
              return (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <div className="w-9 h-9 shrink-0 rounded-full bg-[hsl(220,60%,95%)] flex items-center justify-center">
                    <Icon className="h-4 w-4 text-[hsl(220,60%,35%)]" />
                  </div>
                  <p className="text-sm text-foreground pt-1.5">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7 – Plan Details Table ── */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">{t.planDetails.title}</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {t.planDetails.rows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                    <td className="px-4 md:px-6 py-3 font-medium text-foreground w-1/2 border-r border-border">{label}</td>
                    <td className="px-4 md:px-6 py-3 text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 – Why Invest Through Us ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">{t.whyUs.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyUs.items.map((item, i) => {
              const Icon = whyUsIcons[i];
              return (
                <Card key={i} className="text-center hover:shadow-lg transition-shadow border-border">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[hsl(220,60%,95%)] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[hsl(220,60%,35%)]" />
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="sip-cta" className="section-padding bg-gradient-to-br from-[hsl(220,60%,15%)] to-[hsl(220,55%,25%)] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="text-xl md:text-2xl font-bold mb-2">{t.cta.title}</h2>
              <p className="text-white/80 text-sm mb-6">{t.cta.subtitle}</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.name}</Label>
                  <Input className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" placeholder={t.cta.fields.name} />
                </div>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.mobile}</Label>
                  <Input className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" placeholder={t.cta.fields.mobile} />
                </div>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.email}</Label>
                  <Input type="email" className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" placeholder={t.cta.fields.email} />
                </div>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.budget}</Label>
                  <Input className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" placeholder="₹" />
                </div>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.goal}</Label>
                  <Select>
                    <SelectTrigger className="mt-1 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder={t.cta.fields.goal} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.cta.goals.map((g) => (
                        <SelectItem key={g} value={g}>{g}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 font-bold">
                  {t.cta.btn}
                </Button>
              </form>
              <p className="text-center text-white/70 text-sm mt-4 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> {t.cta.call}
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center aspect-[4/3] text-white/60 text-center p-8">
              {/* Replace with consultation illustration */}
              <div>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <GraduationCap className="h-10 w-10" />
                </div>
                <p className="text-sm font-medium">Image Placeholder</p>
                <p className="text-xs mt-1">Financial Planning Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">{t.faq.title}</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-sm md:text-base font-medium text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SmartSip360Page;
