const allResourceTypes = Object.values(
  chrome.declarativeNetRequest.ResourceType
);

const rules = [
  {
    id: 1,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
      responseHeaders: [
        {
          operation: chrome.declarativeNetRequest.HeaderOperation.SET,
          header: "Location",
          value:
            "https://us-east-1.console.aws.amazon.com/console?region=us-east-1#",
        },
      ],
    },
    condition: {
      urlFilter: "https://console.aws.amazon.com/console?hashArgs=%23",
      resourceTypes: allResourceTypes,
    },
  },
];

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: rules.map((rule) => rule.id), // remove existing rules
  addRules: rules,
});
