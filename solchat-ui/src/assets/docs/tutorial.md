[[toc]]

## API KEY Guide
If you just want a friendly interface for your API KEY, you only need to apply for a KEY from the respective platform and then enter the corresponding platform's API KEY in the settings page for quick use.

For OpenAI-style API KEYs, we're not just referring to OpenAI company's ChatGPT API KEY, but rather to the three parameters (URL, KEY, Model) provided by all service providers that follow the OpenAI interface specification.


## Usage Guide

If you need to deploy THChatUI locally, please refer to the "Quick Development" section.

### Settings - Models

Here you can set the model you want to use. The default is iFlytek's Spark lite model.

First, ensure that the API KEY for the corresponding platform has been entered, then select the platform, and finally select the model.

Models marked with 🆓 are free to use; those marked with `Web` support internet search.

> Note: If a model name is marked with `Web`, it means it supports internet search, but you need to enable it manually. While free models don't cost money, you still need to apply for an API KEY to use them.

### Settings - General

The number of historical conversation rounds indicates how many rounds of dialogue you want the model to remember during the chat. More rounds mean the model can remember more conversations, but it also consumes more tokens.

### Settings - Knowledge Base

The upload, segmentation, retrieval, and storage of the knowledge base are all implemented in the browser, which means it consumes local CPU resources.

The knowledge base currently supports importing PDF, TXT, DOCX, and DOC format files. After uploading, the file content is automatically parsed and split according to the chunk_size value, and the split content is stored in the browser database.

You can set the chunk_size value, which represents the maximum number of characters in a segment. You can also set the number of chunks to retrieve, indicating how many chunks the model can retrieve information from during the conversation.

This also has its pros and cons - the more chunks retrieved, the more information the model can remember, but it also consumes more tokens.

> Note: When using the knowledge base, you need to enable it in "Settings" — "Knowledge Base" and then select the knowledge base name you want to mount.

### Knowledge Base - View

You can click the "View" button in the upper right corner of "Knowledge Base" to see how many chunks are in the knowledge base and the detailed content of each chunk.


## Cache and Storage

In "Settings" — "Clear Cache", you can clear browser cache, including chat history, knowledge base, settings, etc.

You can also view stored data details in `Local Storage` and `IndexedDB` under the "Application" tab in developer mode.