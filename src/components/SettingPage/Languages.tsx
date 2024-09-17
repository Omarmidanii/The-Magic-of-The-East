import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import '../../i18n';
import useLanguage from "../../stores/LanguageStore";
export const Languages = () => {
    const { i18n } = useTranslation();
    const setLng = useLanguage((s) => s.setLng);
    const changeLanguage = (lng : string) => {
        i18n.changeLanguage(lng);
        document.dir = lng === 'ar' ? 'rtl' : 'ltr';
        setLng(lng);
      };
  return (
    <>
  <Button onClick={() => changeLanguage('ar')}>عربي </Button>
  <Button onClick={() => changeLanguage('en')}>English</Button>
  </>
  )
}
