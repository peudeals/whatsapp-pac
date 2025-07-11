function FindProxyForURL(url, host) {
  if (shExpMatch(host, "www.google.com")) {
    return "PROXY 0.0.0.0:8080";
  }
  return "DIRECT";
}
