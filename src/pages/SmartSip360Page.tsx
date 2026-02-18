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
  RefreshCw,
  Layers,
  Lock,
  AlertTriangle,
  UserCheck,
  Zap,
} from "lucide-react";

const content = {
  en: {
    langBtn: "हिंदी में देखें",
    hero: {
      h1: "SMART SIP 360 by Tata AIA",
      h1sub: "Build Wealth. Protect Family. Create Future Income.",
      h2: "A market-linked investment plan that gives you life cover of up to 360× your SIP amount.",
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
        { title: "Life Insurance Protection", desc: "Inbuilt life cover secures your family – in life and beyond." },
        { title: "Goal-Based Planning", desc: "Align your investments to specific goals — education, retirement, home, or legacy." },
        { title: "Second Income Strategy", desc: "Create a future tax-free income stream through smart partial withdrawal strategies." },
      ],
    },
    powerful: {
      title: "Why SMART SIP 360 is Powerful?",
      cards: [
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
        { name: "Wealth Secure", desc: "Focused on long-term wealth creation with maximum market exposure and growth potential." },
        { name: "Future Secure", desc: "Balanced approach combining growth with protection for your family's milestones." },
        { name: "Family Secure", desc: "Maximum life coverage with wealth-building — ideal for breadwinners who want both security and growth." },
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
        ["Min – Max Premium", "₹2,000 – ₹20,000 per month"],
        ["Sum Assured", "Up to 360X monthly premium"],
        ["Fund Options", "Multiple fund choices across equity, debt & balanced"],
        ["Partial Withdrawal", "Allowed after 5 policy years"],
        ["Tax Benefit", "Section 80C (premiums) & 10(10D) (maturity)"],
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
      call: "Call / WhatsApp: +91 9425393438",
    },
    faq: {
      title: "Question Summary",
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
    smartSipCombo: {
      title: "SMART SIP 360 = Investment + Insurance in One Smart Plan",
      text: "ULIPs combine life insurance with market-linked investments. Premiums split between coverage and funds (equity, debt, or hybrid) based on risk. They offer flexible, long-term wealth creation and 100% tax-free maturity for goals like child's education or retirement.",
    },
    ulipBlocks: {
      howWorks: {
        title: "How Does a ULIP Plan Work?",
        points: [
          "Pay regular premiums (monthly/quarterly/yearly); portion funds life insurance, remainder invests in chosen funds.",
          "Investment splits into units at fixed face value; unit value is Net Asset Value (NAV).",
          "Grows with market performance; switch funds per conditions.",
          "Receive fund value at maturity.",
          "On death, family gets higher of Sum Assured + Total Fund Value (TATA pays remaining premiums per plan).",
        ],
      },
      keyFeatures: {
        title: "Key Features of ULIPs",
        items: [
          { title: "Insurance + Investment in One Plan", desc: "ULIPs offer dual benefits: market-linked wealth creation and life insurance." },
          { title: "Switch Between Funds", desc: "Switch between equity/debt funds; allows 12 switches (per policy terms)." },
          { title: "Premium Redirection", desc: "Redirect future premiums anytime via allocation percentages." },
          { title: "Partial Withdrawals", desc: "5-year lock-in; after that unlimited partial withdrawals (per policy terms)." },
        ],
      },
      myths: {
        title: "Common Myths About ULIPs",
        items: [
          { myth: "ULIPs Give Low Returns", reality: "Modern ULIPs deliver competitive returns." },
          { myth: "ULIPs Are Expensive", reality: "IRDAI regulations reduced charges." },
          { myth: "ULIPs Are High Risk", reality: "Risk depends on chosen fund." },
          { myth: "ULIPs Are Complicated", reality: "Easy once fund allocation is understood." },
          { myth: "Market Fluctuations Affect Life Cover", reality: "Life cover stays fixed." },
        ],
      },
      whoCanOpt: {
        title: "Who Can Opt for This Plan?",
        items: [
          "Long-term wealth builders",
          "Investors seeking protection + growth",
          "Tax-conscious individuals",
          "Low- to high-risk profiles",
        ],
      },
    },
  },
  hi: {
    langBtn: "View in English",
    hero: {
      h1: "SMART SIP 360 by Tata AIA",
      h1sub: "संपत्ति बनाएं। परिवार सुरक्षित करें। भविष्य की आय बनाएं।",
      h2: "एक मार्केट-लिंक्ड निवेश योजना जो आपको आपकी SIP राशि का 360× तक लाइफ कवर देती है।",
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
      text: "SMART SIP 360 एक व्यापक यूनिट लिंक्ड इंश्योरेंस प्लान (ULIP) है जो व्यवस्थित निवेश की शक्ति को मजबूत जीवन बीमा कवरेज के साथ जोड़ता है।",
      boxes: [
        { title: "संपत्ति निर्माण", desc: "अनुशासित SIP निवेश के माध्यम से मार्केट-लिंक्ड रिटर्न से अपना पैसा बढ़ाएं।" },
        { title: "जीवन बीमा सुरक्षा", desc: "इनबिल्ट लाइफ कवर आपके परिवार को सुरक्षित रखता है – जीवन में और उसके बाद भी।" },
        { title: "लक्ष्य-आधारित योजना", desc: "अपने निवेश को विशिष्ट लक्ष्यों से जोड़ें — शिक्षा, रिटायरमेंट, घर, या विरासत।" },
        { title: "दूसरी आय रणनीति", desc: "स्मार्ट आंशिक निकासी रणनीतियों के माध्यम से भविष्य की टैक्स-फ्री आय धारा बनाएं।" },
      ],
    },
    powerful: {
      title: "SMART SIP 360 शक्तिशाली क्यों है?",
      cards: [
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
        { name: "वेल्थ सिक्योर", desc: "अधिकतम मार्केट एक्सपोज़र और ग्रोथ पोटेंशियल के साथ दीर्घकालिक संपत्ति निर्माण पर केंद्रित।" },
        { name: "फ्यूचर सिक्योर", desc: "आपके परिवार की उपलब्धियों के लिए ग्रोथ और प्रोटेक्शन का संतुलित दृष्टिकोण।" },
        { name: "फैमिली सिक्योर", desc: "अधिकतम लाइफ कवरेज के साथ संपत्ति-निर्माण — सुरक्षा और ग्रोथ दोनों चाहने वालों के लिए आदर्श।" },
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
        ["न्यूनतम – अधिकतम प्रीमियम", "₹2,000 – ₹20,000 प्रति माह"],
        ["बीमा राशि", "मासिक प्रीमियम का 360X तक"],
        ["फंड विकल्प", "इक्विटी, डेट और बैलेंस्ड में कई फंड विकल्प"],
        ["आंशिक निकासी", "5 पॉलिसी वर्षों के बाद अनुमति"],
        ["टैक्स लाभ", "सेक्शन 80C (प्रीमियम) और 10(10D) (मैच्योरिटी)"],
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
      call: "कॉल / WhatsApp: +91 9425393438",
    },
    faq: {
      title: "प्रश्न सारांश",
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
    smartSipCombo: {
      title: "SMART SIP 360 = निवेश + बीमा एक स्मार्ट प्लान में",
      text: "ULIPs जीवन बीमा को मार्केट-लिंक्ड निवेश के साथ जोड़ते हैं। प्रीमियम कवरेज और फंड (इक्विटी, डेट, या हाइब्रिड) में जोखिम के आधार पर बंट जाता है। ये लचीले, दीर्घकालिक संपत्ति निर्माण और 100% टैक्स-फ्री मैच्योरिटी प्रदान करते हैं।",
    },
    ulipBlocks: {
      howWorks: {
        title: "ULIP प्लान कैसे काम करता है?",
        points: [
          "नियमित प्रीमियम भरें (मासिक/तिमाही/वार्षिक); एक हिस्सा जीवन बीमा में, बाकी चुने हुए फंड में निवेश।",
          "निवेश निश्चित फेस वैल्यू पर यूनिट्स में बंटता है; यूनिट वैल्यू NAV है।",
          "बाज़ार प्रदर्शन के साथ बढ़ता है; शर्तों के अनुसार फंड स्विच करें।",
          "मैच्योरिटी पर फंड वैल्यू प्राप्त करें।",
          "मृत्यु पर, परिवार को सम एश्योर्ड + कुल फंड वैल्यू का अधिक मिलता है।",
        ],
      },
      keyFeatures: {
        title: "ULIPs की मुख्य विशेषताएं",
        items: [
          { title: "बीमा + निवेश एक प्लान में", desc: "ULIPs दोहरे लाभ प्रदान करते हैं।" },
          { title: "फंड के बीच स्विच करें", desc: "इक्विटी/डेट फंड के बीच स्विच; 12 स्विच की अनुमति।" },
          { title: "प्रीमियम रीडायरेक्शन", desc: "भविष्य के प्रीमियम को आवंटन प्रतिशत द्वारा रीडायरेक्ट करें।" },
          { title: "आंशिक निकासी", desc: "5-वर्ष लॉक-इन; उसके बाद असीमित आंशिक निकासी।" },
        ],
      },
      myths: {
        title: "ULIPs के बारे में सामान्य मिथक",
        items: [
          { myth: "ULIPs कम रिटर्न देते हैं", reality: "आधुनिक ULIPs प्रतिस्पर्धी रिटर्न देते हैं।" },
          { myth: "ULIPs महंगे हैं", reality: "IRDAI नियमों ने शुल्क कम किए।" },
          { myth: "ULIPs उच्च जोखिम हैं", reality: "जोखिम चुने गए फंड पर निर्भर करता है।" },
          { myth: "ULIPs जटिल हैं", reality: "फंड आवंटन समझने पर आसान।" },
          { myth: "बाज़ार उतार-चढ़ाव लाइफ कवर को प्रभावित करता है", reality: "लाइफ कवर स्थिर रहता है।" },
        ],
      },
      whoCanOpt: {
        title: "इस प्लान के लिए कौन आवेदन कर सकता है?",
        items: [
          "दीर्घकालिक संपत्ति निर्माता",
          "सुरक्षा + विकास चाहने वाले निवेशक",
          "टैक्स-सजग व्यक्ति",
          "कम से उच्च जोखिम प्रोफाइल",
        ],
      },
    },
  },
};

const whatIsIcons = [TrendingUp, Shield, Target, HandCoins];
const powerfulIcons = [Shield, Landmark, HandCoins, Heart, Users];
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
              <h1 className="text-xl md:text-3xl font-bold leading-tight">
                {t.hero.h1}
                <span className="block text-base md:text-xl font-semibold text-[hsl(220,80%,80%)] mt-2">{t.hero.h1sub}</span>
              </h1>
              <h2 className="text-sm md:text-base font-medium text-[hsl(220,80%,80%)]">{t.hero.h2}</h2>
              <div className="space-y-1 text-white/90 text-sm">
                {t.hero.desc.map((d, i) => <p key={i}>{d}</p>)}
              </div>
              <ul className="space-y-2">
                {t.hero.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(142,55%,45%)] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 text-sm px-6"
                  onClick={() => document.querySelector("#sip-cta")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t.hero.cta1} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-accent text-accent bg-accent/10 hover:bg-accent hover:text-white text-sm px-6"
                  onClick={() => document.querySelector("#illustration")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t.hero.cta2}
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center aspect-[4/3] text-white/60 text-center p-8">
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
            <div className="bg-muted rounded-2xl flex items-center justify-center aspect-[4/3] text-muted-foreground text-center p-8 border border-border">
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
              <Card key={i} className="hover:shadow-xl transition-shadow border-border">
                <CardHeader className="text-center pt-8">
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
              <form id="sip-consultation-form" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.name}</Label>
                  <Input name="name" className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" placeholder={t.cta.fields.name} />
                </div>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.mobile}</Label>
                  <Input name="mobile" className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" placeholder={t.cta.fields.mobile} />
                </div>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.email}</Label>
                  <Input name="email" type="email" className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" placeholder={t.cta.fields.email} />
                </div>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.budget}</Label>
                  <Input name="budget" className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" placeholder="₹" />
                </div>
                <div>
                  <Label className="text-white/90 text-sm">{t.cta.fields.goal}</Label>
                  <Select name="goal">
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

      {/* ── FAQ / Question Summary ── */}
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

      {/* ── NEW SECTION: SMART SIP 360 = Investment + Insurance ── */}
      <section className="section-padding bg-gradient-to-br from-[hsl(220,60%,15%)] to-[hsl(220,55%,25%)] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Zap className="h-12 w-12 mx-auto mb-6 text-accent" />
          <h2 className="text-xl md:text-3xl font-bold mb-6">{t.smartSipCombo.title}</h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            {t.smartSipCombo.text}
          </p>
        </div>
      </section>

      {/* ── NEW SECTION: ULIP Explanation Blocks ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Block 1: How Does ULIP Work */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 mb-2 rounded-lg bg-[hsl(220,60%,95%)] flex items-center justify-center">
                  <Layers className="h-5 w-5 text-[hsl(220,60%,35%)]" />
                </div>
                <CardTitle className="text-lg">{t.ulipBlocks.howWorks.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.ulipBlocks.howWorks.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Block 2: Key Features */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 mb-2 rounded-lg bg-[hsl(220,60%,95%)] flex items-center justify-center">
                  <Star className="h-5 w-5 text-[hsl(220,60%,35%)]" />
                </div>
                <CardTitle className="text-lg">{t.ulipBlocks.keyFeatures.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {t.ulipBlocks.keyFeatures.items.map((f, i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold text-foreground">{f.title}</p>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Block 3: Common Myths */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 mb-2 rounded-lg bg-[hsl(220,60%,95%)] flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-[hsl(220,60%,35%)]" />
                </div>
                <CardTitle className="text-lg">{t.ulipBlocks.myths.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {t.ulipBlocks.myths.items.map((m, i) => (
                  <div key={i} className="border-l-2 border-accent pl-3">
                    <p className="text-sm font-semibold text-destructive">Myth: {m.myth}</p>
                    <p className="text-sm text-muted-foreground">Reality: {m.reality}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Block 4: Who Can Opt */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 mb-2 rounded-lg bg-[hsl(220,60%,95%)] flex items-center justify-center">
                  <UserCheck className="h-5 w-5 text-[hsl(220,60%,35%)]" />
                </div>
                <CardTitle className="text-lg">{t.ulipBlocks.whoCanOpt.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.ulipBlocks.whoCanOpt.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SmartSip360Page;
