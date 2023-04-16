const Language = require('@lib/structures/Language'),
    { plural } = require('@lib/Utils');

module.exports = class extends Language {
    constructor() {
        super('uk');

        this.language = {
            LANGUAGE_NAME: () => 'Українська',
            DEFAULT: (key) => `Ключ ${key} ще не переведений на Українську`,

            ERROR_OCCURRED: () => 'Виникла внутрішня помилка під час виконання команди, спробуйте виконати команду пізніше. Якщо проблема не зникне, зверніться на сервер підтримки — https://discord.gg/8vm6pEemX7',
            DISABLED_PLATFORM: () => '<:tmNekoCute:1020279802441236520> Відтворення музики на цій платформі недоступне, аналогічний запит буде виконано на іншій платформі',

            MENU_FOOTER_PAGE: () => 'Сторінка ',
            NOTHING_PLAYING: () => 'Зараз нічого не грає',
            QUEUE_EMPTY: () => 'Відтворення зупинено',
            NODES_NOT_AVAILABLE: () => 'На даний момент музика недоступна',
            NO_MATCHES: () => 'На ваш запит нічого не знайдено',
            LOAD_FAILED: () => 'Не вдалося завантажити трек',
            QUERY_LOAD_FAILED: (message) => `При обробці запиту сталася помилка:\n\`\`\`asciidoc\n- ${message}\`\`\``,
            VOICE_CHANNEL_FULL: () => 'Бот не може підключитися до цього голосового каналу, тому що він заповнений',

            PLAYER_CREATE_FAILED: () => 'Не вдалося приєднатись до голосового каналу',
            PLAYER_DISCONNECTED: () => 'З\'єднання було скинуто через те, що сталася невідома помилка під час відтворення або мене відключили від голосового каналу',

            QUEUE_LIMIT: (limit) => `Ви не можете додати більше ${limit} ${plural(limit, 'трек', 'треки', 'треків')} у чергу`,
            QUEUE_LIMIT_INFO: () => `⚠ Не всі треки були завантажені через обмеження максимальної кількості треків у черзі`,

            COMMAND_BASS_MISSING_PERMISSIONS: () => 'Ви не можете встановити бас-буст. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_BASS_DISABLED: () => '⌛ **Бас-буст вимкнено, зачекайте трохи**',
            COMMAND_BASS_MINIMUM: () => '⌛ **Встановлено мінімальний рівень бас-бусту. Він буде застосований через декілька секунд, зачекайте**',
            COMMAND_BASS_MEDIUM: () => '⌛ **Встановлено середній рівень бас-бусту. Він буде застосований через декілька секунд, зачекайте**',
            COMMAND_BASS_MAXIMUM: () => '⌛ **Встановлено максимальний рівень бас-бусту. Він буде застосований через декілька секунд, зачекайте**',
            COMMAND_BASS_FULL: () => '⌛ **Встановлено повний рівень бас-бусту. Він буде застосований через декілька секунд, зачекайте**',

            COMMAND_KARAOKE_MISSING_PERMISSIONS: () => 'Ви не можете встановити karaoke. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_KARAOKE_DISABLED: () => '⌛ **Ефект karaoke вимкнено, зачекайте трохи**',
            COMMAND_KARAOKE_ENABLED: () => '⌛ **Ефект karaoke увімкнено. Він буде застосований через декілька секунд**',
            COMMAND_KARAOKE_MONO: () => '⌛ **Ефект karaoke встановлено в режимі моно. Він буде застосований через декілька секунд**',

            COMMAND_ROTATION_MISSING_PERMISSIONS: () => 'Ви не можете встановити ефект rotation. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_ROTATION_DISABLED: () => '⌛ **Ефект rotation вимкнено, зачекайте трохи**',
            COMMAND_ROTATION_ENABLED: (speed) => `⌛ **Ефект rotation встановлений на швидкість \`${speed}x\` та буде застосований через декілька секунд**`,

            COMMAND_NIGHTCORE_MISSING_PERMISSIONS: () => 'Ви не можете встановити nightcore. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_NIGHTCORE_DISABLED: () => '⌛ **Ефект nightcore вимкнено, зачекайте трохи**',
            COMMAND_NIGHTCORE_SET: (speed) => `⌛ **Ефект nightcore встановлений на темп \`${speed}\` та буде застосований через декілька секунд**`,
            COMMAND_NIGHTCORE_SLOW: () => '⌛ **Ефект nightcore встановлений на повільний темп та буде застосований через декілька секунд**',

            COMMAND_EQUALIZER_MISSING_PERMISSIONS: () => 'Ви не можете встановити пресет для еквалайзера. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_EQUALIZER_SET: () => '⌛ **Пресет для еквалайзера встановлено, зачекайте трохи**',

            COMMAND_PLAY_MISSING_QUERY: () => 'Вкажіть назву або посилання на трек',
            COMMAND_PLAY_NO_MATCHES: (failed) => {
                if (!failed)
                    return 'По вашому запиту нічого не знайдено';
                else
                    return 'Не вдалося завантажити плейлист, тому що треки, які знаходяться в ньому, недоступні у країні розташування сервера';
            },
            COMMAND_PLAY_LOAD_FAILED: () => 'Сталася помилка під час завантаження треку',
            COMMAND_PLAY_TRACK_LOADED: (provider, name, queueMode) => {
                let res = `${provider} Трек **${name}** був доданий у чергу`;

                switch(queueMode) {
                    case 'shuffle':
                        res += '\nВиявлено модифікатор режиму черги, треки відтворюватимуться у випадковому порядку';
                        break;

                    case 'single':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор поточного треку';
                        break;

                    case 'queue':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор усієї черги';
                        break;

                    case 'disable':
                        res += '\nВиявлено модифікатор режиму черги, вимикаю режим повтору';
                        break;
                }

                return res;
            },

            COMMAND_PLAY_PLAYLIST_LOADED: (provider, size, name, failed, queueMode) => {
                let res = `${provider} Плейлист **${name || 'Невідомий плейлист'}** завантажений у чергу, ${plural(size, `був доданий **${size} трек`, `було додано **${size}** треки`, `було додано **${size}** треків`)}${failed && failed > 1 ? `\n${failed} ${plural(failed, 'трек', 'треки', 'треків')} не було завантажено (у країні розташування сервера вони недоступні)` : ''}`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nВиявлено модифікатор режиму черги, треки відтворюватимуться у випадковому порядку';
                        break;

                    case 'single':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор поточного треку';
                        break;

                    case 'queue':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор усієї черги';
                        break;

                    case 'disable':
                        res += '\nВиявлено модифікатор режиму черги, вимикаю режим повтору';
                        break;
                }

                return res;
            },

            COMMAND_PLAY_NOW_PLAYING: (provider, name, queueMode) => {
                let res = `${provider} Зараз грає **${name}**`;

                switch(queueMode) {
                    case 'shuffle':
                        res += '\nВиявлено модифікатор режиму черги, треки відтворюватимуться у випадковому порядку';
                        break;

                    case 'single':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор поточного треку';
                        break;

                    case 'queue':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор усієї черги';
                        break;

                    case 'disable':
                        res += '\nВиявлено модифікатор режиму черги, вимикаю режим повтору';
                        break;
                }

                return res;
            },
            
            COMMAND_PLAY_PLAYLIST_EMPTY: () => 'Не вдалося завантажити плейлист, бо він порожній',
            COMMAND_PLAY_PLAYLIST_PRIVACY: () => 'Не вдалося завантажити плейлист, бо він приватний',

            COMMAND_NP_TITLE: (name) => `Наразі програються треки для ${name}`,
            COMMAND_NP_LAST_TRACK: () => '••• Грає останній трек',
            COMMAND_NP_NODE: (name, load) => `Трек відтворюється на музичній ноді ${name} (${load}%)`,
            COMMAND_NP_TRACK_COUNT: (count) => `••• ${count} ${plural(count, 'трек', 'треки', 'треків')} у черзі..`,
            COMMAND_NP_DESCRIPTION: (np, volume, bar, position, length, queueLength) => `Зараз грає **[${np.info.title}](https://loli.aspire.su)**\nДоданий: <@${np.info.requested}>\n\nГучність: ${volume}%\n${bar}\n\`[${position} / ${length}] • [${position} / ${queueLength}]\``,
            COMMAND_NP_UPDATE: () => 'Оновити',
            COMMAND_NP_LYRICS: () => 'Текст',

            COMMAND_QUEUE_NOW_PLAYING: (title) => `Зараз грає: ${title}`,
            COMMAND_QUEUE_TITLE: (guild) => `Черга сервера ${guild}`,
            COMMAND_QUEUE_FOOTER: (page, length) => `••• Сторінка: ${page} • ${length} ${plural(length, 'трек лишився', 'треки лишилося', 'треків лишилося')}`,

            COMMAND_SKIP_MISSING_PERMISSIONS: (user) => `Ви не можете пропустити цей трек, попросіть <@${user}> зробити це`,
            COMMAND_SKIP_SKIPPED: () => ':track_next: **Трек пропущено**',

            COMMAND_STOP_MISSING_PERMISSIONS: () => 'Ви не можете зупинити відтворення. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_STOP_STOPPED: () => ':stop_button: **Бот покинув голосовий канал**',

            COMMAND_CLEAR_MISSING_PERMISSIONS: () => 'Ви не можете почистити чергу. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_CLEAR_QUEUE_CLEARED: () => '**Черга очищена**',

            COMMAND_SEEK_MISSING_PERMISSIONS: () => 'Ви не можете перемотати цей трек. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_SEEK_PARAMS: () => 'Вкажіть позицію для перемотування',
            COMMAND_SEEK_INVALID_POSITION: () => 'Вказано неправильну позицію для перемотування',
            COMMAND_SEEK_SEEKED: () => '⏩ **Трек перемотаний**',

            COMMAND_REPLAY_MISSING_PERMISSIONS: () => 'Ви не можете перемотати цей трек. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_REPLAY_SEEKED: () => 'Програвання треку розпочато з початку',

            COMMAND_MOVE_MISSING_PERMISSIONS: () => 'Ви не можете перемістити цей трек. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_MOVE_INDEX: () => 'Вказано неправильну позицію треку для переміщення',
            COMMAND_MOVE_DESTINATION: () => 'Вказано неправильну нову позицію для переміщення. Вона має бути в межах черги',
            COMMAND_MOVE_MOVED: (newTrack, oldTrack) => `Трек **${newTrack}** тепер знаходиться на позиції треку **${oldTrack}**`,

            COMMAND_SHUFFLE_MISSING_PERMISSIONS: () => 'Ви не можете перемішати чергу. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_SHUFFLE_SHUFFLED: () => ':twisted_rightwards_arrows: **Черга перемішана**',

            COMMAND_PAUSE_MISSING_PERMISSIONS: () => 'Ви не можете зупинити відтворення треків. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_PAUSE_PAUSED: () => ':pause_button: **Плеєр поставлено на паузу**',

            COMMAND_RESUME_MISSING_PERMISSIONS: () => 'Ви не можете відновити відтворення треків. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_RESUME_RESUMED: () => ':arrow_forward: **Плеєр знято з паузи**',

            COMMAND_VOLUME_MISSING_PERMISSIONS: () => 'Ви не можете змінити рівень гучності. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_VOLUME_CHANGED: (emoji, level) => `${emoji} Гучність встановлена на **${level}%**`,

            COMMAND_VOTESKIP_ALREADY_VOTED: () => 'Ви вже проголосували за пропуск поточного треку',
            COMMAND_VOTESKIP_VOTED: (votes, need) => `Ви проголосували за пропуск поточного треку. Залишилось ще ${votes} з ${need} голосів`,
            COMMAND_VOTESKIP_SKIPPED: () => ':track_next: **Трек пропущено**',

            COMMAND_REMOVE_MISSING_PERMISSIONS: () => 'Ви не можете вилучити цей трек із черги. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_REMOVE_PARAMS: () => 'Вкажіть номер треку, щоб його вилучити з черги',
            COMMAND_REMOVE_REMOVED: (name) => `Трек **${name}** був вилучений з черги`,
            COMMAND_REMOVE_RANGE_REMOVED: (count) => `З черги було вилучено **${count}** ${plural(count, 'трек', 'треки', 'треків')}`,

            COMMAND_LOOP_MISSING_PERMISSIONS: () => 'Ви не можете встановити повторення треків. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_LOOP_DISABLED: () => '**Тепер плеєр не повторюватиме треки**',
            COMMAND_LOOP_QUEUE: () => ':repeat: **Тепер плеєр повторюватиме всю чергу**',
            COMMAND_LOOP_SINGLE: () => ':repeat_one: **Тепер плеєр повторюватиме тільки поточний трек**',
            COMMAND_LOOP_SHUFFLE: () => '🔀 **Тепер треки програватимуться у випадковому порядку**',

            COMMAND_PP_PLAYLIST_NAME: () => 'Вкажіть назву плейлиста',
            COMMAND_PP_INVALID_PLAYLIST: () => 'Вказаний плейлист не знайдено',
            COMMAND_PP_PLAYLIST_EMPTY: () => 'Вказаний плейлист порожній',
            COMMAND_PP_PLAYLIST_LOADED: (provider, name, count, queueMode) => {
                let res = `${provider} Плейлист **${name}** завантажений у чергу, ${plural(count, `був доданий **${count} трек`, `було додано **${count}** треки`, `було додано **${count}** треків`)}`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nВиявлено модифікатор режиму черги, треки відтворюватимуться у випадковому порядку';
                        break;

                    case 'single':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор поточного треку';
                        break;

                    case 'queue':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор усієї черги';
                        break;

                    case 'disable':
                        res += '\nВиявлено модифікатор режиму черги, вимикаю режим повтору';
                        break;
                }

                return res;
            },

            COMMAND_PP_PUBLIC_LOADED: (provider, name, count, queueMode) => {
                let res = `${provider} Публічний плейлист **${name}** завантажений у чергу, ${plural(count, `був доданий **${count} трек`, `було додано **${count}** треки`, `було додано **${count}** треків`)}`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nВиявлено модифікатор режиму черги, треки відтворюватимуться у випадковому порядку';
                        break;

                    case 'single':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор поточного треку';
                        break;

                    case 'queue':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор усієї черги';
                        break;

                    case 'disable':
                        res += '\nВиявлено модифікатор режиму черги, вимикаю режим повтору';
                        break;
                }

                return res;
            },

            COMMAND_PLAYLIST_NAME: () => 'Вкажіть назву плейлиста',
            COMMAND_PLAYLIST_INVALID_PLAYLIST: () => 'Вказаний плейлист не знайдено',
            COMMAND_PLAYLIST_NEW_NAME: () => 'Вкажіть назву нового плейлиста',
            COMMAND_PLAYLIST_TRACK_INDEX: () => 'Вкажіть номер треку',
            COMMAND_PLAYLIST_INVALID_TRACK: () => 'Ви вказали неправильний номер треку',
            COMMAND_PLAYLIST_TRACK_ADDED: (provider, track, name) => `${provider || ''} Трек **${track}** був доданий у плейлист **${name}**`,
            COMMAND_PLAYLIST_ADDED_PLAYLIST: (provider, name, size) => `${provider} Плейлист завантажений, всі треки були додані в плейлист **${name}**. Усього треків: **${size}**`,
            COMMAND_PLAYLIST_RENAMED: (name, newName) => `Плейлист **${name}** був перейменований в **${newName}**`,
            COMMAND_PLAYLIST_TRACK_REMOVED: (track, name) => `Трек **${track}** вилучено з плейлиста **${name}**`,
            COMMAND_PLAYLIST_PRIVACY_CHANGED: (name, type) => `Плейлист **${name}** тепер **${type}**`,
            COMMAND_PLAYLIST_TRACK_LIST: (name) => `Список треків у плейлисті ${name}`,
            COMMAND_PLAYLIST_TRACK_LIST_FOOTER: (page, size) => `••• Сторінка: ${page} • Усього треків у плейлисті: ${size}`,
            COMMAND_PLAYLIST_DUPLICATED_NAME: () => 'Ви не можете використовувати цю назву плейлиста, тому що у вас вже є плейлист з такою назвою',
            COMMAND_PLAYLIST_EMPTY_PLAYLIST: () => 'Вказаний плейлист порожній',
            COMMAND_PLAYLIST_INFO_PLACEHOLDER: () => 'Виберіть плейлист',

            COMMAND_CREATE_PLAYLIST_NAME: () => 'Вкажіть назву нового плейлиста',
            COMMAND_CREATE_LIMITED: (maxPlaylists) => `Ви не можете створити **більше ${maxPlaylists} плейлистів**`,
            COMMAND_CREATE_DUPLICATED_NAME: () => 'У вас вже є плейлист із такою назвою',
            COMMAND_CREATE_CREATED: (name) => `Плейлист **${name}** був успішно створений`,

            COMMAND_DELETE_PLAYLIST_NAME: () => 'Вкажіть назву плейлиста',
            COMMAND_DELETE_INVALID_PLAYLIST: () => 'Вказаний плейлист не знайдено',
            COMMAND_DELETE_CONFIRMATION: (name, count) => `Ви дійсно хочете видалити плейлист **${name}**, у якому **${count}** ${plural(count, 'трек', 'треки', 'треків')}?`,
            COMMAND_DELETE_CONFIRMED: (name) => `Плейлист **${name}** був видалений`,
            COMMAND_DELETE_CANCELLED: () => 'Плейлист не був видалений',

            COMMAND_LANGUAGE_SUCCESS: () => 'Мова серверу успішно змінена',

            COMMAND_LIVEPLAYER_INVALID_CHANNEL: () => 'Ви не можете встановити лайвплеєр для цього каналу',
            COMMAND_LIVEPLAYER_SET: (channel) => `Лайвплеєр встановлений для каналу ${channel}`,
            COMMAND_LIVEPLAYER_REMOVED: () => 'Лайвплеєр був успішно вимкнений',

            COMMAND_DJ_INVALID_ROLE: () => 'Ви не можете встановити цю роль',
            COMMAND_DJ_ROLE_SET: () => 'Роль була успішно встановлена',

            COMMAND_EFFECTS_INFO: (equalizer, karaoke, timescale, rotation) => `**Ефекти:**\n Бас-буст: \`[ ${equalizer.map(x => x.gain).join(', ')} ]\`\nРежим караоке: \`${(karaoke && karaoke.monoLevel !== 1) ? 'Моно' : (karaoke && karaoke.level) !== 1 ? 'Увімкнено' : 'Вимкнено'}\`\nNightcore: \`${(timescale && timescale.rate !== 1) ? timescale?.rate + 'x' : 'Вимкнено'}\`\nRotation: \`${rotation ? rotation.rotationHz + 'x' : 'Вимкнено'}\``,
            COMMAND_EFFECTS_FOOTER: () => 'Для скидання всіх параметрів ефектів використовуйте команду /effects reset',
            COMMAND_EFFECTS_RESET: () => 'Усі параметри ефектів були скинуті',

            PLAYLIST_PRIVACY: (i) => {
                return {
                    private: 'Приватний',
                    public: 'Публічний'
                }[i];
            },

            PERMISSIONS: (i) => {
                return {
                    CreateInstantInvite: 'Створювати запрошення',
                    KickMembers: 'Виганяти користувачів',
                    BanMembers: 'Блокувати користувачів',
                    Administrator: 'Адміністратор',
                    ManageChannels: 'Керувати каналами',
                    ManageGuild: 'Керувати сервером',
                    AddReactions: 'Додавати реакції',
                    ViewAuditLog: 'Дивитися журнал аудиту',
                    PrioritySpeaker: 'Пріоритетний режим',
                    Stream: 'Стрімити',
                    ViewChannel: 'Дивитися канали',
                    SendMessages: 'Відправляти повідомлення',
                    SendMessagesInThreads: 'Відправляти повідомлення у гілки',
                    SendTTSMessages: 'Використовувати повідомлення за допомогою синтезу мовлення',
                    ManageMessages: 'Керувати повідомленнями',
                    EmbedLinks: 'Вставляти посилання',
                    AttachFiles: 'Прикріпляти файли',
                    ReadMessageHistory: 'Читати історію повідомлень',
                    MentionEveryone: 'Згадувати всіх',
                    UseExternalEmojis: 'Використовувати сторонні емодзі',
                    ViewGuildInsights: 'Дивитися аналітику сервера',
                    Connect: 'Під\'єднуватися',
                    Speak: 'Говорити',
                    MuteMembers: 'Вимикати учасникам мікрофон',
                    DeafenMembers: 'Вимикати учасникам звук',
                    MoveMembers: 'Перемістити учасників',
                    UseVAD: 'Використовувати режим активації по голосу',
                    ChangeNickname: 'Змінювати нікнейм',
                    ManageNicknames: 'Керувати нікнеймами',
                    ManageRoles: 'Керувати ролями',
                    ManageWebhooks: 'Керувати вебхуками',
                    ManageEmojisAndStickers: 'Керувати емодзі та стікерами'
                }[i];
            },

            IN_VOICE: () => 'Ви повинні знаходитись у голосовому каналі',
            IN_THE_SAME_VOICE_CHANNEL: () => 'Ви повинні знаходитися в одному голосовому каналі з ботом',
            MISSING_VOICE_PERMISSIONS: () => 'Бот не має права підключатися до цього голосового каналу або говорити в ньому',
            MISSING_STAGE_VOICE_PERMISSIONS: () => 'Боту потрібні права модератора на трибуні для програвання музики у цьому каналі',
            RULE_MISSING_PERMISSIONS: (target, perms) => `У ${target || 'вас'} недостатньо прав для виконання цієї команди: ${Array.isArray(perms) && perms.map(x => `**${x}**`).join(', ') || `**${perms}**`}`,

            LIVEPLAYER_BUTTON_REMOVE: () => 'Вилучити',
            LIVEPLAYER_BUTTON_MOVE: () => 'Перемістити',

            LIVEPLAYER_FAVORITE_PLAYLISTS_EMPTY: () => 'Ви не можете додати трек до плейлисту, тому що у вас їх немає, або вони заповнені',
            LIVEPLAYER_FAVORITE_SELECT_PLAYLIST: () => 'Виберіть плейлист, до якого хочете додати поточний трек',
            LIVEPLAYER_FAVORITE_SELECT_PLACEHOLDER: () => 'Не вибрано',
            LIVEPLAYER_FAVORITE_PLAYLIST_DESCRIPTION: (songs) => `Має ${songs.length} ${plural(songs.length, 'трек', 'треки', 'треків')}`,
            LIVEPLAYER_FAVORITE_TRACK_NOT_ADDED: () => 'Трек не був доданий у плейлист',
            LIVEPLAYER_REMOVE_EMPTY_QUEUE: () => 'Неможливо вилучити треки з черги, бо вона порожня',
            LIVEPLAYER_REMOVE_SELECT_TRACK: () => 'Виберіть трек, який потрібно вилучити',
            LIVEPLAYER_REMOVE_SELECT_PLACEHOLDER: () => 'Не вибрано',
            LIVEPLAYER_REMOVE_TRACK_NOT_REMOVED: () => 'Трек не був вилучений з черги',
            LIVEPLAYER_MOVE_EMPTY_QUEUE: () => 'Неможливо перемістити треки, тому що черга порожня',
            LIVEPLAYER_MOVE_SELECT_PLACEHOLDER: () => 'Не вибрано',
            LIVEPLAYER_MOVE_SELECT_INDEX: () => 'Виберіть трек, який ви бажаєте перемістити',
            LIVEPLAYER_MOVE_SELECT_DESTINATION: () => 'Виберіть трек, на який потрібно перемістити вказаний трек',
            LIVEPLAYER_MOVE_NOT_MOVED: () => 'Трек не був переміщений',

            LIVEPLAYER_EMBED_TITLE: (name) => `Плеєр для сервера ${name}`,
            LIVEPLAYER_EMBED_DESCRIPTION: (np, queueText) => `Зараз грає [${np.info.title}](https://loli.aspire.su)\nДоданий: <@${np.info.requested}>\n\n**Список треків у черзі:**\n${queueText.length ? queueText : 'Черга порожня...'}`,
            NOTHING_PLAYING_TOPIC: () => 'Нічого не грає',

            COMMAND_EFFECTS_RESET_MISSING_PERMISSIONS: () => 'Ви не можете скинути параметри ефектів. Попросіть зробити це учасника з ролью `Dj`',

            COMMAND_STATS_INFORMATION: (guilds, cachedUsers, users, memoryUsage, shardId) => `Серверів: \`${guilds}\`\nКористувачів: \`${cachedUsers} / ${users}\`\nВикористовується пам'яті: \`${memoryUsage} MB\`\n\n**Сервер знаходиться на шарді \`#${shardId}\`**`,
            COMMAND_STATS_MUSIC_NODE_INFORMATION: (players, playingPlayers, memoryUsage, uptime) => `Усього плеєрів: \`${players}\`\nГрає: \`${playingPlayers}\`\nВикористовується пам'яті: \`${memoryUsage} MB\`\n **Запущено <t:${uptime}:R>**`,

            COMMAND_LYRICS_TRACK_NOT_FOUND: () => 'Не вдалось знайти пісню',
            COMMAND_LYRICS_FAILED: () => 'Не вдалось отримати текст пісні',

            PREMIUM_GUILDS_ONLY: () => 'Ця команда доступна лише для преміум серверів або користувачів. Щоб отримати преміум підписку, перегляньте інформацію в команді \`/premium info\`.\n\nЯкщо у вас немає можливості оформити підписку, ви можете отримати 12 годин преміуму, проголосувавши за робота на [моніторингу](https:\/\/top.gg/bot/661765685017575424/vote)',
            PREMIUM_BOT: () => 'Цей бот доступний лише для преміум серверів. Щоб отримати преміум підписку, перегляньте інформацію в команді \`/premium info\`',
            COMMAND_RADIO_LOAD_FAILED: () => 'Неможливо завантажити вказану радіостанцію. Спробуйте ще раз',
            COMMAND_RADIO_STREAM_LOADED: (name) => `Радіостанція **${name}** додана в чергу`,
            COMMAND_RADIO_NOW_PLAYING: (name) => `Наразі грає радіостанція **${name}**`,
            COMMAND_RADIO_SELECT: (name) => `Виберіть радіостанцію **\`${name}\`** зі списку нижче:`,
            COMMAND_RADIO_SELECT_PLACEHOLDER: () => 'Виберіть радіостанцію',
            COMMAND_RADIO_SELECTION_CANCELLED: () => 'Дія скасована',

            COMMAND_PREMIUM_NOT_AVAILABLE: () => 'У вас немає доступних активацій преміуму для серверів',
            COMMAND_PREMIUM_ALREADY_ACTIVATED: (ends) => `На сервері вже активовано преміум, який закінчиться <t:${ends}>`,
            COMMAND_PREMIUM_ACTIVATED: () => 'Ви успішно активували преміум підписку на цьому сервері на місяць',
            COMMAND_PREMIUM_INFO_TITLE: () => 'Інформація про підписку',
            COMMAND_PREMIUM_INFORMATION: () => `Купуючи преміум підписку, Ви підтримуєте роботу бота, а також отримуєте можливість користуватися преміум функціоналом.\n\n**Список можливостей:**\n\`\`\`md\n# Можливість використовувати бота як 24/7 радіо на вашому сервері\n# Можливість використовувати другого бота у себе на сервері\n# Команда radio, яка дозволяє відтворити вказану радіостанцію\n# Команда для керування ефектами музичного відтворення\n# Максимальна кількість треків у черзі буде збільшена з 300 до 500 треків.\n# Бот не залишатиме голосовий канал у разі виходу всіх людей із нього.\`\`\`\n**[Додати преміум бота на свій сервер](https://discord.com/oauth2/authorize?client_id=1040406009958629436&scope=bot+applications.commands&permissions=3491904)**\n\nЗадонатити можна на будь-який сервіс: **[Boosty](https://boosty.to/yukikaze), [Patreon](https://patreon.com/YukikazeMusic)**\n\nЯкщо у вас немає можливості оформити підписку, ви можете отримати 12 годин преміуму, проголосувавши за бота на **[моніторингу](https://top.gg/bot/661765685017575424/vote)**\n`,
            COMMAND_PREMIUM_AVAILABLE_SUBSCRIPTIONS: (count) => `\nВи маєте **\`${count}\`** доступних активацій. Використовуйте **\`/premium activate\`** для активації преміум-функцій на вашому сервері`,
            COMMAND_PREMIUM_GUILD_ENDS: (ends) => `\n**На вашому сервері активована преміум підписка, яка закінчиться <t:${ends}>**`,
            COMMAND_PREMIUM_USER_ENDS: (ends) => `\n**У вас активована преміум підписка, яка закінчиться <t:${ends}>**`,

            COMMAND_VK_USER_USER_NOT_FOUND: () => 'Користувач не був знайдений, перевірте вказаний айді',
            COMMAND_VK_USER_TRACKS_NOT_LOADED: () => 'Не вдалося завантажити треки, спробуйте змінити налаштування приватності',
            COMMAND_VK_USER_LOADED: (provider, name, size, failed, queueMode) => {
                let res = `${provider} Плейлист **${name || 'Невідомий плейлист'}** завантажений у чергу, ${plural(size, `був доданий **${size} трек`, `було додано **${size}** треки`, `було додано **${size}** треків`)}${failed && failed > 1 ? `\n${failed} ${plural(failed, 'трек', 'треки', 'треків')} не було завантажено (у країні розташування сервера вони недоступні)` : ''}`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nВиявлено модифікатор режиму черги, треки відтворюватимуться у випадковому порядку';
                        break;

                    case 'single':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор поточного треку';
                        break;

                    case 'queue':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор усієї черги';
                        break;

                    case 'disable':
                        res += '\nВиявлено модифікатор режиму черги, вимикаю режим повтору';
                        break;
                }

                return res;
            },

            COMMAND_VK_SEARCH_NO_MATCHES: () => 'По вашому запиту нічого не знайдено',
            COMMAND_SOUNDCLOUD_SEARCH_NO_MATCHES: () => 'По вашому запиту нічого не знайдено',
            COMMAND_YANDEX_SEARCH_NO_MATCHES: () => 'По вашому запиту нічого не знайдено',

            COMMAND_SETTINGS_INFO_TITLE: (name) => `Параметри сервера ${name}`,
            COMMAND_SETTINGS_INFO_FOOTER: () => 'Ви можете змінювати параметри за допомогою команди /settings або в панелі на веб-сайті',
            COMMAND_SETTINGS_INFO_LIST: (guild, data) => {
                return {
                    'Мова': this.language.LANGUAGE_NAME() + '\n',
                    'Автоматичне видалення повідомлень': guild.remove_responses ? 'Увімкнено' : 'Вимкнено',

                    'DJ-роль': guild.roles.cache.get(data.dj)?.name || 'Не встановлена',
                    'Статус DJ-ролі': data.dj_enabled ? 'Увімкнена' : 'Вимкнена',
                    'Поріг вимоги DJ-ролі': data.dj_threshold + '\n',
        
                    'Канал лайвплеєра': guild.channels.cache.get(data.playerChannel)?.name || 'Не встановлений',
                    'Виклик лайвплеєра': guild.data.player_announcements_enabled ? 'Увімкнено' : 'Вимкнено',
                    'Колір вбудованих повідомлень': data.liveplayer_embed_color.toUpperCase(),
                    'Розташування іконки треку': ['Збоку', 'Знизу', 'Приховати'][data.liveplayer_thumbnail_location] + '\n',
                    
                    'Збір аналітики': data.analytics_enabled ? 'Увімкнений' : 'Вимкнений',
                    'Зміна назви трибуни': data.change_stage_topic ? 'Увімкнено' : 'Вимкнено' + '\n',

                    'Режим радіо': data.radio_mode == '661765685017575424' ? 'Yukikaze' : data.radio_mode == '1040406009958629436' ? 'Nowaki' : 'Вимкнено',
                    'Канал радіо': guild.channels.cache.get(data.radio_channel)?.name || 'Не встановлений',
                    'Радіостанція': require('@config/Radio').find(x => x.streamURL == data.radio_uri)?.name || 'Не встановлена'
                };
            },

            EFFECTS_EQUALIZER_DESCRIPTION: () => 'Застосовує вибраний пресет еквалайзера для поточного відтворення',
            EFFECTS_EQUALIZER_PRESET_DESCRIPTION: () => 'Пресет, який буде застосовано',
            EFFECTS_NIGHTCORE_DESCRIPTION: () => 'Додає ефект nightcore для поточного відтворення',
            EFFECTS_NIGHTCORE_MODE_DESCRIPTION: () => 'Режим nightcore',
            EFFECTS_RESET_DESCRIPTION: () => 'Скидає всі встановлені параметри ефектів',
            EFFECTS_BASS_DESCRIPTION: () => 'Додає бас-буст для поточного відтворення',
            EFFECTS_BASS_MODE_DESCRIPTION: () => 'Режим бас-бусту',
            EFFECTS_KARAOKE_DESCRIPTION: () => 'Вмикає режим караоке для поточного відтворення',
            EFFECTS_KARAOKE_MODE_DESCRIPTION: () => 'Режим караоке',
            EFFECTS_ROTATION_DESCRIPTION: () => 'Додає ефекту rotation для поточного відтворення',
            EFFECTS_ROTATION_MODE_DESCRIPTION: () => 'Режим rotation',

            LOOP_DESCRIPTION: () => 'Перемикає режим повторення для поточного відтворення',
            LOOP_MODE_DESCRIPTION: () => 'Режим',

            LYRICS_DESCRIPTION: () => 'Шукає текст для поточної або вказаної пісні',
            LYRICS_NAME_DESCRIPTION: () => 'Назва пісні',

            NP_DESCRIPTION: () => 'Надає інформацію про поточне відтворення',

            PAUSE_DESCRIPTION: () => 'Ставить плеєр на паузу',

            PING_DESCRIPTION: () => 'Показує пінг бота',

            PLAY_DESCRIPTION: () => 'Шукає трек за вказаним запитом або посиланням',
            PLAY_QUERY_DESCRIPTION: () => 'Запит',
            PLAY_MODE_DESCRIPTION: () => 'Режим повторення черги',

            PREMIUM_ACTIVATE_DESCRIPTION: () => 'Активує преміум підписку на сервері',
            PREMIUM_INFO_DESCRIPTION: () => 'Показує інформацію про преміум підписку',

            PLAYLIST_LIST_DESCRIPTION: () => 'Показує список ваших плейлистів',
            PLAYLIST_MENU_DESCRIPTION: () => 'Відкриває меню керування вашим плейлистом',
            PLAYLIST_MENU_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_CREATE_DESCRIPTION: () => 'Створює плейлист із вказаною вами назвою',
            PLAYLIST_CREATE_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_PLAY_DESCRIPTION: () => 'Відтворює вказаний вами плейлист',
            PLAYLIST_PLAY_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_PLAY_MODE_DESCRIPTION: () => 'Режим повторення черги',
            PLAYLIST_ADD_DESCRIPTION: () => 'Додає трек у ваш плейлист',
            PLAYLIST_ADD_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_ADD_QUERY_DESCRIPTION: () => 'Запит',
            PLAYLIST_REMOVE_DESCRIPTION: () => 'Видаляє трек з вашого плейлиста',
            PLAYLIST_REMOVE_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_REMOVE_INDEX_DESCRIPTION: () => 'Номер трека',

            QUEUE_LIST_DESCRIPTION: () => 'Видає чергу для цього сервера',
            QUEUE_LIST_PAGE_DESCRIPTION: () => 'Сторінка',
            QUEUE_REMOVE_DESCRIPTION: () => 'Прибирає вказаний трек, або треки із черги',
            QUEUE_REMOVE_INDEX_DESCRIPTION: () => 'Номер трека',
            QUEUE_REMOVE_COUNT_DESCRIPTION: () => 'Кількість треків',
            QUEUE_MOVE_DESCRIPTION: () => 'Переміщує треки у черзі',
            QUEUE_MOVE_INDEX_DESCRIPTION: () => 'Позиція трека',
            QUEUE_MOVE_DESTINATION_DESCRIPTION: () => 'Новая позиція трека',

            RADIO_DESCRIPTION: () => 'Додає у чергу вказану радіостанцію',
            RADIO_STATION_DESCRIPTION: () => 'Радіостанція',
            
            REPLAY_DESCRIPTION: () => 'Починає програвати трек із самого початку',

            RESUME_DESCRIPTION: () => 'Знімає плеєр із паузи',

            SOUNDCLOUD_SEARCH_DESCRIPTION: () => 'Шукає треки на SoundCloud',
            SOUNDCLOUD_SEARCH_QUERY_DESCRIPTION: () => 'Запит',
            SOUNDCLOUD_SEARCH_MODE_DESCRIPTION: () => 'Режим повторення черги',

            SEEK_DESCRIPTION: () => 'Перемотує трек на вказану позицію',
            SEEK_TIME_DESCRIPTION: () => 'Час',

            SETTINGS_INFO_DESCRIPTION: () => 'Показує встановлені параметри',
            SETTINGS_LANGUAGE_DESCRIPTION: () => 'Змінює мову бота',
            SETTINGS_LANGUAGE_LANG_DESCRIPTION: () => 'Мова',

            COMMAND_DJ_THRESHOLD_SET: (count) => `Поріг вимоги DJ-ролі змінено`,
            COMMAND_DJ_STATUS_SET: (state) => `Роль DJ ${state ? 'включена' : 'вимкнена'}`,
            COMMAND_SETTINGS_LIVEPLAYER_THUMBNAIL_LOCATION_SET: () => 'Розташування іконки трека змінено',
            COMMAND_SETTINGS_LIVEPLAYER_INVALID_COLOR: () => 'Вказано неправильний колір',
            COMMAND_SETTINGS_LIVEPLAYER_COLOR_SET: () => 'Колір вбудованого повідомлення лайвплеєра змінено',

            SETTINGS_LIVEPLAYER_THUMBNAIL_DESCRIPTION: () => 'Змінює положення іконки трека',
            SETTINGS_LIVEPLAYER_THUMBNAIL_LOCATION_DESCRIPTION: () => 'Положення іконки (мініатюра/малюнок/приховати)',
            SETTINGS_LIVEPLAYER_COLOR_DESCRIPTION: () => 'Змінює колір вбудованого повідомлення',
            SETTINGS_LIVEPLAYER_COLOR_HEX_DESCRIPTION: () => 'Колір у форматі HEX',
            SETTINGS_DJ_SET_DESCRIPTION: () => 'Встановлює DJ-роль',
            SETTINGS_DJ_SET_ROLE_DESCRIPTION: () => 'Роль',
            SETTINGS_DJ_THRESHOLD_DESCRIPTION: () => 'Встановлює поріг вимоги DJ-ролі',
            SETTINGS_DJ_THRESHOLD_COUNT_DESCRIPTION: () => 'Кількість користувачів у голосовому каналі, коли буде потрібна DJ-роль',
            SETTINGS_DJ_STATUS_DESCRIPTION: () => 'Включає або відключає DJ-роль',
            SETTINGS_DJ_STATUS_STATE_DESCRIPTION: () => 'Стан',

            SETTINGS_LIVEPLAYER_SET_DESCRIPTION: () => 'Встановлює канал для лайвплеєра',
            SETTINGS_LIVEPLAYER_SET_CHANNEL_DESCRIPTION: () => 'Канал',
            SETTINGS_LIVEPLAYER_CREATE_DESCRIPTION: () => 'Створює канал для лайвплеєра',
            SETTINGS_LIVEPLAYER_REMOVE_DESCRIPTION: () => 'Прибирає канал лайвплеєра',

            SETTINGS_LIVEPLAYER_ANNOUNCE_DESCRIPTION: () => 'Включає виклик лайвплеєра в канал, де запустили бота',
            SETTINGS_LIVEPLAYER_ANNOUNCE_STATE_DESCRIPTION: () => 'Стан',

            SHUFFLE_DESCRIPTION: () => 'Перемішує треки у черзі',

            SKIP_DESCRIPTION: () => 'Пропускає поточний трек',
            
            STATS_DESCRIPTION: () => 'Показує статистику бота',

            STOP_DESCRIPTION: () => 'Зупиняє відтворення музики для цього сервера',
            CLEAR_DESCRIPTION: () => 'Чистить чергу',

            VK_USER_DESCRIPTION: () => 'Програє вказану кількість збережених треків вказаного користувача в VK',
            VK_USER_USER_DESCRIPTION: () => 'ID користувача',
            VK_USER_COUNT_DESCRIPTION: () => 'Кількість треків',
            VK_USER_OFFSET_DESCRIPTION: () => 'Початок позиції',
            VK_USER_MODE_DESCRIPTION: () => 'Режим повторення черги',

            VK_SEARCH_DESCRIPTION: () => 'Шукає треки на платформі VK',
            VK_SEARCH_QUERY_DESCRIPTION: () => 'Запит',
            VK_SEARCH_MODE_DESCRIPTION: () => 'Режим повторення черги',

            VOLUME_DESCRIPTION: () => 'Змінює рівень гучності для цього сервера',
            VOLUME_LEVEL_DESCRIPTION: () => 'Гучність',

            VOTESKIP_DESCRIPTION: () => 'Проголосувати за пропуск поточного треку',

            YANDEX_SEARCH_DESCRIPTION: () => 'Шукає треки на платформі Yandex.Music',
            YANDEX_SEARCH_QUERY_DESCRIPTION: () => 'Запит',
            YANDEX_SEARCH_MODE_DESCRIPTION: () => 'Режим повторення черги',

            ZVUK_SEARCH_DESCRIPTION: () => 'Шукає треки на платформі Zvuk',
            ZVUK_SEARCH_QUERY_DESCRIPTION: () => 'Запит',
            ZVUK_SEARCH_MODE_DESCRIPTION: () => 'Режим повторення черги',

            COMMAND_SETTINGS_ANALYTICS_RESET: () => 'Уся зібрана аналітика на цьому сервері була успішно скинута',
            COMMAND_SETTINGS_ANALYTICS_SET: (isEnabled) => `Збір аналітики ${isEnabled ? 'включений' : 'відключений'} на цьому сервері`,

            COMMAND_SETTINGS_LIVEPLAYER_ANNOUNCE_SET: (isEnabled) => `Виклик лайвплеєра в канал був ${isEnabled ? 'увімкнений' : 'вимкнений'} на цьому сервері`,

            COMMAND_ANALYTICS_TITLE: () => 'Інформація про прослухані треки на цьому сервері',
            COMMAND_ANALYTICS_LISTENED: () => '**Історія прослуховувань:**\n',
            COMMAND_ANALYTICS_TOP: () => 'Найчастіше прослуховуються:',
            COMMAND_ANALYTICS_INFO: (size, length) => `Усього на цьому сервері прослухали ${size} ${plural(size, 'трек', 'треки', 'треків')} загальною довжиною ${length}`,
            COMMAND_ANALYTICS_TRACK: (index, track) => `\`[${index}]\` **[${track.author} — ${track.title}](${track.url})** був прослуханий **${track.count} ${plural(track.count, 'раз', 'рази', 'разів')}**`,
            COMMAND_ANALYTICS_DISALED: () => 'На цьому сервері вимкнено збір аналітики',

            COMMAND_LAST_EMPTY: () => 'В історії прослуховувань нічого немає',

            ANALYTICS_DESCRIPTION: () => 'Відображає список треків, які слухали на цьому сервері',
            SETTINGS_ANALYTICS_DESCRIPTION: () => 'Керує параметрами аналітики',
            SETTINGS_ANALYTICS_STATUS_DESCRIPTION: () => 'Включає або відключає збір аналітики',
            SETTINGS_ANALYTICS_STATUS_STATE_DESCRIPTION: () => 'Стан',
            SETTINGS_ANALYTICS_RESET_DESCRIPTION: () => 'Скидає всі зібрані дані аналітики на цьому сервері',

            COMMAND_PLAYLIST_LIST_TITLE: () => 'Список ваших плейлистів',
            COMMAND_PLAYLIST_LIST_DESCRIPTION: (size, created) => `Усього ${size} ${plural(size, 'трек', 'треки', 'треків')}, створений <t:${created}:D>`,
            COMMAND_PLAYLIST_LIST_EMPTY: () => 'У вас ще немає плейлистів. Створіть один за допомогою команди `/playlist create`',
            PLAYLIST_NOT_FOUND: () => 'Вказаний плейлист не знайдено.',
            PLAYLIST_RENAME_BUTTON: () => 'Перейменувати',
            PLAYLIST_PRIVACY_BUTTON: () => 'Змінити приватність',
            PLAYLIST_DELETE_BUTTON: () => 'Видалити',
            PLAYLIST_TRACKS_BUTTON: () => 'Cписок треків',
            PLAYLIST_PLAY_BUTTON: () => 'Відтворити',
            PLAYLIST_LINK_BUTTON: () => 'Посилання',
            PLAYLIST_SETTINGS_TITLE: () => 'Налаштування плейлиста',
            PLAYLIST_SETTINGS_PRIVACY: () => 'Виберіть тип приватності для свого плейлиста зі списку нижче',
            PLAYLIST_MODAL_NAME_LABEL: () => 'Назва плейлиста',
            PLAYLIST_MENU_INFO: (name, tracks, privacy, created) => `Плейлист **${name}** має **${tracks} ${plural(tracks, 'трек', 'треки', 'трекік')}**. Тип — \`${privacy}\`. Був створений <t:${created}:D>`,

            DASHBOARD_DESCRIPTION: () => 'Видає посилання на панель керування сервером',
            DASHBOARD_EMBED_TITLE: () => 'Веб-панель',
            DASHBOARD_EMBED_DESCRIPTION: () => 'Ми маємо **зручну та просту** веб-панель, в якій ви зможете налаштувати бота, керувати відтворенням музики, а також додавати свої треки у чергу',
            DASHBOARD_LINK_BUTTON: () => 'Перейти',

            DEEZER_DESCRIPTION: () => 'Шукає треки на платформі Deezer',
            COMMAND_DEEZER_SEARCH_NO_MATCHES: () => 'По вашому запиту нічого не знайдено.',

            CONNECTIONS_DESCRIPTION: () => 'Показує інформацію про підключені інтеграції',
            CONNECTIONS_EMBED_AUTHOR: () => 'Інтеграції',
            CONNECTIONS_EMBED_DESCRIPTION: () => 'Інтегровані плейлисти - це спеціальні плейлисти, які не можна ніяк змінювати, але їх, як і звичайні, можна використовувати. Підключити їх можна у профілі на сайті',
            CONNECTIONS_LINK_BUTTON: () => 'Перейти',

            COMMAND_PLAYLIST_CONNECTION_PROTECTED: () => 'Цей тип взаємодії недоступний для інтеграцій',
            COMMAND_COVER_INVALID_ATTACHMENT: () => 'Встановити на обкладинку плейлиста можна лише зображення',
            COMMAND_COVER_CHANGED: () => 'Обкладинка плейлиста була змінена',

            PLAYLIST_COVER_DESCRIPTION: () => 'Встановлює обкладинку для вказаного плейлиста',
            PLAYLIST_COVER_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_COVER_IMAGE_DESCRIPTION: () => 'Обкладинка',
            
            SETTINGS_STAGE_TOPIC_DESCRIPTION: () => 'Включає або відключає зміну топіка трибуни',
            SETTINGS_STAGE_TOPIC_STATE_DESCRIPTION: () => 'Стан',

            COMMAND_SETTINGS_STAGE_CHANNEL_TOPIC_CHANGE_STATUS_SET: (isEnabled) => `Зміна топіка трибуни була ${isEnabled ? 'увімкнена' : 'вимкнена'} на цьому сервері`,

            PLAYLIST_PLAY_COUNT: () => 'Количество треков',
            PLAYLIST_PLAY_OFFSET: () => 'Начало позиции',

            RADIO_ENABLED: () => 'Неможливо виконати цю дію, оскільки увімкнено режим радіо',

            SETTINGS_AUTOREMOVE_DESCRIPTION: () => 'Встановлює автоматичне видалення повідомлень бота',
            SETTINGS_AUTOREMOVE_STATE_DESCRIPTION: () => 'Стан',
            COMMAND_SETTINGS_AUTOREMOVE_SET: (isEnabled) => `Автоматичне видалення повідомлень бота було ${isEnabled ? 'увімкнено' : 'вимкнено'} на цьому сервері`,

            COMMAND_RECOMMENDATIONS_EMPTY_HISTORY: () => 'Історія прослуханих треків відсутня',
            COMMAND_RECOMMENDATIONS_FAILED: () => 'Не вдалося отримати список рекомендацій, спробуйте пізніше',
            COMMAND_RECOMMENDATIONS_LOADED: (provider, name, size, queueMode) => {
                let res = `${provider} Плейлист **${name} — рекомендації** завантажений у чергу, ${plural(size, `був доданий **${size}** трек`, `було додано **${size}** треки`, `було додано **${size}** треків`)}`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nВиявлено модифікатор режиму черги, треки відтворюватимуться у випадковому порядку';
                        break;

                    case 'single':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор поточного треку';
                        break;

                    case 'queue':
                        res += '\nВиявлено модифікатор режиму черги, встановлюю повтор усієї черги';
                        break;

                    case 'disable':
                        res += '\nВиявлено модифікатор режиму черги, вимикаю режим повтору';
                        break;
                }

                return res;
            }
        }
    }
}