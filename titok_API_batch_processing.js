<script>
  !(function (win, doc, sdk_url, b, a, m) {
    win[a] = win[a] || function () {
      (win[a].q = win[a].q || []).push(arguments);
    };
    b = doc.createElement("script");
    m = doc.getElementsByTagName("script")[0];
    b.async = 1;
    b.src = sdk_url;
    m.parentNode.insertBefore(b, m);
  })(window, document, "https://s0.bytecdn.cn/pixel.sdk.js", "ttq");

  ttq.load("C8JRFTKLGSOAGACE7860");
  ttq.page();

  function sendBatchEvents(events) {
    events.forEach((event) => {
      ttq.track(event.name, event.properties);
    });
  }

  const events = [
    {
      name: "AddToCart",
      properties: {
        content_id: "product_id",
        content_name: "product_123",
        content_type: "product",
        currency: "USD",
        value: 19.99,
      },
    },
    {
      name: "ViewContent",
      properties: {
        content_id: "product_id",
        content_name: "product_123",
        content_type: "product",
        currency: "USD",
        value: 19.99,
      },
    },
  ];

  sendBatchEvents(events);
</script>
