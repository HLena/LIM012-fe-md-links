const brokenLinks = (links) => links.filter((link) => link.statusText === 'Fail').length;

const uniqueLinks = (links) => {
  const counts = {};
  links.forEach((link) => { counts[link.href] = 1 + (counts[link.href] || 0); });
  return Object.keys(counts).length;
};

const getStatsOfLinks = (links, pass) => {
  let stats = {};
  if (pass === false) {
    stats = { total: links.length, unique: uniqueLinks(links) };
  } else {
    stats = { total: links.length, unique: uniqueLinks(links), broken: brokenLinks(links) };
  }
  return stats;
};

module.exports = {
  getStatsOfLinks, brokenLinks, uniqueLinks,
};
