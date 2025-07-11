function FindProxyForURL(url, host) {
  var blocked = [
    "*.cdn.whatsapp.net",
    "g.whatsapp.net",
    "static.whatsapp.net",
    "pps.whatsapp.net"
  ];
  for (var i = 0; i < blocked.length; i++) {
    if (shExpMatch(host, blocked[i])) {
      return "PROXY 0.0.0.0:8080";
    }
  }
  return "DIRECT";
}