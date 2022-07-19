const Language = require('@lib/structures/Language'),
    { plural } = require('@lib/Utils');

module.exports = class extends Language {
    constructor() {
        super('en-US');

        this.language = {
            LANGUAGE_NAME: () => 'English',
            DEFAULT: (key) => `Key ${key} isn't translated for English`,
            MENU_FOOTER_PAGE: () => 'Page ',
            NOTHING_PLAYING: () => 'Nothing is playing now.',
            NODES_NOT_AVAILABLE: () => 'Music isn\'t available at the moment.',
            NO_MATCHES: () => 'Nothing was found for your query.',
            LOAD_FAILED: () => 'Track load failed, skipping it.',
            
            PLAYER_CREATE_FAILED: () => 'The voice connection attempt failed.',
            PLAYER_DISCONNECTED: () => 'The connection was dropped because an unknown error occurred during playback or I was disconnected from the voice channel.',

            MISSING_PERMISSIONS: (err) => `Sorry, but I can't join channel, because of missing permission: \n\`${ err }\``,
         
            QUEUE_LIMIT: (limit) => `You can't upload more than ${limit} ${plural(limit, 'track', 'tracks', 'tracks')} to the queue.`,
            QUEUE_LIMIT_INFO: () => `⚠ Not all tracks were uploaded due to the limit on the maximum number of tracks in the queue.`,

            COMMAND_BASS_MISSING_PERMISSIONS: () => 'You can\'t use bass-boost. Ask someone with `Dj` role to do it.',
            COMMAND_BASS_DISABLED: () => '⌛ **Bass-boost is disabled, please wait a moment.**',
            COMMAND_BASS_MINIMUM: () => '⌛ **The minimum options of the bass-boost are set. It will be applied in a couple of seconds.**',
            COMMAND_BASS_MEDIUM: () => '⌛ **The medium options of the bass-boost are set. It will be applied in a couple of seconds.**',
            COMMAND_BASS_MAXIMUM: () => '⌛ **The max options of the bass-boost are set. It will be applied in a couple of seconds.**',
            COMMAND_BASS_FULL: () => '⌛ **All the options of the bass-boost are set. It will be applied in a couple of seconds.**',

            COMMAND_KARAOKE_MISSING_PERMISSIONS: () => 'You can\'t use karaoke mode. Ask someone with `Dj` role to do it.',
            COMMAND_KARAOKE_DISABLED: () => '⌛ **The karaoke effect is disabled, please wait a moment.**',
            COMMAND_KARAOKE_ENABLED: () => '⌛ **The karaoke effect is enabled and will be applied in a couple of seconds.**',
            COMMAND_KARAOKE_MONO: () => '⌛ **The karaoke effect is enabled in `mono` mode.**',

            COMMAND_ROTATION_MISSING_PERMISSIONS: () => 'You can\'t use rotation effect. Ask someone with `Dj` role to do it.',
            COMMAND_ROTATION_DISABLED: () => '⌛ **The rotation effect is disabled, please wait a moment.**',
            COMMAND_ROTATION_ENABLED: (speed) => `⌛ **The speed of rotation effect is set to \`${speed}x\` and will be applied in a couple of seconds.**`,

            COMMAND_NIGHTCORE_MISSING_PERMISSIONS: () => 'You can\'t use nightcore. Ask someone with `Dj` role to do it.',
            COMMAND_NIGHTCORE_DISABLED: () => '⌛ **The nightcore effect is disabled, please wait a moment.**',
            COMMAND_NIGHTCORE_SET: (speed) => `⌛ **The tempo of nightcore effect is set to \`${speed}\` and will be applied in a couple of seconds.**`,
            COMMAND_NIGHTCORE_SLOW: () => '⌛ **The tempo of nightcore effect is set to slow and will be applied in a couple of seconds.**',

            COMMAND_EQUALIZER_MISSING_PERMISSIONS: () => 'You can\'t use equalizer. Ask someone with `Dj` role to do it.',
            COMMAND_EQUALIZER_SET: () => '⌛ **The equalizer preset was set, please wait a moment.**',

            COMMAND_PLAY_MISSING_QUERY: () => 'Enter the name or a link to the track.',
            COMMAND_PLAY_MISSING_PERMISSIONS: () => 'I can\'t join channel or use microphone.',
            COMMAND_PLAY_NO_MATCHES: (failed) => {
                if (!failed)
                    return 'Nothing was found for your query.';
                else
                    return 'The playlist could not be loaded because the tracks it contains are not available in the country where the server is located.';
            },
            COMMAND_PLAY_LOAD_FAILED: () => 'An error occured while trying to load track.',
            COMMAND_PLAY_TRACK_LOADED: (provider, name, queueMode) => {
                let res = `${provider} Track **${name}** has been added to the queue.`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nQueue mode modifier detected, tracks will play in random order.';
                        break;

                    case 'single':
                        res += '\nQueue mode modifier detected, music player has been looped.';
                        break;

                    case 'queue':
                        res += '\nQueue mode modifier detected, music player\'s queue was looped.';
                        break;

                    case 'disable':
                        res += '\nQueue mode modifier detected, queue loop is disabled.';
                        break;
                }

                return res;
            },
            
            COMMAND_PLAY_PLAYLIST_LOADED: (provider, size, name, failed, queueMode) => {
                let res = `${provider} The playlist **\`${name || 'Unknown playlist'}\`** is loaded (**\`${size}\`** ${plural(size, 'track', 'tracks', 'tracks')}).${failed && failed > 1 ? `\n${failed} ${plural(failed, 'track', 'tracks', 'tracks')} were not queued (they are not available in the country where the server is located` : ''}`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nQueue mode modifier detected, tracks will play in random order.';
                        break;

                    case 'single':
                        res += '\nQueue mode modifier detected, music player has been looped.';
                        break;

                    case 'queue':
                        res += '\nQueue mode modifier detected, music player\'s queue was looped.';
                        break;

                    case 'disable':
                        res += '\nQueue mode modifier detected, queue loop is disabled.';
                        break;
                }

                return res;
            },

            COMMAND_PLAY_NOW_PLAYING: (provider, name, queueMode) => {
                let res = `${provider} **${name}** is playing now.`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nQueue mode modifier detected, tracks will play in random order.';
                        break;

                    case 'single':
                        res += '\nQueue mode modifier detected, music player has been looped.';
                        break;

                    case 'queue':
                        res += '\nQueue mode modifier detected, music player\'s queue was looped.';
                        break;

                    case 'disable':
                        res += '\nQueue mode modifier detected, queue loop is disabled.';
                        break;
                }

                return res;
            },

            COMMAND_PLAY_PLAYLIST_EMPTY: () => 'The playlist could not be loaded, because it is empty.',
            COMMAND_PLAY_PLAYLIST_PRIVACY: () => 'The playlist could not be loaded, because it is private.',

            COMMAND_NP_TITLE: (name) => `Tracks are currently being played for ${name}`,
            COMMAND_NP_LAST_TRACK: () => '••• The last track is playing now.',
            COMMAND_NP_NODE: (name) => `The track is playing on the music node ${name}`,
            COMMAND_NP_TRACK_COUNT: (count) => `••• ${count} ${plural(count, 'track', 'tracks', 'tracks')} in the queue..`,
            COMMAND_NP_DESCRIPTION: (np, volume, bar, position, length) => `Now playing **[${np.info.title}](${np.info.uri})**\nRequested by: <@${np.info.requested}>\n\nVolume: ${volume}%\n${bar}\n\`${position} / ${length}\``,
            COMMAND_NP_UPDATE: () => 'Update',
            COMMAND_NP_LYRICS: () => 'Lyrics',

            COMMAND_QUEUE_NOW_PLAYING: (title) => `Now playing: ${title}`,
            COMMAND_QUEUE_TITLE: (guild) => `Queue for ${guild}`,
            COMMAND_QUEUE_FOOTER: (page, length) => `••• Page: ${page} • ${length} ${plural(length, 'track', 'tracks', 'tracks')} left`,

            COMMAND_SKIP_MISSING_PERMISSIONS: (user) => `You can't skip this track. Ask <@${user}> to do it.`,
            COMMAND_SKIP_SKIPPED: () => ':track_next: **Track skipped.**',

            COMMAND_STOP_MISSING_PERMISSIONS: () => 'You can\'t stop playback. Ask someone with `Dj` role to do it.',
            COMMAND_STOP_STOPPED: () => ':stop_button: **I left the channel.**',

            COMMAND_CLEAR_MISSING_PERMISSIONS: () => 'You can\'t clear queue. Ask someone with `Dj` role to do it.',
            COMMAND_CLEAR_QUEUE_CLEARED: () => '☑️ **The queue was cleared.**',

            COMMAND_SEEK_MISSING_PERMISSIONS: () => 'You can\'t rewind (fast forward) the track. Ask someone with `Dj` role to do it.',
            COMMAND_SEEK_PARAMS: () => 'Specify time-code to rewind (fast forward).',
            COMMAND_SEEK_INVALID_POSITION: () => 'An incorrect time-code was specified.',
            COMMAND_SEEK_SEEKED: () => '⏩ **Track has been rewound (fast forwarded).**',

            COMMAND_REPLAY_MISSING_PERMISSIONS: () => 'You can\'t start over this track. Ask someone with `Dj` role to do it.',
            COMMAND_REPLAY_SEEKED: () => 'Starting the track over.',

            COMMAND_MOVE_MISSING_PERMISSIONS: () => 'You can\'t move tracks in a queue. Ask someone with `Dj` role to do it.',
            COMMAND_MOVE_MISSING_POSITIONS: () => 'Specify the **track position** for it moving to **new position**.',
            COMMAND_MOVE_INDEX: () => 'An invalid track position specified.',
            COMMAND_MOVE_DESTINATION: () => 'Specify the new track position in the queue.',
            COMMAND_MOVE_MOVED: (newTrack, oldTrack) => `Track **${newTrack}** is now **${oldTrack}** in the queue.`,

            COMMAND_SHUFFLE_MISSING_PERMISSIONS: () => 'You can\'t shuffle the queue. Ask someone with `Dj` role to do it.',
            COMMAND_SHUFFLE_SHUFFLED: () => ':twisted_rightwards_arrows: **The queue was shuffled.**',

            COMMAND_PAUSE_MISSING_PERMISSIONS: () => 'You can\'t pause the music player. Ask someone with `Dj` role to do it.',
            COMMAND_PAUSE_PAUSED: () => ':pause_button: **The music player has been paused**',

            COMMAND_RESUME_MISSING_PERMISSIONS: () => 'You can\'t resume the music player. Ask someone with `Dj` role to do it.',
            COMMAND_RESUME_RESUMED: () => ':arrow_forward: **The music player has been resumed**',

            COMMAND_VOLUME_MISSING_PERMISSIONS: () => 'You can\'t change volume. Ask someone with `Dj` role to do it.',
            COMMAND_VOLUME_PARAMS: () => 'Specify volume level **(from 0% to 100%)**.',
            COMMAND_VOLUME_CHANGED: (emoji, level) => `${emoji} Volume is set to **${level}%**`,

            COMMAND_VOTESKIP_ALREADY_VOTED: () => 'You have already voted to skip the track.',
            COMMAND_VOTESKIP_VOTED: (votes, need) => `You\'ve been voted to skip the track. ${votes} more votes are required`,
            COMMAND_VOTESKIP_SKIPPED: () => ':track_next: **Track skipped**',

            COMMAND_REMOVE_MISSING_PERMISSIONS: () => 'You can\'t remove tracks from queue. Ask someone with `Dj` role to do it.',
            COMMAND_REMOVE_PARAMS: () => 'Specify a track number to remove.',
            COMMAND_REMOVE_REMOVED: (name) => `Track **${name}** removed from queue.`,
            COMMAND_REMOVE_RANGE_REMOVED: (count) => `**${count}** ${plural(count, 'track', 'tracks', 'tracks')} have been removed from the queue.`,

            COMMAND_LOOP_MISSING_PERMISSIONS: () => 'You can\'t use loop function. Ask someone with `Dj` role to do it.',
            COMMAND_LOOP_PARAMS: () => 'Choose the loop mode: **`off`, `single`, `queue`**',
            COMMAND_LOOP_DISABLED: () => '**The queue loop is disabled.**',
            COMMAND_LOOP_QUEUE: () => ':repeat: **The music player\'s queue was looped.**',
            COMMAND_LOOP_SINGLE: () => ':repeat_one: **The music player has been looped.**',
            COMMAND_LOOP_SHUFFLE: () => '🔀 **The tracks will now play in random order.**',

            COMMAND_PP_PLAYLIST_NAME: () => 'Specify the name of the playlist..',
            COMMAND_PP_INVALID_PLAYLIST: () => 'The specified playlist wasn\'t found.',
            COMMAND_PP_PLAYLIST_EMPTY: () => 'This playlist is empty.',
            COMMAND_PP_PLAYLIST_LOADED: (provider, name, count, queueMode) => {
                let res = `${provider} Playlist **${name}** is loaded (**\`${count}\`** ${plural(count, 'track', 'tracks', 'tracks')}).`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nQueue mode modifier detected, tracks will play in random order.';
                        break;

                    case 'single':
                        res += '\nQueue mode modifier detected, music player has been looped.';
                        break;

                    case 'queue':
                        res += '\nQueue mode modifier detected, music player\'s queue was looped.';
                        break;

                    case 'disable':
                        res += '\nQueue mode modifier detected, queue loop is disabled.';
                        break;
                }

                return res;
            },

            COMMAND_PP_PUBLIC_LOADED: (provider, name, count, queueMode) => {
                let res = `${provider} Public playlist **${name}** is loaded (**\`${count}\`** ${plural(count, 'track', 'tracks', 'tracks')}).`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nQueue mode modifier detected, tracks will play in random order.';
                        break;

                    case 'single':
                        res += '\nQueue mode modifier detected, music player has been looped.';
                        break;

                    case 'queue':
                        res += '\nQueue mode modifier detected, music player\'s queue was looped.';
                        break;

                    case 'disable':
                        res += '\nQueue mode modifier detected, queue loop is disabled.';
                        break;
                }

                return res;
            },

            COMMAND_MYLIST_EMPTY: () => 'You don\'t have playlists yet.',
            COMMAND_MYLIST_TITLE: () => 'Playlist list',
            COMMAND_MYLIST_INFO: (tracks, type, created, id) => `Total tracks: \`${tracks}\`\nType: \`${type}\`\nCreated at: ${created}\n**[Open](https://lolicon.su/playlist/${id})**`,

            COMMAND_PLAYLIST_NAME: () => 'Specify the name of the playlist.',
            COMMAND_PLAYLIST_INVALID_PLAYLIST: () => 'The specified playlist wasn\'t found.',
            COMMAND_PLAYLIST_NEW_NAME: () => 'Enter the name of the new playlist.',
            COMMAND_PLAYLIST_TRACK_INDEX: () => 'Enter the number of track.',
            COMMAND_PLAYLIST_INVALID_TRACK: () => 'You\'ve entered an invalid track number.',
            COMMAND_PLAYLIST_TRACK_ADDED: (provider, track, name) => `${provider || ''} Track **${track}** has been added in playlist **${name}**.`,
            COMMAND_PLAYLIST_ADDED_PLAYLIST: (provider, name, size) => `${provider} The playlist is loaded, all tracks are added in playlist **${name}**. Total tracks: **${size}**`,
            COMMAND_PLAYLIST_RENAMED: (name, newName) => `Playlist **${name}** has been renamed to **${newName}**.`,
            COMMAND_PLAYLIST_TRACK_REMOVED: (track, name) => `Track **${track}** has been removed from playlist **${name}**.`,
            COMMAND_PLAYLIST_PRIVACY_CHANGED: (name, type) => `Playlist **${name}** is now **${type}**`,
            COMMAND_PLAYLIST_TRACK_LIST: (name) => `Track list in playlist ${name}`,
            COMMAND_PLAYLIST_TRACK_LIST_FOOTER: (page, size) => `••• Page: ${page} • Tracks in playlist: ${size}`,
            COMMAND_PLAYLIST_DUPLICATED_NAME: () => 'You can\'t rename this playlist, you already have one.',
            COMMAND_PLAYLIST_EMPTY_PLAYLIST: () => 'The playlist is empty.',
            COMMAND_PLAYLIST_INFO_PLACEHOLDER: () => 'Select playlist',

            COMMAND_CREATE_PLAYLIST_NAME: () => 'Enter the name of the new',
            COMMAND_CREATE_LIMITED: (maxPlaylists) => `You can't create more than ${maxPlaylists} playlists.**`,
            COMMAND_CREATE_DUPLICATED_NAME: () => 'You already has playlist with such name.',
            COMMAND_CREATE_CREATED: (name) => `Playlist **${name}** was created.`,

            COMMAND_DELETE_PLAYLIST_NAME: () => 'Specify playlist\'s name.',
            COMMAND_DELETE_INVALID_PLAYLIST: () => 'The specified playlist wasn\'t found.',
            COMMAND_DELETE_CONFIRMATION: (name, count) => `Are you sure you want to delete playlist **${name}** with **${count}** ${plural(count, 'track', 'tracks', 'tracks')}?`,
            COMMAND_DELETE_CONFIRMED: (name) => `Playlist **${name}** has been deleted.`,
            COMMAND_DELETE_CANCELLED: () => 'Playlist wasn\'t deleted.',

            COMMAND_LANGUAGE_SUCCESS: () => 'Language has been succesfully changed.',

            COMMAND_LIVEPLAYER_INVALID_CHANNEL: () => 'You cannot select this channel for a live-player.',
            COMMAND_LIVEPLAYER_SET: (channel) => `Live-player succesfully set in ${channel}.`,
            COMMAND_LIVEPLAYER_REMOVED: () => 'Live-player is disabled.',

            COMMAND_DJ_INVALID_ROLE: () => 'You can\'t select this role.',
            COMMAND_DJ_ROLE_SET: () => 'Role was selected succesfully.',

            COMMAND_EFFECTS_INFO: (equalizer, karaoke, timescale, rotation) => `**Effects:**\n Bass-boost: \`[ ${equalizer.map(x => x.gain).join(', ')} ]\`\nKaraoke mode: \`${(karaoke && karaoke.monoLevel !== 1) ? 'Mono' : (karaoke && karaoke.level) !== 1 ? 'Enabled' : 'Disabled'}\`\nNightcore: \`${(timescale && timescale.rate !== 1) ? timescale?.rate + 'x' : 'Disabled'}\`\nRotation: \`${rotation ? rotation.rotationHz + 'x' : 'Disabled'}\``,
            COMMAND_EFFECTS_FOOTER: () => 'To reset all parameters, call the command `/effects reset``.',
            
            PLAYLIST_PRIVACY: (i) => {
                return {
                    private: 'Private',
                    public: 'Public'
                }[i];
            },

            PERMISSIONS: (i) => {
                return {
                    CreateInstantInvite: 'Create invite',
                    KickMembers: 'Kick members',
                    BanMembers: 'Ban members',
                    Administrator: 'Administrator',
                    ManageChannels: 'Manage channels',
                    ManageGuild: 'Manage guild',
                    AddReactions: 'Add reactions',
                    ViewAuditLog: 'View audit log',
                    PrioritySpeaker: 'Priority Speaker',
                    Stream: 'Stream',
                    ViewChannel: 'View channels',
                    SendMessages: 'Send messages',
                    SendMessagesInThreads: 'Send messages in threads',
                    SendTTSMessages: 'Send Text-to-Speech messages',
                    ManageMessages: 'Manage messages',
                    EmbedLinks: 'Embed links',
                    AttachFiles: 'Attach files',
                    ReadMessageHistory: 'Read message history',
                    MentionEveryone: 'Mention everyone',
                    UseExternalEmojis: 'Use external emojis',
                    ViewGuildInsights: 'View guild insights',
                    Connect: 'Connect',
                    Speak: 'Speak',
                    MuteMembers: 'Mute members',
                    DeafenMembers: 'Deafen members',
                    MoveMembers: 'Move members',
                    UseVAD: 'Use VAD',
                    ChangeNickname: 'Change nickname',
                    ManageNicknames: 'Manage nicknames',
                    ManageRoles: 'Manage roles',
                    ManageWebhooks: 'Manage webhooks',
                    ManageEmojisAndStickers: 'Manage emojis and stickers'
                }[i];
            },

            IN_VOICE: () => 'You should be in voice channel.',
            IN_THE_SAME_VOICE_CHANNEL: () => 'You need to join the same voice channel as the bot',
            OWNER_ONLY: () => 'Only bot\'s owners can use this command.',
            MISSING_VOICE_PERMISSIONS: () => 'I don\'t have enough permissions to join your voice channel.',
            MISSING_STAGE_VOICE_PERMISSIONS: () => 'To play music, the bot needs the permission of a `moderator` on stage channel.',

            BOT_MISSING_PERMISSIONS: (perms) => `I don't have enough permissions to execute this command: ${Array.isArray(perms) && perms.map(x => `**${x}**`).join(', ') || `**${perms}**`}`,
            USER_MISSING_PERMISSIONS: (perms) => `You don't have enough permissions to use this command: ${Array.isArray(perms) && perms.map(x => `**${x}**`).join(', ') || `**${perms}**`}`,
            RULE_MISSING_PERMISSIONS: (target, perms) => `${target || 'You'} don't have enough permissions to use this command: ${Array.isArray(perms) && perms.map(x => `**${x}**`).join(', ') || `**${perms}**`}`,

            LIVEPLAYER_BUTTON_REMOVE: () => 'Remove',
            LIVEPLAYER_BUTTON_MOVE: () => 'Move',

            LIVEPLAYER_FAVORITE_PLAYLISTS_EMPTY: () => 'You can\'t add a track to a playlist because you don\'t have them, or they are full',
            LIVEPLAYER_FAVORITE_SELECT_PLAYLIST: () => 'Select the playlist you want to add the current track to',
            LIVEPLAYER_FAVORITE_SELECT_PLACEHOLDER: () => 'Not selected',
            LIVEPLAYER_FAVORITE_PLAYLIST_DESCRIPTION: (songs) => `Has ${songs.length} tracks in it`,
            LIVEPLAYER_FAVORITE_TRACK_NOT_ADDED: () => 'The track was not added to the playlist',
            LIVEPLAYER_REMOVE_EMPTY_QUEUE: () => 'It\'s impossible to delete tracks because the queue is empty.',
            LIVEPLAYER_REMOVE_SELECT_TRACK: () => 'Select the track you want to delete.',
            LIVEPLAYER_REMOVE_SELECT_PLACEHOLDER: () => 'Not selected',
            LIVEPLAYER_REMOVE_TRACK_NOT_REMOVED: () => 'The track was not removed from the queue.',
            LIVEPLAYER_MOVE_EMPTY_QUEUE: () => 'It is not possible to move tracks because the queue is empty.',
            LIVEPLAYER_MOVE_SELECT_PLACEHOLDER: () => 'Not selected',
            LIVEPLAYER_MOVE_SELECT_INDEX: () => 'Select the track you want to move.',
            LIVEPLAYER_MOVE_SELECT_DESTINATION: () => 'Select the track (number) you want to move the selected track to.',
            LIVEPLAYER_MOVE_NOT_MOVED: () => 'The track has not been moved.',

            LIVEPLAYER_EMBED_TITLE: (name) => `Music player for ${name}`,
            LIVEPLAYER_EMBED_DESCRIPTION: (np, queueText) => `Now playing [${np.info.title}](${np.info.uri || 'https://lolicon.su'})\nRequest by: <@${np.info.requested}>\n\n**List of tracks in the queue:**\n${queueText.length ? queueText : 'Queue is empty...'}`,
            NOTHING_PLAYING_TOPIC: () => 'Nothing is playing now',

            COMMAND_EFFECTS_RESET_MISSING_PERMISSIONS: () => 'You can\'t reset the effects parameters. Ask someone with `Dj` role to do it.',
            COMMAND_EFFECTS_RESET: () => 'The effects parameters have been successfully reset.',

            COMMAND_STATS_INFORMATION: (guilds, users, memoryUsage, shardId, totalMem) => `Guilds: \`${guilds}\`\nUsers: \`${users}\`\nMemory usage: \`${memoryUsage} MB\`\n\n**The guild is on a shard \`#${shardId}\`**`,
            COMMAND_STATS_MUSIC_NODE_INFORMATION: (players, playingPlayers, memoryUsage, uptime) => `Players: \`${players}\`\nPlaying players: \`${playingPlayers}\`\nMemory usage: \`${memoryUsage} MB\`\n **Launched <t:${uptime}:R>**`,

            COMMAND_LYRICS_TRACK_NOT_FOUND: () => 'Nothing was found.',
            COMMAND_LYRICS_FAILED: () => 'Lyrics load failed.',

            PREMIUM_GUILDS_ONLY: () => 'This feature is only available for premium users or servers. To get a premium subscription, see the information in the \`/premium info\`.\n\nIf you do not have the opportunity to subscribe, then you can get 12 hours of premium by voting for the bot on [monitoring](https:\\/\\/top.gg/bot/661765685017575424/vote).',
            COMMAND_RADIO_LOAD_FAILED: () => 'The specified radio station could not be loaded. Try again.',
            COMMAND_RADIO_STREAM_LOADED: (name) => `Radio station **${name}** added to the queue.`,
            COMMAND_RADIO_NOW_PLAYING: (name) => `Now playing radio station **${name}**.`,
            COMMAND_RADIO_SELECT: (name) => `Select a **\`${name}\`** radio station from the list below:`,
            COMMAND_RADIO_SELECT_PLACEHOLDER: () => 'Select radio station',
            COMMAND_RADIO_SELECTION_CANCELLED: () => 'Action canceled.',

            COMMAND_PREMIUM_NOT_AVAILABLE: () => 'There are no available server premium activations on your account.',
            COMMAND_PREMIUM_ALREADY_ACTIVATED: (ends) => `The server has already activated a premium subscription, which is expiring on: <t:${ends}>.`,
            COMMAND_PREMIUM_ACTIVATED: () => 'You have successfully activated a monthly premium subscription on this server.',
            COMMAND_PREMIUM_INFO_TITLE: () => 'Subscription Information',
            COMMAND_PREMIUM_INFORMATION: () => `By purchasing a premium subscription, you support the work of the bot, and also get perks in return.\n\n**List of perks: **\n\`\`\`md\n# Radio command, that allows you to play specified radio station.\n# Filter command, that allows you to control music playback effects\n# The maximum number of tracks in the queue will be increased from 300 to 500 tracks.\n# The bot will not leave the voice channel if there is no one left in it.\`\`\`\n\nOne month of premium subscription costs $2. You can donate to any wallet/service listed below:\n\nhttps://donatello.to/shizofreniya\nhttps://patreon.com/YukikazeMusic\n\n**\`BTC - bc1qycprjtwgtgaaqppyr9lw6c50ga8kmm7x7axx9w\`**\n**\`ETH - 0xC3BBD91D59eB547e9164236622D16Cc4Cb2A57B8\`**\n**\`BNB - bnb1razwujhxln4ze6dkzxr543tvr6uju40t6k64qn\`**\n**\`LTC - LVpyzEEShshePXQQQksiTRZKg2gP64TNp4\`**\n\nBefore you donate, send a PM (\`shizofreniya.#2233\`) to get a premium in the bot. If you do not have the opportunity to subscribe, then you can get 12 hours of premium by voting for the bot on **[monitoring](https://top.gg/bot/661765685017575424/vote)**\n`,
            COMMAND_PREMIUM_AVAILABLE_SUBSCRIPTIONS: (count) => `\nYou have **\`${count}\`** available activations. Use **\`/premium activate\`** to activate premium features on your serverg.`,
            COMMAND_PREMIUM_GUILD_ENDS: (ends) => `\n**A premium subscription is activated on your server, which expires on <t:${ends}>.**`,
            COMMAND_PREMIUM_USER_ENDS: (ends) => `\n**You have an active premium subscription, which expires on <t:${ends}>.**`,

            COMMAND_VK_USER_USER_NOT_FOUND: () => 'The user was not found, please check the id.',
            COMMAND_VK_USER_TRACKS_NOT_LOADED: () => 'Unable to load tracks, please change your privacy settings.',
            COMMAND_VK_USER_LOADED: (provider, name, size, failed, queueMode) => {
                let res = `${provider} Playlist **\`${name || 'Unknown playlist'}\`** is loaded (**\`${size}\`** ${plural(size, 'track', 'tracks', 'tracks')}).${failed && failed > 1 ? `\n${failed} ${plural(failed, 'track', 'tracks', 'tracks')} were not queued (they are not available in the country where the server is located` : ''}`;
                
                switch(queueMode) {
                    case 'shuffle':
                        res += '\nQueue mode modifier detected, tracks will play in random order.';
                        break;

                    case 'single':
                        res += '\nQueue mode modifier detected, music player has been looped.';
                        break;

                    case 'queue':
                        res += '\nQueue mode modifier detected, music player\'s queue was looped.';
                        break;

                    case 'disable':
                        res += '\nQueue mode modifier detected, queue loop is disabled.';
                        break;
                }

                return res;
            },

            COMMAND_VK_SEARCH_NO_MATCHES: () => 'Nothing found for your request.',
            COMMAND_SOUNDCLOUD_SEARCH_NO_MATCHES: () => 'Nothing found for your request.',
            COMMAND_YANDEX_SEARCH_NO_MATCHES: () => 'Nothing found for your request.',
            COMMAND_ZVUK_SEARCH_NO_MATCHES: () => 'Nothing found for your request.',

            COMMAND_SETTINGS_INFO_TITLE: (name) => `Server settings for ${name}`,
            COMMAND_SETTINGS_INFO_DESCRIPTION: (language, djRoleID, liveplayerChannelID) => `Language: **\`${language}\`**\nDJ role: ${djRoleID ? `<@&${djRoleID}>` : '**\`Not installed\`**'}\nLiveplayer: ${liveplayerChannelID ? `<#${liveplayerChannelID}>` : '**\`Not installed\`**'}`,

            EFFECTS_INFO_DESCRIPTION: () => 'Shows effect options.',
            EFFECTS_CLEAR_DESCRIPTION: () => 'Resets all set effect parameters.',
            EFFECTS_BASS_DESCRIPTION: () => 'Sets a bass-boost to the current playback.',
            EFFECTS_BASS_MODE_DESCRIPTION: () => 'Bass-boost mode',
            EFFECTS_KARAOKE_DESCRIPTION: () => 'Turns on karaoke mode for the current playback.',
            EFFECTS_KARAOKE_MODE_DESCRIPTION: () => 'Karaoke mode',
            EFFECTS_ROTATION_DESCRIPTION: () => 'Sets a rotation effect to the current playback.',
            EFFECTS_ROTATION_MODE_DESCRIPTION: () => 'Rotation mode',

            LOOP_DESCRIPTION: () => 'Switches the loop mode for the current playback.',
            LOOP_MODE_DESCRIPTION: () => 'Mode',

            LYRICS_DESCRIPTION: () => 'Searches for lyrics for the current or specified song.',
            LYRICS_NAME_DESCRIPTION: () => 'The songs title',

            NP_DESCRIPTION: () => 'Shows information about the current playback.',

            PAUSE_DESCRIPTION: () => 'Pauses the player.',

            PING_DESCRIPTION: () => 'Shows the ping of the bot.',

            PLAY_DESCRIPTION: () => 'Searches for a track for the specified query or link.',
            PLAY_QUERY_DESCRIPTION: () => 'Query',
            PLAY_MODE_DESCRIPTION: () => 'Queue repeat mode',

            PREMIUM_ACTIVATE_DESCRIPTION: () => 'Activates a premium subscription on the server.',
            PREMIUM_INFO_DESCRIPTION: () => 'Shows subscription information.',

            PLAYLIST_LIST_DESCRIPTION: () => 'Shows a list of your playlists.',
            PLAYLIST_CREATE_DESCRIPTION: () => 'Creates a playlist with the specified name.',
            PLAYLIST_CREATE_NAME_DESCRIPTION: () => 'Playlist name',
            PLAYLIST_DELETE_DESCRIPTION: () => 'Deletes the specified playlist.',
            PLAYLIST_DELETE_NAME_DESCRIPTION: () => 'Playlist name',
            PLAYLIST_PLAY_DESCRIPTION: () => 'Plays the specified playlist.',
            PLAYLIST_PLAY_NAME_DESCRIPTION: () => 'Playlist name',
            PLAYLIST_PLAY_MODE_DESCRIPTION: () => 'Queue repeat mode',
            PLAYLIST_INFO_DESCRIPTION: () => 'Shows the list of tracks in your playlist.',
            PLAYLIST_INFO_NAME_DESCRIPTION: () => 'Playlist name',
            PLAYLIST_INFO_PAGE_DESCRIPTION: () => 'Page',
            PLAYLIST_ADD_DESCRIPTION: () => 'Adds a track to your playlist.',
            PLAYLIST_ADD_NAME_DESCRIPTION: () => 'Playlist name',
            PLAYLIST_ADD_QUERY_DESCRIPTION: () => 'Query',
            PLAYLIST_REMOVE_DESCRIPTION: () => 'Removes a track from your playlist.',
            PLAYLIST_REMOVE_NAME_DESCRIPTION: () => 'Playlist name',
            PLAYLIST_REMOVE_INDEX_DESCRIPTION: () => 'Номер трека',
            PLAYLIST_RENAME_DESCRIPTION: () => 'Renames your playlist.',
            PLAYLIST_RENAME_NAME_DESCRIPTION: () => 'Playlist name',
            PLAYLIST_RENAME_NEW_DESCRIPTION: () => 'New playlist name',
            PLAYLIST_PUBLIC_DESCRIPTION: () => 'Changes the privacy settings of your playlist.',
            PLAYLIST_PUBLIC_NAME: () => 'Playlist name',
            PLAYLIST_PUBLIC_PRIVACY: () => 'Playlist privacy',

            QUEUE_LIST_DESCRIPTION: () => 'Returns the queue for this server.',
            QUEUE_LIST_PAGE_DESCRIPTION: () => 'Page',
            QUEUE_REMOVE_DESCRIPTION: () => 'Removes the specified track or tracks from the queue.',
            QUEUE_REMOVE_INDEX_DESCRIPTION: () => 'Track position',
            QUEUE_REMOVE_COUNT_DESCRIPTION: () => 'Number of tracks',
            QUEUE_MOVE_DESCRIPTION: () => 'Moves tracks in the queue.',
            QUEUE_MOVE_INDEX_DESCRIPTION: () => 'Track position',
            QUEUE_MOVE_DESTINATION_DESCRIPTION: () => 'New track position',

            RADIO_DESCRIPTION: () => 'Adds the specified radio station to the queue.',
            RADIO_STATION_DESCRIPTION: () => 'Radiostation',
            
            REPLAY_DESCRIPTION: () => 'Starts playing the track from the beginning.',

            RESUME_DESCRIPTION: () => 'Unpauses the player.',

            SOUNDCLOUD_SEARCH_DESCRIPTION: () => 'Search tracks on SoundCloud',
            SOUNDCLOUD_SEARCH_QUERY_DESCRIPTION: () => 'Query',
            SOUNDCLOUD_SEARCH_MODE_DESCRIPTION: () => 'Queue repeat mode',

            SEEK_DESCRIPTION: () => 'Rewinds the track to the specified position.',
            SEEK_TIME_DESCRIPTION: () => 'Time',

            SETTINGS_INFO_DESCRIPTION: () => 'Shows settings info.',
            SETTINGS_LANGUAGE_DESCRIPTION: () => 'Changes the language of the bot.',
            SETTINGS_LANGUAGE_LANG_DESCRIPTION: () => 'Languge',
            SETTINGS_DJ_DESCRIPTION: () => 'Sets the DJ role.',
            SETTINGS_DJ_ROLE_DESCRIPTION: () => 'Role',
            SETTINGS_LIVEPLAYER_SET_DESCRIPTION: () => 'Sets the channel for the liveplayer.',
            SETTINGS_LIVEPLAYER_SET_CHANNEL_DESCRIPTION: () => 'Channel',
            SETTINGS_LIVEPLAYER_CREATE_DESCRIPTION: () => 'Creates the liveplayer channel.',
            SETTINGS_LIVEPLAYER_REMOVE_DESCRIPTION: () => 'Removes the liveplayer channel.',

            SHUFFLE_DESCRIPTION: () => 'Shuffles the tracks in the queue.',

            SKIP_DESCRIPTION: () => 'Skips the current track.',
            
            STATS_DESCRIPTION: () => 'Shows bot statistics.',

            STOP_DESCRIPTION: () => 'Stops music playback for this server.',
            CLEAR_DESCRIPTION: () => 'Clears queue.', 

            VK_USER_DESCRIPTION: () => 'Plays the specified number of saved VK user tracks.',
            VK_USER_USER_DESCRIPTION: () => 'User ID',
            VK_USER_COUNT_DESCRIPTION: () => 'Number of tracks',
            VK_USER_OFFSET_DESCRIPTION: () => 'Start position',
            VK_USER_MODE_DESCRIPTION: () => 'Queue repeat mode',

            VK_SEARCH_DESCRIPTION: () => 'Search tracks on VK.',
            VK_SEARCH_QUERY_DESCRIPTION: () => 'Query',
            VK_SEARCH_MODE_DESCRIPTION: () => 'Queue repeat mode',

            VOLUME_DESCRIPTION: () => 'Changes the volume level for this server.',
            VOLUME_LEVEL_DESCRIPTION: () => 'Volume level',

            VOTESKIP_DESCRIPTION: () => 'Vote to skip the current track.',

            YANDEX_SEARCH_DESCRIPTION: () => 'Search tracks on Yandex.Music.',
            YANDEX_SEARCH_QUERY_DESCRIPTION: () => 'Query',
            YANDEX_SEARCH_MODE_DESCRIPTION: () => 'Queue repeat mode',

            ZVUK_SEARCH_DESCRIPTION: () => 'Search tracks on Zvuk',
            ZVUK_SEARCH_QUERY_DESCRIPTION: () => 'Query',
            ZVUK_MODE_DESCRIPTION: () => 'Queue repeat mode',

            COMMAND_SETTINGS_ANALYTICS_RESET: () => 'All collected analytics on this server were successfully reset.',
            COMMAND_SETTINGS_ANALYTICS_SET: (isEnabled) => `Analytics collection is ${isEnabled ? 'enabled' : 'disabled'} on this server.`,

            COMMAND_ANALYTICS_TITLE: () => 'Information about listened tracks on this server',
            COMMAND_ANALYTICS_LISTENED: () => '**Listened:**\n',
            COMMAND_ANALYTICS_TOP: () => 'Most popular tracks:',
            COMMAND_ANALYTICS_INFO: (size, length) => `In total on this server listened ${size} ${plural(size, 'track', 'tracks', 'tracks')} with a total length of ${length}.`,
            COMMAND_ANALYTICS_TRACK: (index, track) => `\`[${index}]\` **[${track.author} — ${track.title}](${track.url})** was listened **${track.count} times**`,

            COMMAND_ANALYTICS_DESCRIPTION: () => 'Displays a list of tracks that have been listened to on this server',
            COMMAND_SETTINGS_ANALYTICS_DESCRIPTION: () => 'Manages analytics settings',
            COMMAND_SETTINGS_ANALYTICS_STATUS_DESCRIPTION: () => 'Enables or disables analytics collection',
            COMMAND_SETTINGS_ANALYTICS_STATUS_STATE_DESCRIPTION: () => 'State',
            COMMAND_SETTINGS_ANALYTICS_RESET_DESCRIPTION: () => 'Resets all collected analytics data on this server'
        }
    }
}