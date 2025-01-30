<template>
    <div class="about-container">
        <div class="title-section">
            <img :src="logoSrc" class="logo" alt="logo" />

            <span class="title">THChatUI</span>
            <p class="subtitle">Welcome to <span>THChatUI</span>, a Web conversation management WebUI based on <span>Vue</span> and <span>Element Plus</span>.
            </p>

            <p class="description">
                THChatUI is a large model WebUI designed for data-sensitive individuals/organizations.<br />
                Frontend uses Vue which is more suitable for Chinese developers~<br />
                Backend uses Python's Flask for quick API setup, with several call examples provided (not mandatory).<br />
                No additional database needed, data stored in browser cache.<br />
            </p>

            <div class="button-group">
                <el-button @click="openLink('https://x.com')">X(twitter)</el-button>
                
            </div>
        </div>

        <!-- Changelog -->
        <div class="changelog-section">
            <h2>Changelog</h2>

            <div class="version-block">
                <h3>v2.0.0 - 2025.01.12</h3>
                <ul>
                    <li>[fix] Refactored backend Python script examples, provided API examples for conversation models, image understanding models, and image conversation models</li>
                    <li>[fix] Refactored backend Python script examples, integrated regular chat, web search, and knowledge base features for conversation models</li>
                    <li>[add] Added support for Moonshot AI Kimi platform</li>
                    <li>[add] Added support for OpenAI-style EndPoint interface</li>
                    <li>[add] Built-in frosted glass theme wallpapers</li>
                    <li>[add] Multi-language support (Simplified Chinese, English)</li>
                    <li>[add] Integrated Zhipu AI's image generation model</li>
                    <li>[add] Added web search functionality</li>
                    <li>[add] Integrated image upload model</li>
                    <li>[add] Added knowledge base functionality, fully frontend-dependent, supporting file upload, segmentation, and search</li>
                    <li>[upd] Refactored underlying storage using browser's IndexedDB, storage space no longer limited</li>
                    <li>[upd] Optimized formula display plugin import method from CDN to local import</li>
                    <li>[upd] Optimized GitHub Pages deployment script</li>
                </ul>
            </div>
            
            <div class="version-block">
                <h3>v1.1.3 - 2025.01.01</h3>
                <ul>
                    <li>[fix] Refactored conversation preprocessing to adapt to different platforms and support image input</li>
                    <li>[add] Added image viewing in conversation cards</li>
                    <li>[add] Integrated Alibaba Cloud Bailian platform's vision model</li>
                </ul>
            </div>

            <div class="version-block">
                <h3>v1.1.2 - 2025.01.01</h3>
                <ul>
                    <li>[fix] Refactored cache data format for easier integration with backend database interfaces</li>
                    <li>[fix] Improved mobile sidebar user experience</li>
                    <li>[add] Integrated vision model</li>
                    <li>[add] Dialog image upload</li>
                    <li>[add] Image paste upload</li>
                </ul>
            </div>

            <div class="version-block">
                <h3>v1.1.1 - 2024.12.29</h3>
                <ul>
                    <li>[upd] Optimized popup page UI</li>
                    <li>[upd] Mobile experience optimization: overlay, auto-close sidebar after clicking</li>
                </ul>
            </div>

            <div class="version-block">
                <h3>v1.1.0 - 2024.12.29</h3>
                <ul>
                    <li>[fix] Refactored third-party platform request pipeline and configuration architecture</li>
                    <li>[fix] Refactored color schemes and configuration libraries for three themes</li>
                    <li>[add] Added background image upload feature</li>
                    <li>[add] Added unified API key management for all platforms</li>
                    <li>[add] Added header bar for displaying conversation title and current configuration</li>
                    <li>[add] Basic markdown formula display support</li>
                    <li>[upd] Optimized sidebar UI to flat design</li>
                    <li>[upd] Optimized model selection page, changed dropdown to list radio selection</li>
                    <li>[upd] Optimized sidebar collapse button style and icon</li>
                    <li>[upd] Optimized input box UI, integrated file upload, knowledge base selection, and web search options</li>
                    <li>[upd] Optimized project icons, fully utilizing flat design icons</li>
                    <li>[upd] Changed some pages to popup display mode</li>
                </ul>
            </div>

            <div class="version-block">
                <h3>v1.0.2 - 2024.12.21</h3>
                <ul>
                    <li>[fix] Fixed stream transmission issues with microsoft/fetch-event-source library when switching browser pages</li>
                    <li>[add] Added Baidu Qianfan platform LLM support</li>
                    <li>[add] Added single conversation card deletion feature</li>
                    <li>[add] Added plain text copy feature for AI responses</li>
                    <li>[add] Added user message folding feature (when exceeding 3 lines)</li>
                    <li>[upd] Theme optimization and input box style improvements</li>
                </ul>
            </div>

            <div class="version-block">
                <h3>v1.0.0 - 2024.7.7</h3>
                <ul>
                    <li>Initial version release</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import logoDark from '../../assets/images/logo_dark_2480.png'
import logoLight from '../../assets/images/logo_light_2480.png'

export default {
    name: "About",
    data() {
        return {
            // QR code display status
            qrCodeVisible: false
        }
    },
    computed: {
        // Return corresponding logo image based on current theme
        logoSrc() {
            const theme = this.$store.state.setting.theme
            return theme === 'dark' ? logoLight : logoDark
        }
    },
    methods: {
        /**
         * Open specified link in new tab
         * @param {string} url - URL to open
         */
        openLink(url) {
            window.open(url, '_blank');
        },
        
        /**
         * Toggle QR code display status
         */
        showQrCode() {
            this.qrCodeVisible = !this.qrCodeVisible;
        }
    }
};
</script>

<style scoped>
.about-container {
    color: var(--common-color);
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;

    /**
     * Header section
     */
    >.title-section {
        text-align: center;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logo {
            width: 88px;
            height: 88px;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        >.title {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
        }

        >.subtitle {
            font-size: 14px;
            font-weight: 400;

            span {
                color: #3f68ff;
            }
        }
    }

    /**
     * Changelog section
     */
    .changelog-section {
        font-size: 14px;
        text-align: left;

        .version-block h3 {
            color: #409EFF;
            margin-bottom: 10px;
        }

        .version-block ul {
            list-style-type: disc;
            padding-left: 20px;
        }

        .version-block li {
            margin-bottom: 2px;
        }
    }

    .qrcode-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .qrcode-image {
        width: 150px;
        height: 150px;
    }
}
</style>
