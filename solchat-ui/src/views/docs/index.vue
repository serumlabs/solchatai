<template>
    <div>

        <el-row :gutter="24" justify="center" style="margin-left: 0;margin-right: 0;">

            <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="12">
                <h2 class="doc-title">Documentation</h2>
                
                <el-tabs tab-position="top" style="height: 200px" class="demo-tabs centered-tabs">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-tab-pane label="Introduction">
                            <v-md-preview :text="intro_md" @copy-code-success="handleCopyCodeSuccess"></v-md-preview>
                        </el-tab-pane>
                        <el-tab-pane label="Tutorial">
                            <v-md-preview :text="tutorial_md" @copy-code-success="handleCopyCodeSuccess"></v-md-preview>
                        </el-tab-pane>
                        <el-tab-pane label="Quick Development">
                            <v-md-preview :text="quickDev_md" @copy-code-success="handleCopyCodeSuccess"></v-md-preview>
                        </el-tab-pane>
                        <el-tab-pane label="Internationalization">
                            <v-md-preview :text="i18n_md" @copy-code-success="handleCopyCodeSuccess"></v-md-preview>
                        </el-tab-pane>
                        <el-tab-pane label="Advanced Development">
                            <v-md-preview :text="senior_md" @copy-code-success="handleCopyCodeSuccess"></v-md-preview>
                        </el-tab-pane>
                    </el-col>
                </el-tabs>
            </el-col>

        </el-row>

    </div>
</template>

<script>
import introContent from '@/assets/docs/intro.md?raw'
import tutorialContent from '@/assets/docs/tutorial.md?raw'
import quickDevContent from '@/assets/docs/quick_dev.md?raw'
import i18nContent from '@/assets/docs/i18n.md?raw'
import seniorContent from '@/assets/docs/senior.md?raw'

export default {
    name: 'Docs',
    data() {
        return {
            intro_md: introContent,
            tutorial_md: tutorialContent,
            quickDev_md: quickDevContent,
            i18n_md: i18nContent,
            senior_md: seniorContent
        }
    },
    created() {
        
    },
    methods: {
        /**
         * Handle successful code copy
         */
        handleCopyCodeSuccess() {
            this.$notify({
                title: this.$t('ChatCard.notifications.codeCopySuccess'),
                type: 'success',
            });
        },
    },
};
</script>

<style scoped>
:deep(.el-tabs__item, .el-tabs__item label)[aria-selected="false"] {
    color: var(--common-color);
    font-weight: bold;
}

:deep(.el-form-item__label) {
    color: var(--common-color);
}

.doc-title {
    text-align: center;
    margin-bottom: 20px;
}

.centered-tabs :deep(.el-tabs__header) {
    display: flex;
    justify-content: center;
}

.centered-tabs :deep(.el-tabs__nav-wrap) {
    justify-content: center;
}

/**
 * Markdown content area padding
 */
:deep(.vuepress-markdown-body:not(.custom)) {
    padding: 0.4rem 0 0.1rem 0;
}

/**
 * Mobile adaptation
 */
@media (max-width: 419px) {
    :deep(.vuepress-markdown-body div[class*=v-md-pre-wrapper-]) {
        margin: 0;
    }
}

/**
 * Message text base style
 */
:deep(.vuepress-markdown-body) {
    font-size: 14px;
    color: var(--common-color);
    background: none;
    word-wrap: break-word;
}
</style>
