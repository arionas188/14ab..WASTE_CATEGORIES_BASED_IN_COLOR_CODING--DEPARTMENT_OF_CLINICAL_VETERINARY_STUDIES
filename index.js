(function () {
    // Όταν φορτώνει η σελίδα, ελέγχει το localStorage για τη γλώσσα
    document.addEventListener("DOMContentLoaded", function () {
        let savedLang = localStorage.getItem("language") || "gr"; // Default Ελληνικά
        changeLanguage(savedLang);
        setupBackToTopButton();
    });

    // Event listeners για τα κουμπιά αλλαγής γλώσσας
    document.getElementById("greek-btn").addEventListener("click", function () {
        changeLanguage("gr");
    });

    document.getElementById("english-btn").addEventListener("click", function () {
        changeLanguage("en");
    });

    function changeLanguage(lang) {
        let content = {
            "gr": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "📌 ΤΟΜΕΑΣ ΚΛΙΝΙΚΩΝ ΚΤΗΝΙΑΤΡΙΚΩΝ ΣΠΟΥΔΩΝ ",
                "rules_title1": "📌 ΚΑΤΗΓΟΡΙΕΣ ΚΑΙ ΔΙΑΧΕΙΡΙΣΗ ΑΠΟΒΛΗΤΩΝ",
                "rules": [

                    "🟠 - ΚΑΤΗΓΟΡΙΕΣ: Αποβλήτων Απόβλητα αστικού χαρακτήρα. - ΕΙΔΟΣ ΥΛΙΚΩΝ: Υπολείμματα τροφών, γυαλί, χαρτί, πλαστικό, μέταλλα.Απόβλητα από τον καθαρισμό κοινόχρηστων χώρων.Απόβλητα που έχουν αποστειρωθεί. - ΔΙΑΧΕΙΡΙΣΗ: Μαύρου χρώματος συσκευασίες – Υλικά που δεν απαιτούν ειδική επεξεργασία.",
                    "🟠 - ΚΑΤΗΓΟΡΙΕΣ: Μολυσματικά απόβλητα. - ΕΙΔΟΣ ΥΛΙΚΩΝ:Υλικά που έχουν έρθει σε επαφή με σωματικά υγρά (π.χ. επίδεσμοι, γάντια, επιχρίσματα).Βιολογικά υλικά (κόπρανα, ούρα, αίμα, σάλιο). - ΔΙΑΧΕΙΡΙΣΗ: Κίτρινου χρώματος συσκευασίες – Υλικά προς αποτέφρωση.",
                    "🟠 - ΚΑΤΗΓΟΡΙΕΣ: Παθολογικά και ανατομικά απόβλητα. - ΕΙΔΟΣ ΥΛΙΚΩΝ: Ιστοί, μέλη σώματος ή υγρά (π.χ. αίμα), έμβρυα.Θεωρούνται πάντα δυνητικά μολυσματικά απόβλητα. - ΔΙΑΧΕΙΡΙΣΗ: Κίτρινου χρώματος συσκευασίες – Υλικά προς αποτέφρωση.",
                    "🟠 - ΚΑΤΗΓΟΡΙΕΣ: Αιχμηρά αντικείμενα. - ΕΙΔΟΣ ΥΛΙΚΩΝ: Υλικά που μπορούν να τρυπήσουν ή να κόψουν (π.χ. βελόνες, νυστέρια). Θεωρούνται άκρως επικίνδυνα και δυνητικά μολυσματικά. - ΔΙΑΧΕΙΡΙΣΗ: Άκαμπτες, ανθεκτικές, μιας χρήσης συσκευασίες (συνήθως κίτρινα κουτιά).",
                    "🟠 - ΚΑΤΗΓΟΡΙΕΣ: Απόβλητα υψηλού μολυσματικού κινδύνου. - ΕΙΔΟΣ ΥΛΙΚΩΝ: Καλλιέργειες μικροοργανισμών. Βιολογικά υλικά από ασθενείς με ιδιαίτερα μολυσματικούς παράγοντες. - ΔΙΑΧΕΙΡΙΣΗ: Κόκκινου χρώματος συσκευασίες – Υλικά προς αποστείρωση."

                ],
                "cautionTitle": " ",
                "cautionParagraph": " "

            },
            "en": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "📌 FACULTY OF VETERINARY MEDICINΕ",
                "rules_title1": "📌 CATEGORIES AND WASTE MANAGEMENT",
                "rules": [
                    "🟠 - WASTE CATEGORIES: Municipal-type Waste. - TYPE OF MATERIALS: Food residues, glass, paper, plastic, metals. Waste from cleaning public areasWaste that has undergone sterilization. - MANAGEMENT: Black-colored containers – Materials that do not require special processing.",
                    "🟠 - WASTE CATEGORIES: Infectious Waste. - TYPE OF MATERIALS:Disposal materials that have come into contact with body fluids (e.g., bandages, gloves, swabs).Biological materials (feces, urine, blood, saliva). - MANAGEMENT: Yellow-colored containers – Materials for incineration.",
                    "🟠 - WASTE CATEGORIES: Pathological and Anatomical Waste. - TYPE OF MATERIALS: Tissues, body parts, or fluids (e.g., blood), embryos. Always considered potentially infectious waste. - MANAGEMENT: Yellow-colored containers – Materials for incineration.",
                    "🟠 - WASTE CATEGORIES: Sharps. - TYPE OF MATERIALS: Materials that can puncture, cut, or injure. Considered highly dangerous and potentially infectious waste. - MANAGEMENT: Rigid, single-use, puncture-resistant containers (usually yellow boxes).",
                    "🟠 - WASTE CATEGORIES: High-Risk Infectious Waste. - TYPE OF MATERIALS: Microorganism cultures.Biological materials from patients infected with particularly infectious agents. - MANAGEMENT: Red-colored containers – Materials for sterilization."
                ],
                "cautionTitle": " ",
                "cautionParagraph": "  "
            }
        };

       // Αποθηκεύουμε τη γλώσσα στο localStorage
       localStorage.setItem("language", lang);

        // Επιλογή στοιχείων που θα αλλάξουν
        let title = document.querySelector("h1");
        let section = document.querySelector("h5");
        let rulesTitle1 = document.querySelectorAll(".rules h2")[0];
        let rulesList1 = document.querySelectorAll(".rules ul")[0].querySelectorAll("li");
        let cautionTitle = document.querySelector(".rules h4");
        let cautionParagraph = document.querySelector(".rules p");

    // Προσθήκη fade-out effect πριν την αλλαγή
    document.body.classList.add("fade-out");

    setTimeout(() => {

        // Επιλογή στοιχείων
        let title = document.querySelector("h1");
        let section = document.querySelector("h5");
        let rulesTitle1 = document.querySelectorAll(".rules h2")[0];
        let rulesList1 = document.querySelectorAll(".rules ul")[0].querySelectorAll("li");
        let cautionTitle = document.querySelector(".rules h4");
        let cautionParagraph = document.querySelector(".rules p");

        // Ενημέρωση περιεχομένου
        document.title = content[lang].title;
        title.textContent = content[lang].title;
        section.textContent = content[lang].section;
        rulesTitle1.textContent = content[lang].rules_title1;
        cautionTitle.textContent = content[lang].cautionTitle;
        cautionParagraph.textContent = content[lang].cautionParagraph;

        // Ενημέρωση λίστας κανόνων
        content[lang].rules.forEach((text, index) => {
            if (rulesList1[index]) {
                rulesList1[index].innerHTML = text;
            }
        });

        // Προσθήκη fade-in effect μετά την αλλαγή
        document.body.classList.remove("fade-out");
    }, 500); // Μικρή καθυστέρηση για ομαλή εναλλαγή
    }
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Εμφανίζεται μετά από 50px scroll
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Λειτουργία επιστροφής στην κορυφή
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();