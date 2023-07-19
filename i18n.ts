import i18n, {InitOptions} from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "en_US",
    lng: "en_US",
    resources: {
        en_US: {
            default: require("./locales/en_US.json")
        },
        jp_JP: {
            default: require("./locales/jp_JP.json")
        },
        zh_CN: {
            default: require("./locales/zh_CN.json")
        }
    },
    ns: ["default"],
    defaultNS: "default"
} as InitOptions);

export default i18n;