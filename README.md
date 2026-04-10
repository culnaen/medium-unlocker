# Medium Unlocker / Медиум Анлокер

## English

A Tampermonkey userscript that redirects Medium articles to [Freedium](https://freedium-mirror.cfd/) for free access without a paywall.

### Features

- **Auto-redirect**: Automatically redirects Medium article pages to Freedium
- **Click-to-open**: Click any Medium link to open it in Freedium
- **Supports all Medium domains**: Works on medium.com and all subdomains
- **No configuration needed**: Just install and it works

### Installation

#### Quick Install

<a href="https://culnaen.github.io/medium_unlocker/medium-unlocker.user.js" style="display: inline-block; padding: 10px 20px; background: #1db954; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Install / Установить</a>

#### Manual Install

1. **Install Tampermonkey extension**:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)

2. Click the "Install / Установить" button above

3. Confirm installation in the Tampermonkey popup

4. Visit any Medium article - it will automatically redirect to Freedium

### How It Works

The script detects Medium article URLs and either:
- Redirects the current page to Freedium (when visiting a Medium article directly)
- Opens Medium links in Freedium (when clicking links on Medium or other sites)

Freedium is a free mirror service that provides unrestricted access to Medium content.

### Troubleshooting

**Script not working?**
- Make sure Tampermonkey is installed and enabled
- Check that the script is enabled in Tampermonkey dashboard
- Try refreshing the page

**Article not redirecting?**
- Some very new articles may not be mirrored yet
- Check if Freedium is accessible at https://freedium-mirror.cfd/

**Want to read on Medium instead?**
- Disable the script temporarily in Tampermonkey
- Or use incognito/private browsing mode

### License

MIT License - see [LICENSE](LICENSE) file for details

---

## Русский

Userscript для Tampermonkey, который перенаправляет статьи Medium на [Freedium](https://freedium-mirror.cfd/) для бесплатного чтения без paywall.

### Возможности

- **Автоматическое перенаправление**: Автоматически перенаправляет страницы статей Medium на Freedium
- **Открытие по клику**: Нажмите на любую ссылку Medium, чтобы открыть её в Freedium
- **Поддержка всех доменов Medium**: Работает на medium.com и всех поддоменах
- **Без настройки**: Просто установите и пользуйтесь

### Установка

#### Быстрая установка

<a href="https://culnaen.github.io/medium_unlocker/medium-unlocker.user.js" style="display: inline-block; padding: 10px 20px; background: #1db954; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Install / Установить</a>

#### Ручная установка

1. **Установите расширение Tampermonkey**:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)

2. Нажмите кнопку "Install / Установить" выше

3. Подтвердите установку во всплывающем окне Tampermonkey

4. Откройте любую статью Medium - она автоматически перенаправится на Freedium

### Как это работает

Скрипт обнаруживает URL статей Medium и либо:
- Перенаправляет текущую страницу на Freedium (при прямом посещении статьи Medium)
- Открывает ссылки Medium в Freedium (при клике по ссылкам на Medium или других сайтах)

Freedium - это бесплатный сервис зеркалирования, который предоставляет неограниченный доступ к контенту Medium.

### Решение проблем

**Скрипт не работает?**
- Убедитесь, что Tampermonkey установлен и включён
- Проверьте, что скрипт включён в панели управления Tampermonkey
- Попробуйте обновить страницу

**Статья не перенаправляется?**
- Некоторые очень новые статьи могут быть ещё не зеркалированы
- Проверьте, доступен ли Freedium по адресу https://freedium-mirror.cfd/

**Хотите прочитать на Medium?**
- Временно отключите скрипт в Tampermonkey
- Или используйте режим инкогнито/приватного просмотра

### Лицензия

MIT License - подробности в файле [LICENSE](LICENSE)
