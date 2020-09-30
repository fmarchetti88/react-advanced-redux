import React from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';
import i18n from './i18n/Localization';

class AppI18N extends React.Component<any, any> {
  private changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  public render() {
    const { t } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <span>
              <a href="/#" onClick={() => this.changeLanguage('it')}>
                ITA
              </a>
              &nbsp;|&nbsp;
              <a href="/#" onClick={() => this.changeLanguage('en')}>
                ING
              </a>
            </span>
          </div>
          <h1>{t('title')}</h1>
          <h2>{t('content')}</h2>
        </header>
      </div>
    );
  }
}

export default withTranslation()(AppI18N);
