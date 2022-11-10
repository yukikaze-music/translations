const Language = require('@lib/structures/Language'),
    { plural } = require('@lib/Utils');

module.exports = class extends Language {
    constructor() {
        super('ru-RU');

        this.language = {
            LANGUAGE_NAME: () => 'Русский',
            DEFAULT: (key) => `Ключ ${key} ещё не переведён на Русский.`,

            DISABLED_PLATFORM: () => '<:tmNekoCute:1020279802441236520> Воспрозведение музыки на этой платформе недоступно, аналогичный запрос будет выполнен на другой платформе.',

            MENU_FOOTER_PAGE: () => 'Страница ',
            NOTHING_PLAYING: () => 'Сейчас ничего не играет',
            NODES_NOT_AVAILABLE: () => 'На данный момент музыка недоступна.',
            NO_MATCHES: () => 'По вашему запросу ничего не найдено.',
            LOAD_FAILED: () => 'Загрузка трека не удалась, пропускаю.',
            QUERY_LOAD_FAILED: (message) => `При обработке запроса произошла ошибка:\n\`\`\`asciidoc\n- ${message}\`\`\``,

            PLAYER_CREATE_FAILED: () => 'Не удалось подключиться к голосовому каналу.',
            PLAYER_DISCONNECTED: () => 'Соединение было сброшено из-за того, что произошла неизвестная ошибка во время воспроизведения или меня отключили от голосового канала.',

            QUEUE_LIMIT: (limit) => `Вы не можете загрузить больше ${limit} ${plural(limit, 'трек', 'трека', 'треков')} в очередь.`,
            QUEUE_LIMIT_INFO: () => `⚠ Не все треки были загружены из-за ограничения количества загрузки треков в очередь.`,

            COMMAND_BASS_MISSING_PERMISSIONS: () => 'Вы не можете установить басс-буст. Попросите сделать это участника с ролью `Dj`',
            COMMAND_BASS_DISABLED: () => '⌛ **Басс-буст отключен, подождите немного.**',
            COMMAND_BASS_MINIMUM: () => '⌛ **Установлен минимальный уровень басс-буста. Он будет применен через пару секунд, подождите.**',
            COMMAND_BASS_MEDIUM: () => '⌛ **Установлен средний уровень басс-буста. Он будет применен через пару секунд, подождите.**',
            COMMAND_BASS_MAXIMUM: () => '⌛ **Установлен максимальный уровень басс-буста. Он будет применен через пару секунд, подождите.**',
            COMMAND_BASS_FULL: () => '⌛ **Установлен полный уровень басс-буста. Он будет применен через пару секунд, подождите.**',

            COMMAND_KARAOKE_MISSING_PERMISSIONS: () => 'Вы не можете установить режим karaoke. Попросите сделать это участника с ролью `Dj`',
            COMMAND_KARAOKE_DISABLED: () => '⌛ **Эффект karaoke отключен, подождите немного.**',
            COMMAND_KARAOKE_ENABLED: () => '⌛ **Эффект karaoke включен и будет применен через пару секунд.**',
            COMMAND_KARAOKE_MONO: () => '⌛ **Эффект karaoke включен в режиме `mono` и будет применен через пару секунд..**',

            COMMAND_ROTATION_MISSING_PERMISSIONS: () => 'Вы не можете установить эффект rotation. Попросите сделать это участника с ролью `Dj`',
            COMMAND_ROTATION_DISABLED: () => '⌛ **Эффект rotation отключен, подождите немного.**',
            COMMAND_ROTATION_ENABLED: (speed) => `⌛ **Эффект rotation установлен на скорость \`${speed}x\` и будет применен через пару секунд.**`,

            COMMAND_NIGHTCORE_MISSING_PERMISSIONS: () => 'Вы не можете установить nightcore. Попросите сделать это участника с ролью `Dj`',
            COMMAND_NIGHTCORE_DISABLED: () => '⌛ **Эффект nightcore отключен, подождите немного.**',
            COMMAND_NIGHTCORE_SET: (speed) => `⌛ **Эффект nightcore установлен на темп \`${speed}\` и будет применен через пару секунд.**`,
            COMMAND_NIGHTCORE_SLOW: () => '⌛ **Эффект nightcore установлен на медленный темп и будет применен через пару секунд.**',

            COMMAND_EQUALIZER_MISSING_PERMISSIONS: () => 'Вы не можете установить пресет для эквалайзера. Попросите сделать это участника с ролью `Dj`',
            COMMAND_EQUALIZER_SET: () => '⌛ **Пресет для эквайзера установлен, подождите немного.**',

            COMMAND_PLAY_MISSING_QUERY: () => 'Укажите название трека или ссылку на трек.',
            COMMAND_PLAY_NO_MATCHES: (failed) => {
                if (!failed)
                    return 'По вашему запросу ничего не найдено.';
                else
                    return 'Не удалось загрузить плейлист, потому что треки, которые находятся в нем, недоступны в стране расположения сервера.';
            },

            COMMAND_PLAY_LOAD_FAILED: () => 'Произошла ошибка при загрузке трека.',
            COMMAND_PLAY_TRACK_LOADED: (provider, name, queueMode)  => {
                let res = `${provider} Трек **${name}** был добавлен в очередь.`;

                switch(queueMode) {
                    case 'shuffle':
                        res += '\nОбнаружен модификатор режима очереди, треки будут воспроизводиться в случайном порядке.';
                        break;

                    case 'single':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор текущего трека.';
                        break;

                    case 'queue':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор всей очереди.';
                        break;

                    case 'disable':
                        res += '\nОбнаружен модификатор режима очереди, отключаю режим повтора.';
                        break;
                }

                return res;
            },

            COMMAND_PLAY_PLAYLIST_LOADED: (provider, size, name, failed, queueMode) => {
                let res = `${provider} Плейлист **${name || 'Неизвестный плейлист'}** загружен в очередь, ${plural(size, `был добавлен **${size}** трек`, `было добавлено **${size}** трека`, `было добавлено **${size}** треков`)}.${failed && failed > 1 ? `\n${failed} ${plural(failed, 'трек', 'трека', 'треков')} не было загружено (в стране расположения сервера они недоступны). ` : ''}`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nОбнаружен модификатор режима очереди, треки будут воспроизводиться в случайном порядке.';
                        break;

                    case 'single':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор текущего трека.';
                        break;

                    case 'queue':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор всей очереди.';
                        break;

                    case 'disable':
                        res += '\nОбнаружен модификатор режима очереди, отключаю режим повтора.';
                        break;
                }

                return res;
            },

            COMMAND_PLAY_NOW_PLAYING: (provider, name, queueMode) => {
                let res = `${provider} Сейчас играет **${name}**`;

                switch(queueMode) {
                    case 'shuffle':
                        res += '\nОбнаружен модификатор режима очереди, треки будут воспроизводиться в случайном порядке.';
                        break;

                    case 'single':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор текущего трека.';
                        break;

                    case 'queue':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор всей очереди.';
                        break;

                    case 'disable':
                        res += '\nОбнаружен модификатор режима очереди, отключаю режим повтора.';
                        break;
                }

                return res;
            },

            COMMAND_PLAY_PLAYLIST_EMPTY: () => 'Не удалось загрузить плейлист, потому что он пустой.',
            COMMAND_PLAY_PLAYLIST_PRIVACY: () => 'Не удалось загрузить плейлист, потому что он приватный.',

            COMMAND_NP_TITLE: (name) => `Сейчас проигрываются треки для ${name}`,
            COMMAND_NP_LAST_TRACK: () => '••• Играет последний трек',
            COMMAND_NP_NODE: (name, load) => `Трек воспроизводится на музыкальной ноде ${name} (${load}%)`,
            COMMAND_NP_TRACK_COUNT: (count) => `••• ${count} ${plural(count, 'трек', 'трека', 'треков')} в очереди..`,
            COMMAND_NP_DESCRIPTION: (np, volume, bar, position, length, queueLength) => `Сейчас играет **[${np.info.title}](${np.info.uri})**\nЗапрос от: <@${np.info.requested}>\n\nГромкость: ${volume}%\n${bar}\n\`[${position} / ${length}] • [${position} / ${queueLength}]\``,
            COMMAND_NP_UPDATE: () => 'Обновить',
            COMMAND_NP_LYRICS: () => 'Текст',

            COMMAND_QUEUE_NOW_PLAYING: (title) => `Сейчас играет: ${title}`,
            COMMAND_QUEUE_TITLE: (guild) => `Очередь сервера ${guild}`,
            COMMAND_QUEUE_FOOTER: (page, length) => `••• Страница: ${page} • ${length} ${plural(length, 'трек остался', 'трека осталось', 'треков осталось')}`,

            COMMAND_SKIP_MISSING_PERMISSIONS: (user) => `Вы не можете пропустить этот трек, попросите <@${user}> сделать это.`,
            COMMAND_SKIP_SKIPPED: () => ':track_next: **Трек пропущен.**',

            COMMAND_STOP_MISSING_PERMISSIONS: () => 'Вы не можете остановить воспроизведение. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_STOP_STOPPED: () => ':stop_button: **Бот покинул голосовой канал.**',

            COMMAND_CLEAR_MISSING_PERMISSIONS: () => 'Вы не можете почистить очередь. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_CLEAR_QUEUE_CLEARED: () => '**Очередь очищена.**',

            COMMAND_SEEK_MISSING_PERMISSIONS: () => 'Вы не можете перемотать этот трек. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_SEEK_PARAMS: () => 'Укажите позицию для перемотки.',
            COMMAND_SEEK_INVALID_POSITION: () => 'Указана неверная позиция для перемотки.',
            COMMAND_SEEK_SEEKED: () => '⏩ **Трек перемотан.**',

            COMMAND_REPLAY_MISSING_PERMISSIONS: () => 'Вы не можете перемотать этот трек. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_REPLAY_SEEKED: () => 'Проигрывание трека начато с начала.',

            COMMAND_MOVE_MISSING_PERMISSIONS: () => 'Вы не можете переместить этот трек. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_MOVE_INDEX: () => 'Указана неверная позиция трека для перемещения.',
            COMMAND_MOVE_DESTINATION: () => 'Указана неверная новая позиция для перемещения. Она должна быть в пределах очереди.',
            COMMAND_MOVE_MOVED: (newTrack, oldTrack) => `Трек **${newTrack}** теперь находится на позиции трека **${oldTrack}**.`,

            COMMAND_SHUFFLE_MISSING_PERMISSIONS: () => 'Вы не можете перемешать очередь. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_SHUFFLE_SHUFFLED: () => ':twisted_rightwards_arrows: **Очередь перемешана.**',

            COMMAND_PAUSE_MISSING_PERMISSIONS: () => 'Вы не можете остановить воспроизведение треков. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_PAUSE_PAUSED: () => ':pause_button: **Плеер поставлен на паузу.**',

            COMMAND_RESUME_MISSING_PERMISSIONS: () => 'Вы не можете возобновить воспроизведение треков. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_RESUME_RESUMED: () => ':arrow_forward: **Плеер снят с паузы.**',

            COMMAND_VOLUME_MISSING_PERMISSIONS: () => 'Вы не можете изменить уровень громкости. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_VOLUME_CHANGED: (emoji, level) => `${emoji} Громкость установлена на **${level}%**`,

            COMMAND_VOTESKIP_ALREADY_VOTED: () => 'Вы уже прогосовали за пропуск текущего трека.',
            COMMAND_VOTESKIP_VOTED: (votes, need) => `Вы проголосовали за пропуск текущего трека. Осталось еще ${votes} из ${need} голосов.`,
            COMMAND_VOTESKIP_SKIPPED: () => ':track_next: **Трек пропущен.**',

            COMMAND_REMOVE_MISSING_PERMISSIONS: () => 'Вы не можете удалить этот трек из очереди. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_REMOVE_PARAMS: () => 'Укажите номер трека для его удаления из очереди.',
            COMMAND_REMOVE_REMOVED: (name) => `Трек **${name}** был удален из очереди.`,
            COMMAND_REMOVE_RANGE_REMOVED: (count) => `С очереди было удалено **${count}** ${plural(count, 'трек', 'трека', 'треков')}.`,

            COMMAND_LOOP_MISSING_PERMISSIONS: () => 'Вы не можете установить повторение треков. Попросите сделать это участника с ролью `Dj`.',
            COMMAND_LOOP_DISABLED: () => '**Теперь плеер не будет повторять треки.**',
            COMMAND_LOOP_QUEUE: () => ':repeat: **Теперь плеер будет повторять всю очередь.**',
            COMMAND_LOOP_SINGLE: () => ':repeat_one: **Теперь плеер будет повторять текущий трек.**',
            COMMAND_LOOP_SHUFFLE: () => '🔀 **Теперь треки будут проигрываться в случайном порядке.**',

            COMMAND_PP_PLAYLIST_NAME: () => 'Укажите название плейлиста.',
            COMMAND_PP_INVALID_PLAYLIST: () => 'Указанный плейлист не был найден.',
            COMMAND_PP_PLAYLIST_EMPTY: () => 'Указанный плейлист пустой.',
            COMMAND_PP_PLAYLIST_LOADED: (provider, name, count, queueMode) => {
                let res = `${provider} Пользовательский плейлист **${name}** загружен в очередь, ${plural(count, `был добавлен **${count}** трек`, `было добавлено **${count}** трека`, `было добавлено **${count}** треков`)}.`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nОбнаружен модификатор режима очереди, треки будут воспроизводиться в случайном порядке.';
                        break;

                    case 'single':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор текущего трека.';
                        break;

                    case 'queue':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор всей очереди.';
                        break;

                    case 'disable':
                        res += '\nОбнаружен модификатор режима очереди, отключаю режим повтора.';
                        break;
                }

                return res;
            },

            COMMAND_PP_PUBLIC_LOADED: (provider, name, count, queueMode) => {
                let res = `${provider} Публичный плейлист **${name}** загружен в очередь, ${plural(count, `был добавлен **${count}** трек`, `было добавлено **${count}** трека`, `было добавлено **${count}** треков`)}.`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nОбнаружен модификатор режима очереди, треки будут воспроизводиться в случайном порядке.';
                        break;

                    case 'single':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор текущего трека.';
                        break;

                    case 'queue':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор всей очереди.';
                        break;

                    case 'disable':
                        res += '\nОбнаружен модификатор режима очереди, отключаю режим повтора.';
                        break;
                }

                return res;
            },

            COMMAND_PLAYLIST_NAME: () => 'Укажите название плейлиста.',
            COMMAND_PLAYLIST_INVALID_PLAYLIST: () => 'Указанный плейлист не найден.',
            COMMAND_PLAYLIST_NEW_NAME: () => 'Укажите название нового плейлиста.',
            COMMAND_PLAYLIST_TRACK_INDEX: () => 'Укажите номер трека.',
            COMMAND_PLAYLIST_INVALID_TRACK: () => 'Вы указали неверный номер трека.',
            COMMAND_PLAYLIST_TRACK_ADDED: (provider, track, name) => `${provider || ''} Трек **${track}** был добавлен в плейлист **${name}**.`,
            COMMAND_PLAYLIST_ADDED_PLAYLIST: (provider, name, size) => `${provider} Плейлист загружен, все треки были добавлены в плейлист **${name}**. Всего треков: **${size}**`,
            COMMAND_PLAYLIST_RENAMED: (name, newName) => `Плейлист **${name}** был переименован в **${newName}**.`,
            COMMAND_PLAYLIST_TRACK_REMOVED: (track, name) => `Трек **${track}** удален из плейлиста **${name}**.`,
            COMMAND_PLAYLIST_PRIVACY_CHANGED: (name, type) => `Плейлист **${name}** теперь **${type}**`,
            COMMAND_PLAYLIST_TRACK_LIST: (name) => `Список треков в плейлисте ${name}`,
            COMMAND_PLAYLIST_TRACK_LIST_FOOTER: (page, size) => `••• Страница: ${page} • Всего треков в плейлисте: ${size}`,
            COMMAND_PLAYLIST_DUPLICATED_NAME: () => 'Вы не можете использовать это название плейлиста, потому что у вас уже есть плейлист с таким названием.',
            COMMAND_PLAYLIST_EMPTY_PLAYLIST: () => 'Указанный плейлист пустой.',
            COMMAND_PLAYLIST_INFO_PLACEHOLDER: () => 'Выберите плейлист',
            
            COMMAND_CREATE_PLAYLIST_NAME: () => 'Укажите название нового плейлиста.',
            COMMAND_CREATE_LIMITED: (maxPlaylists) => `Вы не можете создать **больше ${maxPlaylists} плейлистов.**`,
            COMMAND_CREATE_DUPLICATED_NAME: () => 'У вас уже есть плейлист с таким названием.',
            COMMAND_CREATE_CREATED: (name) => `Плейлист **${name}** был успешно создан.`,

            COMMAND_DELETE_PLAYLIST_NAME: () => 'Укажите название плейлиста.',
            COMMAND_DELETE_INVALID_PLAYLIST: () => 'Указанный плейлист не был найден.',
            COMMAND_DELETE_CONFIRMATION: (name, count) => `Вы действительно хотите удалить плейлист **${name}**, в котором **${count}** ${plural(count, 'трек', 'трека', 'треков')}?`,
            COMMAND_DELETE_CONFIRMED: (name) => `Плейлист **${name}** был удален.`,
            COMMAND_DELETE_CANCELLED: () => 'Плейлист не был удален.',

            COMMAND_LANGUAGE_SUCCESS: () => 'Язык сервера успешно изменен.',

            COMMAND_LIVEPLAYER_INVALID_CHANNEL: () => 'Вы не можете установить лайвплеер для этого канала.',
            COMMAND_LIVEPLAYER_SET: (channel) => `Лайвплеер установлен для канала ${channel}.`,
            COMMAND_LIVEPLAYER_REMOVED: () => 'Лайвплеер был успешно отключен.',

            COMMAND_DJ_INVALID_ROLE: () => 'Вы не можете установить эту роль.',
            COMMAND_DJ_ROLE_SET: () => 'Роль была успешно установлена.',

            COMMAND_EFFECTS_INFO: (equalizer, karaoke, timescale, rotation) => `**Эффекты:**\n Басс-буст: \`[ ${equalizer.map(x => x.gain).join(', ')} ]\`\nРежим караоке: \`${(karaoke && karaoke.monoLevel !== 1) ? 'Моно' : (karaoke && karaoke.level) !== 1 ? 'Включено' : 'Отключено'}\`\nNightcore: \`${(timescale && timescale.rate !== 1) ? timescale?.rate + 'x' : 'Отключен'}\`\nRotation: \`${rotation ? rotation.rotationHz + 'x' : 'Отключен'}\``,
            COMMAND_EFFECTS_FOOTER: () => 'Для сброса всех эффектов используйте команду /effects clear.',
            COMMAND_EFFECTS_RESET: () => 'Все параметры эффектов были сброшены.',

            PLAYLIST_PRIVACY: (i) => {
                return {
                    private: 'Приватный',
                    public: 'Публичный'
                }[i];
            },

            PERMISSIONS: (i) => {
                return {
                    CreateInstantInvite: 'Создание приглашения',
                    KickMembers: 'Выгонять участников',
                    BanMembers: 'Банить участников',
                    Administrator: 'Администратор',
                    ManageChannels: 'Управлять каналами',
                    ManageGuild: 'Управлять сервером',
                    AddReactions: 'Добавлять реакции',
                    ViewAuditLog: 'Просматривать журнал аудита',
                    PrioritySpeaker: 'Приоритетный режим',
                    Stream: 'Стримить',
                    ViewChannel: 'Просматривать канал',
                    SendMessages: 'Отправлять сообщения',
                    SendMessagesInThreads: 'Отправлять сообщения в ветки',
                    SendTTSMessages: 'Отправлять Text-to-Speech сообщения',
                    ManageMessages: 'Управлять сообщениями',
                    EmbedLinks: 'Встроенные сообщения',
                    AttachFiles: 'Добавлять файлы',
                    ReadMessageHistory: 'Читать историю сообщений',
                    MentionEveryone: 'Упоминать всех',
                    UseExternalEmojis: 'Использовать внешние эмодзи',
                    ViewGuildInsights: 'Просматривать аналитику сервера',
                    Connect: 'Подключаться',
                    Speak: 'Говорить',
                    MuteMembers: 'Отключать участникам микрофон',
                    DeafenMembers: 'Отключать участникам звук',
                    MoveMembers: 'Перемещать участников',
                    UseVAD: 'Использовать режим активации по голосу',
                    ChangeNickname: 'Изменять никнейм',
                    ManageNicknames: 'Управлять никнеймами',
                    ManageRoles: 'Управлять ролями',
                    ManageWebhooks: 'Управлять вебхуками',
                    ManageEmojisAndStickers: 'Управлять эмодзи и стикерами'
                }[i];
            },

            IN_VOICE: () => 'Вы должны находиться в голосовом канале.',
            IN_THE_SAME_VOICE_CHANNEL: () => 'Вы должны находиться в одном голосовом канале с ботом',
            MISSING_VOICE_PERMISSIONS: () => 'Бот не имеет прав подключаться к этому голосовому каналу или говорить в нем.',
            MISSING_STAGE_VOICE_PERMISSIONS: () => 'Боту нужны права модератора на трибуне для проигрывания музыки в этом канале.',
            RULE_MISSING_PERMISSIONS: (target, perms) => `У ${target || 'вас'} недостаточно прав для выполнения этой команды: ${Array.isArray(perms) && perms.map(x => `**${x}**`).join(', ') || `**${perms}**`}`,

            LIVEPLAYER_BUTTON_REMOVE: () => 'Удалить',
            LIVEPLAYER_BUTTON_MOVE: () => 'Переместить',

            LIVEPLAYER_FAVORITE_PLAYLISTS_EMPTY: () => 'Вы не можете добавить трек в плейлист, потому что у вас их нет, либо они заполнены',
            LIVEPLAYER_FAVORITE_SELECT_PLAYLIST: () => 'Выберите плейлист, в который хотите добавить текущий трек',
            LIVEPLAYER_FAVORITE_SELECT_PLACEHOLDER: () => 'Не выбрано',
            LIVEPLAYER_FAVORITE_PLAYLIST_DESCRIPTION: (songs) => `Имеет ${songs.length} ${plural(songs.length, 'трек', 'трека', 'треков')}`,
            LIVEPLAYER_FAVORITE_TRACK_NOT_ADDED: () => 'Трек не был добавлен в плейлист',
            LIVEPLAYER_REMOVE_EMPTY_QUEUE: () => 'Невозможно удалить треки из очереди, потому что она пуста.',
            LIVEPLAYER_REMOVE_SELECT_TRACK: () => 'Выберите трек, который вы хотите удалить.',
            LIVEPLAYER_REMOVE_SELECT_PLACEHOLDER: () => 'Не выбрано',
            LIVEPLAYER_REMOVE_TRACK_NOT_REMOVED: () => 'Трек не был удален из очереди',
            LIVEPLAYER_MOVE_EMPTY_QUEUE: () => 'Невозможно переместить треки, потому что очередь пуста.',
            LIVEPLAYER_MOVE_SELECT_PLACEHOLDER: () => 'Не выбрано',
            LIVEPLAYER_MOVE_SELECT_INDEX: () => 'Выберите трек, который вы хотите переместить.',
            LIVEPLAYER_MOVE_SELECT_DESTINATION: () => 'Выберите трек, на место которого нужно переместить указанный трек.',
            LIVEPLAYER_MOVE_NOT_MOVED: () => 'Трек не был перемещен.',

            LIVEPLAYER_EMBED_TITLE: (name) => `Плеер для сервера ${name}`,
            LIVEPLAYER_EMBED_DESCRIPTION: (np, queueText) => `Сейчас играет [${np.info.title}](${np.info.uri || 'https://lolicon.su'})\nЗапрос от: <@${np.info.requested}>\n\n**Список треков в очереди:**\n${queueText.length ? queueText : 'Очередь пуста...'}`,
            NOTHING_PLAYING_TOPIC: () => 'Ничего не играет',

            COMMAND_EFFECTS_RESET_MISSING_PERMISSIONS: () => 'Вы не можете сбросить параметры эффектов. Попросите сделать это участника с ролью `Dj`',

            COMMAND_STATS_INFORMATION: (guilds, cachedUsers, users, memoryUsage, shardId) => `Серверов: \`${guilds}\`\nПользователей: \`${cachedUsers} / ${users}\`\nИспользуется памяти: \`${memoryUsage} MB\`\n\n**Сервер находится на шарде \`#${shardId}\`**`,
            COMMAND_STATS_MUSIC_NODE_INFORMATION: (players, playingPlayers, memoryUsage, uptime) => `Всего плееров: \`${players}\`\nИграет: \`${playingPlayers}\`\nИспользуется памяти: \`${memoryUsage} MB\`\n **Запущено <t:${uptime}:R>**`,

            COMMAND_LYRICS_TRACK_NOT_FOUND: () => 'Не удалось найти песню.',
            COMMAND_LYRICS_FAILED: () => 'Не удалось получить текст песни.',

            PREMIUM_GUILDS_ONLY: () => 'Эта команда доступна только для премиум серверов или пользователей. Для получения премиум подписки смотрите информацию в команде \`/premium info\`.\n\nЕсли у вас нет возможности оформить подписку, то вы можете получить 12 часов премиума, проголосовав за бота на [мониторинге](https:\/\/top.gg/bot/661765685017575424/vote).',
            COMMAND_RADIO_LOAD_FAILED: () => 'Не удалось загрузить указанную радиостанцию. Попробуйте еще раз.',
            COMMAND_RADIO_STREAM_LOADED: (name) => `Радиостанция **${name}** добавлена в очередь.`,
            COMMAND_RADIO_NOW_PLAYING: (name) => `Сейчас играет радиостанция **${name}**.`,
            COMMAND_RADIO_SELECT: (name) => `Выберите радиостанцию **\`${name}\`** из списка ниже:`,
            COMMAND_RADIO_SELECT_PLACEHOLDER: () => 'Выберите радиостанцию',
            COMMAND_RADIO_SELECTION_CANCELLED: () => 'Действие отменено.',

            COMMAND_PREMIUM_NOT_AVAILABLE: () => 'На вашем аккаунте нет доступных активаций премиума для серверов.',
            COMMAND_PREMIUM_ALREADY_ACTIVATED: (ends) => `На сервере уже активирована премиум подписка, которая закончится <t:${ends}>.`,
            COMMAND_PREMIUM_ACTIVATED: () => 'Вы успешно активировали премиум подписку на этом сервере на месяц.',
            COMMAND_PREMIUM_INFO_TITLE: () => 'Информация о подписке',
            COMMAND_PREMIUM_INFORMATION: () => `Покупая премиум подписку Вы поддерживаете работу бота, а также получаете взамен перки.\n\n**Список перков:**\n\`\`\`md\n# Команда radio, которая позволяет воспроизвести указанную радиостанцию\n# Команда для управления эффектами музыкального воспроизведения\n# Максимальное количество треков в очереди будет увеличено с 300 до 500 треков.\n# Бот не будет покидать голосовой канал в случае выхода всех людей из него.\`\`\`\n\nМесяц премиум подписки стоит 2$. Задонатить любую сумму можно на любой из кошельков/сервис ниже:\n\nhttps://donatello.to/shizofreniya\nhttps://boosty.to/yukikaze\nhttps://patreon.com/YukikazeMusic\n\n**\`BTC - bc1qycprjtwgtgaaqppyr9lw6c50ga8kmm7x7axx9w\`**\n**\`ETH - 0xC3BBD91D59eB547e9164236622D16Cc4Cb2A57B8\`**\n**\`BNB - bnb1razwujhxln4ze6dkzxr543tvr6uju40t6k64qn\`**\n**\`LTC - LVpyzEEShshePXQQQksiTRZKg2gP64TNp4\`**\n\nЕсли у вас нет возможности оформить подписку, то вы можете получить 12 часов премиума, проголосовав за бота на **[мониторинге](https://top.gg/bot/661765685017575424/vote)**\n`,
            COMMAND_PREMIUM_AVAILABLE_SUBSCRIPTIONS: (count) => `\nВы имеете **\`${count}\`** доступных активаций. Используйте **\`/premium activate\`** для активации премиум функций на вашем сервере.`,
            COMMAND_PREMIUM_GUILD_ENDS: (ends) => `\n**На вашем сервере активирована премиум подписка, которая закончится <t:${ends}>.**`,
            COMMAND_PREMIUM_USER_ENDS: (ends) => `\n**У вас активирована премиум подписка, которая закончится <t:${ends}>.**`,

            COMMAND_VK_USER_USER_NOT_FOUND: () => 'Пользователь не был найден, проверьте указанный айди.',
            COMMAND_VK_USER_TRACKS_NOT_LOADED: () => 'Не удалось загрузить треки, попробуйте изменить настройки приватности.',
            COMMAND_VK_USER_LOADED: (provider, name, size, failed, queueMode) => {
                let res = `${provider} Плейлист **${name || 'Неизвестный плейлист'}** загружен в очередь, ${plural(size, `был добавлен **${size}** трек`, `было добавлено **${size}** трека`, `было добавлено **${size}** треков`)}.${failed && failed > 1 ? `\n${failed} ${plural(failed, 'трек', 'трека', 'треков')} не было загружено (в стране расположения сервера они недоступны). ` : ''}`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nОбнаружен модификатор режима очереди, треки будут воспроизводиться в случайном порядке.';
                        break;

                    case 'single':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор текущего трека.';
                        break;

                    case 'queue':
                        res += '\nОбнаружен модификатор режима очереди, устанавливаю повтор всей очереди.';
                        break;

                    case 'disable':
                        res += '\nОбнаружен модификатор режима очереди, отключаю режим повтора.';
                        break;
                }

                return res;
            },

            COMMAND_VK_SEARCH_NO_MATCHES: () => 'По вашему запросу ничего не найдено.',
            COMMAND_SOUNDCLOUD_SEARCH_NO_MATCHES: () => 'По вашему запросу ничего не найдено.',
            COMMAND_YANDEX_SEARCH_NO_MATCHES: () => 'По вашему запросу ничего не найдено.',
            COMMAND_ZVUK_SEARCH_NO_MATCHES: () => 'По вашему запросу ничего не найдено.',

            COMMAND_SETTINGS_INFO_TITLE: (name) => `Параметры сервера ${name}`,
            COMMAND_SETTINGS_INFO_DESCRIPTION: (language, djRoleID, liveplayerChannelID, liveplayerAnnounceEnabled, analyticsEnabled) => `Язык: **\`${language}\`**\nРоль DJ: ${djRoleID ? `<@&${djRoleID}>` : '**\`Не установлено\`**'}\nКанал лайвплеера: ${liveplayerChannelID ? `<#${liveplayerChannelID}>` : '**\`Не установлен\`**'}\nВызов лайвплеера: ${liveplayerAnnounceEnabled ? '**\`Включен\`**' : '**\`Отключен\`**'}\nСбор аналитики: ${analyticsEnabled ? '**\`Включен\`**' : '**\`Отключен\`**'}`,

            EFFECTS_EQUALIZER_DESCRIPTION: () => 'Применяет выбранный пресет эквалайзера для текущего воспроизведения',
            EFFECTS_EQUALIZER_PRESET_DESCRIPTION: () => 'Пресет, который будет применен',
            EFFECTS_NIGHTCORE_DESCRIPTION: () => 'Добавляет эффект nightcore для текущего воспроизведения',
            EFFECTS_NIGHTCORE_MODE_DESCRIPTION: () => 'Режим nightcore',
            EFFECTS_RESET_DESCRIPTION: () => 'Сбрасывает все установленные параметры эффектов',
            EFFECTS_BASS_DESCRIPTION: () => 'Добавляет басс-буст эффект для текущего воспроизведения',
            EFFECTS_BASS_MODE_DESCRIPTION: () => 'Режим басс-буста',
            EFFECTS_KARAOKE_DESCRIPTION: () => 'Включает режим караоке для текущего воспроизведения',
            EFFECTS_KARAOKE_MODE_DESCRIPTION: () => 'Режим караоке',
            EFFECTS_ROTATION_DESCRIPTION: () => 'Добавляет эффект rotation для текущего воспроизведения',
            EFFECTS_ROTATION_MODE_DESCRIPTION: () => 'Режим rotation',

            LOOP_DESCRIPTION: () => 'Переключает режим повторения для текущего воспроизведения',
            LOOP_MODE_DESCRIPTION: () => 'Режим',

            LYRICS_DESCRIPTION: () => 'Ищет текст для текущей или указаной песни',
            LYRICS_NAME_DESCRIPTION: () => 'Название песни',

            NP_DESCRIPTION: () => 'Выдает информацию о текущем воспроизведении',

            PAUSE_DESCRIPTION: () => 'Ставит плеер на паузу',

            PING_DESCRIPTION: () => 'Показывает пинг бота',

            PLAY_DESCRIPTION: () => 'Ищет трек по указанному запросу или ссылке',
            PLAY_QUERY_DESCRIPTION: () => 'Запрос',
            PLAY_MODE_DESCRIPTION: () => 'Режим повторения очереди',

            PREMIUM_ACTIVATE_DESCRIPTION: () => 'Активирует премиум подписку на сервере',
            PREMIUM_INFO_DESCRIPTION: () => 'Показывает информацию о подписке',

            PLAYLIST_LIST_DESCRIPTION: () => 'Показывает список ваших плейлистов',
            PLAYLIST_MENU_DESCRIPTION: () => 'Открывает меню управления вашим плейлистом',
            PLAYLIST_MENU_NAME_DESCRIPTION: () => 'Название плейлиста',
            PLAYLIST_CREATE_DESCRIPTION: () => 'Создает плейлист с указанным вами именем',
            PLAYLIST_CREATE_NAME_DESCRIPTION: () => 'Название плейлиста',
            PLAYLIST_PLAY_DESCRIPTION: () => 'Воспроизводит указанный вами плейлист',
            PLAYLIST_PLAY_NAME_DESCRIPTION: () => 'Название плейлиста',
            PLAYLIST_PLAY_MODE_DESCRIPTION: () => 'Режим повторения очереди',
            PLAYLIST_ADD_DESCRIPTION: () => 'Добавляет трек в ваш плейлист',
            PLAYLIST_ADD_NAME_DESCRIPTION: () => 'Название плейлиста',
            PLAYLIST_ADD_QUERY_DESCRIPTION: () => 'Запрос',
            PLAYLIST_REMOVE_DESCRIPTION: () => 'Удаляет трек из вашего плейлиста',
            PLAYLIST_REMOVE_NAME_DESCRIPTION: () => 'Название плейлиста',
            PLAYLIST_REMOVE_INDEX_DESCRIPTION: () => 'Номер трека',

            QUEUE_LIST_DESCRIPTION: () => 'Выдает очередь для этого сервера',
            QUEUE_LIST_PAGE_DESCRIPTION: () => 'Страница',
            QUEUE_REMOVE_DESCRIPTION: () => 'Убирает указанный трек, либо треки из очереди',
            QUEUE_REMOVE_INDEX_DESCRIPTION: () => 'Номер трека',
            QUEUE_REMOVE_COUNT_DESCRIPTION: () => 'Количество треков',
            QUEUE_MOVE_DESCRIPTION: () => 'Перемещает треки в очереди',
            QUEUE_MOVE_INDEX_DESCRIPTION: () => 'Позиция трека',
            QUEUE_MOVE_DESTINATION_DESCRIPTION: () => 'Новая позиция трека',

            RADIO_DESCRIPTION: () => 'Добавляет в очередь указанную радиостанцию',
            RADIO_STATION_DESCRIPTION: () => 'Радиостанция',
            
            REPLAY_DESCRIPTION: () => 'Начинает проигрывать трек с начала',

            RESUME_DESCRIPTION: () => 'Снимает плеер с паузы',

            SOUNDCLOUD_SEARCH_DESCRIPTION: () => 'Ищет треки на SoundCloud',
            SOUNDCLOUD_SEARCH_QUERY_DESCRIPTION: () => 'Запрос',
            SOUNDCLOUD_SEARCH_MODE_DESCRIPTION: () => 'Режим повторения очереди',

            SEEK_DESCRIPTION: () => 'Перематывает трек на указанную позицию',
            SEEK_TIME_DESCRIPTION: () => 'Время',

            SETTINGS_INFO_DESCRIPTION: () => 'Показывает установленные параметры',
            SETTINGS_LANGUAGE_DESCRIPTION: () => 'Изменяет язык бота',
            SETTINGS_LANGUAGE_LANG_DESCRIPTION: () => 'Язык',
            SETTINGS_DJ_DESCRIPTION: () => 'Устанавливает роль DJ',
            SETTINGS_DJ_ROLE_DESCRIPTION: () => 'Роль',
            SETTINGS_LIVEPLAYER_SET_DESCRIPTION: () => 'Устанавливает канал для лайвплеера',
            SETTINGS_LIVEPLAYER_SET_CHANNEL_DESCRIPTION: () => 'Канал',
            SETTINGS_LIVEPLAYER_CREATE_DESCRIPTION: () => 'Создает канал для лайвплеера',
            SETTINGS_LIVEPLAYER_REMOVE_DESCRIPTION: () => 'Убирает канал лайвплеера',

            SHUFFLE_DESCRIPTION: () => 'Перемешивает треки в очереди',

            SKIP_DESCRIPTION: () => 'Пропускает текущий трек',
            
            STATS_DESCRIPTION: () => 'Показывает статистику бота',

            STOP_DESCRIPTION: () => 'Останавливает воспроизведение музыки для этого сервера',
            CLEAR_DESCRIPTION: () => 'Чистит всю очередь',

            VK_USER_DESCRIPTION: () => 'Проигрывает указанное количество сохраненных треков пользователя VK',
            VK_USER_USER_DESCRIPTION: () => 'ID пользователя',
            VK_USER_COUNT_DESCRIPTION: () => 'Количество треков',
            VK_USER_OFFSET_DESCRIPTION: () => 'Начало позиции',
            VK_USER_MODE_DESCRIPTION: () => 'Режим повторения очереди',

            VK_SEARCH_DESCRIPTION: () => 'Ищет треки в VK',
            VK_SEARCH_QUERY_DESCRIPTION: () => 'Запрос',
            VK_SEARCH_MODE_DESCRIPTION: () => 'Режим повторения очереди',

            VOLUME_DESCRIPTION: () => 'Изменяет уровень громкости для этого сервера',
            VOLUME_LEVEL_DESCRIPTION: () => 'Громкость',

            VOTESKIP_DESCRIPTION: () => 'Проголосовать за пропуск текущего трека',

            YANDEX_SEARCH_DESCRIPTION: () => 'Ищет треки на Yandex.Music',
            YANDEX_SEARCH_QUERY_DESCRIPTION: () => 'Запрос',
            YANDEX_SEARCH_MODE_DESCRIPTION: () => 'Режим повторения очереди',

            ZVUK_SEARCH_DESCRIPTION: () => 'Ищет треки на платформе Zvuk',
            ZVUK_SEARCH_QUERY_DESCRIPTION: () => 'Запрос',
            ZVUK_MODE_DESCRIPTION: () => 'Режим повторения очереди',

            COMMAND_SETTINGS_ANALYTICS_RESET: () => 'Вся собранная аналитика на этом сервере была успешно сброшена.',
            COMMAND_SETTINGS_ANALYTICS_SET: (isEnabled) => `Сбор аналитики успешно ${isEnabled ? 'включен' : 'отключен'} на этом сервере`,

            COMMAND_SETTINGS_LIVEPLAYER_ANNOUNCE_SET: (isEnabled) => `Вызов лайвплеера в канал был ${isEnabled ? 'включен' : 'отключен'} на этом сервере`,

            COMMAND_ANALYTICS_TITLE: () => 'Информация о прослушанных треках на этом сервере',
            COMMAND_ANALYTICS_LISTENED: () => '**История прослушиваний:**\n',
            COMMAND_ANALYTICS_TOP: () => 'Наиболее часто прослушиваемые:',
            COMMAND_ANALYTICS_INFO: (size, length) => `Всего на этом сервере прослушали ${size} ${plural(size, 'трек', 'трека', 'треков')} общей длиной ${length}.`,
            COMMAND_ANALYTICS_TRACK: (index, track) => `\`[${index}]\` **[${track.author} — ${track.title}](${track.url})** был прослушан **${track.count} ${plural(track.count, 'раз', 'раза', 'раз')}**`,
            COMMAND_ANALYTICS_DISALED: () => 'На этом сервере отключен сбор аналитики',

            COMMAND_LAST_EMPTY: () => 'В истории прослушиваний ничего нет',

            ANALYTICS_DESCRIPTION: () => 'Показывает список треков, которые слушали на этом сервере',
            SETTINGS_ANALYTICS_DESCRIPTION: () => 'Управляет параметрами аналитики',
            SETTINGS_ANALYTICS_STATUS_DESCRIPTION: () => 'Включает или же отключает сбор аналитики',
            SETTINGS_ANALYTICS_STATUS_STATE_DESCRIPTION: () => 'Состояние',
            SETTINGS_ANALYTICS_RESET_DESCRIPTION: () => 'Сбрасывает все собранные данные аналитики на этом сервере',

            SETTINGS_LIVEPLAYER_ANNOUNCE_DESCRIPTION: () => 'Включает вызов лайвплеера в канал, где запустили бота',
            SETTINGS_LIVEPLAYER_ANNOUNCE_STATE_DESCRIPTION: () => 'Состояние',

            COMMAND_PLAYLIST_LIST_TITLE: () => 'Список ваших плейлистов',
            COMMAND_PLAYLIST_LIST_FIELD: (tracks, privacy, created) => `Всего треков › ${tracks}\nПриватность › ${privacy}\nСоздан <t:${created}:D>`,
            COMMAND_PLAYLIST_LIST_EMPTY: () => 'У вас еще нет плейлистов. Создайте один с помощью команды `/playlist create`',
            PLAYLIST_NOT_FOUND: () => 'Указанный плейлист не найден.',
            PLAYLIST_RENAME_BUTTON: () => 'Переименовать',
            PLAYLIST_PRIVACY_BUTTON: () => 'Изменить приватность',
            PLAYLIST_DELETE_BUTTON: () => 'Удалить',
            PLAYLIST_TRACKS_BUTTON: () => 'Cписок треков',
            PLAYLIST_PLAY_BUTTON: () => 'Воспроизвести',
            PLAYLIST_LINK_BUTTON: () => 'Ссылка',
            PLAYLIST_SETTINGS_TITLE: () => 'Настройка плейлиста',
            PLAYLIST_SETTINGS_PRIVACY: () => 'Выберите тип приватности для своего плейлиста из списка ниже',
            PLAYLIST_MODAL_NAME_LABEL: () => 'Название плейлиста',
            PLAYLIST_MENU_INFO: (name, tracks, privacy, created) => `Плейлист **${name}** имеет **${tracks} ${plural(tracks, 'трек', 'трека', 'треков')}**. Тип — \`${privacy}\`. Был создан <t:${created}:D>.`,

            DASHBOARD_DESCRIPTION: () => 'Выдает ссылку на панель управления сервером',
            DASHBOARD_EMBED_TITLE: () => 'Веб-панель',
            DASHBOARD_EMBED_DESCRIPTION: () => 'Мы имеем **удобную и простую** веб-панель, в который вы можете настроить бота, управлять воспроизведением музыки, а также добавлять свои треки в очередь.',
            DASHBOARD_LINK_BUTTON: () => 'Перейти'
        }
    }
}