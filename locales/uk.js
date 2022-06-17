const Language = require('@lib/structures/Language'),
    { plural } = require('@lib/Utils');

module.exports = class extends Language {
    constructor() {
        super('uk');

        this.language = {
            LANGUAGE_NAME: () => 'Українська',
            DEFAULT: (key) => `Ключ ${key} ще не переведений на Українську.`,
            MENU_FOOTER_PAGE: () => 'Сторінка ',
            NOTHING_PLAYING: () => 'Зараз нічого не грає.',
            NODES_NOT_AVAILABLE: () => 'На даний момент музика недоступна.',
            NO_MATCHES: () => 'На ваш запит нічого не знайдено.',
            LOAD_FAILED: () => 'Не вдалося завантажити трек.',
            
            PLAYER_CREATE_RETRYING: () => 'Не вдалося приєднатись до голосового каналу. Повторна спроба...',
            PLAYER_CREATE_FAILED: () => 'Не вдалося приєднатись до голосового каналу.',
            PLAYER_RECONNECTING: () => 'З\'єднання було скинуто через те, що сталася невідома помилка. Повторна спроба підключення, зачекайте...',

            MISSING_PERMISSIONS: (err) => `У бота недостатньо прав для виконання команди:\n\`${ err }\``,
         
            QUEUE_LIMIT: (limit) => `Ви не можете додати більше ${limit} ${plural(limit, 'трек', 'треки', 'треків')} у чергу.`,
            QUEUE_LIMIT_INFO: () => `⚠ Не всі треки були завантажені через обмеження максимальної кількості треків у черзі.`,

            COMMAND_BASS_MISSING_PERMISSIONS: () => 'Ви не можете встановити бас-буст. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_BASS_DISABLED: () => '⌛ **Бас-буст вимкнено, зачекайте трохи.**',
            COMMAND_BASS_MINIMUM: () => '⌛ **Встановлено мінімальний рівень бас-бусту. Він буде застосований через декілька секунд, зачекайте.**',
            COMMAND_BASS_MEDIUM: () => '⌛ **Встановлено середній рівень бас-бусту. Він буде застосований через декілька секунд, зачекайте.**',
            COMMAND_BASS_MAXIMUM: () => '⌛ **Встановлено максимальний рівень бас-бусту. Він буде застосований через декілька секунд, зачекайте.**',
            COMMAND_BASS_FULL: () => '⌛ **Встановлено повний рівень бас-бусту. Він буде застосований через декілька секунд, зачекайте.**',

            COMMAND_KARAOKE_MISSING_PERMISSIONS: () => 'Ви не можете встановити karaoke. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_KARAOKE_DISABLED: () => '⌛ **Ефект karaoke вимкнено, зачекайте трохи.**',
            COMMAND_KARAOKE_ENABLED: () => '⌛ **Ефект karaoke увімкнено. Він буде застосований через декілька секунд.**',
            COMMAND_KARAOKE_MONO: () => '⌛ **Ефект karaoke встановлено в режимі моно. Він буде застосований через декілька секунд..**',

            COMMAND_ROTATION_MISSING_PERMISSIONS: () => 'Ви не можете встановити ефект rotation. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_ROTATION_DISABLED: () => '⌛ **Ефект rotation вимкнено, зачекайте трохи.**',
            COMMAND_ROTATION_ENABLED: (speed) => `⌛ **Ефект rotation встановлений на швидкість \`${speed}x\` та буде застосований через декілька секунд.**`,

            COMMAND_NIGHTCORE_MISSING_PERMISSIONS: () => 'Ви не можете встановити nightcore. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_NIGHTCORE_DISABLED: () => '⌛ **Ефект nightcore вимкнено, зачекайте трохи.**',
            COMMAND_NIGHTCORE_SET: (speed) => `⌛ **Ефект nightcore встановлений на темп \`${speed}\` та буде застосований через декілька секунд.**`,
            COMMAND_NIGHTCORE_SLOW: () => '⌛ **Ефект nightcore встановлений на повільний темп та буде застосований через декілька секунд.**',

            COMMAND_PLAY_MISSING_QUERY: () => 'Вкажіть назву або посилання на трек.',
            COMMAND_PLAY_MISSING_PERMISSIONS: () => 'Бот не має права підключатися до цього голосового каналу або говорити в ньому.',
            COMMAND_PLAY_NO_MATCHES: (failed) => {
                if (!failed)
                    return 'По вашому запиту нічого не знайдено.';
                else
                    return 'Не вдалося завантажити плейлист, тому що треки, які знаходяться в ньому, недоступні у країні розташування сервера.';
            },
            COMMAND_PLAY_LOAD_FAILED: () => 'Сталася помилка під час завантаження треку.',
            COMMAND_PLAY_TRACK_LOADED: (provider, name) => `${provider} Трек **${name}** був доданий у чергу.`,
            COMMAND_PLAY_PLAYLIST_LOADED: (provider, size, name, failed) => `${provider} Плейлист **\`${name || 'Невідомий плейлист'}\`** завантажений у чергу (**\`${size}\`** ${plural(size, 'трек', 'треки', 'треків')}).${failed && failed > 1 ? `\n${failed} ${plural(failed, 'трек', 'треки', 'треків')} не було завантажено (у країні розташування сервера вони недоступні). ` : ''}`,
            COMMAND_PLAY_NOW_PLAYING: (provider, name) => `${provider} Зараз грає **${name}**.`,
            COMMAND_PLAY_PLAYLIST_EMPTY: () => 'Не вдалося завантажити плейлист, бо він порожній.',
            COMMAND_PLAY_PLAYLIST_PRIVACY: () => 'Не вдалося завантажити плейлист, бо він приватний.',

            COMMAND_NP_TITLE: (name) => `Наразі програються треки для ${name}`,
            COMMAND_NP_LAST_TRACK: () => '••• Грає останній трек',
            COMMAND_NP_TRACK_COUNT: (count) => `••• ${count} ${plural(count, 'трек', 'треки', 'треків')} у черзі..`,
            COMMAND_NP_DESCRIPTION: (np, volume, bar, position, length) => `Зараз грає **[${np.info.title}](${np.info.uri})**\nДоданий: <@${np.info.requested}>\n\nГучність: ${volume}%\n${bar}\n\`${position} / ${length}\``,
            COMMAND_NP_UPDATE: () => 'Оновити',
            COMMAND_NP_LYRICS: () => 'Текст',

            COMMAND_QUEUE_NOW_PLAYING: (title) => `Зараз грає: ${title}`,
            COMMAND_QUEUE_TITLE: (guild) => `Черга сервера ${guild}`,
            COMMAND_QUEUE_FOOTER: (page, length) => `••• Сторінка: ${page} • ${length} ${plural(length, 'трек лишився', 'треки лишилося', 'треків лишилося')}`,

            COMMAND_SKIP_MISSING_PERMISSIONS: (user) => `Ви не можете пропустити цей трек, попросіть  <@${user}> зробити це.`,
            COMMAND_SKIP_SKIPPED: () => ':track_next: **Трек пропущено.**',

            COMMAND_STOP_MISSING_PERMISSIONS: () => 'Ви не можете зупинити відтворення. Попросіть зробити це учасника з ролью `Dj`',
            COMMAND_STOP_STOPPED: () => ':stop_button: **Бот покинув голосовий канал.**',

            COMMAND_CLEAR_MISSING_PERMISSIONS: () => 'Ви не можете почистити чергу. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_CLEAR_QUEUE_CLEARED: () => '☑️ **Черга почищена.**',

            COMMAND_SEEK_MISSING_PERMISSIONS: () => 'Ви не можете перемотати цей трек. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_SEEK_PARAMS: () => 'Вкажіть позицію для перемотування.',
            COMMAND_SEEK_INVALID_POSITION: () => 'Вказано неправильну позицію для перемотування.',
            COMMAND_SEEK_SEEKED: () => '⏩ **Трек перемотаний.**',

            COMMAND_REPLAY_MISSING_PERMISSIONS: () => 'Ви не можете перемотати цей трек. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_REPLAY_SEEKED: () => 'Програвання треку розпочато з початку.',

            COMMAND_MOVE_MISSING_PERMISSIONS: () => 'Ви не можете перемістити цей трек. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_MOVE_MISSING_POSITIONS: () => 'Вкажіть **номер треку** для переміщення та **нову позицію треку**.',
            COMMAND_MOVE_INDEX: () => 'Вказано неправильну позицію треку для переміщення.',
            COMMAND_MOVE_DESTINATION: () => 'Вказано неправильну нову позицію для переміщення. Вона має бути в межах черги.',
            COMMAND_MOVE_MOVED: (newTrack, oldTrack) => `Трек **${newTrack}** тепер знаходиться на позиції треку **${oldTrack}**.`,

            COMMAND_SHUFFLE_MISSING_PERMISSIONS: () => 'Ви не можете перемішати чергу. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_SHUFFLE_SHUFFLED: () => ':twisted_rightwards_arrows: **Черга перемішана.**',

            COMMAND_PAUSE_MISSING_PERMISSIONS: () => 'Ви не можете зупинити відтворення треків. Попросіть зробити це учасника з ролью `Dj`.`',
            COMMAND_PAUSE_PAUSED: () => ':pause_button: **Плеєр поставлено на паузу.**',

            COMMAND_RESUME_MISSING_PERMISSIONS: () => 'Ви не можете відновити відтворення треків. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_RESUME_RESUMED: () => ':arrow_forward: **Плеєр знято з паузи.**',

            COMMAND_VOLUME_MISSING_PERMISSIONS: () => 'Ви не можете змінити рівень гучності. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_VOLUME_PARAMS: () => 'Вкажіть рівень гучності **(від 0% до 100%)**.',
            COMMAND_VOLUME_CHANGED: (emoji, level) => `${emoji} Гучність встановлена на **${level}%**`,

            COMMAND_VOTESKIP_ALREADY_VOTED: () => 'Ви вже проголосували за пропуск поточного треку.',
            COMMAND_VOTESKIP_VOTED: (votes, need) => `Ви проголосували за пропуск поточного треку. Залишилось ще ${votes} з ${need} голосів.`,
            COMMAND_VOTESKIP_SKIPPED: () => ':track_next: **Трек пропущено.**',

            COMMAND_REMOVE_MISSING_PERMISSIONS: () => 'Ви не можете вилучити цей трек із черги. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_REMOVE_PARAMS: () => 'Вкажіть номер треку, щоб його вилучити з черги.',
            COMMAND_REMOVE_REMOVED: (name) => `Трек **${name}** був вилучений з черги.`,

            COMMAND_LOOP_MISSING_PERMISSIONS: () => 'Ви не можете встановити повторення треків. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_LOOP_PARAMS: () => 'Вкажіть режим повторення: **`off`, `single`, `queue`**',
            COMMAND_LOOP_DISABLED: () => '**Тепер плеєр не повторюватиме треки.**',
            COMMAND_LOOP_QUEUE: () => ':repeat: **Тепер плеєр повторюватиме всю чергу.**',
            COMMAND_LOOP_SINGLE: () => ':repeat_one: **Тепер плеєр повторюватиме тільки поточний трек.**',

            COMMAND_PP_PLAYLIST_NAME: () => 'Вкажіть назву плейлиста.',
            COMMAND_PP_INVALID_PLAYLIST: () => 'Вказаний плейлист не знайдено.',
            COMMAND_PP_PLAYLIST_EMPTY: () => 'Вказаний плейлист порожній.',
            COMMAND_PP_PLAYLIST_LOADED: (provider, name, count) => `${provider} Плейлист **${name}** завантажено (**\`${count}\`** ${plural(count, 'трек', 'треки', 'треків')}).`,
            COMMAND_PP_PUBLIC_LOADED: (provider, name, count) => `${provider} Публічний плейлист **${name}** завантажено (**\`${count}\`** ${plural(count, 'трек', 'треки', 'треків')}).`,

            COMMAND_MYLIST_EMPTY: () => 'У вас ще немає плейлистів.',
            COMMAND_MYLIST_TITLE: () => 'Список ваших плейлистів',
            COMMAND_MYLIST_INFO: (tracks, type, created, id) => `Усього треків: \`${tracks}\`\nТип: \`${type}\`\nСтворений: ${created}\n**[Відкрити](https://lolicon.su/playlist/${id})**`,

            COMMAND_PLAYLIST_NAME: () => 'Вкажіть назву плейлиста.',
            COMMAND_PLAYLIST_INVALID_PLAYLIST: () => 'Вказаний плейлист не знайдено.',
            COMMAND_PLAYLIST_NEW_NAME: () => 'Вкажіть назву нового плейлиста.',
            COMMAND_PLAYLIST_TRACK_INDEX: () => 'Вкажіть номер треку.',
            COMMAND_PLAYLIST_INVALID_TRACK: () => 'Ви вказали неправильний номер треку.',
            COMMAND_PLAYLIST_TRACK_ADDED: (provider, track, name) => `${provider || ''} Трек **${track}** був доданий у плейлист **${name}**.`,
            COMMAND_PLAYLIST_ADDED_PLAYLIST: (provider, name, size) => `${provider} Плейлист завантажений, всі треки були додані в плейлист **${name}**. Усього треків: **${size}**`,
            COMMAND_PLAYLIST_RENAMED: (name, newName) => `Плейлист **${name}** був перейменований в **${newName}**.`,
            COMMAND_PLAYLIST_TRACK_REMOVED: (track, name) => `Трек **${track}** вилучено з плейлиста **${name}**.`,
            COMMAND_PLAYLIST_PRIVACY_CHANGED: (name, type) => `Плейлист **${name}** тепер **${type}**`,
            COMMAND_PLAYLIST_TRACK_LIST: (name) => `Список треків у плейлисті ${name}`,
            COMMAND_PLAYLIST_TRACK_LIST_FOOTER: (page, size) => `••• Сторінка: ${page} • Усього треків у плейлисті: ${size}`,
            COMMAND_PLAYLIST_DUPLICATED_NAME: () => 'Ви не можете використовувати цю назву плейлиста, тому що у вас вже є плейлист з такою назвою.',
            COMMAND_PLAYLIST_EMPTY_PLAYLIST: () => 'Вказаний плейлист порожній.',
            COMMAND_PLAYLIST_INFO_PLACEHOLDER: () => 'Виберіть плейлист',

            COMMAND_CREATE_PLAYLIST_NAME: () => 'Вкажіть назву нового плейлиста.',
            COMMAND_CREATE_LIMITED: (maxPlaylists) => `Ви не можете створити **більше ${maxPlaylists} плейлистів.**`,
            COMMAND_CREATE_DUPLICATED_NAME: () => 'У вас вже є плейлист із такою назвою.',
            COMMAND_CREATE_CREATED: (name) => `Плейлист **${name}** був успішно створений.`,

            COMMAND_DELETE_PLAYLIST_NAME: () => 'Вкажіть назву плейлиста.',
            COMMAND_DELETE_INVALID_PLAYLIST: () => 'Вказаний плейлист не знайдено.',
            COMMAND_DELETE_CONFIRMATION: (name, count) => `Ви дійсно хочете видалити плейлист **${name}**, у якому **${count}** ${plural(count, 'трек', 'треки', 'треків')}?`,
            COMMAND_DELETE_CONFIRMED: (name) => `Плейлист **${name}** був видалений.`,
            COMMAND_DELETE_CANCELLED: () => 'Плейлист не був видалений.',

            COMMAND_LANGUAGE_SUCCESS: () => 'Мова серверу успішно змінена.',

            COMMAND_LIVEPLAYER_INVALID_CHANNEL: () => 'Ви не можете встановити лайвплеєр для цього каналу.',
            COMMAND_LIVEPLAYER_SET: (channel) => `Лайвплеєр встановлений для каналу ${channel}.`,
            COMMAND_LIVEPLAYER_REMOVED: () => 'Лайвплеєр був успішно вимкнений.',

            COMMAND_DJ_INVALID_ROLE: () => 'Ви не можете встановити цю роль.',
            COMMAND_DJ_ROLE_SET: () => 'Роль була успішно встановлена.',

            COMMAND_FILTERS_INFO: (equalizer, karaoke, timescale, rotation) => `**Фільтри:**\n Бас-буст: \`[ ${equalizer.map(x => x.gain).join(', ')} ]\`\nРежим караоке: \`${(karaoke && karaoke.monoLevel !== 1) ? 'Моно' : (karaoke && karaoke.level) !== 1 ? 'Увімкнено' : 'Вимкнено'}\`\nЕфект Nightcore: \`${(timescale && timescale.rate !== 1) ? timescale?.rate + 'x' : 'Вимкнено'}\`\nЕфект rotation: \`${rotation ? rotation.rotationHz + 'x' : 'Вимкнено'}\``,
            COMMAND_FILTERS_FOOTER: () => 'Для скидання всіх параметрів ефектів використовуйте команду /filters clear.',
            COMMAND_FILTERS_CLEARED: () => 'Усі параметри фільтрів було очищено.',

            PLAYLIST_PRIVACY: (i) => {
                return {
                    "private": "Приватний",
                    "public": "Публічний"
                }[i];
            },

            PERMISSIONS: (i) => {
                return {
                    "CREATE_INSTANT_INVITE": "Створювати запрошення",
                    "KICK_MEMBERS": "Блокувати користувачів",
                    "BAN_MEMBERS": "Блокувати користувачів",
                    "ADMINISTRATOR": "Адміністратор",
                    "MANAGE_CHANNELS": "Керувати каналами",
                    "MANAGE_GUILD": "Керувати сервером",
                    "ADD_REACTIONS": "Додавати реакції",
                    "VIEW_AUDIT_LOG": "Дивитися журнал аудиту",
                    "PRIORITY_SPEAKER": "Пріоритетний голос",
                    "STREAM": "Відео",
                    "VIEW_CHANNEL": "Дивитися канали",
                    "SEND_MESSAGES": "Відправляти повідомлення",
                    "SEND_TTS_MESSAGES": "Використовувати повідомлення за допомогою синтезу мовлення",
                    "MANAGE_MESSAGES": "Керувати повідомленнями",
                    "EMBED_LINKS": "Вставляти посилання",
                    "ATTACH_FILES": "Прикріпляти файли",
                    "READ_MESSAGE_HISTORY": "Читати історію повідомлень",
                    "MENTION_EVERYONE": "Згадувати всіх",
                    "USE_EXTERNAL_EMOJIS": "Використовувати сторонні емодзі",
                    "VIEW_GUILD_INSIGHTS": "Дивитися аналітику сервера",
                    "CONNECT": "Під'єднуватися",
                    "SPEAK": "Говорити",
                    "MUTE_MEMBERS": "Вимикати учасникам мікрофон",
                    "DEAFEN_MEMBERS": "Вимикати учасникам звук",
                    "MOVE_MEMBERS": "Перемістити учасників",
                    "USE_VAD": "Використовувати голосову активність",
                    "CHANGE_NICKNAME": "Змінювати нікнейм",
                    "MANAGE_NICKNAMES": "Керувати нікнеймами",
                    "MANAGE_ROLES": "Керувати ролями",
                    "MANAGE_WEBHOOKS": "Керувати вебхуками",
                    "MANAGE_EMOJIS": "Керувати эмодзі"
                }[i];
            },

            IN_VOICE: () => 'Ви повинні знаходитись у голосовому каналі.',
            IN_THE_SAME_VOICE_CHANNEL: () => 'Ви повинні знаходитися в одному голосовому каналі з ботом.',
            OWNER_ONLY: () => 'Ця команда доступна лише власникам бота.',
            MISSING_VOICE_PERMISSIONS: () => 'Бот не має права підключатися до цього голосового каналу або говорити в ньому.',
            MISSING_STAGE_VOICE_PERMISSIONS: () => 'Боту потрібні права модератора на трибуні для програвання музики у цьому каналі.',
            BOT_MISSING_PERMISSIONS: (perms) => `У бота недостатньо прав для виконання цієї команди: ${Array.isArray(perms) && perms.map(x => `**${x}**`).join(', ') || `**${perms}**`}`,
            USER_MISSING_PERMISSIONS: (perms) => `У вас недостатньо прав для виконання цієї команди: ${Array.isArray(perms) && perms.map(x => `**${x}**`).join(', ') || `**${perms}**`}`,
            RULE_MISSING_PERMISSIONS: (target, perms) => `У ${target || 'вас'} недостатньо прав для виконання цієї команди: ${Array.isArray(perms) && perms.map(x => `**${x}**`).join(', ') || `**${perms}**`}`,

            LIVEPLAYER_BUTTON_REMOVE: () => 'Вилучити',
            LIVEPLAYER_BUTTON_MOVE: () => 'Перемістити',

            LIVEPLAYER_FAVORITE_PLAYLISTS_EMPTY: () => 'Ви не можете додати трек до плейлисту, тому що у вас їх немає, або вони заповнені',
            LIVEPLAYER_FAVORITE_SELECT_PLAYLIST: () => 'Виберіть плейлист, до якого хочете додати поточний трек',
            LIVEPLAYER_FAVORITE_SELECT_PLACEHOLDER: () => 'Не вибрано',
            LIVEPLAYER_FAVORITE_PLAYLIST_DESCRIPTION: (songs) => `Має ${songs.length} ${plural(songs.length, 'трек', 'треки', 'треків')}`,
            LIVEPLAYER_FAVORITE_TRACK_NOT_ADDED: () => 'Трек не був доданий у плейлист',
            LIVEPLAYER_REMOVE_EMPTY_QUEUE: () => 'Неможливо вилучити треки з черги, бо вона порожня.',
            LIVEPLAYER_REMOVE_SELECT_TRACK: () => 'Виберіть трек, який потрібно вилучити.',
            LIVEPLAYER_REMOVE_SELECT_PLACEHOLDER: () => 'Не вибрано',
            LIVEPLAYER_REMOVE_TRACK_NOT_REMOVED: () => 'Трек не був вилучений з черги',
            LIVEPLAYER_MOVE_EMPTY_QUEUE: () => 'Неможливо перемістити треки, тому що черга порожня.',
            LIVEPLAYER_MOVE_SELECT_PLACEHOLDER: () => 'Не вибрано',
            LIVEPLAYER_MOVE_SELECT_INDEX: () => 'Виберіть трек, який ви бажаєте перемістити.',
            LIVEPLAYER_MOVE_SELECT_DESTINATION: () => 'Виберіть трек, на який потрібно перемістити вказаний трек.',
            LIVEPLAYER_MOVE_NOT_MOVED: () => 'Трек не був переміщений.',

            LIVEPLAYER_EMBED_TITLE: (name) => `Плеєр для сервера ${name}`,
            LIVEPLAYER_EMBED_DESCRIPTION: (np, queueText) => `Зараз грає [${np.info.title}](${np.info.uri || 'https://lolicon.su'})\nДоданий: <@${np.info.requested}>\n\n**Список треків у черзі:**\n${queueText.length ? queueText : 'Черга порожня...'}`,
            NOTHING_PLAYING_TOPIC: () => 'Нічого не грає',

            COMMAND_FILTERS_CLEAR_MISSING_PERMISSIONS: () => 'Ви не можете скинути параметри фільтрів. Попросіть зробити це учасника з ролью `Dj`.',
            COMMAND_FILTERS_CLEAR_CLEARED: () => 'Усі параметри фільтрів було очищено',

            COMMAND_STATS_INFORMATION: (guilds, users, memoryUsage, shardId) => `Серверів: \`${guilds}\`\nКористувачів: \`${users}\`\nВикористовується пам'яті: \`${memoryUsage} MB\`\n\n**Сервер знаходиться на шарді \`#${shardId}\`**`,
            COMMAND_STATS_MUSIC_NODE_INFORMATION: (players, playingPlayers, memoryUsage, uptime) => `Усього плеєрів: \`${players}\`\nГрає: \`${playingPlayers}\`\nВикористовується пам'яті: \`${memoryUsage} MB\`\n **Запущено <t:${uptime}:R>**`,

            COMMAND_LYRICS_TRACK_NOT_FOUND: () => 'Не вдалось знайти пісню.',
            COMMAND_LYRICS_FAILED: () => 'Не вдалось отримати текст пісні.',

            PREMIUM_GUILDS_ONLY: () => 'Ця команда доступна лише для преміум серверів або користувачів. Щоб отримати преміум підписку, перегляньте інформацію в команді \`/premium info\`.\n\nЯкщо у вас немає можливості оформити підписку, ви можете отримати 12 годин преміуму, проголосувавши за робота на [моніторингу](https:\/\/top.gg/bot/661765685017575424/vote).',
            COMMAND_RADIO_LOAD_FAILED: () => 'Неможливо завантажити вказану радіостанцію. Спробуйте ще раз.',
            COMMAND_RADIO_STREAM_LOADED: (name) => `Радіостанція **${name}** додана в чергу.`,
            COMMAND_RADIO_NOW_PLAYING: (name) => `Наразі грає радіостанція **${name}**.`,
            COMMAND_RADIO_SELECT: (name) => `Виберіть радіостанцію **\`${name}\`** зі списку нижче:`,
            COMMAND_RADIO_SELECT_PLACEHOLDER: () => 'Виберіть радіостанцію',
            COMMAND_RADIO_SELECTION_CANCELLED: () => 'Дія скасована.',

            COMMAND_PREMIUM_NOT_AVAILABLE: () => 'У вас немає доступних активацій преміуму для серверів.',
            COMMAND_PREMIUM_ALREADY_ACTIVATED: (ends) => `На сервері вже активовано преміум, який закінчиться <t:${ends}>.`,
            COMMAND_PREMIUM_ACTIVATED: () => 'Ви успішно активували преміум підписку на цьому сервері на місяць.',
            COMMAND_PREMIUM_INFO_TITLE: () => 'Інформація про підписку',
            COMMAND_PREMIUM_INFORMATION: () => `Купуючи преміум підписку, Ви підтримуєте роботу бота, а також отримуєте можливість користуватися преміум функціоналом.\n\n**Список можливостей:**\n\`\`\`md\n# Команда radio, яка дозволяє відтворити вказану радіостанцію\n# Команда для керування ефектами музичного відтворення\n# Максимальна кількість треків у черзі буде збільшена з 300 до 500 треків.\n# Бот не залишатиме голосовий канал у разі виходу всіх людей із нього.\`\`\`\n\nМісяць преміум підписки коштує 2$. Задонатити будь-яку суму можна на будь-який гаманець/сервіс зі списку нижче:\n\nhttps://donatello.to/shizofreniya\nhttps://patreon.com/YukikazeMusic\n\n**\`BTC - bc1qycprjtwgtgaaqppyr9lw6c50ga8kmm7x7axx9w\`**\n**\`ETH - 0xC3BBD91D59eB547e9164236622D16Cc4Cb2A57B8\`**\n**\`BNB - bnb1razwujhxln4ze6dkzxr543tvr6uju40t6k64qn\`**\n**\`LTC - LVpyzEEShshePXQQQksiTRZKg2gP64TNp4\`**\n\nПеред тим, як задонатити, відпишіть в ПП (\`shizofreniya.#2233\`), щоб отримати преміум у боті. Якщо у вас немає можливості оформити підписку, ви можете отримати 12 годин преміуму, проголосувавши за бота на **[моніторингу](https://top.gg/bot/661765685017575424/vote)**.\n`,
            COMMAND_PREMIUM_AVAILABLE_SUBSCRIPTIONS: (count) => `\nВи маєте **\`${count}\`** доступних активацій. Використовуйте **\`/premium activate\`** для активації преміум-функцій на вашому сервері.`,
            COMMAND_PREMIUM_GUILD_ENDS: (ends) => `\n**На вашому сервері активована преміум підписка, яка закінчиться <t:${ends}>.**`,
            COMMAND_PREMIUM_USER_ENDS: (ends) => `\n**У вас активована преміум підписка, яка закінчиться <t:${ends}>.**`,

            COMMAND_VK_USER_USER_NOT_FOUND: () => 'Користувач не був знайдений, перевірте вказаний айді.',
            COMMAND_VK_USER_TRACKS_NOT_LOADED: () => 'Не вдалося завантажити треки, спробуйте змінити налаштування приватності.',
            COMMAND_VK_USER_LOADED: (provider, name, size, failed) => `${provider} Плейлист **\`${name || 'Невідомий плейлист'}\`** завантажений у чергу (**\`${size}\`** ${plural(size, 'трек', 'треки', 'треків')}).${failed && failed > 1 ? `\n${failed} ${plural(failed, 'трек', 'треки', 'треків')} не було завантажено (у країні розташування сервера вони недоступні). ` : ''}`,
            COMMAND_VK_SEARCH_NO_MATCHES: () => 'По вашому запиту нічого не знайдено.',
            COMMAND_SOUNDCLOUD_SEARCH_NO_MATCHES: () => 'По вашому запиту нічого не знайдено.',
            COMMAND_YANDEX_SEARCH_NO_MATCHES: () => 'По вашому запиту нічого не знайдено.',

            COMMAND_SETTINGS_INFO_TITLE: (name) => `Параметри сервера ${name}`,
            COMMAND_SETTINGS_INFO_DESCRIPTION: (language, djRoleID, liveplayerChannelID) => `Мова: **\`${language}\`**\nРоль DJ: ${djRoleID ? `<@&${djRoleID}>` : '**\`Не встановлена\`**'}\nЛайвплеєр: ${liveplayerChannelID ? `<#${liveplayerChannelID}>` : '**\`Не встановлений\`**'}`,

            COMMAND_ZVUK_SEARCH_NO_MATCHES: () => 'По вашому запиту нічого не знайдено.',

            FILTERS_INFO_DESCRIPTION: () => 'Показує параметри ефектів.',
            FILTERS_CLEAR_DESCRIPTION: () => 'Скидає всі встановлені параметри ефектів',
            FILTERS_BASS_DESCRIPTION: () => 'Додає бас-буст для поточного відтворення.',
            FILTERS_BASS_MODE_DESCRIPTION: () => 'Режим бас-бусту',
            FILTERS_KARAOKE_DESCRIPTION: () => 'Вмикає режим караоке для поточного відтворення.',
            FILTERS_KARAOKE_MODE_DESCRIPTION: () => 'Режим караоке',
            FILTERS_ROTATION_DESCRIPTION: () => 'Додає ефекту rotation для поточного відтворення.',
            FILTERS_ROTATION_MODE_DESCRIPTION: () => 'Режим rotation',

            LOOP_DESCRIPTION: () => 'Перемикає режим повторення для поточного відтворення.',
            LOOP_MODE_DESCRIPTION: () => 'Режим',

            LYRICS_DESCRIPTION: () => 'Шукає текст для поточної або вказаної пісні.',
            LYRICS_NAME_DESCRIPTION: () => 'Назва пісні',

            NP_DESCRIPTION: () => 'Надає інформацію про поточне відтворення.',

            PAUSE_DESCRIPTION: () => 'Ставить плеєр на паузу.',

            PING_DESCRIPTION: () => 'Показує пінг бота.',

            PLAY_DESCRIPTION: () => 'Шукає трек за вказаним запитом або посиланням.',
            PLAY_QUERY_DESCRIPTION: () => 'Запит',

            PREMIUM_ACTIVATE_DESCRIPTION: () => 'Активує преміум підписку на сервері.',
            PREMIUM_INFO_DESCRIPTION: () => 'Показує інформацію про преміум підписку.',

            PLAYLIST_LIST_DESCRIPTION: () => 'Показує список ваших плейлистів.',
            PLAYLIST_CREATE_DESCRIPTION: () => 'Створює плейлист із вказаною вами назвою.',
            PLAYLIST_CREATE_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_DELETE_DESCRIPTION: () => 'Видаляє плейлист із вказаною вами назвою.',
            PLAYLIST_DELETE_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_PLAY_DESCRIPTION: () => 'Відтворює вказаний вами плейлист.',
            PLAYLIST_PLAY_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_INFO_DESCRIPTION: () => 'Показує список треків у вашому плейлисті.',
            PLAYLIST_INFO_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_INFO_PAGE_DESCRIPTION: () => 'Сторінка',
            PLAYLIST_ADD_DESCRIPTION: () => 'Додає трек у ваш плейлист.',
            PLAYLIST_ADD_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_ADD_QUERY_DESCRIPTION: () => 'Запит',
            PLAYLIST_REMOVE_DESCRIPTION: () => 'Видаляє трек з вашого плейлиста.',
            PLAYLIST_REMOVE_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_REMOVE_INDEX_DESCRIPTION: () => 'Номер трека',
            PLAYLIST_RENAME_DESCRIPTION: () => 'Змінює назву вашого плейлиста.',
            PLAYLIST_RENAME_NAME_DESCRIPTION: () => 'Назва плейлиста',
            PLAYLIST_RENAME_NEW_DESCRIPTION: () => 'Нова назва плейлиста',
            PLAYLIST_PUBLIC_DESCRIPTION: () => 'Змінює параметри приватності вашого плейлиста.',
            PLAYLIST_PUBLIC_NAME: () => 'Назва плейлиста',
            PLAYLIST_PUBLIC_PRIVACY: () => 'Приватність плейлиста',

            QUEUE_LIST_DESCRIPTION: () => 'Видає чергу для цього сервера.',
            QUEUE_LIST_PAGE_DESCRIPTION: () => 'Сторінка',
            QUEUE_REMOVE_DESCRIPTION: () => 'Прибирає вказаний трек із черги.',
            QUEUE_REMOVE_INDEX_DESCRIPTION: () => 'Номер трека',
            QUEUE_MOVE_DESCRIPTION: () => 'Переміщує треки у черзі.',
            QUEUE_MOVE_INDEX_DESCRIPTION: () => 'Позиція трека',
            QUEUE_MOVE_DESTINATION_DESCRIPTION: () => 'Новая позиція трека',

            RADIO_DESCRIPTION: () => 'Додає у чергу вказану радіостанцію.',
            RADIO_STATION_DESCRIPTION: () => 'Радіостанція',
            
            REPLAY_DESCRIPTION: () => 'Починає програвати трек із самого початку.',

            RESUME_DESCRIPTION: () => 'Знімає плеєр із паузи.',

            SOUNDCLOUD_SEARCH_DESCRIPTION: () => 'Шукає треки на SoundCloud.',
            SOUNDCLOUD_SEARCH_QUERY_DESCRIPTION: () => 'Запит',

            SEEK_DESCRIPTION: () => 'Перемотує трек на вказану позицію.',
            SEEK_TIME_DESCRIPTION: () => 'Час',

            SETTINGS_INFO_DESCRIPTION: () => 'Показує встановлені параметри.',
            SETTINGS_LANGUAGE_DESCRIPTION: () => 'Змінює мову бота.',
            SETTINGS_LANGUAGE_LANG_DESCRIPTION: () => 'Мова',
            SETTINGS_DJ_DESCRIPTION: () => 'Встановлює роль DJ.',
            SETTINGS_DJ_ROLE_DESCRIPTION: () => 'Роль',
            SETTINGS_LIVEPLAYER_SET_DESCRIPTION: () => 'Встановлює канал для лайвплеєра.',
            SETTINGS_LIVEPLAYER_SET_CHANNEL_DESCRIPTION: () => 'Канал',
            SETTINGS_LIVEPLAYER_CREATE_DESCRIPTION: () => 'Створює канал для лайвплеєра.',
            SETTINGS_LIVEPLAYER_REMOVE_DESCRIPTION: () => 'Прибирає канал лайвплеєра.',

            SHUFFLE_DESCRIPTION: () => 'Перемішує треки у черзі.',

            SKIP_DESCRIPTION: () => 'Пропускає поточний трек.',
            
            STATS_DESCRIPTION: () => 'Показує статистику бота.',

            STOP_DESCRIPTION: () => 'Зупиняє відтворення музики для цього сервера.',
            CLEAR_DESCRIPTION: () => 'Чистить чергу.',

            VK_USER_DESCRIPTION: () => 'Програє вказану кількість збережених треків вказаного користувача в VK.',
            VK_USER_USER_DESCRIPTION: () => 'ID користувача',
            VK_USER_COUNT_DESCRIPTION: () => 'Кількість треків',
            VK_USER_OFFSET_DESCRIPTION: () => 'Початок позиції',

            VK_SEARCH_DESCRIPTION: () => 'Шукає треки в VK.',
            VK_SEARCH_QUERY_DESCRIPTION: () => 'Запит',

            VOLUME_DESCRIPTION: () => 'Изменяет уровень громкости для этого сервера.',
            VOLUME_LEVEL_DESCRIPTION: () => 'Гучність',

            VOTESKIP_DESCRIPTION: () => 'Проголосувати за пропуск поточного треку.',

            YANDEX_SEARCH_DESCRIPTION: () => 'Шукає треки на Yandex.Music.',
            YANDEX_SEARCH_QUERY_DESCRIPTION: () => 'Запит',

            COMMAND_ZVUK_SEARCH_DESCRIPTION: () => 'Шукає треки на платформі Zvuk',
            COMMAND_ZVUK_SEARCH_QUERY_DESCRIPTION: () => 'Запит',

            COMMAND_SETTINGS_ANALYTICS_RESET: () => 'Уся зібрана аналітика на цьому сервері була успішно скинута.',
            COMMAND_SETTINGS_ANALYTICS_SET: (isEnabled) => `Збір аналітики ${isEnabled ? 'включений' : 'відключений'} на цьому сервері.`,

            COMMAND_ANALYTICS_TITLE: () => 'Інформація про прослухані треки на цьому сервері',
            COMMAND_ANALYTICS_LISTENED: () => '**Історія прослуховувань:**\n',
            COMMAND_ANALYTICS_TOP: () => 'Найчастіше прослуховуються:',
            COMMAND_ANALYTICS_INFO: (size, length) => `Усього на цьому сервері прослухали ${size} ${plural(size, 'трек', 'треки', 'треків')} загальною довжиною ${length}.`,
            COMMAND_ANALYTICS_TRACK: (index, track) => `\`[${index}]\` **[${track.author} — ${track.title}](${track.url})** був прослуханий **${track.count} ${plural(track.count, 'раз', 'рази', 'разів')}**`,

            COMMAND_ANALYTICS_DESCRIPTION: () => 'Відображає список треків, які слухали на цьому сервері.',
            COMMAND_SETTINGS_ANALYTICS_DESCRIPTION: () => 'Керує параметрами аналітики',
            COMMAND_SETTINGS_ANALYTICS_STATUS_DESCRIPTION: () => 'Включає або відключає збір аналітики',
            COMMAND_SETTINGS_ANALYTICS_STATUS_STATE_DESCRIPTION: () => 'Стан',
            COMMAND_SETTINGS_ANALYTICS_RESET_DESCRIPTION: () => 'Скидає всі зібрані дані аналітики на цьому сервері'
        }
    }
}