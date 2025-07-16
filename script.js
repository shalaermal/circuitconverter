document.getElementById("date").valueAsDate = new Date();

function convertLine(line, withDate = false, dateStr = "") {
  let base = line.trim().split("/").slice(0, -1).join("/");
  let converted = base.replace(/\s+/g, "").replace(/\//g, ".").replace(/\.+$/, "");
  converted = converted.split(".").filter(Boolean).join(".");

  if (withDate && dateStr) {
    try {
      const date = new Date(dateStr);
      const formatted = `RFC2544.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}.${date.getFullYear()}`;
      return `${converted}.${formatted}`;
    } catch (e) {
      return `${converted}.INVALID_DATE`;
    }
  }

  return converted;
}

function convertWithDate() {
  const input = document.getElementById("circuits_with_date").value.trim();
  const dateStr = document.getElementById("date").value;
  const lines = input.split("\n").filter(line => line.trim() !== "");
  const resultContainer = document.getElementById("output_lines_with_date");
  resultContainer.innerHTML = "";

  lines.forEach((line, index) => {
    const converted = convertLine(line, true, dateStr);

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "10px";
    wrapper.style.marginBottom = "8px";

    const pre = document.createElement("pre");
    pre.id = `converted_line_with_${index}`;
    pre.innerText = converted;

    const btn = document.createElement("button");
    btn.innerText = "📋 Copy";
    btn.onclick = () => {
      navigator.clipboard.writeText(pre.innerText);
    };

    wrapper.appendChild(pre);
    wrapper.appendChild(btn);
    resultContainer.appendChild(wrapper);
  });

  document.getElementById("output_with_date_block").style.display = "block";
}
