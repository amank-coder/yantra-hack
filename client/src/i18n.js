import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
          dashboard: "Dashboard",
          aboutCourse: "About course",
          testYourself: "Test Yourself",
          aiTutor: "AI tutor",
          coursePlanner: "Course planner",
          welcomeBack: "Welcome back!",
          whatToLearn: "What do you like to learn today?",
          name: "Name",
          email: "Email",
          qualification: "Qualification",
          preferredLanguage: "Preferred language",
          knowAboutTheCourse: "Know about the course",
          saveModelToFile: "Save model to file",
          promptEngineering: "Prompt Engineering",
          description: "Description",
          createdBy: "Created by",
          techStack: "Tech stack",
          topicsCovered: "Topics covered",
          projectIncluded: "Project included",
          reviewAnalysis: "Review Analysis",
          send: "Send",
          typeYourQuery: "Type your query",
          reviews: "Reviews",
          answer: "Answer",
          submit: "Submit",
          anyDoubts: "Any Doubts"
        }
      },
      hi: {
        translation: {
          dashboard: "डैशबोर्ड",
          aboutCourse: "कोर्स के बारे में",
          testYourself: "अपना परीक्षण करें",
          aiTutor: "एआई ट्यूटर",
          coursePlanner: "कोर्स प्लानर",
          welcomeBack: "वापसी पर स्वागत है !",
          whatToLearn: "आज आप क्या सीखना चाहेंगे?",
          name: "नाम",
          email: "ईमेल",
          qualification: "योग्यता",
          preferredLanguage: "पसंदीदा भाषा",
          knowAboutTheCourse: "कोर्स के बारे में जानें",
          saveModelToFile: "मॉडल को फ़ाइल में सहेजें",
          promptEngineering: "प्रम्प्ट इंजीनियरिंग",
          description: "विवरण",
          createdBy: "ने बनाया",
          techStack: "टेक स्टैक",
          topicsCovered: "शामिल विषय",
          projectIncluded: "परियोजना शामिल",
          reviewAnalysis: "समीक्षा विश्लेषण",
          send: "भेजें",
          typeYourQuery: "अपना प्रश्न टाइप करें",
          reviews: "समीक्षाएँ",
          answer: "उत्तर",
          submit: "प्रस्तुत",
          anyDoubts: "कोई संदेह"
        }
      },
      de: {
        translation: {
          dashboard: "Dashboard",
          aboutCourse: "Über den Kurs",
          testYourself: "Teste dich",
          aiTutor: "KI-Tutor",
          coursePlanner: "Kursplaner",
          welcomeBack: "Willkommen zurück !",
          whatToLearn: "Was möchtest du heute lernen?",
          name: "Name",
          email: "E-Mail",
          qualification: "Qualifikation",
          preferredLanguage: "Bevorzugte Sprache",
          knowAboutTheCourse: "Über den Kurs erfahren",
          saveModelToFile: "Modell in Datei speichern",
          promptEngineering: "Prompt Engineering",
          description: "Beschreibung",
          createdBy: "Erstellt von",
          techStack: "Technologie-Stack",
          topicsCovered: "Abgedeckte Themen",
          projectIncluded: "Projekt enthalten",
          reviewAnalysis: "Review Analyse",
          send: "Senden",
          typeYourQuery: "Geben Sie Ihre Anfrage ein",
          reviews: "Bewertungen"
        }
      },
      fr: {
        translation: {
          dashboard: "Tableau de bord",
          aboutCourse: "À propos du cours",
          testYourself: "Testez-vous",
          aiTutor: "Tuteur en IA",
          coursePlanner: "Planificateur de cours",
          welcomeBack: "Bienvenue de retour !",
          whatToLearn: "Qu'aimeriez-vous apprendre aujourd'hui?",
          name: "Nom",
          email: "Email",
          qualification: "Qualification",
          preferredLanguage: "Langue préférée",
          knowAboutTheCourse: "En savoir plus sur le cours",
          saveModelToFile: "Enregistrer le modèle dans un fichier",
          promptEngineering: "Prompt Engineering",
          description: "Description",
          createdBy: "Créé par",
          techStack: "Empile technologique",
          topicsCovered: "Sujets couverts",
          projectIncluded: "Projet inclus",
          reviewAnalysis: "Analyse des avis",
          send: "Envoyer",
          typeYourQuery: "Tapez votre requête",
          reviews: "Avis"
        }
      },
      mr: {
        translation: {
          dashboard: "डॅशबोर्ड",
          aboutCourse: "कोर्स बद्दल",
          testYourself: "स्वयंचेक करा",
          aiTutor: "ए.आय शिक्षक",
          coursePlanner: "कोर्स नियोजक",
          welcomeBack: "परत या!",
          whatToLearn: "आज तुम्हाला काय शिकायचं आहे?",
          name: "नाव",
          email: "ईमेल",
          qualification: "पात्रता",
          preferredLanguage: "पसंतीची भाषा",
          knowAboutTheCourse: "कोर्स बद्दल माहिती",
          saveModelToFile: "मॉडेल फाईलमध्ये सेव्ह करा",
          promptEngineering: "प्रम्प्ट इंजिनिअरिंग",
          description: "वर्णन",
          createdBy: "निर्मिती",
          techStack: "टेक स्टॅक",
          topicsCovered: "विषय शामिल",
          projectIncluded: "प्रकल्प समाविष्ट",
          reviewAnalysis: "समीक्षा विश्लेषण",
          send: "पाठवा",
          typeYourQuery: "तुमचा क्वेरी टाईप करा",
          reviews: "समीक्षा",
          answer: "उत्तर",
          submit: "सबमिट करा",
          anyDoubts: "कोणत्याही संदेह"
        }
      },
      ta: {
        translation: {
          dashboard: "டாஷ்போர்டு",
          aboutCourse: "படிவம் பற்றி",
          testYourself: "உங்களை சோதியுங்கள்",
          aiTutor: "ஐயியர் டியூட்டர்",
          coursePlanner: "பாடத்திட்ட திட்டம்",
          welcomeBack: "மீண்டும் வருக!",
          whatToLearn: "நீங்கள் இன்று என்ன கற்க விரும்புகிறீர்கள்?",
          name: "பெயர்",
          email: "மின்னஞ்சல்",
          qualification: "தகுதி",
          preferredLanguage: "விருப்பமான மொழி",
          knowAboutTheCourse: "பாடநெறிக்கு அறியவும்",
          saveModelToFile: "மாதிரியை கோப்புக்கு சேமிக்கவும்",
          promptEngineering: "உத்திக்கு பெற்ற பொறுப்பு",
          description: "விளக்கம்",
          createdBy: "உருவாக்கியவர்",
          techStack: "தொழில்நுட்ப அஞ்சலம்",
          topicsCovered: "சராசரி உருப்படிகள்",
          projectIncluded: "திட்டம் உள்ளது",
          reviewAnalysis: "மதிப்பீடு பகுப்பாய்வு",
          send: "அனுப்பு",
          typeYourQuery: "உங்கள் கேள்வியை தட்டச்சு செய்யவும்",
          reviews: "பதிவுகள்"
        }
      },
      gu: {
        translation: {
          dashboard: "ડેશબોર્ડ",
          aboutCourse: "કોર્સ વિશે",
          testYourself: "તમારા ટેસ્ટ કરો",
          aiTutor: "એઆઈ શિક્ષક",
          coursePlanner: "કોર્સ યોજક",
          welcomeBack: "પુન: આવ્યો છો!",
          whatToLearn: "આજે તમે શું શીખવા માંગો છો?",
          name: "નામ",
          email: "ઇમેઇલ",
          qualification: "યોગ્યતા",
          preferredLanguage: "પસંદીની ભાષા",
          knowAboutTheCourse: "કોર્સ વિશે જાણો",
          saveModelToFile: "મોડેલને ફાઈલમાં સેવ કરો",
          promptEngineering: "પ્રોમ્પ્ટ ઇન્જિનિયરિંગ",
          description: "વર્ણન",
          createdBy: "દ્વારા બનાવવામાં આવ્યું",
          techStack: "ટેક સ્ટેક",
          topicsCovered: "વિષયો આવરેલા",
          projectIncluded: "પ્રોજેક્ટ સમાવીત",
          reviewAnalysis: "સમીક્ષા વિશ્લેષણ",
          send: "મોકલો",
          typeYourQuery: "તમારું પ્રશ્ન ટાઈપ કરો",
          reviews: "સમીક્ષાઓ"
        }
      },
      bn: {
        translation: {
          dashboard: "ড্যাশবোর্ড",
          aboutCourse: "কোর্স সম্পর্কে",
          testYourself: "নিজেকে পরীক্ষা করুন",
          aiTutor: "এআই টিউটর",
          coursePlanner: "কোর্স পরিকল্পনা",
          welcomeBack: "স্বাগতম পুনঃ!",
          whatToLearn: "আজ আপনি কী শিখতে চান?",
          name: "নাম",
          email: "ইমেল",
          qualification: "যোগ্যতা",
          preferredLanguage: "পছন্দের ভাষা",
          knowAboutTheCourse: "কোর্স সম্পর্কে জানুন",
          saveModelToFile: "মডেলটি ফাইলে সংরক্ষণ করুন",
          promptEngineering: "সুন্দর ইঞ্জিনিয়ারিং",
          description: "বিবরণ",
          createdBy: "তৈরি করেছে",
          techStack: "টেক স্ট্যাক",
          topicsCovered: "আলোচনা করা বিষয়",
          projectIncluded: "প্রকল্প অন্তর্ভুক্ত",
          reviewAnalysis: "পর্যালোচনা বিশ্লেষণ",
          send: "পাঠান",
          typeYourQuery: "আপনার প্রশ্ন টাইপ করুন",
          reviews: "পর্যালোচনা"
        }
      },
      ru: {
        translation: {
          dashboard: "Панель инструментов",
          aboutCourse: "О курсе",
          testYourself: "Протестируйтесь",
          aiTutor: "ИИ-наставник",
          coursePlanner: "Планировщик курса",
          welcomeBack: "С возвращением!",
          whatToLearn: "Что вы хотели бы узнать сегодня?",
          name: "Имя",
          email: "Электронная почта",
          qualification: "Квалификация",
          preferredLanguage: "Предпочитаемый язык",
          knowAboutTheCourse: "Узнайте о курсе",
          saveModelToFile: "Сохранить модель в файл",
          promptEngineering: "Инженерия подсказки",
          description: "Описание",
          createdBy: "Создано",
          techStack: "Технологический стек",
          topicsCovered: "Охваченные темы",
          projectIncluded: "Включенный проект",
          reviewAnalysis: "Анализ обзора",
          send: "Отправить",
          typeYourQuery: "Введите свой запрос",
          reviews: "Обзоры"
        }
      },
      ml: {
        translation: {
          dashboard: "ഡാഷ്ബോർഡ്",
          aboutCourse: "കോഴ്സ് കുറിച്ച്",
          testYourself: "നിങ്ങളുടെയും പരീക്ഷിക്കുക",
          aiTutor: "എ.ഐ ട്യൂട്ടർ",
          coursePlanner: "കോഴ്സ് പ്ലാനർ",
          welcomeBack: "തിരികെവന്നിരി!",
          whatToLearn: "ഇന്ന് നിങ്ങൾ എന്തെങ്കിലും പഠിക്കാനും ഇഷ്ടപ്പെടുന്നു?",
          name: "പേര്",
          email: "ഇമെയിൽ",
          qualification: "യോഗ്യത",
          preferredLanguage: "അഭിനന്ദനങ്ങൾക്കുള്ള ഭാഷ",
          knowAboutTheCourse: "കോഴ്സ് കുറിച്ച് അറിയുക",
          saveModelToFile: "മോഡൽ ഫയലിലേക്ക് സേവ് ചെയ്യുക",
          promptEngineering: "പ്രൊംപ്റ്റ് എൻജിനീയറിംഗ്",
          description: "വിവരണം",
          createdBy: "സൃഷ്ടിച്ചവൻ",
          techStack: "ടെക്നോളജി സ്റ്റാക്ക്",
          topicsCovered: "ചുവടെയുള്ള വിഷയങ്ങൾ",
          projectIncluded: "പ്രൊജക്റ്റ് ഉൾപ്പെടെ",
          reviewAnalysis: "അവലോകനം വിശകലനം",
          send: "അയക്കുക",
          typeYourQuery: "നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക",
          reviews: "അവലോകനങ്ങൾ"
        }
      },
      ur: {
        translation: {
          dashboard: "ڈیش بورڈ",
          aboutCourse: "کورس کے بارے میں",
          testYourself: "خود کو ٹیسٹ کریں",
          aiTutor: "ای آئی ٹیوٹر",
          coursePlanner: "کورس پلانر",
          welcomeBack: "خوش آمدید واپس!",
          whatToLearn: "آپ آج کیا سیکھنا چاہتے ہیں؟",
          name: "نام",
          email: "ای میل",
          qualification: "وضاحت",
          preferredLanguage: "ترجیحی زبان",
          knowAboutTheCourse: "کورس کے بارے میں جانیں",
          saveModelToFile: "ماڈل کو فائل میں محفوظ کریں",
          promptEngineering: "پرامپٹ انجینئرنگ",
          description: "تفصیل",
          createdBy: "نے بنایا",
          techStack: "ٹیکنالوجی کی ڈھیر",
          topicsCovered: "موضوعات شامل",
          projectIncluded: "منصوبہ شامل ہے",
          reviewAnalysis: "جائزہ تجزیہ",
          send: "بھیجیں",
          typeYourQuery: "اپنا سوال ٹائپ کریں",
          reviews: "جائزہ"
        }
      },
      te: {
        translation: {
          dashboard: "డాష్బోర్డు",
          aboutCourse: "కోర్సు గురించి",
          testYourself: "మీరు పరీక్షించండి",
          aiTutor: "ఐఎయ్ ట్యూటర్",
          coursePlanner: "కోర్సు ప్లానర్",
          welcomeBack: "మళ్ళీ స్వాగతం!",
          whatToLearn: "మీరు నేను ఈ రోజు ఎందుకు నేర్పిస్తారు?",
          name: "పేరు",
          email: "ఇమెయిల్",
          qualification: "రిక్తి",
          preferredLanguage: "ప్రియమైన భాష",
          knowAboutTheCourse: "కోర్సు గురించి తెలుసుకోండి",
          saveModelToFile: "మోడల్‌ను ఫైలులో భద్రపరచండి",
          promptEngineering: "స్ఫూర్తి ఇంజనీరింగ్",
          description: "వివరణ",
          createdBy: "చేసినవారు",
          techStack: "సాంకేతిక స్టాక్",
          topicsCovered: "చర్చిత విషయాలు",
          projectIncluded: "ప్రాజెక్టు లో చేర్చబడినది",
          reviewAnalysis: "సమీక్ష విశ్లేషణ",
          send: "పంపండి",
          typeYourQuery: "మీ ప్రశ్న టైపు చేయండి",
          reviews: "సమీక్షలు"
        }
      }
    }
  });

export default i18n;
