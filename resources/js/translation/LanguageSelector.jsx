import './LangageSelector.less';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageENUM } from './i18n';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeLanguage = (event) => {
    const language = event.target.value;
    switch (language) {
      case LanguageENUM.EN:
        setCurrentLang(LanguageENUM.EN);
        i18n.changeLanguage(LanguageENUM.EN);
        break;
      case LanguageENUM.FR:
      default:
        setCurrentLang(LanguageENUM.FR);
        i18n.changeLanguage(LanguageENUM.FR);
        break;
    }
  };

  return (
    <FormControl className="langSelector">
      <InputLabel>{t('common.lang')}</InputLabel>
      <Select value={currentLang} onChange={changeLanguage}>
        <MenuItem value={LanguageENUM.FR}>Français</MenuItem>
        <MenuItem value={LanguageENUM.EN}>English</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
