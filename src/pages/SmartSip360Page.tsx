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
  Briefcase,
  Baby,
  PiggyBank,
  RefreshCw,
  Layers,
  Lock,
  AlertTriangle,
  UserCheck,
  Zap,
  LineChart,
  ShieldCheck,
  HeartHandshake,
  BarChart3,
  Gem,
  ClipboardCheck,
  Headphones,
  Search,
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
    intro: {
      text: "You invest monthly like a SIP, and your premium is invested in market-linked funds while your family gets life cover protection.",
      heading: "It is designed for",
      bullets: [
        "Salaried professionals and business owners",
        "Parents planning for their child's education",
        "Individuals planning for retirement",
        "Anyone seeking tax-free wealth creation, wealth accumulation, and family income security",
      ],
    },
    powerful: {
      title: "Why SMART SIP 360 is Powerful?",
      cards: [
        { title: "Life Cover up to 360X", desc: "Example: ₹20,000 monthly SIP = ₹72 Lakhs life cover to protect your loved ones." },
        { title: "100% Tax-Free Structure", desc: "Zero LTCG (as per applicable policy structure & limits)\nTax-free maturity (subject to prevailing tax laws)." },
        { title: "Smart Partial Withdrawals", desc: "After lock-in, you can generate systematic income." },
        { title: "Waiver of Premium Benefit", desc: "In selected options, future premiums are paid by the company in case of unfortunate events." },
        { title: "Women Empowerment Benefits", desc: "Additional allocation benefits for female policyholders (as applicable)." },
      ],
    },
    plans: {
      title: "Choose Your Plan Option",
      items: [
        { name: "Wealth Secure", bullets: ["Focus on wealth creation", "Death benefit + policy ends", "100% Maturity Corpus"] },
        { name: "Future Secure", bullets: ["Focus on wealth creation + receive life insurance", "Death benefit – Policy continues", "Maturity Benefit equal to FV paid to the nominee", "100% Maturity Corpus + 360X life insurance cover"] },
        { name: "Family Secure", bullets: ["Death benefit", "Future premiums waived", "Policy continues"] },
      ],
    },
    illustration: {
      title: "Investment Illustration",
      disclaimer: "Disclaimer: Returns are market-linked and not guaranteed. Investment risk is borne by the policyholder.",
    },
    whoShould: {
      title: "Who Should Invest?",
      subtitle: "SMART SIP 360 is ideal for:",
      items: [
        "Salaried professionals",
        "Business owners",
        "Parents planning child education",
        "Individuals planning retirement",
        "Those wanting tax-free wealth creation with protection",
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
        { title: "Personalized Goal Planning", desc: "Custom plans aligned to your unique financial goals." },
        { title: "Custom Return Illustration", desc: "See projected returns tailored to your investment." },
        { title: "Claim Assistance", desc: "End-to-end support for hassle-free claims." },
        { title: "Long-Term Portfolio Monitoring", desc: "Ongoing reviews and rebalancing for optimal growth." },
        { title: "Dedicated Support", desc: "A dedicated advisor for all your queries." },
      ],
    },
    readyCta: {
      title: "Ready to Secure Your Future?",
      text: "Let us calculate your personalized SMART SIP 360 plan.",
    },
    cta: {
      title: "Get Your Custom Plan Now",
      subtitle: "Fill in your details and our advisor will reach out within 24 hours.",
      fields: { name: "Name", mobile: "Mobile Number", email: "Email", budget: "Monthly Investment Budget", goal: "Your Goal" },
      goals: ["Child's Education", "Retirement Planning", "Wealth Creation"],
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
    readyPlan: {
      title: "Ready to Plan Your Financial Future?",
      text: "Book a Free Consultation Today",
      call: "📞 Call/WhatsApp: 9425393438",
    },
    disclaimer: {
      title: "Important Disclaimer",
      text: "SMART SIP 360 is a Unit Linked Insurance Plan offered by Tata AIA Life Insurance. Investment in market-linked funds is subject to market risks. Past performance does not guarantee future returns. Tax benefits are subject to prevailing tax laws. Please read sales brochure carefully before investing.",
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
    intro: {
      text: "आप SIP की तरह मासिक निवेश करते हैं, और आपका प्रीमियम मार्केट-लिंक्ड फंड में निवेश किया जाता है जबकि आपके परिवार को लाइफ कवर प्रोटेक्शन मिलता है।",
      heading: "यह इनके लिए डिज़ाइन किया गया है",
      bullets: [
        "वेतनभोगी पेशेवर और व्यवसाय मालिक",
        "बच्चों की शिक्षा की योजना बनाने वाले माता-पिता",
        "रिटायरमेंट की योजना बनाने वाले व्यक्ति",
        "टैक्स-फ्री संपत्ति निर्माण, संपत्ति संचय, और पारिवारिक आय सुरक्षा चाहने वाले",
      ],
    },
    powerful: {
      title: "SMART SIP 360 शक्तिशाली क्यों है?",
      cards: [
        { title: "360X तक लाइफ कवर", desc: "उदाहरण: ₹20,000 मासिक SIP = ₹72 लाख लाइफ कवर।" },
        { title: "100% टैक्स-फ्री संरचना", desc: "शून्य LTCG (लागू पॉलिसी संरचना और सीमाओं के अनुसार)\nटैक्स-फ्री मैच्योरिटी (प्रचलित कर कानूनों के अधीन)।" },
        { title: "स्मार्ट आंशिक निकासी", desc: "लॉक-इन के बाद, आप व्यवस्थित आय उत्पन्न कर सकते हैं।" },
        { title: "प्रीमियम छूट लाभ", desc: "चयनित विकल्पों में, दुर्भाग्यपूर्ण घटनाओं में भविष्य के प्रीमियम कंपनी द्वारा भुगतान किए जाते हैं।" },
        { title: "महिला सशक्तिकरण लाभ", desc: "महिला पॉलिसीधारकों के लिए अतिरिक्त आवंटन लाभ (लागू होने पर)।" },
      ],
    },
    plans: {
      title: "अपना प्लान विकल्प चुनें",
      items: [
        { name: "वेल्थ सिक्योर", bullets: ["संपत्ति निर्माण पर ध्यान", "मृत्यु लाभ + पॉलिसी समाप्त", "100% मैच्योरिटी कॉर्पस"] },
        { name: "फ्यूचर सिक्योर", bullets: ["संपत्ति निर्माण + जीवन बीमा प्राप्त करें", "मृत्यु लाभ – पॉलिसी जारी", "मैच्योरिटी बेनिफिट FV के बराबर नॉमिनी को", "100% मैच्योरिटी कॉर्पस + 360X लाइफ इंश्योरेंस कवर"] },
        { name: "फैमिली सिक्योर", bullets: ["मृत्यु लाभ", "भविष्य के प्रीमियम माफ", "पॉलिसी जारी"] },
      ],
    },
    illustration: {
      title: "निवेश चित्रण",
      disclaimer: "अस्वीकरण: रिटर्न मार्केट-लिंक्ड हैं और गारंटीड नहीं हैं। निवेश जोखिम पॉलिसीधारक द्वारा वहन किया जाता है।",
    },
    whoShould: {
      title: "किसे निवेश करना चाहिए?",
      subtitle: "SMART SIP 360 इनके लिए आदर्श है:",
      items: [
        "वेतनभोगी पेशेवर",
        "व्यवसाय मालिक",
        "बच्चों की शिक्षा की योजना बनाने वाले माता-पिता",
        "रिटायरमेंट की योजना बनाने वाले व्यक्ति",
        "सुरक्षा के साथ टैक्स-फ्री संपत्ति निर्माण चाहने वाले",
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
        { title: "व्यक्तिगत लक्ष्य योजना", desc: "आपके अनूठे वित्तीय लक्ष्यों के अनुरूप कस्टम प्लान।" },
        { title: "कस्टम रिटर्न इलस्ट्रेशन", desc: "आपके निवेश के अनुरूप अनुमानित रिटर्न देखें।" },
        { title: "क्लेम सहायता", desc: "परेशानी मुक्त क्लेम के लिए संपूर्ण सहायता।" },
        { title: "दीर्घकालिक पोर्टफोलियो मॉनिटरिंग", desc: "इष्टतम विकास के लिए निरंतर समीक्षा।" },
        { title: "समर्पित सहायता", desc: "आपके सभी प्रश्नों के लिए एक समर्पित सलाहकार।" },
      ],
    },
    readyCta: {
      title: "अपना भविष्य सुरक्षित करने के लिए तैयार?",
      text: "हमें आपका व्यक्तिगत SMART SIP 360 प्लान कैलकुलेट करने दें।",
    },
    cta: {
      title: "अपना कस्टम प्लान अभी पाएं",
      subtitle: "अपना विवरण भरें और हमारे सलाहकार 24 घंटे में आपसे संपर्क करेंगे।",
      fields: { name: "नाम", mobile: "मोबाइल नंबर", email: "ईमेल", budget: "मासिक निवेश बजट", goal: "आपका लक्ष्य" },
      goals: ["बच्चे की शिक्षा", "रिटायरमेंट प्लानिंग", "संपत्ति निर्माण"],
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
    readyPlan: {
      title: "अपने वित्तीय भविष्य की योजना बनाने के लिए तैयार?",
      text: "आज ही एक मुफ्त परामर्श बुक करें",
      call: "📞 कॉल/WhatsApp: 9425393438",
    },
    disclaimer: {
      title: "महत्वपूर्ण अस्वीकरण",
      text: "SMART SIP 360 Tata AIA Life Insurance द्वारा पेश किया गया एक यूनिट लिंक्ड इंश्योरेंस प्लान है। मार्केट-लिंक्ड फंड में निवेश बाज़ार जोखिमों के अधीन है। पिछला प्रदर्शन भविष्य के रिटर्न की गारंटी नहीं देता। कर लाभ प्रचलित कर कानूनों के अधीन हैं। कृपया निवेश करने से पहले बिक्री ब्रोशर ध्यान से पढ़ें।",
    },
  },
};

const whatIsIcons = [TrendingUp, Shield, Target, HandCoins];
const powerfulIcons = [Shield, Landmark, HandCoins, Heart, Users];
const whyUsIcons = [Target, BarChart3, ClipboardCheck, Search, Headphones];
const planIcons = [Gem, LineChart, HeartHandshake];

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

      {/* ── NEW: Intro content after What Is ── */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <p className="text-muted-foreground leading-relaxed text-center mb-8 text-base">
            {t.intro.text}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">{t.intro.heading}</h3>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {t.intro.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
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
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{card.desc}</p>
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
            {t.plans.items.map((plan, i) => {
              const Icon = planIcons[i];
              return (
                <Card key={i} className="hover:shadow-xl transition-shadow border-border">
                  <CardHeader className="text-center pt-8">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[hsl(220,60%,95%)] flex items-center justify-center">
                      <Icon className="h-7 w-7 text-[hsl(220,60%,35%)]" />
                    </div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">{t.whoShould.title}</h2>
          <p className="text-center text-muted-foreground mb-8">{t.whoShould.subtitle}</p>
          <div className="max-w-2xl mx-auto space-y-3">
            {t.whoShould.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
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

      {/* ── Ready to Secure CTA ── */}
      <section className="section-padding bg-gradient-to-r from-[hsl(220,60%,20%)] to-[hsl(220,55%,30%)] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.readyCta.title}</h2>
          <p className="text-white/80 text-base mb-6">{t.readyCta.text}</p>
          <Button
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg text-base px-8 py-6"
            onClick={() => document.querySelector("#sip-cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            {lang === "en" ? "Get Started Now" : "अभी शुरू करें"} <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
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

      {/* ── SMART SIP 360 = Investment + Insurance ── */}
      <section className="section-padding bg-gradient-to-br from-[hsl(220,60%,15%)] to-[hsl(220,55%,25%)] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Zap className="h-12 w-12 mx-auto mb-6 text-accent" />
          <h2 className="text-xl md:text-3xl font-bold mb-6">{t.smartSipCombo.title}</h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            {t.smartSipCombo.text}
          </p>
        </div>
      </section>

      {/* ── ULIP Explanation Blocks ── */}
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
                    <p className="text-sm font-semibold text-destructive">Myth {i + 1}: {m.myth}</p>
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

      {/* ── Ready to Plan Your Financial Future ── */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.readyPlan.title}</h2>
          <p className="text-lg font-semibold mb-4">{t.readyPlan.text}</p>
          <p className="text-base text-primary-foreground/80">{t.readyPlan.call}</p>
        </div>
      </section>

      {/* ── Footer with Disclaimer ── */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Reuse standard footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {["About Us", "Disclaimer", "Privacy Policy", "Terms of Use", "Contact Us", "Site Map"].map((label) => (
                  <li key={label}>
                    <span className="text-sm text-primary-foreground/80">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
              <div className="space-y-3 text-sm text-primary-foreground/80">
                <p>📞 +91 9425393438 / +91 9406960918</p>
                <p>📍 96, Good Shepherd Colony, Banjari, Kolar Road, Bhopal (M.P.) 462042</p>
                <p>✉️ jainjsm@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="border-t border-primary-foreground/20 mt-10 pt-6">
            <h3 className="text-base font-semibold mb-3">{t.disclaimer.title}</h3>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              {t.disclaimer.text}
            </p>
          </div>

          <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} JSM Wealth Health & Insurance. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default SmartSip360Page;
