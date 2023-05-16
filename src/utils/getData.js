module.exports = async (url) => {
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
};
