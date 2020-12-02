
export { };
declare var window: Window;

declare global {
  interface Window {
    watsonAssistantChatOptions: any;
  }
}

window.watsonAssistantChatOptions = {
  integrationID: "0e38af37-aa0d-4ffb-a18f-c38d1f0e22f7", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "98408b3d-e222-49eb-8956-d42fe3b69e75", // The ID of your service instance.
  onLoad: function (instance: any) { instance.render(); }
};

setTimeout(function () {
  const t = document.createElement('script');
  t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});
