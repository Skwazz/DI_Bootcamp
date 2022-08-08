let url = window.location.href;
try {
  let json = Object.fromEntries(
    url
      .split("?")[1]
      .split("&")
      .map((e) => e.split("="))
  );
  let jsoned = JSON.stringify(json);
  document.querySelector("form").textContent = jsoned;
  console.log(json);
} catch {
  null;
}
