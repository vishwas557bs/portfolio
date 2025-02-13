function copyToClipboard() {
    const text = `> Based in City
> Currently traveling in
>> India && Thailand && New Zealand`;
    navigator.clipboard.writeText(text).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
