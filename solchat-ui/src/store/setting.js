/**
 * @fileoverview System Settings State Management Module
 * This module is responsible for managing and persisting system global settings, including theme, API key, model configuration, etc.
 * Using Vuex for state management and localStorage for data persistence
 */
import cache from '@/util/cache';
import bg from '@/assets/images/bg2.jpg'

const settingStorage = JSON.parse(localStorage.getItem('settingStorage')) || ''

/**
 * defaultSettings is the default configuration when the project runs for the first time
 * To keep the project structure simple, it's not written as a separate configuration file
 */
const defaultSettings = {
    /******************************** System Settings Dialog Parameters ********************************/
    // System theme
    theme: 'light',
    // Background image
    bg: bg,
    // Whether to display response statistics
    chat_detail: true,
    // api_key
    api_key_map: {
        Ali_DashScope: "",
        Baidu_QianFan: "",
        Moonshot_AI: "",
        Xunfei_Spark: "",
        Zhipu_BigModel: "",
        OpenAI: {
            endpoint: "",
            api_key: "",
            model_name: ""
        },
        Local: ""
    },
    // Platform
    platform: 'Xunfei_Spark',
    // Whether to enable multi-turn dialogue
    memory: true,
    // Historical conversation rounds limit
    memory_limit: 3,
    // Model configuration
    model_config: {
        // Model type
        type: "llm",
        // Model name
        name: "Spark Lite 🆓",
        // Model series
        series: "xunfei",
        // Model version
        version: "spark lite",
        // Pre-processing group index
        pre_method: "text_xunfei",
        // Post-processing group index
        post_method: "add"
    },
    /******************************** System Default Parameters ********************************/
    // Number of files allowed for single upload in input box
    upload_limit: 1,
    // Allowed file types for input box (currently only images as other multimodal models are not integrated)
    upload_type: "image/",
    // Input box file size limit: 2MB
    upload_size: 2,
    /******************************** Knowledge Base Parameters ********************************/
    // Maximum character length for a chunk
    chunk_size: 500,
    // File size limit: 5MB
    kb_file_size: 5,
    // Number of retrievals
    recall_count: 3,
    // Selected knowledge base
    selected_repoId: '',
    // Knowledge base enable status
    kb_enabled: false,
    /******************************** Web Search Parameters ********************************/
    // Whether to enable web search
    web_search_enabled: false
}

const setting = {
    state: Object.keys(defaultSettings).reduce((acc, key) => {
        acc[key] = settingStorage?.[key] ?? defaultSettings[key];
        return acc;
    }, {}),

    mutations: {
        CHANGE_SETTING: (state, { key, value }) => {
            if (state.hasOwnProperty(key)) {
                state[key] = value;
                cache.local.setJSON('settingStorage', state);
            }
        }
    },

    actions: {
        changeSetting({ commit }, data) {
            commit('CHANGE_SETTING', data)
        }
    }
}

if (!settingStorage) {
    cache.local.setJSON('settingStorage', defaultSettings)
}

export default setting
